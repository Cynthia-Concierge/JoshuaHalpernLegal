const META_PIXEL_ID = '1225216846384367';
const META_ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const META_API_VERSION = 'v21.0';
const CALENDLY_WEBHOOK_SECRET = process.env.CALENDLY_WEBHOOK_SECRET || '';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const AGENT_ID = 'user_14402270842';

const WORKFLOW_TRIGGER_URL = 'https://app.cynthiaconcierge.com/workflow/trigger';
const WORKFLOW_TRIGGER_SECRET = process.env.WORKFLOW_TRIGGER_SECRET || 'jvgX63jB2sDOb9-CWV79YMdtsqwBw0nWLB6bHmXczUY';

function supabaseHeaders() {
  return {
    apikey: SUPABASE_SERVICE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
    'Content-Type': 'application/json',
    Prefer: 'return=representation',
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { event, payload } = req.body || {};

  // Only handle confirmed bookings
  if (event !== 'invitee.created') {
    return res.status(200).json({ status: 'ignored' });
  }

  const invitee = payload || {};
  const email = invitee.email || '';
  const name = invitee.name || '';
  const phone = invitee.text_reminder_number || '';
  const nameParts = name.split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  // 1. Fire Meta CAPI Schedule event
  if (META_ACCESS_TOKEN) {
    try {
      const crypto = await import('crypto');
      const hashSha256 = (val) => val ? crypto.createHash('sha256').update(val.trim().toLowerCase()).digest('hex') : undefined;

      const eventData = {
        data: [{
          event_name: 'Schedule',
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: 'https://www.legalhalplaw.com/contact',
          action_source: 'website',
          user_data: {
            em: email ? [hashSha256(email)] : undefined,
            fn: firstName ? hashSha256(firstName) : undefined,
            ln: lastName ? hashSha256(lastName) : undefined,
          },
          custom_data: {
            content_name: 'Legal Cost Audit Call',
            content_category: 'legal_services',
          },
        }],
      };

      const resp = await fetch(
        `https://graph.facebook.com/${META_API_VERSION}/${META_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(eventData),
        }
      );
      const json = await resp.json();
      console.log('Meta CAPI Schedule event:', json);
    } catch (capiErr) {
      console.error('Meta CAPI Schedule error (non-fatal):', capiErr.message);
    }
  }

  // 2. Update CRM contact stage to "booked" + add tag so workflow sequence stops
  if (SUPABASE_URL && SUPABASE_SERVICE_KEY) {
    try {
      // Find contact by email or phone
      let contact = null;
      if (email) {
        const emailRes = await fetch(
          `${SUPABASE_URL}/rest/v1/cynthia_contacts?agent_id=eq.${AGENT_ID}&email=eq.${encodeURIComponent(email)}&limit=1`,
          { headers: supabaseHeaders() }
        );
        const results = await emailRes.json();
        if (results?.length) contact = results[0];
      }
      if (!contact && phone) {
        const phoneRes = await fetch(
          `${SUPABASE_URL}/rest/v1/cynthia_contacts?agent_id=eq.${AGENT_ID}&phone=eq.${encodeURIComponent(phone)}&limit=1`,
          { headers: supabaseHeaders() }
        );
        const results = await phoneRes.json();
        if (results?.length) contact = results[0];
      }

      if (contact) {
        // Add "booked-call" tag and update stage
        const existingTags = contact.tags || [];
        const updatedTags = [...new Set([...existingTags, 'booked-call'])];

        await fetch(
          `${SUPABASE_URL}/rest/v1/cynthia_contacts?id=eq.${contact.id}`,
          {
            method: 'PATCH',
            headers: supabaseHeaders(),
            body: JSON.stringify({
              stage: 'booked',
              tags: updatedTags,
              updated_at: new Date().toISOString(),
            }),
          }
        );
        console.log(`Contact ${contact.name} (${email}) updated to booked`);
      }
    } catch (crmErr) {
      console.error('CRM update error (non-fatal):', crmErr.message);
    }
  }

  // 3. Trigger booking event so workflow engine can cancel pending sequences
  try {
    await fetch(WORKFLOW_TRIGGER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Workflow-Secret': WORKFLOW_TRIGGER_SECRET,
      },
      body: JSON.stringify({
        type: 'calendar.booking.created',
        agentId: AGENT_ID,
        businessId: 'josh-halpern-law',
        contactName: name,
        contactEmail: email,
        contactPhone: phone,
        source: 'calendly',
      }),
    });
  } catch (wfErr) {
    console.error('Workflow trigger error (non-fatal):', wfErr.message);
  }

  return res.status(200).json({ status: 'ok' });
}

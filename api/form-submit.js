const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const AGENT_ID = 'user_14402270842';

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

  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const { tags, ...formData } = req.body;

  const name = [formData.first_name, formData.last_name].filter(Boolean).join(' ').trim();
  const phone = formData.phone || '';
  const email = formData.email || '';

  if (!phone && !email) {
    return res.status(400).json({ error: 'Phone or email is required' });
  }

  const custom_fields = {};
  if (formData.business_type) custom_fields.business_type = formData.business_type;
  if (formData.current_legal_spend) custom_fields.current_legal_spend = formData.current_legal_spend;
  if (formData.main_need) custom_fields.main_need = formData.main_need;
  if (formData.state) custom_fields.state = formData.state;
  if (formData.intake_summary) custom_fields.intake_summary = formData.intake_summary;
  if (formData.state_of_formation) custom_fields.state_of_formation = formData.state_of_formation;
  if (formData.desired_business_name) custom_fields.desired_business_name = formData.desired_business_name;
  if (formData.backup_business_name) custom_fields.backup_business_name = formData.backup_business_name;

  try {
    // Check if contact already exists by phone or email
    let existingContact = null;

    if (phone) {
      const phoneRes = await fetch(
        `${SUPABASE_URL}/rest/v1/cynthia_contacts?agent_id=eq.${AGENT_ID}&phone=eq.${encodeURIComponent(phone)}&limit=1`,
        { headers: supabaseHeaders() }
      );
      const phoneResults = await phoneRes.json();
      if (phoneResults?.length) existingContact = phoneResults[0];
    }

    if (!existingContact && email) {
      const emailRes = await fetch(
        `${SUPABASE_URL}/rest/v1/cynthia_contacts?agent_id=eq.${AGENT_ID}&email=eq.${encodeURIComponent(email)}&limit=1`,
        { headers: supabaseHeaders() }
      );
      const emailResults = await emailRes.json();
      if (emailResults?.length) existingContact = emailResults[0];
    }

    if (existingContact) {
      // Update existing contact — merge tags and custom fields
      const mergedTags = [...new Set([...(existingContact.tags || []), ...(tags || [])])];
      const mergedCustom = { ...(existingContact.custom_fields || {}), ...custom_fields };

      await fetch(
        `${SUPABASE_URL}/rest/v1/cynthia_contacts?id=eq.${existingContact.id}`,
        {
          method: 'PATCH',
          headers: supabaseHeaders(),
          body: JSON.stringify({
            name: name || existingContact.name,
            email: email || existingContact.email,
            phone: phone || existingContact.phone,
            tags: mergedTags,
            custom_fields: mergedCustom,
            source: existingContact.source || formData.source || 'website',
            source_detail: formData.source || existingContact.source_detail,
            updated_at: new Date().toISOString(),
          }),
        }
      );
    } else {
      // Create new contact
      await fetch(
        `${SUPABASE_URL}/rest/v1/cynthia_contacts`,
        {
          method: 'POST',
          headers: supabaseHeaders(),
          body: JSON.stringify({
            id: crypto.randomUUID(),
            agent_id: AGENT_ID,
            name,
            email: email || null,
            phone: phone || null,
            source: formData.source || 'website',
            source_detail: formData.source || 'Website - Legal Halp',
            stage: 'new',
            tags: tags || [],
            custom_fields,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          }),
        }
      );
    }

    // Log event
    await fetch(
      `${SUPABASE_URL}/rest/v1/cynthia_events`,
      {
        method: 'POST',
        headers: supabaseHeaders(),
        body: JSON.stringify({
          id: crypto.randomUUID(),
          agent_id: AGENT_ID,
          event_type: 'form_submitted',
          source: 'website',
          summary: `Application submitted: ${name} (${formData.source || 'website'})`,
          details: { ...formData, tags },
          occurred_at: new Date().toISOString(),
        }),
      }
    );

    return res.status(200).json({ status: 'ok' });
  } catch (err) {
    console.error('Form submit error:', err);
    return res.status(500).json({ error: 'Failed to process submission' });
  }
}

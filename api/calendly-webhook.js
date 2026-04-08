const META_PIXEL_ID = '1225216846384367';
const META_ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const META_API_VERSION = 'v21.0';
const CALENDLY_WEBHOOK_SECRET = process.env.CALENDLY_WEBHOOK_SECRET || '';

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
  const nameParts = name.split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  // Fire Meta CAPI Schedule event
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

  return res.status(200).json({ status: 'ok' });
}

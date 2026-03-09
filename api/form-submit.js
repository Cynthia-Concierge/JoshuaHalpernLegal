const GHL_BASE = 'https://services.leadconnectorhq.com';

function ghlHeaders(apiKey) {
  return {
    Authorization: `Bearer ${apiKey}`,
    Version: '2021-07-28',
    'Content-Type': 'application/json',
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const GHL_API_KEY = process.env.GHL_API_KEY;
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
  const GHL_WEBHOOK_URL = process.env.GHL_WEBHOOK_URL;

  if (!GHL_API_KEY || !GHL_LOCATION_ID) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const { tags, ...formData } = req.body;
  const headers = ghlHeaders(GHL_API_KEY);

  try {
    // 1. Create contact in GHL with tags
    const contactRes = await fetch(`${GHL_BASE}/contacts/`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        firstName: formData.first_name || '',
        lastName: formData.last_name || '',
        email: formData.email,
        phone: formData.phone,
        source: formData.source || 'Website',
        tags: tags || [],
        locationId: GHL_LOCATION_ID,
      }),
    });

    if (contactRes.ok) {
      // New contact created with tags — done
    } else {
      // If duplicate, find existing contact and add tags
      const errData = await contactRes.json().catch(() => ({}));
      const existingId = errData?.meta?.contactId;

      if (existingId && tags?.length) {
        // GET existing tags, merge with new ones, then PUT
        const getRes = await fetch(`${GHL_BASE}/contacts/${existingId}`, {
          method: 'GET',
          headers,
        });
        const existing = await getRes.json().catch(() => ({}));
        const existingTags = existing?.contact?.tags || [];
        const merged = [...new Set([...existingTags, ...tags])];
        await fetch(`${GHL_BASE}/contacts/${existingId}`, {
          method: 'PUT',
          headers,
          body: JSON.stringify({ tags: merged }),
        });
      }
    }

    // 2. Fire the webhook to trigger existing GHL workflows
    if (GHL_WEBHOOK_URL) {
      await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    }

    return res.status(200).json({ status: 'ok' });
  } catch (err) {
    console.error('Form submit error:', err);
    return res.status(500).json({ error: 'Failed to process submission' });
  }
}

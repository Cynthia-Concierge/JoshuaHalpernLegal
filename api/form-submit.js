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

  try {
    // 1. Create/update contact in GHL with tags via API
    const contactRes = await fetch(
      'https://services.leadconnectorhq.com/contacts/',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GHL_API_KEY}`,
          Version: '2021-07-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.first_name || '',
          lastName: formData.last_name || '',
          email: formData.email,
          phone: formData.phone,
          source: formData.source || 'Website',
          tags: tags || [],
          locationId: GHL_LOCATION_ID,
        }),
      }
    );

    if (!contactRes.ok) {
      const errText = await contactRes.text();
      console.error('GHL contact API error:', contactRes.status, errText);
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

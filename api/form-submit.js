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

  // Fields that map to standard GHL contact properties (not custom fields)
  const coreKeys = new Set([
    'first_name', 'last_name', 'email', 'phone', 'source', 'state',
  ]);

  // Map form field names → GHL custom field keys where they differ
  const fieldKeyMap = {
    intake_summary: 'contact.full_intake_summary',
    state_of_formation: 'contact.choose_your_state_of_formation',
    desired_business_name: 'contact.desired_legal_business_name',
    backup_business_name: 'contact.backup_business_name_optional',
  };

  const customFields = [];
  for (const [key, value] of Object.entries(formData)) {
    if (!coreKeys.has(key) && value) {
      const ghlKey = fieldKeyMap[key] || `contact.${key}`;
      customFields.push({ key: ghlKey, field_value: value });
    }
  }

  const contactPayload = {
    firstName: formData.first_name || '',
    lastName: formData.last_name || '',
    email: formData.email,
    phone: formData.phone,
    source: formData.source || 'Website',
    tags: tags || [],
    locationId: GHL_LOCATION_ID,
    ...(formData.state && { state: formData.state }),
    ...(customFields.length && { customFields }),
  };

  try {
    // 1. Create contact in GHL with tags + custom fields
    const contactRes = await fetch(`${GHL_BASE}/contacts/`, {
      method: 'POST',
      headers,
      body: JSON.stringify(contactPayload),
    });

    if (contactRes.ok) {
      // New contact created with tags + custom fields — done
    } else {
      // If duplicate, find existing contact, merge tags, and update custom fields
      const errData = await contactRes.json().catch(() => ({}));
      const existingId = errData?.meta?.contactId;

      if (existingId) {
        const updatePayload = {};

        if (tags?.length) {
          const getRes = await fetch(`${GHL_BASE}/contacts/${existingId}`, {
            method: 'GET',
            headers,
          });
          const existing = await getRes.json().catch(() => ({}));
          const existingTags = existing?.contact?.tags || [];
          updatePayload.tags = [...new Set([...existingTags, ...tags])];
        }

        if (customFields.length) {
          updatePayload.customFields = customFields;
        }

        if (Object.keys(updatePayload).length) {
          await fetch(`${GHL_BASE}/contacts/${existingId}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(updatePayload),
          });
        }
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

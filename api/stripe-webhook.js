// Stripe webhook → Meta CAPI Purchase event
//
// Receives charge.succeeded and invoice.payment_succeeded from Stripe,
// looks up the customer's PII, hashes it, and sends a Purchase event to Meta CAPI.
// This trains Meta's algorithm to find more buyers (not just form-fillers).
//
// Setup:
//   1. In Stripe Dashboard → Developers → Webhooks, add endpoint:
//      https://www.legalhalplaw.com/api/stripe-webhook
//      Events: charge.succeeded, invoice.payment_succeeded
//   2. Copy the signing secret to STRIPE_WEBHOOK_SECRET env var on Vercel.
//   3. STRIPE_SECRET_KEY and META_CAPI_ACCESS_TOKEN must also be set.

import crypto from 'crypto';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
const META_PIXEL_ID = '1225216846384367';
const META_ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const META_API_VERSION = 'v21.0';

// Vercel raw body config — Stripe signature verification needs the raw bytes
export const config = { api: { bodyParser: false } };

async function readRawBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks);
}

function verifyStripeSignature(rawBody, sigHeader, secret) {
  if (!sigHeader || !secret) return false;
  const parts = Object.fromEntries(sigHeader.split(',').map(p => p.split('=')));
  const t = parts.t;
  const v1 = parts.v1;
  if (!t || !v1) return false;
  const signed = `${t}.${rawBody.toString('utf8')}`;
  const expected = crypto.createHmac('sha256', secret).update(signed).digest('hex');
  try {
    return crypto.timingSafeEqual(Buffer.from(v1, 'hex'), Buffer.from(expected, 'hex'));
  } catch { return false; }
}

const sha = (s) => s ? crypto.createHash('sha256').update(String(s).toLowerCase().trim()).digest('hex') : undefined;

async function stripeGet(path) {
  const r = await fetch(`https://api.stripe.com/v1/${path}`, {
    headers: { Authorization: 'Basic ' + Buffer.from(STRIPE_SECRET_KEY + ':').toString('base64') },
  });
  if (!r.ok) throw new Error(`Stripe ${r.status}: ${await r.text()}`);
  return r.json();
}

async function sendCapiPurchase({ customer, amountUsd, eventId, eventTime }) {
  if (!META_ACCESS_TOKEN) { console.error('no META_CAPI_ACCESS_TOKEN'); return; }
  const name = (customer?.name || '').trim();
  const [fn, ...rest] = name.split(/\s+/);
  const ln = rest.join(' ');
  const addr = customer?.address || {};
  const phone = (customer?.phone || '').replace(/[^0-9]/g, '');

  const payload = {
    data: [{
      event_name: 'Purchase',
      event_time: eventTime,
      event_id: eventId, // dedupe with browser pixel if it also fires
      action_source: 'website',
      event_source_url: 'https://www.legalhalplaw.com/lawyeroncall',
      user_data: {
        em: customer?.email ? [sha(customer.email)] : undefined,
        ph: phone ? [sha(phone)] : undefined,
        fn: fn ? sha(fn) : undefined,
        ln: ln ? sha(ln) : undefined,
        ct: addr.city ? [sha(addr.city)] : undefined,
        st: addr.state ? [sha(addr.state)] : undefined,
        zp: addr.postal_code ? [sha(String(addr.postal_code).replace(/[^0-9]/g, ''))] : undefined,
        country: [sha(addr.country || 'us')],
      },
      custom_data: {
        currency: 'USD',
        value: amountUsd,
      },
    }],
  };

  const r = await fetch(
    `https://graph.facebook.com/${META_API_VERSION}/${META_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }
  );
  const j = await r.json();
  if (j.error) throw new Error('Meta CAPI: ' + JSON.stringify(j.error));
  return j;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });

  const rawBody = await readRawBody(req);
  const sig = req.headers['stripe-signature'];
  if (STRIPE_WEBHOOK_SECRET && !verifyStripeSignature(rawBody, sig, STRIPE_WEBHOOK_SECRET)) {
    return res.status(400).json({ error: 'invalid signature' });
  }

  let event;
  try { event = JSON.parse(rawBody.toString('utf8')); }
  catch { return res.status(400).json({ error: 'invalid json' }); }

  try {
    let amountUsd = 0;
    let customerId = null;

    if (event.type === 'charge.succeeded') {
      amountUsd = (event.data.object.amount || 0) / 100;
      customerId = event.data.object.customer;
    } else if (event.type === 'invoice.payment_succeeded') {
      amountUsd = (event.data.object.amount_paid || 0) / 100;
      customerId = event.data.object.customer;
    } else {
      return res.status(200).json({ ok: true, ignored: event.type });
    }

    if (!customerId || amountUsd <= 0) {
      return res.status(200).json({ ok: true, skipped: 'no customer or zero amount' });
    }

    const customer = await stripeGet(`customers/${customerId}`);
    const result = await sendCapiPurchase({
      customer,
      amountUsd,
      eventId: event.id, // Stripe event id — stable, idempotent
      eventTime: event.created || Math.floor(Date.now() / 1000),
    });

    console.log('CAPI Purchase sent:', { customerId, amountUsd, events_received: result?.events_received });
    return res.status(200).json({ ok: true, sent: result?.events_received });
  } catch (err) {
    console.error('stripe-webhook error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}

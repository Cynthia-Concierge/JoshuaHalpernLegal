/**
 * Test script: send fake form data to GoHighLevel webhook.
 * Run: node scripts/test-ghl-webhook.mjs
 */
const GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/BcV5yPPiVfG1L72P10vq/webhook-trigger/51abadf6-ec0c-4e72-b07e-4a1ea786b368";

const fakeLead = {
  first_name: "Test",
  last_name: "Lead",
  email: "test.lead@example.com",
  phone: "+15551234567",
  source: "GHL Webhook Test Script",
};

async function main() {
  console.log("Sending test lead to GoHighLevel...");
  console.log("Payload:", JSON.stringify(fakeLead, null, 2));

  const res = await fetch(GHL_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fakeLead),
  });

  console.log("\nResponse status:", res.status, res.statusText);
  const text = await res.text();
  if (text) console.log("Response body:", text);

  if (res.ok) {
    console.log("\n✓ Success — check your GoHighLevel pipeline for the test lead.");
  } else {
    console.log("\n✗ Request failed. Check webhook URL and GHL setup.");
  }
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});

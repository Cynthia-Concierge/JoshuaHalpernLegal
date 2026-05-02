/**
 * Form submissions post directly to Josh's dedicated CRM, which:
 *   - persists the lead with tags, custom_fields, and meta
 *   - runs the bad-fit auto-tagger (litigation/PI/etc keywords)
 *   - logs the form_submitted event
 * The Vercel /api/form-submit serverless function is no longer used.
 */
export const FORM_SUBMIT_URL = "https://crm.getlegalhalp.com/api/webhooks/leadform";

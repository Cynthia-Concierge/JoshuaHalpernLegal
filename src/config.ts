/**
 * Form submissions go to our Vercel serverless function which:
 * 1. Creates/updates the contact in GHL via API (with tags)
 * 2. Fires the GHL webhook to trigger existing workflows
 */
export const FORM_SUBMIT_URL = "/api/form-submit";

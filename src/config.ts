/**
 * Form submissions go to our Vercel serverless function which
 * creates/updates the contact in Cynthia CRM (Supabase) with
 * tags, custom fields, and event logging.
 */
export const FORM_SUBMIT_URL = "/api/form-submit";

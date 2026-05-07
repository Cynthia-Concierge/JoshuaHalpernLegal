/**
 * Marketing attribution helper.
 *
 * On first page load we capture UTM params, fbclid, gclid, referrer, and the
 * landing URL into sessionStorage so a lead who lands on /lawyeroncall, browses
 * to the audit form, and submits ten minutes later still gets attributed to
 * the campaign that brought them in.
 *
 * Form components call `getAttribution()` at submit time. The returned shape is
 * intentionally flat so we can spread it straight into the JSON body posted to
 * crm.getlegalhalp.com/api/webhooks/leadform.
 *
 * Meta Conversions API matching:
 *   - `_fbp` and `_fbc` are read from cookies set by the Meta pixel.
 *   - If the URL contains `fbclid` but the pixel hasn't yet set `_fbc`, we
 *     synthesize the `fbc` value Meta expects: `fb.1.<timestamp_ms>.<fbclid>`.
 *     This gives the server-side CAPI Lead event a click ID to match against
 *     even on the first form submission.
 */

const STORAGE_KEY = 'lh_attribution_v1';

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const;

type UtmKey = typeof UTM_KEYS[number];

export interface Attribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  gclid?: string;
  landing_page?: string;
  referrer?: string;
  _fbp?: string;
  _fbc?: string;
  captured_at?: string;
}

function readCookie(name: string): string {
  if (typeof document === 'undefined') return '';
  const match = document.cookie.split('; ').find((c) => c.startsWith(name + '='));
  if (!match) return '';
  return match.split('=').slice(1).join('=');
}

function buildFbcFromFbclid(fbclid: string): string {
  // Meta's documented format for the _fbc value when synthesized from a
  // fbclid URL param. Subdomain index `1` matches the cookie default.
  return `fb.1.${Date.now()}.${fbclid}`;
}

/**
 * Run once on app boot. Captures params from the current URL into sessionStorage
 * if it doesn't already have them. Subsequent navigations are no-ops, so the
 * "first touch" wins (which is what advertisers actually want for attribution).
 */
export function captureAttributionFromUrl(): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = sessionStorage.getItem(STORAGE_KEY);
    if (existing) return;

    const params = new URLSearchParams(window.location.search);
    const data: Attribution = {};

    for (const key of UTM_KEYS) {
      const v = params.get(key);
      if (v) (data as Record<UtmKey, string>)[key] = v;
    }

    const fbclid = params.get('fbclid');
    if (fbclid) data.fbclid = fbclid;
    const gclid = params.get('gclid');
    if (gclid) data.gclid = gclid;

    data.landing_page = window.location.href;
    if (document.referrer) data.referrer = document.referrer;
    data.captured_at = new Date().toISOString();

    // Only persist if we actually captured *something* useful — don't fire
    // sessionStorage writes for direct/organic visits.
    const hasMarketingSignal =
      UTM_KEYS.some((k) => data[k]) || data.fbclid || data.gclid || data.referrer;
    if (hasMarketingSignal) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  } catch {
    /* sessionStorage can throw in strict iframe / private modes — best-effort */
  }
}

/**
 * Returns the captured attribution merged with the latest cookie values for
 * `_fbp` and `_fbc`. Intended to be spread into the JSON body sent to the CRM
 * leadform webhook.
 */
export function getAttribution(): Attribution {
  const out: Attribution = {};
  try {
    const stored = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem(STORAGE_KEY) : null;
    if (stored) Object.assign(out, JSON.parse(stored));
  } catch {
    /* ignore */
  }

  const fbp = readCookie('_fbp');
  if (fbp) out._fbp = fbp;

  let fbc = readCookie('_fbc');
  if (!fbc && out.fbclid) fbc = buildFbcFromFbclid(out.fbclid);
  if (fbc) out._fbc = fbc;

  return out;
}

/**
 * Marketing attribution helper.
 *
 * On page load we capture UTM params, fbclid, gclid, referrer, and the
 * landing URL into localStorage (90-day TTL) so a lead who lands on
 * /lawyeroncall, browses around, closes the tab, and comes back days later
 * still gets attributed to the ad that brought them in.
 *
 * Persistence rules:
 *   - A URL carrying a paid/marketing signal (any utm_*, fbclid, or gclid)
 *     OVERWRITES what's stored — last ad click wins, so a lead who clicks
 *     ad A this week and ad B next week is credited to ad B.
 *   - A URL with no marketing signal leaves the stored attribution alone.
 *   - Stored attribution expires after 90 days (matches the _fbp cookie).
 *   - Legacy sessionStorage captures (v1) are migrated forward on boot.
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

const STORAGE_KEY = 'lh_attribution_v2';
const LEGACY_SESSION_KEY = 'lh_attribution_v1';
const TTL_MS = 90 * 24 * 60 * 60 * 1000; // 90 days, matching Meta's _fbp cookie

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

function readStored(): Attribution | null {
  try {
    if (typeof localStorage !== 'undefined') {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw) as Attribution;
        const capturedAt = data.captured_at ? Date.parse(data.captured_at) : NaN;
        if (!Number.isNaN(capturedAt) && Date.now() - capturedAt <= TTL_MS) {
          return data;
        }
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    // Legacy v1 lived in sessionStorage; honor it within its tab lifetime.
    if (typeof sessionStorage !== 'undefined') {
      const legacy = sessionStorage.getItem(LEGACY_SESSION_KEY);
      if (legacy) return JSON.parse(legacy) as Attribution;
    }
  } catch {
    /* storage can throw in strict iframe / private modes — best-effort */
  }
  return null;
}

function writeStored(data: Attribution): void {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  } catch {
    /* ignore */
  }
}

/**
 * Run once on app boot. If the URL carries a marketing signal (utm_*, fbclid,
 * gclid) it overwrites the stored attribution — last ad click wins. Otherwise
 * the previously stored attribution (up to 90 days old) is kept, and we only
 * store a referrer-based capture if nothing is stored yet.
 */
export function captureAttributionFromUrl(): void {
  if (typeof window === 'undefined') return;
  try {
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

    const hasPaidSignal =
      UTM_KEYS.some((k) => data[k]) || Boolean(data.fbclid) || Boolean(data.gclid);

    if (hasPaidSignal) {
      // New ad click — overwrite whatever was stored before.
      writeStored(data);
      return;
    }

    const existing = readStored();
    if (existing) {
      // Migrate legacy sessionStorage captures into the durable store.
      writeStored(existing);
      return;
    }

    // No stored attribution and no paid signal: keep the old behavior of
    // recording a referrer-only capture so organic sources are still visible.
    if (data.referrer) {
      writeStored(data);
    }
  } catch {
    /* best-effort */
  }
}

/**
 * Returns the captured attribution merged with the latest cookie values for
 * `_fbp` and `_fbc`. Intended to be spread into the JSON body sent to the CRM
 * leadform webhook.
 */
export function getAttribution(): Attribution {
  const out: Attribution = {};
  const stored = readStored();
  if (stored) Object.assign(out, stored);

  const fbp = readCookie('_fbp');
  if (fbp) out._fbp = fbp;

  let fbc = readCookie('_fbc');
  if (!fbc && out.fbclid) fbc = buildFbcFromFbclid(out.fbclid);
  if (fbc) out._fbc = fbc;

  return out;
}

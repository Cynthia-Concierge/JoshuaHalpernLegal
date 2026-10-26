import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

// Social share preview image for legalhalplaw.com (1200x630).
const h = (type, style, children) => ({ type, props: { style, children } });

const LOGO =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="46" viewBox="21 72 47 64"><g fill="#F2B13E"><rect x="21" y="72" width="6" height="64"/><rect x="61.5" y="72" width="6.5" height="64"/><rect x="21" y="101" width="47" height="6"/><rect x="21" y="130" width="35" height="6"/></g></svg>'
  );

const chip = (text) =>
  h(
    'div',
    {
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(255,255,255,0.10)',
      border: '1px solid rgba(255,255,255,0.22)',
      borderRadius: 999,
      padding: '12px 28px 12px 22px',
      fontSize: 20,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      fontWeight: 600,
      color: '#ffffff',
      marginRight: 12,
    },
    [h('div', { display: 'flex', width: 10, height: 10, borderRadius: 999, background: '#60a5fa', marginRight: 12 }), text]
  );

const FONT_BASE = 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.8/files/inter-latin-';
const loadFont = (weight) =>
  fetch(`${FONT_BASE}${weight}-normal.woff`).then((r) => r.arrayBuffer());

export default async function handler() {
  const [semi, heavy] = await Promise.all([loadFont(600), loadFont(800)]);
  return new ImageResponse(
    h(
      'div',
      {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '70px 80px 78px',
        color: '#ffffff',
        fontFamily: 'Inter',
        backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #0f172a 100%)',
        borderBottom: '8px solid #F2B13E',
      },
      [
        h('div', { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, [
          h('div', { display: 'flex', alignItems: 'center', background: '#ffffff', borderRadius: 14, padding: '10px 18px' }, [
            // The same logo file used in the site navigation (1093x315).
            { type: 'img', props: { src: 'https://legalhalplaw.com/logo.png', width: 174, height: 50 } },
          ]),
          h(
            'div',
            {
              display: 'flex',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.08)',
              color: '#93c5fd',
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: 3,
              padding: '10px 22px',
              borderRadius: 999,
            },
            'JOSHUA HALPERN, ESQ.'
          ),
        ]),
        h('div', { display: 'flex', flexDirection: 'column', marginTop: 64, fontSize: 80, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2 }, [
          h('div', { display: 'flex' }, 'Outside General Counsel.'),
          h('div', { display: 'flex', color: '#60a5fa' }, 'On a Fixed Monthly Fee.'),
        ]),
        h('div', { display: 'flex', marginTop: 'auto' }, [
          chip('Big-Firm M&A and Corporate Experience'),
          chip('No Hourly Billing'),
        ]),
      ]
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: semi, weight: 600, style: 'normal' },
        { name: 'Inter', data: heavy, weight: 800, style: 'normal' },
      ],
      headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=86400' },
    }
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';

function initCal(theme: string) {
  const container = document.getElementById('my-cal-inline-meet');
  if (!container) return;
  container.innerHTML = '';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Cal = (window as any).Cal;
  if (!Cal?.ns?.meet) return;

  Cal.ns.meet('inline', {
    elementOrSelector: '#my-cal-inline-meet',
    config: { layout: 'month_view', theme },
    calLink: 'mk7ft/meet',
  });
  Cal.ns.meet('ui', { hideEventTypeDetails: false, layout: 'month_view' });
}

export default function Footer() {
  const scriptLoaded = useRef(false);
  const [calReady, setCalReady] = useState(false);
  const [theme, setTheme] = useState('dark');

  // Load cal.com script once
  useEffect(() => {
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    const initial = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(initial);

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal; let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {}; cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "meet", {origin:"https://app.cal.com"});
    `;
    script.onload = () => setCalReady(true);
    document.head.appendChild(script);

    // Cal embed.js loads async — poll until ready
    const interval = setInterval(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((window as any).Cal?.ns?.meet) {
        clearInterval(interval);
        setCalReady(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Re-init cal whenever theme changes (or when script first becomes ready)
  useEffect(() => {
    if (!calReady) return;
    initCal(theme);
  }, [calReady, theme]);

  // Watch data-theme attribute for changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const t = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(t);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" style={{ background: 'var(--bg)', transition: 'background 0.25s ease' }}>
      <div style={{ height: '1px', background: 'var(--divider)' }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: 'clamp(3rem,6vh,5rem) clamp(1.5rem,6vw,5rem)',
      }}>

        {/* Headline row */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5em', marginBottom: 'clamp(2rem,4vh,3rem)', flexWrap: 'wrap' }}>
          <h2 style={{
            fontFamily: 'var(--font-editorial)',
            fontWeight: 300,
            fontSize: 'clamp(2.4rem,5vw,5.5rem)',
            lineHeight: 0.88,
            letterSpacing: '-0.04em',
            color: 'var(--green)',
          }}>
            building?
          </h2>
          <h2 style={{
            fontFamily: 'var(--font-editorial)',
            fontWeight: 300,
            fontSize: 'clamp(2.4rem,5vw,5.5rem)',
            lineHeight: 0.88,
            letterSpacing: '-0.04em',
            fontStyle: 'italic',
            color: 'var(--text-40)',
          }}>
            let&apos;s chat.
          </h2>
        </div>

        {/* Cal.com full-width embed */}
        <div
          id="my-cal-inline-meet"
          style={{ width: '100%', height: '550px', overflow: 'hidden' }}
        />
      </div>

      <div style={{ height: '1px', background: 'var(--divider)' }} />
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: 'clamp(1.2rem,2.5vh,1.8rem) clamp(1.5rem,6vw,5rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', letterSpacing: '0.06em', color: 'var(--text-18)' }}>
          © 2026 Muhammad Kamil
        </span>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Tampa, FL', 'mk7ft.com'].map(t => (
            <span key={t} style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', letterSpacing: '0.04em', color: 'var(--text-18)' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

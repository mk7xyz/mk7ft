'use client';

import { useEffect, useRef } from 'react';

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4';

const RESUME =
  'https://drive.google.com/file/d/11iyZC-HZXZPrOEiP8cf4sAi-jgPyimob/view?usp=sharing';

const COMPANIES = [
  { name: 'doublespeed.ai', role: 'gtm ops', desc: 'ai content and intelligence automation.', tag: 'prev', url: 'https://doublespeed.ai' },
  { name: 'sprk', role: 'advisor', desc: 'ai edtech and learning software.', tag: 'active', url: 'https://sprk.co' },
  { name: 'aster', role: 'advisor', desc: "ai women's health and wellness app.", tag: 'active', url: 'https://aster.fit' },
  { name: 'dart', role: 'advisor', desc: 'ai automation and consulting agency.', tag: 'active', url: 'https://dart.ceo' },
];

const TRACTION = [
  { n: '30M+', label: 'impressions generated', sub: <>across all social campaigns</> },
  { n: '$100K+', label: 'raised', sub: <>sponsorships &amp; partnerships</> },
  { n: '250k+', label: 'community', sub: <>built organically from scratch</> },
];

const SIDE_QUESTS = [
  {
    n: '17M+', label: 'visitors served',
    sub: <><a href="https://en.wikipedia.org/wiki/Saudi_Red_Crescent_Authority" target="_blank" rel="noopener noreferrer">saudi red crescent</a> - emt &amp; translator</>,
  },
  {
    n: '$150K+', label: 'closed <70 days',
    sub: <><a href="https://vivint.com" target="_blank" rel="noopener noreferrer">vivint</a> - #1 of 40 reps</>,
  },
  {
    n: '50k+', label: 'customers managed',
    sub: <><a href="https://akersweetsusa.com" target="_blank" rel="noopener noreferrer">aker</a> &amp; <a href="https://bekdash.us" target="_blank" rel="noopener noreferrer">bekdash</a> - $3M+ revenue</>,
  },
];

const MEDIA = [
  { name: 'Forbes', url: 'https://forbes.com' },
  { name: 'ESPN', url: 'https://espn.com' },
  { name: 'Business Insider', url: 'https://businessinsider.com' },
  { name: 'Dexerto', url: 'https://dexerto.com' },
];

const CAL_ATTRS = {
  'data-cal-namespace': '20',
  'data-cal-link': 'mk7ft/20',
  'data-cal-config': '{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}',
};

export default function VelorahHome() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Calm the background motion a touch
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const set = () => { v.playbackRate = 0.6; };
    set();
    v.addEventListener('loadedmetadata', set);
    return () => v.removeEventListener('loadedmetadata', set);
  }, []);

  // Cal.com — element-click popup (dark). The "book a call" buttons carry
  // data-cal attributes for the "20" namespace and open it on click.
  useEffect(() => {
    if ((window as any).__cal20Init) return;
    (window as any).__cal20Init = true;
    /* eslint-disable */
    (function (C: any, A: string, L: string) { let p = function (a: any, ar: any) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement('script')).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === 'string') { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ['initNamespace', namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, 'https://app.cal.com/embed/embed.js', 'init');
    const Cal = (window as any).Cal;
    Cal('init', '20', { origin: 'https://app.cal.com' });
    Cal.config = Cal.config || {};
    Cal.config.forwardQueryParams = true;
    Cal.ns['20']('ui', { hideEventTypeDetails: false, layout: 'month_view', theme: 'dark' });
    /* eslint-enable */
  }, []);

  return (
    <div className="velorah">
      <video
        ref={videoRef}
        className="bg-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='9'%3E%3Crect width='100%25' height='100%25' fill='%2306121a'/%3E%3C/svg%3E"
        src={VIDEO_SRC}
      />
      <div className="scrim" />

      <div className="shell">
        <nav className="r1">
          <a className="logo" href="https://mk7ft.com">MK<sub>7</sub></a>
          <div className="nav-r">
            <a href="https://linkedin.com/in/mk7ft" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </nav>

        <main>
          <aside className="identity r1">
            <div>
              <h1>Muhammad<br /><em>Kamil.</em></h1>
              <div className="bio lc">
                <p>led extraordinary ventures at unreasonable ages in media and gaming.</p>
                <p>moved to the states and obsessively studied ai and content creation.</p>
                <p>now i run growth and product at venture-backed startups (a16z + yc).</p>
              </div>
            </div>
            <div>
              <p className="chat lc">building? <em>let&apos;s chat.</em></p>
              <div className="cta">
                <a className="btn btn-ghost" href={RESUME} target="_blank" rel="noopener noreferrer">download résumé ↓</a>
                <button className="btn btn-primary" {...CAL_ATTRS}>book a call ↗</button>
              </div>
            </div>
          </aside>

          <div className="right r2">
            <div>
              <div className="label">work</div>
              <div className="work-grid">
                {COMPANIES.map((co) => (
                  <a key={co.name} className="wcard glass" href={co.url} target="_blank" rel="noopener noreferrer">
                    <div className="h">
                      <span className="nm lc">{co.name}</span>
                      <span className="badge lc">{co.tag}</span>
                    </div>
                    <div className="role lc">{co.role}</div>
                    <div className="desc lc">{co.desc}</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="statstack">
              <div>
                <div className="label">traction</div>
                <div className="stats">
                  {TRACTION.map((s) => (
                    <div className="stat" key={s.n}>
                      <div className="n">{s.n}</div>
                      <div className="t lc">{s.label}</div>
                      <div className="s lc">{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="label">side quests</div>
                <div className="stats">
                  {SIDE_QUESTS.map((s) => (
                    <div className="stat" key={s.n}>
                      <div className="n">{s.n}</div>
                      <div className="t lc">{s.label}</div>
                      <div className="s lc">{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="r3">
          <div className="meta">
            <span className="lc">tampa, fl</span>
            <span className="lc">© 2026 muhammad kamil</span>
          </div>
          <div className="seen">
            <span className="l">as seen in</span>
            {MEDIA.map((m) => (
              <a key={m.name} href={m.url} target="_blank" rel="noopener noreferrer">{m.name}</a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

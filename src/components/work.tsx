'use client';

import { SKILLS } from '@/lib/skills';

const COMPANIES = [
  {
    name: 'doublespeed.ai',
    role: 'gtm ops',
    desc: 'ai content and intelligence automation.',
    tag: 'current',
    url: 'https://doublespeed.ai',
  },
  {
    name: 'sprk',
    role: 'founder',
    desc: 'ai edtech software for students.',
    tag: 'active',
    url: 'https://sprk.co',
  },
  {
    name: 'aster',
    role: 'founder',
    desc: "ai women's health and wellness app.",
    tag: 'active',
    url: 'https://aster.fit',
  },
  {
    name: 'jrvs',
    role: 'founder',
    desc: 'ai consulting and workflow agent.',
    tag: 'active',
    url: 'https://jrvs.pro',
  },
];

const STATS = [
  { n: '17M+', label: 'visitors served',   sub: 'saudi red crescent - emt and translator ops' },
  { n: '#1',   label: 'of 40 sales reps',  sub: 'vivint - $150k+ closed in 90 days'           },
  { n: '50k+', label: 'customers managed', sub: 'aker & bekdash - $2.5M+ revenue processed'   },
];

const PAD = 'clamp(1.5rem,6vw,5rem)';
const MAX = '1100px';

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: '0.62rem',
  letterSpacing: '0.06em',
  color: 'rgba(237,237,237,0.25)',
  marginBottom: 'clamp(1.4rem,2.5vh,2.2rem)',
  display: 'block',
};

const DIVIDER = (
  <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: `0 ${PAD}` }} />
);

export default function Work() {
  return (
    <section id="work">

      {/* ── Companies + Numbers (merged) ── */}
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: `clamp(3rem,6vh,5rem) ${PAD} clamp(2rem,4vh,3.5rem)` }}>
        <span style={LABEL_STYLE}>work</span>

        {/* Company cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 230px), 1fr))',
          gap: '1px',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: 'clamp(2rem,4vh,3.5rem)',
        }}>
          {COMPANIES.map((co) => (
            <a
              key={co.name}
              href={co.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-work-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                padding: 'clamp(1.1rem,2vw,1.6rem)',
                textDecoration: 'none',
                borderRight: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1rem,1.3vw,1.2rem)',
                  fontWeight: 300,
                  color: '#ededed',
                  letterSpacing: '-0.01em',
                }}>
                  {co.name}
                </span>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.04em',
                  color: co.tag === 'current' ? 'var(--green)' : 'rgba(237,237,237,0.35)',
                  border: `1px solid ${co.tag === 'current' ? 'var(--green-dim)' : 'rgba(255,255,255,0.1)'}`,
                  padding: '0.18rem 0.5rem',
                  borderRadius: '3px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>
                  {co.tag}
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', letterSpacing: '0.04em', color: 'rgba(237,237,237,0.45)' }}>
                {co.role}
              </span>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', color: 'rgba(237,237,237,0.32)', lineHeight: 1.5, flex: 1, margin: 0 }}>
                {co.desc}
              </p>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.2, alignSelf: 'flex-end' }}>
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="#ededed" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>

        {/* Stats row - directly under cards, no divider */}
        <div className="stats-grid" style={{ display: 'grid', gap: 'clamp(1rem,3vw,2.5rem)' }}>
          {STATS.map((s) => (
            <div key={s.n} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 'clamp(1rem,2vh,1.5rem)' }}>
              <div style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(2rem,4.5vw,4rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--green)',
                lineHeight: 0.9,
                letterSpacing: '-0.03em',
                marginBottom: '0.6rem',
              }}>
                {s.n}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', color: 'rgba(237,237,237,0.6)', letterSpacing: '0.04em', marginBottom: '0.2rem' }}>
                {s.label}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', color: 'rgba(237,237,237,0.22)', letterSpacing: '0.02em', lineHeight: 1.5 }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {DIVIDER}

      {/* ── Skills ── */}
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: `clamp(2rem,4vh,3.5rem) ${PAD}` }}>
        <span style={LABEL_STYLE}>technical skills</span>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {SKILLS.map((s) => (
            <div
              key={s.label}
              className="hover-skill-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.32rem',
                padding: '0.25rem 0.6rem',
                border: '1px solid',
                borderRadius: '3px',
                fontFamily: 'var(--font-display)',
                fontSize: '0.62rem',
                letterSpacing: '0.06em',
                cursor: 'default',
              }}
            >
              {s.icon(11)}
              {s.label}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

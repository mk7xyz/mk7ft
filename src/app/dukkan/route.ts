import { NextResponse } from 'next/server';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dukkan × Dart - Project Proposal</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #000;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  .page {
    max-width: 860px;
    margin: 0 auto;
    padding: 60px 48px 80px;
  }

  /* ── Header ── */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 40px;
    border-bottom: 1px solid #1e1e1e;
    margin-bottom: 56px;
  }

  .dart-brand {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .dart-logo {
    width: 28px;
    height: 28px;
  }

  .dart-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: #fff;
  }

  .header-dukkan {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .header-dukkan-logo {
    height: 22px;
    width: auto;
    object-fit: contain;
  }

  .header-dukkan-name {
    display: none;
  }

  .header-meta {
    text-align: right;
  }

  .header-meta p {
    font-size: 12px;
    color: #555;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    line-height: 1.8;
  }

  /* ── Hero ── */
  .hero {
    margin-bottom: 64px;
  }

  .prepared-for {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #444;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .prepared-for::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #1e1e1e;
  }

  .client-lockup {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 28px;
  }

  .client-logo {
    height: 54px;
    width: auto;
    max-width: 280px;
    object-fit: contain;
  }

  .client-name {
    display: none;
  }

  .hero-sub {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 21px;
    font-weight: 300;
    color: #666;
    margin-top: 0;
    max-width: 560px;
    line-height: 1.5;
  }

  .accent-line {
    width: 40px;
    height: 2px;
    background: #3333ff;
    margin: 28px 0;
  }

  .hero-copy {
    font-size: 16px;
    color: #aaa;
    max-width: 640px;
    line-height: 1.85;
  }

  /* ── Section ── */
  .section {
    margin-bottom: 56px;
  }

  .section-label {
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #3333ff;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 26px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 28px;
  }

  /* ── Features Grid ── */
  .features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: #1a1a1a;
    border: 1px solid #1a1a1a;
    border-radius: 12px;
    overflow: hidden;
  }

  .feature-item {
    background: #080808;
    padding: 24px 26px;
    display: flex;
    align-items: flex-start;
    gap: 14px;
  }

  .feature-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #3333ff;
    margin-top: 7px;
    flex-shrink: 0;
  }

  .feature-text {
    font-size: 14.5px;
    color: #bbb;
    line-height: 1.6;
  }

  .feature-text strong {
    display: block;
    font-size: 14.5px;
    font-weight: 600;
    color: #e8e8e8;
    margin-bottom: 4px;
  }

  /* ── Phases Table ── */
  .phases-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #1e1e1e;
    border-radius: 12px;
    overflow: hidden;
  }

  .phases-table th {
    background: #0d0d0d;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #444;
    font-weight: 500;
    padding: 14px 20px;
    text-align: left;
    border-bottom: 1px solid #1a1a1a;
  }

  .phases-table td {
    padding: 18px 22px;
    font-size: 14.5px;
    color: #aaa;
    border-bottom: 1px solid #111;
    vertical-align: top;
  }

  .phases-table tr:last-child td {
    border-bottom: none;
  }

  .phases-table tr:hover td {
    background: #0a0a0a;
  }

  .phase-num {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 11px;
    font-weight: 600;
    color: #3333ff;
    letter-spacing: 0.08em;
  }

  .phase-title {
    font-size: 14.5px;
    font-weight: 600;
    color: #e8e8e8;
    display: block;
    margin-bottom: 4px;
  }

  .phase-desc {
    font-size: 13px;
    color: #666;
  }

  .timeline-badge {
    display: inline-block;
    font-size: 13px;
    color: #777;
    background: #0f0f0f;
    border: 1px solid #1e1e1e;
    border-radius: 6px;
    padding: 5px 12px;
    white-space: nowrap;
  }

  .price-cell {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    white-space: nowrap;
  }

  .price-cell.muted {
    color: #555;
    font-size: 12px;
    font-weight: 400;
  }

  /* -- Investment Box -- */
  .investment-box {
    background: #05050f;
    border: 1px solid #1a1a3a;
    border-radius: 14px;
    padding: 36px 40px;
    display: flex;
    align-items: center;
    gap: 40px;
    margin-bottom: 56px;
  }

  .inv-total { display: flex; flex-direction: column; gap: 6px; flex-shrink: 0; }

  .inv-label {
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #3333ff;
    font-weight: 500;
  }

  .inv-value {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 52px;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .inv-sub { font-size: 12px; color: #444; }

  .inv-divider {
    width: 1px;
    height: 80px;
    background: #1a1a3a;
    flex-shrink: 0;
  }

  .inv-stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px 32px;
    flex: 1;
  }

  .inv-stat { display: flex; flex-direction: column; gap: 4px; }

  .inv-stat-label {
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #444;
  }

  .inv-stat-value {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #ccc;
  }

  /* -- Next Steps -- */
  .next-steps {
    display: flex;
    gap: 0;
    position: relative;
    margin-bottom: 64px;
  }

  .next-steps::before {
    content: '';
    position: absolute;
    top: 23px;
    left: 23px;
    right: 23px;
    height: 1px;
    background: #1a1a4a;
    z-index: 0;
  }

  .step-card {
    flex: 1;
    padding: 0 28px;
    position: relative;
  }

  .step-card:first-child { padding-left: 0; }
  .step-card:last-child { padding-right: 0; }

  .step-circle {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: #05050f;
    border: 1px solid #3333ff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #3333ff;
    margin-bottom: 24px;
    position: relative;
    z-index: 1;
    letter-spacing: 0.05em;
  }

  .step-tag {
    display: inline-block;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #3333ff;
    background: #0a0a20;
    border: 1px solid #1a1a4a;
    border-radius: 5px;
    padding: 4px 10px;
    margin-bottom: 12px;
  }

  .step-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 17px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 10px;
    line-height: 1.2;
  }

  .step-body {
    font-size: 13.5px;
    color: #666;
    line-height: 1.7;
  }

  /* ── Footer ── */
  .footer {
    border-top: 1px solid #1a1a1a;
    padding-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .footer-left svg {
    width: 20px;
    height: 20px;
    opacity: 0.5;
  }

  .footer-left span {
    font-size: 12px;
    color: #333;
  }

  .footer-right {
    font-size: 12px;
    color: #2a2a2a;
  }

  @media print {
    body { background: #000; }
    .page { padding: 40px; }
  }
</style>
</head>
<body>

<div class="page">

  <!-- Header -->
  <header class="header">
    <div class="dart-brand">
      <svg class="dart-logo" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M361.48 200.032C361.921 199.997 362.187 200.509 361.905 200.85L247.645 338.98C241.925 345.895 234.046 350.685 225.275 352.581L63.8252 387.487C45.4617 391.458 30.8918 372.067 39.8154 355.534L107.843 229.497C111.063 223.531 117.087 219.602 123.846 219.061L361.48 200.032Z" fill="white"/>
        <path d="M39.6963 44.4756C30.7731 27.9424 45.3418 8.55339 63.7051 12.5234L225.156 47.4297C233.927 49.3259 241.805 54.1161 247.524 61.0302L361.786 199.161C362.068 199.502 361.801 200.014 361.36 199.978L123.727 180.95C116.968 180.409 110.943 176.48 107.723 170.514L39.6963 44.4756Z" fill="white"/>
      </svg>
      <span class="dart-name">DART</span>
    </div>
    <div class="header-dukkan">
      <img class="header-dukkan-logo" id="dukkan-header-logo" alt="Dukkan">
      <span class="header-dukkan-name">Dukkan</span>
    </div>
    <div class="header-meta">
      <p>Project Proposal</p>
      <p>July 2026 - Confidential</p>
    </div>
  </header>

  <!-- Hero -->
  <section class="hero">
    <div class="prepared-for">Prepared for</div>
    <div class="client-lockup">
      <img class="client-logo" id="dukkan-logo-src" src="data:image/png;base64,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" alt="Dukkan">
      <div>
        <div class="client-name">Dukkan</div>
        <div class="hero-sub">AI-Powered Cultural Marketplace</div>
      </div>
    </div>

    <div class="accent-line"></div>

    <p class="hero-copy">Dart is proposing a full-stack build of Dukkan - a Walmart-style online marketplace purpose-built for Muslim, Arab, South Asian, and broader Asian communities in the US. We will architect, design, and deliver an AI-native platform with intelligent shopping features, vendor tooling, and a seamless multicultural user experience.</p>
  </section>

  <!-- What We're Building -->
  <section class="section">
    <div class="section-label">Platform Scope</div>
    <div class="section-title">What We're Building</div>
    <div class="features-grid">
      <div class="feature-item">
        <div class="feature-dot"></div>
        <div class="feature-text">
          <strong>Dynamic Cultural Category Menus</strong>
          When a customer selects their region (South Asia, Arab/Middle East, East Asia, etc.) the entire catalog, categories, and menu items shift to reflect that culture's products and brands
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-dot"></div>
        <div class="feature-text">
          <strong>ZIP-Based Delivery vs. Shipping Detection</strong>
          On login, the platform detects the customer's ZIP code and instantly determines whether their area qualifies for local delivery or standard shipping, with rates and ETAs shown upfront
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-dot"></div>
        <div class="feature-text">
          <strong>AI Cook-to-Cart</strong>
          Customer describes any dish in plain language and the AI identifies every ingredient, maps them to available products, and populates the cart automatically
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-dot"></div>
        <div class="feature-text">
          <strong>AI Customer Support Chat</strong>
          Conversational AI handles product questions, order status, returns, and shopping guidance around the clock without human agents
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-dot"></div>
        <div class="feature-text">
          <strong>AI Calling Integration</strong>
          AI voice agent handles inbound customer calls, answers order and product questions, and escalates complex issues, eliminating the need for a support team
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-dot"></div>
        <div class="feature-text">
          <strong>WhatsApp AI Integration</strong>
          Customers browse, ask questions, track orders, and receive promotions directly in WhatsApp with an AI agent managing the full conversation
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-dot"></div>
        <div class="feature-text">
          <strong>SMS / Text AI Integration</strong>
          AI-powered text messaging for order confirmations, delivery alerts, reorder nudges, and two-way customer support via SMS
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-dot"></div>
        <div class="feature-text">
          <strong>Push Notifications</strong>
          Personalized mobile push alerts for order updates, flash deals, restock alerts, and culturally relevant campaign timing (Ramadan, Eid, Diwali, etc.)
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-dot"></div>
        <div class="feature-text">
          <strong>Full Commerce Stack</strong>
          Product catalog, search, categories, cart, secure checkout, user accounts, saved addresses, and full order history
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-dot"></div>
        <div class="feature-text">
          <strong>Halal and Cultural Certification Badges</strong>
          Products tagged and filterable by Halal certification, dietary standards, and cultural sourcing so customers shop with full confidence
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-dot"></div>
        <div class="feature-text">
          <strong>Multi-Language Support</strong>
          Interface localization for Arabic, Urdu, Hindi, and other community languages with RTL layout support for Arabic-speaking users
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-dot"></div>
        <div class="feature-text">
          <strong>Vendor and Admin Dashboard</strong>
          Inventory management, vendor onboarding, order fulfillment controls, and analytics for the Dukkan operations team
        </div>
      </div>
    </div>
  </section>

  <!-- Phases -->
  <section class="section">
    <div class="section-label">Engagement Plan</div>
    <div class="section-title">Project Phases</div>
    <table class="phases-table">
      <thead>
        <tr>
          <th style="width:50px;">Phase</th>
          <th>Scope</th>
          <th style="width:150px;">Dates</th>
          <th style="width:110px;">Investment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="phase-num">01</span></td>
          <td>
            <span class="phase-title">Discovery, UI/UX & Catalog Architecture</span>
            <span class="phase-desc">Brand alignment, design system, wireframes, product taxonomy, and technical architecture planning</span>
          </td>
          <td><span class="timeline-badge">Jul 1 - Jul 7</span></td>
          <td><span class="price-cell">$1,249</span></td>
        </tr>
        <tr>
          <td><span class="phase-num">02</span></td>
          <td>
            <span class="phase-title">Core Marketplace Build</span>
            <span class="phase-desc">Product catalog, search, categories, cart, checkout, and user account system</span>
          </td>
          <td><span class="timeline-badge">Jul 8 - Jul 11</span></td>
          <td><span class="price-cell">$1,549</span></td>
        </tr>
        <tr>
          <td><span class="phase-num">03</span></td>
          <td>
            <span class="phase-title">Country Filter + Shipping Logic</span>
            <span class="phase-desc">Origin-based browsing, zip code lookup for delivery availability and rate calculation</span>
          </td>
          <td><span class="timeline-badge">Jul 12 - Jul 15</span></td>
          <td><span class="price-cell">$849</span></td>
        </tr>
        <tr>
          <td><span class="phase-num">04</span></td>
          <td>
            <span class="phase-title">AI Chatbot Integration</span>
            <span class="phase-desc">Intelligent customer support bot - product questions, order help, and real-time assistance</span>
          </td>
          <td><span class="timeline-badge">Jul 16 - Jul 19</span></td>
          <td><span class="price-cell">$949</span></td>
        </tr>
        <tr>
          <td><span class="phase-num">05</span></td>
          <td>
            <span class="phase-title">AI Cook-to-Cart Feature</span>
            <span class="phase-desc">NLP recipe interpreter - describe any dish, AI auto-populates a complete shopping cart</span>
          </td>
          <td><span class="timeline-badge">Jul 20 - Jul 23</span></td>
          <td><span class="price-cell">$949</span></td>
        </tr>
        <tr>
          <td><span class="phase-num">06</span></td>
          <td>
            <span class="phase-title">Admin Dashboard, QA & Launch</span>
            <span class="phase-desc">Vendor/inventory management dashboard, full QA testing cycle, deployment, and go-live support</span>
          </td>
          <td><span class="timeline-badge">Jul 24 - Jul 31</span></td>
          <td><span class="price-cell">$954</span></td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- Investment -->
  <div class="investment-box">
    <div class="inv-total">
      <span class="inv-label">Total Investment</span>
      <span class="inv-value">$6,499</span>
      <span class="inv-sub">Fixed scope · All phases included</span>
    </div>
    <div class="inv-divider"></div>
    <div class="inv-stats">
      <div class="inv-stat">
        <span class="inv-stat-label">Start Date</span>
        <span class="inv-stat-value">Jul 1, 2026</span>
      </div>
      <div class="inv-stat">
        <span class="inv-stat-label">Delivery</span>
        <span class="inv-stat-value">Jul 31, 2026</span>
      </div>
      <div class="inv-stat">
        <span class="inv-stat-label">Duration</span>
        <span class="inv-stat-value">4 Weeks</span>
      </div>
    </div>
  </div>

  <!-- Next Steps -->
  <section class="section">
    <div class="section-label">Getting Started</div>
    <div class="section-title">Next Steps</div>
    <div class="next-steps">

      <div class="step-card">
        <div class="step-circle">01</div>
        <div class="step-tag">This Week</div>
        <div class="step-title">Schedule a Scope Call</div>
        <div class="step-body">A focused 30-minute call to walk through the full build, confirm your requirements, and answer any questions before we lock in the start date.</div>
      </div>

      <div class="step-card">
        <div class="step-circle">02</div>
        <div class="step-tag">By Jun 30</div>
        <div class="step-title">Sign & Secure Your Slot</div>
        <div class="step-body">Execute the project agreement and submit a 50% deposit to confirm your Jul 1 start. We'll set up your Slack channel and share onboarding details.</div>
      </div>

      <div class="step-card">
        <div class="step-circle">03</div>
        <div class="step-tag">Jul 1, 2026</div>
        <div class="step-title">Build Begins</div>
        <div class="step-body">Phase 1 kicks off with discovery, design system, and catalog architecture. First deliverables in your hands by Jul 7 for review and sign-off.</div>
      </div>

    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-left">
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M361.48 200.032C361.921 199.997 362.187 200.509 361.905 200.85L247.645 338.98C241.925 345.895 234.046 350.685 225.275 352.581L63.8252 387.487C45.4617 391.458 30.8918 372.067 39.8154 355.534L107.843 229.497C111.063 223.531 117.087 219.602 123.846 219.061L361.48 200.032Z" fill="white" opacity="0.4"/>
        <path d="M39.6963 44.4756C30.7731 27.9424 45.3418 8.55339 63.7051 12.5234L225.156 47.4297C233.927 49.3259 241.805 54.1161 247.524 61.0302L361.786 199.161C362.068 199.502 361.801 200.014 361.36 199.978L123.727 180.95C116.968 180.409 110.943 176.48 107.723 170.514L39.6963 44.4756Z" fill="white" opacity="0.4"/>
      </svg>
      <span>dart.ceo · AI Automation Agency</span>
    </div>
    <div class="footer-right">Confidential - Prepared exclusively for Dukkan</div>
  </footer>

</div>
<script>
  var src = document.getElementById('dukkan-logo-src').src;
  document.getElementById('dukkan-header-logo').src = src;
</script>
</body>
</html>
`;

export async function GET() {
  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

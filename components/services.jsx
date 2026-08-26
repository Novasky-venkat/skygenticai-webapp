import React from 'react';
import { BentoCard, CapsuleButton } from './base';

export const Services = () => (
  <section id="capabilities" className="section-capabilities" aria-label="Platform Capabilities">
    <div className="container">
      <div className="capabilities-header">
        <h2 className="capabilities-main-title">
          Elevate Every Touchpoint<br />with Purpose-Built<br />AI Architecture
        </h2>
        <p className="capabilities-main-desc">
          SkyGentic equips modern enterprises with intelligent autonomous systems designed to automate workflows, accelerate conversions, and deepen customer loyalty.
        </p>
      </div>

      <div className="bento-staggered-grid">
        <div className="bento-glow-backdrop" aria-hidden="true"></div>

        {/* Column 1: Left */}
        <div className="bento-column col-1">
          <BentoCard
            title="Autonomous Agentic Intelligence"
            description="Transform customer interactions with adaptive AI agents that understand context, solve multi-step inquiries dynamically, and deliver personalized experiences with human precision."
            actionText="Explore Architecture"
            href="#demo"
            icon={<span style={{ fontFamily: 'var(--font-family-display)', fontSize: '16px', fontWeight: 700, color: '#03031D' }}>Ai✦</span>}
          />
        </div>

        {/* Column 2: Middle */}
        <div className="bento-column col-2">
          <BentoCard
            title="Conversational Voice AI"
            description="Enable frictionless, hands-free verbal interactions with sub-100ms conversational voice agents that understand nuances and dialect in real time."
            actionText="Explore Architecture"
            href="#demo"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#03031D" strokeWidth="2">
                <line x1="6" y1="9" x2="6" y2="15"></line>
                <line x1="10" y1="5" x2="10" y2="19"></line>
                <line x1="14" y1="7" x2="14" y2="17"></line>
                <line x1="18" y1="9" x2="18" y2="15"></line>
              </svg>
            }
          />
          <BentoCard
            title="Cognitive Digital Concierge"
            description="Deploy brand-aligned virtual specialists that proactively guide shoppers, resolve tier-1/2 tickets, and synchronize seamlessly across every channel."
            actionText="Explore Architecture"
            href="#demo"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#03031D" strokeWidth="2">
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
              </svg>
            }
          />
        </div>

        {/* Column 3: Right */}
        <div className="bento-column col-3">
          <BentoCard
            title="Enterprise Knowledge RAG Engine"
            description="Instantly vectorize knowledge bases across internal docs, live URLs, and enterprise wikis to deliver instant, citation-grounded answers with zero hallucination."
            actionText="Explore Architecture"
            href="#demo"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#03031D" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            }
          />
          <BentoCard
            title="Omnichannel Revenue Automation"
            description="Drive tailored 1-on-1 marketing journeys with intent-triggered WhatsApp vouchers, dynamic segmentation, and automated high-converting checkout flows."
            actionText="Explore Architecture"
            href="#demo"
            icon={<span style={{ fontFamily: 'var(--font-family-display)', fontSize: '18px', fontWeight: 700, color: '#03031D' }}>$</span>}
          />
        </div>
      </div>

      <div className="capabilities-cta-wrap">
        <CapsuleButton href="#demo" variant="primary">
          Deploy Your Custom Agent
        </CapsuleButton>
      </div>
    </div>
  </section>
);

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
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#03031D" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            }
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
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#03031D" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            }
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

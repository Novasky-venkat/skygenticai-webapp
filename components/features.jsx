import React from 'react';
import { StatBlock, CapsuleButton, TrustAvatarCluster, BadgePill } from './base';

export const Features = () => (
  <section id="features" className="section-metrics" aria-label="Key Performance Metrics & Capabilities">
    <div className="container">
      <div className="features-composite-grid">
        {/* Left Column: Heading, CTA & Trust Proof */}
        <div className="features-left-block">
          <h2 style={{ color: 'var(--color-surface-white)', fontSize: '2rem', lineHeight: 1.25, marginBottom: 'var(--space-4)' }}>
            How SkyGentic AI Helps Businesses Achieve Remarkable Success
          </h2>
          <CapsuleButton href="#contact" variant="glass" style={{ marginBottom: 'var(--space-6)' }}>
            Contact Sales
          </CapsuleButton>
          <TrustAvatarCluster label="100+ Enterprise Brands Globally" />
        </div>

        {/* Middle Column: 3 Stacked Stat Counters */}
        <div className="features-stats-block">
          <StatBlock
            digit="91%"
            label="Containment Rate"
            description="Autonomous resolution of multi-step inquiries without human escalation."
          />
          <div className="stat-separator" />
          <StatBlock
            digit="85%"
            label="CSAT Satisfaction Score"
            description="Personalized, high-speed responses across all enterprise touchpoints."
          />
          <div className="stat-separator" />
          <StatBlock
            digit="1M+"
            label="Daily Messages Automated"
            description="High-availability infrastructure serving Fortune 500 commerce operations."
          />
        </div>

        {/* Right Column: 2-Column Capability Pill Grid */}
        <div className="features-chips-grid">
          <BadgePill variant="glass">Omnichannel</BadgePill>
          <BadgePill variant="glass">Workflows</BadgePill>
          <BadgePill variant="glass">Commerce</BadgePill>
          <BadgePill variant="glass">AI Assist</BadgePill>
          <BadgePill variant="glass">Conversational AI</BadgePill>
          <BadgePill variant="glass">Marketing</BadgePill>
        </div>
      </div>
    </div>
  </section>
);

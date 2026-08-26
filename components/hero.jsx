import React from 'react';
import { BadgePill, CapsuleButton, SurfaceCard } from './base';

export const Hero = () => (
  <section id="hero" className="section-hero" aria-label="Hero Introduction">
    <div className="hero-glow-spotlight" aria-hidden="true" />
    <div className="container">
      <div className="hero-grid">
        <div className="hero-content">
          <BadgePill variant="emerald" style={{ marginBottom: 'var(--space-4)' }}>
            Introducing AVA: Vantage Agentic AI
          </BadgePill>
          <h1 className="headline-homepage">Harness the Power of Agentic AI for Conversational CX</h1>
          <p className="text-lead">Next-level autonomous & purpose-driven AI chatbots transforming enterprise customer engagement with sub-50ms latency.</p>
          
          <div className="hero-cta-group">
            <CapsuleButton href="#demo" variant="primary">
              Book a Demo
            </CapsuleButton>
            <CapsuleButton href="#capabilities" variant="glass">
              Explore Capabilities
            </CapsuleButton>
          </div>
        </div>

        <div className="hero-visual-hub" aria-hidden="true">
          <SurfaceCard variant="dark-glass" className="hero-glass-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-4)' }}>
              <BadgePill variant="emerald">Autonomous Agent Active</BadgePill>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate-400)' }}>Latency: 42ms</span>
            </div>
            <div style={{ background: 'var(--color-midnight-06)', border: '1px solid var(--color-dark-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)', marginBottom: 'var(--space-3)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-green-primary)', fontWeight: 700, marginBottom: 4 }}>USER INQUIRY</div>
              <div style={{ fontSize: '0.9375rem', color: 'var(--color-surface-white)' }}>"Can you reschedule my order #8492 and apply enterprise tier credit?"</div>
            </div>
            <div style={{ background: 'rgba(13, 239, 147, 0.10)', border: '1px solid rgba(13, 239, 147, 0.3)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-green-primary)', fontWeight: 700, marginBottom: 4 }}>AGENT REASONING & EXECUTION</div>
              <div style={{ fontSize: '0.9375rem', color: 'var(--color-surface-white)' }}>"Order rescheduled to Thursday 10:00 AM. 15% enterprise credit applied successfully."</div>
            </div>
          </SurfaceCard>
        </div>
      </div>
    </div>
  </section>
);

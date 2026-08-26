import React from 'react';

export const Hero = () => (
  <section id="hero" className="section-hero" aria-label="Hero Introduction">
    <div className="hero-glow-spotlight" aria-hidden="true" />
    <div className="container">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="badge-pill sapphire" style={{ marginBottom: 'var(--space-4)' }}>
            <span style={{ display: 'inline-block', width: 6, height: 6, background: 'var(--color-sapphire-400)', borderRadius: '50%' }} />
            Introducing Vantage Agentic AI
          </div>
          <h1 className="headline-homepage">Harness the Power of Agentic AI for Conversational CX</h1>
          <p className="text-lead">Next-level autonomous & purpose-driven AI chatbots transforming enterprise customer engagement with sub-50ms latency.</p>
          
          <div className="hero-cta-group">
            <a href="#demo" className="btn-glossy-primary">
              <div className="btn-text-wrapper">
                <span className="btn-text-slide">Book a Demo</span>
                <span className="btn-text-slide">Book a Demo</span>
              </div>
              <div className="btn-icon-bubble" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </a>
            <a href="#capabilities" className="btn-glossy-secondary">
              <div className="btn-text-wrapper">
                <span className="btn-text-slide">Explore Capabilities</span>
                <span className="btn-text-slide">Explore Capabilities</span>
              </div>
              <div className="btn-icon-bubble" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        <div className="hero-visual-hub" aria-hidden="true">
          <div className="hero-glass-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-4)' }}>
              <span className="badge-pill sapphire">Autonomous Agent Active</span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate-400)' }}>Latency: 42ms</span>
            </div>
            <div style={{ background: 'var(--color-obsidian-900)', border: '1px solid var(--color-dark-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)', marginBottom: 'var(--space-3)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-sapphire-400)', fontWeight: 700, marginBottom: 4 }}>USER INQUIRY</div>
              <div style={{ fontSize: '0.9375rem', color: 'var(--color-surface-white)' }}>"Can you reschedule my order #8492 and apply enterprise tier credit?"</div>
            </div>
            <div style={{ background: 'rgba(37, 99, 235, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-sapphire-400)', fontWeight: 700, marginBottom: 4 }}>AGENT REASONING & EXECUTION</div>
              <div style={{ fontSize: '0.9375rem', color: 'var(--color-surface-white)' }}>"Order rescheduled to Thursday 10:00 AM. 15% enterprise credit applied successfully."</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

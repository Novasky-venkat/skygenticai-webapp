import React from 'react';

export const Features = () => (
  <section id="features" className="section-metrics" aria-label="Key Performance Metrics">
    <div className="container">
      <div className="metrics-bento-grid">
        <div className="metric-tile">
          <div className="stat-digit">91%</div>
          <div className="stat-label">Containment Rate</div>
          <p style={{ fontSize: '0.875rem', marginTop: 'var(--space-2)', marginBottom: 0, color: 'var(--color-slate-400)' }}>
            Autonomous resolution of complex multi-step customer inquiries without human escalations.
          </p>
        </div>
        <div className="metric-tile">
          <div className="stat-digit">85%</div>
          <div className="stat-label">CSAT Satisfaction Score</div>
          <p style={{ fontSize: '0.875rem', marginTop: 'var(--space-2)', marginBottom: 0, color: 'var(--color-slate-400)' }}>
            Instantaneous, personalized, and empathetic responses across all channels.
          </p>
        </div>
        <div className="metric-tile">
          <div className="stat-digit">1M+</div>
          <div className="stat-label">Daily Messages Automated</div>
          <p style={{ fontSize: '0.875rem', marginTop: 'var(--space-2)', marginBottom: 0, color: 'var(--color-slate-400)' }}>
            High-availability infrastructure serving Fortune 500 commerce operations globally.
          </p>
        </div>
      </div>
    </div>
  </section>
);

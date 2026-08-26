import React from 'react';
import { CapsuleButton, BadgePill } from './base';

export const Testimonials = () => (
  <section id="testimonials" className="section-testimonials" aria-label="Customer Success Stories">
    <div className="container">
      <div className="testimonials-grid">
        <div>
          <BadgePill variant="emerald" style={{ marginBottom: 'var(--space-3)' }}>Proven Impact</BadgePill>
          <h2 style={{ color: 'var(--color-surface-white)' }}>Hear What CX Leaders Are Saying</h2>
          <p style={{ color: 'var(--color-slate-400)', marginBottom: 'var(--space-6)' }}>
            Measured efficiency gains and transformative customer satisfaction across top global brands.
          </p>
          <CapsuleButton href="#contact" variant="glass">
            Let's Talk
          </CapsuleButton>
        </div>

        <div className="testimonials-ribbon" role="region" aria-label="Interactive Testimonials">
          <div className="testimonial-card active" tabIndex={0}>
            <div style={{ fontWeight: 700, color: 'var(--color-surface-white)', marginBottom: 'var(--space-2)' }}>Francesca L.</div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate-400)', marginBottom: 'var(--space-3)' }}>VP of CX, Global Retail</div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-200)' }}>"SkyGentic AI automated 91% of our incoming peak support volume with zero customer friction."</p>
          </div>
          <div className="testimonial-card" tabIndex={0}>
            <div style={{ fontWeight: 700, color: 'var(--color-surface-white)', marginBottom: 'var(--space-2)' }}>David C.</div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate-400)', marginBottom: 'var(--space-3)' }}>Head of Commerce, RetailHub</div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-200)' }}>"Our conversion rates on WhatsApp increased by 3.4x within two weeks of launch."</p>
          </div>
          <div className="testimonial-card" tabIndex={0}>
            <div style={{ fontWeight: 700, color: 'var(--color-surface-white)', marginBottom: 'var(--space-2)' }}>Sarah M.</div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--color-slate-400)', marginBottom: 'var(--space-3)' }}>Director of Ops, Synapse</div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-200)' }}>"The fastest onboarding and highest quality agent copilot we have ever evaluated."</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

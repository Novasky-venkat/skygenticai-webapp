import React from 'react';
import { PrimaryButton, GlassButton } from './buttons';

export const Hero = () => {
  return (
    <section className="section section-hero">
      <div className="container">
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <div className="badge-pill lime">
            <span>Introducing AVA: AiChat Vantage AI</span>
          </div>

          <h1 className="display-1 text-white" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
            Harness the Power of Agentic AI for Conversational CX
          </h1>

          <p className="text-lead" style={{ color: 'var(--color-midnight-01)', maxWidth: '640px', margin: '0 auto var(--space-8)' }}>
            Next-level autonomous & purpose-driven AI agents and chatbots engineered to transform enterprise customer engagement.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <PrimaryButton text="Book a Demo" href="#contact" />
            <GlassButton text="Explore Platform" href="#services" />
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { CapsuleButton } from './base';

export const Hero = () => (
  <section id="hero" className="section-hero" aria-label="Hero Introduction">
    <div className="container">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-eyebrow">Introducing Vantage: Next-Gen Autonomous AI Agents</div>
          <h1 className="headline-homepage">
            Empower Enterprise<br />Customer Journeys with<br />Autonomous Agentic AI
          </h1>
          <p className="hero-lead">
            Deploy self-reasoning AI workforces that resolve complex requests, orchestrate omnichannel operations, and scale customer delight effortlessly.
          </p>
          
          <div className="hero-cta-group">
            <CapsuleButton href="#demo" variant="primary">
              Experience Vantage
            </CapsuleButton>
          </div>
        </div>
      </div>
    </div>
  </section>
);

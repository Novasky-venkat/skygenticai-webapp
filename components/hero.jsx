import React from 'react';
import { CapsuleButton } from './base';

export const Hero = () => (
  <section id="hero" className="section-hero" aria-label="Hero Introduction">
    <div className="container">
      <div className="hero-grid">
        <div>
          <div className="hero-eyebrow">Introducing AVA: SkyGentic Vantage AI</div>
          <h1 className="headline-homepage">
            Harness the Power of<br />Agentic AI for<br />Conversational CX
          </h1>
          <p className="hero-lead">
            Next level Autonomous & Purpose-Driven Chatbots for<br />transforming businesses.
          </p>
          
          <div className="hero-cta-group">
            <CapsuleButton href="#demo" variant="primary">
              Book a Demo
            </CapsuleButton>
          </div>
        </div>

        <div className="hero-visual-container" aria-hidden="true">
          <div className="hero-3d-bot">
            <div className="bot-eye-glow" />
          </div>

          <div className="floating-mic-chip">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9741FE" strokeWidth="2">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

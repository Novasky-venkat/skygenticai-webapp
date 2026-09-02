import React from 'react';
import { CapsuleButton } from './CapsuleButton';

export function PreFooterCTA({
  title = "Ready to Deploy Your Autonomous AI Workforce?",
  description = "Transform enterprise operations with intelligent agents that execute multi-intent workflows, reference vector knowledge base in real time, and scale alongside your team.",
  buttonText = "Schedule a Demo",
  buttonHref = "#demo",
  ariaLabel = "Schedule a Demo with SkyGentic AI"
}) {
  return (
    <section id="cta" className="section-pre-footer-cta" aria-label={title}>
      <div className="container-focus">
        <div className="pre-footer-cta-composition">
          <h2 className="pre-footer-cta-title">{title}</h2>
          <p className="pre-footer-cta-desc">{description}</p>
          <div className="pre-footer-cta-actions">
            <CapsuleButton
              href={buttonHref}
              variant="primary"
              ariaLabel={ariaLabel}
            >
              {buttonText}
            </CapsuleButton>
          </div>
        </div>
      </div>
    </section>
  );
}

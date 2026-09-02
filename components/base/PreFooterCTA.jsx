import React from 'react';
import { CapsuleButton } from './CapsuleButton';

export function PreFooterCTA({
  title = "Ready to Build Your Autonomous Enterprise Workforce?",
  description,
  buttonText = "Schedule a Demo",
  buttonHref = "#demo",
  ariaLabel = "Schedule a Demo with SkyGentic AI"
}) {
  const resolvedDescription = description ?? (
    <>
      Deploy AI agents that work 24/7, automate operations,<br />
      and scale alongside your business&mdash;without adding<br />
      operational complexity.
    </>
  );

  return (
    <section id="cta" className="section-pre-footer-cta" aria-label={title}>
      <div className="container-focus">
        <div className="pre-footer-cta-composition">
          <h2 className="pre-footer-cta-title">{title}</h2>
          <p className="pre-footer-cta-desc">{resolvedDescription}</p>
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

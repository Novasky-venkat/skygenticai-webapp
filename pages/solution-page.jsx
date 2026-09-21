import React from "react";

const ArrowIcon = () => (
  <span className="btn-icon-bubble" aria-hidden="true">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  </span>
);

const CtaButton = ({ children, wide = false }) => (
  <a href="schedule-demo.html" className={`btn-primary solution-cta-button${wide ? " solution-cta-button--wide" : ""}`}>
    <span className="btn-text-wrapper">
      <span className="btn-text-slide">{children}</span>
      <span className="btn-text-slide">{children}</span>
    </span>
    <ArrowIcon />
  </a>
);

const WorkflowVisual = ({ nodes }) => (
  <div className="solution-visual" aria-label="AI workflow visual">
    <svg className="solution-visual-lines" viewBox="0 0 520 420" aria-hidden="true" focusable="false">
      <path className="solution-visual-line" d="M118 86 C232 100 302 142 406 160" />
      <path className="solution-visual-line" d="M402 202 C320 242 252 262 148 300" />
      <path className="solution-visual-line" d="M170 334 C254 382 350 346 424 350" />
    </svg>
    {nodes.map((node, index) => (
      <article key={node.label} className={`solution-node solution-node--${["one", "two", "three", "four"][index]}`}>
        <div className="solution-node-header">
          <span className="solution-node-label">{node.label}</span>
          <span className="solution-node-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /></svg>
          </span>
        </div>
        <strong className="solution-node-title">{node.title}</strong>
        {node.copy && <p className="solution-node-text">{node.copy}</p>}
        {node.status && <span className="solution-status">{node.status}</span>}
      </article>
    ))}
  </div>
);

export function SolutionPage({ page }) {
  return (
    <main id="main-content" className="solution-page-shell">
      <section className="solution-hero" aria-labelledby={`${page.slug}-title`}>
        <div className="container">
          <div className="solution-hero-grid">
            <div>
              <span className="solution-kicker">{page.label}</span>
              <h1 id={`${page.slug}-title`} className="solution-title">{page.headline}</h1>
              <p className="solution-lead">{page.description}</p>
              <div className="solution-actions">
                <CtaButton>{page.heroCta}</CtaButton>
              </div>
            </div>
            <WorkflowVisual nodes={page.visualNodes} />
          </div>
        </div>
      </section>

      <section className="solution-section solution-section--soft" aria-labelledby={`${page.slug}-main-title`}>
        <div className="container">
          <div className="solution-section-header">
            <span className="solution-section-label">{page.mainLabel}</span>
            <h2 id={`${page.slug}-main-title`} className="solution-section-title">{page.mainHeading}</h2>
            {page.mainDescription && <p className="solution-section-copy">{page.mainDescription}</p>}
          </div>
          <div className={`solution-card-grid${page.capabilities.length > 3 ? " solution-card-grid--six" : ""}`}>
            {page.capabilities.map((card, index) => (
              <article className="solution-card" key={card.title}>
                <span className="solution-card-number">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="solution-card-title">{card.title}</h3>
                <p className="solution-card-copy">{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {page.process && (
        <section className="solution-section" aria-labelledby={`${page.slug}-process-title`}>
          <div className="container">
            <div className="solution-section-header">
              <span className="solution-section-label">{page.process.label}</span>
              <h2 id={`${page.slug}-process-title`} className="solution-section-title">{page.process.heading}</h2>
            </div>
            <div className={`solution-process solution-process--${page.process.steps.length === 5 ? "five" : "four"}`}>
              {page.process.steps.map((step, index) => (
                <article className="solution-process-step" key={step.title}>
                  <span className="solution-process-dot" aria-hidden="true" />
                  <span className="solution-process-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="solution-process-title">{step.title}</h3>
                  {step.copy && <p className="solution-process-copy">{step.copy}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.journey && (
        <section className="solution-section solution-section--tint" aria-labelledby={`${page.slug}-journey-title`}>
          <div className="container">
            <div className="solution-section-header">
              <span className="solution-section-label">{page.journey.label}</span>
              <h2 id={`${page.slug}-journey-title`} className="solution-section-title">{page.journey.heading}</h2>
            </div>
            <div className="solution-journey">
              {page.journey.steps.map((step) => <div className="solution-journey-step" key={step}>{step}</div>)}
            </div>
          </div>
        </section>
      )}

      {page.integrations && (
        <section className="solution-section solution-section--tint" aria-labelledby={`${page.slug}-systems-title`}>
          <div className="container">
            <div className="solution-section-header">
              <span className="solution-section-label">{page.integrations.label}</span>
              <h2 id={`${page.slug}-systems-title`} className="solution-section-title">{page.integrations.heading}</h2>
            </div>
            <div className="solution-integration-grid">
              {page.integrations.items.map((item) => <div className="solution-integration-card" key={item}>{item}</div>)}
            </div>
          </div>
        </section>
      )}

      <section className="solution-cta" aria-labelledby={`${page.slug}-cta-title`}>
        <div className="container-focus solution-cta-inner">
          <h2 id={`${page.slug}-cta-title`} className="solution-cta-title">{page.ctaHeading}</h2>
          <CtaButton wide={page.ctaButton.length > 30}>{page.ctaButton}</CtaButton>
        </div>
      </section>
    </main>
  );
}

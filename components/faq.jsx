import React from 'react';
import { SurfaceCard, BadgePill, AccordionDisclosure } from './base';

export const Faq = () => (
  <section id="faq" className="section-faq" aria-label="Frequently Asked Questions">
    <div className="container-focus">
      <div className="faq-header">
        <BadgePill variant="emerald" style={{ marginBottom: 'var(--space-3)' }}>Clear Answers</BadgePill>
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know about our Agentic AI infrastructure and deployment.</p>
      </div>

      <SurfaceCard variant="light" className="faq-card-container">
        <AccordionDisclosure id="1" title="What is Agentic AI and how does it differ from chatbots?">
          Agentic AI autonomously reasons, utilizes external tools, queries knowledge bases dynamically, and executes multi-step business transactions without manual static flowcharts.
        </AccordionDisclosure>
        <AccordionDisclosure id="2" title="Which messaging channels are supported out of the box?">
          WhatsApp, Messenger, Instagram, LINE, KakaoTalk, web widgets, and voice endpoints are natively supported.
        </AccordionDisclosure>
        <AccordionDisclosure id="3" title="How does SkyGentic AI ensure digital accessibility?">
          Every control is WCAG 2.1 AA compliant with high-contrast ratios, complete keyboard operability, and full ARIA landmark trees.
        </AccordionDisclosure>
      </SurfaceCard>
    </div>
  </section>
);

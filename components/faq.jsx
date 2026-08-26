import React, { useState } from 'react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is Agentic AI and how does it differ from traditional chatbots?',
      a: 'Agentic AI goes beyond rule-based responses by autonomously reasoning, utilizing tools, crawling dynamic knowledge bases, and executing multi-step business workflows without constant manual scripting.'
    },
    {
      q: 'Which channels does the AiChat platform integrate with?',
      a: 'AiChat natively integrates with WhatsApp, Instagram, Messenger, LINE, KakaoTalk, web widgets, voice systems, and enterprise backends like Shopify and Salesforce.'
    },
    {
      q: 'How fast can we deploy an AI chatbot or agent?',
      a: 'With pre-built connectors and Agent CoPilot knowledge ingestion, businesses can launch a fully trained, secure agent in less than 48 hours.'
    },
    {
      q: 'Is customer data secured and compliant with enterprise standards?',
      a: 'Yes, AiChat enforces end-to-end data encryption, SOC2 compliance, role-based access control (RBAC), and sanitization of sensitive customer data.'
    }
  ];

  return (
    <section className="section" id="faq" style={{ backgroundColor: 'var(--color-surface-light)' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <div className="badge-pill purple">Frequently Asked Questions</div>
          <h2 className="display-2" style={{ marginTop: 'var(--space-2)' }}>Everything You Need to Know</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="card"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                style={{
                  cursor: 'pointer',
                  padding: 'var(--space-6)',
                  borderColor: isOpen ? 'var(--color-purple-04)' : 'var(--color-surface-border)',
                  background: isOpen ? 'var(--color-surface-white)' : 'var(--color-surface-white)',
                  transition: 'all var(--transition-normal)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 className="display-5" style={{ margin: 0, color: 'var(--color-midnight-06)' }}>
                    {faq.q}
                  </h4>
                  <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: isOpen ? 'var(--color-purple-04)' : 'var(--color-midnight-02)' }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                {isOpen && (
                  <p style={{ marginTop: 'var(--space-4)', marginBottom: 0, color: 'var(--color-midnight-02)', fontSize: 'var(--font-size-base)' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

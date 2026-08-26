import React, { useState } from 'react';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Francesca Lopez',
      role: 'Marketing Communications Manager',
      company: 'Hatten Melaka',
      quote: 'AiChat has revolutionised how we connect with our guests. By automating FAQ, it ensures immediate responses, enhancing guest satisfaction while easing our team’s workflow.',
    },
    {
      name: 'David Chen',
      role: 'Head of Customer Experience',
      company: 'Global Retail Corp',
      quote: 'The agentic workflows reduced our first-response latency by 85% while drastically increasing cart recovery conversions.',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Director of Digital Operations',
      company: 'OmniHealth AI',
      quote: 'Deploying AiChat gave us a secure, enterprise-grade AI knowledge hub that our agents and customers love.',
    },
    {
      name: 'Marcus Vance',
      role: 'VP of Growth',
      company: 'NextGen Fintech',
      quote: 'Voice AI and programmable messaging integration made multi-country expansion effortless.',
    }
  ];

  return (
    <section className="section section-dark">
      <div className="container">
        <div style={{ maxWidth: '640px', marginBottom: 'var(--space-12)' }}>
          <div className="badge-pill lime">Real Customer Stories</div>
          <h2 className="display-2 text-white" style={{ marginTop: 'var(--space-2)' }}>
            Hear What Forward-Thinking Leaders Are Saying
          </h2>
        </div>

        <div className="testimonial-container">
          {testimonials.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`testimonial-card ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveIndex(idx)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '280px',
                }}
              >
                <div>
                  <div style={{ color: 'var(--color-green-primary)', fontSize: '1.5rem', marginBottom: 'var(--space-3)' }}>“</div>
                  <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-relaxed)' }}>
                    {item.quote}
                  </p>
                </div>
                <div style={{ marginTop: 'var(--space-6)', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: 'var(--space-4)' }}>
                  <div style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-surface-white)' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-midnight-01)' }}>
                    {item.role}, {item.company}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

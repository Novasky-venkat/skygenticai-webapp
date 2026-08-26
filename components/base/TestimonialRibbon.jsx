import React, { useState } from 'react';
import { CapsuleButton } from './CapsuleButton';

export const TestimonialRibbon = ({
  testimonials = [
    {
      id: 1,
      name: 'Francesca Lopez',
      role: 'Marketing Communications Manager, Hatten Melaka',
      quote: 'SkyGentic has completely streamlined our hospitality booking flows. Customer inquiries receive immediate answers in seconds, drastically boosting our room reservation rate.',
      logo: 'HATTEN'
    },
    {
      id: 2,
      name: 'Danny Chen',
      role: 'Marketing Manager, Petron',
      quote: 'The omnichannel campaigns we orchestrated through WhatsApp and web widgets helped us achieve a 48% conversion lift with zero manual overhead.',
      logo: 'PETRON'
    },
    {
      id: 3,
      name: 'Malik Murad Ali',
      role: 'Director of IT, Digital, HR and LPS, MYDIN',
      quote: 'Deploying SkyGentic Agent CoPilot allowed our customer support team to handle 3x more complex retail inquiries without increasing headcount.',
      logo: 'MYDIN'
    },
    {
      id: 4,
      name: 'Joe Ow',
      role: 'Chief Executive Officer, SISTIC Singapore',
      quote: 'SkyGentic’s conversational service solution has enabled us to engage at scale and deepen our relationships with customers on a 1-on-1 basis. We’ve seen proven success for the past 2 years and would be excited to continue this journey with SkyGentic.',
      logo: 'sistic'
    }
  ],
  title = 'Hear What People Are Saying',
  description = 'Explore real customer feedback and see how SkyGentic is revolutionizing service, engagement, and business growth.',
  ctaText = "Let's talk",
  ctaHref = '#contact',
  className = ''
}) => {
  const [activeIndex, setActiveIndex] = useState(3); // Default to Joe Ow (Card 4)

  return (
    <section id="testimonials" className={`section-testimonial-ribbon ${className}`} aria-label="Customer Testimonials">
      <div className="testimonial-main-wrapper">
        {/* Left Column: Heading, Subtitle, and CTA Button */}
        <div className="testimonial-left-wrapper">
          <h2 className="testimonial-title">{title}</h2>
          <p className="testimonial-details">{description}</p>
          <div className="testimonial-cta-wrap">
            <CapsuleButton href={ctaHref} variant="primary">
              {ctaText}
            </CapsuleButton>
          </div>
        </div>

        {/* Right Column: 4 Expanding Accordion Panels */}
        <div className="testimonial-right-wrapper" role="tablist" aria-label="Testimonial reviews">
          {testimonials.map((t, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={t.id}
                role="tab"
                tabIndex={0}
                aria-selected={isActive}
                className={`testimonial-panel ${isActive ? 'active' : 'collapsed'}`}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveIndex(idx);
                }}
              >
                {isActive ? (
                  /* Expanded Active Card View with Glowing Mesh */
                  <div className="panel-expanded-view">
                    <div className="expanded-header">
                      <h3 className="expanded-name">{t.name}</h3>
                      <div className="expanded-role">{t.role}</div>
                    </div>

                    <p className="expanded-quote">“{t.quote}”</p>

                    <div className="expanded-footer">
                      <span className="expanded-logo-badge">{t.logo}</span>
                    </div>
                  </div>
                ) : (
                  /* Collapsed Card View */
                  <div className="panel-collapsed-view">
                    <div className="collapsed-top">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                    <div className="collapsed-middle">
                      <span className="collapsed-role">{t.role}</span>
                    </div>
                    <div className="collapsed-bottom">
                      <h3 className="collapsed-name">{t.name}</h3>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

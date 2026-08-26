import React, { useState } from 'react';
import { CapsuleButton } from './CapsuleButton';

export const TestimonialRibbon = ({
  testimonials = [
    {
      id: 1,
      name: 'Francesca Lopez',
      role: 'Marketing Communications Manager, Hatten Melaka',
      quote: 'SkyGentic has completely transformed our hospitality engagement. Inquiries across WhatsApp and Web receive immediate human-like assistance, drastically boosting our direct booking conversions.',
      logo: 'HATTEN'
    },
    {
      id: 2,
      name: 'Danny Chen',
      role: 'Marketing Manager, Petron',
      quote: 'The Launch of Virtual Assistance-Tania has enabled our customers to learn about the benefits and the miles loyalty card, discover merchandise rewards redemption, locate stations, and find a Gasul dealer with ease and convenience. Overall, the interactive chatbot experience has been well-received and contributed significantly to the Miles loyalty card activation rate. We are excited and look forward to a more fruitful collaboration with SkyGentic.',
      logo: 'PETRON'
    },
    {
      id: 3,
      name: 'Malik Murad Ali',
      role: 'Director of IT, Digital, HR and LPS, MYDIN',
      quote: 'Deploying SkyGentic Agent CoPilot allowed our retail customer support team to resolve 3x more shopper queries in real-time, delivering sub-second response times without expanding support shifts.',
      logo: 'MYDIN'
    },
    {
      id: 4,
      name: 'Joe Ow',
      role: 'Chief Executive Officer, SISTIC Singapore',
      quote: 'SkyGentic’s conversational service solution has enabled us to engage at scale and deepen our relationships with customers on a 1-on-1 basis. We’ve seen proven success for the past 2 years and would be excited to continue this journey with SkyGentic.',
      logo: 'SISTIC'
    }
  ],
  title = 'Hear What People Are Saying',
  description = 'Explore real customer feedback and see how SkyGentic is revolutionizing service, engagement, and business growth.',
  ctaText = "Let's talk",
  ctaHref = '#contact',
  className = ''
}) => {
  const [activeIdx, setActiveIdx] = useState(1); // Default to Danny Chen (Card 2) matching reference

  return (
    <section id="testimonials" className={`section-testimonial-ribbon ${className}`} aria-label="Customer Testimonials">
      <div className="testimonial-main-wrapper">
        {/* Left Column: Fixed Header & CTA */}
        <div className="testimonial-left-wrapper">
          <div>
            <h2 className="testimonial-title">{title}</h2>
            <p className="testimonial-details">{description}</p>
          </div>
          <div className="testimonial-cta-wrap">
            <CapsuleButton href={ctaHref} variant="primary">
              {ctaText}
            </CapsuleButton>
          </div>
        </div>

        {/* Right Column: Horizontal Scrollable & Expanding Ribbon Track */}
        <div className="testimonial-right-wrapper" role="tablist" aria-label="Customer Reviews Track">
          {testimonials.map((t, idx) => {
            const isActive = idx === activeIdx;
            return (
              <div
                key={t.id}
                role="tab"
                tabIndex={0}
                aria-selected={isActive}
                className={`testimonial-panel ${isActive ? 'active' : 'collapsed'}`}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveIdx(idx);
                }}
              >
                {isActive ? (
                  /* Expanded Active Card View */
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
                  /* Collapsed Brief Card View */
                  <div className="panel-collapsed-view">
                    <div className="collapsed-top" aria-hidden="true">
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

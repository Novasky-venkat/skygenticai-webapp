import React, { useState } from 'react';
import { CapsuleButton } from './CapsuleButton';

export const TestimonialRibbon = ({
  testimonials = [
    {
      id: 1,
      name: 'Elena Rostova',
      role: 'Head of Customer Experience, Apex Hospitality Group',
      quote: 'SkyGentic completely redefined our global guest booking experience. Inquiries across WhatsApp and mobile web are resolved in seconds, delivering a 42% surge in direct reservation bookings without adding support staff.',
      logo: 'APEX HOTELS'
    },
    {
      id: 2,
      name: 'Marcus Vance',
      role: 'VP of Digital Innovation, Solara Energy',
      quote: 'Deploying SkyGentic’s autonomous agent ecosystem has empowered our customers to effortlessly manage energy subscriptions, track rewards, and locate service hubs 24/7. The personalized conversational flows drove a 54% boost in member activation rates and established a new benchmark for our digital CX.',
      logo: 'SOLARA'
    },
    {
      id: 3,
      name: 'Kavita Patel',
      role: 'Chief Technology Officer, MetroRetail Global',
      quote: 'Integrating SkyGentic Agent CoPilot into our retail operations allowed our customer service team to resolve 3x more shopper queries in real-time, cutting average resolution time by 65% across 200+ global storefronts.',
      logo: 'METRORETAIL'
    },
    {
      id: 4,
      name: 'Arthur Sterling',
      role: 'Chief Executive Officer, Vantage Point FinTech',
      quote: 'SkyGentic’s enterprise conversational infrastructure has allowed us to deliver hyper-personalized financial guidance at scale. Over the past two years, customer satisfaction reached an all-time high of 98.4%, and we consider them an indispensable technology partner.',
      logo: 'VANTAGEPOINT'
    }
  ],
  title = 'Trusted by Forward-Thinking Industry Leaders',
  description = 'Discover how innovative global enterprises leverage SkyGentic to automate customer interactions, elevate service benchmarks, and unlock new revenue streams.',
  ctaText = 'Connect With Us',
  ctaHref = '#contact',
  className = ''
}) => {
  const [activeIdx, setActiveIdx] = useState(1);

  return (
    <section id="testimonials" className={`section-testimonial-ribbon ${className}`} aria-label="Customer Success Testimonials">
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

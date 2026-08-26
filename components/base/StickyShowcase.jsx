import React from 'react';

export const StickyShowcase = ({
  cards = [
    {
      id: 1,
      title: 'Knowledge Base Building',
      badge: 'Knowledge Hub',
      gradient: 'linear-gradient(145deg, #06063A 0%, #2A1654 60%, #0DEF93 110%)',
      query: 'What are the key features of the SkyGentic Mortgage Guide?',
      answer: 'Extracted from uploaded PDF: Automated pre-qualification, instant rate calculator, and AI-powered document verification.',
      status: 'Live & Synced',
      topOffset: '140px'
    },
    {
      id: 2,
      title: 'Lead Gen and Marketing Flow Builder',
      badge: 'Campaign Engine',
      gradient: 'linear-gradient(145deg, #04042B 0%, #4B207F 60%, #9741FE 110%)',
      query: 'Trigger automated WhatsApp nurture flow after user signup?',
      answer: 'Flow active: Instant welcome voucher sent. Nurture sequence scheduled for Day 3 and Day 7 with 48.2% open rate.',
      status: 'Automated',
      topOffset: '170px'
    },
    {
      id: 3,
      title: 'Agent Assist on Live Chat',
      badge: 'Unified Inbox',
      gradient: 'linear-gradient(145deg, #02020F 0%, #1E3A8A 60%, #2563EB 110%)',
      query: 'Seamless escalation from bot to human support specialist?',
      answer: 'Sentiment flagged: Frustrated user. Full chat transcript and customer CRM context handed off to agent Sarah M. in 1.2s.',
      status: 'Protected',
      topOffset: '200px'
    }
  ],
  title = 'Business Messaging Meets AI-Powered Chatbots',
  description = 'Automate, Engage, and Convert with Ease. Streamline customer interactions, automate marketing, and build intelligent knowledge bases with AI-powered solutions designed to enhance effciency and drive results.',
  className = ''
}) => (
  <section id="showcase" className={`section-sticky-showcase ${className}`} aria-label="Business Messaging Showcase">
    <div className="container">
      <div className="sticky-showcase-grid">
        {/* Left Column: Vertically Stacking Scrollable Cards */}
        <div className="sticky-cards-column">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              className="sticky-card-item"
              style={{
                position: 'sticky',
                top: card.topOffset,
                zIndex: idx + 1
              }}
            >
              <div className="sticky-card-surface">
                <div className="sticky-card-mockup" style={{ background: card.gradient }}>
                  <div className="sticky-wave-mesh" aria-hidden="true" />
                  
                  {/* Top Bar */}
                  <div className="mockup-topbar">
                    <div className="mockup-dots" aria-hidden="true">
                      <span className="dot red" />
                      <span className="dot yellow" />
                      <span className="dot green" />
                    </div>
                    <span className="mockup-badge">{card.badge}</span>
                    <span className="mockup-status">{card.status}</span>
                  </div>

                  {/* Chat Dialogue */}
                  <div className="mockup-dialogue">
                    <div className="chat-bubble user">
                      <span className="bubble-label">USER INQUIRY</span>
                      <p>{card.query}</p>
                    </div>
                    <div className="chat-bubble agent">
                      <span className="bubble-label">AI REASONING & OUTPUT</span>
                      <p>{card.answer}</p>
                    </div>
                  </div>
                </div>

                {/* Card Caption Label Below */}
                <div className="sticky-card-caption">
                  <h3 className="sticky-caption-title">{card.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Sticky Title & Description Card */}
        <div className="sticky-content-column">
          <div className="sticky-white-panel">
            <h2 className="sticky-panel-title">
              Business<br />Messaging<br />Meets AI-<br />Powered<br />Chatbots
            </h2>
            <p className="sticky-panel-desc">{description}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

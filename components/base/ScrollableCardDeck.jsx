import React, { useState } from 'react';

export const ScrollableCardDeck = ({
  cards = [
    {
      id: 'knowledge',
      title: 'Knowledge Base Building',
      badge: 'Knowledge Hub',
      gradient: 'var(--bg-gradient-knowledge)',
      query: 'What are the key features of the SkyGentic Mortgage Guide?',
      answer: 'Extracted from uploaded PDF: Automated pre-qualification, instant rate calculator, and AI-powered document verification.',
      status: 'Live & Synced'
    },
    {
      id: 'marketing',
      title: 'Lead Gen and Marketing Flow Builder',
      badge: 'Campaign Engine',
      gradient: 'var(--bg-gradient-ai-showcase)',
      query: 'Trigger automated WhatsApp nurture flow after user signup?',
      answer: 'Flow active: Instant welcome voucher sent. Nurture sequence scheduled for Day 3 and Day 7 with 48.2% open rate.',
      status: 'Automated'
    },
    {
      id: 'omnichannel',
      title: 'Omnichannel Inbox & Live Agent Handoff',
      badge: 'Unified Inbox',
      gradient: 'linear-gradient(145deg, var(--color-blue-100) 0%, var(--color-teal-soft) 100%)',
      query: 'Seamless escalation from bot to human support specialist?',
      answer: 'Sentiment flagged: Frustrated user. Full chat transcript and customer CRM context handed off to agent Sarah M. in 1.2s.',
      status: 'Protected'
    }
  ],
  rightTitle = 'Business Messaging Meets AI-Powered Chatbots',
  rightDescription = 'Automate, Engage, and Convert with Ease. Streamline customer interactions, automate marketing, and build intelligent knowledge bases with AI-powered solutions designed to enhance efficiency and drive results.',
  className = ''
}) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  return (
    <section id="showcase" className={`section-scrollable-deck ${className}`} aria-label="Interactive Product Showcase">
      <div className="container">
        <div className="scrollable-deck-grid">
          {/* Left Column: Stacked Interactive / Scrollable Cards */}
          <div className="deck-left-wrapper">
            {/* Layered Top Gradient Tabs */}
            <div className="deck-tab-headers" role="tablist" aria-label="Card Tabs">
              {cards.map((card, idx) => (
                <button
                  key={card.id}
                  role="tab"
                  aria-selected={idx === activeCardIndex}
                  className={`deck-tab-edge ${idx === activeCardIndex ? 'active' : ''}`}
                  style={{ background: card.gradient }}
                  onClick={() => setActiveCardIndex(idx)}
                >
                  <span className="sr-only">{card.title}</span>
                </button>
              ))}
            </div>

            {/* Active Card Body */}
            <div className="deck-card-surface">
              <div
                className="deck-ui-mockup"
                style={{ background: cards[activeCardIndex].gradient }}
              >
                {/* Wave Graphic Mesh */}
                <div className="deck-wave-mesh" aria-hidden="true" />

                {/* Window Header */}
                <div className="deck-mockup-topbar">
                  <div className="mockup-dots">
                    <span className="dot" style={{ background: 'var(--color-blue-900)' }} />
                    <span className="dot" style={{ background: 'var(--color-amber)' }} />
                    <span className="dot" style={{ background: 'var(--color-teal)' }} />
                  </div>
                  <span className="deck-mockup-badge">{cards[activeCardIndex].badge}</span>
                  <span className="deck-mockup-status">{cards[activeCardIndex].status}</span>
                </div>

                {/* Dashboard / Chat Dialogue */}
                <div className="deck-mockup-content">
                  <div className="deck-chat-bubble user">
                    <span className="bubble-tag">USER INQUIRY</span>
                    <p>{cards[activeCardIndex].query}</p>
                  </div>
                  <div className="deck-chat-bubble agent">
                    <span className="bubble-tag">AI REASONING & OUTPUT</span>
                    <p>{cards[activeCardIndex].answer}</p>
                  </div>
                </div>
              </div>

              {/* Caption Label Below Image */}
              <div className="deck-card-footer">
                <h4 className="deck-caption-name">{cards[activeCardIndex].title}</h4>
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="deck-nav-dots" aria-label="Deck pagination">
              {cards.map((card, idx) => (
                <button
                  key={card.id}
                  className={`deck-dot ${idx === activeCardIndex ? 'active' : ''}`}
                  onClick={() => setActiveCardIndex(idx)}
                  aria-label={`View ${card.title}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Clean White Card */}
          <div className="deck-right-wrapper">
            <div className="deck-right-card">
              <h2 className="deck-right-title">{rightTitle}</h2>
              <p className="deck-right-desc">{rightDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

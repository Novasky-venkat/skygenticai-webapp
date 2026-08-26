import React, { useState } from 'react';

export const StackedDeck = ({
  cards = [
    {
      id: 1,
      title: 'Knowledge Base Building',
      gradient: 'linear-gradient(135deg, #06063A 0%, #3B1F6D 60%, #0DEF93 100%)',
      badge: 'Knowledge Engine',
      query: 'What are the key features of SkyGentic AI?',
      answer: 'SkyGentic delivers autonomous agents, sub-50ms latency, and enterprise tool integrations out of the box.'
    },
    {
      id: 2,
      title: 'Conversational Marketing Automation',
      gradient: 'linear-gradient(135deg, #04042B 0%, #4B207F 60%, #7131BE 100%)',
      badge: 'Marketing Flows',
      query: 'Can you trigger a 15% VIP discount on WhatsApp checkout?',
      answer: 'Segment verified: Customer is VIP Tier. 15% coupon applied dynamically to cart #9284.'
    },
    {
      id: 3,
      title: 'Omnichannel CX Management',
      gradient: 'linear-gradient(135deg, #02020F 0%, #1E3A8A 60%, #2563EB 100%)',
      badge: 'Unified Inbox',
      query: 'How many customer conversations were automated today?',
      answer: '94.2% containment rate across WhatsApp, Web Widget, and Voice channels.'
    }
  ],
  className = ''
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`stacked-deck-container ${className}`} role="region" aria-label="Interactive Capabilities Showcase">
      <div className="stacked-deck-viewport">
        {cards.map((card, idx) => {
          const isTop = idx === activeIndex;
          const offsetIndex = (idx - activeIndex + cards.length) % cards.length;
          
          return (
            <div
              key={card.id}
              className={`stacked-card-item ${isTop ? 'active' : 'stacked'}`}
              style={{
                zIndex: cards.length - offsetIndex,
                transform: `translateY(-${offsetIndex * 12}px) scale(${1 - offsetIndex * 0.04})`,
                opacity: offsetIndex > 2 ? 0 : 1 - offsetIndex * 0.15,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onClick={() => setActiveIndex(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveIndex(idx);
              }}
              tabIndex={0}
              role="button"
              aria-label={`View ${card.title}`}
            >
              {/* Stacked Top Gradient Tab Edge */}
              <div className="stacked-card-tab-edge" style={{ background: card.gradient }} />

              {/* Card Canvas & UI Mockup */}
              <div className="stacked-card-body">
                <div className="stacked-ui-mockup" style={{ background: card.gradient }}>
                  <div className="mockup-header">
                    <span className="mockup-dot red" />
                    <span className="mockup-dot yellow" />
                    <span className="mockup-dot green" />
                    <span className="mockup-badge">{card.badge}</span>
                  </div>

                  <div className="mockup-chat-window">
                    <div className="mockup-chat-bubble user">
                      <span className="bubble-label">USER</span>
                      <p>{card.query}</p>
                    </div>
                    <div className="mockup-chat-bubble agent">
                      <span className="bubble-label">AGENT REASONING</span>
                      <p>{card.answer}</p>
                    </div>
                  </div>
                </div>

                {/* Card Title Label Below */}
                <div className="stacked-card-caption">
                  <h4 className="stacked-caption-title">{card.title}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Deck Pagination Dots */}
      <div className="stacked-deck-controls" aria-label="Deck controls">
        {cards.map((card, idx) => (
          <button
            key={card.id}
            className={`deck-dot ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Switch to card ${idx + 1}: ${card.title}`}
          />
        ))}
      </div>
    </div>
  );
};

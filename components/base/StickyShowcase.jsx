import React from 'react';

export const StickyShowcase = ({
  title = 'Business Messaging Meets AI-Powered Chatbots',
  description = 'Automate, Engage, and Convert with Ease. Streamline customer interactions, automate marketing, and build intelligent knowledge bases with AI-powered solutions designed to enhance effciency and drive results.',
  className = ''
}) => (
  <section id="showcase" className={`section-sticky-showcase ${className}`} aria-label="Business Messaging Showcase">
    <div className="container">
      <div className="sticky-showcase-grid">
        {/* Left Column: Vertically Stacking Scrollable Cards */}
        <div className="sticky-cards-column">
          
          {/* Card 1: Knowledge Base Building */}
          <div className="sticky-card-item" style={{ position: 'sticky', top: '140px', zIndex: 1 }}>
            <div className="sticky-card-surface">
              <div className="sticky-card-mockup mockup-knowledge">
                <div className="sticky-wave-mesh" aria-hidden="true" />
                
                {/* Window Header */}
                <div className="mockup-topbar">
                  <div className="mockup-dots" aria-hidden="true">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <div className="mockup-tab-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                    <span>Knowledge Grounding Engine</span>
                  </div>
                  <span className="mockup-status">● Live &amp; Vectorized</span>
                </div>

                {/* Dashboard Multi-pane Mockup */}
                <div className="mockup-split-layout">
                  {/* ChatGPT Chat Console */}
                  <div className="chatgpt-window">
                    <div className="chatgpt-header">
                      <div className="avatar-chip">AI</div>
                      <div>
                        <div className="chat-bot-name">SkyGentic GPT-4o</div>
                        <div className="chat-bot-model">Grounded on Enterprise Docs</div>
                      </div>
                    </div>
                    <div className="chatgpt-messages">
                      <div className="bubble-chat user">
                        What are the interest rates for the 2026 Mortgage Guide?
                      </div>
                      <div className="bubble-chat bot">
                        Based on your uploaded knowledge base, current 30-year fixed rates start at <strong>5.85% APR</strong> with zero origination fees for pre-qualified buyers.
                        <div className="citation-badge">
                          <span>Source: Mortgage_Guide_2026.pdf (p. 4)</span>
                        </div>
                      </div>
                    </div>
                    <div className="chatgpt-input-bar">
                      <span>Ask anything about your documents...</span>
                      <div className="send-arrow">↗</div>
                    </div>
                  </div>

                  {/* Documents Sidebar */}
                  <div className="docs-sidebar">
                    <div className="sidebar-header">Synced Sources (3)</div>
                    <div className="doc-item active">
                      <span className="doc-icon">📄</span>
                      <div className="doc-info">
                        <span className="doc-title">Mortgage_Guide_2026.pdf</span>
                        <span className="doc-meta">240 chunks • 100% indexed</span>
                      </div>
                    </div>
                    <div className="doc-item">
                      <span className="doc-icon">🌐</span>
                      <div className="doc-info">
                        <span className="doc-title">https://skygentic.ai/pricing</span>
                        <span className="doc-meta">Auto-crawled daily</span>
                      </div>
                    </div>
                    <div className="doc-item">
                      <span className="doc-icon">📁</span>
                      <div className="doc-info">
                        <span className="doc-title">Enterprise_Security_FAQ.docx</span>
                        <span className="doc-meta">85 chunks • Synced</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sticky-card-caption">
                <h3 className="sticky-caption-title">Knowledge Base Building</h3>
              </div>
            </div>
          </div>

          {/* Card 2: Lead Gen and Marketing Flow Builder */}
          <div className="sticky-card-item" style={{ position: 'sticky', top: '180px', zIndex: 2 }}>
            <div className="sticky-card-surface">
              <div className="sticky-card-mockup mockup-marketing">
                <div className="sticky-wave-mesh" aria-hidden="true" />
                
                {/* Window Header */}
                <div className="mockup-topbar">
                  <div className="mockup-dots" aria-hidden="true">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <div className="mockup-tab-pill">
                    <span>⚡ Marketing Automation Flow</span>
                  </div>
                  <span className="mockup-status">● 48.2% Conversion</span>
                </div>

                {/* Workflow Canvas Mockup */}
                <div className="flow-canvas-grid">
                  <div className="flow-node node-trigger">
                    <div className="node-icon">🎯</div>
                    <div className="node-text">
                      <strong>Trigger: New Visitor Signup</strong>
                      <span>Utm_source = Instagram / TikTok</span>
                    </div>
                  </div>

                  <div className="flow-arrow-down">↓</div>

                  <div className="flow-node node-condition">
                    <div className="node-icon">⚙️</div>
                    <div className="node-text">
                      <strong>AI Intent Classifier</strong>
                      <span>Score: High Intent (88%)</span>
                    </div>
                  </div>

                  <div className="flow-arrow-down">↓</div>

                  <div className="flow-node node-action">
                    <div className="node-icon">💬</div>
                    <div className="node-text">
                      <strong>WhatsApp Interactive Offer</strong>
                      <span>Delivered "WELCOME15" voucher with instant 1-tap checkout</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sticky-card-caption">
                <h3 className="sticky-caption-title">Lead Gen and Marketing Flow Builder</h3>
              </div>
            </div>
          </div>

          {/* Card 3: Agent Assist on Live Chat */}
          <div className="sticky-card-item" style={{ position: 'sticky', top: '220px', zIndex: 3 }}>
            <div className="sticky-card-surface">
              <div className="sticky-card-mockup mockup-omnichannel">
                <div className="sticky-wave-mesh" aria-hidden="true" />
                
                {/* Window Header */}
                <div className="mockup-topbar">
                  <div className="mockup-dots" aria-hidden="true">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <div className="mockup-tab-pill">
                    <span>🎧 Omnichannel Agent CoPilot</span>
                  </div>
                  <span className="mockup-status">● Live Agent Active</span>
                </div>

                {/* Agent Workspace Multi-pane */}
                <div className="agent-workspace-grid">
                  <div className="agent-chat-pane">
                    <div className="chat-thread-item user">
                      <div className="user-avatar">👤</div>
                      <div className="thread-content">
                        <strong>Alex Johnson (VIP)</strong>
                        <p>Hi, I need help rescheduling my delivery for order #98234 to Friday afternoon.</p>
                      </div>
                    </div>

                    <div className="copilot-suggestion-card">
                      <div className="copilot-badge">✨ CoPilot Suggested Response</div>
                      <p>I've checked order #98234 and rescheduled delivery to Friday, Oct 24th between 2-5 PM. Confirmation has been emailed to you!</p>
                      <button className="copilot-apply-btn">Insert Response (1-Click)</button>
                    </div>
                  </div>

                  <div className="customer-crm-pane">
                    <div className="crm-title">Customer Context</div>
                    <div className="crm-row"><span>Sentiment:</span> <strong style={{ color: '#0DEF93' }}>Positive (92%)</strong></div>
                    <div className="crm-row"><span>Lifetime Value:</span> <strong>$4,250</strong></div>
                    <div className="crm-row"><span>Orders:</span> <strong>12 Completed</strong></div>
                    <div className="crm-row"><span>Channel:</span> <strong>WhatsApp</strong></div>
                  </div>
                </div>
              </div>

              <div className="sticky-card-caption">
                <h3 className="sticky-caption-title">Agent Assist on Live Chat</h3>
              </div>
            </div>
          </div>

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

import React from 'react';
import { CapsuleButton } from './CapsuleButton';

export const StickyShowcase = ({ className = '' }) => {
  return (
    <section id="showcase" className={`section-sticky-showcase ${className}`} aria-label="Enterprise AI Architecture Showcase">
      <div className="container">
        <div className="sticky-showcase-grid">
          
          {/* Left Column: Sticky Stacking Scrollable Cards */}
          <div className="sticky-cards-column">
            
            {/* Card 1: Dynamic Knowledge Retrieval */}
            <div className="sticky-card-item" style={{ position: 'sticky', top: '140px', zIndex: 1 }}>
              <div className="sticky-card-surface">
                <div className="sticky-card-mockup mockup-knowledge">
                  <div className="sticky-wave-mesh" aria-hidden="true"></div>

                  <div className="mockup-topbar">
                    <div className="mockup-dots" aria-hidden="true">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <div className="mockup-tab-pill">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                      <span>Dynamic Knowledge RAG Engine</span>
                    </div>
                    <span className="mockup-status">Live &amp; Vectorized</span>
                  </div>

                  <div className="mockup-split-layout">
                    <div className="chatgpt-window">
                      <div className="chatgpt-header">
                        <div className="avatar-chip">AI</div>
                        <div>
                          <div className="chat-bot-name">SkyGentic Vantage-Core</div>
                          <div className="chat-bot-model">Enterprise Knowledge Grounded</div>
                        </div>
                      </div>
                      <div className="chatgpt-messages">
                        <div className="bubble-chat user">
                          What are the pre-qualification guidelines in the 2026 Commercial Portfolio?
                        </div>
                        <div className="bubble-chat bot">
                          According to your enterprise knowledge base, tier-1 applicants qualify for prime rates starting at <strong>5.75% APR</strong> with automated underwriting in under 3 minutes.
                          <div className="citation-badge">
                            <span>Source: 2026_Commercial_Underwriting_Policy.pdf (p. 12)</span>
                          </div>
                        </div>
                      </div>
                      <div className="chatgpt-input-bar">
                        <span>Ask anything about your documents...</span>
                        <div className="send-arrow">↗</div>
                      </div>
                    </div>

                    <div className="docs-sidebar">
                      <div className="sidebar-header">Vectorized Repositories (3)</div>
                      <div className="doc-item active">
                        <span className="doc-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                          </svg>
                        </span>
                        <div className="doc-info">
                          <span className="doc-title">2026_Underwriting_Policy.pdf</span>
                          <span className="doc-meta">320 chunks • Real-time indexed</span>
                        </div>
                      </div>
                      <div className="doc-item">
                        <span className="doc-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </svg>
                        </span>
                        <div className="doc-info">
                          <span className="doc-title">https://skygentic.ai/docs</span>
                          <span className="doc-meta">Auto-crawled hourly</span>
                        </div>
                      </div>
                      <div className="doc-item">
                        <span className="doc-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                          </svg>
                        </span>
                        <div className="doc-info">
                          <span className="doc-title">Global_Compliance_Matrix.docx</span>
                          <span className="doc-meta">110 chunks • Synced</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sticky-card-caption">
                  <h3 className="sticky-caption-title">Dynamic Enterprise Knowledge Grounding</h3>
                </div>
              </div>
            </div>

            {/* Card 2: Visual Journey & Revenue Flow Studio */}
            <div className="sticky-card-item" style={{ position: 'sticky', top: '180px', zIndex: 2 }}>
              <div className="sticky-card-surface">
                <div className="sticky-card-mockup mockup-marketing">
                  <div className="sticky-wave-mesh" aria-hidden="true"></div>

                  <div className="mockup-topbar">
                    <div className="mockup-dots" aria-hidden="true">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <div className="mockup-tab-pill">
                      <span>Visual Journey &amp; Revenue Flow Studio</span>
                    </div>
                    <span className="mockup-status">52.4% Conversion Rate</span>
                  </div>

                  <div className="flow-canvas-grid">
                    <div className="flow-node node-trigger">
                      <div className="node-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="12" r="6"></circle>
                          <circle cx="12" cy="12" r="2"></circle>
                        </svg>
                      </div>
                      <div className="node-text">
                        <strong>Trigger: High-Value Inbound Lead</strong>
                        <span>Source = Enterprise Omnichannel Campaign</span>
                      </div>
                    </div>

                    <div className="flow-arrow-down">↓</div>

                    <div className="flow-node node-condition">
                      <div className="node-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="3"></circle>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                      </div>
                      <div className="node-text">
                        <strong>AI Intent &amp; Propensity Classifier</strong>
                        <span>Score: High Conversion Intent (94%)</span>
                      </div>
                    </div>

                    <div className="flow-arrow-down">↓</div>

                    <div className="flow-node node-action">
                      <div className="node-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <div className="node-text">
                        <strong>Interactive WhatsApp Concierge</strong>
                        <span>Dispatched tailored onboarding suite with 1-tap booking</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sticky-card-caption">
                  <h3 className="sticky-caption-title">Visual Journey &amp; Revenue Flow Studio</h3>
                </div>
              </div>
            </div>

            {/* Card 3: Unified CoPilot & Agent Workspace */}
            <div className="sticky-card-item" style={{ position: 'sticky', top: '220px', zIndex: 3 }}>
              <div className="sticky-card-surface">
                <div className="sticky-card-mockup mockup-omnichannel">
                  <div className="sticky-wave-mesh" aria-hidden="true"></div>

                  <div className="mockup-topbar">
                    <div className="mockup-dots" aria-hidden="true">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <div className="mockup-tab-pill">
                      <span>Unified CoPilot &amp; Agent Workspace</span>
                    </div>
                    <span className="mockup-status">Real-time Agent Assist</span>
                  </div>

                  <div className="agent-workspace-grid">
                    <div className="agent-chat-pane">
                      <div className="chat-thread-item user">
                        <div className="user-avatar">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <div className="thread-content">
                          <strong>Jordan Hayes (Enterprise VIP)</strong>
                          <p>We want to expand our automated seat license from 500 to 2,000 for the upcoming fiscal cycle.</p>
                        </div>
                      </div>

                      <div className="copilot-suggestion-card">
                        <div className="copilot-badge">CoPilot Suggested Resolution</div>
                        <p>Verified account tier agreement #E-48102. Generated customized enterprise volume tier quote with 1-click execution.</p>
                        <button className="copilot-apply-btn">Insert Resolution (1-Click)</button>
                      </div>
                    </div>

                    <div className="customer-crm-pane">
                      <div className="crm-title">Account Intelligence</div>
                      <div className="crm-row"><span>Sentiment:</span> <strong style={{ color: 'var(--color-heading)' }}>Exceptional (96%)</strong></div>
                      <div className="crm-row"><span>Account Value:</span> <strong>$18,500/yr</strong></div>
                      <div className="crm-row"><span>Seat Scale:</span> <strong>2,000 Active</strong></div>
                      <div className="crm-row"><span>Channel:</span> <strong>Omnichannel Suite</strong></div>
                    </div>
                  </div>
                </div>

                <div className="sticky-card-caption">
                  <h3 className="sticky-caption-title">Unified CoPilot &amp; Live Agent Workspace</h3>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Title & Description Panel */}
          <div className="sticky-content-column">
            <div className="sticky-white-panel">
              <h2 className="sticky-panel-title">
                Intelligent<br />Systems<br />Engineered for<br />Enterprise<br />Scale
              </h2>
              <p className="sticky-panel-desc">
                Automate complex workflows, engage high-intent leads, and empower human teams with contextual AI copilots. SkyGentic combines state-of-the-art foundation models with real-time knowledge retrieval to deliver unmatched operational velocity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

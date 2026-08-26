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
                      <span>Dynamic Knowledge RAG Engine</span>
                    </div>
                    <span className="mockup-status">● Live &amp; Vectorized</span>
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
                        <span className="doc-icon">📄</span>
                        <div className="doc-info">
                          <span className="doc-title">2026_Underwriting_Policy.pdf</span>
                          <span className="doc-meta">320 chunks • Real-time indexed</span>
                        </div>
                      </div>
                      <div className="doc-item">
                        <span className="doc-icon">🌐</span>
                        <div className="doc-info">
                          <span className="doc-title">https://skygentic.ai/docs</span>
                          <span className="doc-meta">Auto-crawled hourly</span>
                        </div>
                      </div>
                      <div className="doc-item">
                        <span className="doc-icon">📁</span>
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
                    <span className="mockup-status">● 52.4% Conversion Rate</span>
                  </div>

                  <div className="flow-canvas-grid">
                    <div className="flow-node node-trigger">
                      <div className="node-icon">🎯</div>
                      <div className="node-text">
                        <strong>Trigger: High-Value Inbound Lead</strong>
                        <span>Source = Enterprise Omnichannel Campaign</span>
                      </div>
                    </div>

                    <div className="flow-arrow-down">↓</div>

                    <div className="flow-node node-condition">
                      <div className="node-icon">⚙️</div>
                      <div className="node-text">
                        <strong>AI Intent &amp; Propensity Classifier</strong>
                        <span>Score: High Conversion Intent (94%)</span>
                      </div>
                    </div>

                    <div className="flow-arrow-down">↓</div>

                    <div className="flow-node node-action">
                      <div className="node-icon">💬</div>
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
                    <span className="mockup-status">● Real-time Agent Assist</span>
                  </div>

                  <div className="agent-workspace-grid">
                    <div className="agent-chat-pane">
                      <div className="chat-thread-item user">
                        <div className="user-avatar">👤</div>
                        <div className="thread-content">
                          <strong>Jordan Hayes (Enterprise VIP)</strong>
                          <p>We want to expand our automated seat license from 500 to 2,000 for the upcoming fiscal cycle.</p>
                        </div>
                      </div>

                      <div className="copilot-suggestion-card">
                        <div className="copilot-badge">✨ CoPilot Suggested Resolution</div>
                        <p>Verified account tier agreement #E-48102. Generated customized enterprise volume tier quote with 1-click execution.</p>
                        <button className="copilot-apply-btn">Insert Resolution (1-Click)</button>
                      </div>
                    </div>

                    <div className="customer-crm-pane">
                      <div className="crm-title">Account Intelligence</div>
                      <div className="crm-row"><span>Sentiment:</span> <strong style={{ color: '#0DEF93' }}>Exceptional (96%)</strong></div>
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
                Intelligent<br>Systems<br>Engineered for<br>Enterprise<br>Scale
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

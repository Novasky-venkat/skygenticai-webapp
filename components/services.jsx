import React from 'react';
import { BentoCard } from './base';

export const Services = () => (
  <section id="capabilities" className="section-capabilities" aria-label="Platform Capabilities">
    <div className="container">
      <div className="capabilities-header">
        <h2 className="capabilities-main-title">AI Products</h2>
        <p className="capabilities-main-desc">
          SkyGentic delivers advanced AI solutions to enhance engagement, simplify processes, and fuel business growth.
        </p>
      </div>

      <div className="bento-staggered-grid">
        {/* Column 1: Left (Offset downwards, containing Agentic AI) */}
        <div className="bento-column col-1">
          <BentoCard
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#03031D" strokeWidth="2">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
            }
            title="Agentic AI"
            description="Redefine engagement with human-like AI chatbots that provide natural responses, tailored recommendations, with a touch of personality to elevate customer connections."
            href="#demo"
          />
        </div>

        {/* Column 2: Middle (Voice AI on top, AI Agent on bottom) */}
        <div className="bento-column col-2">
          <BentoCard
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#03031D" strokeWidth="2">
                <line x1="6" y1="9" x2="6" y2="15" />
                <line x1="10" y1="5" x2="10" y2="19" />
                <line x1="14" y1="7" x2="14" y2="17" />
                <line x1="18" y1="9" x2="18" y2="15" />
              </svg>
            }
            title="Voice AI"
            description="Talk to the brand effortlessly with Voice AI—no typing, just instant, hands-free responses."
            href="#demo"
          />
          <BentoCard
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#03031D" strokeWidth="2">
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
              </svg>
            }
            title="AI Agent"
            description="Transform customer engagement with SkyGentic's AI Agent—personalized, efficient, and designed to reflect your brand across platforms."
            href="#demo"
          />
        </div>

        {/* Column 3: Right (Agent CoPilot on top, Conversational Sales & Marketing on bottom) */}
        <div className="bento-column col-3">
          <BentoCard
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#03031D" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            }
            title="Agent CoPilot"
            description="Effortlessly access and manage your knowledge base by crawling websites, uploading documents, and creating Q&A pairs—all within one platform."
            href="#demo"
          />
          <BentoCard
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#03031D" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            }
            title="Conversational Sales & Marketing"
            description="Deliver 1:1 personalized conversations with intuitive automation tools, from smart segmentation to tailored customer journeys, designed to boost your marketing performance."
            href="#demo"
          />
        </div>
      </div>
    </div>
  </section>
);

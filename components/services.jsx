import React from 'react';
import { ReadMoreLink } from './buttons';

export const Services = () => {
  const capabilities = [
    {
      title: 'Agentic AI',
      desc: 'Redefine engagement with autonomous AI agents that deliver context-aware, goal-oriented interactions across channels.',
      badge: 'Autonomous',
    },
    {
      title: 'Voice AI',
      desc: 'Seamless real-time speech synthesis and voice bots for hands-free, hyper-natural customer interactions.',
      badge: 'Multimodal',
    },
    {
      title: 'Agent CoPilot',
      desc: 'Instantly crawl enterprise knowledge bases, documents, and workflows to assist human agents with zero friction.',
      badge: 'Productivity',
    },
    {
      title: 'Conversational Sales',
      desc: 'Transform prospect conversations into revenue with proactive personalized recommendation workflows and instant checkout.',
      badge: 'Revenue',
    }
  ];

  return (
    <section className="section" id="services" style={{ backgroundColor: 'var(--color-surface-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto var(--space-16)' }}>
          <div className="badge-pill purple">Platform Capabilities</div>
          <h2 className="display-2" style={{ marginTop: 'var(--space-2)' }}>
            Redefine Customer Engagement with Agentic Tools
          </h2>
          <p className="text-lead">
            AiChat delivers next-generation AI workflows to accelerate conversion, automate resolution, and power business growth.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
          {capabilities.map((item, idx) => (
            <div key={idx} className="card">
              <div className="badge-pill lime" style={{ marginBottom: 'var(--space-4)' }}>{item.badge}</div>
              <h4 className="display-4" style={{ marginBottom: 'var(--space-3)' }}>{item.title}</h4>
              <p style={{ color: 'var(--color-midnight-02)', marginBottom: 'var(--space-6)' }}>{item.desc}</p>
              <ReadMoreLink text="Explore capability" href="#" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { SurfaceCard, BadgePill, ReadMoreLink, CapsuleButton } from './base';

export const Services = () => (
  <section id="capabilities" className="section-capabilities" aria-label="Platform Capabilities">
    <div className="container">
      <div className="capabilities-header">
        <BadgePill variant="emerald" style={{ marginBottom: 'var(--space-3)' }}>Engineered for Scale</BadgePill>
        <h2>Modular Capabilities Built for the Autonomous Era</h2>
        <p className="text-lead">Equip your conversational front-office with goal-driven AI agents, low-latency voice, and dynamic knowledge retrieval.</p>
      </div>

      <div className="bento-grid">
        {/* Bento Column 1: Tall Featured Card */}
        <SurfaceCard variant="light" className="bento-card featured">
          <BadgePill variant="emerald" style={{ marginBottom: 'var(--space-4)' }}>Autonomous</BadgePill>
          <h3>Agentic AI Workflow Engine</h3>
          <p>Deploy autonomous agents capable of dynamic reasoning, tool-calling APIs, and multi-step transaction resolution without hardcoded logic.</p>
          <ReadMoreLink href="#demo">Explore Agentic AI</ReadMoreLink>
        </SurfaceCard>

        {/* Bento Column 2: Stacked Cards (Offset -20px) */}
        <div className="bento-col-2">
          <SurfaceCard variant="light" className="bento-card">
            <BadgePill variant="emerald" style={{ marginBottom: 'var(--space-3)' }}>Real-Time</BadgePill>
            <h4>Ultra Low-Latency Voice AI</h4>
            <p>Natural conversational voice agents with sub-300ms latency and emotion modulation.</p>
          </SurfaceCard>
          <SurfaceCard variant="light" className="bento-card">
            <BadgePill variant="emerald" style={{ marginBottom: 'var(--space-3)' }}>Productivity</BadgePill>
            <h4>Agent CoPilot</h4>
            <p>Empower human support agents with instant context synthesis and AI-assisted drafts.</p>
          </SurfaceCard>
        </div>

        {/* Bento Column 3: Stacked Cards (Offset -60px) */}
        <div className="bento-col-3">
          <SurfaceCard variant="light" className="bento-card">
            <BadgePill variant="emerald" style={{ marginBottom: 'var(--space-3)' }}>Omnichannel</BadgePill>
            <h4>Conversational Commerce</h4>
            <p>Drive revenue directly through native WhatsApp, Instagram, and web checkout flows.</p>
          </SurfaceCard>
          <SurfaceCard variant="light" className="bento-card">
            <BadgePill variant="emerald" style={{ marginBottom: 'var(--space-3)' }}>Enterprise</BadgePill>
            <h4>Knowledge Grounding</h4>
            <p>Vector search and real-time synchronization with Salesforce, Zendesk, and SQL backends.</p>
          </SurfaceCard>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 'var(--space-16)' }}>
        <CapsuleButton href="#demo" variant="primary">
          Build your first AI chatbot
        </CapsuleButton>
      </div>
    </div>
  </section>
);

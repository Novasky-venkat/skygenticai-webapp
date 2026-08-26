import React from 'react';
import { SurfaceCard, BadgePill, CapsuleButton } from './base';

export const Footer = () => (
  <footer className="footer-wrapper" role="contentinfo">
    <div className="container">
      <div className="footer-cards-grid">
        {/* Left Hero CTA Card */}
        <SurfaceCard variant="gradient-hero" className="footer-hero-card">
          <BadgePill variant="glass" style={{ marginBottom: 'var(--space-4)' }}>Ready to Launch</BadgePill>
          <h3 style={{ color: '#ffffff', marginBottom: 'var(--space-3)' }}>Build Your Agentic CX Today</h3>
          <p style={{ color: 'var(--color-slate-200)', marginBottom: 'var(--space-6)' }}>
            Transform customer engagement with autonomous AI agents, sub-50ms latency, and high-conversion workflows.
          </p>
          <CapsuleButton href="#demo" variant="white">
            Book a Demo
          </CapsuleButton>
        </SurfaceCard>

        {/* Right Navigation Directory Card */}
        <SurfaceCard variant="dark-glass" className="footer-nav-card">
          <div>
            <div className="footer-col-title">Platform</div>
            <ul className="footer-link-list">
              <li><a href="#hero" className="footer-link">Agentic AI</a></li>
              <li><a href="#capabilities" className="footer-link">Voice AI</a></li>
              <li><a href="#capabilities" className="footer-link">Agent CoPilot</a></li>
              <li><a href="#showcase" className="footer-link">Omnichannel</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Solutions</div>
            <ul className="footer-link-list">
              <li><a href="#features" className="footer-link">Customer Support</a></li>
              <li><a href="#features" className="footer-link">Conversational Sales</a></li>
              <li><a href="#features" className="footer-link">Commerce Hub</a></li>
              <li><a href="#features" className="footer-link">Enterprise Security</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-link-list">
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#careers" className="footer-link">Careers</a></li>
              <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="#contact" className="footer-link">Contact Sales</a></li>
            </ul>
          </div>
        </SurfaceCard>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div>© 2026 SkyGentic AI / Novasky. All rights reserved.</div>
        <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <a href="#terms" className="footer-link">Terms of Service</a>
          <a href="#security" className="footer-link">Security & Trust</a>
        </div>
      </div>
    </div>
  </footer>
);

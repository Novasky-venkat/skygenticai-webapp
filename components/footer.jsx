import React from 'react';
import { PrimaryButton } from './buttons';

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-hero-card">
            <div>
              <div className="badge-pill lime" style={{ marginBottom: 'var(--space-4)' }}>Get Started Today</div>
              <h3 className="display-3 text-white" style={{ marginBottom: 'var(--space-4)' }}>
                Ready to elevate your customer CX with Agentic AI?
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', marginBottom: 'var(--space-6)' }}>
                Book an exploratory session with our conversational AI architects.
              </p>
            </div>
            <div>
              <PrimaryButton text="Book a Demo" href="#contact" />
            </div>
          </div>

          <div className="footer-links-grid">
            <div>
              <div className="footer-column-title">Platform</div>
              <ul className="footer-link-list">
                <li><a href="#">Agentic AI</a></li>
                <li><a href="#">Voice AI</a></li>
                <li><a href="#">Agent CoPilot</a></li>
                <li><a href="#">Omnichannel</a></li>
              </ul>
            </div>

            <div>
              <div className="footer-column-title">Solutions</div>
              <ul className="footer-link-list">
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Sales & Marketing</a></li>
                <li><a href="#">Conversational Commerce</a></li>
                <li><a href="#">Enterprise Hub</a></li>
              </ul>
            </div>

            <div>
              <div className="footer-column-title">Company</div>
              <ul className="footer-link-list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press & Media</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-glass-light)', paddingTop: 'var(--space-6)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)', color: 'var(--color-midnight-02)', fontSize: 'var(--font-size-sm)' }}>
          <div>© 2026 AiChat / SkyGentic AI. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#security">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

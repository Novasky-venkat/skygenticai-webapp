import React from 'react';

export const Footer = () => (
  <footer className="footer-wrapper footer-compact surface-page" role="contentinfo">
    <div className="container">
      <div className="footer-upper">
        <div className="footer-brand-section">
          <a href="index.html" className="nav-brand footer-brand" aria-label="Skygentic AI Homepage">
            <img className="nav-wordmark footer-wordmark" src="assets/Skygentic-wordmark.png" alt="Skygentic AI" />
          </a>
          <p className="text-body-compact">
            Agentic AI for ambitious businesses.<br />
            Deploy intelligent AI workforces that automate operations.
          </p>
          <nav className="footer-social" aria-label="Social links">
            <a href="https://linkedin.com/company/Skygenticai" className="btn-glass btn-icon-outline" aria-label="Skygentic AI on LinkedIn"><span className="social-icon social-icon-linkedin" aria-hidden="true" /></a>
            <a href="https://github.com/Skygenticai" className="btn-glass btn-icon-outline" aria-label="Skygentic AI on GitHub"><span className="social-icon social-icon-github" aria-hidden="true" /></a>
            <a href="https://instagram.com/skygenticai" className="btn-glass btn-icon-outline" aria-label="Skygentic AI on Instagram"><span className="social-icon social-icon-instagram" aria-hidden="true" /></a>
            <a href="https://x.com/Skygenticai" className="btn-glass btn-icon-outline" aria-label="Skygentic AI on X"><span className="social-icon social-icon-x" aria-hidden="true" /></a>
          </nav>
        </div>

        <nav className="footer-navigation rule-left-desktop" aria-label="Footer navigation">
          <div className="footer-nav-column">
            <h2 className="font-display nav-section-title">Platform</h2>
            <ul className="footer-link-list">
              <li><a href="platform.html#forge" className="nav-link nav-subtle">Forge</a></li>
              <li><a href="platform.html#swarm" className="nav-link nav-subtle">Swarm</a></li>
              <li><a href="platform.html#skyflow" className="nav-link nav-subtle">SkyFlow</a></li>
              <li><a href="platform.html#hive" className="nav-link nav-subtle">Hive</a></li>
              <li><a href="platform.html#nova-ops" className="nav-link nav-subtle">NovaOps</a></li>
            </ul>
          </div>
          <div className="footer-nav-column">
            <h2 className="font-display nav-section-title">Quick Links</h2>
            <ul className="footer-link-list">
              <li><a href="company.html" className="nav-link nav-subtle">Company</a></li>
              <li><a href="features.html" className="nav-link nav-subtle">Features</a></li>
              <li><a href="get-in-touch.html" className="nav-link nav-subtle">Get In Touch</a></li>
              <li><a href="signin.html" className="nav-link nav-subtle">Sign In</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer-bottom-bar rule-top text-body-small">
        <div className="footer-copyright">© 2026 SkyGentic AI. All rights reserved.</div>
        <nav className="footer-legal" aria-label="Footer legal links">
          <a href="privacy.html" className="nav-link nav-subtle">Privacy Policy</a>
          <a href="terms.html" className="nav-link nav-subtle">Terms of Service</a>
        </nav>
        <a href="#" className="btn-glass btn-icon-outline footer-back-to-top" aria-label="Back to Top">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 19V5" />
            <path d="M6 11l6-6 6 6" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
);

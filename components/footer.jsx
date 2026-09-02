import React from 'react';

export const Footer = () => (
  <footer className="footer-wrapper" role="contentinfo">
    <div className="container">
      <div className="footer-upper">
        <div className="footer-brand-section">
          <a href="/" className="nav-brand footer-brand" aria-label="SkyGentic AI Homepage">
            <img className="nav-wordmark footer-wordmark" src="assets/skygentic-wordmark.png" alt="SkyGentic" />
          </a>
          <p className="footer-description">
            Agentic AI for ambitious businesses. Deploy intelligent agents that work, think, and scale alongside your team.
          </p>
          <div className="footer-status" aria-label="All systems operational">
            <span className="footer-status-dot" aria-hidden="true"></span>
            <span>All systems operational</span>
          </div>
        </div>

        <nav className="footer-navigation" aria-label="Footer navigation">
          <div className="footer-nav-column">
            <h2 className="footer-col-title">Services</h2>
            <ul className="footer-link-list">
              <li><a href="services.html#forge" className="footer-link">Forge</a></li>
              <li><a href="services.html#swarm" className="footer-link">Swarm</a></li>
              <li><a href="services.html#skyflow" className="footer-link">SkyFlow</a></li>
              <li><a href="services.html#hive" className="footer-link">Hive</a></li>
              <li><a href="services.html#nova-ops" className="footer-link">NovaOps</a></li>
            </ul>
          </div>
          <div className="footer-nav-column">
            <h2 className="footer-col-title">Quick Links</h2>
            <ul className="footer-link-list">
              <li><a href="#capabilities" className="footer-link">Resources</a></li>
              <li><a href="#demo" className="footer-link">Get in Touch</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#signin" className="footer-link">Sign in</a></li>
            </ul>
          </div>
          <div className="footer-nav-column">
            <h2 className="footer-col-title">Follow Us</h2>
            <ul className="footer-link-list">
              <li><a href="https://linkedin.com/company/skygenticai" className="footer-link" aria-label="SkyGentic AI on LinkedIn">LinkedIn</a></li>
              <li><a href="https://github.com/skygenticai" className="footer-link" aria-label="SkyGentic AI on GitHub">GitHub</a></li>
              <li><a href="https://x.com/skygenticai" className="footer-link" aria-label="SkyGentic AI on X">X</a></li>
              <li><a href="https://youtube.com/@skygenticai" className="footer-link" aria-label="SkyGentic AI on YouTube">YouTube</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer-bottom-bar">
        <div>© 2026 SkyGentic AI / Novasky. All rights reserved.</div>
        <nav className="footer-legal" aria-label="Footer legal links">
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <a href="#terms" className="footer-link">Terms of Service</a>
          <a href="#security" className="footer-link">Security & Trust</a>
        </nav>
      </div>
    </div>
  </footer>
);

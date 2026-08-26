import React from 'react';

export const Navbar = () => (
  <header className="navbar-wrapper" role="banner">
    <nav className="navbar-container" aria-label="Main Navigation">
      <a href="/" className="nav-brand" aria-label="SkyGentic AI Homepage">
        <span style={{ color: 'var(--color-sapphire-400)' }}>SkyGentic</span>&nbsp;AI
      </a>

      <ul className="nav-menu" role="list">
        <li><a href="#hero" className="nav-link">Overview</a></li>
        <li><a href="#features" className="nav-link">Solutions</a></li>
        <li><a href="#capabilities" className="nav-link">Capabilities</a></li>
        <li><a href="#showcase" className="nav-link">Platform</a></li>
        <li><a href="#testimonials" className="nav-link">Stories</a></li>
        <li><a href="#faq" className="nav-link">FAQ</a></li>
      </ul>

      <div className="nav-actions">
        <a href="#signin" className="nav-signin">Sign In</a>
        <a href="#demo" className="btn-glossy-primary" aria-label="Book a demo session">
          <div className="btn-text-wrapper">
            <span className="btn-text-slide">Book a demo</span>
            <span className="btn-text-slide">Book a demo</span>
          </div>
          <div className="btn-icon-bubble" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </a>
      </div>
    </nav>
  </header>
);

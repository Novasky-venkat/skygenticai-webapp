import React from 'react';
import { CapsuleButton } from './base';

export const Navbar = () => (
  <header className="navbar-wrapper" role="banner">
    <nav className="navbar-container" aria-label="Main Navigation">
      <a href="/" className="nav-brand" aria-label="SkyGentic AI Homepage">
        <span style={{ color: 'var(--color-green-primary)' }}>SkyGentic</span>&nbsp;AI
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
        <CapsuleButton href="#demo" variant="primary" ariaLabel="Book a demo session">
          Book a demo
        </CapsuleButton>
      </div>
    </nav>
  </header>
);

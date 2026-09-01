import React from 'react';
import { CapsuleButton } from './base';

export const Navbar = () => (
  <header className="navbar-wrapper" role="banner">
    <nav className="navbar-container" aria-label="Main Navigation">
      <a href="/" className="nav-brand" aria-label="SkyGentic AI Homepage">
        <span style={{ color: 'var(--color-primary-blue)' }}>SkyGentic</span>&nbsp;AI
      </a>

      <ul className="nav-menu" role="list">
        <li className="services-menu">
          <button className="services-menu-trigger" aria-expanded="false" aria-controls="services-dropdown" aria-haspopup="true">
            Services
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div className="service-dropdown" id="services-dropdown" role="menu" aria-label="Services List">
            <a className="service-dropdown-link" href="services.html#forge" role="menuitem">
              <img className="service-icon-img" src="assets/icon-forge.png" alt="" width="32" height="32" />
              Forge
            </a>
            <a className="service-dropdown-link" href="services.html#swarn" role="menuitem">
              <img className="service-icon-img" src="assets/icon-swarn.png" alt="" width="32" height="32" />
              Swarn
            </a>
            <a className="service-dropdown-link" href="services.html#skyflow" role="menuitem">
              <img className="service-icon-img" src="assets/icon-skyflow.png" alt="" width="32" height="32" />
              SkyFlow
            </a>
            <a className="service-dropdown-link" href="services.html#hive" role="menuitem">
              <img className="service-icon-img" src="assets/icon-hive.png" alt="" width="32" height="32" />
              Hive
            </a>
            <a className="service-dropdown-link" href="services.html#nova-ops" role="menuitem">
              <img className="service-icon-img" src="assets/icon-novaops.png" alt="" width="32" height="32" />
              Nova Ops
            </a>
          </div>
        </li>
        <li><a href="#capabilities" className="nav-link">Resources</a></li>
        <li><a href="#showcase" className="nav-link">Get In Touch</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
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

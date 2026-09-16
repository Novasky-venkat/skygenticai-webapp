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
            Platform
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div className="service-dropdown" id="services-dropdown" role="menu" aria-label="Platform List">
            <a className="service-dropdown-link" href="platform.html#forge" role="menuitem">
              <img className="service-icon-img" src="assets/architecture/icon-forge.png" alt="" width="32" height="32" />
              Forge
            </a>
            <a className="service-dropdown-link" href="platform.html#swarm" role="menuitem">
              <img className="service-icon-img" src="assets/architecture/icon-swarm.png" alt="" width="32" height="32" />
              Swarm
            </a>
            <a className="service-dropdown-link" href="platform.html#skyflow" role="menuitem">
              <img className="service-icon-img" src="assets/architecture/icon-skyflow.png" alt="" width="32" height="32" />
              Skyflow
            </a>
            <a className="service-dropdown-link" href="platform.html#hive" role="menuitem">
              <img className="service-icon-img" src="assets/architecture/icon-hive.png" alt="" width="32" height="32" />
              Hive
            </a>
            <a className="service-dropdown-link" href="platform.html#nova-ops" role="menuitem">
              <img className="service-icon-img" src="assets/architecture/icon-novaops.png" alt="" width="32" height="32" />
              Nova Ops
            </a>
          </div>
        </li>
        <li className="services-menu solutions-menu">
          <button className="services-menu-trigger" aria-expanded="false" aria-controls="solutions-dropdown" aria-haspopup="true">
            Solutions
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div className="service-dropdown service-dropdown--solutions" id="solutions-dropdown" role="menu" aria-label="Solutions List">
            <div className="service-dropdown-group" role="presentation">
              <span className="service-dropdown-heading" role="presentation">Use Case</span>
              <a className="service-dropdown-link" href="index.html#showcase" role="menuitem">Customer Care</a>
              <a className="service-dropdown-link" href="platform.html#skyflow" role="menuitem">Workflow automation</a>
            </div>
            <div className="service-dropdown-group" role="presentation">
              <span className="service-dropdown-heading" role="presentation">Industries</span>
              <a className="service-dropdown-link" href="get-in-touch.html" role="menuitem">Real Estate</a>
              <a className="service-dropdown-link" href="get-in-touch.html" role="menuitem">Home Services</a>
              <a className="service-dropdown-link" href="get-in-touch.html" role="menuitem">Travel &amp; Hospitality</a>
            </div>
          </div>
        </li>
        <li><a href="features.html" className="nav-link">Features</a></li>
        <li><a href="#showcase" className="nav-link">Get In Touch</a></li>
        <li><a href="company.html" className="nav-link">Company</a></li>
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

import React, { useState } from 'react';
import { PrimaryButton } from './buttons';

export const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">
        <a href="/" className="nav-brand">
          <span style={{ color: 'var(--color-green-primary)' }}>Ai</span>Chat
        </a>

        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#solutions" className="nav-link">Solutions</a>
          </li>
          <li className="nav-item">
            <a href="#products" className="nav-link">Products</a>
          </li>
          <li className="nav-item">
            <a href="#resources" className="nav-link">Resources</a>
          </li>
          <li className="nav-item">
            <a href="#company" className="nav-link">Company</a>
          </li>
          <li className="nav-item">
            <a href="#pricing" className="nav-link">Pricing</a>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <a href="#login" className="nav-link" style={{ display: 'inline-block' }}>Sign In</a>
          <PrimaryButton text="Book a demo" href="#demo" />
        </div>
      </nav>
    </header>
  );
};

import React from 'react';

export const ArrowIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

export const PrimaryButton = ({ text = 'Book a demo', href = '#', onClick, className = '' }) => (
  <a href={href} onClick={onClick} className={`btn-primary ${className}`}>
    <div className="btn-text-wrapper">
      <span className="btn-text-slide">{text}</span>
      <span className="btn-text-slide">{text}</span>
    </div>
    <div className="btn-icon-bubble">
      <ArrowIcon />
    </div>
  </a>
);

export const SecondaryButton = ({ text = 'Learn More', href = '#', onClick, className = '' }) => (
  <a href={href} onClick={onClick} className={`btn-secondary ${className}`}>
    <div className="btn-text-wrapper">
      <span className="btn-text-slide">{text}</span>
      <span className="btn-text-slide">{text}</span>
    </div>
    <div className="btn-icon-bubble light">
      <ArrowIcon />
    </div>
  </a>
);

export const GlassButton = ({ text = 'Contact Sales', href = '#', onClick, className = '' }) => (
  <a href={href} onClick={onClick} className={`btn-glass ${className}`}>
    <span>{text}</span>
    <div className="btn-icon-bubble">
      <ArrowIcon />
    </div>
  </a>
);

export const ReadMoreLink = ({ text = 'Read More', href = '#', isWhite = false, className = '' }) => (
  <a href={href} className={`read-more-link ${isWhite ? 'white' : ''} ${className}`}>
    <span>{text}</span>
    <ArrowIcon className="w-3.5 h-3.5" />
  </a>
);

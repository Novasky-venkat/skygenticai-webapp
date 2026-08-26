import React from 'react';

export const BentoCard = ({
  icon,
  title,
  description,
  href = '#demo',
  ariaLabel,
  className = '',
  ...props
}) => (
  <div className={`bento-feature-card ${className}`} {...props}>
    {/* 1. Circular Mint-Border Icon Badge */}
    <div className="bento-card-icon-badge" aria-hidden="true">
      {icon}
    </div>

    {/* 2. Card Title */}
    <h3 className="bento-card-title">{title}</h3>

    {/* 3. Body Copy */}
    <p className="bento-card-desc">{description}</p>

    {/* 4. Action Link with Black Arrow Bubble */}
    <a
      href={href}
      className="bento-card-action-link"
      aria-label={ariaLabel || `Read more about ${title}`}
    >
      <span>Read More</span>
      <div className="bento-action-bubble" aria-hidden="true">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </a>
  </div>
);

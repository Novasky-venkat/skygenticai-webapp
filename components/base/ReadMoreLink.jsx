import React from 'react';

export const ReadMoreLink = ({
  href,
  children,
  ariaLabel,
  className = '',
  ...props
}) => (
  <a
    href={href}
    className={`read-more-link ${className}`}
    aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
    {...props}
  >
    <span>{children}</span>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </a>
);

import React from 'react';

export const CapsuleButton = ({
  href,
  onClick,
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'glass' | 'white'
  icon = true,
  ariaLabel,
  className = '',
  ...props
}) => {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    glass: 'btn-glass',
    white: 'btn-white'
  }[variant] || 'btn-primary';

  const content = (
    <>
      <div className="btn-text-wrapper">
        <span className="btn-text-slide">{children}</span>
        <span className="btn-text-slide">{children}</span>
      </div>
      {icon && (
        <div className="btn-icon-bubble" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${variantClass} ${className}`}
        aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${variantClass} ${className}`}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      {...props}
    >
      {content}
    </button>
  );
};

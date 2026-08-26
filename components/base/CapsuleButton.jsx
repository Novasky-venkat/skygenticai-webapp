import React from 'react';
import { ArrowBubble } from './ArrowBubble';

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

  const bubbleVariant = variant === 'white' ? 'white' : variant === 'glass' ? 'glass' : 'dark';

  const content = (
    <>
      <div className="btn-text-wrapper">
        <span className="btn-text-slide">{children}</span>
        <span className="btn-text-slide">{children}</span>
      </div>
      {icon && <ArrowBubble size="md" variant={bubbleVariant} />}
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

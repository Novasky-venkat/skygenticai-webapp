import React from 'react';

export const ArrowBubble = ({
  size = 'md', // 'sm' (20px) | 'md' (32px)
  variant = 'dark', // 'dark' | 'white' | 'glass'
  className = '',
  ...props
}) => {
  const iconSize = size === 'sm' ? 10 : 14;
  const strokeWidth = size === 'sm' ? 3 : 2.5;

  return (
    <div className={`arrow-bubble size-${size} variant-${variant} ${className}`} aria-hidden="true" {...props}>
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </div>
  );
};

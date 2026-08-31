import React from 'react';

export const BadgePill = ({
  children,
  variant = 'emerald', // 'emerald' | 'sapphire' | 'glass' | 'premium'
  dot = true,
  className = '',
  ...props
}) => {
  const variantClass = `badge-pill ${variant}`;

  return (
    <div className={`${variantClass} ${className}`} {...props}>
      {dot && <span className="status-dot" aria-hidden="true" />}
      {children}
    </div>
  );
};

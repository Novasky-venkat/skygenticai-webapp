import React from 'react';

export const SurfaceCard = ({
  children,
  variant = 'light', // 'light' | 'dark-glass' | 'gradient-hero'
  className = '',
  ...props
}) => {
  const variantClass = {
    light: 'card-light',
    'dark-glass': 'card-dark-glass',
    'gradient-hero': 'card-gradient-hero'
  }[variant] || 'card-light';

  return (
    <div className={`surface-card ${variantClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

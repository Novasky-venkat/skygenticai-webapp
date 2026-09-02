import React from 'react';

export const SurfaceCard = ({
  children,
  variant = 'light',
  className = '',
  ...props
}) => {
  const variantClass = {
    light: 'card-light',
    'dark-glass': 'card-dark-glass'
  }[variant] || 'card-light';

  return (
    <div className={`surface-card ${variantClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

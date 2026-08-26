import React from 'react';

export const StatBlock = ({
  digit,
  label,
  description,
  className = '',
  ...props
}) => (
  <div className={`stat-block ${className}`} {...props}>
    <div className="stat-digit">{digit}</div>
    <div className="stat-label">{label}</div>
    {description && <p className="stat-desc">{description}</p>}
  </div>
);

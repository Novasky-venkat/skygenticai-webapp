import React from 'react';

export const TrustAvatarCluster = ({
  label = '100+ Enterprise CX Teams Worldwide',
  className = ''
}) => (
  <div className={`trust-avatar-cluster ${className}`}>
    <div className="avatar-stack" aria-hidden="true">
      <span className="avatar-dot" style={{ background: 'var(--color-primary-blue)' }}>FL</span>
      <span className="avatar-dot" style={{ background: 'var(--color-secondary-blue)' }}>DC</span>
      <span className="avatar-dot" style={{ background: 'var(--color-blue-900)' }}>SM</span>
      <span className="avatar-dot" style={{ background: 'var(--color-teal)' }}>AK</span>
    </div>
    <span className="trust-label">{label}</span>
  </div>
);

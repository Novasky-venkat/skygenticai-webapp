import React from 'react';

export const TrustAvatarCluster = ({
  label = '100+ Enterprise CX Teams Worldwide',
  className = ''
}) => (
  <div className={`trust-avatar-cluster ${className}`}>
    <div className="avatar-stack" aria-hidden="true">
      <span className="avatar-dot" style={{ background: '#3B82F6' }}>FL</span>
      <span className="avatar-dot" style={{ background: '#10B981' }}>DC</span>
      <span className="avatar-dot" style={{ background: '#8B5CF6' }}>SM</span>
      <span className="avatar-dot" style={{ background: '#F59E0B' }}>AK</span>
    </div>
    <span className="trust-label">{label}</span>
  </div>
);

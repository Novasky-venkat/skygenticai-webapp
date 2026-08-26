import React from 'react';
import { GlassButton } from './buttons';

export const Features = () => {
  const stats = [
    { digit: '91%', label: 'Containment Rate' },
    { digit: '85%', label: 'CSAT Score' },
    { digit: '1M+', label: 'Messages Processed Daily' },
  ];

  return (
    <section className="section section-dark" style={{ paddingTop: '0' }}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-digit">{stat.digit}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

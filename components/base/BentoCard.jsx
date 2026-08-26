import React from 'react';
import { ActionLink } from './ActionLink';

export const BentoCard = ({
  icon,
  title,
  description,
  href = '#demo',
  ariaLabel,
  className = '',
  ...props
}) => (
  <div className={`bento-feature-card ${className}`} {...props}>
    {/* 1. Circular Mint-Border Icon Badge */}
    <div className="bento-card-icon-badge" aria-hidden="true">
      {icon}
    </div>

    {/* 2. Card Title */}
    <h3 className="bento-card-title">{title}</h3>

    {/* 3. Body Copy */}
    <p className="bento-card-desc">{description}</p>

    {/* 4. Modular ActionLink Component */}
    <ActionLink href={href} ariaLabel={ariaLabel || `Read more about ${title}`}>
      Read More
    </ActionLink>
  </div>
);

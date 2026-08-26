import React from 'react';
import { ArrowBubble } from './ArrowBubble';

export const ActionLink = ({
  href = '#demo',
  children = 'Read More',
  ariaLabel,
  className = '',
  ...props
}) => (
  <a
    href={href}
    className={`action-link-arrow ${className}`}
    aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
    {...props}
  >
    <span>{children}</span>
    <ArrowBubble size="sm" variant="dark" />
  </a>
);

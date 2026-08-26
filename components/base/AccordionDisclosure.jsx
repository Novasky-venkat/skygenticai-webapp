import React, { useState } from 'react';

export const AccordionDisclosure = ({
  id,
  title,
  children,
  defaultExpanded = false,
  className = ''
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const panelId = `panel-${id}`;

  return (
    <div className={`accordion-item ${className}`}>
      <button
        className="accordion-trigger"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded(!expanded)}
      >
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon" aria-hidden="true">{expanded ? '−' : '+'}</span>
      </button>
      <div id={panelId} className="accordion-panel" hidden={!expanded}>
        {children}
      </div>
    </div>
  );
};

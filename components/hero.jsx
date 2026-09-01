import React, { useEffect, useState } from 'react';
import { CapsuleButton } from './base';

const scenarios = [
  {
    key: 'onboarding',
    request: 'Automate employee onboarding for new hires.',
    agents: [
        { name: 'HR Agent', action: 'Building profile', progress: '100%', done: 'Profile ready', icon: 'user' },
        { name: 'Identity Agent', action: 'Provisioning access', progress: '100%', done: 'Access granted', icon: 'lock' },
        { name: 'Payroll Agent', action: 'Opening record', progress: '100%', done: 'Payroll ready', icon: 'card' },
        { name: 'Calendar Agent', action: 'Booking orientation', progress: '100%', done: 'Session booked', icon: 'calendar' },
        { name: 'Docs Agent', action: 'Preparing docs', progress: '100%', done: 'Docs delivered', icon: 'document' }
    ],
    summary: [
      { value: '6', label: 'Systems Updated' },
      { value: '5', label: 'Agents Coordinated' },
      { value: '18', label: 'Tasks Executed' },
      { value: '3h 42m', label: 'Time Saved' }
    ]
  },
  {
    key: 'refund',
    request: 'Resolve a priority customer refund request.',
    agents: [
        { name: 'Support Agent', action: 'Reviewing history', progress: '100%', done: 'Case summarized', icon: 'user' },
        { name: 'CRM Agent', action: 'Syncing CRM', progress: '100%', done: 'CRM updated', icon: 'lock' },
        { name: 'Finance Agent', action: 'Checking policy', progress: '100%', done: 'Refund approved', icon: 'card' },
        { name: 'Email Agent', action: 'Drafting reply', progress: '100%', done: 'Response sent', icon: 'calendar' },
        { name: 'Ops Agent', action: 'Closing request', progress: '100%', done: 'Workflow closed', icon: 'document' }
    ],
    summary: [
      { value: '4', label: 'Systems Updated' },
      { value: '5', label: 'Agents Coordinated' },
      { value: '12', label: 'Tasks Executed' },
      { value: '2h 18m', label: 'Time Saved' }
    ]
  },
  {
    key: 'invoice',
    request: 'Process vendor invoices before month close.',
    agents: [
        { name: 'Docs Agent', action: 'Reading invoice', progress: '100%', done: 'Data captured', icon: 'document' },
        { name: 'Finance Agent', action: 'Matching PO', progress: '100%', done: 'PO matched', icon: 'card' },
        { name: 'Approval Agent', action: 'Routing approval', progress: '100%', done: 'Approvals logged', icon: 'user' },
        { name: 'Email Agent', action: 'Notifying vendor', progress: '100%', done: 'Vendor notified', icon: 'calendar' },
        { name: 'ERP Agent', action: 'Posting to ERP', progress: '100%', done: 'ERP updated', icon: 'lock' }
    ],
    summary: [
      { value: '5', label: 'Systems Updated' },
      { value: '5', label: 'Agents Coordinated' },
      { value: '16', label: 'Tasks Executed' },
      { value: '4h 06m', label: 'Time Saved' }
    ]
  }
];

const planningSteps = [
  'Understanding goal',
  'Identifying systems',
  'Selecting agents',
  'Creating execution plan'
];

const centerStates = [
  'Understanding request',
  'Generating plan',
  'Orchestrating agents',
  'Delegating task',
  'Monitoring execution',
  'Logging completion',
  'Workflow completed',
  'Idle'
];

const heroTimeline = [
  { stage: 'request', state: 0, planDone: 0, activeAgent: -1, completedAgents: 0, feedCount: 0, pulse: null, duration: 1400 },
  { stage: 'planning', state: 1, planDone: 1, activeAgent: -1, completedAgents: 0, feedCount: 0, pulse: 'plan', duration: 520 },
  { stage: 'planning', state: 1, planDone: 2, activeAgent: -1, completedAgents: 0, feedCount: 0, pulse: 'plan', duration: 520 },
  { stage: 'planning', state: 1, planDone: 3, activeAgent: -1, completedAgents: 0, feedCount: 0, pulse: 'plan', duration: 520 },
  { stage: 'planning', state: 1, planDone: 4, activeAgent: -1, completedAgents: 0, feedCount: 0, pulse: 'plan', duration: 680 },
  { stage: 'orchestration', state: 2, planDone: 4, activeAgent: -1, completedAgents: 0, feedCount: 0, pulse: 'core', duration: 720 },
  { stage: 'delegating', state: 3, planDone: 4, activeAgent: 0, completedAgents: 0, feedCount: 0, pulse: 'a1', duration: 560 },
  { stage: 'executing', state: 4, planDone: 4, activeAgent: 0, completedAgents: 0, feedCount: 0, pulse: null, duration: 960 },
  { stage: 'reporting', state: 5, planDone: 4, activeAgent: -1, completedAgents: 1, feedCount: 1, pulse: 'feed', duration: 560 },
  { stage: 'delegating', state: 3, planDone: 4, activeAgent: 1, completedAgents: 1, feedCount: 1, pulse: 'a2', duration: 560 },
  { stage: 'executing', state: 4, planDone: 4, activeAgent: 1, completedAgents: 1, feedCount: 1, pulse: null, duration: 960 },
  { stage: 'reporting', state: 5, planDone: 4, activeAgent: -1, completedAgents: 2, feedCount: 2, pulse: 'feed', duration: 560 },
  { stage: 'delegating', state: 3, planDone: 4, activeAgent: 2, completedAgents: 2, feedCount: 2, pulse: 'a3', duration: 560 },
  { stage: 'executing', state: 4, planDone: 4, activeAgent: 2, completedAgents: 2, feedCount: 2, pulse: null, duration: 960 },
  { stage: 'reporting', state: 5, planDone: 4, activeAgent: -1, completedAgents: 3, feedCount: 3, pulse: 'feed', duration: 560 },
  { stage: 'delegating', state: 3, planDone: 4, activeAgent: 3, completedAgents: 3, feedCount: 3, pulse: 'a4', duration: 560 },
  { stage: 'executing', state: 4, planDone: 4, activeAgent: 3, completedAgents: 3, feedCount: 3, pulse: null, duration: 960 },
  { stage: 'reporting', state: 5, planDone: 4, activeAgent: -1, completedAgents: 4, feedCount: 4, pulse: 'feed', duration: 560 },
  { stage: 'delegating', state: 3, planDone: 4, activeAgent: 4, completedAgents: 4, feedCount: 4, pulse: 'a5', duration: 560 },
  { stage: 'executing', state: 4, planDone: 4, activeAgent: 4, completedAgents: 4, feedCount: 4, pulse: null, duration: 960 },
  { stage: 'reporting', state: 5, planDone: 4, activeAgent: -1, completedAgents: 5, feedCount: 5, pulse: 'feed', duration: 560 },
  { stage: 'summary', state: 6, planDone: 4, activeAgent: -1, completedAgents: 5, feedCount: 5, pulse: 'summary', duration: 1200 },
  { stage: 'idle', state: 7, planDone: 4, activeAgent: -1, completedAgents: 5, feedCount: 5, pulse: null, duration: 2400 }
];

const renderIcon = (type) => {
  switch (type) {
    case 'user':
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case 'lock':
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case 'card':
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      );
    case 'calendar':
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case 'document':
    default:
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      );
  }
};

const HeroAutomationVisual = () => {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const step = heroTimeline[stepIndex];
  const scenario = scenarios[scenarioIndex];
  const isPlanningConnected = step.stage === 'planning' || step.stage === 'orchestration';
  const isRequestConnected = step.stage === 'planning' || step.stage === 'orchestration';
  const isAgentConnectorActive = (index) => step.activeAgent === index && (step.stage === 'delegating' || step.stage === 'executing');

  useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setStepIndex(heroTimeline.length - 1);
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setStepIndex((current) => {
        const next = current + 1;
        if (next >= heroTimeline.length) {
          setScenarioIndex((scenarioCurrent) => (scenarioCurrent + 1) % scenarios.length);
          return 0;
        }
        return next;
      });
    }, step.duration);

    return () => window.clearTimeout(timeout);
  }, [stepIndex, step.duration]);

  return (
    <div className="hero-agentic-visual" aria-hidden="true" data-stage={step.stage}>
      {/* Precision SVG Connectors with Traveling Pulse Dots */}
      <svg className="hero-connectors-svg" viewBox="0 0 600 560" fill="none" preserveAspectRatio="xMidYMid meet">
        <path className={`connector-line connector-line--req ${isRequestConnected ? 'is-active' : ''}`} d="M 255 128 Q 300 96 270 72" />
        <path className={`connector-line connector-line--plan ${isPlanningConnected ? 'is-active' : ''}`} d="M 205 180 Q 228 176 195 168" />
        <path className={`connector-line connector-line--agent-1 ${isAgentConnectorActive(0) ? 'is-active' : ''}`} d="M 390 142 Q 414 92 420 58" />
        <path className={`connector-line connector-line--agent-2 ${isAgentConnectorActive(1) ? 'is-active' : ''}`} d="M 390 184 Q 406 184 420 184" />
        <path className={`connector-line connector-line--agent-3 ${isAgentConnectorActive(2) ? 'is-active' : ''}`} d="M 390 224 Q 408 258 420 318" />
        <path className={`connector-line connector-line--agent-4 ${isAgentConnectorActive(3) ? 'is-active' : ''}`} d="M 225 224 Q 182 282 180 318" />
        <path className={`connector-line connector-line--agent-5 ${isAgentConnectorActive(4) ? 'is-active' : ''}`} d="M 292 240 Q 272 258 272 275" />
        <path className={`connector-line connector-line--feed ${step.stage === 'reporting' ? 'is-active' : ''}`} d="M 248 240 C 218 250, 198 270, 196 385" />
        <path className={`connector-line connector-line--summary ${step.stage === 'summary' || step.stage === 'idle' ? 'is-active' : ''}`} d="M 352 240 C 382 250, 400 270, 400 385" />

        <circle className={`connector-pulse ${step.pulse === 'req' ? 'is-pulsing pulse-req' : ''}`} r="3.5" />
        <circle className={`connector-pulse ${step.pulse === 'plan' ? 'is-pulsing pulse-plan' : ''}`} r="3.5" />
        <circle className={`connector-pulse ${step.pulse === 'core' ? 'is-pulsing pulse-core' : ''}`} r="3.5" />
        <circle className={`connector-pulse ${step.pulse === 'a1' ? 'is-pulsing pulse-a1' : ''}`} r="3.5" />
        <circle className={`connector-pulse ${step.pulse === 'a2' ? 'is-pulsing pulse-a2' : ''}`} r="3.5" />
        <circle className={`connector-pulse ${step.pulse === 'a3' ? 'is-pulsing pulse-a3' : ''}`} r="3.5" />
        <circle className={`connector-pulse ${step.pulse === 'a4' ? 'is-pulsing pulse-a4' : ''}`} r="3.5" />
        <circle className={`connector-pulse ${step.pulse === 'a5' ? 'is-pulsing pulse-a5' : ''}`} r="3.5" />
        <circle className={`connector-pulse ${step.pulse === 'feed' ? 'is-pulsing pulse-feed' : ''}`} r="3.5" />
        <circle className={`connector-pulse ${step.pulse === 'summary' ? 'is-pulsing pulse-summary' : ''}`} r="3.5" />
      </svg>

      <div className="agent-scenario">
        {/* Business Request Card */}
        <div className="request-card">
          <div className="request-card__header">
            <span className="request-card__badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
              Business Request
            </span>
          </div>
          <span className="request-card__text">{scenario.request}</span>
        </div>

        {/* AI Execution Plan Card */}
        <div className="planning-card">
          <span className="planning-card__label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            Execution Plan
          </span>
          <div className="planning-card__rows">
            {planningSteps.map((planStep, index) => (
              <span key={planStep} className={`planning-row ${index < step.planDone ? 'is-done' : ''}`}>
                <i className="plan-check"></i>
                {planStep}
              </span>
            ))}
          </div>
        </div>

        {/* Central AI Core Orchestrator Node */}
        <div className="orchestrator-node">
          <div className="orchestrator-node__glow" aria-hidden="true"></div>
          <div className="orchestrator-node__header">
            <svg className="orchestrator-node__icon" width="22" height="22" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="var(--color-primary-blue)" />
              <path d="M7 14C7 10.134 10.134 7 14 7C17.866 7 21 10.134 21 14C21 17.866 17.866 21 14 21" stroke="var(--color-card)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="14" cy="14" r="3" fill="var(--color-blue-100)" />
            </svg>
            <span className="orchestrator-node__brand">SkyGentic AI</span>
          </div>
          <span className="orchestrator-node__state">{centerStates[step.state]}</span>
          <span className="orchestrator-node__typing">
            <i></i><i></i><i></i>
          </span>
        </div>

        {/* Agent Cards Grid */}
        <div className="agent-field">
          {scenario.agents.map((agent, index) => {
            const isDispatching = step.stage === 'delegating' && index === step.activeAgent;
            const isActive = step.stage === 'executing' && index === step.activeAgent;
            const isDone = index < step.completedAgents;
            const isVisible = isDone || isActive || isDispatching || step.stage === 'summary' || step.stage === 'idle';
            const status = isDone ? agent.done : isActive ? agent.action : isDispatching ? 'Receiving brief' : 'Standby';
            const fill = isDone ? 1 : isActive ? 0.72 : isDispatching ? 0.28 : 0.12;

            return (
              <div
                key={agent.name}
                className={`agent-card agent-card--${index + 1} ${isVisible ? 'is-visible' : ''} ${isDispatching ? 'is-dispatching' : ''} ${isActive ? 'is-active' : ''} ${isDone ? 'is-done' : ''}`}
              >
                <div className="agent-card__header">
                  <span className="agent-card__icon">{renderIcon(agent.icon)}</span>
                  <span className="agent-card__title">{agent.name}</span>
                  <span className="agent-card__check" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                </div>
                <span className="agent-card__status">{status}</span>
                <span className="agent-card__progress">
                  <span style={{ transform: `scaleX(${fill})` }}></span>
                </span>
              </div>
            );
          })}
        </div>

        {/* Real-Time Activity Feed Log Card */}
        <div className={`activity-feed-card ${step.feedCount > 0 ? 'is-visible' : ''}`}>
          <div className="activity-feed-card__header">
            <span className="activity-feed-card__title">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              Live Feed
            </span>
            <span className="activity-feed-card__dot"></span>
          </div>
          <div className="activity-feed-card__list">
            {scenario.agents.slice(0, step.feedCount).map((ag) => (
              <div key={ag.name} className="feed-item feed-item--enter">
                <span className="feed-item__check">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span className="feed-item__text"><strong>{ag.name}</strong>: {ag.done}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Summary Card */}
        <div className={`completion-card ${step.stage === 'summary' || step.stage === 'idle' ? 'is-visible' : ''}`}>
          <div className="completion-card__header">
            <span className="completion-card__badge">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span className="completion-card__title">Workflow Summary</span>
          </div>
          <div className="completion-card__grid">
            {scenario.summary.map((item) => (
              <div key={item.label} className="completion-card__item">
                <span className="completion-card__val">{item.value}</span>
                <span className="completion-card__lbl">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero = () => (
  <section id="hero" className="section-hero" aria-label="Hero Introduction">
    <div className="container">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-eyebrow">Introducing Vantage: Next-Gen Autonomous AI Agents</div>
          <h1 className="headline-homepage">
            Empower Enterprise<br />Customer Journeys with<br />Autonomous Agentic AI
          </h1>
          <p className="hero-lead">
            Deploy self-reasoning AI workforces that resolve complex requests, orchestrate omnichannel operations, and scale customer delight effortlessly.
          </p>
          
          <div className="hero-cta-group">
            <CapsuleButton href="#demo" variant="primary">
              Experience Vantage
            </CapsuleButton>
          </div>
        </div>
        <HeroAutomationVisual />
      </div>
    </div>
  </section>
);

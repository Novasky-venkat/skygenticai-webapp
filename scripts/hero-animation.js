(() => {
  const visual = document.querySelector('.hero-agentic-visual');
  if (!visual) return;

  const request = visual.querySelector('[data-hero-request]');
  const state = visual.querySelector('[data-hero-state]');
  const rows = Array.from(visual.querySelectorAll('[data-plan-row]'));
  const cards = Array.from(visual.querySelectorAll('[data-agent-card]'));
  const activityFeed = visual.querySelector('[data-activity-feed]');
  const feedList = visual.querySelector('[data-feed-list]');
  const summaryCard = visual.querySelector('.completion-card');
  const summaryGrid = visual.querySelector('[data-summary-grid]');

  const iconSvgs = {
    user: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    lock: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    card: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
    calendar: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    document: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`
  };

  const scenarios = [
    {
      key: 'onboarding',
      request: 'Automate employee onboarding for new hires.',
      agents: [
        { name: 'HR Agent', action: 'Building profile', done: 'Profile ready', icon: 'user' },
        { name: 'Identity Agent', action: 'Provisioning access', done: 'Access granted', icon: 'lock' },
        { name: 'Payroll Agent', action: 'Opening record', done: 'Payroll ready', icon: 'card' },
        { name: 'Calendar Agent', action: 'Booking orientation', done: 'Session booked', icon: 'calendar' },
        { name: 'Docs Agent', action: 'Preparing docs', done: 'Docs delivered', icon: 'document' }
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
        { name: 'Support Agent', action: 'Reviewing history', done: 'Case summarized', icon: 'user' },
        { name: 'CRM Agent', action: 'Syncing CRM', done: 'CRM updated', icon: 'lock' },
        { name: 'Finance Agent', action: 'Checking policy', done: 'Refund approved', icon: 'card' },
        { name: 'Email Agent', action: 'Drafting reply', done: 'Response sent', icon: 'calendar' },
        { name: 'Ops Agent', action: 'Closing request', done: 'Workflow closed', icon: 'document' }
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
        { name: 'Docs Agent', action: 'Reading invoice', done: 'Data captured', icon: 'document' },
        { name: 'Finance Agent', action: 'Matching PO', done: 'PO matched', icon: 'card' },
        { name: 'Approval Agent', action: 'Routing approval', done: 'Approvals logged', icon: 'user' },
        { name: 'Email Agent', action: 'Notifying vendor', done: 'Vendor notified', icon: 'calendar' },
        { name: 'ERP Agent', action: 'Posting to ERP', done: 'ERP updated', icon: 'lock' }
      ],
      summary: [
        { value: '5', label: 'Systems Updated' },
        { value: '5', label: 'Agents Coordinated' },
        { value: '16', label: 'Tasks Executed' },
        { value: '4h 06m', label: 'Time Saved' }
      ]
    }
  ];

  const states = [
    'Understanding request',
    'Generating plan',
    'Orchestrating agents',
    'Delegating task',
    'Monitoring execution',
    'Logging completion',
    'Workflow completed',
    'Idle'
  ];

  const timeline = [
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

  let scenarioIndex = 0;
  let stepIndex = 0;

  function render() {
    const scenario = scenarios[scenarioIndex];
    const step = timeline[stepIndex];

    visual.dataset.stage = step.stage;
    if (request) request.textContent = scenario.request;
    if (state) state.textContent = states[step.state];

    rows.forEach((row, idx) => {
      row.classList.toggle('is-done', idx < step.planDone);
    });

    if (activityFeed) activityFeed.classList.toggle('is-visible', step.feedCount > 0);
    if (summaryCard) summaryCard.classList.toggle('is-visible', step.stage === 'summary' || step.stage === 'idle');

    cards.forEach((card, idx) => {
      const agent = scenario.agents[idx];
      const dispatching = step.stage === 'delegating' && idx === step.activeAgent;
      const active = step.stage === 'executing' && idx === step.activeAgent;
      const finished = idx < step.completedAgents;
      const visible = finished || active || dispatching || step.stage === 'summary' || step.stage === 'idle';
      const fill = finished ? 1 : active ? 0.72 : dispatching ? 0.28 : 0.12;

      card.classList.toggle('is-visible', visible);
      card.classList.toggle('is-dispatching', dispatching);
      card.classList.toggle('is-active', active);
      card.classList.toggle('is-done', finished);

      const titleEl = card.querySelector('.agent-card__title');
      const statusEl = card.querySelector('.agent-card__status');
      const progressEl = card.querySelector('.agent-card__progress span');
      const iconEl = card.querySelector('[data-agent-icon]');

      if (titleEl) titleEl.textContent = agent.name;
      if (statusEl) statusEl.textContent = finished ? agent.done : active ? agent.action : dispatching ? 'Receiving brief' : 'Standby';
      if (progressEl) progressEl.style.transform = `scaleX(${fill})`;
      if (iconEl) iconEl.innerHTML = iconSvgs[agent.icon] || iconSvgs.document;
    });

    // Update Activity Feed
    if (feedList) {
      feedList.innerHTML = scenario.agents
        .slice(0, step.feedCount)
        .map(ag => `
          <div class="feed-item feed-item--enter">
            <span class="feed-item__check">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span class="feed-item__text"><strong>${ag.name}</strong>: ${ag.done}</span>
          </div>
        `).join('');
    }

    // Update Summary Grid
    if (summaryGrid) {
      summaryGrid.innerHTML = scenario.summary.map(item => `
        <div class="completion-card__item">
          <span class="completion-card__val">${item.value}</span>
          <span class="completion-card__lbl">${item.label}</span>
        </div>
      `).join('');
    }

    // Update SVG active paths & pulse classes
    const svg = visual.querySelector('.hero-connectors-svg');
    if (svg) {
      const lineReq = svg.querySelector('.connector-line--req');
      const linePlan = svg.querySelector('.connector-line--plan');
      const lineA1 = svg.querySelector('.connector-line--agent-1');
      const lineA2 = svg.querySelector('.connector-line--agent-2');
      const lineA3 = svg.querySelector('.connector-line--agent-3');
      const lineA4 = svg.querySelector('.connector-line--agent-4');
      const lineA5 = svg.querySelector('.connector-line--agent-5');
      const lineFeed = svg.querySelector('.connector-line--feed');
      const lineSummary = svg.querySelector('.connector-line--summary');

      const isAgentConnectorActive = (idx) => step.activeAgent === idx && (step.stage === 'delegating' || step.stage === 'executing');

      if (lineReq) lineReq.classList.toggle('is-active', step.stage === 'planning' || step.stage === 'orchestration');
      if (linePlan) linePlan.classList.toggle('is-active', step.stage === 'planning' || step.stage === 'orchestration');
      if (lineA1) lineA1.classList.toggle('is-active', isAgentConnectorActive(0));
      if (lineA2) lineA2.classList.toggle('is-active', isAgentConnectorActive(1));
      if (lineA3) lineA3.classList.toggle('is-active', isAgentConnectorActive(2));
      if (lineA4) lineA4.classList.toggle('is-active', isAgentConnectorActive(3));
      if (lineA5) lineA5.classList.toggle('is-active', isAgentConnectorActive(4));
      if (lineFeed) lineFeed.classList.toggle('is-active', step.stage === 'reporting');
      if (lineSummary) lineSummary.classList.toggle('is-active', step.stage === 'summary' || step.stage === 'idle');

      const pulseReq = svg.querySelector('.pulse-req');
      const pulsePlan = svg.querySelector('.pulse-plan');
      const pulseCore = svg.querySelector('.pulse-core');
      const pulseA1 = svg.querySelector('.pulse-a1');
      const pulseA2 = svg.querySelector('.pulse-a2');
      const pulseA3 = svg.querySelector('.pulse-a3');
      const pulseA4 = svg.querySelector('.pulse-a4');
      const pulseA5 = svg.querySelector('.pulse-a5');
      const pulseFeed = svg.querySelector('.pulse-feed');
      const pulseSummary = svg.querySelector('.pulse-summary');

      if (pulseReq) pulseReq.classList.toggle('is-pulsing', step.pulse === 'req');
      if (pulsePlan) pulsePlan.classList.toggle('is-pulsing', step.pulse === 'plan');
      if (pulseCore) pulseCore.classList.toggle('is-pulsing', step.pulse === 'core');
      if (pulseA1) pulseA1.classList.toggle('is-pulsing', step.pulse === 'a1');
      if (pulseA2) pulseA2.classList.toggle('is-pulsing', step.pulse === 'a2');
      if (pulseA3) pulseA3.classList.toggle('is-pulsing', step.pulse === 'a3');
      if (pulseA4) pulseA4.classList.toggle('is-pulsing', step.pulse === 'a4');
      if (pulseA5) pulseA5.classList.toggle('is-pulsing', step.pulse === 'a5');
      if (pulseFeed) pulseFeed.classList.toggle('is-pulsing', step.pulse === 'feed');
      if (pulseSummary) pulseSummary.classList.toggle('is-pulsing', step.pulse === 'summary');
    }
  }

  function tick() {
    render();
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    setTimeout(() => {
      stepIndex += 1;
      if (stepIndex >= timeline.length) {
        stepIndex = 0;
        scenarioIndex = (scenarioIndex + 1) % scenarios.length;
      }
      tick();
    }, timeline[stepIndex].duration);
  }

  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    stepIndex = timeline.length - 1;
  }

  tick();
})();

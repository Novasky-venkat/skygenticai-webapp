const CONNECTOR_PATHS = {
  req: { line: '.connector-line--req', pulse: '.pulse-req' },
  plan: { line: '.connector-line--plan', pulse: '.pulse-plan' },
  core: { pulse: '.pulse-core' },
  a1: { line: '.connector-line--agent-1', pulse: '.pulse-a1' },
  a2: { line: '.connector-line--agent-2', pulse: '.pulse-a2' },
  a3: { line: '.connector-line--agent-3', pulse: '.pulse-a3' },
  a4: { line: '.connector-line--agent-4', pulse: '.pulse-a4' },
  a5: { line: '.connector-line--agent-5', pulse: '.pulse-a5' },
  feed: { line: '.connector-line--feed', pulse: '.pulse-feed' },
  summary: { line: '.connector-line--summary', pulse: '.pulse-summary' }
};

const fmt = (value) => Number(value.toFixed(1)).toString();
const point = (x, y) => ({ x, y });

const boxFor = (element) => {
  const width = element.offsetWidth;
  const height = element.offsetHeight;
  const centered = element.classList.contains('orchestrator-node');
  const left = centered ? element.offsetLeft - width / 2 : element.offsetLeft;
  const top = centered ? element.offsetTop - height / 2 : element.offsetTop;

  return {
    left,
    top,
    width,
    height,
    right: left + width,
    bottom: top + height,
    centerX: left + width / 2,
    centerY: top + height / 2
  };
};

const edgeCenter = (box, edge) => {
  switch (edge) {
    case 'top':
      return point(box.centerX, box.top);
    case 'right':
      return point(box.right, box.centerY);
    case 'bottom':
      return point(box.centerX, box.bottom);
    case 'left':
    default:
      return point(box.left, box.centerY);
  }
};

const coreAnchor = (core, slot) => {
  switch (slot) {
    case 'request':
      return point(core.left + core.width * 0.25, core.top);
    case 'plan':
      return edgeCenter(core, 'left');
    case 'rightUpper':
      return point(core.right, core.top + core.height * 0.12);
    case 'rightCenter':
      return edgeCenter(core, 'right');
    case 'rightLower':
      return point(core.right, core.top + core.height * 0.86);
    case 'leftLower':
      return point(core.left, core.top + core.height * 0.86);
    case 'bottomCenter':
      return edgeCenter(core, 'bottom');
    case 'bottomLeft':
      return point(core.left + core.width * 0.25, core.bottom);
    case 'bottomRight':
      return point(core.left + core.width * 0.75, core.bottom);
    default:
      return point(core.centerX, core.centerY);
  }
};

const cubic = (start, c1, c2, end) =>
  `M ${fmt(start.x)} ${fmt(start.y)} C ${fmt(c1.x)} ${fmt(c1.y)}, ${fmt(c2.x)} ${fmt(c2.y)}, ${fmt(end.x)} ${fmt(end.y)}`;

const quadratic = (start, control, end) =>
  `M ${fmt(start.x)} ${fmt(start.y)} Q ${fmt(control.x)} ${fmt(control.y)} ${fmt(end.x)} ${fmt(end.y)}`;

const sideCurve = (start, end, direction) => {
  const handle = Math.min(46, Math.max(20, Math.abs(end.x - start.x) * 0.58));
  const sign = direction === 'left' ? -1 : 1;
  return cubic(
    start,
    point(start.x + handle * sign, start.y),
    point(end.x - handle * sign, end.y),
    end
  );
};

const buildPaths = (boxes) => {
  const core = boxes.core;
  const requestEnd = edgeCenter(boxes.request, 'right');
  const planEnd = edgeCenter(boxes.plan, 'right');
  const agent1End = edgeCenter(boxes.agent1, 'left');
  const agent2End = edgeCenter(boxes.agent2, 'left');
  const agent3End = edgeCenter(boxes.agent3, 'left');
  const agent4End = edgeCenter(boxes.agent4, 'top');
  const agent5End = edgeCenter(boxes.agent5, 'right');
  const feedEnd = edgeCenter(boxes.feed, 'right');
  const summaryEnd = edgeCenter(boxes.summary, 'left');

  return {
    req: cubic(
      coreAnchor(core, 'request'),
      point(coreAnchor(core, 'request').x + 42, core.top - 34),
      point(requestEnd.x + 42, requestEnd.y),
      requestEnd
    ),
    plan: sideCurve(coreAnchor(core, 'plan'), planEnd, 'left'),
    core: quadratic(
      point(core.left + core.width * 0.22, core.centerY),
      point(core.centerX, core.top + core.height * 0.14),
      point(core.right - core.width * 0.22, core.centerY)
    ),
    a1: sideCurve(coreAnchor(core, 'rightUpper'), agent1End, 'right'),
    a2: sideCurve(coreAnchor(core, 'rightCenter'), agent2End, 'right'),
    a3: sideCurve(coreAnchor(core, 'rightLower'), agent3End, 'right'),
    a4: cubic(
      coreAnchor(core, 'bottomCenter'),
      point(core.centerX, core.bottom + 10),
      point(agent4End.x, agent4End.y - 10),
      agent4End
    ),
    a5: sideCurve(coreAnchor(core, 'leftLower'), agent5End, 'left'),
    feed: cubic(
      coreAnchor(core, 'leftLower'),
      point(core.left - 34, core.bottom + 14),
      point(feedEnd.x - 78, feedEnd.y - 36),
      feedEnd
    ),
    summary: cubic(
      coreAnchor(core, 'rightLower'),
      point(core.right + 54, core.bottom + 30),
      point(summaryEnd.x + 120, summaryEnd.y - 28),
      summaryEnd
    )
  };
};

const setPulsePath = (pulse, path) => {
  const offsetPath = `path("${path}")`;
  pulse.style.offsetPath = offsetPath;
  pulse.style.webkitOffsetPath = offsetPath;
};

export function syncHeroConnectorGeometry(visual) {
  if (!visual) return;

  const svg = visual.querySelector('.hero-connectors-svg');
  const elements = {
    request: visual.querySelector('.request-card'),
    plan: visual.querySelector('.planning-card'),
    core: visual.querySelector('.orchestrator-node'),
    agent1: visual.querySelector('.agent-card--1'),
    agent2: visual.querySelector('.agent-card--2'),
    agent3: visual.querySelector('.agent-card--3'),
    agent4: visual.querySelector('.agent-card--4'),
    agent5: visual.querySelector('.agent-card--5'),
    feed: visual.querySelector('.activity-feed-card'),
    summary: visual.querySelector('.completion-card')
  };

  if (!svg || Object.values(elements).some((element) => !element)) return;

  const boxes = Object.fromEntries(
    Object.entries(elements).map(([key, element]) => [key, boxFor(element)])
  );
  const paths = buildPaths(boxes);

  Object.entries(paths).forEach(([key, path]) => {
    const selectors = CONNECTOR_PATHS[key];
    const line = selectors.line ? svg.querySelector(selectors.line) : null;
    const pulse = selectors.pulse ? svg.querySelector(selectors.pulse) : null;

    if (line) line.setAttribute('d', path);
    if (pulse) setPulsePath(pulse, path);
  });
}

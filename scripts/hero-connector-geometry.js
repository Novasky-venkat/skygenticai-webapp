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
const INFORMATIONAL_CARD_TERMINAL_GAP = 0;
const CUBIC_TRIM_STEPS = 96;

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

const lerp = (start, end, t) =>
  point(
    start.x + (end.x - start.x) * t,
    start.y + (end.y - start.y) * t
  );

const cubicPointAt = (start, c1, c2, end, t) => {
  const q0 = lerp(start, c1, t);
  const q1 = lerp(c1, c2, t);
  const q2 = lerp(c2, end, t);
  const r0 = lerp(q0, q1, t);
  const r1 = lerp(q1, q2, t);

  return lerp(r0, r1, t);
};

const splitCubicAt = (start, c1, c2, end, t) => {
  const q0 = lerp(start, c1, t);
  const q1 = lerp(c1, c2, t);
  const q2 = lerp(c2, end, t);
  const r0 = lerp(q0, q1, t);
  const r1 = lerp(q1, q2, t);
  const split = lerp(r0, r1, t);

  return { start, c1: q0, c2: r0, end: split };
};

const isInsideBox = (value, box) =>
  value.x >= box.left &&
  value.x <= box.right &&
  value.y >= box.top &&
  value.y <= box.bottom;

const cubicLengthUntil = (start, c1, c2, end, untilT) => {
  const steps = Math.max(1, Math.ceil(CUBIC_TRIM_STEPS * untilT));
  let previous = start;
  let length = 0;

  for (let index = 1; index <= steps; index += 1) {
    const t = untilT * (index / steps);
    const current = cubicPointAt(start, c1, c2, end, t);
    length += Math.hypot(current.x - previous.x, current.y - previous.y);
    previous = current;
  }

  return length;
};

const findBoxEntryT = (start, c1, c2, end, box) => {
  let previousT = 0;
  let previousInside = isInsideBox(start, box);

  for (let index = 1; index <= CUBIC_TRIM_STEPS; index += 1) {
    const currentT = index / CUBIC_TRIM_STEPS;
    const currentInside = isInsideBox(cubicPointAt(start, c1, c2, end, currentT), box);

    if (!previousInside && currentInside) {
      let low = previousT;
      let high = currentT;

      for (let iteration = 0; iteration < 12; iteration += 1) {
        const mid = (low + high) / 2;
        if (isInsideBox(cubicPointAt(start, c1, c2, end, mid), box)) {
          high = mid;
        } else {
          low = mid;
        }
      }

      return high;
    }

    previousT = currentT;
    previousInside = currentInside;
  }

  return null;
};

const findTBeforeEntry = (start, c1, c2, end, entryT, gap) => {
  const targetLength = Math.max(0, cubicLengthUntil(start, c1, c2, end, entryT) - gap);
  let low = 0;
  let high = entryT;

  for (let iteration = 0; iteration < 16; iteration += 1) {
    const mid = (low + high) / 2;
    if (cubicLengthUntil(start, c1, c2, end, mid) < targetLength) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return high;
};

const terminalCubicBeforeBox = (start, c1, c2, end, box, terminalStroke) => {
  const endpointAllowance = terminalEndpointTrim(end, c2, terminalStroke.width, terminalStroke.linecap);
  const entryT = findBoxEntryT(start, c1, c2, end, box);
  const gap = INFORMATIONAL_CARD_TERMINAL_GAP + endpointAllowance;

  if (entryT === null) {
    return {
      start,
      c1,
      c2,
      end: trimTerminalEndpoint(end, c2, gap)
    };
  }

  return splitCubicAt(
    start,
    c1,
    c2,
    end,
    findTBeforeEntry(start, c1, c2, end, entryT, gap)
  );
};

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

const trimTerminalEndpoint = (end, control, distance) => {
  const dx = end.x - control.x;
  const dy = end.y - control.y;
  const length = Math.hypot(dx, dy);

  if (!length) return end;

  return point(
    end.x - (dx / length) * distance,
    end.y - (dy / length) * distance
  );
};

const terminalEndpointTrim = (end, control, strokeWidth, strokeLinecap) => {
  const dx = end.x - control.x;
  const dy = end.y - control.y;
  const length = Math.hypot(dx, dy);

  if (!length) return 0;

  const tangentX = Math.max(Math.abs(dx / length), 0.01);
  const normalX = Math.abs(dy / length);
  const strokeHalf = strokeWidth / 2;
  const capOverhang = strokeLinecap === 'square' || strokeLinecap === 'round' ? strokeHalf : 0;
  const pixelRatio = typeof window === 'undefined' ? 1 : window.devicePixelRatio || 1;
  const antialiasAllowance = 1 / Math.max(pixelRatio, 1);

  return capOverhang + ((strokeHalf * normalX) + antialiasAllowance) / tangentX;
};

const buildPaths = (boxes, terminalStroke) => {
  const core = boxes.core;
  const requestEnd = edgeCenter(boxes.request, 'right');
  const planEnd = edgeCenter(boxes.plan, 'right');
  const feedStart = coreAnchor(core, 'leftLower');
  const summaryStart = coreAnchor(core, 'rightLower');
  const agent1End = edgeCenter(boxes.agent1, 'left');
  const agent2End = edgeCenter(boxes.agent2, 'left');
  const agent3End = edgeCenter(boxes.agent3, 'left');
  const agent4End = edgeCenter(boxes.agent4, 'top');
  const agent5End = edgeCenter(boxes.agent5, 'right');
  const feedBoundaryEnd = edgeCenter(boxes.feed, 'right');
  const summaryBoundaryEnd = edgeCenter(boxes.summary, 'left');
  const feedControlEnd = point(feedBoundaryEnd.x - 78, feedBoundaryEnd.y - 36);
  const summaryControlEnd = point(summaryBoundaryEnd.x + 120, summaryBoundaryEnd.y - 28);
  const feedCurve = terminalCubicBeforeBox(
    feedStart,
    point(core.left - 34, core.bottom + 14),
    feedControlEnd,
    feedBoundaryEnd,
    boxes.feed,
    terminalStroke
  );
  const summaryCurve = terminalCubicBeforeBox(
    summaryStart,
    point(core.right + 54, core.bottom + 30),
    summaryControlEnd,
    summaryBoundaryEnd,
    boxes.summary,
    terminalStroke
  );

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
    feed: cubic(feedCurve.start, feedCurve.c1, feedCurve.c2, feedCurve.end),
    summary: cubic(summaryCurve.start, summaryCurve.c1, summaryCurve.c2, summaryCurve.end)
  };
};

const setPulsePath = (pulse, path) => {
  const offsetPath = `path("${path}")`;
  pulse.style.offsetPath = offsetPath;
  pulse.style.webkitOffsetPath = offsetPath;
};

const terminalStrokeFor = (svg) => {
  const line = svg.querySelector('.connector-line--feed') || svg.querySelector('.connector-line--summary');
  const style = line && typeof window !== 'undefined' ? window.getComputedStyle(line) : null;
  const width = Number.parseFloat(style?.strokeWidth) || 1.5;

  return {
    width,
    linecap: style?.strokeLinecap || 'butt'
  };
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
  const paths = buildPaths(boxes, terminalStrokeFor(svg));

  Object.entries(paths).forEach(([key, path]) => {
    const selectors = CONNECTOR_PATHS[key];
    const line = selectors.line ? svg.querySelector(selectors.line) : null;
    const pulse = selectors.pulse ? svg.querySelector(selectors.pulse) : null;

    if (line) line.setAttribute('d', path);
    if (pulse) setPulsePath(pulse, path);
  });
}

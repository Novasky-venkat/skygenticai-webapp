# Multi-Agent Operating Guide (AGENTS.md)

This repository is optimized for autonomous development by Google Antigravity agents, subagents, and peer agents.

## Core Agent Roles & Delegation Patterns

1. **Canvas Designer & Token Architect (self / subagent)**:
   - Wireframes visual hierarchy in `docs/canvas-specs.md` before coding.
   - Enforces Tier-1/2/3 token inheritance from `styles/tokens.css`.

2. **Hallmark UI Builder Agent**:
   - Scaffolds accessible, pixel-perfect modular components in `components/`.
   - Validates responsive breakpoints across mobile (`<480px`), tablet (`768px-991px`), and desktop (`>992px`).

3. **Accessibility (a11y) & SEO Guardian Agent**:
   - Audits WCAG 2.1/2.2 AA compliance, color contrast ratios, focus-visible states, and screen-reader ARIA trees.
   - Audits JSON-LD Schema structured data, meta tags, Core Web Vitals (LCP, INP, CLS), and Lighthouse 100/100 baselines.

## Fast Verification Commands
```bash
# Start local preview server
npm run dev

# Run automated tests
npm test

# Check git status
git status
```

## Mandatory Operating Rule: Research & User Visual Confirmation
Before implementing or modifying any component styling or layout:
1. **Research** the latest UI/UX and a11y patterns.
2. **Draft** the visual design and token bindings in `docs/canvas-specs.md`.
3. **Present the visual preview/mockup to the User** and request review.
4. **DO NOT proceed to coding** until the User confirms the design and visual appearance.

# Multi-Agent Operating Guide (AGENTS.md)

This repository is strictly governed by **Hallmark Engineering & UI Craft Standards**. Autonomous development by Google Antigravity agents, subagents, and peer agents must unconditionally abide by the following non-negotiable rules and linked skill sets.

## Linked Core Skill Sets

All agents must load and follow instructions from these workspace skill sets:
1. 💎 **Hallmark UI Craft Skill**: [`skills/hallmark/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/skills/hallmark/SKILL.md) (or [`.agents/skills/hallmark/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/.agents/skills/hallmark/SKILL.md))
2. 🔦 **Lighthouse Accessibility Skill**: [`skills/lighthouse/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/skills/lighthouse/SKILL.md) (or [`.agents/skills/lighthouse/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/.agents/skills/lighthouse/SKILL.md))
3. 🔍 **SEO Optimization Engine Skill**: [`skills/seo/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/skills/seo/SKILL.md) (or [`.agents/skills/seo/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/.agents/skills/seo/SKILL.md))
4. 📖 **Master Skill Sets Guide**: [`docs/skillsets-guide.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/docs/skillsets-guide.md)

---

## Mandatory Hallmark Design & UI Craft Rules (Strict & Non-Negotiable)

1. **ZERO EMOJIS & ZERO CHEESY AI ICONS**:
   - Strictly prohibit the use of emojis (e.g., ⚡, 🧠, 🎙️, 🔒, 📈, 🤝, 🎯, ✨) in production UI components, chips, cards, or hero elements.
   - Do NOT use cheesy "AI" glyphs or "Ai✦" badge icons.
   - All visual indicators must use pixel-perfect, clean Hallmark SVG vector line icons or sleek typographic treatments.

2. **NO FLOATING AI PILL BADGES**:
   - Absolutely no floating pill status boxes (e.g., "• Autonomous Agent Live", "• AI Skill Active").

3. **STRICT 3-TIER TOKEN & TYPOGRAPHY INHERITANCE**:
   - Tier 1 (Primitive): Hex values defined only in `styles/tokens.css`.
   - Tier 2 (Semantic): Semantic surface, text, and border aliases (`--btn-primary-bg: var(--color-green-primary)`).
   - Tier 3 (Component): Component-scoped CSS variables and variant classes.
   - Typography must strictly use `var(--font-family-display)` (`'Clash Display'`, system-ui) and `var(--font-family-body)` (`'Satoshi'`, system-ui). No unapproved external fonts.

4. **CANVAS-FIRST RESEARCH & USER VISUAL CONFIRMATION**:
   - Research modern web APIs and a11y standards before modifying layouts.
   - Maintain visual hierarchy specifications in `docs/canvas-specs.md`.
   - Present visual previews to the User and verify with Lighthouse (100/100 A11y & SEO).

---

## Component Styling Instructions (Using Hallmark Skill Set)

When creating, refactoring, or styling any UI component in `components/`, all agents MUST follow this systematic Hallmark workflow:

### 1. The 4-Phase Component Styling Lifecycle
```
┌─────────────────┐      ┌─────────────────────────┐      ┌───────────────────────────┐      ┌─────────────────┐
│ 1. RESEARCH     │ ───> │ 2. CANVAS SPECIFICATION │ ───> │ 3. USER VISUAL CONFIRMATION│ ───> │ 4. IMPLEMENT    │
│ Token audit &   │      │ Spatial rhythm, 6-state │      │ Present visual layout &   │      │ Hallmark code & │
│ a11y standards  │      │ matrix in canvas-specs  │      │ contrast to user for OK   │      │ npm test audit  │
└─────────────────┘      └─────────────────────────┘      └───────────────────────────┘      └─────────────────┘
```

1. **Phase 1 (Research & Token Mapping)**:
   - Identify existing color and spacing tokens in `styles/tokens.css`.
   - Never write magic hex values, ad-hoc margins, or random border-radii.
2. **Phase 2 (Canvas & State Specification)**:
   - Define exact spatial rhythm (4px/8px grid) and layout bounds.
   - Specify styling for all **6 Interactive Component States**:
     * **Idle**: Pristine baseline elevation, crisp 1px border.
     * **Hover**: Smooth lift (`translateY(-2px)` to `-4px`), subtle specular sheen or glow.
     * **Focus-Visible**: High-contrast focus ring (`outline: 2px solid var(--color-green-primary); outline-offset: 3px;`).
     * **Active**: Tactile press down (`translateY(0)` or `scale(0.98)`).
     * **Disabled**: Reduced opacity (`opacity: 0.45`), `cursor: not-allowed`, no hover transformations.
     * **Loading**: Subtle animated pulse or spinner with `aria-busy="true"`.
3. **Phase 3 (User Visual Confirmation Gate)**:
   - **STOP**. Present the visual layout, color contrast ratios, and state transitions to the User before writing code.
   - Wait for explicit user confirmation.
4. **Phase 4 (Hallmark Implementation & Verification)**:
   - Implement modular, token-bound components using semantic classes.
   - Verify zero token violations with `npm run audit:hallmark`.

### 2. High-Fidelity Styling Standards
- **Specular Rim Light & Multi-Stop Sheens**: Use subtle inset highlights (`box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.2)`) on dark cards and buttons.
- **Glassmorphism**: Use `backdrop-filter: blur(20px)` to `blur(40px)` with semi-transparent background (`rgba(255, 255, 255, 0.08)` or `rgba(3, 3, 29, 0.85)`).
- **Tactile Shadows**: Avoid harsh solid shadows; use layered ambient blurs (`0 4px 20px rgba(0, 0, 0, 0.12)` or `0 4px 130px rgba(150, 163, 181, 0.15)`).
- **Micro-Interactions**: Implement dual-layer slide-up text on CTA buttons and smooth cubic-bezier transitions (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Reduced Motion**: Always enclose animations within `@media (prefers-reduced-motion: reduce)` fallbacks.

### 3. Contrast & Accessibility Requirements (WCAG 2.1/2.2 AA & AAA)
- Primary CTA: Neon Green on Midnight (**14.2:1 / AAA**).
- Body Text: Minimum **4.5:1** contrast ratio.
- Headings & Large Text: Minimum **3.0:1** contrast ratio.
- Interactive Tap Targets: Minimum **48x48px** for mobile touch accessibility.

---

## Fast Verification Commands
```bash
# Start local preview server
npm run dev

# Run Hallmark token adherence & zero-magic-numbers auditor
npm run audit:hallmark

# Run automated tests (Asset budget + a11y + SEO + Hallmark tokens)
npm test

# Check git status
git status
```

---

## ⚡ Lean Gemini/Antigravity Operating Rules

### Parent & Delegation Workflow
- **Parent Focus**: Keep the parent focused on task definition, acceptance criteria, research synthesis, user decisions, and exceptionally complex issues.
- **Worker Delegation**: Delegate bounded implementation, test fixes, documentation, exploration, and targeted review. Do not routinely reread worker code or repeat completed checks; consume concise evidence and resolve only conflicts or gaps.
- **Output Brevity**: The parent gives a minimal user-facing result without a reasoning narrative. Keep raw logs and reasoning private.

### Model & Effort Allocation
- **Clear & Narrow Work**: Use 3.8 Flash at low effort for clear, narrow work.
- **Broader Engineering Judgment**: Use a 3.8 Flash High implementer at medium effort when the change needs broader engineering judgment.
- **Code Review**: Use one exact reviewer at `Gemini 3.8 Flash` with `high` effort for meaningful code changes. Spawn reviewer work with a bounded prompt and no full history. If a project role overrides that reviewer model, use the default agent with explicit high settings; state the project-workflow conflict briefly rather than assuming global settings win.
- **Larger Tasks**: Use `/teamwork-preview` to perform larger tasks with subagents.

### Worker Discipline & Reporting Limits
- **Terminal & Scope**: Workers use the terminal, keep scope narrow, and do not recursively delegate or inherit the parent orchestration workflow.
- **Concise Reporting**: Workers report at most 250 words: status, files changed or inspected, checks run, blockers, and a private log path.

### Deterministic Checks & Repair Thresholds
- **Direct Execution**: Run deterministic build, lint, typecheck, and focused tests directly when they can establish an exit status. Do not use an AI worker solely to obtain a command result.
- **Repair Threshold**: A worker may repair a failed check twice; then return the failure, evidence, and a proposed decision. Escalate sooner for an architectural choice, unsafe action, or material ambiguity.

### Knowledge Graph (graphify) Rules
- **Graph First**: Use a repository graph first only when one already exists. Workers must verify scoped graph findings against source.
- **No Extraction**: Never run a graph extraction.
- **Single Update**: After source changes, update the graph once through the existing hook or a worker fallback, never both. Hooks must remain deterministic: no LLM calls or autonomous loops.

### Safety, Sandboxing & Approvals
- **Code & Inputs**: Preserve user edits, validate external input, keep secrets in environment or approved secret stores, and review the relevant diff before a push.
- **Permissions & Sandboxing**: Never bypass permissions, force actions, lower sandboxing, or disable protections.
- **Network Tools**: Treat networked tools as read-only by default.
- **Mandatory Approvals**: Require explicit approval before posting, publishing, pushing, merging, paid jobs, remote-agent dispatch, credential changes, or third-party mutations. When approval is unclear, leave a local draft or plan.
- **Precedence**: Respect higher-priority and project instructions. Ask only when missing information materially blocks safe completion.


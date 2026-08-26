---
name: lighthouse-a11y-audit
description: >-
  Authoritative Lighthouse Accessibility & Digital Controls Skill. Runs automated
  WCAG 2.1/2.2 AA audits across color contrast, ARIA landmarks, keyboard operability,
  heading hierarchies, and touch target geometry to ensure a 100/100 Lighthouse score.
---

# Lighthouse Skill Set for Digital Accessibility Controls

This skill equips Antigravity agents and developers with the methodologies, automated tools, and audit runbooks to achieve and maintain a **100/100 Lighthouse Accessibility Score**.

---

## 1. Core Lighthouse Accessibility Audit Categories

Lighthouse audits over 40 distinct accessibility rules grouped into 6 critical control vectors:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. Names & Labels     │ • button-name, link-name, image-alt, input-labels   │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ 2. Contrast & Color   │ • color-contrast (4.5:1 normal, 3:1 large text)     │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ 3. Navigation & Focus │ • bypass (skip-link), heading-order, focus-visible  │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ 4. ARIA Validation    │ • aria-roles, aria-valid-attr, aria-hidden, controls│
├───────────────────────┼─────────────────────────────────────────────────────┤
│ 5. Touch & Geometry   │ • tap-targets (>= 48x48px on mobile viewports)      │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ 6. Document & Tables  │ • html-has-lang, meta-viewport, landmark-one-main   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Lighthouse Audit Workflow (Phase 4 Verification)

Before committing any UI change, execute the automated Lighthouse a11y auditor:

```bash
# Run Lighthouse Accessibility validation
npm run audit:a11y
```

### Remediation Playbook:
1. **Failing `button-name`**: Add an explicit `aria-label` or visible text wrapper to icon-only buttons.
2. **Failing `color-contrast`**: Ensure text colors reference high-contrast tokens (`var(--color-sapphire-500)`, `var(--color-obsidian-950)`).
3. **Failing `heading-order`**: Ensure heading tags strictly descend without skipping (e.g. `H1` -> `H2` -> `H3`, never `H1` -> `H4`).
4. **Failing `tap-targets`**: Ensure mobile buttons have `min-height: 48px; min-width: 48px;` or appropriate padding.
5. **Failing `bypass`**: Ensure `<a href="#main-content" class="skip-link">` is the first element inside `<body>`.

---

## 3. Automated Validation Script

The skill provides an automated audit engine in `skills/lighthouse/scripts/audit-a11y.js` that parses HTML, verifies landmarks, inspects ARIA tags, and checks contrast tokens.

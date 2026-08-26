---
name: hallmark-ui-craft
description: >-
  Authoritative Hallmark Engineering & UI Craft Skill. Enforces Canvas-First design,
  3-Tier Global Token Inheritance, High-Fidelity Glossy Controls, WCAG 2.1/2.2 AA
  Digital Accessibility, SEO structured microdata, and the mandatory 4-Phase
  Research-First User Visual Confirmation workflow.
---

# Hallmark Engineering & UI Craft Skill

The **Hallmark Skillset** is the gold standard for frontend engineering: combining high-fidelity visual elegance (glossy specular controls, glassmorphic refraction, tactile depth) with uncompromising digital accessibility (WCAG 2.1 AA) and rock-solid architecture.

---

## 1. The 4-Phase Component Lifecycle (MANDATORY GATE)

Every agent MUST execute this four-phase sequence when creating or modifying UI components:

```
┌─────────────────┐      ┌─────────────────────────┐      ┌───────────────────────────┐      ┌─────────────────┐
│ 1. RESEARCH     │ ───> │ 2. CANVAS SPECIFICATION │ ───> │ 3. USER VISUAL CONFIRMATION│ ───> │ 4. IMPLEMENT    │
│ Best practices  │      │ Layout bounds, tokens,  │      │ Present visual layout to  │      │ Hallmark code,  │
│ & a11y standards│      │ & 6-state matrix        │      │ User & obtain approval    │      │ a11y tests & QA │
└─────────────────┘      └─────────────────────────┘      └───────────────────────────┘      └─────────────────┘
```

1. **Phase 1: Research First**:
   - Check `modern-web-guidance` and a11y patterns. Never write speculative or obsolete CSS.
2. **Phase 2: Canvas Specification**:
   - Define layout bounds (`max-w: 1350px`), spatial rhythm (`4px` grid), token bindings, and the **6 Component States** (*Idle, Hover, Focus-Visible, Active, Disabled, Loading*) in `docs/canvas-specs.md`.
3. **Phase 3: User Confirmation (CRITICAL APPROVAL GATE)**:
   - **STOP**. Present the visual layout mockup, color contrast ratios, and state transitions to the user.
   - **DO NOT write component code until the user confirms the design and visual appearance.**
4. **Phase 4: Hallmark Implementation**:
   - Build accessible, token-bound modular code in `components/` and verify with `npm test`.

---

## 2. 3-Tier Global Token Inheritance Model

Never use hardcoded hex codes, magic margins, or ad-hoc border radii. Always adhere to the 3-tier cascade:

* **Tier 1 (Primitives)**: Defined in `styles/tokens.css` (`--color-sapphire-500`, `--color-obsidian-950`, `--radius-pill`).
* **Tier 2 (Component Semantics)**: Functional mappings (`--btn-primary-bg: var(--color-sapphire-500)`).
* **Tier 3 (Variants & Modifiers)**: Extension classes that override semantic tokens (`.btn-secondary`, `.btn-glass`).

---

## 3. High-Fidelity Glossy Controls Design

* **Specular Top Rim Light**: `inset 0 1px 0 0 rgba(255, 255, 255, 0.6)`.
* **Multi-stop Sheen Gradient**: `linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0) 51%, rgba(255,255,255,0.05) 100%)`.
* **Tactile Bottom Shadow**: `0 4px 16px rgba(37, 99, 235, 0.35)`.
* **Executive Palette**: Precision Sapphire (`#2563EB` / `#1D4ED8`), Obsidian (`#0B0F19` / `#0F172A`), and Platinum (`#FFFFFF` / `#F8FAFC`). Avoid generic neon AI colors.

---

## 4. Digital Accessibility (a11y) Benchmark (WCAG 2.1/2.2 AA)

* **Landmarks**: `<header role="banner">`, `<nav aria-label="...">`, `<main id="main-content">`, `<footer role="contentinfo">`.
* **Skip Link**: `<a href="#main-content" class="skip-link">Skip to main content</a>`.
* **Contrast Ratios**: Minimum **4.5:1** for body text; **14.2:1 (AAA)** for primary CTA.
* **Focus Rings**: `:focus-visible` with `outline: 2px solid var(--focus-ring-color); outline-offset: 3px;`.
* **Touch Targets**: Minimum **48x48px** for all interactive mobile controls.
* **Motion**: Enforce `@media (prefers-reduced-motion: reduce)` fallbacks on all transitions.

---

## 5. Automated Validation Scripts

```bash
# Validate token adherence across all stylesheets and components
node skills/hallmark/scripts/validate-tokens.js

# Run full performance and bundle size audit
npm test
```

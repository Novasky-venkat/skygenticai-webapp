# SkyGentic AI - Antigravity Agent Guidelines & Engineering Manual

Welcome to the **SkyGentic AI WebApp** codebase. This repository contains the extracted **AiChat Design System**, production UI components, and web application architecture for Agentic CX.

All Antigravity agents working in this repository MUST follow the instructions, token rules, and engineering standards outlined below.

---

## 1. Canvas-First Design & Hallmark Skillset (MANDATORY)

1. **Canvas-First Workflow**:
   - Before writing or refactoring any component code, consult or create visual specifications in `docs/canvas-specs.md`.
   - Explicitly define 6 canvas states for every interactive element: **Idle**, **Hover**, **Focus-Visible**, **Active**, **Disabled**, and **Loading**.
   - Map responsive transitions across Mobile (`<480px`), Tablet (`768px-991px`), and Desktop (`>992px`).

2. **Hallmark Component Craftsmanship**:
   - **Zero Magic Numbers**: Every color, radius, margin, and font size must bind directly to tokens in `styles/tokens.css`.
   - **Global Token Inheritance**: Follow the 3-tier hierarchy:
     * *Tier 1 (Primitives)*: `--color-green-primary`, `--color-midnight-06`, etc.
     * *Tier 2 (Semantics)*: `--btn-primary-bg: var(--color-green-primary);`
     * *Tier 3 (Variants)*: Modifier classes extending component variables.
   - **High-Fidelity Aesthetics**: Pixel-perfect typography using `Clash Display` for display titles and `Satoshi`/`Inter` for UI body copy.

---

## 2. Digital Accessibility (a11y) Standards (WCAG 2.1/2.2 AA)

1. **Semantic DOM & Landmarks**:
   - Every page MUST feature a single `<main id="main-content">` landmark, `<header role="banner">`, `<nav aria-label="...">`, and `<footer role="contentinfo">`.
   - Include `<a href="#main-content" class="skip-link">Skip to content</a>` as the first focusable element.
2. **Color Contrast**:
   - Enforce $\ge 4.5:1$ contrast for normal text and $\ge 3:1$ for large text/buttons.
   - Primary button: Neon Green (`#0DEF93`) on Midnight (`#03031D`) provides **14.2:1** (AAA compliant).
3. **Keyboard Navigation & Focus Rings**:
   - Never suppress outline on focus without providing an accessible `:focus-visible` ring (`outline: 2px solid var(--color-green-primary); outline-offset: 3px;`).
   - Mobile tap targets must measure $\ge 48	imes 48	ext{px}$.
4. **Motion Accessibility**:
   - Always wrap micro-interactions and transitions inside `@media (prefers-reduced-motion: reduce)` fallbacks.

---

## 3. SEO Optimization & Cloud Architecture

1. **Static Rendering (SSG)**:
   - Deliver pre-rendered, crawlable static HTML for instant indexing and sub-50ms TTFB on Cloudflare Pages, AWS S3/CloudFront, or Vercel.
2. **Structured Metadata (JSON-LD)**:
   - Provide Schema.org microdata (`SoftwareApplication`, `Organization`, `FAQPage`).
   - Ensure complete OpenGraph, Twitter Cards, and canonical URL headers.
3. **Core Web Vitals Budget**:
   - **LCP** $\le 1.2	ext{s}$ (Preload critical fonts, `fetchpriority="high"` on hero visuals).
   - **INP** $\le 50	ext{ms}$ (Zero main-thread blocking JS).
   - **CLS** $\le 0.01$ (Explicit aspect ratios on all visual containers).

---

## 4. Security & Delivery

- Never hardcode API keys, secrets, or internal URLs.
- Use conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`, `perf:`.

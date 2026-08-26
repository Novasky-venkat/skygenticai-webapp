# SkyGentic AI - Antigravity Agent Guidelines & Design System Rules

Welcome to the **SkyGentic AI WebApp** codebase. This repository contains the extracted **AiChat Design System**, production UI components, and web application architecture for Agentic CX.

All Antigravity agents working in this repository MUST follow the instructions, token rules, and coding standards outlined below.

---

## 1. Design System & Styling Rules (Strict Enforcement)

1. **Token Adherence**:
   - ALWAYS use variables defined in `styles/tokens.css` or Tailwind config (`tailwind.config.js`).
   - DO NOT introduce ad-hoc hex codes, magic numbers, or random border-radii.
   - Primary CTA: Neon Green (`var(--color-green-primary)` / `#0DEF93`).
   - Secondary / Highlights: Lime (`var(--color-lime-accent)` / `#B8FF7A`) and Purple (`var(--color-purple-04)` / `#9741FE`).
   - Dark Surfaces: Midnight 900 (`var(--color-midnight-06)` / `#03031D`) and Void (`var(--color-midnight-07)` / `#02020F`).

2. **Typography Standards**:
   - Headings & Display: `Clash Display` with weights 500, 600, 700.
   - Body & Interface Text: `Satoshi` and `Inter`.
   - Code & Monospace: `JetBrains Mono`.
   - Maintain fluid typography scales and line-heights defined in `styles/typography.css`.

3. **Button Anatomy & Micro-interactions**:
   - Capsule shape (`border-radius: var(--radius-pill)` / `3rem`).
   - Dual-layer text slide animation on `:hover` (`.btn-text-wrapper` > `.btn-text-slide`).
   - Circular arrow bubble (`.btn-icon-bubble`) angled at 45 degrees.

4. **Surface Treatment & Glassmorphism**:
   - Dark cards: `var(--bg-glass-card)` with `backdrop-filter: blur(40px)` and hairline border `var(--border-glass-light)`.
   - Light cards: `var(--color-surface-white)` with `border: 1px solid var(--color-surface-border)` and `box-shadow: var(--shadow-sm)`.
   - Card radius is uniformly `20px` (`var(--radius-xl)`).

---

## 2. Code Quality & Architectural Standards

- **Component Modularity**: All components reside in `components/` as single-responsibility, reusable modules.
- **Immutability**: Prefer immutable updates over in-place mutation.
- **Accessibility (a11y)**:
  - Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Meaningful `aria-label`s on interactive icons and buttons without visible text.
  - Keyboard accessible navigation and interactive states.
- **Input Validation**: Validate all user input and API parameters at system boundaries.
- **Zero Secrets**: Never hardcode API keys, tokens, or environment credentials.

---

## 3. Delivery & Git Conventions

- Use conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`.
- Test locally before committing changes using `npm run dev` or local preview.
- Ensure all new pages or components are documented in `DESIGN_SYSTEM.md`.

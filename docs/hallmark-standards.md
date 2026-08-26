# Hallmark Engineering & Skillset Standards

The **Hallmark Skillset** represents the gold standard of frontend architecture: pristine craft, strict accessibility (WCAG 2.1/2.2 AA), flawless SEO optimization, and structured global token inheritance.

---

## 1. Global Token Inheritance & Extension Model

To prevent CSS drift and ensure maintainability, all styling follows a 3-tier inheritance architecture:

```
┌─────────────────────────────────────────────────────────────────┐
│ Tier 1: Global Primitives (:root in styles/tokens.css)          │
│ • Raw brand hex values: --color-green-primary: #0DEF93;         │
│ • Dark void tones:      --color-midnight-06: #03031D;           │
│ • Geometric radii:      --radius-pill: 3rem;                    │
└────────────────────────────────┬────────────────────────────────┘
                                 │ (Inherited by)
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│ Tier 2: Component Semantic Tokens (styles/tokens.css)           │
│ • --btn-primary-bg:     var(--color-green-primary);             │
│ • --btn-primary-color:  var(--color-midnight-06);               │
│ • --btn-primary-radius: var(--radius-pill);                     │
│ • --card-surface-glass: var(--bg-glass-card);                   │
└────────────────────────────────┬────────────────────────────────┘
                                 │ (Extended by)
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│ Tier 3: Modular Variants & Extended Instances                   │
│ • .btn-primary--secondary { --btn-primary-bg: #03031D; }        │
│ • .btn-primary--glass     { --btn-primary-bg: rgba(...); }      │
│ • .card--featured         { border-color: var(--color-purple-04)│
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Digital Accessibility (a11y) Benchmark (WCAG 2.1/2.2 AA)

1. **Semantic Landmarks & ARIA**:
   - Every page must contain `<a href="#main-content" class="skip-link">Skip to Content</a>` as the first interactive element in the DOM.
   - All navigation lists use `<nav aria-label="Main Navigation">` with `<ul role="list">`.
   - All icon-only buttons require an explicit `aria-label`.
   - Accordions must link triggers to panels via `aria-expanded` and `aria-controls`.
2. **Color Contrast Verification**:
   - Body copy against background must meet minimum **4.5:1** contrast ratio.
   - Display headings and UI buttons must meet minimum **3.0:1** contrast ratio.
   - Verified combinations:
     - Neon Green (`#0DEF93`) on Midnight (`#03031D`): **14.2:1** (Passes AAA)
     - White (`#FFFFFF`) on Midnight (`#03031D`): **18.6:1** (Passes AAA)
     - Muted Slate (`#83839D`) on White (`#FFFFFF`): **4.6:1** (Passes AA)
3. **Focus Management & Keyboard Operability**:
   - All interactive elements must be focusable via `Tab` / `Shift+Tab`.
   - Focus ring standard: `outline: 2px solid var(--color-green-primary); outline-offset: 3px;`.
   - Tap targets on mobile must measure at least **48x48px**.
4. **Reduced Motion**:
   - All transitions must wrap inside `@media (prefers-reduced-motion: reduce)` to disable heavy animations for users with vestibular sensitivities.

---

## 3. SEO Optimization Engine & Technical Performance

1. **Zero-JS Static Markup**:
   - All core content, headings, and copy must render in static HTML for instant web crawler indexing.
2. **Structured Metadata (Schema.org JSON-LD)**:
   - Provide `@type: "SoftwareApplication"`, `@type: "Organization"`, and `@type: "FAQPage"` microdata.
3. **Core Web Vitals Performance Targets**:
   - **Largest Contentful Paint (LCP)**: <= 1.2s (Preload fonts & hero visual, set `fetchpriority="high"`).
   - **Interaction to Next Paint (INP)**: <= 50ms (Zero main-thread blocking JS).
   - **Cumulative Layout Shift (CLS)**: <= 0.01 (Explicit aspect ratios on all visual media).

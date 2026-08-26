# Canvas-First Design Specifications (Canvas-First Architecture)

This document establishes the **Canvas-First** design methodology for the SkyGentic AI / AiChat Design System. Every component and page layout MUST be conceptualized, wireframed, and specified on canvas with exact token bindings before writing implementation code.

---

## 1. Canvas Layout & Grid System

### Standard Viewport Canvas Bounds
| Viewport Profile | Width (px) | Max Container Width | Gutter / Padding | Columns |
| :--- | :--- | :--- | :--- | :--- |
| **Desktop Ultra / 4K** | >= 1920px | `1350px` (`var(--container-max-width)`) | `48px` | 12 Columns |
| **Desktop Standard** | `1280px - 1440px` | `1350px` | `32px` | 12 Columns |
| **Desktop Narrow** | `992px - 1279px` | `1130px` (`var(--container-narrow-width)`) | `24px` | 12 Columns |
| **Tablet** | `768px - 991px` | `100%` | `24px` | 8 Columns |
| **Mobile Landscape** | `480px - 767px` | `100%` | `16px` | 4 Columns |
| **Mobile Portrait** | `< 479px` | `100%` | `16px` | 4 Columns |

### Vertical Rhythm & Spacing Grid
* Base spatial unit: **`4px`** (`--space-1`)
* Section vertical padding: `80px` (`var(--space-20)`) on desktop, `48px` (`var(--space-12)`) on mobile.
* Inter-component spacing: `24px` (`var(--space-6)`) or `32px` (`var(--space-8)`).
* Card internal padding: `32px` (`var(--space-8)`) desktop, `20px` (`var(--space-5)`) mobile.

---

## 2. Component Canvas State Matrices

Every interactive component must define 6 explicit canvas states:

### Button Component Canvas States
```
State: Idle
┌──────────────────────────────────────────────────────────┐
│  [ Book a demo ]   (• ↗)                                 │
│  bg: #0DEF93 | text: #03031D | radius: 3rem (Pill)       │
└──────────────────────────────────────────────────────────┘

State: Hover
┌──────────────────────────────────────────────────────────┐
│  [ Book a demo ▲ ] (• ↗ ↗)  (Slide-up text + glow)       │
│  bg: #09B26E | transform: translateY(-2px) | shadow: glow│
└──────────────────────────────────────────────────────────┘

State: Focus-Visible (Keyboard Navigation)
┌──────────────────────────────────────────────────────────┐
│ ║ [ Book a demo ] (• ↗) ║ (High-contrast focus ring)     │
│  outline: 2px solid #0DEF93 | outline-offset: 3px        │
└──────────────────────────────────────────────────────────┘

State: Active / Pressed
┌──────────────────────────────────────────────────────────┐
│  [ Book a demo ]   (• ↗)                                 │
│  transform: translateY(0px) scale(0.98)                  │
└──────────────────────────────────────────────────────────┘

State: Disabled
┌──────────────────────────────────────────────────────────┐
│  [ Book a demo ]   (• ↗)                                 │
│  opacity: 0.4 | cursor: not-allowed | pointer-events:none│
└──────────────────────────────────────────────────────────┘
```

---

## 3. Responsive Transformation Mapping

1. **Floating Navigation**:
   - Desktop: Pill container with brand logo, 5-link menu, and dual action buttons.
   - Mobile (`< 992px`): Collapses into frosted mobile app drawer with accessible hamburger button (`aria-expanded="false"`, `aria-label="Toggle navigation menu"`).
2. **Hero Section**:
   - Desktop: 2-column split (Left: Eyebrow badge, H1, lead paragraph, CTA buttons; Right: Bot visual with ambient mesh glow).
   - Mobile: 1-column stacked flow with centered alignment and `100vw` fluid illustration.
3. **Testimonial Accordion**:
   - Desktop: Interactive flex ribbon (`23%` idle, `35%` on `:hover`/focus).
   - Mobile: Smooth horizontal swipeable carousel with snap points (`scroll-snap-type: x mandatory`).

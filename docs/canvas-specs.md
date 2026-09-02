# SkyGentic AI Canvas & Component Architecture Specifications

> [!IMPORTANT]
> **Strict Hallmark UI Craft Directive**:
> 1. **Zero Emojis & Zero AI Icons**: Prohibit emojis and cheesy AI badges. Use clean Hallmark SVG vector line controls.
> 2. **Strict Typography Inheritance**: Exclusively bind to `Clash Display` (Display) and `Satoshi` (Body).
> 3. **3-Tier Global Tokens**: All color, radius, and spacing values must inherit from `styles/tokens.css`.

## Hero Autonomous Workforce Animation

The active hero visual is a CSS-driven orchestration scene in `components/hero.jsx` and mirrored in `index.html`.

Change rules:
- Keep the left hero stack unchanged: eyebrow, headline, supporting copy, CTA.
- Keep the right-side visualization between 40% and 45% of the desktop hero width.
- Do not wrap the visualization in a single large rounded dashboard container.
- Use layered glass panels, organic offsets, transient connections, and soft blue ambient lighting.
- Keep `.section-hero` clear of the fixed navbar with `--hero-nav-clearance`.
- Keep `.section-hero` full-screen with `min-height: 100svh`, `overflow: hidden`, and responsive stacking below `991px`.
- Treat the animation as decorative for assistive tech with `aria-hidden="true"`; the accessible hero message remains in the left copy and CTA.
- Use `npm test` after any hero animation change to preserve perf budget, accessibility, SEO, and Hallmark token checks.

Canvas specification:
- Desktop: two-column grid, copy at `0.98fr`, animation at `0.82fr`, with `var(--space-12)` between.
- Visualization bounds: `min(100%, 600px)` by `min(var(--hero-visual-height), calc(100svh - var(--hero-nav-clearance) - var(--space-10)))`.
- Organic agent layout: five cards at varied widths, offsets, and depths around the orchestration node.
- State matrix: idle panels use hairline borders; active motion uses opacity/transform only; focus states remain on CTAs; loading is expressed by the center typing dots; completed state uses success token markers; reduced motion resolves to the completed onboarding state.

## Client Logo Marquee

The marquee in `index.html` uses two identical, adjacent logo groups. Its transform travels exactly one group width (`-50%`), so the reset is visually continuous.

- Bounds: the viewport is masked at both edges; spacing between logo items and groups uses `var(--space-16)`.
- Idle: continuous linear movement at `var(--motion-marquee-duration)`.
- Hover: movement pauses so a logo can be inspected.
- Reduced motion: the first logo group remains visible without animation.


# Hallmark Component Specification: Bento Feature Card (AiChat Match)

A modular, reusable component specification designed according to **Hallmark UI Craft** and the visual architecture of **AiChat.com** (`media_1787709924445.png`).

---

## 1. Anatomy of the Modular `BentoCard` Component

```
┌────────────────────────────────────────────────────────┐
│  ╭────╮                                                │
│  │ 💡 │  <--- Circular Mint-Border Icon Badge (52px)   │
│  ╰────╯       (White BG + #0DEF93 Border + Dark Icon)  │
│                                                        │
│  Agentic AI   <--- Card Title (Clashdisplay 24px, 500) │
│                                                        │
│  Redefine engagement with human-like AI                │
│  chatbots that provide natural responses,              │
│  tailored recommendations, with a touch                │
│  of personality to elevate customer                    │
│  connections.  <--- Body Copy (Satoshi 15px, #3D4050)  │
│                                                        │
│  Read More  (↗) <--- Micro Action Link                 │
│                      (Black text + Black Arrow Bubble) │
└────────────────────────────────────────────────────────┘
```

---

## 2. Component Properties & Variants

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `icon` | `ReactNode` / `SVG` | Required | Rendered inside the 52px circular mint-ring container. |
| `title` | `string` | Required | 24px *Clashdisplay* Medium title. |
| `description` | `string` | Required | 15px *Satoshi* Regular body copy (`#3D4050`). |
| `href` | `string` | `'#demo'` | Destination anchor link for "Read More". |
| `offsetClass` | `string` | `''` | Controls staggered column vertical offset (`bento-col-1`, `bento-col-2`, `bento-col-3`). |

---

## 3. Staggered 3-Column Bento Grid Layout

```
  [Column 1: Left]          [Column 2: Middle]             [Column 3: Right]
  (Offset: +120px Top)      (Offset: 0px Top)              (Offset: -40px Top)
┌──────────────────────┐  ┌──────────────────────┐       ┌──────────────────────┐
│                      │  │                      │       │                      │
│      (Space)         │  │ 🎙️  Voice AI         │       │ 📖  Agent CoPilot    │
│                      │  │                      │       │                      │
├──────────────────────┤  └──────────────────────┘       └──────────────────────┘
│                      │  ┌──────────────────────┐       ┌──────────────────────┐
│ 🤖  Agentic AI       │  │                      │       │                      │
│                      │  │ 👤  AI Agent         │       │ 💲  Conversational   │
│                      │  │                      │       │     Sales & Mktg     │
└──────────────────────┘  └──────────────────────┘       └──────────────────────┘
```

---

## 4. 6-State Interactive Micro-Interactions

1. **Idle State**:
   - Background: Pure White (`#FFFFFF`).
   - Border: `1px solid rgba(228, 235, 243, 0.8)`.
   - Radius: `28px`.
   - Shadow: `0 10px 40px rgba(0, 0, 0, 0.03)`.
2. **Hover State (`:hover`)**:
   - `transform: translateY(-6px);`
   - Shadow: `0 20px 50px rgba(151, 65, 254, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04);`
   - Border Color: `rgba(13, 239, 147, 0.4);`
   - "Read More" Black Arrow Bubble: `transform: rotate(45deg) translateX(2px);`
3. **Focus-Visible State (`:focus-within`)**:
   - `outline: 2px solid var(--color-green-primary); outline-offset: 4px;`
4. **Active State (`:active`)**:
   - `transform: scale(0.99) translateY(-2px);`

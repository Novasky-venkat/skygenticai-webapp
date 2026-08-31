# SkyGentic AI Canvas & Component Architecture Specifications

> [!IMPORTANT]
> **Strict Hallmark UI Craft Directive**:
> 1. **Zero Emojis & Zero AI Icons**: Prohibit emojis and cheesy AI badges. Use clean Hallmark SVG vector line controls.
> 2. **Strict Typography Inheritance**: Exclusively bind to `Clash Display` (Display) and `Satoshi` (Body).
> 3. **3-Tier Global Tokens**: All color, radius, and spacing values must inherit from `styles/tokens.css`.

## Hero Background Asset Architecture

The active hero background image is stored at `assets/hero/agentic-hero-bg.png`.

Change rules:
- Store hero-specific raster artwork under `assets/hero/` with a semantic, lowercase hyphenated filename.
- Reference hero artwork only through the `--bg-hero-agentic` token in `styles/tokens.css`.
- Keep sizing, clipping, responsive crop, and overlay rules in `.section-hero` inside `styles/design-system.css`.
- Do not place decorative hero artwork in markup. The hero image remains a CSS background so the fixed header can float over it and the section can clip it.
- Keep `.section-hero` full-screen with `min-height: 100svh`, `overflow: hidden`, and `background-position` tuned per breakpoint.
- Use `npm test` after any hero image or crop change to preserve perf budget, accessibility, SEO, and Hallmark token checks.

Current crop:
- Desktop: `background-size: clamp(980px, 70vw, 1480px) auto`; `background-position: right center`.
- Tablet and mobile: `background-size: auto 100%`; `background-position: calc(100% + 740px) center`.


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

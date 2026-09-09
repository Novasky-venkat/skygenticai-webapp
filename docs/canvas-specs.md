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

## Pre-Footer CTA

The pre-footer CTA in `index.html` replaces the previous FAQ section and sits immediately before the approved footer.

- Bounds: centered `.container-focus`, matching the hero copy width with a maximum heading measure of `635px`.
- Surface: unchanged page background from `--color-background`; no card, panel, boxed layout, overlay, or full-section gradient.
- Ambient lighting: a single non-animated blue-white radial glow is centered behind the CTA content, heavily blurred, clipped inside the section, and kept separate from the footer.
- Content: `h2` heading, supporting paragraph, then the reused `.btn-primary` CTA with the existing slide-text and arrow-bubble structure.
- Desktop and tablet: centered copy stack with restrained spacing from the preceding section and footer.
- Mobile: natural vertical stack, preserved typography hierarchy, no CTA label wrapping, and stable 48px minimum button target.

State matrix:
- Idle: static page surface, readable centered heading and paragraph, reused primary CTA baseline.
- Hover: CTA inherits the production `.btn-primary` hover lift, shadow, icon rotation, and text slide.
- Focus-visible: CTA inherits the global focus ring.
- Active: CTA inherits the stable primary button press geometry.
- Disabled: not used; CTA remains a standard navigation link.
- Loading: not used; section is static by specification.

## Website Footer

The footer in `index.html`, `components/footer.jsx`, and `components/shared.jsx` follows the approved SkyGentic AI Footer Specification v1.0.

- Bounds: the standard `.container` governs max-width and horizontal padding.
- Layout: upper grid uses `0.45fr 0.55fr`, with the left brand area and right three-column navigation area aligned to the top.
- Surface: solid dark footer background from `--color-footer-background`; no gradients, artwork, particles, or watermark typography.
- Divider: exactly one container-width divider separates the upper and lower sections.
- Brand: reuses the header wordmark image via the existing `.nav-brand` and `.nav-wordmark` pattern; a token-bound isolation surface preserves logo contrast on the dark footer without changing the image asset.
- Navigation: exactly three columns in this order: Services, Quick Links, Follow Us.
- Mobile order: logo, description, status, Services, Quick Links, Follow Us, divider, copyright, legal links.

State matrix:
- Idle: static dark surface, footer links inherit `--color-footer-text`, status dot uses `--color-footer-status`.
- Hover: footer links reuse the capsule radius, token padding, transform, and transition timing used by the site interaction system.
- Focus-visible: links inherit the global focus ring.
- Active: links retain the same stable capsule geometry to avoid layout shifts.
- Disabled: not used; footer links remain standard anchors.
- Loading: not used; footer is static by specification.

## Sign In Page

The sign-in page in `signin.html` follows a Split Studio auth canvas that reuses the landing page background language, wordmark asset, typography, gradients, input rhythm, button motion, card surfaces, and an adapted current-homepage `.hero-agentic-visual` layer from `styles/design-system.css` and `scripts/hero-animation.js`.

Canvas specification:
- Desktop: full-viewport, no-scroll grid with authentication at 42% and brand workflow at 58%.
- Tablet: full-viewport grid with authentication at 40% and brand workflow at 60%.
- Mobile: single-column stack with the form first and the brand workflow below at reduced workflow depth.
- Surface: `--color-background`, `--bg-gradient-hero`, `--bg-hero-composition`, `--bg-hero-scrim`, and existing blue ambient depth only.
- Header: a reused secondary `btn-glass` Back to Home control sits in the natural right-panel header position and navigates to `index.html`.
- Auth column: logo, Welcome Back heading, description, email field, password field, remember/forgot row, primary sign-in, subtle divider, Google/Microsoft sign-in, create-account link, and trust indicators only.
- Brand column: headline, supporting copy, subtle curve artwork, five workflow cards, and the bottom signature. It explains what happens after sign-in rather than decorating the page.
- Right-panel balance: headline and copy introduce the experience; the workflow cards own the visual mass; the background, waves, curve, and nodes remain secondary.

State matrix:
- Idle: card/input surfaces use `--color-card`, `--color-border`, `--radius-md`/`--radius-lg`, and existing typography tokens.
- Hover: buttons and social sign-in controls lift by the existing 2px CTA pattern with `--transition-fast`.
- Focus-visible: interactive controls inherit `--focus-ring-color` and `--focus-ring-offset`.
- Active: buttons and icon controls return to stable pressed geometry without scale.
- Disabled: submit and social controls reduce opacity and remove transforms.
- Loading: submit uses `aria-busy="true"`, disabled state, inline spinner, and stable button dimensions.
- Error: fields set `aria-invalid="true"`, switch helper text to an instruction, and use the existing amber signal token.
- Success: field helpers and status message use the existing teal signal token without celebratory motion.

Motion specification:
- Page reveal uses a single fade-up sequence.
- Background and ambient glow use the existing hero gradient language with slow token-derived durations.
- The adapted current homepage hero animation runs via `scripts/hero-animation.js`.
- The sign-in wrapper adds only slow token-derived float and ambient motion around that existing animation.
- Pointer movement is capped by `--space-2`.
- `prefers-reduced-motion` disables spatial motion and keeps state changes visible.

## About Page Narrative

The about page in `about.html` follows the supplied reference structure while using SkyGentic tokens and typography.

- Bounds: standard `.container`, with the intro constrained to a centered readable measure and the mission/CTA sections using two-column desktop grids.
- Layout order: centered page title and lead, mission split row, three-cell metric strip, guiding principles card row, then a divider-led next-step CTA.
- Surface: light home-page canvas using `--bg-hero-composition` and `--bg-gradient-hero`; metric and principle cards use `--color-card`, `--color-border`, and `--shadow-ambient-card`.
- Typography: all display text uses `var(--font-family-display)`; body, labels, metrics captions, and CTA use `var(--font-family-body)`.
- Mobile: hero copy becomes left-aligned, mission and CTA grids collapse to one column, metric cells stack vertically, and CTA remains a 48px minimum target.

State matrix:
- Idle: light SkyGentic canvas with readable dark text and blue/teal data emphasis.
- Hover: about CTA lifts with transform only and uses the standard primary CTA hover treatment.
- Focus-visible: about CTA and nav controls inherit the global focus ring.
- Active: about CTA returns to baseline transform.
- Disabled: about CTA supports `aria-disabled="true"` with reduced opacity and no pointer interaction.
- Loading: about CTA supports `data-state="loading"` with reduced opacity and progress cursor.

## Schedule Demo Page

The schedule demo page in `schedule-demo.html` follows the approved About-page intro format while embedding the Reclaim scheduling workflow.

- Bounds: the hero copy is centered within a `980px` maximum measure; the Reclaim scheduler is constrained to `880px` inside the standard `.container`.
- Layout order: unchanged site navbar, centered `Schedule Demo` title and lead, then the embedded scheduling calendar.
- Surface: light SkyGentic canvas using `--bg-hero-composition` and `--bg-gradient-hero`; the embed frame uses `--color-card`, `--color-border`, and `--shadow-ambient-card`.
- Typography: the page title uses `var(--font-family-display)` at `3rem`; the lead uses `var(--font-family-body)`.
- Mobile: the hero becomes left-aligned and the scheduler keeps a stable minimum height while fitting the viewport width.

State matrix:
- Idle: the embed card uses a constant 1px token-bound border and stable calendar bounds.
- Hover: inherited external scheduler behavior only; the local shell does not shift geometry.
- Focus-visible: global page navigation remains focus-ring controlled; scheduler focus is owned by the Reclaim embed.
- Active: inherited external scheduler behavior only.
- Disabled: inherited external scheduler behavior only.
- Loading: the shell reserves vertical space while the external scheduler initializes.
- Error: inherited external scheduler behavior only.
- Success: inherited external scheduler behavior only.


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

## Sign in — approved image master, 2026-09-08

The user explicitly approved the attached 1536 × 1024 image; no new design approval is required. Preserve its composition over Hallmark's discretionary design suggestions, with the current locked override that the right panel must not include an orb, sphere, planet, crystal, particle field, sparkle layer, floating geometry, or any large glowing object. Desktop split: x=606 (39.45%), left form x=89–540, logo y=44, welcome y=178. Right story starts near x=678/y=194, with the five workflow cards as the visual hero, following a subtle clockwise curve through Describe the Goal, SkyGentic Understands, Plans the Workflow, Deploys the Automation, and Real Impact in your Business. Artwork coordinates use a 930 × 1024 SVG viewBox; UI spacing uses existing spacing tokens. The sole brand palette and gradients remain styles/tokens.css; Clash Display/Satoshi and shared primary button/slide behavior are inherited. No token additions.

States: idle existing card surface/border; hover existing button lift and slide; focus existing 2px focus token and offset; active scale(.98); disabled opacity .45/no transform; loading aria-busy/spinner; validation errors announced through existing field helpers and status region. Reduced-motion disables decorative movement. Five cards remain an ordered list, with decorative artwork hidden from assistive technology. Mobile puts the form first and retains the proportional curved composition below it.

Research: WCAG 2.2 https://www.w3.org/TR/WCAG22/ and MDN prefers-reduced-motion https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion. The existing form has no authentication endpoint; submission/SSO must disclose that state instead of claiming email verification was sent.

### Verification and remaining differences

- Direct Lighthouse on `/signin.html`: accessibility 100/100, SEO 100/100. Repository Hallmark, accessibility and SEO commands also pass (the latter two inspect the homepage, so they are not substitutes for the direct run).
- Browser checks: no horizontal document overflow at 320, 375, 414, 768, 1024, 1536 pixels; all five cards retained; no broken page images. Empty-field validation, password visibility, and loading/unavailable-auth feedback checked.
- Side-by-side review: `/tmp/signin-comparison.png`; desktop capture `/tmp/signin-desktop.png`. Form geometry follows the master; the current right-panel pass keeps the workflow cards dominant and the ambient waves/curve secondary. This is not certified as an identical artwork reproduction without the approved screenshot present in the workspace.
- `npm test` passes the aggregate asset budget: total CSS is approximately 79.93 KB against the 80 KB budget, with Brotli CSS approximately 12.55 KB against the 25 KB budget.
- Authentication/SSO endpoints are absent in the existing implementation. The page does not claim a successful authentication or a sent verification email.

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

### Compact internal-page footer — 2026-09-10

- Scope: Resources, Services, About Us, Get In Touch, Schedule Demo, Privacy, and Terms reuse the identical existing static footer markup and shared `footer-compact` spacing variant. Preserve page-specific `aria-current` attributes. Sign In remains footer-free; homepage footer and pre-footer CTA remain unchanged.
- User-requested spacing refinement preserves all text, links, logo dimensions, typography, colors, column widths, and responsive column order.
- Existing token mapping: top padding 96 → 48px; bottom 40 → 24px; logo/description gap 32 → 16px; status gap 24 → 12px; heading/link gap 20 → 8px; link-list gap 8 → 4px; upper section bottom padding 64 → 32px; copyright top padding 32 → 16px.
- Desktop link vertical padding becomes 4px and minimum height 32px. At 991px and below or on coarse-pointer devices, links retain 48px targets; at 640px and below, top padding becomes 32px. Keep all horizontal dimensions and existing responsive layouts.
- Idle, hover, focus-visible, and active colors, outlines, transforms, and transitions remain inherited. Disabled/loading remain inapplicable to these static navigation links. Existing reduced-motion behavior remains inherited.
- Contrast is unchanged because foreground/background tokens are unchanged. Preserve mobile touch targets per repository guidance; desktop minimum exceeds [WCAG 2.2 target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum).

### Homepage compact ending — 2026-09-10

- Follow-up authorization extends the existing `footer-compact` variant to the homepage. Preserve the CTA above it, all copy, logo dimensions, typography, colors, links, and layout. Sign In remains footer-free.
- On desktop screens at most 800px tall, use `--space-8` for CTA top and bottom padding so the CTA and compact footer fit together within one viewport. Taller desktop screens retain the original CTA spacing. Mobile remains content-driven with existing touch targets.
- All footer and CTA interaction states and contrast tokens remain unchanged.

### Footer alignment and link refinement — 2026-09-10

- Desktop navigation retains its existing grid area and uses three intrinsic-width columns with equal gaps and `--space-8` inset on the left. Remove the trailing capsule-padding allowance from column sizing so the final heading aligns to the container edge.
- Privacy Policy and Terms of Service are the only legal links. Compensate for trailing `--space-3` capsule padding at widths above 640px so Terms of Service text aligns to the right container edge.
- Replace YouTube with Instagram in the same position; Instagram is an inert anchor with `aria-disabled="true"` and no URL, as requested. Keep LinkedIn, GitHub, and X in order.
- Preserve footer height and all vertical tokens. Reserve the former legal area's 120px below its measured 804px wrapping threshold, and 144px in the existing mobile stack. Keep retained links at the top of that area. Preserve existing stacking breakpoints, 48px mobile targets, fonts, colors, logo size, and interactive styling.

### Shared navigation/legal centerline — 2026-09-10

- Approved follow-up: shift Privacy Policy left as well, allowing subtle top-column movement. At desktop widths, Services moves `--space-6` (24px) right; Quick Links moves approximately 34px right. Branding, Follow Us, Terms of Service, divider, height, and all vertical spacing remain fixed.
- Quick Links uses the navigation area's horizontal midpoint plus `--space-12`. Privacy Policy uses the equivalent point in the full-width bottom row: 72.5% plus 27.5% of the existing `--space-16` gutter plus `--space-12`. This follows the existing 45:55 upper grid rather than a viewport-specific offset.
- Apply only at the existing 992px desktop breakpoint. Preserve intrinsic column widths, all tablet/mobile rules, link interaction states, typography, and color tokens.

### Tighter desktop footer grouping — 2026-09-10

- Shift Services another 40px right (`--space-6` → `--space-16` offset), and Quick Links another 16px right (`--space-12` → `--space-16` center offset). This reduces the two column gaps by 24px and 16px while retaining the right container boundary.
- Move Privacy Policy with Quick Links to preserve their shared centerline. Follow Us, Terms of Service, branding, vertical dimensions, and tablet/mobile layouts remain unchanged.

### Footer breathing-room refinement — 2026-09-10

- All existing static footers retain their shared `footer-compact` class. Increase their top padding by `--space-2` (8px) and bottom padding by `--space-2` (8px), keeping every child layout, font, color, link, and responsive breakpoint unchanged.
- On mobile, retain the compact 32px top baseline and add the same `--space-2` increment; the resulting 16px total increase keeps the existing mobile composition intact.

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
# Services: Compact Service Kicker

- Scope: the service name label above each service heading.
- Layout: intrinsic content width with 16px inline padding; no inherited minimum width.
- Height: retain the existing 42px minimum for readable spacing.
- States: static informational label; hover, focus, active, disabled, and loading states do not apply.
- Color and contrast: retain the existing primary-blue border and text on the services background.

## Services: Unnumbered Capability Badges

- Scope: the capability badge below each service description.
- Content: remove the decorative `01` through `05` prefixes and retain only the capability name.
- Layout: intrinsic desktop width with 24px inline padding; full-width and centered text on small screens.
- Height: retain the existing 54px desktop and 56px mobile minimums.
- States: static informational content; interactive states do not apply.

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

## Get in Touch Page — Visual Approval Specification, 2026-09-10

The production target is `get-in-touch.html`. This is a scoped redesign of the existing route, not a new page or a homepage-Hero clone. The page has one conversion goal: a qualified consultation request. Its approved content boundary is the shared site header, a contact-first split hero with two informational cards and one form, one compact discovery-call CTA, and the existing footer. No FAQ, testimonial, metric, timeline, map, office block, support-SLA block, company narrative, or additional marketing section is permitted.

### Design direction and reuse contract

- Audience: business leaders, enterprise decision-makers, and organizations evaluating AI, automation, and digital transformation work.
- Tone: premium, minimal, sophisticated, atmospheric, confident, and restrained rather than sales-heavy.
- Genre: SkyGentic atmospheric enterprise minimalism.
- Macrostructure: user-directed Split Studio reuse. Unlike the prior sign-in composition, the right half is a functional form and the left half carries all context and service orientation; there are no alternating modules below it.
- Theme: SkyGentic Cobalt Night. This changes the paper band from the recent Cobalt Light page while preserving the existing cool-blue hue, Clash Display/Satoshi pairing, radii, 4px spacing scale, and button language.
- Header: reuse the current production navbar structure and behavior. Do not create a new nav language.
- Footer: preserve the existing `get-in-touch.html` footer byte-for-byte and do not modify shared footer CSS.
- Enrichment: E7-style Tier-A atmosphere only—scoped two-stop blue depth, sparse tiny points, and a barely visible grain layer. No illustration, orb, mesh blob, colorful gradient, dashboard mockup, or product animation.

### Desktop canvas

- Header remains the existing 72px production navbar.
- The contact hero begins directly below the header and uses the standard `--container-max-width` boundary with existing horizontal padding.
- Hero height is content-led with a target visual depth of roughly one viewport: `min-height` may use `100svh` minus the header, but content must never be clipped and the section may grow naturally.
- Grid: asymmetric two-column composition, approximately 43% left / 57% right, both tracks written with `minmax(0, ...)`, separated by an existing large spacing token.
- Left column: vertically centered relative to the form. Order is exact: eyebrow `GET IN TOUCH`; two-line H1 `Ready to Transform / Your Business?`; supplied supporting paragraph; Response Time card; Enterprise Services card.
- H1: Clash Display, roman, two lines at desktop, solid light ink, no gradient text, no italic emphasis, and a readable wrap at all widths.
- Supporting copy: Satoshi with a 45–65 character measure and existing light-on-dark text tokens.
- Information cards: two stacked single-layer surfaces. Response Time uses one title and one value. Enterprise Services uses one title and the exact five-item order: Forge, Swarm, Hive, SkyFlow, NovaOps. The services are compact text items, not separate nested cards or badges.
- Right column: one elevated dark form surface with a crisp 1px boundary, `--radius-xl`, and generous but token-bound padding. It contains no nested card.
- Form order is exact: Full Name, Work Email, Company, What would you like to discuss?, Message, Request Consultation.
- Dropdown options are exact and ordered: AI Agent Development; Workflow Automation; Enterprise Software; Digital Transformation; Managed Services; General Inquiry.
- Message placeholder is exact: `Tell us about your business, current workflow, or the challenge you'd like Skygentic to help solve.`
- Fields share one height with the primary button; textarea keeps `resize: vertical` and a minimum six-line-feeling surface without forcing the hero beyond its content.
- The page before the footer targets approximately 1.3–1.5 common desktop viewport heights: contact hero roughly 0.95–1.05 viewport and CTA roughly 0.3–0.4 viewport.

### Compact CTA canvas

- The CTA follows the hero without any intervening content and stays on the same dark canvas so the footer transition is quiet.
- Content is centered and constrained to the existing focus-container measure.
- Exact order: H2 `Ready to Build Something Intelligent?`; supplied description; one reused `.btn-primary` control labelled `Book a Discovery Call` linking to `schedule-demo.html`.
- No enclosing card, secondary action, decorative illustration, or extra label.
- Vertical padding uses existing `--space-20` / `--space-24` scale values and may be tightened only if browser validation shows the page exceeds the specified compact height.

### Responsive behavior

- At the content-driven desktop collapse near 60rem, the hero becomes one column with content first and form second; the CTA and footer remain in document order.
- At 768px, the form uses the full available width and keeps generous padding without creating horizontal overflow.
- At 414px, 375px, and 320px, page gutters remain at least `var(--space-4)`, H1 steps down fluidly, services wrap as a compact list, and every field/button remains at least 48px tall.
- No clickable label may wrap. `Request Consultation` and `Book a Discovery Call` stay on one line; their parent layout reflows instead.
- `html` and `body` retain `overflow-x: clip`; no `100vw`, desktop-first breakpoint dependency, or fixed-height mobile hero.

### Color and contrast targets

- Canvas: existing `--color-blue-900`; heading: existing `--color-blue-50`. Expected WCAG contrast is approximately 13.02:1.
- Body and label text: existing `--color-border` on `--color-blue-900`. Expected contrast is approximately 9.91:1.
- Secondary light text: existing `--color-blue-100` on `--color-blue-900`. Expected contrast is approximately 11.91:1.
- Focus indicator: existing `--color-secondary-blue` against `--color-blue-900`. Expected contrast is approximately 5.34:1, exceeding the 3:1 non-text target.
- Primary CTA label: existing light card/blue-50 text over the existing primary CTA surface. Expected contrast is approximately 4.98–5.28:1, meeting WCAG AA for normal text.
- New contact-specific variables, if needed, must be semantic aliases or `color-mix()` derivatives of existing primitives in `styles/tokens.css`; no new hue family, hex value, RGB value, or ad-hoc inline color is allowed.

### Interaction and state matrix

| State | Fields and native select | Primary submit button | Information cards |
| --- | --- | --- | --- |
| Idle | Constant 1px boundary, dark inset surface, visible label, stable helper slot | Existing primary CTA surface and fixed 48px minimum height | Static raised surface with crisp 1px boundary |
| Hover | Under `hover: hover`, a slight surface-lightness change; border width never changes | Existing 2px lift and slide-text behavior | Under `hover: hover`, translate upward by no more than 2px |
| Focus-visible | Instant 2px outline with token offset and soft blue focus halo; no animated focus ring | Instant high-contrast outline; hover transform does not obscure focus | Not applicable because cards are informational and not focusable |
| Active | Same geometry as focus while typing; native select behavior retained | Returns to baseline/pressed geometry with no bounce | Returns to baseline if pointer is pressed; no functional state |
| Disabled | Opacity reduction, disabled cursor, and semantic disabled attribute | Stable dimensions, no lift, disabled cursor | Not applicable |
| Loading | Field remains editable; submit is disabled while the button exposes `aria-busy="true"` and an inline progress label | Label changes without resizing; no success animation | Not applicable |
| Error | `aria-invalid="true"`; instructional error replaces helper text in a reserved-height status row; color is never the only signal | Error state is exposed through the form status region | Not applicable |
| Success | Quiet field reset only after a confirmed delivery response | Stable confirmation label/status; no toast or celebration | Not applicable |

The repository currently contains no contact-delivery endpoint. Production code must not claim that a request was routed, emailed, booked, or received unless a real endpoint is supplied. Until then, the form will use native/touched validation and an honest live-region message that delivery is not connected.

### Motion and atmosphere

- Primitive 1: one orchestrated hero entrance using opacity plus a maximum `var(--space-2)` vertical offset; total stagger stays below 500ms.
- Primitive 2: existing button/card hover translation only.
- Primitive 3: an extremely slow opacity drift on the decorative atmosphere. Particles and grain remain `aria-hidden` and non-interactive.
- Scroll reveal is limited to the compact CTA and fires once through `IntersectionObserver`; no scroll listener, parallax, cursor follower, or repeated section reveal.
- `prefers-reduced-motion: reduce` removes spatial motion and atmosphere drift, renders content visible immediately, and preserves functional validation/status changes.

### Accessibility, SEO, and validation contract

- Keep the skip link first in `body`, exactly one `main#main-content`, sequential H1 → H2 → footer H2 structure, and the existing header/footer landmarks.
- Use visible `<label>` elements, `required`/`aria-required`, `autocomplete="name"`, `autocomplete="email"`, and `autocomplete="organization"` where applicable.
- Keep the discussion selector as a native `<select>` with a disabled empty first option and `required`; do not replace it with a custom combobox.
- Use `aria-describedby` for helper/error associations and a polite form-level status region.
- Validate on blur after first touch, then on input. Do not validate every keystroke from first focus.
- Update the page metadata and structured data to match the exact route purpose; remove the existing FAQ schema because no FAQ exists on the page.
- Verification after implementation: focused route inspection, keyboard traversal, native validation/error/loading/unavailable-delivery states, reduced-motion mode, 320/375/414/768/1024/1440/1920px geometry, footer byte comparison, console errors, `npm run audit:hallmark`, `npm run audit:a11y`, `npm run audit:seo`, and final `npm test`.

Research references: WCAG 2.2 target size, focus appearance, focus order, error identification, and input purpose guidance; MDN native `select`, client-side form validation, and `prefers-reduced-motion` guidance.

### Contact hero hierarchy revision - 2026-09-10

- Center the primary H1 "Get In Touch" in the full-width header above the columns. Both pages use the shared `resources-hero__title` component in `styles/design-system.css`, with identical Resources typography, blue color, and margins. The left headline becomes H2 while preserving its original visual styling.
- Match Resources hero padding: `--space-8` above and `--space-16` below; at 620px and below use `--space-6` and `--space-12`. Separate the header from the columns with `--space-10`.
- Preserve the original dark, left-aligned H1 typography and explicit line break. Description, information cards, form markup, and interactive states remain unchanged.
- Preserve the 43:57 desktop columns, `--space-16` desktop gutter, and stacked mobile layout. Height follows content after introducing the header.

### Implementation and verification — 2026-09-10

- Implemented in `get-in-touch.html` with page-scoped styles, existing typography/palette/button primitives, exact requested copy and option order, two information cards, and one discovery CTA.
- Existing header retained. Footer markup is byte-identical to the original; shared footer styles are unchanged.
- Short desktop adaptation uses 24px hero/form padding and 4px form gaps; wider/taller desktops use 32px padding. At 1280×800 the hero is 728px high and the submit button ends at 747px; the footer begins at 1169px (1.46 viewports). At 1440×900 the footer begins at 1274px (1.42 viewports). Mobile height follows content naturally.
- No document overflow or broken images at 320, 375, 414, 768, 1024, 1440, or 1920px. Empty submission identifies four required fields, valid input stays intact, and reduced motion disables the atmosphere animation. No browser script errors observed.
- Direct Lighthouse on the contact route: accessibility 100/100 and SEO 100/100. Repository `npm test` passes. The repository's aggregate CSS budget excludes inline page styles; this page follows the existing standalone-page style convention.
- Delivery remains unconnected: valid submission explicitly states that nothing was sent and offers the existing sales email address. No artificial loading or success state is triggered without an actual delivery operation.
- Research: [MDN constraint validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation) and [reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion).

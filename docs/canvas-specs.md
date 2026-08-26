# Modular Base Components Design System (Hallmark Specification)

A definitive catalog and architectural blueprint of all **Base Modular Components** (Atoms & Molecules) designed for composition across all sections of the SkyGentic AI web application.

---

## 1. Complete Component Inventory & Composition Map

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ BASE COMPONENTS (ATOMS & MOLECULES)                                         │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. CapsuleButton       │ • Variants: primary, secondary, glass, white       │
│                        │ • Anatomy: Pill (48px) + TextSlide + ArrowBubble   │
├────────────────────────┼────────────────────────────────────────────────────┤
│ 2. BadgePill           │ • Variants: sapphire, emerald, lime, dark-glass    │
│                        │ • Anatomy: Capsule (12px text) + Pulsing Status Dot│
├────────────────────────┼────────────────────────────────────────────────────┤
│ 3. SurfaceCard         │ • Variants: light-ambient, dark-glass, gradient-cta│
│                        │ • Anatomy: 20px/28px radius + Specular Rim + Shadow│
├────────────────────────┼────────────────────────────────────────────────────┤
│ 4. StatBlock           │ • Anatomy: 56px Clash Digit + Satoshi Label + Desc │
├────────────────────────┼────────────────────────────────────────────────────┤
│ 5. ReadMoreLink        │ • Anatomy: Satoshi 15px + Animated Chevron Arrow   │
├────────────────────────┼────────────────────────────────────────────────────┤
│ 6. AccordionDisclosure │ • Anatomy: ARIA Trigger + Animated +/- Icon + Panel│
├────────────────────────┼────────────────────────────────────────────────────┤
│ 7. TrustAvatarCluster  │ • Anatomy: 4x Overlapping Avatars + Social Proof   │
└─────────────────────────────────────────────────────────────────────────────┘
                                       │
                                       ▼ (Composed into Sections)
┌─────────────────────────────────────────────────────────────────────────────┐
│ SECTION ORGANISMS                                                           │
│ • NavbarHeader        = NavBrand + NavLinks + CapsuleButton.Primary         │
│ • HeroSection         = BadgePill + H1 + CapsuleButton.Dual + VisualHub    │
│ • MetricsStrip        = TrustAvatarCluster + StatBlock(x3) + BadgePill(x6)  │
│ • BentoCapabilities   = SurfaceCard.Light(x5) + ReadMoreLink + Button.CTA   │
│ • TestimonialsRibbon  = TestimonialCard.Expanding(x4) (23% -> 35% width)    │
│ • FaqHub              = SurfaceCard.Light + AccordionDisclosure(x3)         │
│ • DualCardFooter      = SurfaceCard.Gradient + SurfaceCard.DarkGlass + Link │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Base Component 1: CapsuleButton (`.btn`)

### Anatomy & Visual Blueprint
```
┌─────────────────────────────────────────────────────────────┐
│ ╭─────────────────────────────────────────────────────────╮ │  <-- 48px Capsule (border-radius: 3rem)
│ │  [ Button Label ]                                (• ↗)  │ │  <-- Dual-Layer Text Slide on :hover
│ ╰─────────────────────────────────────────────────────────╯ │  <-- 32px Circular Icon Bubble (45° rot)
└─────────────────────────────────────────────────────────────┘
```

### Variants Matrix:
1. **`btn-primary` (Electric Emerald / Sapphire)**:
   - `background: var(--color-green-primary) / var(--color-sapphire-500);`
   - `color: var(--color-midnight-06);`
   - Icon bubble: Dark circle with white arrow `↗`.
2. **`btn-secondary` (Midnight Obsidian)**:
   - `background: var(--color-obsidian-900);`
   - `border: 1px solid rgba(255, 255, 255, 0.15); color: #ffffff;`
3. **`btn-glass` (Frosted Crystal)**:
   - `background: rgba(255, 255, 255, 0.10); backdrop-filter: blur(20px);`
   - `border: 1px solid rgba(255, 255, 255, 0.20); color: #ffffff;`
4. **`btn-white` (Footer CTA Variant)**:
   - `background: #ffffff; color: #03031d; box-shadow: 0 4px 20px rgba(0,0,0,0.3);`

### 6-State Lifecycle:
* **Idle**: Standard padding `8px 10px 8px 24px`, height `48px`.
* **Hover**: `translateY(-2px)`, text slides up `20px`, arrow rotates `45deg`, ambient glow shadow.
* **Focus-Visible**: `outline: 2px solid var(--focus-ring-color); outline-offset: 3px;`.
* **Active / Pressed**: `scale(0.98); translateY(0);`.
* **Disabled**: `opacity: 0.5; pointer-events: none;`.
* **Loading**: Text hidden, spinner rendered in icon bubble.

---

## 3. Base Component 2: BadgePill (`.badge-pill`)

### Anatomy & Visual Blueprint
```
( • PULSING DOT   UPPERCASE BADGE TEXT )
```
* **Shape**: `border-radius: var(--radius-pill)` (9999px).
* **Typography**: `font-family: var(--font-family-body); font-size: 0.75rem (12px); font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;`.
* **Pulsing Dot**: `width: 6px; height: 6px; border-radius: 50%; animation: pulse 2s infinite;`.
* **Variants**:
  - `badge-pill.emerald`: `background: rgba(13, 239, 147, 0.12); color: #0DEF93; border: 1px solid rgba(13, 239, 147, 0.3);`
  - `badge-pill.sapphire`: `background: rgba(37, 99, 235, 0.12); color: #3B82F6; border: 1px solid rgba(59, 130, 246, 0.3);`
  - `badge-pill.glass`: `background: rgba(255, 255, 255, 0.08); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.15);`

---

## 4. Base Component 3: SurfaceCard (`.surface-card`)

### Variants:
1. **Light Ambient Card (`.card-light`)**:
   - `background: #ffffff; border: 1px solid #e4ebf3; border-radius: 20px;`
   - `box-shadow: 0 4px 130px rgba(150, 163, 181, 0.15);`
   - Hover: `translateY(-4px); border-color: rgba(37, 99, 235, 0.3);`
2. **Dark Frosted Glass Card (`.card-dark-glass`)**:
   - `background: rgba(255, 255, 255, 0.06); backdrop-filter: blur(24px);`
   - `border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px;`
   - Hover: `translateY(-4px); border-color: rgba(255, 255, 255, 0.25);`
3. **Hero Gradient Card (`.card-gradient-hero`)**:
   - `background: linear-gradient(87deg, #04042b 0%, #4b207f 64%, #7131be 102%);`
   - `border-radius: 28px; border: 1px solid rgba(151, 65, 254, 0.4);`

---

## 5. Base Component 4: StatBlock (`.stat-block`)

### Anatomy:
* **Digit**: `font-family: var(--font-family-display); font-size: 3.5rem (56px); font-weight: 600; line-height: 1.0; letter-spacing: -0.03em; color: #ffffff;`
* **Label**: `font-family: var(--font-family-body); font-size: 0.875rem (14px); font-weight: 600; color: #ffffff; margin-top: 8px;`
* **Description**: `font-size: 0.8125rem (13px); color: var(--color-slate-400); line-height: 1.5; margin-top: 4px;`

---

## 6. Base Component 5: AccordionDisclosure (`.accordion-item`)

### Anatomy & ARIA Binding:
```html
<div class="accordion-item">
  <button class="accordion-trigger" aria-expanded="false" aria-controls="panel-id">
    <span class="accordion-title">Question Text</span>
    <span class="accordion-icon" aria-hidden="true">+</span>
  </button>
  <div id="panel-id" class="accordion-panel" hidden>
    Answer content text with 1.6 line-height.
  </div>
</div>
```

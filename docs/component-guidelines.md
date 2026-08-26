# Modular Component Engineering & High-Fidelity Styling Guide

A comprehensive architectural manual and implementation blueprint for building **Intuitive, High-Contrast, and High-Fidelity** modular components within the SkyGentic AI / AiChat Design System.

---

## 1. Modular Component Hierarchy (Atomic Composition)

All UI elements must follow strict atomic composition rules to ensure isolation, reusability, and maintainability:

```
┌─────────────────────────────────────────────────────────────────────────┐
│ Level 1: ATOMS (Base Elements)                                          │
│ • Icons (ArrowIcon, CheckIcon, BrandLogos)                              │
│ • BadgePill (.badge-pill, .badge-pill.lime, .badge-pill.purple)         │
│ • StatDigit (.stat-digit)                                               │
│ • TextWrapper (.btn-text-wrapper > .btn-text-slide)                      │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Composed into)
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ Level 2: MOLECULES (Interactive Units)                                  │
│ • PrimaryButton, SecondaryButton, GlassButton, ReadMoreLink             │
│ • NavBrand, NavLink, SearchInput, FaqItemHeader                         │
│ • StatItem (StatDigit + StatLabel)                                      │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Composed into)
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ Level 3: ORGANISMS (Complex Functional Modules)                         │
│ • Navbar (Floating frosted capsule + NavMenu + ActionCTAs)              │
│ • HeroSection (Eyebrow + Display1 + Lead + DualCTAs + BotGlow)          │
│ • ServiceCardGrid (Card + Badge + Heading + Body + ReadMoreLink)        │
│ • TestimonialAccordion (Flex ribbon + expand states + quote overlay)    │
│ • FaqAccordion (Tab list + animated panels + ARIA triggers)             │
│ • EnterpriseFooter (Gradient hero card + 3-column link directory)       │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Modern Styling Guidelines: Intuitive, Contrast & High Fidelity

### A. Intuitive Visual Hierarchy
1. **Primary Action Dominance**:
   - Only **ONE** Primary CTA (`.btn-primary` with Neon Green `#0DEF93`) per viewport to eliminate decision friction.
   - Secondary actions must use Dark Navy (`.btn-secondary`) or Glass (`.btn-glass`).
2. **Scan-Friendly Eye Tracking**:
   - Layouts must follow the **F-Pattern** for text-heavy sections and the **Z-Pattern** for landing heroes:
     * *Eyebrow Badge* $
ightarrow$ *Display 1 Headline* $
ightarrow$ *Sub-lead Paragraph* $
ightarrow$ *Primary CTA*.
3. **Spacing Rhythm**:
   - Use strict spatial multipliers (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `80px`). Never use arbitrary padding like `17px` or `29px`.

---

### B. High Contrast & Visual Clarity
| Surface | Text / Element | Contrast Ratio | WCAG Rating | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Midnight Surface (`#03031D`)** | Neon Green CTA (`#0DEF93`) | **14.2 : 1** | **AAA** | Primary conversion buttons & active highlights |
| **Midnight Surface (`#03031D`)** | Pure White Title (`#FFFFFF`) | **18.6 : 1** | **AAA** | Section headlines & display text |
| **Midnight Surface (`#03031D`)** | Muted Slate (`#83839D`) | **4.8 : 1** | **AA** | Secondary subtitles & meta labels |
| **White Surface (`#FFFFFF`)** | Dark Navy Text (`#03031D`) | **18.6 : 1** | **AAA** | Light section headings & card copy |
| **White Surface (`#FFFFFF`)** | Secondary Body (`#3D4050`) | **10.4 : 1** | **AAA** | Service card descriptions |

---

### C. High-Fidelity Depth & Glassmorphism Recipes

#### 1. Dark Frosted Glass Surface (`.card-glass`)
```css
.card-glass {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-xl); /* 20px */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
}

.card-glass:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 30px rgba(151, 65, 254, 0.3); /* Purple Glow */
}
```

#### 2. Light Frosted Ambient Surface (`.card`)
```css
.card {
  background: var(--color-surface-white);
  border: 1px solid var(--color-surface-border);
  border-radius: var(--radius-xl); /* 20px */
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.06);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 130px rgba(150, 163, 181, 0.15); /* Soft ambient cloud */
  border-color: rgba(151, 65, 254, 0.3);
}
```

#### 3. Floating Frosted Navbar Header (`.navbar-container`)
```css
.navbar-container {
  background: rgba(3, 3, 29, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-pill); /* 3rem */
  box-shadow: 0 8px 32px rgba(3, 3, 29, 0.25);
}
```

---

## 3. Micro-Interactions & Fluid Motion

### A. Primary Button Slide-Up Text Animation
A signature high-fidelity interaction where button text slides up smoothly on `:hover`:
```html
<a href="#demo" class="btn-primary">
  <div class="btn-text-wrapper">
    <span class="btn-text-slide">Book a demo</span>
    <span class="btn-text-slide">Book a demo</span>
  </div>
  <div class="btn-icon-bubble" aria-hidden="true">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  </div>
</a>
```

### B. Interactive Testimonial Ribbon Expansion
Multi-column accordion that smoothly expands the focused/hovered card from **`23%`** to **`35%`** width while revealing detailed quotes and dark purple gradient glows:
```css
.testimonial-card {
  flex: 1 1 23%;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.testimonial-card:hover,
.testimonial-card:focus-visible,
.testimonial-card.active {
  flex: 1 1 35%;
  background: linear-gradient(87deg, #04042b 0%, #4b207f 64%, #7131be 102%);
  border-color: var(--color-purple-04);
}
```

---

## 4. Component Implementation Blueprint (Step-by-Step)

When implementing any new component in `components/`, adhere to this 5-step checklist:

1. **Token Binding Check**: Verify all colors, radii, and fonts reference `styles/tokens.css`.
2. **Accessibility (a11y)**:
   - Provide accessible names via `aria-label` or visible text.
   - Enforce `:focus-visible` styling.
   - Ensure tap target size $\ge 48	imes 48	ext{px}$.
3. **Responsive Breakpoints**:
   - Mobile (`<480px`): Single column, full-width tap targets.
   - Tablet (`768px-991px`): 2-column flow.
   - Desktop (`>992px`): Multi-column grid/flex layout with hover effects.
4. **Reduced Motion**: Ensure animations degrade cleanly inside `@media (prefers-reduced-motion: reduce)`.
5. **SEO & Semantics**: Wrap in semantic tags (`<article>`, `<section>`, `<nav>`, `<aside>`).

---

## 5. Mandatory Research & User Confirmation Protocol

Before writing any CSS or JSX for a component:
1. **Research**: Review existing design tokens in `styles/tokens.css` and industry a11y standards.
2. **Visual Draft**: Construct the component layout in `docs/canvas-specs.md`.
3. **User Approval Gate**: Present the visual structure (colors, contrast ratios, hover states) to the user.
4. **Implementation**: Only commence code implementation after receiving user confirmation on visual appearance.

---

## 6. Styling Components with the Hallmark Skill Set

When styling UI components using the global **Hallmark** skillset, unconditionally follow these rules:

### A. Anti-AI Slop Craft Rules
1. **Zero Emojis & Cheesy Glyphs**: Never use emojis (⚡, 🧠, 🎙️, 🔒, 📈, 🤝, 🎯, ✨) or cheesy "Ai✦" badge icons in production UI elements. Use clean SVG vector line icons.
2. **No Floating Pill Status Boxes**: Prohibit random floating AI status boxes (e.g. "• Autonomous Agent Live").
3. **Intentional Typography**: Use display typography (`Clash Display`) exclusively for headers/display numbers and body typography (`Satoshi` / `Inter`) for copy.

### B. 3-Tier Token Inheritance
* **Tier 1 (Primitives)**: Defined in `styles/tokens.css` (`--color-green-primary: #0DEF93;`, `--color-midnight-06: #03031D;`, `--radius-pill: 3rem;`).
* **Tier 2 (Component Semantics)**: Component variables mapped to primitives (`--btn-bg: var(--color-green-primary);`).
* **Tier 3 (Component Variants)**: Modifier classes that override component variables (`.btn-secondary { --btn-bg: var(--color-midnight-06); }`).

### C. The 6-State Interactive Styling Matrix
Every interactive component must declare explicit styles for all 6 states:
1. **Idle**: Baseline elevation with 1px border.
2. **Hover**: Smooth lift (`translateY(-2px)` to `-4px`) with subtle glow/sheen.
3. **Focus-Visible**: High-contrast outline ring (`outline: 2px solid var(--color-green-primary); outline-offset: 3px;`).
4. **Active**: Subtle tactile scale or push (`translateY(0)` or `scale(0.98)`).
5. **Disabled**: Reduced opacity (`0.45`), `pointer-events: none` or `cursor: not-allowed`.
6. **Loading**: Subtle pulse/spinner with `aria-busy="true"`.

### D. Specular Rim Light & High-Fidelity Depth
```css
/* Specular top rim light for glossy controls */
box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.2), 0 4px 20px rgba(0, 0, 0, 0.12);

/* Frosted glass backdrop */
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(255, 255, 255, 0.12);
```

### E. Verification
Always validate component styling with:
```bash
npm run audit:hallmark
npm test
```

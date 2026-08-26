# SkyGentic AI & AiChat Design System Documentation

Comprehensive specification of design tokens, typography scales, color palettes, component anatomy, and responsive layout guidelines extracted from **AiChat.com**.

---

## 1. Design Tokens

### Color Palette

#### Brand Accents
- **Neon Green (Primary CTA)**: `#0DEF93` / `var(--color-green-primary)`
- **Green Hover**: `#09B26E` / `var(--color-green-hover)`
- **Lime Glow (Highlight Pill)**: `#B8FF7A` / `var(--color-lime-accent)`
- **Purple Primary (Active State)**: `#9741FE` / `var(--color-purple-04)`
- **Dark Indigo (Gradients)**: `#4B207F` / `var(--color-purple-06)`
- **Electric Cyan**: `#61DAEE` / `var(--color-cyan-04)`
- **Cyan Teal**: `#14EBD2` / `var(--color-cyan-teal)`

#### Midnight Dark Neutrals
- **Void Black**: `#02020F` / `var(--color-midnight-07)`
- **Midnight 900 (Dark Surface)**: `#03031D` / `var(--color-midnight-06)`
- **Midnight 800**: `#04042B` / `var(--color-midnight-05)`
- **Midnight 700**: `#06063A` / `var(--color-midnight-04)`
- **Slate Secondary**: `#83839D` / `var(--color-midnight-02)`
- **Slate Muted**: `#C1C1CE` / `var(--color-midnight-01)`

#### Light Neutrals
- **Pure White**: `#FFFFFF` / `var(--color-surface-white)`
- **Light Surface**: `#FAFAFA` / `var(--color-surface-light)`
- **Subtle Surface**: `#EBEFF7` / `var(--color-surface-subtle)`
- **Border**: `#E4EBF3` / `var(--color-surface-border)`

### Gradients
```css
/* Hero Mesh Gradient */
linear-gradient(118deg, #06063A 0%, #3B1F6D 67%, #0DEF93 103%);

/* Ambient Banner Glow */
linear-gradient(60deg, #06063A 0%, #3B1F6D 60%, #13D78F 100%);

/* Card Purple Gradient */
linear-gradient(87deg, #04042B 0%, #4B207F 64%, #7131BE 102%);
```

---

## 2. Typography

- **Headings**: `Clash Display` (Weights: 500, 600, 700)
- **Body & UI**: `Satoshi` & `Inter` (Weights: 400, 500, 700)
- **Monospace**: `JetBrains Mono`

| Class | Font | Size (rem / px) | Weight | Line Height |
| :--- | :--- | :--- | :--- | :--- |
| `.display-1` (H1) | Clash Display | `3.0rem - 3.5rem` (48-56px) | 700 | 1.15 |
| `.display-2` (H2) | Clash Display | `2.25rem` (36px) | 600 | 1.25 |
| `.display-3` (H3) | Clash Display | `1.75rem` (28px) | 600 | 1.3 |
| `.display-4` (H4) | Clash Display | `1.5rem` (24px) | 600 | 1.4 |
| `.display-5` (H5) | Satoshi / Clash | `1.125rem` (18px) | 500 | 1.4 |
| `.text-lead` | Satoshi | `1.125rem` (18px) | 400 | 1.6 |
| `body` / Paragraph | Satoshi | `1.0rem` (16px) | 400 | 1.6 |
| `.badge-pill` | Satoshi | `0.75rem` (12px) | 700 | 1.0 (Uppercase) |

---

## 3. Reusable UI Components

1. **Primary Button (`.btn-primary`)**:
   - Capsule radius (`3rem`), neon green background (`#0DEF93`), dark navy text (`#03031D`).
   - Circular arrow bubble with 45° arrow.
   - Dual-layer text slide-up animation on `:hover`.

2. **Secondary Button (`.btn-secondary`)**:
   - Capsule radius (`3rem`), dark navy background (`#03031D`), white text, light icon bubble.

3. **Glass Button (`.btn-glass`)**:
   - Translucent frosted glass (`rgba(255, 255, 255, 0.15)`), `backdrop-filter: blur(12px)`.

4. **Floating Navbar (`.navbar-wrapper`)**:
   - Fixed pill wrapper, frosted backdrop blur (`20px`), responsive menu items.

5. **Feature Cards (`.card` & `.card-glass`)**:
   - Uniform `20px` radius, hover lift (`translateY(-4px)`), ambient shadow.

6. **Interactive Testimonial Accordion (`.testimonial-card`)**:
   - Multi-card flex layout expanding on hover from `23%` to `35%` with dark purple gradient and quote reveal.

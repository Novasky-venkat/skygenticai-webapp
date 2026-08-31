# SkyGentic Hallmark Design System

## Source Of Truth

This file is the highest-priority UI/UX reference for SkyGentic. Website colors, gradients, surfaces, text colors, borders, focus rings, and component treatments must use these tokens through `styles/tokens.css`.

Hallmark analysis: the previous palette was too monochrome-blue, used hex values as primitives, used pure white surfaces, and placed saturated blue across large sections. The updated system keeps SkyGentic's enterprise-blue identity, adds a restrained teal support accent and amber signal accent, and moves large surfaces back to tinted paper.

## Color Format

All palette primitives use OKLCH.

Do not introduce new hex, RGB, HSL, or ad-hoc gradient values in production CSS. If a new color is needed, add it here first, then expose it in `styles/tokens.css`.

## Primitive Palette

| Token | CSS Variable | OKLCH | Usage |
| --- | --- | --- | --- |
| Paper | `--color-background` | `oklch(98% 0.010 250)` | Page background and hero base |
| Paper Raised | `--color-card` | `oklch(99% 0.006 250)` | Cards, navbar, panels |
| Paper Blue | `--color-blue-50` | `oklch(97% 0.018 250)` | Soft blue section tint |
| Blue Mist | `--color-blue-100` | `oklch(94% 0.035 250)` | Subtle active states and glows |
| Deep Blue | `--color-blue-900` | `oklch(29% 0.080 258)` | Premium dark accents and logo contrast |
| Teal | `--color-teal` | `oklch(60% 0.120 190)` | AI/data indicators and small visual signals |
| Teal Soft | `--color-teal-soft` | `oklch(94% 0.035 190)` | Soft AI/data panels |
| Amber | `--color-amber` | `oklch(72% 0.140 75)` | Status/signal only |
| Primary Action Blue | `--color-primary-blue` | `oklch(53% 0.200 258)` | CTA, focus, links |
| Secondary Action Blue | `--color-secondary-blue` | `oklch(70% 0.140 250)` | Small secondary marks |
| Soft Sky | `--color-soft-sky` | `--color-blue-100` | Glows and low-emphasis blue highlights |
| Action Hover | `--color-cta-hover` | `oklch(47% 0.180 258)` | Hover and pressed states |
| Border | `--color-border` | `oklch(88% 0.020 250)` | Hairlines and component boundaries |
| Heading Ink | `--color-heading` | `oklch(19% 0.025 255)` | H1-H6, primary labels |
| Body Ink | `--color-body` | `oklch(34% 0.025 252)` | Body copy |
| Secondary Ink | `--color-secondary-text` | `oklch(45% 0.025 252)` | Metadata and helper text |

## Runtime Token Discipline

The CSS runtime exports only tokens used by the website. Intermediate blue scale steps from the supplied palette are consolidated into semantic action tokens to preserve the 30 KB CSS budget while keeping the same visual intent.

## Gradients

Gradients are two-stop only. No purple-to-cyan, purple-to-blue, or orange-to-pink gradients.

| Token | Definition | Usage |
| --- | --- | --- |
| `--bg-gradient-hero` | `linear-gradient(180deg, var(--color-background) 0%, var(--color-blue-50) 100%)` | Hero and first viewport background |
| `--bg-gradient-primary-cta` | `linear-gradient(135deg, var(--color-primary-blue) 0%, var(--color-blue-900) 100%)` | Primary CTA only |
| `--bg-gradient-ai-showcase` | `linear-gradient(135deg, var(--color-blue-100) 0%, var(--color-teal-soft) 100%)` | AI showcase mockups |
| `--bg-gradient-knowledge` | `linear-gradient(135deg, var(--color-teal-soft) 0%, var(--color-card) 100%)` | Knowledge/RAG mockups |
| `--bg-gradient-testimonials` | `linear-gradient(135deg, var(--color-card) 0%, var(--color-blue-50) 100%)` | Testimonial active panels |
| `--bg-gradient-footer-cta` | `linear-gradient(135deg, var(--color-blue-100) 0%, var(--color-teal-soft) 100%)` | Footer CTA card |

## Section Color Map

| Section | Surface | Text |
| --- | --- | --- |
| Hero | `--bg-gradient-hero` with `--bg-gradient-hero-glow` | Dark ink |
| Metrics | `--color-card` | Dark ink with small blue numerals |
| Logos | `--color-card` | Muted dark ink |
| Capabilities | `--color-card` with soft glow | Dark ink |
| AI Showcase | `--color-section-alt` | Dark ink |
| Knowledge/RAG cards | `--bg-gradient-knowledge` | Dark ink |
| Marketing/AI cards | `--bg-gradient-ai-showcase` | Dark ink |
| Testimonials | `--color-section-alt`; active panel uses soft gradient | Dark ink |
| FAQ | `--color-background` | Dark ink |
| Footer | `--color-card`; CTA card uses soft gradient | Dark ink |

## Accent Discipline

Target distribution per viewport:

- 78% tinted paper and raised paper
- 14% soft blue or teal surfaces
- 5% neutral border, shadow, and inactive UI
- 3% saturated blue, teal, or amber accents

Saturated blue is reserved for primary CTAs, focus rings, active nav/link states, compact icon badges, and small data highlights. Teal is reserved for AI/data states. Amber is reserved for warning, pending, and signal moments only.

## Text Rules

Headings use `--color-heading`. Body text uses `--color-body`. Secondary text uses `--color-secondary-text`.

Use light text only on compact saturated CTA elements or deep-blue micro-surfaces where contrast is verified. Large colored panels must use dark text on soft tinted surfaces.

## Component Rules

- Buttons use the CTA gradient only for primary actions.
- Hover states use `--color-cta-hover`, `--color-blue-50`, or `--color-section-alt`.
- Focus-visible rings use `--focus-ring-color`.
- Cards use `--color-card`, `--color-border`, and token shadows.
- Mockups use soft gradients and dark text; saturated color appears only in small badges, dots, and controls.
- No floating AI pill badges, emojis, pure black, pure white, or inline production color values.

## Typography And Spacing

Typography remains `--font-family-display` for display text and `--font-family-body` for body/UI text. Spacing remains the documented 4px scale in `styles/tokens.css`. Border radii and shadows must reference existing design tokens unless a new token is added here first.

Runtime radius extension: `--radius-line: 2px` is reserved for thin menu strokes and other hairline UI geometry that needs a slight optical round without becoming a pill.

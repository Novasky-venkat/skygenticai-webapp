# Hallmark UI Craft & Modern Web Guidelines Architecture

A definitive modern web implementation blueprint combining **Hallmark UI Craft** with **Modern Web Baseline Standards** (CSS Container Queries, `text-wrap: balance`, `content-visibility`, subpixel typography, and high-fidelity micro-interactions).

---

## 1. Modern Web CSS Directives Applied

```css
/* 1. Balanced Typography (Zero Awkward Line Wraps) */
h1, h2, h3, h4, h5, h6, .font-display, .headline-homepage, .section-title {
  text-wrap: balance;
}

p, .hero-lead, .text-lead, .stat-desc {
  text-wrap: pretty;
}

/* 2. Subpixel Anti-Aliasing (Retina Clarity) */
html, body, h1, h2, h3, h4, h5, h6, p, span, a, button, input {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  -webkit-text-size-adjust: 100%;
}

/* 3. Offscreen Content Rendering Optimization */
.section-capabilities,
.section-showcase,
.section-testimonials,
.section-faq,
.footer-wrapper {
  content-visibility: auto;
  contain-intrinsic-size: 1px 600px;
}

/* 4. Motion Physics with Reduced-Motion Guard */
.btn-primary, .btn-secondary, .btn-glass, .surface-card, .testimonial-card {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 2. Hallmark Component Architecture & 6-State Lifecycle

### 1. CapsuleButton (`.btn`)
* **Idle**: 48px capsule pill, electric neon green `#0DEF93`, black text `#03031D`, black arrow bubble with white arrow `↗`.
* **Hover**: `translateY(-2px)`, text slides up 20px via dual-layer text slide, arrow rotates 45°, ambient glow shadow.
* **Focus-Visible**: `outline: 2px solid var(--color-green-primary); outline-offset: 3px;`.
* **Active**: `scale(0.98); translateY(0);`.
* **Disabled**: `opacity: 0.5; pointer-events: none;`.

### 2. SurfaceCard (`.surface-card`)
* **Light Variant (`.card-light`)**: Pure white `#FFFFFF`, `border: 1px solid #E4EBF3`, `border-radius: 20px`, ambient soft cloud shadow (`box-shadow: 0 4px 130px rgba(150, 163, 181, 0.15)`).
* **Dark Glass Variant (`.card-dark-glass`)**: `background: rgba(255, 255, 255, 0.06); backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px;`.
* **Gradient Hero Variant (`.card-gradient-hero`)**: `background: linear-gradient(87deg, #04042b 0%, #4b207f 64%, #7131be 102%); border-radius: 28px;`.

### 3. Testimonials Expanding Ribbon (`.testimonial-card`)
* 4-Card flex row where idle cards occupy `23%` width, and hover/focus expands to `35%` with rich violet gradient.

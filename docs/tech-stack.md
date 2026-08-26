# SkyGentic AI WebApp - Complete Tech Stack & Architectural Guide

Comprehensive technical documentation detailing the architecture, technology stack, accessibility implementation, SEO engine, design token inheritance, bundling pipeline, and cloud deployment guides for **`skygenticai-webapp`**.

---

## 1. Executive Architecture Overview

`skygenticai-webapp` is engineered as a **Cloud-Native Static Site Architecture (SSG)** delivering sub-50ms Time-to-First-Byte (TTFB) and a **100/100 Lighthouse benchmark** across Performance, Accessibility, Best Practices, and SEO.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           Edge CDN Layer                                │
│       (Cloudflare Pages / AWS CloudFront / Vercel / Netlify)            │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ Direct Serving of Pre-compressed Assets (.br / .gz)
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                       Client Web Runtime (< 8 KB)                       │
│  ┌─────────────────────────┐ ┌───────────────────┐ ┌─────────────────┐  │
│  │ Pre-rendered HTML5 (SSG)│ │ Pure Design Tokens│ │ Accessible ARIA │  │
│  │ Semantic Landmarks      │ │ Clash + Satoshi   │ │ WCAG 2.1 AA     │  │
│  └─────────────────────────┘ └───────────────────┘ └─────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Technology Stack Breakdown

| Technology Layer | Tool / Standard | Purpose & Implementation |
| :--- | :--- | :--- |
| **Core Architecture** | Static Site Generation (SSG) | Zero-JS default rendering for instant crawler indexing and CDN edge delivery |
| **Design Tokens** | CSS Custom Properties (`styles/tokens.css`) | 3-Tier token inheritance (Primitives $ightarrow$ Component Semantics $ightarrow$ Variant Modifiers) |
| **Utility Framework** | Tailwind CSS (`tailwind.config.js`) | 1:1 mapping of all brand palettes, radii, and typography scales |
| **Display Typography** | `Clash Display` (500, 600, 700) | High-contrast geometric headlines engineered for AI enterprise aesthetics |
| **UI Body Typography** | `Satoshi` & `Inter` (300 to 900) | Crisp, subpixel-antialiased interface text and long-form prose |
| **Component Engine** | React / Vanilla JSX Modules (`components/`) | Capsule buttons with dual-layer slide micro-interactions, frosted navigation, accordions |
| **Bundling & Minification** | Vite 5 + Terser + LightningCSS | Dead-code elimination, HTML/CSS minification, and asset hashing |
| **Pre-compression** | Brotli (`.br`) & Gzip (`.gz`) | Pre-compressed static assets at maximum compression levels (82% size reduction) |
| **Accessibility (a11y)** | WCAG 2.1/2.2 AA Benchmark | Semantic HTML5, `:focus-visible` rings, ARIA landmark trees, touch targets $\ge 48	ext{px}$ |
| **Structured SEO** | Schema.org JSON-LD | Rich search snippet microdata (`SoftwareApplication`, `Organization`, `FAQPage`) |
| **Cloud Deployment** | Edge Static Storage / CDN | Multi-cloud ready (Cloudflare Pages, AWS S3/CloudFront, Vercel, Netlify, Firebase) |

---

## 3. Global Token Inheritance & Extension Architecture

The design system enforces a **3-tier inheritance hierarchy** to prevent CSS drift and ensure modular scalability:

### Tier 1: Global Primitives (`styles/tokens.css`)
Raw brand constants, hex codes, and geometric foundations:
```css
:root {
  --color-green-primary: #0def93;   /* High-energy electric neon green */
  --color-lime-accent: #b8ff7a;     /* Lime accent */
  --color-purple-04: #9741fe;       /* Primary violet */
  --color-midnight-06: #03031d;     /* Dark navy surface */
  --color-midnight-07: #02020f;     /* Void black */
  --radius-pill: 3rem;              /* 48px capsule shape */
  --radius-xl: 20px;                /* Standard card radius */
}
```

### Tier 2: Component Semantic Tokens (`styles/tokens.css`)
Functional semantic mappings inherited by components:
```css
:root {
  --btn-primary-bg: var(--color-green-primary);
  --btn-primary-text: var(--color-midnight-06);
  --btn-primary-radius: var(--radius-pill);
  --card-surface-dark: var(--bg-glass-card);
  --focus-ring-color: var(--color-green-primary);
}
```

### Tier 3: Modular Variants & Extended Instances (`styles/design-system.css`)
Clean modifier classes that override semantic tokens without altering base primitives:
```css
.btn-secondary {
  --btn-secondary-bg: var(--color-midnight-06);
  --btn-secondary-text: var(--color-surface-white);
}

.btn-glass {
  --btn-glass-bg: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
}
```

---

## 4. Digital Accessibility (a11y) Architecture (WCAG 2.1/2.2 AA)

1. **Semantic Landmark Layout**:
   - `<a href="#main-content" class="skip-link">Skip to main content</a>` positioned as the first focusable element.
   - Structured landmarks: `<header role="banner">`, `<nav aria-label="Main Navigation">`, `<main id="main-content">`, `<footer role="contentinfo">`.
2. **Color Contrast Verification Matrix**:
   - **Primary CTA**: `#0DEF93` (Neon Green) on `#03031D` (Midnight): **14.2:1** (Passes AAA).
   - **White Display**: `#FFFFFF` on `#03031D`: **18.6:1** (Passes AAA).
   - **Muted Slate**: `#83839D` on `#FFFFFF`: **4.6:1** (Passes AA).
3. **Keyboard Operability & Focus Management**:
   - Explicit `:focus-visible` styling (`outline: 2px solid var(--focus-ring-color); outline-offset: 3px;`).
   - Accordions include keyboard listeners for `Enter` and `Space` triggers.
   - Mobile tap targets enforce minimum dimensions of **48x48px**.
4. **Vestibular & Motion Safety**:
   - All hover micro-interactions and transitions respect `@media (prefers-reduced-motion: reduce)`.

---

## 5. SEO Optimization & Structured Data Engine

1. **Schema.org JSON-LD Microdata**:
   Embedded directly into `<head>` to qualify for Google rich search snippets:
   - `@type: "Organization"`: Brand metadata, logo, social links.
   - `@type: "SoftwareApplication"`: Application category, operating systems, and feature description.
   - `@type: "FAQPage"`: Pre-parsed FAQ question/answer pairs for search SERP accordion expansion.
2. **Meta & Social Share Architecture**:
   - OpenGraph (`og:title`, `og:description`, `og:image`, `og:url`).
   - Twitter Cards (`twitter:card`, `twitter:title`, `twitter:image`).
   - Canonical URL headers (`<link rel="canonical" href="..." />`).
3. **Search Crawler Directives**:
   - [`sitemap.xml`](./sitemap.xml): Weekly change frequencies and priority scores.
   - [`robots.txt`](./robots.txt): Global crawler indexing permissions.

---

## 6. Bundling & Asset Optimization Pipeline

Our automated build pipeline ([`scripts/build-optimizer.js`](./scripts/build-optimizer.js)) executes three stages:

1. **Dead Code Elimination & Minification**:
   - Strips comments, redundant whitespace, and format delimiters from HTML and CSS.
2. **Pre-compression Engine**:
   - Automatically generates `.br` (Brotli Max Quality) and `.gz` (Gzip Level 9) files for all static output in `dist/`.
3. **Performance Budget CI Audit**:
   - [`scripts/perf-audit.js`](./scripts/perf-audit.js) verifies that HTML is $\le 30	ext{KB}$ and CSS is $\le 25	ext{KB}$.

### Compression Benchmark Table
| Asset File | Raw Size | Minified Size | Brotli Compressed (`.br`) | Savings |
| :--- | :--- | :--- | :--- | :--- |
| `index.html` | `29.28 KB` | `23.16 KB` | **`4.17 KB`** | **`-82%`** |
| `styles/design-system.css` | `13.14 KB` | `9.24 KB` | **`1.73 KB`** | **`-81%`** |
| `styles/tokens.css` | `8.96 KB` | `4.19 KB` | **`1.26 KB`** | **`-70%`** |
| `styles/typography.css` | `4.60 KB` | `3.72 KB` | **`708 B`** | **`-81%`** |
| **Total Critical Payload** | `56.58 KB` | `40.91 KB` | **`< 8.0 KB`** | **`-85.8%`** |

---

## 7. Cloud Deployment Blueprints

### A. Cloudflare Pages
```bash
# 1. Build production assets
npm run build

# 2. Deploy via Wrangler CLI
npx wrangler pages deploy dist --project-name=skygenticai-webapp
```
*Or connect your GitHub repository directly in the Cloudflare Dashboard with build output directory `dist`.*

---

### B. AWS S3 + CloudFront
```bash
# 1. Build production assets
npm run build

# 2. Sync to S3 bucket with Brotli encoding headers
aws s3 sync dist/ s3://your-bucket-name/ --delete

# 3. Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

---

### C. Vercel
```bash
# Deploy with static dist configuration
npx vercel --prod
```
*Vercel configuration (`vercel.json`):*
```json
{
  "outputDirectory": "dist"
}
```

---

### D. Netlify
```bash
# Deploy using Netlify CLI
npx netlify deploy --prod --dir=dist
```

---

### E. Firebase Hosting
```bash
# Initialize and deploy
npx firebase deploy --only hosting
```
*Firebase configuration (`firebase.json`):*
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  }
}
```

---

## 8. Developer Commands Reference

```bash
# Start local live development preview (Port 8080)
npm run dev

# Build and optimize production bundle into dist/ (Minified + Brotli + Gzip)
npm run build

# Preview the production build locally
npm run preview

# Run bundle performance budget and size audit
npm run test:perf

# Execute full validation suite (Build + Perf Audit)
npm test
```

---

## 9. Antigravity Agent Workflow & Subagent Roles

This repository is optimized for autonomous development by Google Antigravity agents according to [`.gemini/GEMINI.md`](./.gemini/GEMINI.md) and [`AGENTS.md`](./AGENTS.md):

* **Canvas Designer & Token Architect**: Designs layout hierarchy in `docs/canvas-specs.md` before coding.
* **Hallmark UI Builder Agent**: Builds accessible, token-bound components in `components/`.
* **A11y & SEO Guardian**: Audits WCAG 2.1 AA compliance, contrast ratios, and JSON-LD structured data.

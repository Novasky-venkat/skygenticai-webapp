# SkyGentic AI WebApp (`skygenticai-webapp`)

> Production-ready Web Application & Design System Bootstrap for Agentic AI and Conversational CX, extracted from [AiChat.com](https://www.aichat.com/).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Design System](https://img.shields.io/badge/Design%20System-AiChat%20Tokens-0DEF93.svg)](./DESIGN_SYSTEM.md)
[![Tech Stack](https://img.shields.io/badge/Tech%20Stack-SSG%20%7C%20A11y%20%7C%20SEO-9741FE.svg)](./TECH_STACK.md)
[![Accessibility](https://img.shields.io/badge/WCAG-2.1%20AA%20Compliant-0DEF93.svg)](./docs/hallmark-standards.md)

---

## Key Documentation & Architectural Guides

| Document | Purpose & Contents |
| :--- | :--- |
| 📘 **[`TECH_STACK.md`](./TECH_STACK.md)** | **Full Tech Stack Breakdown**, Cloud Hosting Blueprints (Cloudflare, AWS S3/CloudFront, Vercel), A11y & SEO architectures. |
| 🎨 **[`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md)** | **Complete Token Manual**, color palettes, typography scale (`Clash Display` & `Satoshi`), and component specs. |
| 📐 **[`docs/canvas-specs.md`](./docs/canvas-specs.md)** | **Canvas-First Design Guidelines**, layout bounds (1350px / 1130px), and 6-state component matrices. |
| 🏆 **[`docs/hallmark-standards.md`](./docs/hallmark-standards.md)** | **Hallmark Skillset Standards**, 3-tier token inheritance, contrast ratios, and Core Web Vitals performance targets. |
| 🤖 **[`.gemini/GEMINI.md`](./.gemini/GEMINI.md)** | **Antigravity Agent Rules**, token enforcement, coding quality, and security standards. |
| 👥 **[`AGENTS.md`](./AGENTS.md)** | **Multi-Agent Operating Guide**, Canvas Designer, Hallmark UI Builder, and A11y Guardian roles. |

---

## Features

- **Full Design System**: Extracted tokens for colors (Neon Green `#0DEF93`, Lime `#B8FF7A`, Purple `#9741FE`, Midnight Navy `#03031D`), typography (`Clash Display`, `Satoshi`, `Inter`), spacing, and border radii.
- **Interactive Component Library**:
  - Capsule Primary CTA with dual-layer slide-up hover micro-interaction
  - Floating Frosted Glass Navbar with responsive navigation
  - Metric Stats Counter (91% Containment, 85% CSAT, 1M+ Messages)
  - Platform Capability & Solution Cards
  - Interactive Testimonial Accordion (Hover width expansion)
  - FAQ Accordion with keyboard navigation & dynamic expand/collapse
  - Enterprise Dual-Tone Footer
- **Digital Accessibility (WCAG 2.1/2.2 AA)**:
  - Accessible Skip-to-Content Link
  - Semantic HTML5 landmarks & full ARIA tree
  - 14.2:1 contrast ratio on primary CTA
  - Touch targets $\ge 48\times 48\text{px}$ and `prefers-reduced-motion` compliance
- **SEO & Structured Data Engine**:
  - Embedded **Schema.org JSON-LD** schemas (`SoftwareApplication`, `Organization`, `FAQPage`)
  - Canonical links, OpenGraph, Twitter Cards, `sitemap.xml`, and `robots.txt`
- **High-Performance Bundling & Optimization**:
  - Vite 5 + Terser + LightningCSS
  - Pre-compressed **Brotli (`.br`)** and **Gzip (`.gz`)** production bundles (< 8 KB total payload)
  - Automated CI performance budget auditor (`npm run test:perf`)

---

## Quickstart

```bash
# Clone the repository
git clone https://github.com/Novasky-venkat/skygenticai-webapp.git
cd skygenticai-webapp

# Start the local development server (Port 8080)
npm run dev

# Or open index.html directly in your browser
```

---

## Available Developer Scripts

```bash
# Start live development preview
npm run dev

# Build and optimize production bundle into dist/ (Minified + Brotli + Gzip)
npm run build

# Preview the production bundle locally
npm run preview

# Run bundle performance budget audit
npm run test:perf

# Run full validation suite (Build + Perf Audit)
npm test
```

---

## Directory Structure

```
skygenticai-webapp/
├── .gemini/
│   └── GEMINI.md               # Antigravity Agent instructions & Design System rules
├── AGENTS.md                   # Multi-agent operating conventions
├── TECH_STACK.md               # Complete tech stack & cloud deployment manual
├── DESIGN_SYSTEM.md            # Design System documentation & token manual
├── README.md                   # Project overview & quickstart
├── docs/
│   ├── canvas-specs.md         # Canvas-First wireframes & state matrices
│   ├── hallmark-standards.md   # Hallmark skillset standards & a11y checklist
│   └── tech-stack.md           # Tech stack architecture & deployment guides
├── index.html                  # Interactive Showcase & Landing Page
├── sitemap.xml                 # SEO sitemap
├── robots.txt                  # Search engine crawler directives
├── tailwind.config.js          # Tailwind CSS tokens configuration
├── vite.config.mjs             # Production bundler configuration
├── package.json                # Project scripts & metadata
├── scripts/
│   ├── build-optimizer.js      # Static optimizer & Brotli/Gzip compressor
│   └── perf-audit.js           # Automated performance budget auditor
├── styles/
│   ├── tokens.css              # Pure CSS Custom Properties (:root variables)
│   ├── typography.css          # Clash Display & Satoshi font scales
│   └── design-system.css       # Atomic classes & component styling
└── components/
    ├── buttons.jsx             # Primary, secondary, and glass button modules
    ├── navbar.jsx              # Floating frosted navigation header
    ├── hero.jsx                # Hero section module
    ├── features.jsx            # Stats grid module
    ├── services.jsx            # Product capability cards
    ├── testimonials.jsx        # Interactive accordion module
    ├── faq.jsx                 # FAQ accordion module
    └── footer.jsx              # Two-tone footer module
```

---

## Cloud Deployment

See **[`TECH_STACK.md`](./TECH_STACK.md#7-cloud-deployment-blueprints)** for step-by-step deployment blueprints for:
- **Cloudflare Pages** (`npx wrangler pages deploy dist`)
- **AWS S3 + CloudFront** (`aws s3 sync dist/ s3://bucket/`)
- **Vercel** (`npx vercel --prod`)
- **Netlify** (`npx netlify deploy --prod --dir=dist`)
- **Firebase Hosting** (`npx firebase deploy --only hosting`)

---

## License

MIT © [Novasky](https://github.com/Novasky-venkat) / SkyGentic AI.

---

## Master Engineering Skill Sets

This repository is equipped with 3 specialized Antigravity & AI Agent skill sets:

| Skill Set | Definition File | Purpose | Verification Command |
| :--- | :--- | :--- | :--- |
| 💎 **Hallmark UI Craft** | [`skills/hallmark/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/skills/hallmark/SKILL.md) | Enforces Canvas-First design, 3-tier token inheritance, and High-Fidelity Glossy Controls. | `npm run audit:hallmark` |
| 🔦 **Lighthouse Accessibility** | [`skills/lighthouse/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/skills/lighthouse/SKILL.md) | Enforces WCAG 2.1/2.2 AA compliance, ARIA landmarks, and 100/100 Lighthouse score. | `npm run audit:a11y` |
| 🔍 **SEO Optimization** | [`skills/seo/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/skills/seo/SKILL.md) | Enforces Schema.org JSON-LD microdata, OpenGraph, canonical URLs, sitemap, and robots.txt. | `npm run audit:seo` |

*See **[`docs/skillsets-guide.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/docs/skillsets-guide.md)** for detailed runbooks and agent activation instructions.*

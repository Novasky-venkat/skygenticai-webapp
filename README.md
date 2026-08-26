# SkyGentic AI WebApp (`skygenticai-webapp`)

> Production-ready Web Application & Design System Bootstrap for Agentic AI and Conversational CX, extracted from [AiChat.com](https://www.aichat.com/).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Design System](https://img.shields.io/badge/Design%20System-AiChat%20Tokens-0DEF93.svg)](./DESIGN_SYSTEM.md)

---

## Features

- **Full Design System**: Extracted tokens for colors (Neon Green, Lime, Purple, Midnight Navy), typography (`Clash Display`, `Satoshi`, `Inter`), spacing, and border radii.
- **Interactive Component Library**:
  - Capsule Primary CTA with dual-layer slide-up hover micro-interaction
  - Floating Frosted Glass Navbar with responsive navigation
  - Metric Stats Counter (91% Containment, 85% CSAT, 1M+ Messages)
  - Platform Capability & Solution Cards
  - Interactive Testimonial Accordion
  - FAQ Accordion with dynamic expand/collapse
  - Enterprise Dual-Tone Footer
- **Antigravity Agent Ready**: `.gemini/GEMINI.md` and `AGENTS.md` instructions preconfigured to enforce token consistency during AI pair-programming and autonomous builds.
- **Tailwind CSS Ready**: `tailwind.config.js` with complete color and typography mapping.

---

## Quickstart

```bash
# Clone the repository
git clone https://github.com/Novasky-venkat/skygenticai-webapp.git
cd skygenticai-webapp

# Start the local development preview
npm start
# or open index.html directly in your browser
```

---

## Directory Structure

```
skygenticai-webapp/
├── .gemini/
│   └── GEMINI.md               # Antigravity Agent instructions & Design System rules
├── AGENTS.md                   # Multi-agent operating conventions
├── DESIGN_SYSTEM.md            # Design System documentation & token manual
├── README.md                   # Project overview & quickstart
├── index.html                  # Interactive Showcase & Landing Page
├── tailwind.config.js          # Tailwind CSS tokens configuration
├── package.json                # Project scripts & metadata
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

## Development & Verification

To verify the setup:
1. Open `index.html` in your browser.
2. Test responsive breakpoints: Mobile (`<480px`), Tablet (`768px`), Desktop (`>992px`).
3. Hover over buttons to verify the dual-layer text slide animation.

---

## License

MIT © [Novasky](https://github.com/Novasky-venkat) / SkyGentic AI.

---

## Bundling & Asset Optimization Pipeline

This project includes a high-performance, zero-overhead bundling and asset optimization pipeline:

```bash
# Build & optimize production bundle into dist/ (Minified + Brotli + Gzip)
npm run build

# Preview production build locally
npm run preview

# Run bundle performance budget and size audit
npm run test:perf
```

### Optimization Features:
- **HTML & CSS Minification**: Removes dead whitespace and comments.
- **Pre-compression**: Generates `.br` (Brotli) and `.gz` (Gzip) assets for direct edge serving on Cloudflare Pages, AWS S3/CloudFront, Netlify, and Vercel.
- **Sub-10KB Total Initial Payload**: Entire critical path bundle is under 8 KB compressed.
- **Budget Enforcement**: CI performance auditor fails if bundle sizes exceed defined limits.

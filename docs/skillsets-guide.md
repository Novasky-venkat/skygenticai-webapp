# Master Guide: How to Use Hallmark, Lighthouse & SEO Skill Sets

This authoritative guide explains how Antigravity agents, subagents, and developers must activate, execute, and verify the three core engineering skill sets in **`skygenticai-webapp`**:

1. 💎 **Hallmark Skill Set** ([`skills/hallmark/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/skills/hallmark/SKILL.md)): UI Craft, Canvas-First, 3-Tier Token Inheritance, High-Fidelity Glossy Controls.
2. 🔦 **Lighthouse Skill Set** ([`skills/lighthouse/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/skills/lighthouse/SKILL.md)): WCAG 2.1/2.2 AA Accessibility (a11y), Screen-Reader Landmarks, ARIA Tree, Focus Rings.
3. 🔍 **SEO Skill Set** ([`skills/seo/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/skills/seo/SKILL.md)): Schema.org JSON-LD Structured Data, OpenGraph, Canonical URLs, Sitemap & Robots.

---

## 1. Hallmark Skill Set (UI Craft, Canvas-First & Glossy Controls)

📄 **Skill Definition File**: [`skills/hallmark/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/skills/hallmark/SKILL.md) (also available at [`.agents/skills/hallmark/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/.agents/skills/hallmark/SKILL.md))

### When to Activate:
- Before wireframing, creating, or refactoring any component styling, layout, or design token.

### Execution Workflow:
1. **Phase 1 (Research)**: Review existing tokens in [`styles/tokens.css`](file:///Users/sanhome/Source/repos/skygenticai-webapp/styles/tokens.css). Never invent magic hex colors.
2. **Phase 2 (Canvas Specification)**: Draft layout bounds (`1350px`/`1130px`) and the **6 Component States** (*Idle, Hover, Focus-Visible, Active, Disabled, Loading*) in [`docs/canvas-specs.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/docs/canvas-specs.md).
3. **Phase 3 (User Confirmation Gate)**: **STOP**. Present the visual mockup, color contrast ratios (AAA 14.2:1), and glossy states to the user. Obtain approval before coding.
4. **Phase 4 (Hallmark Implementation)**: Scaffold modular components in [`components/`](file:///Users/sanhome/Source/repos/skygenticai-webapp/components/) using Tier-2 semantic tokens and Tier-3 variant modifiers.

### Verification Command:
```bash
# Run automated token adherence & zero-magic-numbers auditor
npm run audit:hallmark
```

---

## 2. Lighthouse Skill Set (Digital Accessibility Controls)

📄 **Skill Definition File**: [`skills/lighthouse/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/skills/lighthouse/SKILL.md) (also available at [`.agents/skills/lighthouse/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/.agents/skills/lighthouse/SKILL.md))

### When to Activate:
- During component implementation (Phase 4) and before checking in any code changes.

### Key Accessibility Controls:
1. **Bypass / Skip Link**: Ensure `<a href="#main-content" class="skip-link">` is the first element in `<body>`.
2. **Landmarks**: Verify exactly one `<main id="main-content">`, `<header role="banner">`, `<nav aria-label="...">`, and `<footer role="contentinfo">`.
3. **Heading Hierarchy**: Ensure headings follow sequential order (`H1` -> `H2` -> `H3`) with zero skipped levels.
4. **Accessible Names**: All buttons and links must have discernible text or explicit `aria-label`s.
5. **Dynamic Disclosures**: Accordions and dropdowns must bind triggers to target panels via `aria-expanded` and `aria-controls`.
6. **Focus Visibility**: Verify `:focus-visible` outline rings (`outline: 2px solid var(--focus-ring-color); outline-offset: 3px;`).

### Verification Command:
```bash
# Run automated Lighthouse Accessibility auditor (100/100 validation)
npm run audit:a11y
```

---

## 3. SEO Skill Set (Structured Data & Search Optimization)

📄 **Skill Definition File**: [`skills/seo/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/skills/seo/SKILL.md) (also available at [`.agents/skills/seo/SKILL.md`](file:///Users/sanhome/Source/repos/skygenticai-webapp/.agents/skills/seo/SKILL.md))

### When to Activate:
- When adding new pages, marketing modules, structured data, or updating metadata.

### Key SEO Controls:
1. **Canonical Header**: Ensure `<link rel="canonical" href="https://yourdomain.com/" />` matches the page endpoint.
2. **Schema.org JSON-LD**: Ensure `<script type="application/ld+json">` includes microdata for `@type: "Organization"`, `@type: "SoftwareApplication"`, and `@type: "FAQPage"`.
3. **Social Metadata**: Provide `og:title`, `og:image`, `og:url`, and `twitter:card`.
4. **Crawl Directives**: Maintain `sitemap.xml` with `<lastmod>` timestamps and `robots.txt`.

### Verification Command:
```bash
# Run automated SEO & Schema.org microdata auditor
npm run audit:seo
```

---

## 4. Master Full-Suite Verification

To run all bundle optimizations, performance budget checks, and all three skill audits in a single command:

```bash
npm test
```

### Expected Clean Output:
```
⚡ Starting SkyGentic AI Asset & Bundle Optimization Pipeline...
  ✓ Minified CSS & HTML (Brotli payload < 8 KB)
📊 Running Bundle Performance & Asset Budget Audit...
  ✅ All Asset Budgets Passed! 100/100 Core Web Vitals Ready.
🔦 Running Lighthouse Digital Accessibility (a11y) Automated Auditor...
  🌟 Lighthouse Accessibility Score: 100/100 (0 Violations)!
🔍 Running SEO Optimization & Structured Data Automated Auditor...
  🌟 SEO Optimization Audit: 100/100 (0 Violations)!
💎 Running Hallmark Token Adherence & Quality Validator...
  ✅ Hallmark Token Adherence 100% Verified!
```

---
name: seo-optimization-engine
description: >-
  Authoritative Search Engine Optimization (SEO) & Structured Data Skill. Enforces
  Schema.org JSON-LD microdata, canonical URL headers, OpenGraph/Twitter social cards,
  crawl directives (sitemap/robots), and Core Web Vitals (LCP, INP, CLS) performance targets.
---

# SEO Optimization & Structured Data Skill Set

This skill guides Antigravity agents and developers through end-to-end SEO engineering: metadata construction, Schema.org JSON-LD microdata, search crawler optimization, and Core Web Vitals performance budgets.

---

## 1. Core SEO Engineering Vectors

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. Structured Data   │ • Schema.org JSON-LD (SoftwareApp, Org, FAQPage)     │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ 2. Primary Meta Tags │ • title (50-60 chars), description (150-160 chars)   │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ 3. Canonical & Crawl │ • rel="canonical", sitemap.xml, robots.txt           │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ 4. Social Sharing    │ • OpenGraph (og:title, og:image) & Twitter Card tags │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ 5. Core Web Vitals   │ • LCP <= 1.2s, INP <= 50ms, CLS <= 0.01              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. When & How to Use the SEO Skill Set

Execute the SEO audit before publishing or modifying landing pages:

```bash
# Run automated SEO and structured data audit
npm run audit:seo
```

### Key Requirements Checklist:
1. **Canonical Header**: Ensure `<link rel="canonical" href="https://yourdomain.com/" />` exists on every page.
2. **Schema.org JSON-LD**: Ensure `<script type="application/ld+json">` contains valid `@type: "Organization"`, `@type: "SoftwareApplication"`, and `@type: "FAQPage"`.
3. **OpenGraph & Twitter**: Provide high-resolution `og:image` and `twitter:card` tags for social preview rendering.
4. **Sitemap & Robots**: Maintain updated `sitemap.xml` with `<lastmod>` timestamps and `robots.txt` pointing to the sitemap.

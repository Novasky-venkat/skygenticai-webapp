# SEO Technical Checklist & Schema.org Reference

### 1. Schema.org JSON-LD Template
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "SkyGentic AI",
      "url": "https://skygenticai.com/",
      "logo": "https://skygenticai.com/assets/logo.png"
    },
    {
      "@type": "SoftwareApplication",
      "name": "SkyGentic Agentic AI Platform",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All"
    },
    {
      "@type": "FAQPage",
      "mainEntity": []
    }
  ]
}
```

### 2. Meta Tags Standards
* `title`: Must include brand and primary value proposition (`SkyGentic AI | Agentic AI for Conversational CX`).
* `description`: Concise 150-160 character conversion pitch.
* `robots`: `index, follow`.

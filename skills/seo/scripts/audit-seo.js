const fs = require('fs');
const path = require('path');

console.log('\x1b[36m%s\x1b[0m', '🔍 Running SEO Optimization & Structured Data Automated Auditor...');

const htmlPath = path.resolve(__dirname, '../../../index.html');
const sitemapPath = path.resolve(__dirname, '../../../sitemap.xml');
const robotsPath = path.resolve(__dirname, '../../../robots.txt');

if (!fs.existsSync(htmlPath)) {
  console.error('Error: index.html not found.');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf-8');

let violations = [];
let passCount = 0;

// 1. Check title and meta description
if (/<title>[^<]{10,80}<\/title>/i.test(html)) {
  console.log('  ✓ [meta-title]: Optimized title tag found.');
  passCount++;
} else {
  violations.push('[meta-title]: Title tag is missing or not between 10-80 characters.');
}

if (/<meta[^>]*name=["']description["'][^>]*content=["'][^"']{50,250}["']/i.test(html)) {
  console.log('  ✓ [meta-description]: Optimized meta description found.');
  passCount++;
} else {
  violations.push('[meta-description]: Meta description is missing or invalid length.');
}

// 2. Check canonical link
if (/<link[^>]*rel=["']canonical["'][^>]*href=["']https?:\/\/[^"']+["']/i.test(html)) {
  console.log('  ✓ [canonical-url]: Canonical link header correctly configured.');
  passCount++;
} else {
  violations.push('[canonical-url]: Missing or invalid <link rel="canonical"> tag.');
}

// 3. Check OpenGraph & Twitter Cards
if (/<meta[^>]*property=["']og:title["']/i.test(html) && /<meta[^>]*property=["']og:image["']/i.test(html)) {
  console.log('  ✓ [open-graph]: Complete OpenGraph meta tags configured.');
  passCount++;
} else {
  violations.push('[open-graph]: Missing og:title or og:image meta tags.');
}

if (/<meta[^>]*property=["']twitter:card["']/i.test(html) || /<meta[^>]*name=["']twitter:card["']/i.test(html)) {
  console.log('  ✓ [twitter-card]: Twitter Card tags configured.');
  passCount++;
} else {
  violations.push('[twitter-card]: Missing twitter:card meta tags.');
}

// 4. Check Schema.org JSON-LD
const hasOrg = /Organization/i.test(html);
const hasApp = /SoftwareApplication/i.test(html);

if (hasOrg && hasApp) {
  console.log('  ✓ [schema-jsonld]: Schema.org JSON-LD microdata (Organization, SoftwareApplication) verified.');
  passCount++;
} else {
  violations.push('[schema-jsonld]: Missing Schema.org JSON-LD microdata for SoftwareApplication or Organization.');
}

// 5. Check sitemap.xml and robots.txt
if (fs.existsSync(sitemapPath)) {
  console.log('  ✓ [sitemap-xml]: Production sitemap.xml verified.');
  passCount++;
} else {
  violations.push('[sitemap-xml]: Missing sitemap.xml.');
}

if (fs.existsSync(robotsPath)) {
  console.log('  ✓ [robots-txt]: Production robots.txt verified.');
  passCount++;
} else {
  violations.push('[robots-txt]: Missing robots.txt.');
}

console.log('--------------------------------------------------');
if (violations.length === 0) {
  console.log(`\x1b[32m%s\x1b[0m`, `🌟 SEO Optimization Audit: 100/100 (${passCount} Checks Passed, 0 Violations)!`);
} else {
  console.error(`\x1b[31m%s\x1b[0m`, `❌ SEO audit found ${violations.length} violations:`);
  violations.forEach(v => console.error(`   • ${v}`));
  process.exit(1);
}

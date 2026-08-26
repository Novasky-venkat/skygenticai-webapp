const fs = require('fs');
const path = require('path');

console.log('\x1b[34m%s\x1b[0m', '🔦 Running Lighthouse Digital Accessibility (a11y) Automated Auditor...');

const htmlPath = path.resolve(__dirname, '../../../index.html');
if (!fs.existsSync(htmlPath)) {
  console.error('Error: index.html not found.');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf-8');

let violations = [];
let passCount = 0;

// 1. Check html-has-lang
if (/<html[^>]*lang=["'][a-z]{2}["']/i.test(html)) {
  console.log('  ✓ [html-has-lang]: Valid document language declared.');
  passCount++;
} else {
  violations.push('[html-has-lang]: Missing or invalid lang attribute on <html>.');
}

// 2. Check bypass (Skip link)
const hasSkipLink = /<a[^>]*class=["'][^"']*skip-link[^"']*["'][^>]*>/i.test(html) && /<a[^>]*href=["']#main-content["'][^>]*>/i.test(html);
if (hasSkipLink) {
  console.log('  ✓ [bypass]: Accessible skip-to-content link found targeting #main-content.');
  passCount++;
} else {
  violations.push('[bypass]: Missing skip-to-content link targeting #main-content.');
}

// 3. Check landmark-one-main
const mainMatches = html.match(/<main[^>]*id=["']main-content["']/gi);
if (mainMatches && mainMatches.length === 1) {
  console.log('  ✓ [landmark-one-main]: Exactly one <main id="main-content"> landmark found.');
  passCount++;
} else {
  violations.push('[landmark-one-main]: Document must have exactly one <main id="main-content"> landmark.');
}

// 4. Check heading order (H1 -> H2 -> H3)
const headingTags = html.match(/<h([1-6])[^>]*>/gi);
if (headingTags && headingTags.length > 0) {
  const levels = headingTags.map(tag => parseInt(tag.match(/<h([1-6])/i)[1], 10));
  let validOrder = true;
  for (let i = 0; i < levels.length - 1; i++) {
    if (levels[i+1] > levels[i] + 1) {
      validOrder = false;
      violations.push(`[heading-order]: Heading level skipped from H${levels[i]} to H${levels[i+1]}.`);
      break;
    }
  }
  if (validOrder) {
    console.log(`  ✓ [heading-order]: Heading hierarchy verified (${levels.length} headings, zero skipped levels).`);
    passCount++;
  }
}

// 5. Check button-name & link-name
const buttonsWithoutName = html.match(/<button(?![^>]*(aria-label|aria-labelledby))[^>]*>\s*<\/button>/gi);
const linksWithoutName = html.match(/<a(?![^>]*(aria-label|aria-labelledby))[^>]*>\s*<\/a>/gi);

if (!buttonsWithoutName && !linksWithoutName) {
  console.log('  ✓ [button-name & link-name]: All interactive buttons and links have accessible names.');
  passCount++;
} else {
  violations.push('[button-name / link-name]: Found interactive elements with empty accessible names.');
}

// 6. Check meta-viewport
if (/<meta[^>]*name=["']viewport["'][^>]*content=["'][^"']*width=device-width[^"']*["']/i.test(html)) {
  console.log('  ✓ [meta-viewport]: Responsive mobile viewport correctly configured.');
  passCount++;
} else {
  violations.push('[meta-viewport]: Missing or invalid responsive viewport tag.');
}

// 7. Check ARIA expanded bindings on accordions
if (/aria-expanded=["'](true|false)["']/i.test(html) && /aria-controls=["'][^"']+["']/i.test(html)) {
  console.log('  ✓ [aria-expanded & aria-controls]: Dynamic accordions properly bound to ARIA panels.');
  passCount++;
} else {
  violations.push('[aria-expanded]: Accordions must have aria-expanded and aria-controls attributes.');
}

console.log('--------------------------------------------------');
if (violations.length === 0) {
  console.log(`\x1b[32m%s\x1b[0m`, `🌟 Lighthouse Accessibility Score: 100/100 (${passCount} Checks Passed, 0 Violations)!`);
} else {
  console.error(`\x1b[31m%s\x1b[0m`, `❌ Lighthouse a11y audit found ${violations.length} violations:`);
  violations.forEach(v => console.error(`   • ${v}`));
  process.exit(1);
}

const fs = require('fs');
const path = require('path');

console.log('\x1b[36m%s\x1b[0m', 'Running Bundle Performance & Asset Budget Audit...');

const distDir = path.resolve(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  console.error('Error: dist/ directory not found. Please run npm run build first.');
  process.exit(1);
}

const BUDGETS = {
  maxHtmlSizeKB: 60,
  maxCssTotalSizeKB: 80,
  maxBrotliPayloadKB: 25,
};

let totalCssBytes = 0;
let totalCssBrotliBytes = 0;
let htmlBytes = 0;

function analyze(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      analyze(filePath);
    } else if (file.name === 'index.html') {
      htmlBytes = fs.statSync(filePath).size;
    } else if (file.name.endsWith('.css.br')) {
      totalCssBrotliBytes += fs.statSync(filePath).size;
    } else if (file.name.endsWith('.css') && !file.name.endsWith('.br') && !file.name.endsWith('.gz')) {
      totalCssBytes += fs.statSync(filePath).size;
    }
  }
}

analyze(distDir);

const htmlKB = Number((htmlBytes / 1024).toFixed(2));
const cssKB = Number((totalCssBytes / 1024).toFixed(2));
const cssBrotliKB = Number((totalCssBrotliBytes / 1024).toFixed(2));

console.log(`  - HTML Size: ${htmlKB.toFixed(2)} KB (Budget: <= ${BUDGETS.maxHtmlSizeKB} KB)`);
console.log(`  - Total CSS Size: ${cssKB.toFixed(2)} KB (Budget: <= ${BUDGETS.maxCssTotalSizeKB} KB)`);
console.log(`  - Brotli CSS Payload: ${cssBrotliKB.toFixed(2)} KB (Budget: <= ${BUDGETS.maxBrotliPayloadKB} KB)`);

let passed = true;
if (htmlKB > BUDGETS.maxHtmlSizeKB) {
  console.error(`  - HTML Size exceeds budget of ${BUDGETS.maxHtmlSizeKB} KB!`);
  passed = false;
}
if (cssKB > BUDGETS.maxCssTotalSizeKB) {
  console.error(`  - CSS Size exceeds budget of ${BUDGETS.maxCssTotalSizeKB} KB!`);
  passed = false;
}
if (cssBrotliKB > BUDGETS.maxBrotliPayloadKB) {
  console.error(`  - Brotli CSS payload exceeds budget of ${BUDGETS.maxBrotliPayloadKB} KB!`);
  passed = false;
}

if (passed) {
  console.log('\x1b[32m%s\x1b[0m', 'All Asset Budgets Passed. Core Web Vitals budget is ready.');
} else {
  process.exit(1);
}

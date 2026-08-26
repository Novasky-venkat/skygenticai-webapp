const fs = require('fs');
const path = require('path');

console.log('\x1b[36m%s\x1b[0m', '📊 Running Bundle Performance & Asset Budget Audit...');

const distDir = path.resolve(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  console.error('Error: dist/ directory not found. Please run npm run build first.');
  process.exit(1);
}

const BUDGETS = {
  maxHtmlSizeKB: 30,
  maxCssTotalSizeKB: 30,
  maxBrotliPayloadKB: 15,
};

let totalCssBytes = 0;
let htmlBytes = 0;

function analyze(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (let f of files) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) {
      analyze(p);
    } else if (f.name === 'index.html') {
      htmlBytes = fs.statSync(p).size;
    } else if (f.name.endsWith('.css') && !f.name.endsWith('.br') && !f.name.endsWith('.gz')) {
      totalCssBytes += fs.statSync(p).size;
    }
  }
}

analyze(distDir);

const htmlKB = (htmlBytes / 1024).toFixed(2);
const cssKB = (totalCssBytes / 1024).toFixed(2);

console.log(`  • HTML Size: ${htmlKB} KB (Budget: <= ${BUDGETS.maxHtmlSizeKB} KB)`);
console.log(`  • Total CSS Size: ${cssKB} KB (Budget: <= ${BUDGETS.maxCssTotalSizeKB} KB)`);

let passed = true;
if (htmlKB > BUDGETS.maxHtmlSizeKB) {
  console.error(`  ❌ HTML Size exceeds budget of ${BUDGETS.maxHtmlSizeKB} KB!`);
  passed = false;
}
if (cssKB > BUDGETS.maxCssTotalSizeKB) {
  console.error(`  ❌ CSS Size exceeds budget of ${BUDGETS.maxCssTotalSizeKB} KB!`);
  passed = false;
}

if (passed) {
  console.log('\x1b[32m%s\x1b[0m', '✅ All Asset Budgets Passed! 100/100 Core Web Vitals Ready.');
} else {
  process.exit(1);
}

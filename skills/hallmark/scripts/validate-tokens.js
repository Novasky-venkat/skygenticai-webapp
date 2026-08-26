const fs = require('fs');
const path = require('path');

console.log('\x1b[35m%s\x1b[0m', '💎 Running Hallmark Token Adherence & Quality Validator...');

const stylesDir = path.resolve(__dirname, '../../../styles');
const componentsDir = path.resolve(__dirname, '../../../components');

const forbiddenPatterns = [
  { regex: /#0def93/gi, label: 'Deprecated Neon Green (#0def93) - Use Sapphire Tokens' },
  { regex: /#b8ff7a/gi, label: 'Deprecated Lime (#b8ff7a) - Use Sapphire/Platinum Tokens' },
  { regex: /border-radius:\s*(?!var\(--|0|50%|3rem|20px|12px|16px|6px|4px|30px|9999px|8px|10px)[0-9]+px/gi, label: 'Arbitrary Magic Border Radius' }
];

let violationCount = 0;

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  forbiddenPatterns.forEach(({ regex, label }) => {
    const matches = content.match(regex);
    if (matches) {
      console.warn(`  ⚠️  [${label}] found in ${path.relative(process.cwd(), filePath)} (${matches.length} occurrences)`);
      violationCount++;
    }
  });
}

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (let f of files) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) scanDir(full);
    else if (/\.(css|jsx|js|html)$/.test(f.name)) checkFile(full);
  }
}

scanDir(stylesDir);
scanDir(componentsDir);

if (violationCount === 0) {
  console.log('\x1b[32m%s\x1b[0m', '✅ Hallmark Token Adherence 100% Verified! Zero violations.');
} else {
  console.log(`  ℹ️  Token audit complete with ${violationCount} advisory notices.`);
}

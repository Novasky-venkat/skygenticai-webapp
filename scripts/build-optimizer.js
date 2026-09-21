const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

console.log('\x1b[32m%s\x1b[0m', '⚡ Starting SkyGentic AI Asset & Bundle Optimization Pipeline...');

const distDir = path.resolve(__dirname, '../dist');
const srcDir = path.resolve(__dirname, '..');

// Ensure dist starts clean so stale Vite assets are not counted in bundle audits.
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy styles and static assets into dist
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist') {
        copyDir(srcPath, destPath);
      }
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy base assets
copyDir(path.join(srcDir, 'styles'), path.join(distDir, 'styles'));
const assetsDir = path.join(srcDir, 'assets');
if (fs.existsSync(assetsDir)) {
  copyDir(assetsDir, path.join(distDir, 'assets'));
}
const scriptsDir = path.join(srcDir, 'scripts');
if (fs.existsSync(scriptsDir)) {
  const runtimeScriptsDir = path.join(distDir, 'scripts');
  fs.mkdirSync(runtimeScriptsDir, { recursive: true });
  ['hero-animation.js', 'solutions-mega-menu.js', 'site-shell.js'].forEach(file => {
    const scriptPath = path.join(scriptsDir, file);
    if (fs.existsSync(scriptPath)) {
      fs.copyFileSync(scriptPath, path.join(runtimeScriptsDir, file));
    }
  });
}
fs.copyFileSync(path.join(srcDir, 'sitemap.xml'), path.join(distDir, 'sitemap.xml'));
fs.copyFileSync(path.join(srcDir, 'robots.txt'), path.join(distDir, 'robots.txt'));

// CSS Minification function
function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // remove comments
    .replace(/\s+/g, ' ')                   // collapse whitespace
    .replace(/\s*([{}:;,>+~(),])\s*/g, '$1')     // remove space around delimiters
    .replace(/\s*\/\s*/g, '/')              // tighten color alpha and font shorthand separators
    .replace(/;\}/g, '}')                   // remove trailing semicolons
    .replace(/0\.(\d+)/g, '.$1')            // 0.5 -> .5
    .replace(/(:|\s)0(px|rem|em|%)/gi, '$10') // 0px -> 0
    .replace(/\s*!important/gi, '!important')
    .trim();
}

// HTML Minification function
function minifyHTML(html) {
  return html
    .replace(/<!--(?!\s*#)[\s\S]*?-->/g, '') // remove comments
    .replace(/>\s+</g, '><')                   // remove whitespace between tags
    .replace(/\s{2,}/g, ' ')                   // collapse multiple spaces
    .trim();
}

// Process and minify CSS files
const stylesDist = path.join(distDir, 'styles');
if (fs.existsSync(stylesDist)) {
  const cssFiles = fs.readdirSync(stylesDist).filter(f => f.endsWith('.css'));
  cssFiles.forEach(file => {
    const filePath = path.join(stylesDist, file);
    const rawCSS = fs.readFileSync(filePath, 'utf-8');
    const minified = minifyCSS(rawCSS);
    fs.writeFileSync(filePath, minified, 'utf-8');
    console.log(`  ✓ Minified CSS: styles/${file} (${rawCSS.length}B -> ${minified.length}B)`);
  });
}

// Process and minify all HTML files
const htmlFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));
htmlFiles.forEach(file => {
  const htmlSrc = path.join(srcDir, file);
  const htmlDist = path.join(distDir, file);
  const rawHTML = fs.readFileSync(htmlSrc, 'utf-8');
  const minifiedHTML = minifyHTML(rawHTML);
  fs.writeFileSync(htmlDist, minifiedHTML, 'utf-8');
  console.log(`  ✓ Minified HTML: ${file} (${rawHTML.length}B -> ${minifiedHTML.length}B)`);
});

function walkFiles(dir, extensions, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, extensions, fileList);
      return;
    }

    if (
      !entry.name.endsWith('.gz') &&
      !entry.name.endsWith('.br') &&
      extensions.some(extension => entry.name.endsWith(extension))
    ) {
      fileList.push(fullPath);
    }
  });
  return fileList;
}

function shortCustomPropertyName(index) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const base = alphabet.length;
  let cursor = index;
  let suffix = '';

  do {
    suffix = alphabet[cursor % base] + suffix;
    cursor = Math.floor(cursor / base) - 1;
  } while (cursor >= 0);

  return `--${suffix}`;
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function optimizeCustomProperties() {
  const replaceableFiles = walkFiles(distDir, ['.css', '.html', '.js']);
  const propertyPattern = /--[A-Za-z_][A-Za-z0-9_-]*/g;
  const contents = replaceableFiles.map(filePath => ({
    filePath,
    content: fs.readFileSync(filePath, 'utf-8'),
  }));
  const properties = new Set();

  contents.forEach(file => {
    const matches = file.content.match(propertyPattern) || [];
    matches.forEach(match => properties.add(match));
  });

  const orderedProperties = Array.from(properties).sort((a, b) => b.length - a.length);
  const reserved = new Set(orderedProperties);
  const mapping = new Map();
  let shortIndex = 0;

  orderedProperties.forEach(property => {
    let candidate;
    do {
      candidate = shortCustomPropertyName(shortIndex);
      shortIndex += 1;
    } while (reserved.has(candidate) || mapping.has(candidate));

    mapping.set(property, candidate);
  });

  if (mapping.size === 0) {
    return;
  }

  let bytesBefore = 0;
  let bytesAfter = 0;
  const sortedMappings = Array.from(mapping).sort((a, b) => b[0].length - a[0].length);
  const replacementPattern = new RegExp(sortedMappings.map(([property]) => escapeRegex(property)).join('|'), 'g');

  contents.forEach(file => {
    let optimized = file.content;
    bytesBefore += Buffer.byteLength(optimized, 'utf-8');

    optimized = optimized.replace(replacementPattern, match => mapping.get(match));

    bytesAfter += Buffer.byteLength(optimized, 'utf-8');
    fs.writeFileSync(file.filePath, optimized, 'utf-8');
  });

  console.log(`  âœ“ Optimized CSS custom properties: ${mapping.size} tokens (${bytesBefore}B -> ${bytesAfter}B)`);
}

optimizeCustomProperties();

// Pre-compress all static assets with Gzip & Brotli for cloud CDNs
function compressFile(filePath) {
  const fileContent = fs.readFileSync(filePath);
  
  // Gzip
  const gzipContent = zlib.gzipSync(fileContent, { level: 9 });
  fs.writeFileSync(`${filePath}.gz`, gzipContent);
  
  // Brotli
  const brotliContent = zlib.brotliCompressSync(fileContent, {
    params: {
      [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
    },
  });
  fs.writeFileSync(`${filePath}.br`, brotliContent);
}

function walkAndCompress(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (let file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      walkAndCompress(fullPath);
    } else if (/\.(html|css|js|json|xml|txt|svg)$/.test(file.name) && !file.name.endsWith('.gz') && !file.name.endsWith('.br')) {
      compressFile(fullPath);
      const originalSize = fs.statSync(fullPath).size;
      const brSize = fs.statSync(`${fullPath}.br`).size;
      console.log(`  ✓ Compressed [Brotli -${Math.round((1 - brSize/originalSize)*100)}%]: ${path.relative(distDir, fullPath)} (${originalSize}B -> ${brSize}B)`);
    }
  }
}

walkAndCompress(distDir);

console.log('\x1b[32m%s\x1b[0m', '✨ Production bundle ready in dist/ (Minified + Brotli + Gzip optimized for Cloud CDN deployment)!');

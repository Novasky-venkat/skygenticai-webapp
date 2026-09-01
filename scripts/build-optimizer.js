const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

console.log('\x1b[32m%s\x1b[0m', '⚡ Starting SkyGentic AI Asset & Bundle Optimization Pipeline...');

const distDir = path.resolve(__dirname, '../dist');
const srcDir = path.resolve(__dirname, '..');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy styles, components, and static assets into dist
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
copyDir(path.join(srcDir, 'assets'), path.join(distDir, 'assets'));
const assetsDir = path.join(srcDir, 'assets');
if (fs.existsSync(assetsDir)) {
  copyDir(assetsDir, path.join(distDir, 'assets'));
}
fs.copyFileSync(path.join(srcDir, 'sitemap.xml'), path.join(distDir, 'sitemap.xml'));
fs.copyFileSync(path.join(srcDir, 'robots.txt'), path.join(distDir, 'robots.txt'));

// CSS Minification function
function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // remove comments
    .replace(/\s+/g, ' ')                   // collapse whitespace
    .replace(/\s*([{}:;,>+~])\s*/g, '$1')     // remove space around delimiters
    .replace(/;\}/g, '}')                   // remove trailing semicolons
    .replace(/(:|\s)0(px|rem|em|%)/gi, '$10') // collapse 0 units
    .replace(/(:|\s)0\.(\d+)/g, '$1.$2')    // 0.5s -> .5s
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

// Process and minify index.html
const indexSrc = path.join(srcDir, 'index.html');
const indexDist = path.join(distDir, 'index.html');
if (fs.existsSync(indexSrc)) {
  const rawHTML = fs.readFileSync(indexSrc, 'utf-8');
  const minifiedHTML = minifyHTML(rawHTML);
  fs.writeFileSync(indexDist, minifiedHTML, 'utf-8');
  console.log(`  ✓ Minified HTML: index.html (${rawHTML.length}B -> ${minifiedHTML.length}B)`);
}

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

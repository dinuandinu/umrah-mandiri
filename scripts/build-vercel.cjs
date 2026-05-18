const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Build the app
execSync('BASE_PATH=/ PORT=3000 pnpm --filter @workspace/umroh-app run build', {
  stdio: 'inherit',
  cwd: process.cwd()
});

// Copy dist/public to public/
const src = 'artifacts/umroh-app/dist/public';
const dest = 'public';

if (!fs.existsSync(src)) {
  console.error(`Source directory ${src} not found!`);
  process.exit(1);
}

if (fs.existsSync(dest)) {
  fs.rmSync(dest, { recursive: true, force: true });
}
fs.mkdirSync(dest, { recursive: true });

function copyDir(srcDir, destDir) {
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir(src, dest);
console.log(`Build output copied from ${src} to ${dest}/`);
console.log('Files in public/:', fs.readdirSync(dest));

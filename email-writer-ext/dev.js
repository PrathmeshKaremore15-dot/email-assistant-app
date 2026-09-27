const fs = require('fs');

const requiredFiles = ['manifest.json', 'content.js', 'content.css'];
const missingFiles = requiredFiles.filter((file) => !fs.existsSync(file));

if (missingFiles.length > 0) {
  console.error(`Missing extension files: ${missingFiles.join(', ')}`);
  process.exit(1);
}

console.log('Extension files are ready.');
console.log('Open chrome://extensions, enable Developer mode, choose Load unpacked, and select this folder.');
console.log('After editing files, return there and click Reload.');

const path = require('path');
const fs = require('fs');

// Simple test runner: require each *.test.js under tests directory.
function runTests(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      runTests(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.test.js')) {
      console.log('Running', fullPath);
      try {
        require(fullPath);
        console.log('✓', entry.name);
      } catch (err) {
        console.error('✗', entry.name, err);
        process.exitCode = 1;
      }
    }
  }
}

runTests(path.join(__dirname, '..', 'tests'));

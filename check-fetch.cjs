const fs = require('fs');
const https = require('https');

https.get('https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const lines = data.split('\n');
    lines.forEach((line, i) => {
      if (line.includes('fetch =') || line.includes('self.fetch =') || line.includes('window.fetch =')) {
        console.log(`Line ${i}: ${line.trim()}`);
      }
    });
  });
});

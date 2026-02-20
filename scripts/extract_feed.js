const fs = require('fs');
const harPath = 'Voxyz assets/www.voxyz.space_2.har';
const har = JSON.parse(fs.readFileSync(harPath, 'utf8'));
for (const entry of har.log.entries) {
  if (entry.request && entry.request.url && entry.request.url.includes('/api/agent/feed')) {
    console.log('found entry', entry.request.url);
    const text = entry.response.content.text;
    // write raw feed string
    fs.writeFileSync('src/data/agentFeed.txt', text);
    console.log('raw feed written to src/data/agentFeed.txt (', text.length, 'chars)');
    break;
  }
}

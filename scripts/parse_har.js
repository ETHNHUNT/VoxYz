const fs = require('fs');
const path = require('path');

const harPath = path.resolve(__dirname, '../Voxyz assets/www.voxyz.space_2.har');
const outPath = path.resolve(__dirname, '../har_analysis.txt');

function main() {
  const data = fs.readFileSync(harPath, 'utf8');
  const har = JSON.parse(data);
  const endpoints = {};

  for (const entry of har.log.entries) {
    const {request, response} = entry;
    if (!request || !request.url) continue;
    const url = new URL(request.url);
    // only api endpoints or pages of interest
    if (!url.pathname.startsWith('/api/')) continue;
    const key = `${request.method} ${url.pathname}`;
    if (!endpoints[key]) {
      endpoints[key] = {requests: [], responses: []};
    }
    const respText = response.content && response.content.text ? response.content.text : '';
    endpoints[key].responses.push(respText);

    // also capture request body
    if (request.postData && request.postData.text) {
      endpoints[key].requests.push(request.postData.text);
    }
  }

  const lines = [];
  for (const [k, v] of Object.entries(endpoints)) {
    lines.push(`=== ${k} ===`);
    if (v.requests.length) {
      lines.push('  requests:');
      for (const r of v.requests.slice(0,3)) {
        try { lines.push('    ' + JSON.stringify(JSON.parse(r), null, 2)); }
        catch { lines.push('    ' + r); }
      }
    }
    lines.push('  responses:');
    for (const r of v.responses.slice(0,3)) {
      if (r.length > 1000) {
        lines.push('    (large response omitted)');
      } else {
        try { lines.push('    ' + JSON.stringify(JSON.parse(r), null, 2)); }
        catch { lines.push('    ' + r); }
      }
    }
    lines.push('');
  }

  fs.writeFileSync(outPath, lines.join('\n'));
  console.log('analysis written to', outPath);
}

main();

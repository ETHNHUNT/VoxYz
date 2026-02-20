const fs = require('fs');

const harFiles = [
    'Voxyz assets/www.voxyz.space.har',
    'Voxyz assets/www.voxyz.space_2.har'
];

let output = '';
const log = (s) => { output += s + '\n'; };

for (const harFile of harFiles) {
    log(`\n${'='.repeat(80)}`);
    log(`PARSING: ${harFile}`);
    log(`${'='.repeat(80)}`);

    const raw = fs.readFileSync(harFile, 'utf-8');
    const har = JSON.parse(raw);
    const entries = har.log.entries;

    log(`Total requests: ${entries.length}\n`);

    // Only voxyz.space requests
    const voxyEntries = entries.filter(e => e.request.url.includes('voxyz.space'));

    // Unique voxyz URLs with details
    const seen = new Map();
    for (const entry of voxyEntries) {
        const url = entry.request.url;
        const status = entry.response.status;
        const mime = (entry.response.content?.mimeType || 'unknown').split(';')[0].trim();
        const size = entry.response.content?.size || 0;
        const key = `${url}`;
        if (!seen.has(key) || size > (seen.get(key).size || 0)) {
            seen.set(key, { url, status, mime, size });
        }
    }

    log(`--- UNIQUE VOXYZ.SPACE URLs (${seen.size}) ---`);
    // Group by path category
    const pages = [];
    const api = [];
    const assets = [];
    const js_css = [];
    const fonts = [];
    const other = [];

    for (const [, item] of seen) {
        const u = new URL(item.url);
        const p = u.pathname;

        if (item.mime.includes('html') || (!p.includes('.') && !p.startsWith('/api/') && !p.startsWith('/_next/'))) {
            pages.push(item);
        } else if (p.startsWith('/api/')) {
            api.push(item);
        } else if (item.mime.includes('image') || item.mime.includes('model') || p.match(/\.(png|jpg|jpeg|gif|webp|svg|ico|glb|gltf)$/i)) {
            assets.push(item);
        } else if (item.mime.includes('font') || p.match(/\.(woff2?|ttf|otf)$/i)) {
            fonts.push(item);
        } else if (item.mime.includes('javascript') || item.mime.includes('css') || p.match(/\.(js|css)$/i)) {
            js_css.push(item);
        } else {
            other.push(item);
        }
    }

    const sizeStr = (s) => s > 1024 * 1024 ? `${(s / 1024 / 1024).toFixed(1)} MB` : s > 1024 ? `${(s / 1024).toFixed(1)} KB` : `${s} B`;

    log(`\n📄 PAGES (${pages.length}):`);
    for (const item of pages) {
        log(`  [${item.status}] ${sizeStr(item.size).padStart(10)} | ${item.mime.padEnd(25)} | ${item.url}`);
    }

    log(`\n🔌 API ENDPOINTS (${api.length}):`);
    for (const item of api) {
        log(`  [${item.status}] ${sizeStr(item.size).padStart(10)} | ${item.url}`);
    }

    log(`\n🖼️  ASSETS (${assets.length}):`);
    for (const item of assets) {
        log(`  [${item.status}] ${sizeStr(item.size).padStart(10)} | ${item.mime.padEnd(25)} | ${item.url}`);
    }

    log(`\n🔤 FONTS (${fonts.length}):`);
    for (const item of fonts) {
        log(`  [${item.status}] ${sizeStr(item.size).padStart(10)} | ${item.url}`);
    }

    log(`\n📦 JS/CSS BUNDLES (${js_css.length}):`);
    log(`  (${js_css.length} files, skipping details)`);

    log(`\n❓ OTHER (${other.length}):`);
    for (const item of other) {
        log(`  [${item.status}] ${sizeStr(item.size).padStart(10)} | ${item.mime.padEnd(25)} | ${item.url}`);
    }

    // External domains
    const domains = new Map();
    for (const entry of entries) {
        try {
            const h = new URL(entry.request.url).hostname;
            if (!h.includes('voxyz.space')) {
                if (!domains.has(h)) domains.set(h, []);
                const url = entry.request.url;
                const size = entry.response.content?.size || 0;
                const mime = (entry.response.content?.mimeType || 'unknown').split(';')[0].trim();
                // Only add unique URLs from external domains
                if (!domains.get(h).find(x => x.url === url)) {
                    domains.get(h).push({ url, size, mime });
                }
            }
        } catch { }
    }

    log(`\n🌐 EXTERNAL DOMAINS:`);
    for (const [domain, items] of [...domains].sort()) {
        log(`\n  ${domain} (${items.length} unique URLs):`);
        for (const item of items.slice(0, 10)) {
            log(`    ${sizeStr(item.size).padStart(10)} | ${item.mime.padEnd(25)} | ${item.url}`);
        }
        if (items.length > 10) log(`    ... and ${items.length - 10} more`);
    }

    // Extract API response bodies for key endpoints
    log(`\n💾 API RESPONSE SAMPLES:`);
    const keyApis = ['/api/auth/me', '/api/radar/activity', '/api/showcase/telemetry', '/api/stage/outputs', '/api/stage/events', '/api/agent/feed'];
    for (const apiPath of keyApis) {
        const entry = voxyEntries.find(e => e.request.url.includes(apiPath) && (e.response.content?.text || '').length > 0);
        if (entry) {
            const body = entry.response.content.text;
            const truncated = body.length > 500 ? body.substring(0, 500) + '...[truncated]' : body;
            log(`\n  ${apiPath}:`);
            log(`    ${truncated}`);
        }
    }
}

fs.writeFileSync('har_analysis.txt', output, 'utf-8');
console.log('Done! Written to har_analysis.txt');

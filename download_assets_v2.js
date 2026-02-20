const fs = require('fs');
const https = require('https');

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': '*/*, application/json, text/plain',
                'Referer': 'https://voxyz.space/'
            }
        };

        https.get(url, options, (response) => {
            // Handle redirects
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                return download(response.headers.location, dest).then(resolve).catch(reject);
            }

            if (response.statusCode === 200) {
                const file = fs.createWriteStream(dest);
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    const stats = fs.statSync(dest);
                    if (stats.size > 0) {
                        resolve();
                    } else {
                        reject(new Error(`File ${dest} is 0 bytes!`));
                    }
                });
            } else {
                response.resume(); // consume response data to free up memory
                reject(new Error(`Failed to download ${url}: HTTP ${response.statusCode}`));
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
};

const assets = [
    ['https://www.voxyz.space/avatar/minion.png', 'public/avatar/minion.png'],
    ['https://www.voxyz.space/avatar/sage.png', 'public/avatar/sage.png'],
    ['https://www.voxyz.space/avatar/scout.png', 'public/avatar/scout.png'],
    ['https://www.voxyz.space/avatar/quill.png', 'public/avatar/quill.png'],
    ['https://www.voxyz.space/avatar/xalt.png', 'public/avatar/xalt.png'],
    ['https://www.voxyz.space/avatar/observer-optimised.png', 'public/avatar/observer-optimised.png'],
    ['https://www.voxyz.space/3d/minion.glb', 'public/3d/minion.glb'],
    ['https://www.voxyz.space/3d/sage.glb', 'public/3d/sage.glb'],
    ['https://www.voxyz.space/3d/scout.glb', 'public/3d/scout.glb'],
    ['https://www.voxyz.space/3d/quill.glb', 'public/3d/quill.glb'],
    ['https://www.voxyz.space/3d/xalt.glb', 'public/3d/xalt.glb'],
    ['https://www.voxyz.space/3d/observer.glb', 'public/3d/observer.glb'],
];

console.log('Starting fetch with headers...');
Promise.all(assets.map(([u, d]) => download(u, d).then(() => console.log(`SUCCESS: ${d}`)).catch(e => console.error(`ERROR: ${e.message}`))))
    .then(() => console.log('Done.'));

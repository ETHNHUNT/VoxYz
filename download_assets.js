const fs = require('fs');
const https = require('https');
const path = require('path');

fs.mkdirSync('public/avatar', { recursive: true });
fs.mkdirSync('public/3d', { recursive: true });

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            } else {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
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

console.log('Starting downloads...');
Promise.all(assets.map(([u, d]) => download(u, d).then(() => console.log(`Downloaded ${d}`))))
    .then(() => console.log('All downloads completed.'))
    .catch(err => console.error(err));

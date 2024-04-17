const { readdirSync, writeFileSync } = require('fs');
const { join, relative } = require('path');


function getStaticFiles(dir) {
  const files = [];
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getStaticFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

const staticDir = join(__dirname, '.next', 'static');

const staticFiles = getStaticFiles(staticDir);

const urlsToCache = staticFiles.map(file => `/${relative(staticDir, file)}`);
const serviceWorkerFile = join(__dirname, 'service-worker.js');
writeFileSync(serviceWorkerFile, `
const CACHE_NAME = 'herhq-cache-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        ${JSON.stringify(urlsToCache)}.map((url) => {
          return fetch(url).then((response) => {
            if (response.ok) {
              return cache.put(url, response);
            }
            throw new Error('Failed to cache ' + url);
          });
        })
      );
    })
    .then(() => {
      console.log('Service worker installation complete');
    })
    .catch((error) => {
      console.error('Service worker installation failed:', error);
    })
  );
});

self.addEventListener('activate', (event) => {
    console.log('Service worker activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((cacheName) => {
                    return cacheName.startsWith('herhq-cache-') && cacheName !== CACHE_NAME;
                }).map((cacheName) => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

`);

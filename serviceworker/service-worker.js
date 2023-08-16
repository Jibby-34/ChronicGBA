// Define a cache name
const CACHE_NAME = 'gba-pwa-cache-v1';

// List of assets to cache
const urlsToCache = [
  '/',
  '/index.html',
  '/icons/192Icon.png',
  '/icons/512Icon.png',
  '/user_css/',
  '/user_scripts/',
  '/bios/',
  '/IodineGBA/'

];

// Install event: Cache the assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate event: Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
});

// Fetch event: Serve cached assets if available, else fetch from network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
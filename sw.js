// sw.js - Dynamic Cache Clean Version
const CACHE_NAME = 'hillguard-v4'; // <-- INCREMENT THIS VERSION NUMBER WHEN YOU MAKE CHANGES
const ASSETS = [
  './',
  './index.html',
  './app.js',
  'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/vision_bundle.js'
];

// 1. Install & cache new assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting(); // Instantly activate new service worker
});

// 2. Clear old caches automatically
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log("Removing old cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control of all open pages immediately
});

// 3. Serve from cache, fallback to network
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
/* Soma Smart — Service Worker for offline CBE learning */
const CACHE_NAME = "soma-smart-v5";
const STATIC_ASSETS = [
  "./",
  "index.html",
  "styles.css",
  "icons.js",
  "content.js",
  "explainers.js",
  "app.js",
  "icon.svg",
  "manifest.webmanifest"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  // Do not cache API calls
  if (url.pathname.startsWith("/api/")) {
    return;
  }

  // App shell (own origin): network first so a new deploy shows on the next load,
  // falling back to the cached copy when offline or on a dropped connection.
  if (url.origin === location.origin) {
    event.respondWith(
      fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const respClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, respClone));
        }
        return networkResponse;
      }).catch(() =>
        caches.match(event.request).then(cached =>
          cached || (event.request.mode === "navigate" ? caches.match("index.html") : undefined)
        )
      )
    );
    return;
  }

  // Third-party assets (fonts): cache first, refresh in background
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Return cached and refresh in background
        fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse));
          }
        }).catch(() => {});
        return cachedResponse;
      }

      return fetch(event.request).then(networkResponse => {
        // Cache font stylesheets & assets
        if (networkResponse && networkResponse.status === 200 && (url.origin === location.origin || url.hostname.includes("fonts.g"))) {
          const respClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, respClone));
        }
        return networkResponse;
      }).catch(() => {
        // Fallback for navigation
        if (event.request.mode === "navigate") {
          return caches.match("index.html");
        }
      });
    })
  );
});

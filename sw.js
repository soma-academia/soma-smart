/* Tech Tayari — Service Worker for offline CBE learning */
const CACHE_NAME = "tech-tayari-v9";
const STATIC_ASSETS = [
  "./",
  "index.html",
  "styles.css",
  "icons.js",
  "fonts/nunito-latin.woff2",
  "fonts/roboto-latin.woff2",
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

  // Other origins (for example a YouTube video the learner chose to load): let the browser handle them
});

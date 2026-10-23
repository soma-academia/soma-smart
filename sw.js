/* Tech Tayari — Service Worker for offline CBE learning */
const CACHE_NAME = "tech-tayari-v21";
const STATIC_ASSETS = [
  "./",
  "styles.css",
  "icons.js",
  "fonts/nunito-latin.woff2",
  "content.js",
  "lessons/primary.js",
  "lessons/junior.js",
  "lessons/ai.js",
  "lessons/senior.js",
  "lessons/senior11.js",
  "lessons/kcse.js",
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

  // App shell (own origin): network first so a new deploy shows on the next load, falling back to the
  // cached copy when offline, on a dropped connection, or when the network is too slow (2G) to answer in time.
  // Pages that aren't cached (/kcse, /about, /?lesson=…) are all served by the app shell, cached under "./".
  // (Never fall back to "index.html": Cloudflare redirects it to "/", and browsers refuse a redirected
  // response for a page load.)
  if (url.origin === location.origin) {
    const isPage = event.request.mode === "navigate";
    const fromCache = () => caches.match(event.request, { ignoreSearch: isPage })
      .then(cached => cached || (isPage ? caches.match("./") : undefined));
    const network = fetch(event.request).then(networkResponse => {
      if (networkResponse && networkResponse.status === 200 && !networkResponse.redirected) {
        const respClone = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, respClone));
      }
      return networkResponse;
    });
    const slow = new Promise(resolve => setTimeout(resolve, 4000)).then(fromCache);
    event.respondWith(
      Promise.race([network, slow.then(c => c || network)])
        .catch(() => fromCache().then(c => c || Response.error()))
    );
    return;
  }

  // Other origins (for example a YouTube video the learner chose to load): let the browser handle them
});

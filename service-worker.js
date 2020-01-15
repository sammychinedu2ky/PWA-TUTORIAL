const cacheName = "pwatutorial";
const precache = ["/", "index.html", "style.css"];

self.addEventListener("install", async event => {
  console.log("Service worker install event!");
  self.skipWaiting();
  try {
    let cache = await caches.open(cacheName);
    cache.addAll(precache);
  } catch (error) {
    console.log(error);
  }
});

self.addEventListener("activate", async event => {
    const keys = await caches.keys();
    keys.map(key =>key!=cacheName? caches.delete(key):'');
  console.log("Service worker activate event!");
});


self.addEventListener("fetch", event => {
  console.log("Fetch intercepted for:", event.request.url);
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});

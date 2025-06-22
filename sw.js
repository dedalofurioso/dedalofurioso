self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('dedalofurioso-cache').then(cache => {
      return cache.addAll([
        '/provasito2/calendario-eventi-dedalofurioso.html',
        '/provasito2/styles.css',
        '/provasito2/script.js',
        '/provasito2/icon-192.png',
        '/provasito2/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

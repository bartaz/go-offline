self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('go-offline').then(function(cache) {
     return cache.addAll([
       // TODO: js13games path (to be sure?)
       // '/games/go-offline/',
       'index.html'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});

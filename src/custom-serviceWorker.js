/* eslint-disable no-undef */
if (workbox) {
   console.log('Workbox is loaded 🎉');
} else {
   console.log("Workbox didn't load ");
}
// eslint-disable-next-line
workbox.precaching.precacheAndRoute(self.__precacheManifest);
// eslint-disable-next-line
self.addEventListener('install', (event) => event.waitUntil(self.skipWaiting()));
// eslint-disable-next-line
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
// app-shell
workbox.routing.registerRoute('/', new workbox.strategies.NetworkFirst());

workbox.routing.registerRoute(
   ({ url }) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
   new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'google-fonts',
      plugins: [new workbox.expiration.Plugin({ maxEntries: 20 })],
   }),
);

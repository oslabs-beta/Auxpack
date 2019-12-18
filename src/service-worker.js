importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.routing.registerRoute(
  new RegExp('\\.js$'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'js-cache',
  }),
);

workbox.routing.registerRoute(
  new RegExp('\\css$'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'css-cache',
  }),
);

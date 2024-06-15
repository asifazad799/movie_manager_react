// src/service-worker.js

const { precacheAndRoute } = require("workbox-precaching");
const { registerRoute } = require("workbox-routing");
const { StaleWhileRevalidate } = require("workbox-strategies");

// Precache all files in the manifest
precacheAndRoute(self.__WB_MANIFEST);

// Example runtime caching for API calls
registerRoute(
  ({ url }) =>
    url.origin === "https://movie-manage-node-app.asifazad799.online/",
  new StaleWhileRevalidate({
    cacheName: "api-cache",
  })
);

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

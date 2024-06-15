// src/service-worker.js

import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

// Precache all files in the manifest
precacheAndRoute(self.__WB_MANIFEST);

// Example runtime caching for API calls
// registerRoute(
//   ({ url }) =>
//     url.origin === "https://movie-manage-node-app.asifazad799.online/",
//   new StaleWhileRevalidate({
//     cacheName: "api-cache",
//   })
// );

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

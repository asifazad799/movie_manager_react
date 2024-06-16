// // src/service-worker.js

// const { precacheAndRoute } = require("workbox-precaching");
// const { registerRoute } = require("workbox-routing");
// const { StaleWhileRevalidate } = require("workbox-strategies");

// // Precache all assets generated by the build process
// precacheAndRoute(self.__WB_MANIFEST);

// // Cache API calls with StaleWhileRevalidate strategy
// registerRoute(
//   ({ url }) =>
//     url.origin === self.location.origin && url.pathname.startsWith("/assets/"),
//   new StaleWhileRevalidate({
//     cacheName: "assets-cache",
//   })
// );

// // Skip waiting and activate new service worker immediately
// self.addEventListener("install", (event) => {
//   self.skipWaiting();
// });

// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cache) => {
//           if (cache !== "assets-cache") {
//             return caches.delete(cache);
//           }
//         })
//       );
//     })
//   );
//   self.clients.claim();
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request);
//     })
//   );
// });

// self.addEventListener("message", (event) => {
//   if (event.data && event.data.type === "SKIP_WAITING") {
//     self.skipWaiting();
//   }
// });

/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate, NetworkFirst } from "workbox-strategies";
import { CacheableResponsePlugin } from "workbox-cacheable-response";

clientsClaim();

// self.addEventListener("activate", (event) => {
//   clientsClaim();
// });

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== "navigate") {
      return false;
    } // If this is a URL that starts with /_, skip.

    if (url.pathname.startsWith("/_")) {
      return false;
    } // If this looks like a URL for a resource, because it contains // a file extension, skip.

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Return true to signal that we want to use the handler.

    return true;
  },
  createHandlerBoundToURL("https://movieapp.asifazad799.online" + "/index.html")
);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case we're fetching images
registerRoute(
  // Cache all images
  ({ request }) => request.destination === "image",
  new StaleWhileRevalidate({
    cacheName: "images",
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 60 * 60 * 24 * 7, // 1 Week
      }),
    ],
  })
);

registerRoute(
  ({ url }) =>
    url.pathname.startsWith("/movie-manage-node-app.asifazad799.online/api/"),
  new NetworkFirst({
    cacheName: "api-cache",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24, // 24 hours
      }),
    ],
  })
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "CLEAR_CACHE_AND_RELOAD") {
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            return caches.delete(cacheName);
          })
        );
      })
      .then(() => {
        self.clients.matchAll({ type: "window" }).then((clients) => {
          clients.forEach((client) => {
            let url = new URL(client.url);

            // Add new query parameters
            url.searchParams.set("cache-bust", `${new Date().getTime()}`);

            let newUrl = url.toString();

            client.postMessage({ type: "RELOAD_PAGE", url: newUrl });
          });
        });
        // self.clients.matchAll({ type: "window" }).then((clients) => {
        //   clients.forEach((client) => {
        //     client.postMessage({ type: "RELOAD_PAGE" });
        //   });
        // });
      })
      .catch((error) => {
        console.error("Error clearing caches and reloading:", error);
      });
  }
});

// self.addEventListener("message", (event) => {
//   if (event.data && event.data.type === "CLEAR_CACHE_AND_RELOAD") {
//     // Clear all caches
//     caches
//       .keys()
//       .then((cacheNames) => {
//         return Promise.all(
//           cacheNames.map((cacheName) => {
//             return caches.delete(cacheName);
//           })
//         );
//       })
//       .then(() => {
//         // Once caches are cleared, reload the page
//         self.clients.matchAll({ type: "window" }).then((clients) => {
//           clients.forEach((client) => client.navigate(client.url));
//         });
//       });
//   }
// });

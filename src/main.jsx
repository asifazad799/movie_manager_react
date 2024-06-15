import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Workbox } from "workbox-window";
import * as serviceWorkerRegistration from "./service-worker-reg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered:", registration);

        registration.update();
        setInterval(() => {
          // Check for updates every 5 minutes
          console.log("Checking...");
          registration.update();
        }, 2000);

        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          installingWorker.onstatechange = () => {
            if (installingWorker.state === "installed") {
              if (navigator.serviceWorker.controller) {
                console.log("New content is available; please refresh.");
                if (confirm("New version available. Do you want to reload?")) {
                  // window.location.reload();
                  registration.active.postMessage({
                    type: "CLEAR_CACHE_AND_RELOAD",
                  });
                }
              }
            }
          };
        };
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });
  });
}

// Register the service worker with Workbox
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     const wb = new Workbox("/service-worker.js");

//     wb.addEventListener("installed", (event) => {
//       console.log("New Version is available:");
//       if (event.isUpdate) {
//         if (confirm("New content is available; please refresh.")) {
//           window.location.reload();
//         }
//       }
//     });

//     wb.addEventListener("waiting", (event) => {
//       console.log("New Version is available:");
//       if (confirm("New version available. Do you want to reload?")) {
//         wb.messageSW({ type: "SKIP_WAITING" });
//       }
//     });

//     wb.register()
//       .then((registration) => {
//         console.log("Service Worker registered with Workbox:", registration);
//       })
//       .catch((error) => {
//         console.log("Service Worker registration failed with Workbox:", error);
//       });
//   });
// }

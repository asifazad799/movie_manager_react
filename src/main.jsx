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
                  // window.location.reload(true);

                  // window.location.href = window.location.href;
                  // "?cache-bust=" + new Date().getTime();
                  // Get the current URL

                  if (registration.active) {
                    registration.active.postMessage({
                      type: "CLEAR_CACHE_AND_RELOAD",
                    });
                  } else {
                    console.error("No active Service Worker found.");
                  }
                }
              }
            }
          };
        };
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });

    navigator.serviceWorker.addEventListener("message", (event) => {
      if (event.data && event.data.type === "RELOAD_PAGE") {
        window.location.reload();
      }
    });

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });
  });
}

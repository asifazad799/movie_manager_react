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

console.log(window.location);

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
                  let newHref = String(window.location.href);

                  if (newHref.includes("?")) {
                    newHref = newHref.slice(0, newHref.indexOf("?"));
                  }

                  window.location.href =
                    newHref + "?cache-bust=" + new Date().getTime();
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

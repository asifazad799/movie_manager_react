import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

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

        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          installingWorker.onstatechange = () => {
            if (installingWorker.state === "installed") {
              if (navigator.serviceWorker.controller) {
                // New content is available; please refresh.
                console.log("New content is available; please refresh.");
                // Notify the user and reload the page
                if (confirm("New version available. Do you want to reload?")) {
                  window.location.reload();
                }
              }
            }
          };
        };
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });

    // Listen for the controlling service worker changing and reload the page
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });
  });
}

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Workbox } from "workbox-window";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Register the service worker with Workbox
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const wb = new Workbox("/service-worker.js");

    wb.addEventListener("installed", (event) => {
      if (event.isUpdate) {
        if (confirm("New content is available; please refresh.")) {
          window.location.reload();
        }
      }
    });

    wb.addEventListener("waiting", (event) => {
      if (confirm("New version available. Do you want to reload?")) {
        wb.messageSW({ type: "SKIP_WAITING" });
      }
    });

    wb.register()
      .then((registration) => {
        console.log("Service Worker registered with Workbox:", registration);
      })
      .catch((error) => {
        console.log("Service Worker registration failed with Workbox:", error);
      });
  });
}

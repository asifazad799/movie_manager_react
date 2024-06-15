import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_BASE_URL": JSON.stringify(env.REACT_APP_BASE_URL),
    },
    plugins: [
      react(),
      VitePWA({
        strategies: "injectManifest",
        srcDir: "src",
        filename: "service-worker.js",
        includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
        manifest: {
          name: "Movie-app",
          short_name: "App",
          description: "Your App Description",
          theme_color: "#ffffff",
          icons: [
            {
              src: "pwa.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
        },
      }),
    ],
    build: {
      outDir: "dist", // Output directory for production build
      // assetsDir: ".", // Directory for static assets (adjust as needed)
      // sourcemap: false,
      // chunkFilename: "[name].[hash].js",
      // manifest: true,
    },
  };
});

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_BASE_URL": JSON.stringify(env.REACT_APP_BASE_URL),
    },
    plugins: [react()],
    build: {
      outDir: "dist", // Output directory for production build
      // assetsDir: ".", // Directory for static assets (adjust as needed)
      // sourcemap: false,
      // chunkFilename: "[name].[hash].js",
      manifest: true,
    },
  };
});

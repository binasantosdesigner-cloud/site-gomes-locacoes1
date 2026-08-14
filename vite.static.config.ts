import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig({
  root: path.resolve(__dirname, "static"),
  base: "/",
  plugins: [react(), tailwindcss(), tsconfigPaths({ root: __dirname })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist-static"),
    emptyOutDir: true,
    sourcemap: false,
    assetsDir: "assets",
    chunkSizeWarningLimit: 1500,
  },
});

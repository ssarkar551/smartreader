import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// Manually define __dirname (since it's not available in ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "index.html"),
        content: resolve(__dirname, "src/content/content.js"), // Ensures content script is built
        background: resolve(__dirname, "src/background/background.js"),
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});

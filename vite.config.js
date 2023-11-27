import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "dashesOnly",
    },
  },
  resolve: {
    alias: {
      "@assets": "src/assets",
      "@images": "src/images",
    },
  },
});

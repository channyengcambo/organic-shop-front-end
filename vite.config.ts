import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@theme": path.resolve(__dirname, "./src/theme"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@rotuers": path.resolve(__dirname, "./src/routers"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@features": path.resolve(__dirname, "./src/features"),
    },
  },
});

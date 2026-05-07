import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  // Environment variables dengan default (aman Vercel)
  const basePath = process.env.BASE_PATH ?? "/";
  const rawPort = process.env.PORT ?? "3000";
  const port = Number(rawPort);

  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid PORT value: "${rawPort}"`);
  }

  return {
    base: basePath,

    plugins: [
      react(),
      tailwindcss(),
      // Replit plugins hanya di development
      ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID
        ? [
            // Dynamic import Replit plugins (biar tidak error di build)
          ]
        : []),
    ],

    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
      },
      dedupe: ["react", "react-dom"],
    },

    root: path.resolve(import.meta.dirname),

    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
      sourcemap: !isProd,
      minify: isProd ? "esbuild" : false,

      // Manual chunks yang AMAN (tidak pakai @radix-ui)
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            ui: [
              "framer-motion",
              "lucide-react",
              "class-variance-authority",
              "clsx",
              "tailwind-merge",
              "sonner",
              "vaul",
              "cmdk",
            ],
            charts: ["recharts"],
            form: ["react-hook-form", "@hookform/resolvers", "zod"],
          },
        },
      },
    },

    server: {
      port,
      host: "0.0.0.0",
      strictPort: true,
    },

    preview: {
      port,
      host: "0.0.0.0",
    },
  };
});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  const basePath = process.env.BASE_PATH ?? "/";
  const rawPort = process.env.PORT ?? "3000";
  const port = Number(rawPort);

  return {
    base: basePath,
    
    plugins: [
      react(),
      tailwindcss(),
      // Hanya aktif di development Replit
      ...(!isProd && process.env.REPL_ID
        ? [
            // Import dynamic Replit plugins
          ]
        : []),
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@assets": path.resolve(__dirname, "..", "..", "attached_assets"),
      },
      dedupe: ["react", "react-dom"],
    },

    build: {
      outDir: "dist/public",        // tetap sesuai kode lama kamu
      emptyOutDir: true,
      sourcemap: isProd ? false : true,   // matikan di production
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            ui: ["@radix-ui", "framer-motion", "lucide-react"],
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
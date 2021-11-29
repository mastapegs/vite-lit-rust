import { defineConfig } from "vite";
import ViteRsw from "vite-plugin-rsw";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/crateImport.ts",
      formats: ["es"],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
  plugins: [
    ViteRsw({
      crates: ["test-crate"],
    }),
  ],
});

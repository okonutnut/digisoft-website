import path from "path"
import { defineConfig } from 'vite'
import { compression } from 'vite-plugin-compression2'
import { ghPages } from 'vite-plugin-gh-pages'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/digisoft-redesign",
  plugins: [
    react(),
    ghPages(),
    compression({
      algorithm: "brotliCompress",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})


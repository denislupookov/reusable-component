import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tsConfigPaths from 'vite-tsconfig-paths'
import viteBabel from 'vite-plugin-babel'

const webOnlyExtensions = [".web.js", ".web.jsx", ".web.ts", ".web.tsx"];

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    react({
      babel: {
        configFile: true,
      },
    }),
    viteBabel(),
  ],
  resolve: {
    dedupe: ['react', 'react-dom'],
    extensions: [
      ...webOnlyExtensions,
      ".mjs",
      ".js",
      ".mts",
      ".ts",
      ".jsx",
      ".tsx",
      ".json",
    ],
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  }
})

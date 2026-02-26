import { defineConfig } from 'vite'
import path from 'node:path'
import electron from 'vite-plugin-electron/simple'
import react from '@vitejs/plugin-react'
import tsConfigPaths from "vite-tsconfig-paths"
import viteBabel from "vite-plugin-babel"

const webOnlyExtensions = [".web.js", ".web.jsx", ".web.ts", ".web.tsx"];

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    tsConfigPaths(),
    react({
      babel: {
        configFile: true,
      },
    }),
    viteBabel(),
    electron({
      main: {
        entry: 'electron/main.ts',
      },
      preload: {
        input: path.join(__dirname, 'electron/preload.ts'),
      },
      renderer: {},
    }) as any,
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
})

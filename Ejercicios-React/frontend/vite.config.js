import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

const rootDir = path.resolve('.');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
  alias: {
    "@components": path.resolve(rootDir, "src/components"),
    "@pages": path.resolve(rootDir, "src/pages"),
    "@styles": path.resolve(rootDir, "src/styles"),
    "@assets": path.resolve(rootDir, "src/assets"),
  },
},
})

// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Optional fix if you're absolutely sure it's necessary
      external: ['/src/main.tsx'],
    },
  },
})

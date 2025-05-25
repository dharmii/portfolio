import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  server: {
    host: true,      // Expose to network (same as '0.0.0.0')
    port: 5173       // Optional: use any available port
  }
})

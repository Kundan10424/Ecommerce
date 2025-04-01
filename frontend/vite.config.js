import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://ecommerce-production-aa96.up.railway.app/",
        changeOrigin: true,
        secure: false
      }
    }
  }
});

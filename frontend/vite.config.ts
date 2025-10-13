import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv'

config()

export default defineConfig({
  plugins: [
    react()
  ],
  server: {
    port: process.env.VITE_PORT ? parseInt(process.env.VITE_PORT) : 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:443',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist'
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const config = {
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist'
  }
}

export default defineConfig(config) 
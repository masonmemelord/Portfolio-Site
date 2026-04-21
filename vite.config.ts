import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      // You can manually set the port or host if you're behind a proxy
      protocol: 'ws',
      host: 'localhost',
    },
    // Useful if you want the browser to open automatically on start
    open: true, 
    // Use this if you need to change the port from 5173
    port: 3000, 
  }
  
})



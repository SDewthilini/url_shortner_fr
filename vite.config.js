import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Ensure Vite listens on all network interfaces (important for Docker)
    port: 5173, // Adjust port if needed
    watch: {
      usePolling: true,  // Enable polling if file system watching doesn't work (especially in Docker)
      interval: 1000,  // Set a polling interval (you can adjust it)
    },
    hmr: {
      protocol: 'ws',  // Use WebSocket for HMR
      host: 'localhost', // Adjust this if your browser cannot connect to HMR in Docker
    },
  },
});

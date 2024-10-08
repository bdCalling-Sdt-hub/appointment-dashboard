import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This will make the server accessible externally
    port: 6000, // Specify the port you want to use
  },
});


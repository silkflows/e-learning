import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // react vite plugin
import tailwindcss from '@tailwindcss/vite'// tailwind vite plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})

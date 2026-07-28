import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative asset paths work everywhere (GitHub Pages, Netlify, Vercel)
  server: {
    port: 3000,
    open: true
  }
});

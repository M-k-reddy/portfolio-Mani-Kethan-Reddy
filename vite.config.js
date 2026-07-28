import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Relative base path works on both localhost:3000 and GitHub Pages subdirectories
  server: {
    port: 3000,
    open: true
  }
});

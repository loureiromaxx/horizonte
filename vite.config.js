import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: './',

  plugins: [
    tailwindcss()
  ],

  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        dashboard: resolve(import.meta.dirname, 'pages/dashboard.html'),
        metas: resolve(import.meta.dirname, 'pages/metas.html'),
        'onboarding': resolve(import.meta.dirname, 'pages/onboarding.html'),
        simulador: resolve(import.meta.dirname, 'pages/simulador.html'),
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});
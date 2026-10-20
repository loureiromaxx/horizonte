import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',

  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        cadastro: resolve(import.meta.dirname, 'pages/cadastro.html'),
        dashboard: resolve(import.meta.dirname, 'pages/dashboard.html'),
        login: resolve(import.meta.dirname, 'pages/login.html'),
        metas: resolve(import.meta.dirname, 'pages/metas.html'),
        'onboarding': resolve(import.meta.dirname, 'pages/onboarding.html'),
        'recuperar-senha': resolve(import.meta.dirname, 'pages/recuperar-senha.html'),
        simulador: resolve(import.meta.dirname, 'pages/simulador.html'),
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});

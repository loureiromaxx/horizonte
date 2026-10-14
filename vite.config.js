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
        'onboarding-1': resolve(import.meta.dirname, 'pages/onboarding-1.html'),
        'onboarding-2': resolve(import.meta.dirname, 'pages/onboarding-2.html'),
        'onboarding-3': resolve(import.meta.dirname, 'pages/onboarding-3.html'),
        'onboarding-4': resolve(import.meta.dirname, 'pages/onboarding-4.html'),
        'onboarding-5': resolve(import.meta.dirname, 'pages/onboarding-5.html'),
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

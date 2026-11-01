/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const BASE = '/jogos-do-gustavo/';
const THEME = '#3F51B5';

export default defineConfig({
  base: BASE,
  plugins: [
    VitePWA({
      // O índice não tem nada a perder no meio: atualiza sozinho.
      registerType: 'autoUpdate',
      injectRegister: false,
      includeManifestIcons: false,
      manifest: {
        id: BASE,
        name: 'Jogos do Gustavo',
        short_name: 'Jogos',
        description: 'Todos os jogos do Gustavo num lugar só, sem propagandas.',
        lang: 'pt-BR',
        start_url: BASE,
        // Escopo na raiz: instalado no iPad, os jogos abrem dentro deste mesmo app
        // (sem a barra do Safari), porque todos ficam em micheltlutz.github.io.
        scope: '/',
        display: 'standalone',
        orientation: 'any',
        background_color: THEME,
        theme_color: THEME,
        icons: [
          { src: 'pwa-64x64.png', sizes: '64x64', type: 'image/png' },
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'maskable-icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,webmanifest}'],
        cleanupOutdatedCaches: true,
      },
    }),
  ],
  server: { host: true },
  test: {
    include: ['tests/**/*.test.ts'],
  },
});

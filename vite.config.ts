import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import { devtools } from '@tanstack/devtools-vite';

import { tanstackStart } from '@tanstack/react-start/plugin/vite';

import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

import { cloudflare } from '@cloudflare/vite-plugin';

const srcDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src');

const config = defineConfig({
  server: {
    host: '0.0.0.0',
    // port: 3000,
    allowedHosts: ['ryo.innflow.local'],
  },
  resolve: {
    alias: {
      '@': srcDir,
    },
  },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    svgr(),
    cloudflare({
      viteEnvironment: {
        name: 'ssr',
      },
    }),
  ],
});

export default config;

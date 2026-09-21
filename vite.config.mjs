import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    cssMinify: 'lightningcss',
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        platform: resolve(import.meta.dirname, 'platform.html'),
        features: resolve(import.meta.dirname, 'features.html'),
        customerCare: resolve(import.meta.dirname, 'customer-care.html'),
        workflowAutomation: resolve(import.meta.dirname, 'workflow-automation.html'),
        realEstate: resolve(import.meta.dirname, 'real-estate.html'),
        homeServices: resolve(import.meta.dirname, 'home-services.html'),
        travelHospitality: resolve(import.meta.dirname, 'travel-hospitality.html'),
        getInTouch: resolve(import.meta.dirname, 'get-in-touch.html'),
        company: resolve(import.meta.dirname, 'company.html'),
        signin: resolve(import.meta.dirname, 'signin.html'),
        scheduleDemo: resolve(import.meta.dirname, 'schedule-demo.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
        terms: resolve(import.meta.dirname, 'terms.html'),
      },
      output: {
        entryFileNames: 'assets/js/[name].[hash].js',
        chunkFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp|avif)$/.test(name ?? '')) {
            return 'assets/images/[name].[hash][extname]';
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name].[hash][extname]';
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(name ?? '')) {
            return 'assets/fonts/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        },
      },
    },
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 8080,
    open: true,
  },
});

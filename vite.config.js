import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    optimizeDeps: {
        include: ['@react-pdf/renderer'],
        force: true
    },
    build: {
        chunkSizeWarningLimit: 5600,
        minify: 'esbuild', // Utilisation de l'optimisation de minification
        target: 'esnext', // Cible ES plus moderne pour améliorer la performance
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        // Séparer @react-pdf/renderer dans son propre chunk
                        if (id.includes('@react-pdf/renderer')) {
                            return 'react-pdf';
                        }
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        }
    },
    define: {
        // Nécessaire pour @react-pdf/renderer
        global: 'globalThis',
    }
});

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: 'products-table',
            remotes: {
                'products-table': 'http://localhost:4173/assets/products-table.js',
            },
            shared: ['vue'],
        }),
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },
    server: {
        port: 5174, // Change this to your desired port
    },
})
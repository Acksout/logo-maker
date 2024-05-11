import path from "path"
import react from "@vitejs/plugin-react"
import {defineConfig} from "vite"

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },

    server: {
        port: '3939',
        strictPort: false,
        proxy: {
            '/api': {
                target: 'TODO: PUT URL HERE',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },

        }
    }

})

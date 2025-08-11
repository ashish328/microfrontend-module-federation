import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vue(),
    federation({
      name: 'host',
      remotes: {
        products: 'http://localhost:5003/assets/remoteEntry.js',
        cart: 'http://localhost:5001/assets/remoteEntry.js',
        recipes: {
          external: 'http://localhost:5004/remoteEntry.js',
          externalType: 'url',
          format: 'var',
          from: 'webpack'
        }
      },
      shared: ['react', 'react-dom', 'vue'],
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: 'assets/[name].js',
        minifyInternalExports: false
      }
    }
  },
  server: {
    port: 5002
  }
})

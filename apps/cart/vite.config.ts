import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      exposes: {
        './AddToCart': './src/components/AddToCart.tsx',
        './ItemsInCartHeader': './src/components/ItemsInCartHeader.tsx',
        './CartStore': './src/store',
      },
      remotes: {
        cart: 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'zustand'],
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
    port: 5003
  }
})

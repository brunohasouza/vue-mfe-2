import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/main.ts',
      preserveEntrySignatures: 'allow-extension',
      output: {
        format: 'system',
      }
    }
  },
  server: {
    port: 8081
  },
  plugins: [vue({
    template: {
      transformAssetUrls: {
        base: '/src'
      }
    }
  })],
})

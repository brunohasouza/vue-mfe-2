import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/main.js',
      preserveEntrySignatures: 'strict',
      output: {
        format: 'system'
      }
    },
  },

  preview: {
    port: 8083,
    cors: true,
  },

  plugins: [vue({
    template: {
      transformAssetUrls: {
        base: '/src'
      }
    }
  })]
})

// export default {
//   build: {
//     rollupOptions: {
//       input: 'src/main.js',
//       format: 'system',
//       preserveEntrySignatures: 'strict'
//     },
//   },

//   server: {
//     port: 8083,
//     cors: true
//   },

//   base: 'http://localhost:8083',

//   plugins: [vue({
//     template: {
//       transformAssetUrls: {
//         base: '/src'
//       }
//     }
//   })]
// }

import { createApp, h } from 'vue'
import singleSpaVue from 'single-spa-vue'

import App from './App.vue'

import './style.css'
// import './set-public-path'

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App)
    }
  }
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount

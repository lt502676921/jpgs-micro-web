import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

let instance = null

const render = () => {
  instance = createApp(App)
  instance.use(router)
  instance.mount('#app')
}

if (!window.__MICRO_WEB__) {
  render()
}

export const bootstrap = () => {
  console.log('bootstrap')
}

export const mount = () => {
  console.log('mount')
}

export const unmount = () => {
  console.log('unmount', instance)
}

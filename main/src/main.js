import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { subNavList } from './store/sub'
import { registerApp } from './util'

import './assets/main.css'

registerApp(subNavList)

const app = createApp(App)

app.use(router)

app.mount('#app')

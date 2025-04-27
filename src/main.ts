import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
// 全局引入 - start
// import ElementPlus from 'element-plus'
// app.use(ElementPlus, { size: 'small', zIndex: 3000 })
// 全局引入 - end
app.mount('#app')

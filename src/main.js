

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/common.scss'
import '@/assets/font_4330207_w59tq1k5ia/iconfont.css'
import '@/assets/font_4330207_w59tq1k5ia/iconfont'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

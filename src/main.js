import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/tailwind.css'

//สร้างตัวแปรมาเก็บ Constant ของ vue
// createApp(App).use(store).use(router).mount('#app') เปลี่ยนเป็น
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')


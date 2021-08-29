import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import tailwind
import '@/styles/tailwind.css'

// import sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


//สร้างตัวแปรมาเก็บ Constant ของ vue
// createApp(App).use(store).use(router).mount('#app') เปลี่ยนเป็น
const app = createApp(App)
app.use(store)
app.use(router)

app.use(VueSweetalert2);
app.mount('#app')

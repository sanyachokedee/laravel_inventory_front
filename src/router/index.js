import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
//ใส่ @ จะไปเร่ิมที่ src แล้หาไฟล์ให้เอง
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

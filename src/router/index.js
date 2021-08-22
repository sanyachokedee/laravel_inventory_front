import { createRouter, createWebHistory } from 'vue-router'

// Import layouts เอามาเป็นแม่แล้วเอาลูก Children มาใส่
import FrontendLayout from '@/layouts/Frontend.vue' 

//ใส่ @ จะไปเร่ิมที่ src แล้วหาไฟล์ให้เอง
// Import views
import Home from '@/views/frontend/Home.vue' 
import About from '@/views/frontend/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: Home
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: About
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

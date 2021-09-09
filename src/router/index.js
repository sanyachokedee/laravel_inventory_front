import { createRouter, createWebHistory } from 'vue-router'

// Import layouts เอามาเป็นแม่แล้วเอาลูก Children มาใส่
import FrontendLayout from '@/layouts/Frontend.vue'
import BackendLayout from '@/layouts/Backend.vue'

//ใส่ @ จะไปเร่ิมที่ src แล้วหาไฟล์ให้เอง
// Import views
// Frontend
import Home from '@/views/frontend/Home.vue'
import About from '@/views/frontend/About.vue'
import Portfolio from '@/views/frontend/Portfolio.vue'
import Service from '@/views/frontend/Service.vue'
import Contact from '@/views/frontend/Contact.vue'
import Register from '@/views/frontend/Register.vue'
import Login from '@/views/frontend/Login.vue'
import ForgotPassword from '@/views/frontend/ForgotPassword.vue'
import NotFound404 from '@/views/frontend/NotFound404.vue'

// Import Backend
import Dashboard from '@/views/backend/Dashboard.vue'
import Products from '@/views/backend/Products'
import Testvue from '@/views/backend/Testvue'
import Start from '@/views/backend/Start';

const routes = [
  // Frontend's Router
  {
    path: '/',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      }
    ],
    meta: {
      title: 'หน้าหลัก',
      description: 'หน้าหลักระบบคงคลังสินค้า',
    }
  },
  {
    path: '/about',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'About',
        component: About
      }
    ],
    meta: {
      title: 'เกียวกับระบบ',
      description: 'เกียวกับระบบระบบคงคลังสินค้า',
    }
  },

  {
    path: '/portfolio',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Portfolio',
        component: Portfolio
      }
    ],
    meta: {
      title: 'ผลงานของเรา',
      description: 'ผลงานของเราระบบคงคลังสินค้า',
    }
  },

  {
    path: '/service',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Service',
        component: Service
      }
    ],
    meta: {
      title: 'บริการของ',
      description: 'บริการของระบบคงคลังสินค้า',
    }
  },

  {
    path: '/contact',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Contact',
        component: Contact
      }
    ],
    meta: {
      title: 'ติดต่อ',
      description: 'ติดต่อระบบคงคลังสินค้า',
    }
  },

  {
    path: '/register',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Register',
        component: Register
      }
    ],
    meta: {
      title: 'สมัครสมาชิก',
      description: 'สมัครสมาชิกระบบคงคลังสินค้า',
    }
  },
  {
    path: '/Login',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Login',
        component: Login
      }
    ],
    meta: {
      title: 'เข้าสู่ระบบ',
      description: 'เข้าสู่ระบบระบบคงคลังสินค้า',
    }
  },
  {
    path: '/forgotPassword',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'ForgotPassword',
        component: ForgotPassword
      }
    ],
    meta: {
      title: 'ลืมรหัสผ่าน',
      description: 'ลืมรหัสผ่านระบบคงคลังสินค้า',
    }
  },
  

  //error 404
  {
    path: '/:catchall(.*)',
    component: NotFound404,
    meta: {
      title: 'ไม่พบหน้านี้',
      description: 'ไม่พบหน้านี้',
    }
  },

  
  // Backend's Router
  {
    path: '/backend',
    name: 'Dashbaord',
    component: BackendLayout,
    children: [
      {
        path: '',
        component: Dashboard
      }
    ],
    meta: {
      title: 'Dashboard',
      description: 'Dashboard Description'
    }

  },

  //********** */ Backend **********
  {
    path: '/backend/products',
    name: 'Products',
    component: BackendLayout,
    children: [
      {
        path: '',
        component: Products
      }
    ],
    meta: {
      title: 'Products',
      description: 'Products Description'
    }

  },
  {
    path: '/backend/testvue',
    name: 'Testvue',
    component: BackendLayout,
    children: [
      {
        path: '',
        component: Testvue
      }
    ],
    meta: {
      title: 'Test vue by moo',
      description: 'Test vue by moo'
    }
  },
  {
    path: '/backend/testvue/start',
    name: 'Start',
    component: BackendLayout,
    children: [
      {
        path: '',
        component: Start
      }
    ],
    meta: {
      title: 'Test vue by moo',
      description: 'Test vue by moo'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Parent from '../views/Parent.vue'

const routes = [
  {
    path: '/',
    name: 'parent',
    component: Parent
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

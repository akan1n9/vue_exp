import { createRouter, createWebHistory } from 'vue-router'
import Parent from '../views/Parent.vue'
import comWatch from '../views/watchandcomputed/comWatch.vue'

const routes = [
  {
    path: '/',
    name: 'parent',
    component: Parent
  },
  {
    path: '/comwatch',
    name: 'comWatch',
    component: comWatch
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

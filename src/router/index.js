import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    redirect: '/SlidePuzzle'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/SlidePuzzle',
    name: 'SlidePuzzle',
    component: () => import('@/views/SlidePuzzle.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

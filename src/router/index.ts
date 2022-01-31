import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/SlidePuzzle'
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

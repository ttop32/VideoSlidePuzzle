import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SlidePuzzle from '@/views/SlidePuzzle.vue';



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/slide'
  },
  {
    path: '/slide',
    name: 'Slide',
    component: SlidePuzzle
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

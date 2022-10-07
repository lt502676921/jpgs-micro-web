import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import App from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HomeView,
    },
    {
      path: '/product',
      name: 'product',
      component: App,
    },
    {
      path: '/user',
      name: 'user',
      component: App,
    },
    {
      path: '/order',
      name: 'order',
      component: App,
    },
  ],
})

export default router

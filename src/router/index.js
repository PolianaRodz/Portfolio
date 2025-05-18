import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Sobre from '../views/AboutView.vue'
import Contato from '../views/Contato.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: Sobre,
    },
    {
      path: '/contato',
      name: 'contato',
      component: Contato,
    },
  ],
})

export default router

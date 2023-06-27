import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../views/DashBoard.vue'
import InicialView from '../views/InicialView.vue'
import ConfigPage from '../views/ConfigPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'InicialScreen',
      component: InicialView
    },
    {
      path: '/home',
      name: 'home',
      component: DashBoard
    },
    {
      path: '/configuracao',
      name: 'configuracao',
      component: ConfigPage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/Tables.vue')
    }
  ]
})

export default router

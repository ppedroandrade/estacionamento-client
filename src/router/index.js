import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InicialView from '../views/InicialView.vue'
import ModalForm from '../views/ModalForm.vue'
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
      component: HomeView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: ModalForm
    },
    {
      path: '/configuracao',
      name: 'configuracao',
      component: ConfigPage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

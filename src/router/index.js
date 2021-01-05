import Vue from 'vue'
import Router from 'vue-router'

import HomeLayout from '@/layouts/Home'
import dashboardApp from '@/views/dashboard'
import VueRouter from 'vue-router'

Vue.use(Router)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      redirect: '/dashboard',
      component: HomeLayout,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: dashboardApp
        }
      ]
    }
  ]
})

export default router

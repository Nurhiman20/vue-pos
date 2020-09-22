import Vue from 'vue'
import Router from 'vue-router'

import dashboardApp from '@/views/dashboard'
import VueRouter from 'vue-router'

Vue.use(Router)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: dashboardApp
    }
  ]
})

export default router

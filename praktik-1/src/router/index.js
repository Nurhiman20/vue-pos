import Vue from 'vue'
import Router from 'vue-router'

import HomeLayout from '@/layouts/Home'

const DashboardPage = () => import('@/views/Dashboard')

const NotFoundPage = () => import('@/views/NotFound')

// Transaksi
const TransaksiPage = () => import('@/views/Transaksi')
const TransaksiPenjualan = () => import('@/views/Transaksi/views/Penjualan')

Vue.use(Router)

export default new Router({
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
          component: DashboardPage
        },
        {
          path: '/transaksi',
          name: 'Transaksi',
          redirect: '/member/penjualan',
          component: TransaksiPage,
          children: [
            {
              path: 'penjualan',
              name: 'Penjualan',
              component: TransaksiPenjualan
            }
          ]
        },
        {
          path: '/not-found',
          name: 'Under Construction',
          component: NotFoundPage
        }
      ]
    }
  ]
})

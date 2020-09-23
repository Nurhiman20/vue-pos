import Vue from 'vue'
import Router from 'vue-router'

import HomeLayout from '@/layouts/Home'

const DashboardPage = () => import('@/views/Dashboard')

const NotFoundPage = () => import('@/views/NotFound')

// Transaksi
const TransaksiPenjualan = () => import('@/views/Transaksi/views/Penjualan')
const TambahTransaksi = () => import('@/views/Transaksi/views/Penjualan/views/TambahTransaksi')

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
          path: '/not-found',
          name: 'Under Construction',
          component: NotFoundPage
        }
      ]
    },
    {
      path: '/transaksi',
      name: 'Transaksi',
      redirect: '/transaksi/penjualan',
      component: HomeLayout,
      children: [
        {
          path: 'penjualan',
          name: 'Penjualan',
          redirect: '/transaksi/penjualan/tambah-transaksi',
          component: TransaksiPenjualan,
          children: [
            {
              path: 'tambah-transaksi',
              name: 'Tambah Transaksi',
              component: TambahTransaksi,
            }
          ]
        }
      ]
    }
  ]
})

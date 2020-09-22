export const sidebar = [
  { 
    icon: 'mdi-view-dashboard', 
    text: 'Dashboard',
    to: '/dashboard'
  }
]

export const mainMenu = [
  {
    icon: 'mdi-file-document-outline',
    text: 'Laporan',
    children: [
      {
        text: 'Laporan Penjualan',
        to: '/not-found'
      },
      {
        text: 'Laporan Piutang',
        to: '/not-found'
      },
      {
        text: 'Laporan Pengeluaran',
        to: '/not-found'
      }
    ]
  },
  { 
    icon: 'mdi-package-variant', 
    text: 'Produk',
    children: [
      {
        text: 'Daftar Kategori',
        to: '/not-found'
      },
      {
        text: 'Daftar Produk',
        to: '/not-found'
      }
    ]
  },
  { 
    icon: 'mdi-package-variant-closed', 
    text: 'Inventory',
    children: [
      {
        text: 'Kelola Stock',
        to: '/not-found'
      },
      {
        text: 'Belanja',
        to: '/not-found'
      },
      {
        text: 'Pelanggan',
        to: '/not-found'
      }
    ]
  }
]

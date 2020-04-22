export default [
  {
    path: '/bankMgmt',
    name: 'BankMgmt',
    components: {
      default: () => import('@/views/bankMgmt/index')
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/scanCode',
    name: 'ScanCode',
    components: {
      default: () => import('@/views/bankMgmt/scanCode')
    },
    meta: {
      keepAlive: true
    }
  }
]

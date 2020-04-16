export default [
  {
    path: '/bankMgmt',
    name: 'bankMgmt',
    components: {
      default: () => import('@/views/bankMgmt/index')
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/scanCode',
    name: 'scanCode',
    components: {
      default: () => import('@/views/bankMgmt/scanCode')
    },
    meta: {
      keepAlive: true
    }
  }
]

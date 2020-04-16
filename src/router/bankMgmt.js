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
  }
]

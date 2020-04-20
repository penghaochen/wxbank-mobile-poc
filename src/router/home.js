
export default [
  {
    path: '/lobby',
    name: 'lobby',
    components: {
      default: () => import('@/views/home/lobby')
    },
    meta: {
      isdisableback: 'true',
      keepAlive: true
    }
  }
]

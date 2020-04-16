const Tabbar = () => import('@/components/Tabbar/')
export default [
  {
    path: '/home',
    name: 'home',
    components: {
      default: () => import('@/views/home/tabbar-home'),
      tabbar: Tabbar
    },
    meta: {
      keepAlive: true
    }
  },
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


export default [
  // 菜单页
  {
    path: '/lobby',
    name: 'Lobby',
    components: {
      default: () => import('@/views/home/lobby')
    },
    meta: {
      isdisableback: 'true',
      keepAlive: true
    }
  },
  // 菜单测试页
  {
    path: '/lobby1',
    name: 'Lobby1',
    components: {
      default: () => import('@/views/home/lobby1')
    },
    meta: {
      isdisableback: 'true',
      keepAlive: true
    }
  }
]


export default [
  {
    path: '/bindCard',
    name: 'bindCard',
    components: {
      default: () => import('@/views/bindCard/bindCard')

    },
    meta: {
      title: '绑卡',
      keepAlive: true
    }
  },
  {
    path: '/bindCardRes',
    name: 'bindCardRes',
    components: {
      default: () => import('@/views/bindCard/bindCardRes')

    },
    meta: {
      title: '绑卡结果',
      keepAlive: true
    }
  }
]



export default [
  {
    path: '/bindCard',
    name: 'BindCard',
    components: {
      default: () => import('@/views/bindCard/bindCard')

    },
    meta: {
      title: '绑卡',
      keepAlive: true
    }
  },
  {
    path: '/bindCard1',
    name: 'BindCard1',
    components: {
      default: () => import('@/views/bindCard1/bindCard')

    },
    meta: {
      title: '绑卡',
      keepAlive: true
    }
  },
  {
    path: '/bindCardRes',
    name: 'BindCardRes',
    components: {
      default: () => import('@/views/bindCard/bindCardRes')

    },
    meta: {
      title: '绑卡结果',
      keepAlive: true
    }
  },
  {
    path: '/bindCardRes1',
    name: 'BindCardRes',
    components: {
      default: () => import('@/views/bindCard1/bindCardRes')

    },
    meta: {
      title: '绑卡结果1',
      keepAlive: true
    }
  }
]


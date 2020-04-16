
export default [
  {
    path: '/transfer',
    name: 'transfer',
    components: {
      default: () => import('@/views/transfer/transferPre')

    },
    meta: {
      title: '转账',
      keepAlive: true
    }
  },
  {
    path: '/transferCfm',
    name: 'transferCfm',
    components: {
      default: () => import('@/views/transfer/transferCfm')

    },
    meta: {
      title: '转账确认',
      keepAlive: true
    }
  },
  {
    path: '/transferRes',
    name: 'transferRes',
    components: {
      default: () => import('@/views/transfer/transferRes')

    },
    meta: {
      title: '转账结果',
      keepAlive: true
    }
  }
]

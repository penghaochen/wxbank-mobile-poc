
export default [
  {
    path: '/account',
    name: 'account',
    components: {
      default: () => import('@/views/account/account')

    },
    meta: {
      title: '我的账户',
      keepAlive: true
    }
  },
  {
    path: '/accountDetail',
    name: 'accountDetail',
    components: {
      default: () => import('@/views/account/accountDetail')

    },
    meta: {
      title: '账户详情',
      keepAlive: true
    }
  }
]

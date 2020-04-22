
export default [
  {
    path: '/account',
    name: 'Account',
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
    name: 'AccountDetail',
    components: {
      default: () => import('@/views/account/accountDetail')

    },
    meta: {
      title: '账户详情',
      keepAlive: true
    }
  }
]

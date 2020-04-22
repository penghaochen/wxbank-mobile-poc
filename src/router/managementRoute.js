export default [
  // 后管的获取短信验证码
  {
    path: '/smsCode',
    name: 'SmsCode',
    components: {
      default: () => import('@/views/bankMgmt/smsCode')
    },
    meta: {
      keepAlive: true
    }
  },
  // 后管的生称二维码
  {
    path: '/scanCode',
    name: 'ScanCode',
    components: {
      default: () => import('@/views/bankMgmt/scanCode')
    },
    meta: {
      keepAlive: true
    }
  }
]

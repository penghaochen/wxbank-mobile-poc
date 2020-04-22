export default [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login')
  },
  // 注册短信验证码页面
  {
    path: '/login/registerGetCode',
    name: 'registerGetCode',
    component: () => import('@/views/login/register-getCode')
  },
  // 注册手机号页面
  {
    path: '/login/registerSubmit/:phone',
    name: 'registerSubmit',
    props: true,
    component: () => import('@/views/login/register-submit')
  },
  // 注册结果
  {
    path: '/login/registerStatus/:status',
    name: 'registerStatus',
    props: true,
    component: () => import('@/views/login/register-status')
  },
  // 忘记密码
  {
    path: '/login/forget',
    name: 'forget',
    component: () => import('@/views/login/forget')
  },
  // 重置密码
  {
    path: '/login/forget/reset',
    name: 'forgetReset',
    component: () => import('@/views/login/forget-reset')
  },
  // 忘记密码结果页
  {
    path: '/login/forget/reset/:status',
    name: 'forgetStatus',
    props: true,
    component: () => import('@/views/login/forget-status')
  }
]

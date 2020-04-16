import Vue from 'vue'
import Router from 'vue-router'
// import { getStore } from '@/utils/store'
// 首页模块
import home from './home'
// 登录模块
import login from './login'
// 转账模块
import transfer from './transfer'
// 账户模块
import account from './account'
// 绑卡模块
import bindCard from './bindCard'
// 查短信
import bankMgmt from './bankMgmt'
import store from '@/store/index'
Vue.use(Router)
// 配置路由
const RouterModel = new Router({
  routes: [...home, ...login, ...transfer, ...account, ...bindCard, ...bankMgmt,
    {
      path: '*',
      redirect: {
        name: 'lobby'
      }
    }]
})
// 路由拦截器
RouterModel.beforeEach((to, from, next) => {
  // const Authorization=getStore({ name: 'Authorization' })
  // if (!Authorization) {
  //   if (to.meta.login) {
  //     next({ name: 'login', query: { redirect: to.name } });
  //     return;
  //   }
  // }
  store.state.app.rightText = to.meta.rightText
  next()
})

export default RouterModel

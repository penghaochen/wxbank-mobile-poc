/**
 * @description 路由公共配置
 * @author digua
 */
import Vue from 'vue'
import Router from 'vue-router'
// import { getStore } from '@/utils/store'

import home from './homeRoute' // 首页模块
import account from './accountRoute' // 账户模块
import bindCard from './bindCardRoute' // 绑卡模块
import management from './managementRoute' // 后管模块

import store from '@/store/index' // 缓存数据
Vue.use(Router)
// 配置路由
const RouterModel = new Router({
  routes: [...home, ...account, ...bindCard, ...management,
    // 非匹配路由指向默认路由
    {
      path: '*',
      redirect: {
        name: 'Lobby'
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
  store.state.app.rightText = to.meta.rightText // 菜单右侧文字从路由的meta中获取
  next()
})

export default RouterModel

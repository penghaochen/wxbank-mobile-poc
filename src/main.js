import Vue from 'vue'
import App from './App.vue'
import store from './store' // 缓存数据
import router from './router'

import '@/assets/scss/global.scss'
import '@/assets/scss/iconfont/iconfont.css'
// 注册vant相关组件
import '@/utils/vantConfig'

// 公共过滤器
import filters from '@/filter'
// 倒计时组件
import VueCountdown from '@chenfengyuan/vue-countdown'
Vue.component(VueCountdown.name, VueCountdown)
Vue.use(filters)
// 使用vant ui框架
import 'vant/lib/icon/local.css'
// 使用swiper
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// // // import style
// import 'swiper/css/swiper.css'
// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
// 微信相关配置
// import '@/utils/wxConfig'

// Vue.use(Lazyload, {
//   preLoad: 1.3,
//   error: require('@/assets/images/goods_default.png'),
//   loading: require('@/assets/images/goods_default.png'),
//   attempt: 1,
//   listenEvents: ['scroll'],
//   lazyComponent: true
// })
// 模拟交易数据
// import {
//   mockXHR
// } from '../mock'

// if (process.env.NODE_ENV === 'development') {
// // 使用mock数据 放开注释
//   mockXHR()
// }
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

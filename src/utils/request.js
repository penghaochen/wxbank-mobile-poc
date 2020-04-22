/**
 * @description 通讯公共方法
 * @author digua
 * @version 0.1.0
 */
import axios from 'axios'
import { Dialog } from 'vant'
import store from '@/store'
// create an axios instance
const service = axios.create({
  baseURL: '/pmobile/wcb', // api 的 base_url
  timeout: 20000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    store.state.app.show = true
    if (!config.headers['X-Litemall-Token']) {
      config.headers['X-Litemall-Token'] = `${window.localStorage.getItem(
        'Authorization'
      ) || ''}`
    }
    return config
  },
  err => Promise.reject(err)
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    store.state.app.show = false
    if (res.returnCode === '000000') {
      // 成功
      return res
    } else {
      // 失败
      Dialog.alert({
        title: '警告',
        message: res.message
      })
      return Promise.reject(res)
    }
  }, error => {
    console.log('err' + error)// for debug
    store.state.app.show = false
    Dialog.alert({
      title: '警告',
      message: '连接超时'
    })
    return Promise.reject(error)
  })

export default service

/**
 * @description 通讯公共方法
 * @author digua
 * @version 0.1.0
 */
import axios from 'axios'
import {
  Dialog
} from 'vant'
import store from '@/store'
import {
  baseUrl,
  timeout,
  headers
} from '@/api/api.config'
import router from '@/router/router.config'
import { encrypt, decrypt } from '@/utils/aes' // aes加解密方法
// axios 配置
const service = axios.create({
  baseURL: baseUrl, // 请求根路径
  timeout: timeout // 超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    store.state.app.show = true // 打开遮罩
    config.headers = headers // 配置公共请求头
    config.headers.BL = sessionStorage.getItem('openId')
    // config.headers.BL = 'oqPkFuF2PWLIoLC3MMEK4inu2FCk'
    if (config.url.indexOf('/trans/dictionary/getDictionaryList') !== 0) {
      // 接口加密
      // const data = encrypt(JSON.stringify(config.data))
      // config.data = { data: data }
    }
    // 获取token
    // if (!config.headers['X-Litemall-Token']) {
    //   config.headers['X-Litemall-Token'] = `${window.localStorage.getItem(
    //     'Authorization'
    //   ) || ''}`
    // }
    return config
  },
  err => Promise.reject(err)
)

// 返回拦截器
service.interceptors.response.use(
  response => {
    store.state.app.show = false // 关闭遮罩
    const res = response.data // 获取数据
    if (response.config.url.indexOf('/trans/dictionary/getDictionaryList') === 0) {
      if (res.code === 0) {
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
    }
    // res = JSON.parse(decrypt(res.result))
    if (res.returnCode === '000000') {
      // 成功
      return res
    } else {
      // 失败
      if (res.returnCode === '100001') {
        // 未绑卡跳转首页
        Dialog.alert({
          title: '警告',
          message: JSON.stringify(res.message)
        }).then(() => {
          router.go(-1)
        })
      } else {
        // 其他错误
        Dialog.alert({
          title: '警告',
          message: JSON.stringify(res.message)
        })
      }
      return Promise.reject(res)
    }
  }, error => {
    console.log('err' + error) // for debug
    store.state.app.show = false // 关闭遮罩
    Dialog.alert({
      title: '警告',
      message: '禁止访问'
    }).then(() => {
      // return Promise.reject(error)
    })
    // Dialog.alert({
    //   title: '警告',
    //   message: '内部错误'
    // })
    return Promise.reject(error)
  })

export default service

/**
 * @description 需要请求后台管理的请求
 * @author
 */
import request from '@/utils/request'

// 获取验证标准
// appType 1为前后端公用   2为后端独用
export function getAllPattern(appType) {
  return request({
    url: '/trans/dictionary/getDictionaryList?appType=' + appType,
    method: 'get'
  })
}

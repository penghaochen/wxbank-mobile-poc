/**
 * @description 转账功能所有接口
 * @author
 */
import request from '@/utils/request'

// 获取账户
export function getCard(data) {
  return request({
    url: '/wcb/myaccount',
    method: 'get',
    params: data
  })
}

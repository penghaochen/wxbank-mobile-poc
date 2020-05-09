/**
 * @description 账户管理所有接口
 * @author
 */
import request from '@/utils/request'

// 获取卡信息
export function getCard(data) {
  return request({
    url: '/wcb/myaccount',
    method: 'get',
    params: data
  })
}

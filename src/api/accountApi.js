import request from '@/utils/request'

// 获取卡信息
export function getCard(data) {
  return request({
    url: 'myaccount',
    method: 'get',
    params: data
  })
}

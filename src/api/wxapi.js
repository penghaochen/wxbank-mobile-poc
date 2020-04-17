import request from '@/utils/request'

export function getConfig(url, params) {
  return request({
    url: '/api/jssdk/config',
    method: 'post',
    data: {
      api: params,
      url
    }
  })
}
// 获取收款人列表
export function getAccountList(data) {
  return request({
    url: 'QueryAccountList.do',
    method: 'get',
    params: data
  })
}
// 转账
export function transfer(data) {
  return request({
    url: 'Transfer.do',
    method: 'get',
    params: data
  })
}
// 配置菜单
export function getMenu(params) {
  return request({
    url: '/wx/cgi-bin/get_current_selfmenu_info',
    method: 'get',
    params: params
  })
}
export function setMenu(params) {
  return request({
    url: '/wx/cgi-bin/menu/create?access_token=32_wAWjK_3E_5255nHwfDgZ7EzNVronah1IXPWYxzY8-fSMk1wMLKAsMlxfGzHK6C8dIRYRu04xyzYXgJGsefVkyR1w2KPCTBZH9sTC8atZMVxWI_P5z-Yi3pRYpSD4ByS47u9QTBxy9tIFxp5uLQTdAGAXCF',
    method: 'post',
    data: params
  })
}
export function delMenu(params) {
  return request({
    url: '/wx/cgi-bin/menu/delete',
    method: 'get',
    params: params
  })
}
// 授权
export function getauthorize(params) {
  return request({
    url: '/auth',
    method: 'post',
    data: params
  })
}
// 获取短信
export function getPhone(params) {
  return request({
    url: '/QuerySMSMsg.do',
    method: 'get',
    params: params
  })
}
// 获取二维码
export function getScanCode(params) {
  return request({
    url: '/GetQRcode.do',
    method: 'get',
    params: params
  })
}
// 账户查询
export function getAccount(params) {
  return request({
    url: '/myaccount',
    method: 'post',
    data: params
  })
}

export function getAccount1(params) {
  return request({
    url: '/myaccount',
    method: 'post',
    data: params
  })
}

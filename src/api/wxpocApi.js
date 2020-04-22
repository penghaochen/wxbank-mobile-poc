/**
 * @description 微信poc所有接口
 * @author digua
 */
import request from '@/utils/request'

// 获取菜单
export function getMenu(params) {
  return request({
    url: '/wx/cgi-bin/get_current_selfmenu_info',
    method: 'get',
    params: params
  })
}
// 配置菜单
export function setMenu(params) {
  return request({
    url: '/wx/cgi-bin/menu/create?access_token=32_wAWjK_3E_5255nHwfDgZ7EzNVronah1IXPWYxzY8-fSMk1wMLKAsMlxfGzHK6C8dIRYRu04xyzYXgJGsefVkyR1w2KPCTBZH9sTC8atZMVxWI_P5z-Yi3pRYpSD4ByS47u9QTBxy9tIFxp5uLQTdAGAXCF',
    method: 'post',
    data: params
  })
}
// 删除菜单
export function delMenu(params) {
  return request({
    url: '/wx/cgi-bin/menu/delete',
    method: 'get',
    params: params
  })
}
// 授权code获取accesstoken和openid
export function getauthorize(params) {
  return request({
    url: '/auth',
    method: 'post',
    data: params
  })
}
// 获取短信验证码（后管）
export function getPhone(params) {
  return request({
    url: '/QuerySMSMsg.do',
    method: 'get',
    params: params
  })
}
// 绑卡获取验证码功能
export function getMsgCode(params) {
  return request({
    url: '/binding/getmsgwithphone',
    method: 'post',
    data: params
  })
}
// 绑卡功能
export function bindCard(params) {
  return request({
    url: '/binding/pageactsign',
    method: 'post',
    data: params
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

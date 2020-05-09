/**
 * @description 微信poc所有接口
 * @author digua
 */
import request from '@/utils/request'

// 获取wx配置
export function getConfig(params) {
  return request({
    url: '/wcb/wx/getConfig',
    method: 'get',
    params: params
  })
}
// 获取菜单
export function getMenu(params) {
  return request({
    url: '/wcb/wx/cgi-bin/get_current_selfmenu_info',
    method: 'get',
    params: params
  })
}
// 配置菜单
export function setMenu(params) {
  return request({
    url: '/wcb/wx/cgi-bin/menu/create?access_token=32_ozMLf2aBJVAQJ266Bn4JcOcEReYqs7zy0YeBo1GdxdgWaZAa8z-D8p0dMyA6DSoE_H2JbozASt9GAigzD0q3opPGXD0ld2iqrVuQvIzNH-JG9FUtNJoPC0IlXvogxC0klCM6oB3dUZH0bzddZCTjAJALOF',
    method: 'post',
    data: params
  })
}
// 配置个性化菜单
export function setMenuOther() {
  var params = {
    'button': [
      {
        'type': 'click',
        'name': '安卓手机',
        'key': 'V1001_TODAY_MUSIC'
      },
      {
        'name': 'poc菜单',
        'sub_button': [
          {
            'type': 'view',
            'name': '我的poc',
            'url': 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx63d888c54735bdee&redirect_uri=http%3a%2f%2flyzd.nat300.top&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
          }
        ]
      }
    ],
    'matchrule': {
      'client_platform_type': '1'
    }
  }
  return request({
    url: '/wcb/wx/cgi-bin/menu/addconditional?access_token=32_ozMLf2aBJVAQJ266Bn4JcOcEReYqs7zy0YeBo1GdxdgWaZAa8z-D8p0dMyA6DSoE_H2JbozASt9GAigzD0q3opPGXD0ld2iqrVuQvIzNH-JG9FUtNJoPC0IlXvogxC0klCM6oB3dUZH0bzddZCTjAJALOF',
    method: 'post',
    data: params
  })
}
// 删除菜单
export function delMenu(params) {
  return request({
    url: '/wcb/wx/cgi-bin/menu/delete',
    method: 'get',
    params: params
  })
}
// 授权code获取accesstoken和openid
export function getauthorize(params) {
  return request({
    url: '/wcb/auth',
    method: 'post',
    data: params
  })
}
// 获取短信验证码（后管）
export function getPhone(params) {
  return request({
    url: '/wcb/QuerySMSMsg.do',
    method: 'get',
    params: params
  })
}
// 绑卡获取验证码功能
export function getMsgCode(params) {
  return request({
    url: '/wcb/binding/getmsgwithphone',
    method: 'post',
    data: params
  })
}
// 绑卡功能
export function bindCard(params) {
  return request({
    url: '/wcb/binding/pageactsign',
    method: 'post',
    data: params
  })
}
// 获取二维码
export function getScanCode(params) {
  return request({
    url: '/wcb/GetQRcode.do',
    method: 'get',
    params: params
  })
}
// 账户查询
export function getAccount(params) {
  return request({
    url: '/wcb/myaccount',
    method: 'post',
    data: params
  })
}


module.exports = {
  /**
   *  是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: false, // 是否使用国际化配置 true：使用，false:不使用
  locale: 'zh',// zh:中文，en:英文
  /**
   * 请求的基础配置
   */
  apiOpt: {
    //  请求公共根路径
    baseUrl: '/pmobile/wcb',

  },
  /**
   * 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home',
}

/**
 * 账户格式化，四位一空格
 * @author：feifei
 */
const accNoSpcFilter = (value) =>
  value ? value.replace(/(.{4})/g, '$1 ') : value

/**
 * 账户格式化，卡号显示前六后四，中间空格
 * 例子：622612 ********* 1234
 * @author：feifei
 */
const accNoEncFilter = (value) => {
  debugger
  if (value !== undefined) {
    if (value.length > 10) {
      value = value.substr(0, 6) + ' ****** ' + value.substr(value.length - 4)
    }
  }
  return value
}

export default {
  install(Vue) {
    Vue.filter('accNoSpcFilter', accNoSpcFilter)
    Vue.filter('accNoEncFilter', accNoEncFilter)
  }
}


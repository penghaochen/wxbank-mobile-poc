import dayjs from 'dayjs'
import { isNumber } from 'lodash'
export const dateFormat = (value, format = 'YYYY-MM-DD') =>
  value ? dayjs(value * 1000).format(format) : ''

export const yuan = value =>
  isNumber(value) ? `¥${(value / 100).toFixed(2)}` : value

export const numberFormat = money => {
  if (money && money != null) {
    money = String(money)
    const left = money.split('.')[0]
    let right = money.split('.')[1]
    right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.00'
    var temp = left.split('').reverse().join('').match(/(\d{1,3})/g)
    return (Number(money) < 0 ? '-' : '') + temp.join(',').split('').reverse().join('') + right
  } else if (money === 0) { // 注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
    return '0.00'
  } else {
    return ''
  }
}

export default {
  install(Vue) {
    Vue.filter('yuan', yuan)
    Vue.filter('dateFormat', dateFormat)
    Vue.filter('numberFormat', numberFormat)
  }
}

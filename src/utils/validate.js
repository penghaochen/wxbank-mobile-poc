/**
 * @description 所有验证方法
 * @author digua
 * @version 0.1.0
 */
export const idCard = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/

export const mobileReg = /^1[0-9]{10}$/

export const address = val => {
  const value = val.trim()
  return value.length >= 5 && value.length <= 100
}

export const userName = /^[a-zA-Z0-9_\u4e00-\u9fa5]{3,20}$/

export const emailReg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * 判断是否为空
 */
export function validatenull(val) {
  if (typeof val === 'boolean') {
    return false
  }
  if (typeof val === 'number') {
    return false
  }
  if (val instanceof Array) {
    if (val.length === 0) return true
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true
  } else {
    if (val === 'null' || val == null || val === 'undefined' || val === undefined || val === '') return true
    return false
  }
  return false
}

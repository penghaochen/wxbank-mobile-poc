/**
 * @description 所有验证方法
 * @author digua
 * @version 0.1.0
 */
import Vue from 'vue'
export const idCard = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/

export const mobileReg = /^1[0-9]{10}$/

export const address = val => {
  const value = val.trim()
  return value.length >= 5 && value.length <= 100
}

export const userName = /^[a-zA-Z0-9_\u4e00-\u9fa5]{3,20}$/

export const emailReg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/

/**
 * @param {string} cardNo 银行卡号验证
 * @returns {Boolean}
 */
export function isBankCardNo() {
  const pattern = /^([1-9]{1})(\d{15}|\d{18})$/
  return [{ required: true, message: '请输入借记卡卡号！' }, { pattern, message: '卡号有误！' }]
}
/**
 * @param {string} phoneNo 手机号验证
 * @returns {Boolean}
 */
export function isPhoneNo() {
  const pattern = /^1[3-9]\d{9}$/
  return [{ required: true, message: '请输入预留手机号！' }, { pattern, message: '手机号码号有误！' }]
}
/**
 * @param {string} messageNo 短信验证码验证
 * @returns {Boolean}
 */
export function isMessageNo() {
  const pattern = /(^[0-9]{4}$)|(^[0-9]{6}$)/
  return [{ required: true, message: '请输入短信验证码！' }, { pattern, message: '验证码有误！' }]
}

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

Vue.prototype.validate = {
  isBankCardNo: isBankCardNo(),
  isPhoneNo: isPhoneNo(),
  isMessageNo: isMessageNo()
}

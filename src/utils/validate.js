/**
 * @description 所有验证方法
 * @author digua
 * @version 0.1.0
 */
import Vue from 'vue'
import { Toast } from 'vant'
export const idCard = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/

export const mobileReg = /^1[0-9]{10}$/

export const address = val => {
  const value = val.trim()
  return value.length >= 5 && value.length <= 100
}

export const userName = /^[a-zA-Z0-9_\u4e00-\u9fa5]{3,20}$/

export const emailReg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/

/**
 * @param {string}{rule} 第一个是需要校验的参数，第二个是校验规则
 * @returns {Boolean}
 */
export function ruleCheck(val, ruleStr) {
  debugger
  console.log(Vue)
  let flag = true
  try {
    ruleStr.rule.forEach(v => {
      debugger
      if (v.required === true) {
        if (!val) {
          Toast(v.message)
          throw new Error('ending')
        }
      }
      if (v.validator) {
        if (!v.validator(val)) {
          Toast(v.message)
          throw new Error('ending')
        }
      }
    })
  } catch (e) {
    console.log(e)
    if (e.message === 'ending') {
      flag = false
    }
  }
  return flag
}

/**
 * @param {string} cardNo 银行卡号验证
 * @returns {Boolean}
 */
export function isBankCardNo() {
  const validator1 = (val) => {
    return /^[0-9]+$/.test(val)
  }
  const validator2 = (val) => {
    return /^([1-9]{1})(\d{15}|\d{18})$/.test(val)
  }
  return {
    rule: [{ required: true, message: '借记卡卡号不能为空！' }, { validator: validator1, message: '卡号只能包含数字！' }, { validator: validator2, message: '卡号长度必须为16或19位！' }]
  }
}
/**
 * @param {string} phoneNo 手机号验证
 * @returns {Boolean}
 */
export function isPhoneNo() {
  const pattern = /^1[3-9]\d{9}$/
  return {
    pattern: pattern,
    rule: [{ required: true, message: '请输入预留手机号！' }, { pattern, message: '手机号码号有误！' }]
  }
}
/**
 * @param {string} messageNo 短信验证码验证
 * @returns {Boolean}
 */
export function isMessageNo() {
  const pattern = /(^[0-9]{4}$)|(^[0-9]{6}$)/
  return {
    pattern: pattern,
    rule: [{ required: true, message: '请输入短信验证码！' }, { pattern, message: '验证码有误！' }]
  }
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
  isMessageNo: isMessageNo(),
  ruleCheck: ruleCheck
}

/**
 * @description aes加解密的公共方法
 * @author digua
 * @version 0.1.0
 */

import CryptoJS from 'crypto-js'
export function encrypt(message, secret_key) {
  secret_key = secret_key || 'f7244837c4701df4f47e540682405e5e'
  // 偏移量
  let iv = ''

  // Latin1 转换
  secret_key = CryptoJS.enc.Latin1.parse(secret_key)
  iv = secret_key

  // Encrypt
  var ciphertext = CryptoJS.AES.encrypt(message, secret_key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return ciphertext.toString()
}

export function decrypt(message, secret_key) {
  secret_key = secret_key || 'f7244837c4701df4f47e540682405e5e'
  var key = CryptoJS.enc.Latin1.parse(secret_key)
  var decrypt = CryptoJS.AES.decrypt(message, key, { iv: key, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  return decrypt.toString(CryptoJS.enc.Utf8)
}

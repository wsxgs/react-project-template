/**
 * 本地存储
 * @param {*} key
 * @param {*} value
 */
export function setStore (key, value) {
  return localStorage.setItem(key, JSON.stringify(value))
}

/**
 * 获取本地数据
 * @param {*} key
 */
export function getStore (key) {
  return JSON.parse(localStorage.getItem(key))
}

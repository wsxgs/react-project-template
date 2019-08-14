/**
 * 截流函数
 * @param {Function} func
 * @param {Number} wait
 */
function throttle () {
  let disabled = true
  return (func, wait) => {
    if (!disabled) {
      return
    }
    func()
    disabled = false
    setTimeout(() => {
      disabled = true
    }, wait)
  }
}
export const _throttle = throttle()

/**
 * 防抖函数
 * @param {Function} func
 * @param {Number} wait
 */
function debounce () {
  let timer = null
  return (func, wait) => {
    clearTimeout(timer)
    timer = setTimeout(func, wait)
  }
}
export const _debounce = debounce()

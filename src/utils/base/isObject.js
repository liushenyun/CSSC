/**
 * 判断是否为对象
 * @version 0.0.1
 * @param { any } value - '[]'or ...
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
function isObject(value) {
    const type = typeof value
    return value !== null && (type === 'object' || type === 'function')
  }
  
  export default isObject
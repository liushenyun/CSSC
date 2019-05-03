/**
 * 判断是否为空
 * @version 1.0.2
 * @param { any } value - '[]'or ...
 * @returns {boolean} Returns `true` if `value` is an Array, else `false`.
 * @example
 *
 * isEmpty({})
 * // => false
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty('')
 * // => true
 */
let isEmpty = function(str) {
  if (str === undefined) {
    return true
  };
  let strs = str.toString(); // 防止传入的是数字
  strs = strs.trim();
  if (strs === undefined) {
    return true;
  }
  if (strs !== null && strs.length === 0) {
    return true;
  }
  return false;
}

export default isEmpty;

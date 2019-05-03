/**
 * 包裹一层promise
 * @param { function } fn 
 */
export default function (fn) {
  return new Promise(fn);
}
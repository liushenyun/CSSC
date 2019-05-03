/**
 * 判断是否是电话号码
 * @version 0.0.1
 * @param { Any } tel - 1382875
 * @returns { String || null }
 */
let telReg = /^1[0-9]{10}$/ig
let isPhone = (tel) => {
  if (tel === null || tel === undefined) {
    return false;
  }
  let _tel = tel;
  if (typeof tel !== 'string' && tel !== null) {
    _tel = _tel.toString();
  }

  return _tel.match(telReg);
}
export default isPhone;

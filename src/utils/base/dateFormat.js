function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
/**
 * 格式化日期
 * @version 0.0.1
 * @param { Date Object } date 日期对象 new Date() || new Date('2016-09-02') || new Date(1512347715000)【时间戳必须是毫秒】....
 * @param { String } fmt 返回格式 'yyyy-MM-dd hh:mm:ss' || 'yyyy.MM.dd' || ...
 * @returns { String } 返回的日期 "2017-12-04 08:35:15" || "2017-12-04" || ...
 * @example
 * dateFormat(new Date(), 'yyyy-MM-dd')
 * => "2017-12-07"
 * dateFormat(new Date('2016-09-02'), 'yyyy.MM.dd hh:mm:ss')
 * => "2016.09.02 08:00:00"
 * dateFormat(new Date(1512347715000), 'yyyy-MM-dd hh:mm:ss')
 * => "2017-12-04 08:35:15"
 */
function dateFormat(date, fmt) {
  let _date = new Date(date);
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (_date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': _date.getMonth() + 1,
    'd+': _date.getDate(),
    'h+': _date.getHours(),
    'm+': _date.getMinutes(),
    's+': _date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

export default dateFormat;

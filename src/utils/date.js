
function countDown(endDate,cb){
  let endTime = new Date(endDate)
  setInterval(function () {
    let timeNow = new Date();  // 获取当前时间
    timeNow = timeNow.getTime();
    let timeDistance = endTime - timeNow;  // 结束时间减去当前时间
    if (timeDistance <= 0) {
      clearInterval(this);
      return
    }
    let intDay, intHour, intMinute, intSecond;
    intDay = Math.floor(timeDistance / 86400000)
    timeDistance -= intDay * 86400000;
    intHour = Math.floor(timeDistance / 3600000)
    timeDistance -= intHour * 3600000;
    intMinute = Math.floor(timeDistance / 60000)
    timeDistance -= intMinute * 60000;
    intSecond = Math.floor(timeDistance / 1000)

    // 时分秒为单数时、前面加零站位
    if (intHour < 10){
      intHour = "0" + intHour;
    }
    if (intMinute < 10) {
      intMinute = "0" + intMinute;
    }
    if (intSecond < 10) {
      intSecond = "0" + intSecond;
    }
    let result = {
      day: intDay,
      hour: intHour,
      minute: intMinute,
      second: intSecond
    };
    cb(result)
  }, 1000)
}

export default countDown;

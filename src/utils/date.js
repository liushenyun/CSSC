import miniPro from '@/utils/wepy-pro.js';
function countDown(endDate,cb){
  let endtime = endDate.replace(/\-/gi, "/")  //解决 ios  new date不能使用-链接符 要这种格式2019/11/23
  if(!endDate){
    miniPro.showToast('结束时间为空');
    return
  }
  let interval = setInterval(function () {
    let timeNow = new Date();  // 获取当前时间
    let seperator1 = "/";
    let seperator2 = ":";
    let year = timeNow.getFullYear();
    let month = timeNow.getMonth() + 1;
    let strDate = timeNow.getDate();
    let hours1 = timeNow.getHours();
    let minutes1 = timeNow.getMinutes();
    let seconds1 = timeNow.getSeconds();
    if (month >= 1 && month <= 9) {
      month = "0" + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    //把当前时间转化为标准格式日期格式转化为 YYYY-MM-DD 00:00:00
    let currentdate = year + seperator1 + month + seperator1 + strDate + " " + hours1 + seperator2 + minutes1 + seperator2 + seconds1;
    let NowTime = new Date(currentdate).getTime();  //"当前时间毫秒数"
    let endtimeGet = new Date(endtime).getTime();  //后台返回的结束时间毫秒数
    let timeDistance = endtimeGet - NowTime;  // 结束时间减去当前时间得到的总毫秒数
    if (timeDistance <= 0) {
      clearInterval(interval);
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
      second: intSecond,
      interval: interval
    };
    cb(result)
  }, 1000)
}

export default countDown;

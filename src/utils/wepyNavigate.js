import wepy from 'wepy'

function UrlNavigate(url,param) {
  let pageParamsurl = url + "?" + getParam(param);
  wepy.navigateTo({ url: pageParamsurl});
}
function getParam(arg){
  let param = "";
  for(let x in arg){
    if(arg[x]){
      param += x + "=" + arg[x] + "&";
    }
  }
  param = param.substring(0,param.lastIndexOf("&"));
  return param;
}

export default UrlNavigate;

// EDATA - error中data.error
export const STATUS_CODE_200 = 200 // status 200
export const ERROR_CODE_0 = 0 // errorcode 0 - 一般是请求成功
export const ERROR_CODE_1000 = 1000 // 没有登录
export const ERROR_CODE_999 = 999 // 没有登录（弱登录）
export const ERROR_CODE_403 = 403 // 没有绑定账户（弱登录）
export const ERROR_CODE_05 = -5
export const ERROR_CODE_08 = -8 // 地址最大限度五个
export const ERROR_INVALID_GRANT = 'invalid_grant'
export const EDATA_CODE_EXPIRE = 'wechat.code.expire'
export const EDATA_TOKEN_TIME_OUT = 'wechat.code.expire'
export const EDATA_MOBILE_BIND = 'mobile.bind'

export const LESS_THAN_LIMIT = 26014
export const REPEAT_GROUP = 32001
export default (code) => {
  let text
  switch (code) {
    case ERROR_CODE_1000:
      text = '没有登录'
      break
    case REPEAT_GROUP:
      text = '未知错误'
      break
    default:
      text = null

  }
  return text
}

import { MAIN_API_DOMAIN, API_DOMAIN, MAIN_DOMAIN } from '../../common/js/config';
/**
 * @description 获取健康状况
 * server-developer: 张亚
 * api-url: http://confluence.icarbonx.cn/pages/viewpage.action?pageId=11506926
 */
const apiHealthStatus = () => `${MAIN_API_DOMAIN}/account-api/people/haveHealthStatus`;

// 用户模块 => 解析用户信息
const apiWechatLogin = () => `${MAIN_DOMAIN}/api/wx/user/login`

/**
 * @description 刷新token
 * server-developer: 张亚
 * api-url: http://confluence.icarbonx.cn/pages/viewpage.action?pageId=11506926
 */
const apiRefreshToken = () => `${API_DOMAIN}/oauth2/token`

/**
 * @description 获取验证码
 * server-developer: 张亚
 * api-url: http://confluence.icarbonx.cn/pages/viewpage.action?pageId=11506926
 */
const apiGetCode = () => `${API_DOMAIN}/oauth2/sms_verify_code`

/**
 * @description 绑定手机号
 * server-developer: 张亚
 * api-url: http://confluence.icarbonx.cn/pages/viewpage.action?pageId=11506926
 */
const apiLogin = () => `${API_DOMAIN}/oauth2/token`
export {
  apiHealthStatus,
  apiWechatLogin,
  apiRefreshToken,
  apiGetCode,
  apiLogin
}


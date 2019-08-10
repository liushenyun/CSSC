import { MAIN_DOMAIN } from '../../common/js/config';

// 用户模块 => 解析用户信息
const apiWechatLogin = () => `${MAIN_DOMAIN}/api/wx/user/login`

// 用户模块 => 解析用户手机号
const apiPasePhone = () => `${MAIN_DOMAIN}/api/wx/user/parse_phone`

export {
  apiWechatLogin,
  apiPasePhone
}

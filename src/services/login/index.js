import wepy from 'wepy'
import { apiHealthStatus, apiGetCode, apiLogin, apiWechatLogin, apiRefreshToken } from './api';
import packagePromise from '../packagePromise';
import { request } from '../request';
import { WECHAT_APP_NAME, PAGE_INIT_SET_NAME, WECHAT_AUTH_BASE, EVENT_QUEUE_NAME } from '../../common/js/config'
import miniPro from '../../utils/wepy-pro'
import Validate from '../Validate';
import Auth from '../../common/js/authProcess.js';


/**
  * 获取验证码
 */
const getCodeFetch = (data = {}) => packagePromise((resolve, reject) => {
  let _params = data;
  let vArr = [
    ['phoneNumber', _params.phoneNumber, '电话号码', 'empty']
  ]
  if (!Validate(vArr)) { return }
  request({
    url: apiGetCode(),
    method: "POST",
    data: {
      mobile: _params.phoneNumber
    }
  }).then((msg) => {
    miniPro.tipDelaySuccess('发送成功, 有效期5分钟', () => { resolve(msg) }, 'none')
  }).catch((err) => { reject(err) })
})

/**
 * 登录
 */
const loginFetch = (data) => packagePromise((resolve, reject) => {
  let _params = data;
  let vArr = [
    ['phoneNumber', _params.phoneNumber, '电话号码', 'empty|phone'],
    ['verifyCode', _params.verifyCode, '验证码', 'empty|verifyCode']
  ]
  if (!Validate(vArr)) { return };

  authProcess(() => {
    request({
      url: apiLogin(),
      method: 'POST',
      header: {
        'Authorization': `Basic ${WECHAT_AUTH_BASE}`
      },
      data: {
        grant_type: 'wechat',
        sms_verify: true,
        username: _params.phoneNumber,
        password: _params.verifyCode,
        wechatToken: miniPro.getBindToken()
      }
    })
      .then(msg => {
        resolve(msg.data)
        // miniPro.tipDelaySuccess('登陆成功', () => {
        // }, 'success')
      })
      .catch(err => reject(err))
  })
})


const wechatLogin = (data) => packagePromise((resolve, reject) => {
  let _isGettingToken = wepy.getStorageSync('isGettingToken');
  if (_isGettingToken) { return }
  wepy.setStorageSync('isGettingToken', true);
  request({
    url: apiWechatLogin(),
    method: 'POST',
    header: {
      'Authorization': `Basic ${WECHAT_AUTH_BASE}`
    },
    data: {
      code: data.code,
      appName: WECHAT_APP_NAME,
      miniprogramParam: data.miniprogramParam
    }
  })
    .then(msg => {
      wepy.setStorageSync('isGettingToken', false);
      resolve(msg)
    })
    .catch(err => {
      wepy.setStorageSync('isGettingToken', false);
      reject(err)
    })
})

const refreshToken = (refreshToken) => packagePromise((resolve, reject) => {
  let _isGettingToken = wepy.getStorageSync('isGettingToken');
  if (_isGettingToken) { return }
  wepy.setStorageSync('isGettingToken', true);
  request({
    url: apiRefreshToken(),
    method: 'POST',
    header: {
      'Authorization': `Basic ${WECHAT_AUTH_BASE}`
    },
    data: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      appName: WECHAT_APP_NAME,
    },
    haveLoading: false
  })
    .then((res) => {
      wepy.setStorageSync('isGettingToken', false);
      resolve(res)
    })
    .catch(err => {
      wepy.setStorageSync('isGettingToken', false);
      err()
    })
})

export {
  wechatLogin,
  refreshToken,
  getCodeFetch,
  loginFetch
}



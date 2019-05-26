/*
 * @description: 请求接口和一个全局函数（所有项目均可使用）
 * @Author: iconbonx-mini
 * @Date: 2018-06-29 10:39:42 
 * @Last Modified by: icarbonx-mini
 * @Last Modified time: 2018-08-15 14:14:08
 */

import wepy from 'wepy'
import {
  WECHAT_ACCESS_TOKEN_NAME,
  // EVENT_QUEUE_NAME,
  // WECHAT_BIND_TOKEN_NAME,
  TOAST_DURATION
  // WECHAT_Refresh_TOKEN_NAME,
  // WECHAT_APP_NAME,
  // WECHAT_TOKEN_TYPE_NAME
} from '../common/js/config'
import Auth from '../common/js/authProcess.js'
import getErrorText, { REPEAT_GROUP } from './errors'
console.log('REPEAT_GROUP', REPEAT_GROUP)
console.log('errors', getErrorText(REPEAT_GROUP))
let proFun = () => {
  let miniPro = {} // 挂载一些函数

  // showToast
  miniPro.showToast = (title, icon = 'none', duration = TOAST_DURATION) => {
    wepy.hideToast()
    setTimeout(() => {
      wepy.showToast({
        title,
        icon,
        mask: true,
        duration
      })
    }, 10)
  }

  // confirm
  miniPro.showConfirm = (obj) => {
    wepy.showModal({
      title: obj.title || '提示',
      content: obj.content || '',
      success: function(res) {
        console.log(res)
        if (res.confirm) {
          obj.callback && obj.callback(true)
          console.log('用户点击确定')
        } else if (res.cancel) {
          obj.callback && obj.callback(false)
          console.log('用户点击取消')
        }
      }
    });
  }

  // alert
  miniPro.showAlert = ({title, content, confirmText = '确定', success}) => {
    console.log('name, age', title, content)
    wepy.showModal({
      title,
      content,
      showCancel: false,
      confirmText,
      success: function(res) {
        if (res.confirm) {
          success && success('confirm')
          console.log('用户点击确定')
        } else if (res.cancel) {
          success && success('cancel')
          console.log('用户点击取消')
        }
      }
    })
  }

  // 获取access-token
  miniPro.getAccessToken = () => {
    return wepy.getStorageSync(WECHAT_ACCESS_TOKEN_NAME)
  }

  //  设置 access-token
  miniPro.setAccessToken = (toekn) => {
    return wepy.setStorageSync(WECHAT_ACCESS_TOKEN_NAME, toekn)
  }

  /**
  * 设置 refresh-token
  * @param {String} token - refresh-token
  */
  // miniPro.setRefreshToken = (toekn) => {
  //   return wepy.setStorageSync(WECHAT_Refresh_TOKEN_NAME, toekn)
  // }

  // 获取refresh-token
  // miniPro.getRefreshToken = () => {
  //   return wepy.getStorageSync(WECHAT_Refresh_TOKEN_NAME)
  // }

  /**
   * 设置 token_type
   * @param {String} token - token-type
   */
  // miniPro.setTokenType = (toekn) => {
  //   return wepy.setStorageSync(WECHAT_TOKEN_TYPE_NAME, toekn)
  // }

  // 获取 token_type
  // miniPro.getTokenType = (toekn) => {
  //   return wepy.getStorageSync(WECHAT_TOKEN_TYPE_NAME)
  // }

  /**
   * 设置 BIND_TOKEN
   * @param {String} token - BIND_TOKEN
   */
  // miniPro.setBindToken = (toekn) => {
  //   return wepy.setStorageSync(WECHAT_BIND_TOKEN_NAME, toekn)
  // }

  /**
   * 设置 BIND_TOKEN
   * @param {String} token - BIND_TOKEN
   */
  // miniPro.getBindToken = () => {
  //   return wepy.getStorageSync(WECHAT_BIND_TOKEN_NAME)
  // }

  /**
   * 成功后延时操作
   * @param {*} msg
   * @param {*} callback
   * @param {*} icon
   * @param {*} time
   * @example
   * miniPro.tipDelaySuccess('保存成功', () => { resolve(msg); }) 一般用于请求成功提示
   */
  miniPro.tipDelaySuccess = (msg, callback, icon = 'none', time = 2000) => {
    wepy.showToast({
      title: msg,
      icon: icon,
      duration: time,
      mask: true
    })
    setTimeout(() => {
      callback && callback()
    }, time)
  }

  /**
   * 请求
   * @param { Object } options - { header, method, haveLoading ...}
   * @param { function } fun - this.health.bind(this) // 一定需要bind一下this
   */

  miniPro.request = (options, fun) => {
    let _header = Object.assign({}, options.header)
    // const Refresh_Token = miniPro.getRefreshToken()
    const Access_Token = miniPro.getAccessToken()
    // Authorization token-type 有两种 WeakLogin(弱登录) || bearer(强登录)
    // const Token_Type = miniPro.getTokenType()
    let haveLoading = options.haveLoading || true
    return new Promise((resolve, reject) => {
      if (haveLoading) {
        wx.showLoading({
          title: '加载中',
          mask: true
        })
      }
      wepy.request({
        url: options.url,
        method: options.method || 'GET',
        data: options.data,
        header: {
          'Authorization': `${Access_Token}`,
          'content-type': 'application/x-www-form-urlencoded', // application/json
          ..._header
        },
        success(res) {
          setTimeout(() => { wepy.hideLoading() }, 0)
          let { statusCode, data } = res
          let errorCode = data.code === undefined ? 'none' : Number(data.code)
          let errMsg = data.message
          console.log('wx,', statusCode, data)
          if (statusCode === 200) {
            if (errorCode == 0) {
              if (options.noOutData) {
                resolve(res.data)
              } else {
                resolve(res.data.data)
              }
            } else {
              miniPro.showToast(errMsg)
              reject(data)
            }

            // if (errorCode === 0 || errorCode === 'none' || errorCode === -5) {
            //   resolve(res.data)
            // } else if (errorCode === 1000 || errorCode === 999) {
            //   if (Refresh_Token) { // 有Refresh_Token置換token，无走授权流程
            //     Auth.getInstance().refreshToken(Refresh_Token, fun);
            //   } else {
            //     Auth.getInstance().checkWebchatAuth(true, fun, true)
            //   }
            //   reject(data)
            // }
          } else if (statusCode == 401) {
            Auth.getInstance().checkWebchatAuth(true, fun, true)
          } else if (statusCode === 403) { // 未绑定需要绑定操作（手机号，验证码）
            // wepy.setStorageSync(WECHAT_ACCESS_TOKEN_NAME, res.data.token)
            // miniPro.setBindToken(res.data.token)
            miniPro.showToast('请先登录')
            setTimeout(() => {
              wepy.navigateTo({ url: '/pages/login/index' })
            }, TOAST_DURATION - 1000)
            reject(data)
          } else if (statusCode === 400) {
            let sss = reject(data)
            // 解决置换token的时候再次返回400 isGettingToken 为true无法再次走登录流程
            wepy.setStorageSync('isGettingToken', false);
            if (data.error) {
              if (data.error === 'invalid_grant' || data.error === 'wechat.code.expire' || data.error === 'wechatToken.time.out') {
                Auth.getInstance().checkWebchatAuth(true, fun, true)
              } else if (data.error === 'mobile.bind') {
                miniPro.showToast('手机号已被占用，无法获取数据');
              }
            }
          } else if (statusCode === 500 && data && data.status == 500) {
            reject(res.data)
          } else {
            miniPro.showToast('加载失败')
            reject(res)
          }
        },
        fail(err) {
          // 请求失败 30秒隐藏loading
          setTimeout(() => { wepy.hideLoading() }, 30 * 1000)
          reject(err)
        }
      })
    })
  }
  return miniPro
}

export default proFun()

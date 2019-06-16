/*
 * @description wechat 授权流程
 * @Author: icarbonx-mini 
 * @Date: 2018-06-29 11:08:45 
 * @Last Modified by: icarbonx-mini
 * @Last Modified time: 2018-07-16 11:27:28
 */

import wepy from 'wepy';
import { wechatLogin, refreshToken } from '../../services/login/index'
import { EVENT_QUEUE_NAME } from '../../common/js/config';
import miniPro from '../../utils/wepy-pro'
export default class Auth {
  constructor() { }

  static getInstance() {
    let _globalData = wepy.$instance.globalData
    if (!_globalData.auth) {
      _globalData.auth = new Auth()
    }
    return _globalData.auth
  }

  // /**
  //  * 刷新token
  //  * @param {string} Refresh_Token - 本地存储的access-token
  //  * @param {function} fun - bind的事件（刷新toekn后需要再次执行的事件，添加到事件队列里）
  //  */
  // refreshToken(Refresh_Token, fun = null) {
  //   this._addEvent(fun)
  //   refreshToken(Refresh_Token).then(res => {
  //     this._setToken(res);
  //   });
  // }
  /**
   * 登录微信
   * @param {*} userInfo
   * @param {*} fetchLofin
   */
  login(userInfo, fetchLofin = true) {
    let _globalData = wepy.$instance.globalData
    let _that = this
    return new Promise((resolve, reject) => {
      wx.login({
        success(resCode) {
          if (userInfo) {
            _globalData.userInfo = userInfo.userInfo
            if (fetchLofin) {
              _that._webchatLogin(resCode.code, userInfo, resolve, reject)
            } else {
              resolve(true)
            }
          } else {
            wx.getUserInfo({
              success: function (res) {
                _globalData.userInfo = res
                if (fetchLofin) {
                  _that._webchatLogin(resCode.code, res, resolve, reject)
                } else {
                  resolve(true)
                }
              }
            })
          }
        },
        fail(err) {
          reject(false)
        }
      })
    })
  }

  /**
   * 检查是否授权是否授权
   * @param {Boolean} flag 是否执行登录流程
   * @param {function} func - 需要点击到时间队列再次执行的事件
   * @param {Boolean} isHttp 是否http请求转发
   */
  checkWebchatAuth(flag = true, func = null, isHttp = false) {
    let _that = this
    if (isHttp) {
      _that._addEvent(func)
    }
    return new Promise((resolve) => {
      wx.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']) { // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            resolve(true)
            if (flag) {
              _that.login(null, flag)
            }
          } else {
            resolve(false)
            _that._addEvent(func)
            wx.navigateTo({ url: '/pages/authorize/index' })
          }
        }
      })
    })
  }

  /**
   * 设置全局需要的token
   * @param {Object} res
   */
  _setToken(res) {
    let { token: access_token } = res
    miniPro.setAccessToken(access_token)
    // miniPro.setRefreshToken(refresh_token)
    // miniPro.setTokenType(token_type)
    wepy.$instance.globalData[EVENT_QUEUE_NAME].toDoEvent()
  }

  /**
   * 添加时间到事件队列
   * @param {function} func 要添加的事件
   */
  _addEvent(fun) {
    if (fun && typeof fun === 'function') {
      let __route__ = wepy.$instance.__route__;
      wepy.$instance.globalData[EVENT_QUEUE_NAME].addEvent({
        key: `${__route__}${fun.name}`,
        fun
      });
    }
  }

  /**
   * 
   * @param {*} code 
   * @param {*} userInfo 
   * @param {*} resolve 
   * @param {*} reject 
   */
  _webchatLogin(code, userInfo, resolve, reject) {
    wechatLogin({ code: code, miniprogramParam: JSON.stringify(userInfo) }).then(res => {
      this._setToken(res)
      resolve(true)
      // this._toDoEvent()
    }).catch(err => {
      reject(false)
    })
  }
}

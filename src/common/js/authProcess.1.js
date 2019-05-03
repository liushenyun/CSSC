/*
 * @description wechat 授权流程
 * @Author: icarbonx-mini 
 * @Date: 2018-06-29 11:08:45 
 * @Last Modified by: icarbonx-mini
 * @Last Modified time: 2018-07-16 13:58:27
 */


import wepy from 'wepy';
import { wechatLogin } from '../../services/login/index'

const login = (cb, fetchLofin) => {
  wepy.login({
    success(resCOde) {
      wepy.getUserInfo({
        success: function (resInfo) {
          if (fetchLofin) {
            delete resInfo.errMsg;
            let isGettingToken = wepy.getStorageSync('isGettingToken');
            if (isGettingToken) {
              return
            }
            wechatLogin({
              code: resCOde.code,
              miniprogramParam: JSON.stringify(resInfo)
            })
              .then(msg => cb(resInfo))
              .catch();
          } else {
            cb(resInfo);
          }
        },
        fail(err) {
          // cb(_self.globalData.userInfo);
        }
      });
    },
    fail() {
      cb(_self.globalData.userInfo);
    }
  });
}

let canGetUserInfo = () => {
  return new Promise((resolve, rejcet) => {
    wepy.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wepy.getUserInfo({
            success() {
              resolve(true);
            },
            fail(err) {
              resolve(false);
            }
          });
        } else {
          resolve(false);
        }
      }
    });
  })
}

let getSetting = async function (cb, fetchLofin) {
  let _canGetUserInfo = await canGetUserInfo();
  // console.log('canGetUserInfo', _canGetUserInfo, cb)
  if (_canGetUserInfo) {
    wepy.checkSession({
      success(res) {
        login(cb, fetchLofin);
      },
      fail(err) {
        login(cb, fetchLofin);
        // console.log('checkSession', err)
      }
    });
  } else {
    wepy.navigateTo({
      url: '/pages/authorize/index'
    })
  }
}

const getUserInfo = (cb, fetchLofin) => {
  getSetting(cb, fetchLofin);
}
const authProcess = (cb, fetchLofin = false) => {
  getUserInfo(cb, fetchLofin);
}



export {
  authProcess,
  canGetUserInfo
}
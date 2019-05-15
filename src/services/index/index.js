import wepy from 'wepy'
import {
  apiIsAuth,
  apiGoodsList
} from './api';
import packagePromise from '../packagePromise';
import { request } from '../request';
import { WECHAT_APP_NAME, PAGE_INIT_SET_NAME } from '../../common/js/config'
import miniPro from '../../utils/wepy-pro'

// 可领取积分列表
const apiIsAuthF = (fun) => packagePromise((resolve, reject) => {
  console.log('apiGetGiftListF', fun)
  request({
    url: apiIsAuth()
  }, fun)
    .then(msg => {
      resolve(msg);
    })
    .catch(err => reject(err))
})

const apiGoodsListF = (fun) => packagePromise((resolve, reject) => {
  console.log('apiGetGiftListF', apiGoodsList())
  request({
    url: apiGoodsList(),
    method: 'POST',
    data: {
      Authorization: '5465465',
      pageForm: '4',
      page: 1,
      limit: 20
    }
  }, fun)
    .then(msg => {
      resolve(msg);
    })
    .catch(err => reject(err))
})

export {
  apiIsAuthF,
  apiGoodsListF
}

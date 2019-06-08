import wepy from 'wepy'
import {
  apiIsAuth,
  apiGoodsList,
  apiGetGoodsDetails,
  apiGetHomeData,
  apiGoodsLikePage
} from './api'
import packagePromise from '../packagePromise'
import { request } from '../request'
import miniPro from '../../utils/wepy-pro'

// 可领取积分列表
const apiIsAuthF = (fun) => packagePromise((resolve, reject) => {
  console.log('apiGetGiftListF', fun)
  request({
    url: apiIsAuth()
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 获取商品列表
const apiGoodsListF = (data, fun) => packagePromise((resolve, reject) => {
  console.log('apiGetGiftListF', apiGoodsList())
  request({
    url: apiGoodsList(),
    method: 'POST',
    noOutData: true,
    data: {
      limit: 20,
      ...data
    }
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 获取商品详情
const apiGetGoodsDetailsF = (goodsId, fun) => packagePromise((resolve, reject) => {
  console.log('apiGetGiftListF', goodsId, fun)
  request({
    url: apiGetGoodsDetails(goodsId),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 首页 => 获取首页数据
const apiGetHomeDataF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetHomeData(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 猜你喜欢商品
const apiGoodsLikePageF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGoodsLikePage(),
    method: 'POST',
    noOutData: true,
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

export {
  apiIsAuthF,
  apiGoodsListF,
  apiGetGoodsDetailsF,
  apiGetHomeDataF,
  apiGoodsLikePageF
}

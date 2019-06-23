import wepy from 'wepy'
import {
  apiGoodsList,
  apiVIPGoodsList,
  apiGetGoodsDetails,
  apiGetHomeData,
  apiGoodsLikePage,
  apiGoodFindCategoryId,
  apiCategoryList
} from './api'
import packagePromise from '../packagePromise'
// import { request } from '../request'
import miniPro from '../../utils/wepy-pro'
let request = miniPro.request

// 获取商品列表
const apiGoodsListF = (data, fun) => packagePromise((resolve, reject) => {
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

// 分页查询会员专区商量信息
const apiVIPGoodsListF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiVIPGoodsList(),
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

// 分类推荐，查询某个分类的商品
const apiGoodFindCategoryIdF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGoodFindCategoryId(),
    method: 'POST',
    noOutData: true,
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 获取推荐类别列表
const apiCategoryListF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiCategoryList(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

export {
  apiGoodsListF,
  apiVIPGoodsListF,
  apiGetGoodsDetailsF,
  apiGetHomeDataF,
  apiGoodsLikePageF,
  apiGoodFindCategoryIdF,
  apiCategoryListF
}

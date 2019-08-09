import wepy from 'wepy'
import {
  apiGoodsList,
  apiVIPGoodsList,
  apiGetGoodsDetails,
  apiGetGoodsIdByShare,
  apiGetGoodsShare,
  apiGetHomeData,
  apiGoodsLikePage,
  apiGoodFindCategoryId,
  apiCategoryList,
  apiMessageDelete,
  apiGetMessage,
  apiMessageRead
} from './api'
import packagePromise from '../packagePromise'
// import { request } from '../request'
import miniPro from '../../utils/wepy-pro'
let request = miniPro.request

// 获取商品列表 【分页已做】
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

// 分页查询会员专区商量信息 【分页已做】
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

// 根据scene获取商品ID
const apiGetGoodsIdByShareF = (shareId, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetGoodsIdByShare(shareId),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 获取商品分享图片
const apiGetGoodsShareF = (goodsId, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetGoodsShare(goodsId),
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

// 猜你喜欢商品 【分页不做，取前20即可】
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

// 分类推荐，查询某个分类的商品 【分页已做】
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

//  消息 => 删除消息
const apiMessageDeleteF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiMessageDelete(id),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

//  消息 => 分页获取消息【分页已做】
const apiGetMessageF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetMessage(),
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

//  消息 => 获取消息内容（阅读消息）
const apiMessageReadF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiMessageRead(data.id),
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
  apiGetGoodsIdByShareF,
  apiGetGoodsShareF,
  apiGetHomeDataF,
  apiGoodsLikePageF,
  apiGoodFindCategoryIdF,
  apiCategoryListF,
  apiMessageDeleteF,
  apiGetMessageF,
  apiMessageReadF
}

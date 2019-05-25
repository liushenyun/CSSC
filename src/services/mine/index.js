import wepy from 'wepy'
import {
  apiCancelOrder,
  apiConfirmOrder,
  apiCreateOrder,
  apiOrderFindPage
} from './api'
import packagePromise from '../packagePromise'
import { request } from '../request'
import miniPro from '../../utils/wepy-pro'

// 订单模块 => 取消订单
const apiCancelOrderF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiCancelOrder(),
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

// 订单模块 => 确认收货
const apiConfirmOrderF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiConfirmOrder(),
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

// 订单模块 => 下单
const apiCreateOrderF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiCreateOrder(),
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

// 订单模块 => 分页查询商品信息
const apiOrderFindPageF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiOrderFindPage(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

export {
  apiCancelOrderF,
  apiConfirmOrderF,
  apiCreateOrderF,
  apiOrderFindPageF
}

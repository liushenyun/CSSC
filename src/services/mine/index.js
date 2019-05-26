import wepy from 'wepy'
import {
  apiCancelOrder,
  apiConfirmOrder,
  apiCreateOrder,
  apiFindOrderDetail,
  apiOrderFindPage,
  apiCollectDelete,
  apiCollectFindPage,
  apiCollectSave,
  apiFootDelete,
  apiFootFindPage,
  apiPayCreate,
  apiAddressDelete,
  apiAddressFind,
  apiAddressFindPage,
  apiAddressSave,
  apiAddressUpdate
} from './api'
import packagePromise from '../packagePromise'
import { request } from '../request'
import miniPro from '../../utils/wepy-pro'

// 订单模块 => 取消订单
const apiCancelOrderF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiCancelOrder(),
    method: 'POST',
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

// 订单模块 => 订单详情
const apiFindOrderDetailF = (orderId, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiFindOrderDetail(orderId),
    method: 'GET'
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
    header: {
      'content-type': 'application/json'
    },
    data
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

// 收藏模块 => 删除收藏
const apiCollectDeleteF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiCollectDelete(id),
    method: 'DELETE'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 收藏模块 => 分页查询收藏
const apiCollectFindPageF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiCollectFindPage(),
    method: 'POST',
    noOutData: true,
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 收藏模块 => 添加收藏
const apiCollectSaveF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiCollectSave(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 足迹模块 => 删除足迹
const apiFootDeleteF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiFootDelete(id),
    method: 'DELETE'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 足迹模块 => 分页获取我的足迹
const apiFootFindPageF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiFootFindPage(),
    method: 'POST',
    noOutData: true,
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 支付模块 => 创建支付订单
const apiPayCreateF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiPayCreate(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 收货地址模块 => 删除收货地址
const apiAddressDeleteF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAddressDelete(id),
    method: 'DELETE'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 收货地址模块 => 获取地址详情
const apiAddressFindF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAddressFind(id),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 收货地址模块 => 分页获取我的收货地址
const apiAddressFindPageF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAddressFindPage(),
    method: 'POST',
    noOutData: true,
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 收货地址模块 => 添加收货地址
const apiAddressSaveF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAddressSave(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 收货地址模块 => 修改收货地址
const apiAddressUpdateF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAddressUpdate(),
    method: 'PUT',
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
  apiFindOrderDetailF,
  apiOrderFindPageF,
  apiCollectDeleteF,
  apiCollectFindPageF,
  apiCollectSaveF,
  apiFootDeleteF,
  apiFootFindPageF,
  apiPayCreateF,
  apiAddressDeleteF,
  apiAddressFindF,
  apiAddressFindPageF,
  apiAddressSaveF,
  apiAddressUpdateF
}

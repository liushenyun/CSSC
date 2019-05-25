import wepy from 'wepy'
import {
  apiChangeQuantity,
  apiCartDelete,
  apiCartFindPage,
  apiCartSave
} from './api'
import packagePromise from '../packagePromise'
import { request } from '../request'
import miniPro from '../../utils/wepy-pro'

// 更新购物车数据
const apiChangeQuantityF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiChangeQuantity(),
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

// 购物车移除商品
const apiCartDeleteF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiCartDelete(),
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

// 购物车分页查询
const apiCartFindPageF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiCartFindPage(),
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

// 添加购物车
const apiCartSaveF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiCartSave(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

export {
  apiChangeQuantityF,
  apiCartDeleteF,
  apiCartFindPageF,
  apiCartSaveF
}

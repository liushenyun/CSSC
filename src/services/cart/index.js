import wepy from 'wepy'
import {
  apiChangeQuantity,
  apiCartDelete,
  apiCartFindPage,
  apiCartSave
} from './api'
import packagePromise from '../packagePromise'
// import { request } from '../request'
import miniPro from '../../utils/wepy-pro'
let request = miniPro.request

// 更新购物车数据
const apiChangeQuantityF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiChangeQuantity(),
    method: 'PUT',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 购物车移除商品
const apiCartDeleteF = (goodsId, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiCartDelete(goodsId),
    method: 'DELETE'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 购物车分页查询 【分页暂时不做】
const apiCartFindPageF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiCartFindPage(),
    method: 'POST',
    noOutData: true,
    data: {
      limit: 1000,
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
  let _data = {
    goodsId: data.goodsId,
    specificationId: data.specificationId,
    colorId: data.colorId,
    quantity: data.quantity
  }
  if (!_data.colorId) {
    delete _data.colorId
  }
  request({
    url: apiCartSave(),
    method: 'POST',
    data: _data
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

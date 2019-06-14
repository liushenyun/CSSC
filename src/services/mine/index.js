import wepy from 'wepy'
import Validate from '../Validate'
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
  apiAddressByParent,
  apiFindDefAddress,
  apiFootFindPage,
  apiPayCreate,
  apiAddressDelete,
  apiAddressFind,
  apiAddressFindAll,
  apiAddressSave,
  apiAddressUpdate,
  apiAddressSetDefault,
  apiPartnerPhoneCode,
  apiPartnerPay,
  apiPartnerSave,
  apiSales,
  apiGetMyHomeData,
  apiPartnerFindMoneyPage,
  apiPartnerFindSpectators,
  apiPartnerData,
  apiVipFinanceConfig,
  apiVipPay
} from './api'
import packagePromise from '../packagePromise'
import { request } from '../request'
import miniPro from '../../utils/wepy-pro'

// 订单模块 => 取消订单
const apiCancelOrderF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiCancelOrder(id),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 订单模块 => 确认收货
const apiConfirmOrderF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiConfirmOrder(id),
    method: 'GET'
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
    noOutData: true,
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
  console.log(172, data)
  let _list = []
  data.remarksList.forEach(val => {
    if (val.remarks) {
      _list.push({
        orderChildId: val.id,
        remarks: val.remarks
      })
    }
  })
  console.log(181, _list)
  request({
    url: apiPayCreate(),
    method: 'POST',
    header: {
      'content-type': 'application/json' // application/json
    },
    data: {
      orderId: data.orderId,
      addressId: data.addressId,
      payRemarksList: _list,
      userId: 0
    }
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

// 收货地址模块 => 获取城市数据
const apiAddressByParentF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAddressByParent(id),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 收货地址模块 => 获取默认地址
const apiFindDefAddressF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiFindDefAddress(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})
// apiFindDefAddress

// 收货地址模块 => 分页获取我的收货地址
const apiAddressFindAllF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAddressFindAll(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 收货地址模块 => 添加收货地址
const apiAddressSaveF = (data, fun) => packagePromise((resolve, reject) => {
  let _params = data
  let vArr = [
    ['name', _params.name, '收货人', 'empty'],
    ['phone', _params.phone, '联系电话', 'empty|phone'],
    ['cityId', _params.cityId, '收货地址', 'empty'],
    ['address', _params.address, '详细地址', 'empty']
  ]
  let _Validated = Validate(vArr)
  if (!_Validated) { return }

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
  let _params = data
  let vArr = [
    ['name', _params.name, '收货人', 'empty'],
    ['phone', _params.phone, '联系电话', 'empty|phone'],
    ['cityId', _params.cityId, '收货地址', 'empty'],
    ['address', _params.address, '详细地址', 'empty']
  ]
  let _Validated = Validate(vArr)
  if (!_Validated) { return }
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

// 收货地址模块 => 设置默认地址
const apiAddressSetDefaultF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAddressSetDefault(id),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 合伙人申请模块 => 合伙人申请验证手机号
const apiPartnerPhoneCodeF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiPartnerPhoneCode(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 合伙人申请模块 => 申请高级合伙人付款
const apiPartnerPayF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiPartnerPay(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 合伙人申请模块 => 提交合伙人信息
const apiPartnerSaveF = (data, fun) => packagePromise((resolve, reject) => {
  // 1：普通合伙人 2：高级合伙人 3：代购合伙人
  let _params = data
  let vArr = [
    ['name', _params.name, '姓名', 'empty'],
    ['phone', _params.phone, '电话', 'empty|phone'],
    ['code', _params.code, '验证码', 'empty|verifyCode']
  ]
  if (data.type == 3) {
    vArr.push(['address', _params.address, '地址', 'empty'])
  }
  let _Validated = Validate(vArr)
  if (!_Validated) { return }
  request({
    url: apiPartnerSave(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 商品售后模块 => 商品售后api
const apiSalesF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiSales(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 用户模块 => 获取我的页面数据
const apiGetMyHomeDataF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetMyHomeData(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 合伙人工作台 => 分页查询奖金记录
const apiPartnerFindMoneyPageF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiPartnerFindMoneyPage(),
    method: 'POST',
    noOutData: true,
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 合伙人工作台 => 分页查询我推广的客户
const apiPartnerFindSpectatorsF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiPartnerFindSpectators(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 合伙人工作台 => 获取合伙人工作台数据
const apiPartnerDataF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiPartnerData(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 会员模块 => 会员费、合伙人申请费用配置
const apiVipFinanceConfigF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiVipFinanceConfig(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 会员模块 => 开通会员
const apiVipPayF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiVipPay(),
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
  apiFindOrderDetailF,
  apiOrderFindPageF,
  apiCollectDeleteF,
  apiCollectFindPageF,
  apiCollectSaveF,
  apiFootDeleteF,
  apiFootFindPageF,
  apiPayCreateF,
  apiAddressDeleteF,
  apiAddressByParentF,
  apiFindDefAddressF,
  apiAddressFindF,
  apiAddressFindAllF,
  apiAddressSaveF,
  apiAddressUpdateF,
  apiAddressSetDefaultF,
  apiPartnerPhoneCodeF,
  apiPartnerPayF,
  apiPartnerSaveF,
  apiSalesF,
  apiGetMyHomeDataF,
  apiPartnerFindMoneyPageF,
  apiPartnerFindSpectatorsF,
  apiPartnerDataF,
  apiVipFinanceConfigF,
  apiVipPayF
}

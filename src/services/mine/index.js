import wepy from 'wepy'
import Validate from '../Validate'
import  {Version} from '../../common/js/config'
import {
  apiCancelOrder,
  apiConfirmOrder,
  apiCreateOrder,
  apiFindOrderDetail,
  apiOrderFindPage,
  apiLogisticsInfo,
  apiCollectDelete,
  apiCollectFindPage,
  apiCollectSave,
  apiFootDelete,
  apiAddressByParent,
  apiFindDefAddress,
  apiFootFindPage,
  apiPayCreate,
  apiRefund,
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
  apiFindAfterSalesPage,
  apiFindCompleteOrderList,
  apiGetMyHomeData,
  apiPartnerFindMoneyPage,
  apiPartnerFindSpectators,
  apiGetMoneyCategory,
  apiPartnerData,
  apiGetPartnerPoster,
  apiUploadPartnerHead,
  apiVipFinanceConfig,
  apiVipPay,
  apiPartnerWithdrawalApply,
  apiVipUpgradeYearMember,
  apiAfterSaleInfo,
  wxFileUpload,
  apiServeSalesPage,
  apiAfterSaleServeInfo,
  apiAfterSaleServeProcess,
  apiExpressCompany,
  apiExpressInfo,
  apiMyOrderInfo,
  apiSalesModify,
  apiAfterSalecancelOrder,
  apiGoodsComment,
  apiMyOrderInfoComment,
  apiGetHearder,
  apiRemindDeliverGoods,
  apiChangeAfterSaleInfo,
  apiAfterSaleGoodsComment,
  wxSubscribeMessage
} from './api'
import packagePromise from '../packagePromise'
// import { request } from '../request'
import miniPro from '../../utils/wepy-pro'
let request = miniPro.request
let upload = miniPro.upload

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


// 我的订单 => 查看订单详情
const apiMyOrderInfoF = (orderMasterId, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiMyOrderInfo(orderMasterId),
    method: 'GET',
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 我的订单 => 查看订单详情  (评价的准备信息 商品信息)
const apiMyOrderInfoCommentF = (orderChildId, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiMyOrderInfoComment(orderChildId),
    method: 'GET',
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})
// // 订单模块 => 订单详情
// const apiFindOrderDetailF = (orderId, fun) => packagePromise((resolve, reject) => {
//   request({
//     url: apiFindOrderDetail(orderId),
//     method: 'GET'
//   }, fun)
//     .then(msg => {
//       resolve(msg)
//     })
//     .catch(err => reject(err))
// })
const apiFindOrderDetailF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiFindOrderDetail(),
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

// 订单模块 => 分页查询商品信息【分页已做】
const apiOrderFindPageF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiOrderFindPage(),
    method: 'GET',
    noOutData: true,
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 我的订单模块 => 查询 获取头部标题以及订单提醒
const apiGetHearderF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetHearder(),
    method: 'GET',
    noOutData: true,
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 我的订单模块 => 提醒商家发货
const apiRemindDeliverGoodsF = (orderChildId, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiRemindDeliverGoods(orderChildId),
    method: 'POST',
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 订单模块 => 查看物流信息
const apiLogisticsInfoF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiLogisticsInfo(id),
    method: 'GET'
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
    header: {
      'content-type': 'application/json' // application/json
    },
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 支付模块 => 商品退款
const apiRefundF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiRefund(id),
    method: 'GET'
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
  if (data.type == 3) { // 代购合伙人
    vArr.push(['address', _params.address, '地址', 'empty'])
    delete _params.inviteId
  }

  if (data.type == 2) { // 高级合伙人
    vArr.push(['inviteId', _params.inviteId, '邀请人ID', 'empty'])
    delete _params.address
  }
  if (data.type == 1) { // 普通合伙人
    delete _params.address
    delete _params.inviteId
  }

  let _Validated = Validate(vArr)
  if (!_Validated) { return }
  request({
    url: apiPartnerSave(),
    method: 'POST',
    data: _params
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 商品售后模块 => 商品分页 弹框查询获取所有快递公司
const apiExpressCompanyF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiExpressCompany(),
    method: 'GET',
    noOutData: true,
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 商品售后模块 => 商品售后 填写快递单号 提交
const apiExpressInfoF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiExpressInfo(),
    method: 'POST',
    noOutData: true,
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 商品售后模块 => 商品售后 提交申请售后
const apiSalesF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiSales(),
    method: 'POST',
    header: {
      'content-type': 'application/json' // application/json
    },
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 商品评价 =>
const apiGoodsCommentF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGoodsComment(),
    method: 'POST',
    header: {
      'content-type': 'application/json' // application/json
    },
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 售后服务单评价 =>
const apiAfterSaleGoodsCommentF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAfterSaleGoodsComment(),
    method: 'POST',
    // header: {
    //   'content-type': 'application/json' // application/json
    // },
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 商品售后模块 => 商品售后 提交申请售后 （从修改申请入口进来）
const apiSalesModifyF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiSalesModify(),
    method: 'POST',
    header: {
      'content-type': 'application/json' // application/json
    },
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 商品售后模块 => 获取售后服务单列表 2-处理中  3-待评价 不传则为获取所有的服务单
const apiServeSalesPageF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiServeSalesPage(),
    method: 'GET',
    noOutData: true,
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 商品售后订单 => 查看售后服务单详情
const apiAfterSaleServeInfoF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAfterSaleServeInfo(id),
    method: 'GET',
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 商品售后订单 => 查看售后服务单服务进度
const apiAfterSaleServeProcessF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAfterSaleServeProcess(id),
    method: 'GET',
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 商品售后模块 => 商品分页查询售后记录
const apiFindAfterSalesPageF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiFindAfterSalesPage(),
    method: 'GET',
    noOutData: true,
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 商品售后模块 => 获取可申请售后的订单
const apiFindCompleteOrderListF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiFindCompleteOrderList(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 商品售后订单 => 查看售后订单详情
const apiAfterSaleInfoF = (orderDetailId, afterSalesId,fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAfterSaleInfo(orderDetailId,afterSalesId),
    method: 'GET',
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 商品售后订单 => 查看售后 服务订单详情 处理中 修改申请的
const apiChangeAfterSaleInfoF = (id,fun) => packagePromise((resolve, reject) => {
  request({
    url: apiChangeAfterSaleInfo(id),
    method: 'GET',
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 商品售后订单 => 取消 售后服务单申请
const apicancelOrderApplyF = (id,fun) => packagePromise((resolve, reject) => {
  request({
    url: apiAfterSalecancelOrder(id),
    method: 'POST',
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
    noOutData: true,
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 合伙人工作台 => 获取奖金类目
const apiGetMoneyCategoryF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetMoneyCategory(),
    method: 'GET'
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

// apiGetPartnerPoster
// // 合伙人工作台 => 获取合伙人海报
const apiGetPartnerPosterF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetPartnerPoster(),
    method: 'POST'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 合伙人工作台 => 上传合伙人头像
const apiUploadPartnerHeadF = (filePath, fun) => packagePromise((resolve, reject) => {
  upload({
    url: apiUploadPartnerHead(),
    filePath
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

// 合伙人工作台 => 合伙人申请提现
const apiPartnerWithdrawalApplyF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiPartnerWithdrawalApply(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 升级年卡会员
const apiVipUpgradeYearMemberF = (fun) => packagePromise((resolve, reject) => {
  console.log('aaaa')
  request({
    url: apiVipUpgradeYearMember(),
    method: 'POST',
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
});



//文件图片上传
const wxFileUploadF = (dataType,fun,fileUrl,fileName,cb) => packagePromise((resolve, reject) => {
  const Access_Token = miniPro.getAccessToken()
  wx.uploadFile({
    url: wxFileUpload(), //仅为示例，非真实的接口地址
    filePath: fileUrl,
    name: fileName,
    method: 'POST',//请求方式
    header: {
      'version': `${Version}`,
      'Authorization': `${Access_Token}`,
      'content-type': 'multipart/form-data', // application/json
    },
    formData: {
      type: dataType
    },
    success (res){
      const data = res.data
      let string = JSON.parse(data);
      cb(string)
    }
  })
});

/* 消息订阅 */
const wxSubscribeMessageF = (type) => packagePromise((resolve, reject) => {
  request({  //消息订阅
    url: wxSubscribeMessage(type),
    method: 'GET',
  }, null)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
});

export {
  apiCancelOrderF,
  apiConfirmOrderF,
  apiCreateOrderF,
  apiFindOrderDetailF,
  apiOrderFindPageF,
  apiLogisticsInfoF,
  apiCollectDeleteF,
  apiCollectFindPageF,
  apiCollectSaveF,
  apiFootDeleteF,
  apiFootFindPageF,
  apiPayCreateF,
  apiRefundF,
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
  apiFindAfterSalesPageF,
  apiFindCompleteOrderListF,
  apiGetMyHomeDataF,
  apiAfterSaleInfoF,
  apiPartnerFindMoneyPageF,
  apiPartnerFindSpectatorsF,
  apiGetMoneyCategoryF,
  apiPartnerDataF,
  apiGetPartnerPosterF,
  apiUploadPartnerHeadF,
  apiVipFinanceConfigF,
  apiVipPayF,
  apiPartnerWithdrawalApplyF,
  apiVipUpgradeYearMemberF,
  wxFileUploadF,
  apiServeSalesPageF,
  apiAfterSaleServeInfoF,
  apiAfterSaleServeProcessF,
  apiExpressCompanyF,
  apiExpressInfoF,
  apiMyOrderInfoF,
  apiSalesModifyF,
  apicancelOrderApplyF,
  apiGoodsCommentF,
  apiMyOrderInfoCommentF,
  apiGetHearderF,
  apiRemindDeliverGoodsF,
  apiChangeAfterSaleInfoF,
  apiAfterSaleGoodsCommentF,
  wxSubscribeMessageF
}

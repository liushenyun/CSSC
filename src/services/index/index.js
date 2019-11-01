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
  apiMessageRead,
  apiVipExchange,
  apiGroupBuy,
  apiGetGroupBuyInfo,
  apiPurchaseGetOrderInfo,
  apiPurchaseOrderPay,
  apiPurchaseOrderPaySuccess,
  apiPurchaseShareInfo,
  apiBuyOrderInfo
} from './api';
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
const apiGetGoodsIdByShareF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGetGoodsIdByShare(),
    method: 'POST',
    data
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

//  会员兑奖
const apiVipExchangeF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiVipExchange(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

/**=================== 团购start =================================*/
// 新增 团购页 列表数据
const apiGroupBuyF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiGroupBuy(),
    method: 'GET',
    noOutData: true,  //如果分页  加这个标志设置为true  数据结构
    data
  }, fun)
    .then(msg => {
      console.log(msg)
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 获取团购页商品详情
const apiGetGroupBuyInfoF = (indexId, fun) => packagePromise((resolve, reject) => {
  console.log(indexId)
  request({
    url: apiGetGroupBuyInfo(indexId),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
});

// 获取订单信息
const apiPurchaseGetOrderInfoF = (data, fun) => packagePromise((resolve, reject) => {
  let url = apiPurchaseGetOrderInfo();
  request({
    url: url,
    method: 'GET',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
});

// 支付
const apiPurchaseOrderPayF = (data, fun) => packagePromise((resolve, reject) => {
  let url = apiPurchaseOrderPay();
  request({
    url: url,
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
});

// 支付成功
const apiPurchaseOrderPaySuccessF = (data, fun) => packagePromise((resolve, reject) => {
  let url = apiPurchaseOrderPaySuccess();
  request({
    url: url,
    method: 'GET',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
});

// 分享
const apiPurchaseShareInfoF = (data, fun) => packagePromise((resolve, reject) => {
  let url = apiPurchaseShareInfo();
  request({
    url: url,
    method: 'GET',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
});

// 获取订单信息
const apiBuyOrderInfoF = (data, fun) => packagePromise((resolve, reject) => {
  let url = apiBuyOrderInfo();
  request({
    url: url,
    method: 'GET',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
});

/**=================== 团购end =================================*/

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
  apiMessageReadF,
  apiVipExchangeF,
  apiGroupBuyF,
  apiGetGroupBuyInfoF,
  apiPurchaseGetOrderInfoF,
  apiPurchaseOrderPayF,
  apiPurchaseOrderPaySuccessF,
  apiPurchaseShareInfoF,
  apiBuyOrderInfoF
}

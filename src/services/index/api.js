import { MAIN_DOMAIN } from '../../common/js/config';
// import index from 'wepy-eslint/src';

// 分类推荐，查询某个分类的商品
const apiGoodFindCategoryId = () => `${MAIN_DOMAIN}/api/buy/goods/find_category_id`

// 获取推荐类别列表
const apiCategoryList = () => `${MAIN_DOMAIN}/api/buy/goods/get_recommend_category_list`

// 分页查询商品信息
const apiGoodsList = () => `${MAIN_DOMAIN}/api/buy/goods/find_page`

// 分页查询会员专区商量信息
const apiVIPGoodsList = () => `${MAIN_DOMAIN}/api/buy/goods/find_vip_goods_page`

// 获取商品详情
const apiGetGoodsDetails = (goodsId) => `${MAIN_DOMAIN}/api/buy/goods/get_goods_details/${goodsId}`

// 根据scene获取商品ID
const apiGetGoodsIdByShare = () => `${MAIN_DOMAIN}/api/buy/goods/get_by_share_id`

// 获取商品分享图片
const apiGetGoodsShare = (goodsId) => `${MAIN_DOMAIN}/api/buy/goods/get_goods_details_share/${goodsId}`

// 猜你喜欢，分页获取商品信息
const apiGoodsLikePage = () => `${MAIN_DOMAIN}/api/buy/goods/like_page`

// 首页 => 获取首页数据
const apiGetHomeData = () => `${MAIN_DOMAIN}/api/home/get_home_data`

//  消息 => 删除消息
const apiMessageDelete = (id) => `${MAIN_DOMAIN}/api/message/delete/${id}`

//  消息 => 分页获取消息
const apiGetMessage = () => `${MAIN_DOMAIN}/api/message/find_page`

//  消息 => 获取消息内容（阅读消息）
const apiMessageRead = (messageId) => `${MAIN_DOMAIN}/api/message/read/${messageId}`

//  会员兑奖
const apiVipExchange = () => `${MAIN_DOMAIN}/api/wx/user/vip/exchange`

/**========================= 团购start =================================*/
// 新增 团购页 列表数据
const apiGroupBuy = () => `${MAIN_DOMAIN}/api/group/purchase/list`

// 团购页 详情数据
const apiGetGroupBuyInfo = (indexId) => `${MAIN_DOMAIN}/api/group/purchase/info?id=${indexId}`

// 获取订单信息
const apiPurchaseGetOrderInfo = () => `${MAIN_DOMAIN}/api/group/purchase/prepare`

//支付
const apiPurchaseOrderPay = () => `${MAIN_DOMAIN}/api/group/purchase/pay`

//支付成功
const apiPurchaseOrderPaySuccess = () => `${MAIN_DOMAIN}/api/group/purchase/pay/success`

//分享信息
const apiPurchaseShareInfo = () => `${MAIN_DOMAIN}/api/group/purchase/share`

//获取订单信息
const apiBuyOrderInfo = () => `${MAIN_DOMAIN}/api/buy/order/info`

//获取团购信息
const apiGroupInfo = () => `${MAIN_DOMAIN}/api/group/purchase/group/info`

//获取权限
const apiGroupPermission = () => `${MAIN_DOMAIN}/api/group/purchase/permission`

/**========================= 团购end =================================*/

export {
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
  apiBuyOrderInfo,
  apiGroupInfo,
  apiGroupPermission
}

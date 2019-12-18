import { MAIN_DOMAIN } from '../../common/js/config';

// 订单模块 => 取消订单
const apiCancelOrder = (orderId) => `${MAIN_DOMAIN}/api/buy/order/cancel/${orderId}`

// 订单模块 => 确认收货
const apiConfirmOrder = (orderId) => `${MAIN_DOMAIN}/api/buy/order/confirm_goods/${orderId}`

// 订单模块 => 下单
const apiCreateOrder = () => `${MAIN_DOMAIN}/api/buy/order/create`

// 订单模块 => 订单详情
const apiFindOrderDetail = (orderId) => `${MAIN_DOMAIN}/api/buy/order/prepare`

// 订单模块 => 查看 订单详情 新
const apiMyOrderInfo = (orderMasterId) => `${MAIN_DOMAIN}/api/buy/order/infos?orderMasterId=${orderMasterId}`

// 订单模块 => 查看 订单详情 （评价进来的商品准备信息 ）
const apiMyOrderInfoComment = (orderChildId) => `${MAIN_DOMAIN}/api/buy/order/list/detail?orderChildId=${orderChildId}`

// 订单模块 => 分页查询商品订单列表
const apiOrderFindPage = () => `${MAIN_DOMAIN}/api/buy/order/page`

// 订单模块 => 获取头部标题以及订单提醒
const apiGetHearder = () => `${MAIN_DOMAIN}/api/buy/order/list/tips`

// 订单模块 => 提醒商家发货
const apiRemindDeliverGoods = (orderChildId) => `${MAIN_DOMAIN}/api/buy/order/remind?orderChildId=${orderChildId}`

// 订单模块 => 查看物流信息
const apiLogisticsInfo = (id) => `${MAIN_DOMAIN}/api/buy/order/get_logistics_info/${id}`

// 收藏模块 => 删除收藏
const apiCollectDelete = (id) => `${MAIN_DOMAIN}/api/goods/collection/delete/${id}`

// 收藏模块 => 分页查询收藏
const apiCollectFindPage = (id) => `${MAIN_DOMAIN}/api/goods/collection/find_page`

// 收藏模块 => 添加收藏
const apiCollectSave = (id) => `${MAIN_DOMAIN}/api/goods/collection/save`

// 足迹模块 => 删除足迹
const apiFootDelete = (id) => `${MAIN_DOMAIN}/api/goods/browse/delete/${id}`

// 足迹模块 => 分页获取我的足迹
const apiFootFindPage = (id) => `${MAIN_DOMAIN}/api/goods/browse/find_page`

// 支付模块 => 创建支付订单
// const apiPayCreate = (id) => `${MAIN_DOMAIN}/api/pay/create`
const apiPayCreate = (id) => `${MAIN_DOMAIN}/api/buy/order/create`

// 支付模块 => 商品退款
const apiRefund = (id) => `${MAIN_DOMAIN}/api/pay/refund/${id}`

// 收货地址模块 => 删除收货地址
const apiAddressDelete = (id) => `${MAIN_DOMAIN}/api/user/address/delete/${id}`

// 收货地址模块 => 获取地址详情
const apiAddressFind = (id) => `${MAIN_DOMAIN}/api/user/address/find_by_id/${id}`

// 收货地址模块 => 获取城市数据
const apiAddressByParent = (parentId) => `${MAIN_DOMAIN}/api/user/address/find_by_parentid/${parentId}`

// 收货地址模块 => 获取默认地址
const apiFindDefAddress = () => `${MAIN_DOMAIN}/api/user/address/find_def_address`

// 收货地址模块 => 分页获取我的收货地址
const apiAddressFindAll = () => `${MAIN_DOMAIN}/api/user/address/find_all`

// 收货地址模块 => 添加收货地址
const apiAddressSave = () => `${MAIN_DOMAIN}/api/user/address/save`

// 收货地址模块 => 修改收货地址
const apiAddressUpdate = () => `${MAIN_DOMAIN}/api/user/address/update`

// 收货地址模块 => 设置默认地址
const apiAddressSetDefault = (id) => `${MAIN_DOMAIN}/api/user/address/set_def/${id}`

// 合伙人申请模块 => 合伙人申请验证手机号
const apiPartnerPhoneCode = () => `${MAIN_DOMAIN}/api/partner/apply/get_validate_code`

// 合伙人申请模块 => 申请高级合伙人付款
const apiPartnerPay = () => `${MAIN_DOMAIN}/api/partner/apply/pay`

// 合伙人申请模块 => 提交合伙人信息
const apiPartnerSave = () => `${MAIN_DOMAIN}/api/partner/apply/save`

// 商品售后模块 => 商品分页查询弹框获取所有物流公司
const apiExpressCompany = () => `${MAIN_DOMAIN}/api/logistics/page`

// 商品售后模块 => 商品售后 提交运单号等
const apiExpressInfo = () => `${MAIN_DOMAIN}/api/after/sales/shipped`

// 商品售后模块 => 商品售后api
const apiSales = () => `${MAIN_DOMAIN}/api/after/sales/apply`

// 商品评价
const apiGoodsComment = () => `${MAIN_DOMAIN}/api/goods/comment/save`

// 售后服务单评价
const apiAfterSaleGoodsComment = () => `${MAIN_DOMAIN}/api/after/sales/evaluate`

// 商品售后模块 => 商品售后api （从修改申请入口进来）
const apiSalesModify = () => `${MAIN_DOMAIN}/api/after/sales/update`

// 商品售后模块 => 商品分页查询售后记录
const apiFindAfterSalesPage = () => `${MAIN_DOMAIN}/api/after/sales/list/order`

// 商品售后模块 => 商品分页查询服务单列表
const apiServeSalesPage = () => `${MAIN_DOMAIN}/api/after/sales/list`

// 商品售后订单模块 => 查询服务单 详情
const apiAfterSaleServeInfo = (id) => `${MAIN_DOMAIN}/api/after/sales/info?id=${id}`

// 商品售后订单模块 => 查询服务单进度
const apiAfterSaleServeProcess = (id) => `${MAIN_DOMAIN}/api/after/sales/progress?afterSalesId=${id}`


// 商品售后模块 => 获取可申请售后的订单
const apiFindCompleteOrderList = () => `${MAIN_DOMAIN}/api/sales/find_complete_order_list`

// 商品售后订单模块 => 查看 申请售后订单详情
const apiAfterSaleInfo = (orderDetailId,afterSalesId) => `${MAIN_DOMAIN}/api/after/sales/apply/prepare?orderDetailId=${orderDetailId}&afterSalesId=${afterSalesId}`

// 商品售后订单模块 => 查看售后 服务订单详情 处理中 修改申请的
const apiChangeAfterSaleInfo = (id) => `${MAIN_DOMAIN}/api/after/sales/info?id=${id}`

// 商品售后订单模块 => 取消服务申请售后订单
const apiAfterSalecancelOrder = (id) => `${MAIN_DOMAIN}/api/after/sales/cancel?id=${id}`

// 用户模块 => 获取我的页面数据
const apiGetMyHomeData = () => `${MAIN_DOMAIN}/api/wx/user/get_my_home_data`

// 合伙人工作台 => 分页查询奖金记录
const apiPartnerFindMoneyPage = () => `${MAIN_DOMAIN}/api/partner/find_award_money_record_page`

// 合伙人工作台 => 分页查询我推广的客户
const apiPartnerFindSpectators = () => `${MAIN_DOMAIN}/api/partner/find_spectators`

// 合伙人工作台 => 获取奖金类目
const apiGetMoneyCategory = () => `${MAIN_DOMAIN}/api/partner/get_award_money_category`

// 合伙人工作台 => 获取合伙人工作台数据
const apiPartnerData = () => `${MAIN_DOMAIN}/api/partner/get_partner_data`

// 合伙人工作台 => 获取合伙人海报
const apiGetPartnerPoster = () => `${MAIN_DOMAIN}/api/partner/get_partner_poster`

// 合伙人工作台 => 上传合伙人头像
const apiUploadPartnerHead = () => `${MAIN_DOMAIN}/api/partner/upload_partner_head`

// 合伙人工作台 => 合伙人申请提现
const apiPartnerWithdrawalApply = () => `${MAIN_DOMAIN}/api/partner/withdrawal_apply`

// 会员模块 => 会员费、合伙人申请费用配置
const apiVipFinanceConfig = () => `${MAIN_DOMAIN}/api/vip/get_finance_config`

// 会员模块 => 开通会员
const apiVipPay = () => `${MAIN_DOMAIN}/api/vip/pay`

// 微信文件上传
const wxFileUpload = () => `${MAIN_DOMAIN}/api/image/upload`

// 升级年卡会员模块
const apiVipUpgradeYearMember = () => `${MAIN_DOMAIN}/api/vip/upgrade`

// 订阅消息F
const wxSubscribeMessage = (type) => `${MAIN_DOMAIN}/wx/subscribe/message?type=${type}`
export {
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
  apiFootFindPage,
  apiPayCreate,
  apiRefund,
  apiAddressDelete,
  apiAddressFind,
  apiAddressByParent,
  apiFindDefAddress,
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
}

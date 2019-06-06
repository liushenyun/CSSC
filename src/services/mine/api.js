import { MAIN_DOMAIN } from '../../common/js/config';

// 订单模块 => 取消订单
const apiCancelOrder = (orderId) => `${MAIN_DOMAIN}/api/buy/order/cancel/${orderId}`

// 订单模块 => 确认收货
const apiConfirmOrder = (orderId) => `${MAIN_DOMAIN}/api/buy/order/confirm_goods/${orderId}`

// 订单模块 => 下单
const apiCreateOrder = () => `${MAIN_DOMAIN}/api/buy/order/create`

// 订单模块 => 订单详情
const apiFindOrderDetail = (orderId) => `${MAIN_DOMAIN}/api/buy/order/find_order_pay_info/${orderId}`

// 订单模块 => 分页查询商品信息
const apiOrderFindPage = () => `${MAIN_DOMAIN}/api/buy/order/find_page`

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
const apiPayCreate = (id) => `${MAIN_DOMAIN}/api/pay/create`

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

// 商品售后模块 => 商品售后api
const apiSales = () => `${MAIN_DOMAIN}/sales/apply`

export {
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
  apiAddressByParent,
  apiFindDefAddress,
  apiAddressFindAll,
  apiAddressSave,
  apiAddressUpdate,
  apiAddressSetDefault,
  apiPartnerPhoneCode,
  apiPartnerPay,
  apiPartnerSave,
  apiSales
}

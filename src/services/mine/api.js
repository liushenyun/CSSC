import { MAIN_DOMAIN } from '../../common/js/config';

// 订单模块 => 取消订单
const apiCancelOrder = (orderId) => `${MAIN_DOMAIN}/api/buy/order/cancel/${orderId}`

// 订单模块 => 确认收货
const apiConfirmOrder = (orderId) => `${MAIN_DOMAIN}/api/buy/order/confirm_goods/${orderId}`

// 订单模块 => 下单
const apiCreateOrder = () => `${MAIN_DOMAIN}/api/buy/order/create`

// 订单模块 => 分页查询商品信息
const apiOrderFindPage = () => `${MAIN_DOMAIN}/api/buy/order/find_page`

export {
  apiCancelOrder,
  apiConfirmOrder,
  apiCreateOrder,
  apiOrderFindPage
}

import { MAIN_DOMAIN } from '../../common/js/config';

// 更新购物车数据
const apiChangeQuantity = () => `${MAIN_DOMAIN}/api/cart/change_quantity`

// 购物车移除商品
const apiCartDelete = (id) => `${MAIN_DOMAIN}/api/cart/delete/${id}`

// 购物车分页查询
const apiCartFindPage = () => `${MAIN_DOMAIN}/api/cart/find_page`

// 添加购物车
const apiCartSave = () => `${MAIN_DOMAIN}/api/cart/save`
// 获取商品详情

export {
  apiChangeQuantity,
  apiCartDelete,
  apiCartFindPage,
  apiCartSave
}

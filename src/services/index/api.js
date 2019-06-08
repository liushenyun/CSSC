import { MAIN_DOMAIN } from '../../common/js/config';

console.log(4, MAIN_DOMAIN)
/**
 * @description 获取可领取积分列表
 * server-developer: 庄钊文
 * api-url: http://confluence.icarbonx.cn/pages/viewpage.action?pageId=11506926
 */
const apiIsAuth = () => `${MAIN_DOMAIN}/mini-royal-sugar/person-auth/isAuth`
// 分页查询商品信息
const apiGoodsList = () => `${MAIN_DOMAIN}/api/buy/goods/find_page`
// 获取商品详情
const apiGetGoodsDetails = (goodsId) => `${MAIN_DOMAIN}/api/buy/goods/get_goods_details/${goodsId}`

// 猜你喜欢，分页获取商品信息
const apiGoodsLikePage = () => `${MAIN_DOMAIN}/api/buy/goods/like_page`

// 首页 => 获取首页数据
const apiGetHomeData = () => `${MAIN_DOMAIN}/api/home/get_home_data`

export {
  apiIsAuth,
  apiGoodsList,
  apiGetGoodsDetails,
  apiGetHomeData,
  apiGoodsLikePage
}

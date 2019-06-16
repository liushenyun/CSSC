import { MAIN_DOMAIN } from '../../common/js/config';

// 分类推荐，查询某个分类的商品
const apiGoodFindCategoryId = () => `${MAIN_DOMAIN}/api/buy/goods/find_category_id`

// 获取推荐类别列表
const apiCategoryList = () => `${MAIN_DOMAIN}/api/buy/goods/get_recommend_category_list`

// 分页查询商品信息
const apiGoodsList = () => `${MAIN_DOMAIN}/api/buy/goods/find_page`
// 获取商品详情
const apiGetGoodsDetails = (goodsId) => `${MAIN_DOMAIN}/api/buy/goods/get_goods_details/${goodsId}`

// 猜你喜欢，分页获取商品信息
const apiGoodsLikePage = () => `${MAIN_DOMAIN}/api/buy/goods/like_page`

// 首页 => 获取首页数据
const apiGetHomeData = () => `${MAIN_DOMAIN}/api/home/get_home_data`

export {
  apiGoodsList,
  apiGetGoodsDetails,
  apiGetHomeData,
  apiGoodsLikePage,
  apiGoodFindCategoryId,
  apiCategoryList
}

import { MAIN_DOMAIN } from '../../common/js/config';

// 文化衍生故事模块 => 删除自己评论
const apiTaleCommentDelete = (id) => `${MAIN_DOMAIN}/api/tale/comment/delete/${id}`

// 文化衍生故事模块 => 分页获取某个故事的评论
const apiTaleCommentFindPage = (id) => `${MAIN_DOMAIN}/api/tale/comment/find_page`

// 文化衍生故事模块 => 文化衍生故事发布评论
const apiTaleCommentSave = (id) => `${MAIN_DOMAIN}/api/tale/comment/save`

// 文化衍生故事模块 => 获取故事详情
const apiTaleFindDetails = (id) => `${MAIN_DOMAIN}/api/tale/find_tale_details/${id}`

// 文化衍生故事模块 => 分页获取故事列表
const apiTaleFindPage = (id) => `${MAIN_DOMAIN}/api/tale/find_tale_page`

// 文化衍生故事模块 => 点赞
const apiTalePatronize = (taleId) => `${MAIN_DOMAIN}/api/tale/patronize/${taleId}`

// 文化衍生故事模块 => 点赞
const apiTaleUnpatronize = (taleId) => `${MAIN_DOMAIN}/api/tale/unpatronize/${taleId}`

// 商品分类模块 => 分类【tab】
const apiCategoryByParent = (parentId) => `${MAIN_DOMAIN}/api/manage/goods/category/find_by_parentid/${parentId}`

// 商品分类模块 => 获取分类页面的banner信息
const apiCategoryGetBanner = () => `${MAIN_DOMAIN}/api/manage/goods/category/get_banner`

export {
  apiTaleCommentDelete,
  apiTaleCommentFindPage,
  apiTaleCommentSave,
  apiTaleFindDetails,
  apiTaleFindPage,
  apiTalePatronize,
  apiTaleUnpatronize,
  apiCategoryByParent,
  apiCategoryGetBanner
}

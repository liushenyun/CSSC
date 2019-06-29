import wepy from 'wepy'
import {
  apiTaleCommentDelete,
  apiTaleCommentFindPage,
  apiTaleCommentSave,
  apiTaleFindDetails,
  apiTaleFindPage,
  apiTalePatronize,
  apiTaleUnpatronize,
  apiCategoryByParent,
  apiCategoryGetBanner
} from './api'
import packagePromise from '../packagePromise'
// import { request } from '../request'
import miniPro from '../../utils/wepy-pro'
let request = miniPro.request

// 文化衍生故事模块 => 删除自己评论
const apiTaleCommentDeleteF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiTaleCommentDelete(),
    method: 'DELETE'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 文化衍生故事模块 => 分页获取某个故事的评论 【分页暂时不做】
const apiTaleCommentFindPageF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiTaleCommentFindPage(),
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

// 文化衍生故事模块 => 文化衍生故事发布评论
const apiTaleCommentSaveF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiTaleCommentSave(),
    method: 'POST',
    data: {
      ...data
    }
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 文化衍生故事模块 => 获取故事详情
const apiTaleFindDetailsF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiTaleFindDetails(id),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 文化衍生故事模块 => 分页获取故事列表【分页已做】
const apiTaleFindPageF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiTaleFindPage(),
    method: 'POST',
    noOutData: true,
    data: {
      limit: 200,
      ...data
    }
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 文化衍生故事模块 => 点赞
const apiTalePatronizeF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiTalePatronize(data.id),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 文化衍生故事模块 => 点赞
const apiTaleUnpatronizeF = (data, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiTaleUnpatronize(data.id),
    method: 'DELETE'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 商品分类模块 => 分类【tab】
const apiCategoryByParentF = (id, fun) => packagePromise((resolve, reject) => {
  request({
    url: apiCategoryByParent(id),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 商品分类模块 => 获取分类页面的banner信息
const apiCategoryGetBannerF = (fun) => packagePromise((resolve, reject) => {
  request({
    url: apiCategoryGetBanner(),
    method: 'GET'
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

export {
  apiTaleCommentDeleteF,
  apiTaleCommentFindPageF,
  apiTaleCommentSaveF,
  apiTaleFindDetailsF,
  apiTaleFindPageF,
  apiTalePatronizeF,
  apiTaleUnpatronizeF,
  apiCategoryByParentF,
  apiCategoryGetBannerF
}

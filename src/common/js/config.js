/*
 * 项目配置（每个小程序项目都必须用到）
 * @Author: icarbonx-mini 
 * @Date: 2018-06-29 11:10:20 
 * @Last Modified by: icarbonx-mini
 * @Last Modified time: 2018-07-05 18:27:081
 */

/**
 * 每个项目需要改变
 * BASE_NAME：前端随便取个适合自己项目的名字
 * WECHAT_APP_NAME：【重要】 由后台定义给出
 * WECHAT_AUTH_BASE: 【重要】由后台定义每个项目不一样
 * APP_MINI_SKY_ID: 【重要】如果使用到天窗就需要后台定义给出
 */
const BASE_NAME = 'Wechat_Sugar';
const WECHAT_APP_NAME = 'Wechat_Sugar_Mini_Program'; // app name
const WECHAT_AUTH_BASE = 'Y29tLm1ldW0ubWluaS5zdWdhcjowN2ZlMzBiOWI0YjlmZmY1'; // 后台给出登录使用的验证字符串 Y29tLm1ldW0ubWluaS5tYWxsOjQwMmZiZDZkNGM2NkNjY2M=
const TOAST_DURATION = 2000; // toast duration
const DEBOUNCE_TIME = 300; // debounce time
const APP_MINI_SKY_ID = `mall_mini_sky_id`; // 天窗id
const BANNER_VERSION = 'v1'; // banner 版本
const GOODS_TOPIC_APP_ID = 'MiniProgram_Psychology'; // 商品topic app_id
const MAIN_DOMAIN = 'https://main.icarbonx.com';
const MAIN_API_DOMAIN = 'https://mainapi.icarbonx.com';
const API_DOMAIN = 'https://api.icarbonx.com';
const EMI_DOMAIN = 'https://eim.icarbonx.com';
const WBVIEW_PAGE_URL = '/pages/webview/index';
const WECHAT_ACCESS_TOKEN_NAME = `${BASE_NAME}_Access_TOKEN`; // access_token存储名字
const WECHAT_Refresh_TOKEN_NAME = `${BASE_NAME}_Refresh_TOKEN`; // Refresh_TOKEN存储名字
const WECHAT_TOKEN_TYPE_NAME = `${BASE_NAME}_TOKEN_TYPE`; // TOKEN_TYPE存储名字
const WECHAT_BIND_TOKEN_NAME = `${BASE_NAME}_BIND_TOKEN`; // BIND_TOKEN 绑定token 403登录页面时候使用
const APP_REFRESH_API = `${BASE_NAME}_Refresh_Api`; // 需要刷新接口 options
const PAGE_INIT_SET_NAME = 'initSet'; // 页面page   initSet 名字
const EVENT_QUEUE_NAME = 'eventQueue';
// 血糖特有
const BLOOD_TIP_READED = 'BLOOD_TIP_READED';
// 弹出框解释说明
const TIP_GLYCEMIC_TEXT = 'GlycemicText'; // 用餐升糖

export {
  TOAST_DURATION,
  DEBOUNCE_TIME,
  APP_MINI_SKY_ID,
  BANNER_VERSION,
  GOODS_TOPIC_APP_ID,
  MAIN_DOMAIN,
  MAIN_API_DOMAIN,
  WBVIEW_PAGE_URL,
  WECHAT_APP_NAME,
  WECHAT_AUTH_BASE,
  API_DOMAIN,
  EMI_DOMAIN,
  WECHAT_ACCESS_TOKEN_NAME,
  WECHAT_Refresh_TOKEN_NAME,
  WECHAT_BIND_TOKEN_NAME,
  APP_REFRESH_API,
  PAGE_INIT_SET_NAME,
  WECHAT_TOKEN_TYPE_NAME,
  EVENT_QUEUE_NAME,
  BLOOD_TIP_READED,
  TIP_GLYCEMIC_TEXT
}

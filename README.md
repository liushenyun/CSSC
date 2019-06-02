# 血糖小程序

### 开发框架
[WePY](https://tencent.github.io/wepy/)

### 使用
```js
# install dependencies
> npm install

# dev
> wepy build --watch

# build
> wepy build
```

### 功能
- [x] 分包加载（所有项目都应该进行分包加载）
- [x] 过滤器文件 utils/filter.wxs（间接实现过滤器功能）

### 强调
1、接口调试前需要在config.js 进行配置.
- WECHAT_APP_NAME [后台给出]
- AUTH_BASIC_STRING [后台给出]

2、接口出处必须注释(方便后期维护)
```js
/**
 * @description 登录（微信授权流程）
 * server-developer: 
 * api-url:
 */
const apiwechatLogin = () => `${API_DOMAIN}/connect/wechat`
```

3、微信开发者工具, 关闭ES6转ES5。否则会报错
```js
> Cannot read property '$pages' of undefined
```

### 项目结构

```
├── common               // 
│   ├── css
│   ├── js
├── components           // 组件
├── images   
├── mixins   
├── pages                // 页面
│   ├── authorize           // 微信授权页面
│   ├── index               // app index页面   
│   ├── login               // 绑定页面（手机号） 
│   ├── weview              // webview页面（加载h5）
│   ├── pagekageA           // pagekageA（分包加载
├── services             // services
├── utils
│   ├── base             // 基本工具函数
│   ├── errors.js        // 错误码
│   ├── feature.js       // 页面功能函数
│   ├── filter.wxs       // 页面过滤器文件
│   └── wepy-pro.js      // 全局函数封装
├── app.wpy
```

---

### 函数标识
- F - fetch- getGameListF  请求
- C - click - 页面点击操作
- G - general - 普通函数（功能）
- 不加局部普通函数
- 用餐升糖



### 迭代时解决的问题

1、迭代需要解决的问题
  - [X] wxss解决过滤器1
  - [] 登录验证码错误提示
  - [] 接入阿拉丁（需要在阿拉丁创建账号，有一个key）

### git更新日志
[CHANGELOG](./CHANGELOG.md)


### 错误积累
- 'wechat.code.expire': 小程序没有绑定公众平台
http://mjx-wx.natapp1.cc/swagger-ui.html#!/
http://mjx-wx.natapp1.cc

固定永久token：026ecc8e63cc47d1acbc6567f520b001
请求头格式：{Authorization:026ecc8e63cc47d1acbc6567f520b001}

### 资料缺少
1. 缺少图片
  + 成氏商城logo图片【Y】
  + 授权页logo【Y】
  + 订单页面，暂无订单图片
  + 搜索页面 缺少收藏图标
2. 缺少会员权益（UI + 交互）
3. 缺少文案：招商采购政策、关于我们、用户协议、联系我们

### 接口调试问题记录
1. 我的订单这几个转态UI要重新整理一下
2. 足迹无法删除
3. 支付失败页面UI，文化衍生列表UI，故事详情页面UI
3. 【UI】支付成功页面，建议背景图使用渐变实现，由于小程序对代码体积有2M的限制，所以尽量减少大图片使用
4. 首页消息页面内容和UI
5. 会员专区接口和UI（重新确定）
6. 分类推荐接口和UI
7. 分类接口
8. 我的缺少接口
9. 合伙人工作台缺少接口
10. 会员模块接口
11. 申请售后模块接口
12. 拼团相关
13. 查看物流页面缺少UI
14. 加入会员 => 缺少会员权益相关介绍
15. 加入合伙人 => 三种合伙人权益介绍
15. 增加获取默认地址数据的接口


### 接口记录
[x] 订单模块
[x] 购物车模块
[x] 合伙人申请模块
[] 流水记录
[x] 商品模块
[x] 商品评论模块
[x] 商品收藏模块
[x] 商品售后模块
[x] 商品支付模块
[x] 收货地址模块
[] 文化衍生故事模块
[x] 用户模块
[x] 足迹模块


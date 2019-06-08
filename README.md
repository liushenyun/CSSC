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

### 2019-06-08
1. 【UI】缺少切图：我的订单 => 暂无订单
2. 【文档】代购合伙人三种协议、员权益相关介绍，文档缺少
3. 【UI】缺少故事详情页面UI（老成推荐 => 故事）
4. 【接口】缺少售后申请，列表页接口(3个)、 退货、换货、补发商品等接口
5. 【UI】换货页面UI和交互
6. 【UI】3种合伙人分享页面
7. 【UI】售后 => 处理中UI
8. 【接口】猜你喜欢，建议不要分页获取，只要取前20就可以
9. 【接口】合伙人相关接口待完善[合伙人工作台、奖金提现、奖励明细接口]
10. 【接口】分类banner接口
11. 【接口】消息列表接口
12. 【免密支付】会员免密支付待尝试，缺少会员明细接口
13. 【客服】客服相关模块
14. 【团购（接口）】团购相关模块
15. 【接口】订单模块 - 退款，提现发货，查看物流，延长收货，订单评论
16. 【会员（接口）】会员专区更多接口
17. 【UI+接口】订单模块 - 订单评论UI


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


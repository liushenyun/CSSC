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

### 资料缺少

1. 我的 => 消息、设备图片
2. tab栏: 设备未选中图片
3. 用户反馈：问题类型选中右上角图标
3. 设备：缺少扫码添加设备和输入添加设备按钮
5. 设备首页：缺少当前水温
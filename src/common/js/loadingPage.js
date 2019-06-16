// const app = getApp()
// const LoadingPage = (options) => {
//   let { startOnLoad = () => { }, startOnshow, ...otherMethods } = options
//   return Object.assign({
//     ...otherMethods,
//     onLoad(option) {
//       startOnLoad.call(this, option)
//       this.WeAuth = app.WeAuth();
//       this.initSet()
//     },
//     onShow() {
//       startOnshow.call(this)
//     }
//   })
// }
// export default LoadingPage

class LoadingPage {
  constructor() {

  }

  onShow() {
  }
}
export default LoadingPage

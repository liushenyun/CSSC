import wepy from 'wepy'

export default class LoadIngMixin extends wepy.mixin {
  onShow() {
    console.log('mixin onShow')
    this.startOnShow();
  }

  onLoad(options) {
    console.log('mixin onLoad')
    this.startOnLoad(options);
  }
}

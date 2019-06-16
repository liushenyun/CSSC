import wepy from 'wepy'

export default class LoadIngMixin extends wepy.mixin {
  onShow() {
    this.startOnShow();
  }

  onLoad(options) {
    this.startOnLoad(options);
  }
}

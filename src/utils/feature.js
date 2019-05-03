/*
 * @description 页面的一个功能函数(项目独有)
 * @Author: icarbonx-mini
 * @Date: 2018-06-29 11:04:12 
 * @Last Modified by: icarbonx-mini
 * @Last Modified time: 2018-08-21 11:51:47
 */

import miniPro from './wepy-pro.js';
import Tips from '@/common/js/textConfig';

export const showAlertTips = (type = 'GlycemicText') => {
  miniPro.showAlert({
    title: Tips[type].title,
    content: Tips[type].content,
    confirmText: '知道'
  });
}

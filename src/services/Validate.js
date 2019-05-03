import isEmpty from "../utils/base/isEmpty";
import isPhone from '../utils/base/isPhone';

/**
 * empty 为空验证
 * password 密码验证
 * phone 手机号验证
 * area [dt 地区验证]
 * email 邮箱验证
 * account 账号验证
 * phoneDim 手机号模糊查询【没用到】
 * greaterZero 正整数验证
 */
const RegConfig = {
  empty: {
    validate: vData => {
      return !isEmpty(vData);
    },
    con: '不能为空'
  },
  phone: {
    validate: vData => {
      return isPhone(vData);
    },
    con: '不正确'
  },
  verifyCode: {
    validate: vData => {
      return /^\d{4,6}$/.test(vData)
    },
    con: '不正确'
  },
  area: {
    validate: vData => {
      if (vData === '' || vData === 0 || vData === '0' || vData === undefined) {
        return false;
      } else {
        return true;
      }
    },
    con: '必须选择'
  },
};

const Validate = (params) => {
  for (let key1 = 0; key1 < params.length; key1++) {
    let _item = params[key1]; // ['password', '126', '密码', 'trim|password']
    let _vCon = _item[1]; // 需要验证的内容
    let _vErrTip = _item[2]; // 错误提示的内容
    let _vRegArr = _item[3].split('|'); // 需要验证的规则
    for (let key2 = 0; key2 < _vRegArr.length; key2++) {
      let _vRegName = _vRegArr[key2]; // 验证规则名字
      /**
       * options 必须写在首位
       * 首先判断是否包含options
       * 如果是options就立刻判断空验证，如果为空跳出本次循环
       */
      if (_vRegName === 'options') { // 'options|empty|account'
        let _vEmptyReturn = RegConfig['empty'].validate(_vCon);
        if (!_vEmptyReturn) { // options选项时，如果为空就跳出判断
          break;
        }
      } else {
        let _vReturn = RegConfig[_vRegName].validate(_vCon);
        if (!_vReturn) {
          wx.showToast({
            title: _vErrTip + RegConfig[_vRegName].con,
            icon: 'none',
            duration: 2000
          })
          return false;
        }
      }
    }
  }
  return true;
};
export default Validate

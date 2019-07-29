import axios from 'axios';
import qs from 'qs';
import { Toast, Modal } from 'antd-mobile';

const alert = Modal.alert;

let baseURL = '';
if (process.env.NODE_ENV === 'development') {
  baseURL = '/';
} else {
  baseURL = '/';
}

// 使用由库提供的配置的默认值来创建实例
var instance = axios.create({
  baseURL: baseURL,
  timeout: 10000
});

let request = {
  get(url, opts = {}) {
    return new Promise((resolve, reject) => {
      instance({
        method: 'GET',
        url: url + handleOptions(opts)
      })
        .then(res => {
          if (res.data.code === 200) {
            resolve(res.data);
          } else {
            Toast.fail(res.msg, 3, () => {});
          }
        })
        .catch(e => {
          console.log(e);
          alert('系统提示', '网络错误，请稍候再试', [
            { text: '确定', onPress: () => {} }
          ]);
        });
    });
  },
  post(url, opts = {}) {
    return new Promise((resolve, reject) => {
      instance({
        method: 'POST',
        url: url,
        data: qs.stringify(opts),
        headers: {
          contentType: 'application/x-www-form-urlencoded'
        }
      })
        .then(res => {
          if (res.data.code === 200) {
            resolve(res.data);
          } else {
            Toast.fail(res.msg, 3, () => {});
          }
        })
        .catch(e => {
          console.log(e);
          reject(e);
          alert('系统提示', '网络错误，请稍候再试', [
            { text: '确定', onPress: () => {} }
          ]);
        });
    });
  }
};

function handleOptions(opts) {
  if (typeof opts !== 'object') {
    return '';
  }

  let arr = Object.keys(opts);
  let newArr = [];
  arr.forEach((item, index) => {
    if (opts[item]) {
      newArr.push(`${item}=${opts[item]}`);
    }
  });
  let newOpts = newArr.join('&');
  return newOpts ? '?' + newOpts : '';
}

export default request;

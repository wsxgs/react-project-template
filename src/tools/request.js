import axios from 'axios'
import { LoadingStore } from './../mobx'
// import qs from 'qs'
import { Toast, Modal } from 'antd-mobile'
const alert = Modal.alert

const baseURL = '/'
const APP_ENV = process.env.REACT_APP_ENV
console.log(APP_ENV)
// 根据环境配置不同路径
// if (APP_ENV === 'dev') {
//   baseURL = '/'
// } else if (APP_ENV === 'test') {
//   baseURL = '/'
// } else {
//   baseURL = '/'
// }

// 使用由库提供的配置的默认值来创建实例
var request = axios.create()
request.defaults.baseURL = baseURL
request.defaults.timeout = 10000

// request.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 设置请求头
    // config.headers['token] = 'AUTH_TOKEN'
    // stringify请求参数
    // if (config.method === 'post') {
    //   config.data = qs.stringify(config.data)
    // }
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    if (response.data.code === 200) {
    } else if (response.data.code === 401) {
      // 去登录
    } else {
      // 关闭加载中
      LoadingStore.toggleLoadingStatus(false)
      Toast.fail(response.data.message, 1.5, () => {})
    }
    return response.data
  },
  function (error) {
    // 关闭加载中
    LoadingStore.toggleLoadingStatus(false)
    // 对响应错误做点什么
    let msg = ''
    if (error.response) {
      if (error.response.status === '500') {
        msg = '系统错误'
      } else if (error.response.statusText.indexOf('timeout') !== -1) {
        msg = '请求超时'
      } else {
        msg = '网络错误'
      }
    } else {
      msg = '网络错误'
    }

    alert('系统提示', `${msg}，请稍候再试`, [
      { text: '确定', onPress: () => {} }
    ])
    return Promise.reject(error)
  }
)

export default request

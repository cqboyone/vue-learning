import Axios from "axios";

export function request(config) {
  // 1.创建axios实例
  const instance = Axios.create({
    baseURL: 'https://mall.toolman.ga/mall',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 1.修改config
    // 2.显示等待图标/动画
    // 3.某些网络请求需要携带token
    return config
  }, error => {
    // console.log(error);
    return error
  })
  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data;
  }, error => {
    // console.log(error);
    return error
  })

  // 3.发送真正的网络请求
  return instance(config)
}

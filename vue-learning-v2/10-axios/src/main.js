import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// http://vueapi:8000/api/z8/home/multidata
// http://vueapi:8000/api/z8/home/data?type=pop&page=1

// 1.基本使用
Axios({
  url: 'http://vueapi:8000/api/z8/home/multidata'
}).then((res) => {
    // console.log(res);
  }
)

Axios({
  url: 'http://vueapi:8000/api/z8/home/data',
  // 针对get请求url参数拼接
  params: {
    type: 'pop',
    page: 1
  }
}).then((res) => {
  // console.log(res.data);
})

// 2.axios并发请求
Axios.all([
  Axios({
    url: 'http://vueapi:8000/api/z8/home/multidata'
  }),
  Axios({
    url: 'http://vueapi:8000/api/z8/home/data',
    // 针对get请求url参数拼接
    params: {
      type: 'pop',
      page: 1
    }
  })
]).then(
  Axios.spread((res1, res2) => {
    // console.log(res1);
    // console.log(res2);
  })
)

// // 3.全局配置
// Axios.defaults.baseURL = 'http://vueapi:8000/api/z8'
// Axios.defaults.timeout = 5000 //毫秒
// Axios.all([
//   Axios({
//     url: '/home/multidata'
//   }),
//   Axios({
//     url: '/home/data',
//     // 针对get请求url参数拼接
//     params: {
//       type: 'pop',
//       page: 1
//     }
//   })
// ]).then(
//   (res) => {
//     // console.log(res);
//     res.forEach((data) => {
//       // console.log(data.data);
//     })
//   }
// )
//
// Axios({
//   url: 'http://152.136.185.210:8000/api/z8/category'
// }).then((res)=>{
//   console.log(res);
// })

// // 4.创建对应的axios实例，可以为不同的服务器创建多个
// const instance1 = Axios.create({
//   baseURL: 'http://vueapi:8000/api/z8'
//   , timeout: 5000
// })
//
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })
//
// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// 5.封装一个request模块
import {request} from "./network/request";

// request(
//   {
//     url: '/home/multidata'
//   },
//   res => {
//     console.log(res);
//   },
//   err => {
//     console.log(err);
//   }
// )

// request({
//   baseConfig: {
//   },
//   success() {
//
//   },
//   failure() {
//
//   }
// })

//最后简化效果
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

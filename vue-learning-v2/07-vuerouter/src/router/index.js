import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from "../components/User";

const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        // {
        //   path: '',
        //   redirect: 'news'
        // },
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      },
      // 独享守卫
      beforeEnter: (to, from, next) => {
        // console.log('***');
        next()
      }
    },
    {
      path: '/user/:userId2',
      component: User,
      meta: {
        title: '用户'
      },
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: '档案'
      },
    }
  ],
  // 去掉hash值
  mode: 'history',
  linkActiveClass: 'active'
})

export default router
// 全局守卫
// 前置守卫/钩子（在跳转之前运行的回调函数）
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  // console.log('+++');
  next()
})

// 全局守卫
// 后置钩子
router.afterEach((to, from) => {
  // console.log('---');
})

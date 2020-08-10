<template>
  <div id="app">
    <h2>我是app组件</h2>
    <!--    1.直接用router-link 标签-->
    <!--    <router-link to="/home" tag="button">首页</router-link>-->
    <!--    <router-link to="/about" tag="button">关于</router-link>-->
    <!--    2.通过代码改变路由-->
    <!--    <button @click="homeClick">首页</button>-->
    <!--    <button @click="aboutClick">关于</button>-->
    <!--    <router-view></router-view>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!--    &lt;!&ndash;    3.动态路由&ndash;&gt;-->
    <!--    <router-link :to="'/user/'+userId">用户</router-link>-->
    <!--    &lt;!&ndash;    <router-link to="/profile">档案</router-link>&ndash;&gt;-->
    <!--    <router-link :to="profile">档案</router-link>-->

    <button @click="userClick">用户</button>
    <button @click="proFileClick">档案</button>

    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan',
      profile: {
        path: '/profile',
        query: {
          name: 'vv',
          age: 21
        }
      }
    }
  },
  methods: {
    homeClick() {
      //这里的$router指的是router/index.js里面new出来的那个对象
      this.$router.push('/home')
    },
    aboutClick() {
      this.$router.push('/about')
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    proFileClick() {
      this.$router.push(this.profile)
    }
  }
}
</script>

<style>
.active {
  color: red;
}
</style>

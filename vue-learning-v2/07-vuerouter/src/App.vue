<template>
  <div id="app">
    <h2>我是app组件</h2>
    <!--    1.直接用router-link 标签-->
    <!--    <router-link to="/home" tag="button">首页</router-link>-->
    <!--    <router-link to="/about" tag="button">关于</router-link>-->
    <!--    2.通过代码改变路由-->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick() {
      this.$router.push('/home')
    },
    aboutClick() {
      this.$router.push('/about')
    }
  }
}
</script>

<style>
.active {
  color: red;
}
</style>

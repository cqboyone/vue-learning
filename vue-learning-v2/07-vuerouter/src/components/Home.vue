<template>
  <div>
    <h2>我是主页</h2>
    <p>我是内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: '你好啊',
      path: '/home/news',
    }
  },
  created() {
    console.log('Home created');
  },
  destroyed() {
    console.log('Home destroyed');
  },
  // 处于活动状态的时候执行。只有在该组件被保持了状态，即被被<keep-alive>包裹了才执行。
  activated() {
    // console.log('activated');
    this.$router.push(this.path)
  },
  // 处于不活动状态的时候执行。只有在该组件被保持了状态，即被被<keep-alive>包裹了才执行。
  // deactivated() {
  //   // console.log('deactivated');
  // },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path
    // console.log(this.path);
    next()
  }
}
</script>

<style scoped>

</style>

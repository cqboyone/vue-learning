<template>
  <div>
    <h2>我是用户页面</h2>
    <p>哈哈哈哈哈</p>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed:{
    userId(){
      //这里的$route指的是routers的数组里面当前活跃的路由对象
      return this.$route.params.userId2
    }
  }
}
</script>

<style scoped>

</style>

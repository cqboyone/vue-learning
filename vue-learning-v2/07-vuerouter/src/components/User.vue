<template>
  <div>
    <h2>我是用户页面</h2>
    <p>哈哈哈哈哈</p>
    <h2>{{ userId }}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      //这里的$route指的是routers的数组里面当前活跃的路由对象
      return this.$route.params.userId2
    }
  },
  methods: {
    btnClick() {
      console.log(this.$router);
      console.log(this.$route);
      // 所有的组件都继承自Vue的原型,这里没有定义name，但是在main.js定义了，所以可以获取
      console.log(this.name)
    }
  }
}
</script>

<style scoped>

</style>

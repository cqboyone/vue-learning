<template>
  <div>
    <p class="title">{{message}}</p>
    <cpn></cpn>
  </div>
</template>

<script>
  import Cpn from "./Cpn";

  export default {
    name: "App",
    components: {Cpn},
    data() {
      return {
        message: '你好'
      }
    },
    comments: {
      Cpn,
    },
    methods: {}
  }
</script>

<style scoped>
  .title {
    color: black;
  }
</style>
<template>
  <div class="wrapper">
    <ul class="content">
      <li v-for="i in 100">{{ i }}</li>
    </ul>
  </div>

</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Category",
  data() {
    return {
    }
  },
  mounted() {
    new BScroll('.wrapper', {})
  }
}
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: red;

  overflow: hidden;
  /*overflow-y: scroll;*/
}
</style>

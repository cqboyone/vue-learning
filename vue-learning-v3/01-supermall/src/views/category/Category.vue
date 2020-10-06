<template>
  <div class="wrapper">
    <ul class="content">
      <button @click="btnClick">按钮</button>
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
      scroll: Object
    }
  },
  mounted() {
    // 等组件挂载完成（mounted）才能使用BScroll
    this.scroll = new BScroll('.wrapper', {
      probeType: 3,
      pullUpLoad: true,
    })
    this.scroll.on('scroll', (position) => {
      // console.log(position);
    })
    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多');
    })
  },
  methods: {
    btnClick() {
      console.log('点击事件');
    }
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

<template>
  <!-- ref/children 绑定组件 -->
  <!-- ref如果是绑定在组件中的，那么通过this.$refs.refname获取到的是一个组件对象 -->
  <!-- ref如果是绑定在普通的元素中的，那么通过this.$refs.refname获取到的是一个元素对象 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    })
    //2.监听滚动的位置。必须设置probeType,才会生效
    this.scroll.on('scroll', (position) => {
      // console.log(position);
      this.$emit('scroll', position)
    })
    //3.监听上拉事件
    this.scroll.on('pullingUp', () => {
      // console.log('上拉加载更多');
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :good="item" :key="item.iid"/>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  props: {
    goods: {
      types: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem,
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }


</style>

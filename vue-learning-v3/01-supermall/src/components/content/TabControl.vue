<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" class="tab-control-item" @click="chooseTab(index)"
         :class="{active:index == currentIndex}">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      types: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    chooseTab(index) {
      this.currentIndex = index;
    },
  }

}
</script>

<style scoped>
.tab-control {
  display: flex;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-high-text);
}


</style>

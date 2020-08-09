<template>
  <div>
    <h2>我是profile组件</h2>
    <p>name:{{ name }}</p>
    <p>age:{{ age }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$route.query.name
    }
  },
  computed: {
    age() {
      return this.$route.query.age

    }
  }
}
</script>

<style scoped>

</style>

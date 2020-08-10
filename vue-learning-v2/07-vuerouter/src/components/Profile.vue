<template>
  <div>
    <h2>我是profile组件</h2>
    <p>name:{{ name }}</p>
    <p>age:{{ age }}</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      name: this.$route.query.name
    }
  },
  computed: {
    age() {
      return this.$route.query.age

    }
  },
  created() {
    console.log('Profile created');
  },
  destroyed() {
    console.log('Profile destroyed');
  }
}
</script>

<style scoped>

</style>

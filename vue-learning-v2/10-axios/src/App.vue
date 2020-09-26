<template>
  <div id="app">
    <p>{{ category }}</p>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      category: ''
    }
  },
  created() {
    Axios({
      url: 'http://152.136.185.210:8000/api/z8/category'
    }).then(res => {
      this.category = res;
    })
  }
}
</script>

<style>
</style>

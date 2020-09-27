<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <HomeRecommendView :recommends="recommends"></HomeRecommendView>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";
import * as homeApi from "@/network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  components: {
    NavBar,HomeSwiper,HomeRecommendView
  },
  created() {
    homeApi.getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    }).catch(err => {
      console.log(err);
    })

  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>

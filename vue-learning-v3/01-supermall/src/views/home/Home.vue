<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view/>
    <tab-control :title="['流行','新款','精选']" class="tab-control"/>

    <div style="height: 1000px"></div>
  </div>
</template>

<script>
import * as homeApi from "@/network/home";

import TabControl from "@/components/content/tabControl/TabControl";
import NavBar from "@/components/common/navbar/NavBar";

import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      }
    }
  },
  components: {
    NavBar, HomeSwiper, HomeRecommendView, FeatureView, TabControl,
  },
  created() {
    this.getHomeMultidata();
    this.getGoods('pop',)
    this.getGoods('new',)
    this.getGoods('sell',)
  },
  methods: {
    getHomeMultidata() {
      homeApi.getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      }).catch(err => {
        console.log(err);
      })
    },
    getGoods(type) {
      const pageNow = this.goods[type].page + 1;
      homeApi.getHomeGoods(type, pageNow).then(res => {
        console.log(res.data.list);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}

#home {
  margin-top: 44px;
}

.tab-control {
  position: sticky;
  top: 44px;
}
</style>

<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll"
            :probe-type="3" @scroll="contentScroll">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <feature-view/>
      <tab-control :title="goodsName" class="tab-control" @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import * as homeApi from "@/network/home";

import TabControl from "@/components/content/tabControl/TabControl";
import NavBar from "@/components/common/navbar/NavBar";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";

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
      },
      goodsName: ['流行', '新款', '精选'],
      goodsType: ['pop', 'new', 'sell'],
      goodsIndex: 0,
      isShowBackTop: false,
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.goodsType[this.goodsIndex]].list
    },
  },
  components: {
    NavBar, HomeSwiper, HomeRecommendView, FeatureView, TabControl, GoodsList, Scroll, BackTop,
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods('pop',)
    this.getHomeGoods('new',)
    this.getHomeGoods('sell',)
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh,50);
    this.$bus.$on('itemImageLoad', () => {
      refresh();
    })
  },
  methods: {
    /**
     * 网络请求相关
     */
    getHomeMultidata() {
      homeApi.getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      }).catch(err => {
        console.log(err);
      })
    },
    getHomeGoods(type) {
      const pageNow = this.goods[type].page + 1;
      homeApi.getHomeGoods(type, pageNow).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      }).catch(err => {
        console.log(err);
      })
    },

    /**
     * 事件监听
     */
    tabClick(index) {
      this.goodsIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      this.isShowBackTop = position.y < -1000;
    },
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
          console.log('调用debounce完成');
        }, delay)
      }
    },
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}

#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 8;
}

/*.content {*/
/*  margin-top: 44px;*/
/*  height: calc(100% - 93px);*/
/*  overflow: hidden;*/
/*}*/

.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;

}
</style>

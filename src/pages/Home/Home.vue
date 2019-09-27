<template>
  <div id="homeContainer">
    <Header/>
    <div class="navWrap">
      <!-- 横向导航 -->
      <div class="scrollWrap" v-show="isShow">
        <ul class="navList">
          <li v-for="(item, index) in shopSortArr" :key="index" :class="{active:shopIndex===item.id}" @click="clickHandle(item.id)">
            <a href="javascript:;" :class="{onclick:shopIndex===item.id}">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="allSort" v-show="!isShow">
        <span>全部频道</span>
      </div>
      <div class="arrowWrap" @click="changeHandle">
        <i
          class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-6"
          :class="{ 'arrowRotate':isActive }"
        ></i>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class="shadeWrap" v-show="!isShow" @click.self="changeHandle">
      <!-- 全部分类内容 -->
      <ul class="sortContent">
        <li>推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
        <li>个人清洁</li>
        <li>母婴亲子</li>
        <li>运动旅行</li>
        <li>数码家电</li>
        <li>全球特色</li>
      </ul>
    </div>
    <!-- 竖向滑动区 -->
    <div class="scrollYWrap">
      <!-- 内容区 -->
      <div class="contentWrap">
        <!-- 轮播图 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../common/images/swiper/01.jpg" alt />
            </div>
            <div class="swiper-slide">
              <img src="../../common/images/swiper/02.jpg" alt />
            </div>
            <div class="swiper-slide">
              <img src="../../common/images/swiper/03.jpg" alt />
            </div>
            <div class="swiper-slide">
              <img src="../../common/images/swiper/04.jpg" alt />
            </div>
            <div class="swiper-slide">
              <img src="../../common/images/swiper/05.jpg" alt />
            </div>
            <div class="swiper-slide">
              <img src="../../common/images/swiper/06.jpg" alt />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <!-- 引入首页商品列表 -->
        <HomeShopList />
        <!-- 底部注册商标 -->
        <div class="content_footer">
          <div class="content_footer_content">
            <ul class="footer_btn">
              <li>下载App</li>
              <li>电脑版</li>
            </ul>
            <div class="footer_text">
              <p>网易公司版权所有 ⓒ 1997-2019</p>
              <p>食品经营许可证：JY13301080111719</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import {mapState} from 'vuex'
import '../../../node_modules/swiper/css/swiper.css'
// 引入页眉
import Header from '../../components/Header/Header'
// 引入首页商品列表
import HomeShopList from '../../components/HomeShopList/HomeShopList'
export default {
  data() {
    return {
    }
  },
  components: {
    Header,
    HomeShopList
  },
  mounted() {
    this._initScroll()
    this._intiSwiper()
  },
  computed: {
    ...mapState(['shopSortArr','isShow','isActive','shopIndex'])
  },
  methods: {
    _initScroll() {
      let wrapperX = document.querySelector('.scrollWrap')
      let wrapperY = document.querySelector('.scrollYWrap')
      this.scrollX = new BScroll(wrapperX, { scrollX: true, click:true })
      this.scrollY = new BScroll(wrapperY, { scrollY: true })
    },
    _intiSwiper() {
      this.mySwiper = new Swiper('.swiper-container', {
        autoplay: true,
        loop: true, // 循环模式选项
        pagination: {
          // 如果需要分页器
          el: '.swiper-pagination'
        }
      })
    },
    changeHandle() {
      // this.isShow = !this.isShow
      // this.isActive = !this.isActive
      this.$store.commit('change_boolean')
    },
    clickHandle(currentIndex){
      // 
      this.$store.commit("get_shopIndex",currentIndex)
    }
  }
}
</script>
<style lang="stylus">
#homeContainer
  width 100%
  .navWrap
    position relative
    width 100%
    height 60px
    display flex
    .scrollWrap
      width 650px
      height 60px
      background-color #fff
      .navList
        height 60px
        box-sizing border-box
        padding 0 20px
        display flex
        float left
        &>li
          height 60px
          line-height 60px
          white-space nowrap
          margin 0 30px
          box-sizing border-box
          a
            color #333
            font-size 26px
          .onclick
            color #b4282d
        .active
            color #b4282d
            border-bottom 4px #b4282d solid  
    .allSort
      position absolute
      top 0
      left 0
      width 650px
      height 60px
      line-height 60px
      box-sizing border-box
      padding-left 25px
      background-color #fff
      span
        font-size 28px
    .arrowWrap
      position absolute
      top -1px
      right 0
      width 100px
      line-height 60px
      text-align center
      background-color white
      z-index 10
      &>i
        display block
        font-size 40px
        color #333
        transition all 0.3s
        &.arrowRotate
          transform rotate(180deg)
  .shadeWrap // 遮罩层
    position absolute
    top 148px
    bottom 0
    width 100%
    background-color rgba(0, 0, 0, 0.4)
    z-index 10
    .sortContent // 全部分类
      position absolute
      top -2px
      left 0
      right 0
      padding-top 35px
      background-color #fff
      &>li
        float left
        width 150px
        height 56px
        text-align center
        line-height 56px
        color #333
        border-radius 5px
        box-sizing border-box
        border 1px #ccc solid
        margin-left 28.5px
        margin-bottom 35px
        background-color #fafafa
        .clickChange
          border 1px #b4282d solid
          color #b4282d
  .scrollYWrap
    position absolute
    top 148px
    bottom 98px
    width 100%
    overflow hidden
    .contentWrap
      width 100%
      .swiper-container
        width 100%
        height 370px
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            width 100%
            height 100%
            img
              width 100%
              height 100%
        .swiper-pagination
          &>.swiper-pagination-bullet
            width 40px    
            height 4px
            border-radius 2px  
            margin-bottom 12px
            background-color rgba(225,225,225,.5)
          &>.swiper-pagination-bullet-active
            background-color rgba(225,225,225,1)  
      .content_footer // 底部商标营业许可
        width 100%
        height 245px
        background-color #414141
        box-sizing border-box
        padding 30px 20px 20px 20px
        .content_footer_content
          width 710px
          height 225px
          display flex
          flex-direction column
          align-items center
          .footer_btn
            height 62px
            display flex
            &>li
              width 180px
              height 62px
              font-size 23px
              color #fff
              line-height 62px
              text-align center
              box-sizing border-box
              border 0.5px #888 solid
              border-radius 5px
              margin 22px
          .footer_text
            display flex
            flex-direction column
            align-items center
            margin-top 60px
            p
              color #888
              margin-bottom 5px
</style>

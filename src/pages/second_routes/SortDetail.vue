<template>
  <div id="SortDetailContainer">
    <div class="scroll_wrap">
      <div class="sort_detail_wrap">
        <!-- 轮播图 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../common/images/swiper/03.jpg" alt />
            </div>
            <div class="swiper-slide">
              <img src="../../common/images/swiper/05.jpg" alt />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <!-- 商品列表 -->
        <ul class="sort_detail_list clearfix">
          <li>
            <img src="../../common/images/sort_detail/01.png" alt="">
            <span>明星品牌</span>
          </li>
          <li>
            <img src="../../common/images/sort_detail/01.png" alt="">
            <span>明星品牌</span>
          </li>
          <li>
            <img src="../../common/images/sort_detail/01.png" alt="">
            <span>明星品牌</span>
          </li>
          <li>
            <img src="../../common/images/sort_detail/01.png" alt="">
            <span>明星品牌</span>
          </li>
          <li>
            <img src="../../common/images/sort_detail/01.png" alt="">
            <span>明星品牌</span>
          </li>
          <li>
            <img src="../../common/images/sort_detail/01.png" alt="">
            <span>明星品牌</span>
          </li>
          <li>
            <img src="../../common/images/sort_detail/01.png" alt="">
            <span>明星品牌</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import '../../../node_modules/swiper/css/swiper.css'
export default {
  mounted() {
    this.$nextTick(() => {
      this._intiSwiper()
      this._initScroll()
    })
  },
  methods: {
    // 轮播图
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
    // 竖向滑屏
    _initScroll() {
      let scrollRight = document.querySelector('.scroll_wrap')
      this.scrollRight = new BScroll(scrollRight, { scrollY: true,click:true })
    },
  }
}
</script>
<style lang="stylus">
#SortDetailContainer
  width 100%
  height 100%
  padding 30px
  box-sizing border-box
  .scroll_wrap
    width 100%
    height 100%
    background-color #fff
    .sort_detail_wrap
      width 100%
      height 100%
      padding-bottom 20px
      .swiper-container
        width 100%
        height 192px
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
            background-color rgba(225,225,225,.7)
          &>.swiper-pagination-bullet-active
            background-color rgba(225,225,225,1)        
      .sort_detail_list
        width 100%
        &>li 
          width 144px      
          display flex
          flex-direction column
          align-items center
          float left
          margin 0 15px
          span
            width 100%
            height 72px
            text-align center
</style>

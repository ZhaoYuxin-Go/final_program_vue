<template>
  <div id="discover_detail_container">
    <div class="scroll_content" ref="scrollDiv">
      <ul v-for="(discoverTitle, index) in discoverTitleArr" :key="index">
        <!-- 小图 -->
        <li class="clearfix" v-if="discoverTitle.style===2">
          <div class="detail_left_content">
            <div class="user_name">
              <span class="user_name_img">
                <img :src="discoverTitle.avatar" alt />
              </span>
              <span class="user_name_text">{{discoverTitle.nickname}}</span>
            </div>
            <div class="detail_user_title">{{discoverTitle.title}}</div>
            <span class="detail_user_sale">{{discoverTitle.subTitle}}</span>
            <div class="have_look">
              <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-2"></i>
              <span>{{discoverTitle.readCount}}人看过</span>
            </div>
          </div>
          <div class="detail_right_img">
            <img :src="discoverTitle.picUrl" alt />
          </div>
        </li>
        <!-- 大图 -->
        <li v-else>
          <div class="big_user_name">
            <span class="big_user_name_img">
              <img :src="discoverTitle.avatar" alt />
            </span>
            <span class="big_user_name_text">{{discoverTitle.nickname}}</span>
          </div>
          <div class="big_detail_right_img">
            <img :src="discoverTitle.picUrl" alt />
          </div>
          <div class="big_have_look">
            <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-2"></i>
            <span>{{discoverTitle.readCount}}人看过</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      page: 0,
      flag:false,
      pageLength:0,
      scrollTimer:null
    }
  },
  computed: {
    ...mapState(['discoverTitleArr'])
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this._initScroll()
      }, 3000);
    })
    this.$store.dispatch('initDiscoverTitle')
  },
  methods: {
    _initScroll() {
      // 滚动条容器
      let scrollLeft = document.querySelector('#discover_detail_container')

      this.scrollY = new BScroll(scrollLeft, { scrollY: true, click: true, probeType: 2 })

      this.scrollY.on('scroll', (pos) => {   
        if (this.scrollTimer) {
          clearTimeout(this.scrollTimer)
          this.scrollTimer = setTimeout(() => {
            if (pos.y<=this.scrollY.maxScrollY) {
              if (this.pageLength===this.discoverTitleArr.length) {
                this.flag = true
              }
            }
          }, 500)
        }else{
          this.scrollTimer = setTimeout(() => {
            if (pos.y<=this.scrollY.maxScrollY) {
              if (this.pageLength===this.discoverTitleArr.length) {
                this.flag = true
              }
            }
          }, 500)
        }
      })
    }
  },
  watch: {
    discoverTitleArr(){
      if (this.scrollTimer) {
         clearTimeout(this.scrollTimer)
         this.scrollTimer = setTimeout(() => {
           this.flag = false
           this.pageLength=this.discoverTitleArr.length
           this.page +=1
         }, 500);
      }else{
         this.scrollTimer = setTimeout(() => {
           this.flag = false
           this.pageLength=this.discoverTitleArr.length
           this.page +=1
         }, 500);
      }
    },
    flag(){
      if (this.flag) {
        this.$store.dispatch('getDiscoverTitle',this.page,5)
      }
    }
  },
}
</script>
<style lang="stylus">
#discover_detail_container
  width 100%
  height 100%
  .scroll_content
    width 100%
    ul
      width 100%
      li
        width 100%
        background-color #fff
        margin 25px 0
        padding 30px 30px
        box-sizing border-box
        .detail_left_content
          float left
          .user_name
            display flex
            width 400px
            height 56px
            align-items center
          .user_name_text
            font-size 28px
          .user_name_img
            display block
            width 54px
            height 54px
            margin-right 20px
            img
              width 100%
              height 100%
              border-radius 50%
          .detail_user_title
            width 400px
            height 120px
            box-sizing border-box
            padding-top 32px
            font-size 36px
            line-height 42px
          .detail_user_sale
            display block
            width 400px
            height 48px
            line-height 48px
            color #7f7f7f
          .have_look
            width 300px
            height 36px
            box-sizing border-box
            padding-top 20px
            display flex
            align-items center
            margin-top 5px
            span
              color #999
              margin-left 5px
            i
              font-size 26px
        .detail_right_img
          float right
          width 272px
          height 272px
          img
            width 100%
            height 100%
            border-radius 8px
      .big_user_name
        display flex
        align-items center
        .big_user_name_img
          display block
          width 54px
          height 54px
          margin-right 20px
          img
            width 100%
            height 100%
            border-radius 50%
        .big_user_name_text
          font-size 28px
      .big_detail_right_img
        width 100%
        height 376px
        margin-top 30px
        img
          width 100%
          border-radius 8px
      .big_have_look
        width 300px
        height 36px
        box-sizing border-box
        padding-top 20px
        display flex
        align-items center
        margin-top 5px
        span
          color #999
          margin-left 5px
        i
          font-size 26px
</style>

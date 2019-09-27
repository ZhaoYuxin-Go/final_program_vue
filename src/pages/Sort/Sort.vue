<template>
  <div id="sortContainer">
    <div class="sort_header">
      <div class="sort_header_search" @click="$router.push('/Search')">
        <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-7"></i>
        <span>搜索商品，共25000款好物</span>
      </div>
    </div>
    <div class="sort_content">
      <!-- 右侧内容区 -->
      <div class="sort_content_right">
          <router-view></router-view>
      </div>
      <!-- 左侧导航 -->
      <div class="sort_content_left">
        <ul class="sort_content_left_list">
          <li v-for="(item, index) in shopSortArr" :key="index" @click="clickHandle(item.id)">
            <router-link
             :to="`/Sort/Sortdetail/${item.id}`"
             :class="{active:shopIndex==item.id}"
            >
             {{item.name}}
            </router-link>           
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      shopSortArr:[
        {name:"推进专区",id:0},
        {name:"换季专区",id:1},
        {name:"爆品专区",id:2},
        {name:"新品专区",id:3},
        {name:"居家生活",id:4},
        {name:"服饰鞋包",id:5},
        {name:"美食酒水",id:6},
        {name:"个护清洁",id:7},
        {name:"母婴亲子",id:8},
        {name:"运动旅行",id:9},
        {name:"数码家电",id:10},
        {name:"全球特色",id:11},
      ],
      shopIndex:0,
    }
  },
  mounted() {
     this.$nextTick(()=>{
       this._initScroll()
     })
  },
  methods: {
    _initScroll() {
      let scrollLeft = document.querySelector('.sort_content_left')
      this.scrollLeft = new BScroll(scrollLeft, { scrollY: true,click:true })
    },
    clickHandle(currentIndex){
      this.shopIndex = currentIndex
    },
  }
}
</script>
<style lang="stylus">
@import '../../common/stylus/mixins.styl'
#sortContainer
  width 100%
  height 100%
  overflow hidden
  background-color #fff
  .sort_header
    bottom-border-1px(#eee)
    width 100%
    height 88px
    background-color #fff
    display flex
    justify-content center
    align-items center
    z-index 10
    .sort_header_search
      width 690px
      height 56px
      background-color #eee
      border-radius 5px
      display flex
      justify-content center
      align-items center
      color #666
      z-index 10
      i
        font-size 36px
        margin-left 5px
      span
        font-size 28px
  .sort_content
    width 100%
    height 1148px
    position relative
    .sort_content_left
      width 162px
      height 1000px
      background-color #fff
      position absolute
      top 0
      left 0
      &>ul
        width 100%
        padding 5px 0 35px 0
        &>li
          width 100%
          height 50px
          margin-top 40px
          font-size 28px
          line-height 50px
          text-align center
          background-color #fff
          box-sizing border-box
          &>a
            display block
            width 100%
            height 100%
            color #414141
            border-left 4px solid rgba(0,0,0,0)
          .active
            color #b4282d
            border-left 4px #b4282d solid
    .sort_content_right
      width 588px
      height 1148px
      margin-left 162px
      background-color #fff
      position absolute
      top 0
      left 0
</style>

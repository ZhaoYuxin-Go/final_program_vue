<template>
  <div id="discoverContainer">
    <header class="head_nav_list_wrap">
      <ul ref="nav_ul" class="nav_ul clearfix">
        <li v-for="(navItem, index) in headNavArr" :key="index" @click="chooseHandle(navItem.id)">
          <router-link :to="`/Recognize/discover/discoverdetail/${navItem.id}`" :class="{isActive:navItem.id===itemIndex}">{{navItem.name}}</router-link>
        </li>
      </ul>
    </header>
    <div class="disc_content_wrap">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props:{
    id:Number
  },
  data() {
    return {
      headNavArr:[
        {name:'推荐',id:0},
        {name:'好货内部价',id:1},
        {name:'选购指南',id:2},
        {name:'回购榜',id:3},
        {name:'晒单',id:4},
        {name:'达人',id:5},
        {name:'Home',id:6},
      ],
      isActive:false,
      itemIndex:0
    }
  },
  mounted() {  
    this.$nextTick(()=>{
       this._initScroll()
       this._initWidth()
    })
  },
  methods: {
    _initScroll() {
      let scrollLeft = document.querySelector('.head_nav_list_wrap')
      this.scrollLeft = new BScroll(scrollLeft, { scrollX: true,click:true })
    },
    chooseHandle(index){
      this.itemIndex = index
    },
    _initWidth() {
      const list = this.$refs.nav_ul.children
      let width = 0
      Array.prototype.slice.call(list).forEach(li => {
        // 此处计算有误差，ul宽度不够
        width += li.clientWidth+0.1
      })
      this.$refs.nav_ul.style.width = width + 'px'
      console.log(width)
    }
  },
}
</script>
<style lang="stylus">
#discoverContainer
  width 100%
  height 100%
  .head_nav_list_wrap
    width 750px
    height 65px
    z-index 20
    position relative
    ul
      height 100%
      li
        float left
        height 65px
        a
          display block
          height 65px
          line-height 65px
          font-size 28px
          padding  0 30px
          box-sizing border-box
        .isActive
          border-bottom 4px #b4282d solid
          color #b4282d
  .disc_content_wrap
    width 100%
    height 1270px      
</style>

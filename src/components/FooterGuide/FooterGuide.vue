<template>
  <footer id="footerContainer">
    <router-link to="/Home" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu_huaban"></i>
      </span>
      <span>首页</span>
    </router-link>
    <router-link to="/Sort" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-8"></i>
      </span>
      <span>分类</span>
    </router-link>
    <router-link to="/Recognize" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
      </span>
      <span>识物</span>
    </router-link>
    <router-link to="/ShopCart" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-1"></i>
      </span>
      <span>购物车</span>
    </router-link>
    <router-link to="/Personal" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-9"></i>
      </span>
      <span>个人</span>
    </router-link>
  </footer>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus">
@import "../../common/stylus/mixins.styl";
#footerContainer
  top-border-1px(#eee)
  width 100%
  height 98px
  display flex
  justify-content center
  position absolute
  bottom 0
  background-color #fff
  .guide_item
    display block
    flex 1
    display flex
    justify-content center
    align-items center
    flex-direction column
    font-size 24px
    .item_icon
      i
        font-size 50px
  .router-link-active
      color #b4282d 
</style>

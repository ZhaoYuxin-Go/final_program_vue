<template>
  <div id="recognizeContainer">
    <header>
      <div class="header-list">
        <span class="personal_to_home" @click="$router.push('/Home')">
          <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu_huaban"></i>
        </span>
        <div class="m_head_tap">
          <router-link to="/Recognize/discover">发现</router-link>
          <router-link to="/Recognize/chooser">甄选家</router-link>
        </div>
        <span>
          <i
            class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-7"
            @click="$router.push('/Search')"
          ></i>
          <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-1"></i>
        </span>
      </div>
    </header>
    <div class="recognize_content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="stylus">
#recognizeContainer
  width 100%
  height 100%
  position relative
  header
    width 100%
    height 100px
    border-bottom 1px rgba(0,0,0,.3) solid
    background-color #fafafa
    position relative
    z-index 30
    .header-list
      width 100%
      height 100%
      display flex
      align-items center
      justify-content space-between
      box-sizing border-box
      padding 0 20px
      .m_head_tap
        width 270px
        height 50px
        display flex
        align-items center
        justify-content space-between
        box-sizing border-box
        padding-left 63px
        a
          font-size 30px
          color #7f7f7f
        .router-link-active
          font-size 40px
          color #b4282d
          font-weight bold
      span
        &>i
          font-size 55px
          color #414141
        .icon-changyongtubiao-xianxingdaochu-zhuanqu-7
          margin-right 20px
      .header_logo
        padding-left 70px
        &>i
          display block
          width 162px
          height 42px
          background-image url('../../common/images/logo/login_small_logo.png')
          background-repeat no-repeat
          background-size cover
  .recognize_content   
    position absolute
    top 101px
    width 100%
    height 1334px
</style>

<template>
  <header>
    <div class="header-list">
      <span class="personal_to_home" @click="$router.push('/Home')">
        <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu_huaban"></i>
      </span>
      <span class="header_logo" @click="$router.push('/Home')">
        <i></i>
      </span>
      <span>
        <i
          class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-7"
          @click="$router.push('/Search')"
        ></i>
        <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-1"></i>
      </span>
    </div>
  </header>
</template>
<script>
export default {}
</script>
<style lang="stylus">
header
  width 100%
  height 88px
  border-bottom 1px #eee solid
  background-color #fafafa
  .header-list
    width 100%
    height 100%
    display flex
    align-items center
    justify-content space-between
    box-sizing border-box
    padding 0 20px
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
</style>

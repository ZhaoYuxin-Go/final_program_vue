<template>
  <header id="headerContainer">
    <router-link to="/Home" class="logo"></router-link>
    <div class="searchWrap" @click="$router.push('/Search')">
      <span>
        <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-7"></i>
      </span>
      <span>搜索商品，共25000款好物</span>
    </div>
    <div class="loginBtn" @click="$router.push('/Personal')">登录</div>
  </header>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus">
#headerContainer
  width 100%
  height 88px
  background-color #fff
  display flex
  align-items center
  justify-content center
  .logo
    display block
    width 138px
    height 40px
    background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
    background-repeat no-repeat
  .searchWrap 
    width 442px
    height 56px
    line-height 56px
    border-radius 10px
    margin 0 20px
    font-size 26px
    color #666
    display flex
    justify-content center
    background-color #ededed
    span
      i 
        font-size 35px
  .loginBtn
      width 72px
      height 36px
      color #b4282d
      line-height 36px
      text-align center
      border 1px #b4282d solid    
      border-radius 5px
</style>

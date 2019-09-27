<template>
  <div id="PersonalContainer">
    <!-- 页眉 -->
    <LoginPageHeader></LoginPageHeader>
    <div class="content">
      <div class="yanxuan_logo_img">
        <img src="../../common/images/logo/login_large_logo.png" alt="">
      </div>
      <!-- 登录按钮 -->
      <div class="content_btn_wrap">
        <mt-button type='primary' class="login_btn phone_login_btn" @click.native="$router.push('/loginPageHeader')">
          <i class="iconfont icon-ziyuan"></i>
          <span>手机号快捷登录</span>
        </mt-button>
        <mt-button type='primary' class="login_btn email_login_btn" @click.native="$router.push('/emaillogin')">
          <i class="iconfont icon-ziyuan1"></i>
          <span>邮箱账号登录</span>
        </mt-button>
      </div>
      <ul class="other_login_ways">
        <li>
          <i class="iconfont icon-wechat-fill"></i>
          <span>微信</span>
        </li>
        <li class="qq">
          <i class="iconfont icon-qq-fill"></i>
          <span>QQ</span>
        </li>
        <li>
          <i class="iconfont icon-weibo-fill"></i>
          <span>微博</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="stylus">
#PersonalContainer
  width 100%
  height 100%
  background-color #f2f5f4
  position relative
 .content
    width 100%
    position absolute
    top 88px
    bottom 0
    .yanxuan_logo_img
      position relative
      width 100%
      height 480px
      img   
        width 268px
        height 90px
        position absolute
        left 50%
        top 50%
        transform translateX(-50%) translateY(-50%)
    .content_btn_wrap
      width 100%
      display flex
      flex-direction column
      padding-left 40px
      .login_btn
        width 670px
        height 90px
        margin-bottom 38px
        line-height 90px
        box-sizing border-box
        padding-right 200px
        i 
          font-size 35px
          margin-right 15px
        .icon-ziyuan1  
          font-size 25px
        span 
          position absolute
          font-size 28px
          float right 
      .email_login_btn
        box-sizing border-box
        border 1px #b4282d solid
        background-color #f2f5f4
        color #b4282d
        padding-right 170px
  .other_login_ways
    position absolute
    bottom 80px
    width 100%
    height 40px      
    display flex
    justify-content center
    li
      height 40px
      display flex
      align-items center
      padding 0 40px
      border-right 2px rgba(0,0,0,0) solid
      border-left 2px rgba(0,0,0,0) solid
      &>i   
        font-size 40px
        margin-right 10px
        color #888
      &>span 
        font-size 28px  
        color #888
    .qq            
      border-right 2px #888 solid
      border-left 2px #888 solid
</style>

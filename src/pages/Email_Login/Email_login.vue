<template>
  <div id="email_login_contianer">
    <!-- 页眉 -->
    <LoginPageHeader></LoginPageHeader>
    <!-- 严选logo -->
    <div class="email_login_logo">
      <img src="../../common/images/logo/login_large_logo.png" alt />
    </div>
    <div class="uer_operate_wrap">
      <!-- 输入手机号 -->
      <div class="email_number_input_wrap input_operate">
        <input
          v-model="email"
          v-validate="'required|email'"
          name="email"
          type="tel"
          maxlength="11"
          placeholder="请输入邮箱地址"
          class="phone_number_input"
        />
        <span v-show="errors.has('email')" class="show_err">{{ errors.first('email') }}</span>
      </div>
      <!-- 密码 -->
      <div class="password_input_wrap input_operate">
        <input
          v-model="password"
          v-validate="'required'"
          name="password"
          type="tel"
          maxlength="6"
          placeholder="请输入密码"
          class="password_code_input"
        />
        <span v-show="errors.has('password')" class="show_err">{{ errors.first('password') }}</span>
      </div>
          <!-- 遇到问题 -->
      <div class="problem input_operate">
        <a class="meet_problems">注册账号</a>
        <a class="use_pwd">忘记密码</a>
      </div>
      <mt-button type="primary" class="email_login_btn">
        <span>登录</span>
      </mt-button>
            <!-- 选择其他方式 -->
      <div class="choose_another_way" @click="$router.push('/Personal')">
        <span>其他登录方式</span>
        <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-4"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email:'',
      password:''
    }
  },
}
</script>
<style lang="stylus">
#email_login_contianer
  width 100%
  height 100%
  background-color #fff
  .email_login_logo
    width 100%
    height 64px
    margin 56px 0
    img
      display block
      width 192px
      height 64px
      margin 0 auto
  .uer_operate_wrap
    width 100%
    padding 5px 40px
    box-sizing border-box
    .input_operate // 输入框部分
      width 670px
      height 90px
      display flex
      align-items center
      margin-top 35px
      border-bottom 1px #c5cddb solid
      input
        height 42px
        line-height 42px
        font-size 28px
        outline-style none
        position relative
      .show_err
        color red
        position absolute
        margin-top 65px
      .phone_number_input
        width 600px
      .password_code_input
        width 600px  
    .password_input_wrap
      justify-content space-between
      box-sizing border-box
      padding-right 10px  
    .problem
      justify-content space-between
      box-sizing border-box
      margin 19px 0 15px 0
      border-bottom 1px #fff solid
      .meet_problems
        font-size 28px
        color #666
      .use_pwd
        display block
        height 52px
        line-height 52px
        text-align center
        font-size 28px
        color #414141  
  .email_login_btn // 登录按钮
    width 670px
    height 92px
    span
      font-size 28px     
  .choose_another_way
    width 670px
    display flex
    justify-content center
    margin-top 80px
    span
      font-size 28px
      color #414141
      margin-right 8px
    i
      font-size 29px
      color #414141      
</style>

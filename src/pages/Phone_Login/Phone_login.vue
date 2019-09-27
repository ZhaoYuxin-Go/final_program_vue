<template>
  <div id="phone_login_contianer">
    <!-- 页眉 -->
    <LoginPageHeader></LoginPageHeader>
    <!-- 严选logo -->
    <div class="phone_login_logo" :class="{is_phone_pwd_login:!isPhoneLogin}">
      <img src="../../common/images/logo/login_large_logo.png" alt />
    </div>
    <!-- 登录操作区 -->
    <div class="uer_operate_wrap">
      <!-- 手机验证码 -->
      <div class="is_phone_login_way" v-show="isPhoneLogin">
        <!-- 输入手机号 -->
        <div class="phone_number_input_wrap input_operate">
          <input
            v-model="phone"
            v-validate="'required|phone'"
            name="phone"
            type="tel"
            maxlength="11"
            placeholder="请输入手机号"
            class="phone_number_input"
          />
          <span v-show="errors.has('phone')" class="show_err">{{ errors.first('phone') }}</span>
        </div>
        <!-- 验证码 -->
        <div class="message_code_input_wrap input_operate">
          <input
            v-model="code"
            v-validate="'required'"
            name="code"
            type="tel"
            maxlength="6"
            placeholder="请输入短信验证码"
            class="message_code_input"
          />
          <span v-show="errors.has('code')" class="show_err">{{ errors.first('code') }}</span>
          <span class="get_code">获取验证码</span>
        </div>
        <!-- 遇到问题 -->
        <div class="problem input_operate">
          <span class="meet_problems">遇到问题？</span>
          <span class="use_pwd" @click="isPhoneLogin=!isPhoneLogin">使用密码验证登录</span>
        </div>
      </div>
      <!-- 手机密码 -->
      <div class="is_phone_login_way" v-show="!isPhoneLogin">
        <!-- 输入手机号 -->
        <div class="phone_number_input_wrap input_operate">
          <input
            v-model="pwd_phone"
            v-validate="'required|pwd_phone'"
            name="pwd_phone"
            type="tel"
            maxlength="11"
            placeholder="请输入手机号"
            class="phone_number_input"
          />
          <span v-show="errors.has('pwd_phone')" class="show_err">{{ errors.first('pwd_phone') }}</span>
        </div>
        <!-- 密码 -->
        <div class="message_code_input_wrap input_operate">
          <input
            v-model="password"
            v-validate="'required'"
            name="password"
            type="tel"
            maxlength="12"
            placeholder="请输入密码"
            class="message_code_input"
          />
          <span v-show="errors.has('password')" class="show_err">{{ errors.first('password') }}</span>
        </div>
        <!-- 遇到问题 -->
        <div class="problem input_operate">
          <span class="meet_problems">忘记密码？</span>
          <span class="use_pwd" @click="isPhoneLogin=!isPhoneLogin">短信快捷登录</span>
        </div>
      </div>
      <mt-button type="primary" class="phone_login_btn" @click.prevent="CodeLogin" v-if="isPhoneLogin">
        <span>登录</span>
      </mt-button>
      <mt-button type="primary" class="phone_login_btn" @click.prevent="PwdLogin" v-else="!isPhoneLogin">
        <span>登录</span>
      </mt-button>
      <!-- 条款 -->
      <div class="read_agreement" v-show="isPhoneLogin">
        <input type="checkbox"/>
        <span>我同意</span>
        <a href="javascript:;">《服务条款》</a>
        <span>和</span>
        <a href="javascript:;">《网易隐私政策》</a>
      </div>
      <!-- 选择其他方式 -->
      <div class="choose_another_way" :class="{ margin_class: !isPhoneLogin }" @click="$router.back()">
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
      isPhoneLogin: true,
      phone: '',
      pwd_phone:'',
      code: '',
      password:''
    }
  },
  methods: {
    CodeLogin() {
      let code_names = ['phone', 'code']
      this.$validator.validateAll(code_names)
    },
    PwdLogin(){
      let pwd_names = ['pwd_phone', 'password']
      this.$validator.validateAll(pwd_names)
    }
  }
}
</script>
<style lang="stylus">
#phone_login_contianer
  width 100%
  height 100%
  background-color #fff
  .phone_login_logo
    width 100%
    height 64px
    margin 56px 0
    img
      display block
      width 192px
      height 64px
      margin 0 auto
  .is_phone_pwd_login
    margin 56px 0 100px 0   
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
      .message_code_input
        width 380px
    .message_code_input_wrap
      justify-content space-between
      box-sizing border-box
      padding-right 10px
      .get_code
        display block
        width 164px
        height 52px
        line-height 52px
        text-align center
        font-size 28px
        color #414141
        border 1px #414141 solid
        border-radius 5px
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
  .phone_login_btn // 登录按钮
    width 670px
    height 92px
    span
      font-size 28px
  .read_agreement
    height 48px
    display flex
    align-items center
    margin 20px 0
    input
      width 28px
      height 28px
      margin-right 18px
      background #fff
    span
      color #666
    a
      color #007aff
  .choose_another_way
    width 670px
    display flex
    justify-content center
    span
      font-size 28px
      color #414141
      margin-right 8px
    i
      font-size 29px
      color #414141
  .margin_class
    margin-top 80px    
</style>

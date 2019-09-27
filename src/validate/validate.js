import Vue from 'vue'
import VeeValidate,{Validator} from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

//提示语汉化
Validator.locale ==="en" ? "zh_CN" : "en";

VeeValidate.Validator.localize(Validator.locale,{
    messages: zh_CN.messages,
    attributes:{
        phone:'手机号码',
        pwd_phone:'手机号码',
        password:'密码',
        code:'短信验证码',
        name:'用户名'
    }
})

Validator.extend('phone', {
  getMessage: () => `请输入正确的手机号码`,
  validate: (value) =>{
      const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      return reg.test(value) 
  }  
})

Validator.extend('pwd_phone', {
  getMessage: () => `请输入正确的手机号码`,
  validate: (value) =>{
      const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      return reg.test(value) 
  }  
})

Vue.use(VeeValidate);

import Vue from 'vue'
// 引入插件核心模块
import App from './App.vue'
import router from './router'
import store from './store'
// 引入第三方样式库
import {Button} from 'mint-ui';

// 引入rem适配库
import 'lib-flexible/flexible'
import '../src/assets/css/my_mint.scss'
// 引入登录界面页眉组件
import LoginPageHeader from './components/login_page_header/Login_Page_Header.vue';
// 引入表单验证
import "./validate/validate"

// 注册全局组件
Vue.component(Button.name,Button)
Vue.component('LoginPageHeader',LoginPageHeader)

new Vue({
  el: '#app',
  render: h => h(App),  // 函数返回组件标签<App/>
  router, // 注册路由
  store // 注册store仓库
}).$mount('#app')

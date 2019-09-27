<template>
  <div id="searchContainer">
    <header class="searchHeader">
      <!-- 点击之后 -->
      <div class="afterClick">
        <div class="afterclick_input_wrap">
          <span>
            <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-7"></i>
          </span>
          <!-- 输入框 -->
          <input 
            type="text" 
            id="inputNode" 
            placeholder="便携式小冰箱" 
            ref="input" 
            @keyup="keyUpHandle" 
            @keyup.enter="enter_search"
            v-model="inputText"
          >
          <span class="cleartext_icon" @click="inputText=''" v-show="inputText">
            <i class="iconfont icon-changyongtubiao-mianxing-"></i>
          </span>
        </div>
        <!-- 取消按钮 -->
        <span class="cancel" @click="cancelHandle">取消</span>
      </div>
    </header>
    <!-- 搜索下拉列表 -->
    <ul class="showShopsList" v-show="shopsArr&&inputText.length">
      <li 
        v-for="(shop, index) in shopsArr" 
        :key="index"
        @click="clickShop(shop)"
      >
        <div class="inner_wrap">
          {{shop}}
        </div>
      </li>
    </ul>
    <!-- 热门搜索 -->
    <ul class="hot_shop_search clearfix" v-show="!inputText.length" v-if="hotShopsArr.length">
      <li v-for="(hotShop, index) in hotShopsArr" :key="index">
        <a href="javascript:;" :class="{ highlight:hotShop.highlight===1 }">{{hotShop.keyword}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      inputText:'',
    }
  },
  computed: {
    ...mapState(['shopsArr','hotShopsArr'])
  },
  methods: {
    keyUpHandle(event){
      // 后去输入框内容
      let keywordPrefix = event.target.value
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
          // 分发actions
          this.$store.dispatch('getShops',keywordPrefix)
      },300)
    },
    // 点击下来列表商品
    clickShop(shop){
      // this.$refs.input.value = shop
      this.inputText = shop
      // this.show_shopslist = !this.show_shopslist
      this.$store.commit('get_shops')
      document.getElementById("inputNode").focus()
    },
    // 回车搜索商品
    enter_search(event){
      this.shopsName = event.target.value?event.target.value:event.target.placeholder
      // 此处发送请求
      // console.log(this.shopsName)
    },
    // 取消搜索
    cancelHandle(){
      // 回退主页清空商品下拉列表
      this.$store.commit('get_shops')
      // this.$router.replace('/Home')
      // 路由回退
      this.$router.back()
    }
  },
  mounted() {
    // input元素出现时，自动获取焦点
    if (document.getElementById("inputNode")) {
      document.getElementById("inputNode").focus()
    }
    // 获取热门商品
    this.$store.dispatch('getHotShops')
  }
}
</script>
<style lang="stylus">
#searchContainer
  width 100%
  height 100%
  background-color #eee
  .searchHeader
    width 100%
    height 88px
    background-color #fff
    .afterClick
      width 100%
      height 100%     
      display flex 
      align-items center
      padding 0 30px
      .afterclick_input_wrap
        width 604px
        height 56px
        background-color #eee 
        display flex
        align-items center
        border-radius 8px
        &>span
          margin 0 12px
          &>i 
             font-size 34px
        &>input 
          width 400px
          height 100%
          line-height 100%
          font-size 26px
          color #414141
          outline-style none 
          background-color #eee 
        .cleartext_icon  
          margin-left 90px
          display block
          color rgba(0,0,0,.2)
          font-size 30px
      .cancel
        display block
        width 72px
        height 28px
        line-height 28px
        text-align center
        font-size 28px  
        margin-left 20px 
  .showShopsList
    width 100% 
    background-color #fff   
    &>li
      width 100%
      padding-left 30px
      &:last-child>.inner_wrap
        border-bottom 2px #fff solid 
      .inner_wrap
        width 720px
        height 42px
        line-height 42px
        padding 31px
        border-bottom 2px #eee solid 
  .hot_shop_search
    width 100%
    box-sizing border-box
    padding 40px 0px 30px 30px
    background-color #fff
    &>li
      float left
      height 47px
      padding 5px 32px 32px 0
      &>a
        display block
        color #414141
        border 1px #999 solid
        border-radius 8px
        padding 12px 15px
      .highlight
        color #b4282d
        border 1px #b4282d solid 
</style>

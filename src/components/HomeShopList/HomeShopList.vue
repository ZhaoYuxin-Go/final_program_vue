<template>
  <div id="HomeShopList">
    <ul class="headerWrap">
      <li>
        <i class="iconfont icon-rocket"></i>
        <span>网易自营品牌</span>
      </li>
      <li>
        <i class="iconfont icon-safetycertificate"></i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i class="iconfont icon-transaction"></i>
        <span>48小时快速退款</span>
      </li>
    </ul>
    <div class="midShopWrap">
      <ul class="midShopList">
        <li>
          <img src="../../common/images/mid_shops/01.png" alt />
          <span>新品发布</span>
        </li>
        <li>
          <img src="../../common/images/mid_shops/02.png" alt />
          <span>新品发布</span>
        </li>
        <li>
          <img src="../../common/images/mid_shops/03.png" alt />
          <span>新品发布</span>
        </li>
        <li>
          <img src="../../common/images/mid_shops/04.png" alt />
          <span>新品发布</span>
        </li>
        <li>
          <img src="../../common/images/mid_shops/05.png" alt />
          <span>新品发布</span>
        </li>
        <li>
          <img src="../../common/images/mid_shops/05.png" alt />
          <span>新品发布</span>
        </li>
        <li>
          <img src="../../common/images/mid_shops/04.png" alt />
          <span>新品发布</span>
        </li>
        <li>
          <img src="../../common/images/mid_shops/03.png" alt />
          <span>新品发布</span>
        </li>
        <li>
          <img src="../../common/images/mid_shops/02.png" alt />
          <span>新品发布</span>
        </li>
        <li>
          <img src="../../common/images/mid_shops/01.png" alt />
          <span>新品发布</span>
        </li>
      </ul>
    </div>
    <div class="shopSale">
      <img src="../../common/images/mid_shops/sale.gif" alt />
    </div>
    <!-- 分类销售区 -->
    <div class="sort_Sale">
      <ul class="sort_Sale_Sort">
        <li>
          <div class="sort_Sale_Sort_item">
            <p class="sort_Sale_Sort_title">9.9超值专区</p>
            <p class="sort_Sale_Sort_text">190款商品定价直降</p>
            <img src="../../common/images/mid_shops/sale01.png" alt />
            <img src="../../common/images/mid_shops/sale02.png" alt />
          </div>
        </li>
        <li>
          <div class="sort_Sale_Sort_item">
            <p class="sort_Sale_Sort_title">9.9超值专区</p>
            <p class="sort_Sale_Sort_text">190款商品定价直降</p>
            <img src="../../common/images/mid_shops/sale01.png" alt />
            <img src="../../common/images/mid_shops/sale02.png" alt />
          </div>
        </li>
        <li>
          <div class="sort_Sale_Sort_item">
            <p class="sort_Sale_Sort_title">9.9超值专区</p>
            <p class="sort_Sale_Sort_text">190款商品定价直降</p>
            <img src="../../common/images/mid_shops/sale01.png" alt />
            <img src="../../common/images/mid_shops/sale02.png" alt />
          </div>
        </li>
        <li>
          <div class="sort_Sale_Sort_item">
            <p class="sort_Sale_Sort_title">9.9超值专区</p>
            <p class="sort_Sale_Sort_text">190款商品定价直降</p>
            <img src="../../common/images/mid_shops/sale01.png" alt />
            <img src="../../common/images/mid_shops/sale02.png" alt />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="stylus">
#HomeShopList
  width 100%
  z-index -1
  .headerWrap
    width 100%
    height 72px
    top 0
    display flex
    background-color #fff
    &>li
      flex 1
      display flex
      align-items center
      box-sizing border-box
      padding 0 20px
      i
        font-size 30px
        margin-right 5px
        color #b4282d
      span
        font-size 23px
  .midShopWrap
    width 100%
    height 373px
    .midShopList
      width 100%
      height 100%
      background-color #fff
      &>li
        width 110px
        height 156px
        background-color #fff
        text-align center
        float left
        margin 10px 20px 9px 20px
        img
          width 110px
          height 110px
          display block
          margin-bottom 12px
        span
          font-size 24px
  .shopSale
    width 100%
    height 126px
    img
      width 100%
      height 100%
  .sort_Sale
    width 100%
    .sort_Sale_Sort
      width 100%
      height 576px
      background-color #fff
      margin-bottom 20px
      box-sizing border-box
      padding 10px 25px 20px
      &>li
        width 343px
        height 264px
        margin 3px
        background-color #eee
        float left
        box-sizing border-box
        padding 20px 0 0 30px
        .sort_Sale_Sort_item
          width 300px
          height 250px
          img 
            width 150px
            height 150px
          .sort_Sale_Sort_title  
            height 48px
            font-size 32px
            color #333
            line-height 48px
          .sort_Sale_Sort_text  
            height 36px
            line-height 36px
            color #666
</style>

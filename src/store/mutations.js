// mutations直接修改属性的方法
import { CHANGE_BOOLEAN,GET_SHOPINDEX,GET_SHOPS,HOT_SHOP_SEARCH,PUSH_DISCOVER_TITLE } from './mutation-types'
export default {
  [CHANGE_BOOLEAN](state){
    state.isShow = !state.isShow
    state.isActive = !state.isActive
  },
  [GET_SHOPINDEX](state,currentIndex){
    state.shopIndex =currentIndex
  },
  [GET_SHOPS](state,shopsArr){
    state.shopsArr = shopsArr
  }, 
  [HOT_SHOP_SEARCH](state,hotShopsArr){
    state.hotShopsArr = hotShopsArr
  },
  [PUSH_DISCOVER_TITLE](state,discoverTitleArr){
    if (discoverTitleArr) {
      discoverTitleArr.forEach(element => {
        state.discoverTitleArr.push(element)
      });
    }
  }
}

import { GET_SHOPS, HOT_SHOP_SEARCH,PUSH_DISCOVER_TITLE } from './mutation-types'
import { get_shops, get_hot_shops,get_discover_title_list,init_discover_title_list } from '../api'
export default {
  async getShops({commit}, keywordPrefix){
    const result = await get_shops(keywordPrefix)
    const shopsArr = result.data
    commit( GET_SHOPS, shopsArr )
  },
  async getHotShops({commit}){
    const result = await get_hot_shops()
    const hotShopsArr = result.data.hotKeywordVOList
    commit( HOT_SHOP_SEARCH, hotShopsArr )
  },
  // 识物默认加载
  async initDiscoverTitle({commit}){
    const resultData = await init_discover_title_list()
    let discoverTitleArr = []
    if (resultData.code==="200") {
      resultData.data.forEach(element => {
        element.topics.forEach(item => {
          discoverTitleArr.push(item)
        })
      });
    }
    commit( PUSH_DISCOVER_TITLE, discoverTitleArr )
  },
  // 上拉加载
  async getDiscoverTitle( {commit}, page, size ){
    const resultData = await get_discover_title_list(page, size)
    let discoverTitleArr = []
    resultData.data.result.forEach(element => {
      element.topics.forEach(item => {
        discoverTitleArr.push(item)
      })
    })
    commit( PUSH_DISCOVER_TITLE, discoverTitleArr )
  }
}

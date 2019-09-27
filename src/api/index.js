import ajax from './ajax'
const BASE = '/api'
// http://m.you.163.com/xhr/search/searchAutoComplete.json
// 获取关键字搜做的商品
export const get_shops = (keywordPrefix) => ajax( BASE+'/xhr/search/searchAutoComplete.json',{keywordPrefix} )
// 获取热门商品
export const get_hot_shops = () => ajax( BASE + '/xhr/search/init.json' )
// 识物默认加载
export const init_discover_title_list= ()=>ajax( BASE + '/topic/v1/find/recManual.json' )
// 获取识物上拉加载列表
export const get_discover_title_list = (page, size)=>ajax( BASE+'/topic/v1/find/recAuto.json', {page, size} )

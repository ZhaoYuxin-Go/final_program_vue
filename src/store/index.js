import Vue from 'vue'
import Vuex from 'vuex'
// 引入模块
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 使用vuex插件
Vue.use(Vuex)

export default new Vuex.Store({
  state, // 存储状态数据
  mutations, // 直接修改状态数据
  actions, // 间接修改状态数据
  getters // 计算属性
})

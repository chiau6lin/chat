import Vue from 'vue'
import Vuex from 'vuex'
import chatModule from './modules/chatModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    chatModule
  }
})

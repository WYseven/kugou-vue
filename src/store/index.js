import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    isLoading: true
  },
  mutations: {
    changeLoading(state,loading){
      state.isLoading = loading;
    }
  }
})

export default store;
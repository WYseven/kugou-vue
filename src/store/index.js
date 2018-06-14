import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {getNewSongs} from '@/server'

export default  () => {
  return new Vuex.Store({
    state:{
      isLoading: false,
      newSongs:[]
    },
    mutations: {
      changeLoading(state,loading){
        state.isLoading = loading;
      },
      changeNewSongs(state){
  
      }
    },
    actions:{
      getNewSongsAction(){
        return getNewSongs().then((data) => {
          //console.log(data)
        });
      }
    }
  })
}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {getNewSongs} from '@/server'

export default  () => {
  return new Vuex.Store({
    state:{
      isLoading: false,
      songList:[]
    },
    mutations: {
      changeLoading(state,loading){
        state.isLoading = loading;
      },
      changeNewSongs(state,playlod){
        state.songList = playlod.list;
      }
    },
    actions:{
      getNewSongsAction({commit}){
        return getNewSongs().then(({data}) => {
          commit('changeNewSongs',{
            list:data
          })
        });
      }
    }
  })
}
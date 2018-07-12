import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {getNewSongs} from '@/server'

export default  () => {
  return new Vuex.Store({
    state:{
      newSongs:[],
      songList:[],  // 播放歌曲列表 做前进后退
      hash: '', // 点击歌曲要播放的hash值
    },
    mutations: {
      changeLoading(state,loading){
        state.isLoading = loading;
      },
      changeNewSongs(state,playlod){
        state.newSongs = playlod.list;
      },
      updateSongList(state, playlod) {
        state.songList = playlod.list;
      },
      updateHash(state, playlod) {
        state.hash = playlod.hash;
      },
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
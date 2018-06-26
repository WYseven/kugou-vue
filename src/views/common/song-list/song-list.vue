<template>
  <div class="song-list">
     
      <mt-cell 
        class='song-cell' 
        v-for="item in songList" 
        :key="item.hash" 
        :title="item.filename"  
        is-link
        @click.native="playSong(item)"
        >
    </mt-cell>
  </div>
</template>
<script>
import {getSongMp3} from '@/server/searchMp3'
  export default {
    name: 'song',
    data(){
      return {
        url: ''
      }
    },
    props:{
      songList:{
        type: Array,
        default(){
          return []
        }
      }
    },
    methods:{
      playSong(item){
        this.$store.commit('updateHash',{
          hash: item.hash
        })
        this.$store.commit('updateSongList',{
          list: this.songList
        })
      }
    }
  }
</script>

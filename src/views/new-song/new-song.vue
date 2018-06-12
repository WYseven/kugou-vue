<template>
  <div>
    <div class="new-song-swipe">
      <mt-swipe :auto="0">
          <mt-swipe-item v-for="item in banner" :key="item.id">
              <img :src="item.imgurl" />
          </mt-swipe-item>
      </mt-swipe>
  </div>
  <song-list :song-list="songList"></song-list>
</div>
</template>
<script>
import {getNewSongs} from '@/server'
import songList from '@/views/common/song-list/song-list'

export default {
    asyncData({ store, route }){
        return store.dispatch('getNewSongsAction')
    },
    data(){
        return {
            banner: [],
            //songList: []
        }
    },
    computed:{
        songList () {
            return this.$store.state.newSongs;
        }
    },
    components:{songList},
    async created(){
        /*let {data} = await getNewSongs();
        this.banner = data.banner;
        this.songList = data.data;*/
    }
}
</script>
<style scoped>
  .new-song-swipe {
    height: 2.54rem;
  }
  .new-song-swipe img {
    width: 100%;
  }
  
</style>
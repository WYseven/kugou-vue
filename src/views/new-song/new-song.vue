<template>
  <div>
    <div class="new-song-swipe">
      hello
    </div>
  
</div>
</template>
<script>

export default {
    name: 'newSong',
    abc({ store, route }){
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
    }
}
</script>
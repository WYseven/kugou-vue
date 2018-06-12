<template>
  <div class="song-list">
      <mt-cell 
        class='song-cell' 
        v-for="item in songList" 
        :key="item.hash" 
        :title="item.filename"  
        is-link
        >
    </mt-cell>
  </div>
</template>
<script>
  export default {
    name: 'song',
    props:{
      songList:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

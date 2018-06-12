<template>
<div class="plist">
  <mt-cell
    class="song-cell" 
    v-for="item in pList" 
    :key="item.specialid" 
    :title="item.specialname"  is-link>
    <div>
      <i class="icon-music"></i>
      <span>{{item.playcount}}</span>
    </div>
    <img class="plist-img" slot="icon" :src="item.imgurl | filterImgUrl" width="24" height="24">
  </mt-cell>
</div>
</template>
<script>
  import {getPlist} from '@/server'
  export default {
    data(){
      return {
        pList:[]
      }
    },
    async created(){
      let {data} = await getPlist();
      this.pList = data.data;
    }
  }
</script>
<style scoped>
  .plist-img {
    width: 2rem;
    height: 2rem;
  }
  .plist-cell {
    padding: 5px 0;

  }
  .song-cell {
    padding: 0.2rem 0;
  }

  .song-cell .icon-music {
    display: inline-block;
    width: .3rem;
    height: .3rem;
    background: url('http://m.kugou.com/v3/static/images/index/icon_music.png') no-repeat;
    background-size: 100%;
  }
  
</style>
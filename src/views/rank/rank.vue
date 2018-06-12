<template>
<div class="rank">
  <mt-cell 
    class="song-cell" 
    v-for="item in rankList" 
    :key="item.id" 
    :title="item.rankname"  
    is-link
  >
    <img class="ran-img" slot="icon" :src="item.imgurl | filterImgUrl" width="24" height="24">
  </mt-cell>
</div>
</template>
<script>
  import {getRankList} from '@/server'
  export default {
    data(){
      return {
        rankList:[]
      }
    },
    async created(){
      let {data} = await getRankList();
      this.rankList = data.data;
    }
  }
</script>
<style scoped>
  .ran-img {
    width: 2rem;
    height: 2rem;
  }
  .rank-cell {
    padding: 5px 0;

  }
  .song-cell {
    padding: 0.2rem 0;
  }
</style>
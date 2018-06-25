<template>
  <div class="singer-list">
    <mt-cell 
      class="song-cell" 
      v-for="item in slingerList" 
      :key="item.singerid" 
      :title="item.singername"
      is-link
      @click.native="singerSongs(item)"
    >
      <img class="ran-img" slot="icon" :src="item.imgurl | filterImgUrl" width="24" height="24">
    </mt-cell>
  </div>
</template>
<script>
  import {getSingerList,getSingerInfo} from '@/server/'
  export default {
    data(){
      return {
        slingerList:[]
      }
    },
    methods:{
      singerSongs(item){
        this.$router.push({
          name: 'singer_songs',
          params:{
            id: item.singerid
          }
        })
      }
    },
    async created(){
      let classid = this.$route.params.id;

      let {data} = await getSingerList({classid});

      this.slingerList = data.data;

    }
  }
</script>
<style scoped>
  .ran-img {
    width: 2rem;
    height: 2rem;
  }
  .song-cell {
    padding: 0.2rem 0;
  }
  .singer-list i {
    background: red;
  }
  .mint-cell-allow-right::after {
    border: solid 2px red;
  }
</style>
<template>
  <div>
    <div class="img-box" style="overflow:hidden;"> 
      <img :src="info.imgurl | filterImgUrl(400)" alt="">
    </div>
    <div class="song-box">
      <song-list :song-list="songList" />
    </div>
  </div>
</template>
<script>
  import {getSingerInfo} from '@/server/'
  import gotoBack from '@/components/gotoBack/gotoback'
  import songList from '@/views/common/song-list/song-list'
  export default {
    data(){
      return {
        songList: [],
        info: {
          imgurl: ''
        }
      }
    },
    components:{gotoBack,songList},
    async created() {
      let singerid = this.$route.params.id;
      let {data} = await getSingerInfo({singerid})
      this.songList = data.data;
      this.info = data.info;
    },
  }
</script>
<style scoped>
.song-box {
  position: relative;
  top: -3rem;
}
.img-box {
  width: 100vw;
  height: 9rem;
}
.img-box img {
  width: 100%;
}
</style>

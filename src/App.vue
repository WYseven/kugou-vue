<template>
  <div id="app">
    <div class="header-box">
        <mt-header class="kugou-header">
            <router-link class="logo" to="/" slot="left">
                <img src="@/assets/music.png" />
            </router-link>
            <mt-button @click="gotoSearch" icon="search" slot="right"></mt-button>
        </mt-header>
        <router-view class="navbar" name="navBar"></router-view>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>

    <play-bottom></play-bottom>
  </div>
</template>

<script>
import Loading from '@/components/loading'
import playBottom from '@/components/play-bottom/play-bottom'
export default {
  name: 'App',
  methods: {
      gotoSearch(){
          this.$router.push('/search')
      },
      changeTop(){
          this.top = '2rem';
      }
  },
  mounted(){
      
  },
  components: {playBottom}
}
</script>

<style>
html {
    height: 100%;
}
  body {
     margin: 0;
     background: #f5f5f5;
     height: 100%;
  }
  p {
      margin: 0;
  }
  button{
      padding: 0;
  }
  #app {
    height: 100%;;
  }
    .content {
        overflow: hidden;
    }
  .header-box {
      width: 100%;
      z-index: 10;
      position: fixed;
      background:#fff;
  }
  .logo img{
      width: 1.5rem;
      display: inline-block;
      vertical-align: middle;
  }
  .mint-header .kugou-header {
    height: 1rem;
    line-height: 3rem;
    
  }
  #app .mint-header.is-fixed {
      z-index: 999;
  }
  .content {
    padding-top: 2rem;
  }

  .content .song-cell {
    border-bottom: 1px solid #e5e5e5;
  }
  .song-cell .plist-img {
      display: inline-block;
  }
  .song-cell .mint-cell-text {
    max-width: 4rem;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .song-cell .mint-cell-label {
      display: inline-block;
  }

  .song-cell .mint-cell-value {
      position: absolute;
      left: 2.3rem;
      top: 1.5rem;
  }

  .mint-spinner-triple-bounce {
      text-align: center;
  }
  
</style>

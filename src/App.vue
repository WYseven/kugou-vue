<template>
  <div id="app">
    <p>测试</p>
    <mt-header fixed class="kugou-header">
        <router-link class="logo" to="/" slot="left">
            <img src="@/assets/music.png" />
        </router-link>
        <mt-button @click="gotoSearch" icon="search" slot="right"></mt-button>
    </mt-header>
    <router-view class="navbar" name="navBar"></router-view>
    <div class="content">
        <mt-spinner v-show="$store.state.isLoading" type="triple-bounce"></mt-spinner>
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
      }
  },
  components: {playBottom}
}
</script>


<style>
  body {
     margin: 0;
     background: #f5f5f5;
  }
  p {
      margin: 0;
  }
  button{
      padding: 0;
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
  #app .navbar {
    top: .7rem;
    padding: .1rem 0 0 0;
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

<template>
  <div id="app">
    <mt-header fixed class="kugou-header">
        <router-link class="logo" to="/" slot="left">
            <img src="http://m.kugou.com/v3/static/images/index/logo.png" />
        </router-link>
        <mt-button @click="gotoSearch" icon="search" slot="right"></mt-button>
    </mt-header>
    <router-view class="navbar" name="navBar"></router-view>
    <div class="content">
        <mt-spinner v-show="$store.state.isLoading" type="triple-bounce"></mt-spinner>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/loading'
export default {
  name: 'App',
  methods: {
      gotoSearch(){
          console.log(123)
          this.$router.push('/search')
      }
  },
  created(){
      console.log(this.$store)
  }
}
</script>
<style>
  body {
     margin: 0;
     background: #f5f5f5;
  }
  .logo img{
      width: 2.5rem;
      display: inline-block;
      vertical-align: middle;
  }
  .mint-header .kugou-header {
    height: 1rem;
    line-height: 3rem;
    
  }
  .mint-header.is-fixed {
      z-index: 999;
  }
  #app .navbar {
    top: .8rem;
    padding: .1rem 0 0 0;
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

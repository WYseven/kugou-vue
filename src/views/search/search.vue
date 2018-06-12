<template>
  <div class="search">
    <div class="search-input-area">
     
      <div class="search-input-box">
        <mt-search v-model="value" placeholder="歌手/歌名/拼音"></mt-search>
      </div>
      <div class="search-button" @click="searchKeyWork(value)">
        <mt-button  type="primary">搜索</mt-button>
      </div>
    </div>
    <mt-spinner type="triple-bounce" v-show="loading"></mt-spinner>
    <div v-show="!search && !loading">
      <mt-cell title="最近热门" class="search-hot-title"></mt-cell>
      <mt-cell @click.native="searchKeyWork(item.keyword)" 
        :title="item.keyword" 
        v-for="item in hotData" 
        :key="item.keyword"
        is-link
      ></mt-cell>
    </div>
    <div v-show="songList.length && !loading">
      <mt-cell title="最近热门" @click.native="gotoHot" class="search-hot-title"></mt-cell>
      <mt-cell :title="`共有${songList.length}条结果`" class="search-hot-title"></mt-cell>
      <song-list :song-list="songList"></song-list>
    </div>
    <div v-show="!songList.length && search" class="un-search">
      <img src="http://m.kugou.com/v3/static/images/index/search_empty.png" alt="">
      <p>没有搜到相关内容</p>
    </div>
  </div>
</template>
<script>
import songList from '@/views/common/song-list/song-list'
import {searchHot,searchByKeyword} from '@/server/jsonp'

  export default {
    data(){
      return {
        value: "",
        hotData:[],
        songList: [],
        loading: true,
        search: false
      }
    },
    components: {
      songList
    },
    methods:{
      async searchKeyWork(keyword){
        if(!keyword.trim()) {
          return;
        }
        this.search = true;
        this.loading = true;
        this.songList = [1]
        let data = await searchByKeyword({
          keyword
        });
        this.songList = data.data.info;
        this.loading = false;
      },
      gotoHot(){
        this.songList = [];
        this.search = false;
      }
    },
    mounted(){
      // 在手机上按搜索键搜索
      let searhInput = document.querySelector('.search .mint-searchbar-core');
      searhInput.addEventListener('keydown',(e)=>{
        if(e.keyCode === 13){
          this.searchKeyWork(this.value);
          e.target.blur();
        }
      })
    },
    async created(){
      this.$store.commit('changeLoading',false)
      let data = await searchHot();
      this.hotData = data.data.info;
      this.loading = false;
    }
  }
</script>
<style>
  .search {
    width: 100%;
    padding: .1rem;
    box-sizing: border-box;
    
  }
  .search-input-area {
    display: flex;
    overflow: hidden;
  }
  .search-input-box {
    -height: .52rem;
    flex: 2;
  }
  .search a{
    font-size: .30rem;
  }
  .mint-searchbar {
    padding: .1rem .1.2rem;
  }
  .mint-search {
    height: auto;
  }
  .search-button {
    margin-left: .1rem;
  }
  .search-button button {
    display: block;
    height: 100%;
  }
  .mint-searchbar-cancel {
    display: none;
  }
  .mint-search-list {
    display: none;
  }
  .search-hot-title {
    font-size: .30rem;
    color: #2ca3f5;
    line-height: 0.8571rem;
  }
  .un-search {
    width: 100%;
    height: 100%;
    background: red;
    background: #f5f5f5;
  }
  .un-search img {
    width: 5rem;
    display: block;
    margin: 2rem auto 0;
  }
  .un-search p {
    font-size: .3rem;
    text-align: center;
  }
</style>

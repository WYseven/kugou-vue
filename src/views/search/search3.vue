<template>
  <div class="search">
    <div class="search-input-area">
      <div class="search-input-box">
        <mt-search :value.sync="value" placeholder="歌手/歌名/拼音">
            1
        </mt-search>
      </div>
      <div class="search-button">
        <mt-button type="primary">搜索</mt-button>
      </div>
    </div>
    <div>
      <mt-cell title="最近热门" class="search-hot-title"></mt-cell>
      <mt-cell :title="item.keyword" v-for="item in hotData" :key="item.keyword"></mt-cell>
    </div>
    <div>
      <mt-cell title="共有26条结果" class="search-hot-title"></mt-cell>
      <mt-cell :title="item.keyword" v-for="item in hotData" :key="item.keyword"></mt-cell>
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
        hotData:[]
      }
    },
    components: {
      songList
    },
    mounted(){
      let searhInput = document.querySelector('.search .mint-searchbar-core');
      searhInput.addEventListener('keydown',(e)=>{
        //alert(e.keyCode)
      })
    },
    async created(){
      let data = await searchHot();
      this.hotData = data.data.info;
    }
  }
</script>
<style>
  .search {
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
</style>

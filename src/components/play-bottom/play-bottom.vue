<template>
  <div>
    <div class="play-bottom" :style="{bottom: bottom}">
      <div class="play-left" @touchstart="showPlayer">
        <img :src="songInfo.imgUrl | filterImgUrl" alt="">
        <p>
          <span>{{songInfo.songName}}</span>
          <span>{{songInfo.singerName}}</span>
        </p>
      </div>
      <div class="play-right">
        <div @touchstart="prev" class="iconfont  icon-audio_last_step prev-song"></div>
        <div
          @touchstart="playOrpause" 
          class="iconfont play-song"
          :class="{'icon-bofang': buttonValue === '播放','icon-zanting': buttonValue === '暂停'}"
        ></div>
        <div @touchstart="next" class="iconfont  icon-audio_next_step next-song"></div>      
      </div>
    </div>
    <player 
      :song-info="songInfo" 
      :url="url" 
      :top.sync="top" 
      @play-pause="playOrpause"
      @next-song="next"
      @prev-song="prev"
      :button-value="buttonValue"
    ></player>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.css"></style>


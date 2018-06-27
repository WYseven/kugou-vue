<template>
  <div class="play-bottom" :style="{bottom: bottom}">
    <div class="play-left">
      <img :src="songInfo.imgUrl | filterImgUrl" alt="">
      <p>
        <span>{{songInfo.songName}}</span>
        <span>{{songInfo.singerName}}</span>
      </p>
    </div>
    <div class="play-right">

      <div @click="prev" class="iconfont  icon-audio_last_step prev-song"></div>
      <div
        @click="playOrpause" 
        class="iconfont play-song"
        :class="{'icon-bofang': buttonValue === '播放','icon-zanting': buttonValue === '暂停'}"
      ></div>
      <div @click="next" class="iconfont  icon-audio_next_step next-song"></div>      
    </div>
    <audio ref="audio" preload :src="url"></audio>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.css"></style>


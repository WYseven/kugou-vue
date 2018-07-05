<template>
  <div class="m-main" :style="{top: top}">
    <mt-header class="hide-player" title="搜索">
      <div slot="left">
        <mt-button icon="back"  @click.native="()=>{$emit('update:top','100rem')}"></mt-button>
      </div>
    </mt-header>
    <div class="bg-overlay"></div>
    <div class="play-overlay"></div>
    <div class="m-lyric-area">
      <div class="m-lyric">
        <p>对你我会毫不留情</p>
      </div>
    </div>
    <audio ref="audio" preload :src="url"></audio>
    <player-control 
      :total-time="totalTime" 
      :current="currentTime" 
      :url="url"
      @current-change="currentChange"
    ></player-control>
  </div>
</template>
<script src="./player.js"></script>
<style src="./player.css"></style>

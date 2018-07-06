<template>
  <div class="m-main" :style="{top: top}">
    <mt-header class="hide-player" style="font-size:.5rem;" :title="songInfo.songName">
      <div slot="left">
        <mt-button icon="back"  @click.native.stop="()=>{$emit('update:top','100rem')}"></mt-button>
      </div>
    </mt-header>
    <div class="bg-overlay"></div>
    <div class="play-overlay"></div>
    <lyric :rc="rcString" :current="currentTime" ></lyric>
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

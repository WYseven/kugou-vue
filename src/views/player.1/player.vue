<template>
  <div class="m-main">
    <div class="bg-overlay"></div>
    <div class="play-overlay"></div>
    <div class="m-lyric-area">
      <div class="m-lyric">
        <p>对你我会毫不留情</p>
      </div>
    </div>

    <div class="m-bottom">
      <div class="m-progress-box">
        <span class="total-time">00:00</span>
        <div class="m-progress">
          <div class="m-progress-line">
            <div class="m-progress-lineed"></div>
          </div>
          <div class="m-progress-circle"></div>
        </div>
        <span class="current-time">00:00</span>
      </div>
      <div class="m-play-control">
        <div class="m-play-btn m-play-prev-btn iconfont icon-audio_last_step"></div>
        <div class="m-play-play-btn iconfont icon-play"></div>
        <div class="m-play-btn iconfont icon-audio_next_step m-play-next-btn"></div>
      </div>
      <audio preload src="" id="audio"></audio>
    </div>
  </div>
</template>
<style src="./player.css"></style>

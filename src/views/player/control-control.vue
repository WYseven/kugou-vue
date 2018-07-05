<template>
  <div class="m-bottom">
    <div class="m-progress-box">
      <span class="total-time">{{formatTotal}}</span>
      <div class="m-progress" @touchmove="moveFn"  @touchend="upFn"  @touchstart="moveFn">
        <div class="m-progress-line">
          <div class="m-progress-lineed" :style="{width: xx +'px'}"></div>
        </div>
        <div class="m-progress-circle" :style="{left: xx +'px'}"></div>
      </div>
      <span class="current-time">{{formatCurrent}}</span>
    </div>
    <div class="m-play-control">
      <div class="m-play-btn m-play-prev-btn iconfont icon-audio_last_step"></div>
      <div class="m-play-play-btn iconfont icon-bofang"></div>
      <div class="m-play-btn iconfont icon-audio_next_step m-play-next-btn"></div>
    </div>
  </div>
</template>
<script>
  import {sToM} from '@/utils/utils'
  export default {
    props:{
      totalTime: {
        type: Number,
        default:1
      },
      current: {
        type: Number,
        default: 0
      }
    },
    data(){
      return {
        minX: 0,
        maxX:0,
        rectX:0,
        src: '',
        x: 0,
        move: false
      }
    },
    watch:{
      current(){
        if(this.move) return;
        this.x = this.current/this.totalTime * this.maxX;
      }
    },
    computed:{
      xx(){
        if(this.x < this.minX) return this.minX;
				if(this.x > this.maxX) return this.maxX;
        return this.x;
      },
      formatTotal(){
        return sToM(this.totalTime)
      },
      formatCurrent(){
        return sToM(this.current)
      }
    },
    methods:{
      moveFn(e){
        this.move = true;
        this.x = e.changedTouches[0].pageX - this.rectX;
      },
      upFn(){
        this.move = false;
        this.$emit('current-change',this.xx/this.maxX * this.totalTime)
      }
    },
    mounted() {
      var mProgressCircle = document.querySelector('.m-progress-circle');
      var mProgress = document.querySelector('.m-progress');
      var mProgressLineed = document.querySelector('.m-progress-lineed');
      var totalTime = document.querySelector('.total-time');
      var currentTime = document.querySelector('.current-time');

    this.minX = 0;
    // 能够拖动最大距离
    this.maxX = mProgress.clientWidth-mProgressCircle.offsetWidth;
    console.log(mProgress.clientWidth,mProgressCircle.offsetWidth)
    // 到左边的距离
    this.rectX = mProgress.getBoundingClientRect().left;
    }
  }
</script>
<style>

.m-bottom {
	width: 100%;
	position: absolute;
	bottom: 2.4rem;
	left: 0;
}

.m-progress-box {
	padding: 0 .2rem;
	box-sizing: border-box;
	font-size: .12rem;
	display: flex;
	align-items: center;

}

.m-progress {
	flex:3;
	height: .44rem;
	margin: 0 .1rem;
	display: flex;
	align-items: center;
	position: relative;
	-overflow: hidden;
}

.m-progress-line {
	width: 100%;
	background:#9c8d88;
	height: .06rem;
	position: relative;
}

.m-progress-lineed {
	width: 0;
	background: #d23d43;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 1;
}

.m-progress-circle {
	width: .4rem;
	height: .4rem;
	background: #fff;
	position: absolute;
	left: 0;
	top: 0;
	border-radius: 50%;
	z-index: 2;
}

.m-play-control {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: .1rem;
}

.m-play-play-btn {
	width: 1rem;
	height: 1rem;
	background: #c84040;
	border-radius: 50%;
	margin: 0px .56rem;
	

}

.m-play-btn:before {
	font-size: .4rem;
	color: #fff;
	display: block;
	text-align: center;
	line-height: .85rem;
}

.m-play-play-btn {
	font-size: .8rem;
	color: #fff;
	display: block;
	text-align: center;
	line-height: 1rem;
}

.m-play-btn {
	width: .85rem;
	height: .85rem;
	background: #c84040;
	border-radius: 50%;
}
</style>

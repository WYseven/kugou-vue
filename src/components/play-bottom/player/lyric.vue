<template>
  <div ref="area" class="m-lyric-area">
    <div ref="lyric" class="m-lyric">
      <p v-for="(item,index) in rc" :key="item[0]" :class="{bg:initIndex === index}">
        {{item[1]}}
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      rc:{
        type: Array,
        default(){
          return []
        }
      },
      current: {
        type: Number,
        default: 0
      }
    },
    data(){
      return {
        maxX: 0,
        initIndex: 0,
        onePheight: 0,
        isMove: false,
        timer: null,
        num: 5
      }
    },
    watch:{
      rc(){
         this.$nextTick(() => {
           this.$refs.lyric.style.transition = '.3s'
            this.maxX = this.$refs.area.scrollHeight - this.$refs.area.clientHeight;
            this.onePheight = this.$refs.lyric.children[1].offsetHeight;
            this.num = Math.floor((Math.ceil(this.$refs.area.clientHeight/this.onePheight))/2) - 1;
         })
      },
      current(){
        if(this.isMove) return;
        var start = 0;
        for( var i = 0; i < this.rc.length; i++ ){
          if(this.current > this.rc[i][0]){
            start = i;
          }
        }
        var t = start > this.num ? -(start-this.num)*this.onePheight : 0;
        this.initIndex = start;
        this.$refs.lyric.style.top = t + 'px';
      }
    },
    mounted() {
      var disY = 0;
      this.$refs.lyric.addEventListener('touchstart',(e) => {
        this.$refs.lyric.style.transition = 'none';
        this.isMove = true;
        clearTimeout(this.timer);
        disY = e.changedTouches[0].pageY - this.$refs.lyric.offsetTop;
        e.stopPropagation();
				e.preventDefault();	
      })
      this.$refs.lyric.addEventListener('touchmove',(e) => {
        var t = e.changedTouches[0].pageY - disY;
        if(t > 0) t = 0;
				if(t < -this.maxX) t = -this.maxX;
        this.$refs.lyric.style.top = t + 'px';
      })
      this.$refs.lyric.addEventListener('touchend',(e) => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.isMove = false;
          this.$refs.lyric.style.transition = '.3s'
        }, 1000);
      })
    },
  }
</script>
<style>

.m-lyric-area {
	height: 58%;
	overflow: hidden;
	position: relative;
  z-index: 2;
  margin-top: .6rem;
}

.m-lyric {
	width: 100%;
	position: absolute;
	left: 0;
  top: 0;
}

.m-lyric-area p {
	text-align: center;
	line-height: 1rem;
	font-size: .3rem;
	
}


.m-lyric .bg {
	color: red;
	font-size: .4rem;
}
</style>


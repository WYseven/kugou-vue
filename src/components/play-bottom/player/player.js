import playerControl from './control-control.vue'
import lyric from './lyric.vue'
import { mapState } from 'vuex'
import { getRc } from '@/server/searchMp3'
import { parseLyric } from '@/utils/utils.js'
export default {
  props:{
    top: {
      type: String,
      default: '100rem'
    },
    url: {
      type: String,
      default: ''
    },
    songInfo: {
      type: Object,
      default(){
        return {}
      }
    },
    buttonValue: { // 控制播放还是暂停
      type: String,
      default: '暂停'
    }
  },
  data(){
    return {
      currentTime: 0,
      totalTime: 1,
      rcString: []
    }
  },
  computed: {
    ...mapState(['songList', "hash"])
  },
  watch:{
    async songInfo(){
      let { data: rcString } = await getRc({
        keyword: this.songInfo.songName,
        hash: this.songInfo.hash
      });
      this.rcString = parseLyric(rcString);
    }
  },  
  methods:{
    currentChange(c){
      this.$refs.audio.currentTime = c;
      this.$refs.audio.play();
    },
    playOrpause(){
      this.$emit('play-pause')
    }
  },
  components: { playerControl, lyric },
  mounted() {
    var audio = this.$refs.audio;
    this.$refs.audio.addEventListener('loadeddata', () => {
      this.$refs.audio.play();
      this.totalTime = parseInt(audio.duration);
    })
    audio.addEventListener('timeupdate',() => {
      this.currentTime = audio.currentTime;
    })
    audio.addEventListener('ended',() => {
      this.$emit('next-song')
    })

    var mMain = document.querySelector('.m-main');

  },
}
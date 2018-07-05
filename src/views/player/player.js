import playerControl from './control-control.vue'
import { mapState } from 'vuex'
export default {
  props:{
    top: {
      type: String,
      default: '100rem'
    },
    url: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      currentTime: 0,
      totalTime: 1
    }
  },
  computed: {
    ...mapState(['songList', "hash"])
  },
  methods:{
    currentChange(c){
      console.log(c)
      this.$refs.audio.currentTime = c;
      this.$refs.audio.play();
    }
  },
  components: { playerControl },
  mounted() {
    var audio = this.$refs.audio;
    this.$refs.audio.addEventListener('loadeddata', () => {
      this.$refs.audio.play();
      this.totalTime = parseInt(audio.duration);
    })
    audio.addEventListener('timeupdate',() => {
      this.currentTime = audio.currentTime;
    })

  },
}
<template>
  <mt-navbar v-model='selected' >
      <mt-tab-item 
        :id="item.path" 
        v-for="item in routes" 
        v-if="item.render"
        :key="item.path"
        @click.native="gotoRoute(item.name)"
      >
      {{item.title}}
      </mt-tab-item>
  </mt-navbar>
</template>
<script>
  import {routes} from '@/router/routes'
  export default {
    data(){
      return {
          selected: '/',
          routes
      }
    },
    watch:{
      $route(){
        this.selected = this.$route.path;
      }
    },
    methods:{
      gotoRoute(name){
        this.$router.push({
          name: name
        })
      }
    },
    created(){
      this.selected = this.$route.path;
    }
  }
</script>
<style>
.mint-tab-item {
  overflow: hidden;
}
</style>

<template>
  <mt-navbar fixed v-model='selected' >
      <mt-tab-item 
        :id="item.path" 
        v-for="item in routes" 
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
    methods:{
      gotoRoute(name){
        console.log(name)
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

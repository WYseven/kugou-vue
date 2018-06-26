<template>
  <mt-header fixed class="go-back-header" title="搜索">
    <div slot="left">
      <mt-button icon="back" @click.native="()=>{$router.go(-1)}"></mt-button>
    </div>
  </mt-header>
</template>
<style scoped>
#app .go-back-header {
  background: #fff;
  box-shadow: 0 0.0785rem 0.0785rem 0 #f4f4f4;
  color: #333;
  z-index: 999;
  height: 1rem;
}
</style>
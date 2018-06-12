<template>
  <mt-header fixed class="go-back-header" title="搜索">
    hello
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>
</template>
<style scoped>
.go-back-header {
  background: #fff;
  box-shadow: 0 0.0785rem 0.0785rem 0 #f4f4f4;
  color: #333;
  z-index: 999;
  height: 1rem;
}
</style>
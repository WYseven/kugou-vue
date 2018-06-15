import Vue from 'vue'
import createRouter from './router'
import createStore from './store'
import App from './app.vue'
import { sync } from 'vuex-router-sync'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)


Vue.filter("filterImgUrl",(value) => {
  return value.replace('{size}', 240)
})

// 实例 每次请求都会创建新的实例

export default (context) => {

  const router = createRouter();
  const store = createStore();
  // 同步路由状态(route state)到 store
  sync(store, router)

  const app = new Vue({
    router,
    store,
    components: { App },
    template: '<App/>'
  })
  return { router, app ,store}

}
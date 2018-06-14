// 服务端这边，需要把访问的路径给到vue-router

import createApp from './app.js'

// 外面的express服务使用  {url: / /about}
export default (context) => {
  return new Promise((resolve, reject) => {
    
    let { app, router,store } = createApp(context);
    const { url } = context
    const { fullPath } = router.resolve(url).route
    
    if (fullPath !== url) {
      return reject({ url: fullPath })
    }
    router.push(context.url);
    console.log('111111111111',context.url)
    router.onReady(() => {
      // 访问路径，可定匹配到组件
      let matchedComponents = router.getMatchedComponents();
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }
      // 对所有匹配的路由组件调用 `asyncData()`
      Promise.all(matchedComponents.map(Component => {
        if (Component.abc) {
          return Component.abc({
            store,
            route: router.currentRoute
          })
        }
      })).then(() => {
        // 在所有预取钩子(preFetch hook) resolve 后，
        // 我们的 store 现在已经填充入渲染应用程序所需的状态。
        // 当我们将状态附加到上下文，
        // 并且 `template` 选项用于 renderer 时，
        // 状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。
        context.state = store.state
        console.log('2222222222221111111')
        resolve(app)
      }).catch(reject);
    }, reject)

  })
}
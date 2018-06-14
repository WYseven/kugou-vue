const devServer = require('./build/dev-server');
const express = require('express');
const app = express();
const vueRenderer = require('vue-server-renderer')
const path = require('path');
var proxy = require('http-proxy-middleware');

const { JSDOM } = require('jsdom')
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', { url: 'http://localhost:8081' })
if (typeof window === 'undefined') {
  global.window = dom.window
  global.document = window.document
  global.navigator = window.navigator
}
app.use((req,res,next) => {
  console.log('有人发起了请求',req.url,req.query)
  next()
})
var apiProxy = proxy('/proxy', {
  target: "http://m.kugou.com",
  "secure": false,
  "changeOrigin": true,
  "pathRewrite": {
    "^/proxy": ""
  },
  "headers": {
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Mobile Safari/537.36"
  }
});
app.use('/proxy', apiProxy);
app.get('*', async (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/html;charset=utf-8;')

  devServer(function (serverBundle, clientBundle, template) {
    let renderer = vueRenderer.createBundleRenderer(serverBundle, {
      template,
      clientManifest: clientBundle.data,
      runInNewContext: false
    })

    renderer.renderToString({ url: req.url }).then((html) => {
      res.end(html)
    }).catch(err => console.log(err))
  })

})

app.listen(5000, () => {
  console.log('启动成功')
})

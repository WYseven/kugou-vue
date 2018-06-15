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
  if(req.url === '/favicon.ico'){
    return;
  }
  next();
})
// 代理请求
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

const isProd = process.env.NODE_ENV === 'production'
const useMicroCache = process.env.MICRO_CACHE !== 'false'
const serverInfo =
  `express/${require('express/package.json').version} ` +
  `vue-server-renderer/${require('vue-server-renderer/package.json').version}`;


var cacheHtml = {};
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
    
    if(cacheHtml[req.url]){
      res.end(cacheHtml[req.url])
    }

    renderer.renderToString({ url: req.url }).then((html) => {
      res.end(html)
      cacheHtml[req.url] = html;
    }).catch(err => console.log(err))
  })

})

app.listen(5000, () => {
  console.log('启动成功')
})

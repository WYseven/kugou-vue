const serverConf = require('./webpack.server.conf');

const webpack = require('webpack')
const fs = require('fs')
const path = require('path');
const Mfs = require('memory-fs')
const axios = require('axios')

module.exports = (app, templatePath, cb) => {

  let bundle
  let template
  let clientManifest

  let ready
  const readyPromise = new Promise(r => { ready = r })
  const update = () => {
    if (bundle && clientManifest) {
      ready()
      cb(bundle, {
        template,
        clientManifest:clientManifest.data
      })
    }
  }

  template = fs.readFileSync(templatePath, 'utf-8')

  const webpackComplier = webpack(serverConf);

  var mfs = new Mfs();
  webpackComplier.outputFileSystem = mfs;

  webpackComplier.watch({}, async (error, stats) => {
    if (error) return console.log(error);

    stats = stats.toJson();
    stats.errors.forEach(err => console.log(err))
    stats.warnings.forEach(err => console.log(err))

    // server Bundle json文件
    let serverBundlePath = path.join(
      serverConf.output.path,
      'vue-ssr-server-bundle.json'
    )

    bundle = JSON.parse(mfs.readFileSync(serverBundlePath, "utf-8"))

    //console.log(serverBundle)

    // client Bundle json文件
    clientManifest = await axios.get('http://127.0.0.1:8081/vue-ssr-client-manifest.json')

    // 模板

    //let template = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf-8');

    //cb(serverBundle, clientBundle, template)

    update();

  })
  return readyPromise;
}
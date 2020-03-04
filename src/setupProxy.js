const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy(
      '/m4a', {
        target: 'https://od.sign.qingting.fm',
        changeOrigin: true
      }
    )
  )
}
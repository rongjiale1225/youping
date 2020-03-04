<<<<<<< HEAD
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
=======
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api', { 
      target: 'http://localhost:9000/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
>>>>>>> bf2addf4826ee14591362b5ed21547115ca91a2a
}
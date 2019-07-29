const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    proxy('/smcAdmin', {
      target: '/',
      changeOrigin: true
      // pathRewrite: {
      //   '^/smcAdmin': '/smcAdmin'
      // }
    })
  );
};

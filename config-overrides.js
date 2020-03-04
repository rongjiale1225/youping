<<<<<<< HEAD
// const { injectBabelPlugin } = require('react-app-rewired');
const path = require('path')
module.exports = function override(config, env) {
  // config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  config.module.rules[2].oneOf[1].options.babelrc = true;
  
  config.resolve.alias = {
    'assets': path.resolve(__dirname, './src/assets'),
    'pages': path.resolve(__dirname, './src/pages'),
    'components': path.resolve(__dirname, './src/components'),
    'utils': path.resolve(__dirname, './src/utils'),
    '@': path.resolve(__dirname, './src')
  }

  return config;
=======
// const { injectBabelPlugin } = require('react-app-rewired');
const path = require('path')
module.exports = function override(config, env) {
  // config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  config.module.rules[2].oneOf[1].options.babelrc = true;
  
  config.resolve.alias = {
    'assets': path.resolve(__dirname, './src/assets'),
    'pages': path.resolve(__dirname, './src/pages'),
    'components': path.resolve(__dirname, './src/components'),
    'utils': path.resolve(__dirname, './src/utils'),
    '@': path.resolve(__dirname, './src')
  }

  return config;
>>>>>>> bf2addf4826ee14591362b5ed21547115ca91a2a
};
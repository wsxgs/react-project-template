const {
  override,
  fixBabelImports,
  addPostcssPlugins,
  addDecoratorsLegacy
} = require('customize-cra')
const WorkboxPlugin = require('workbox-webpack-plugin')

const customPlugin = () => config => {
  const plugins = [
    new WorkboxPlugin.GenerateSW({
      cacheId: 'webpack-pwa', // 设置前缀
      skipWaiting: true, // 强制等待中的 Service Worker 被激活
      clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
      runtimeCaching: [
        // 配置路由请求缓存
        {
          urlPattern: /.*\.js/, // 匹配文件
          handler: 'NetworkFirst' // 网络优先
        },
        {
          urlPattern: /\/api/, // 匹配文件
          handler: 'NetworkFirst' // 网络优先
        }
      ]
    })
  ]
  config.plugins = [...config.plugins, ...plugins]
  return config
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }),
  addPostcssPlugins([
    require('postcss-cssnext'),
    require('postcss-px-to-viewport')({
      viewportWidth: 750, // (Number) The width of the viewport.
      viewportHeight: 1334, // (Number) The height of the viewport.
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw', // (String) Expected units.
      selectorBlackList: ['.ignore', '.hairlines', '.am'], // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false // (Boolean) Allow px to be converted in media queries. },
    })
  ]),
  addDecoratorsLegacy(),
  customPlugin()
)

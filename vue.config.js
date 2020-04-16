const path = require('path')

function resolve(dir = '') {
  return path.join(__dirname, './src', dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    // 九键输入法的 「mall」= 「6255」
    host: '0.0.0.0',
    port: 8088,
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      // '/pmobile': {
      //   // target: `http://192.168.3.9:6255/mock`, // 本地mock数据
      //   // target:'http://192.168.228.35:9999',// 服务地址
      //   target: 'http://192.168.230.228:8761', // 服务地址
      //   changeOrigin: true,
      //   ws: true,
      //   pathRewrite: {
      //     ['^' + process.env.VUE_APP_BASE_API]: ''
      //   }
      // },
      '/pmobile/wcb/': {
        target: 'http://192.168.230.248:8761', // 微信地址
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/pmobile/wcb': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  },
  configureWebpack: {
    resolve: {
      alias: {
        core: resolve('core')
      }
    },
    optimization: {
      runtimeChunk: {
        name: entrypoint => `runtime~${entrypoint.name}`
      },
      splitChunks: {
        minChunks: 2,
        minSize: 20000,
        maxAsyncRequests: 20,
        maxInitialRequests: 30,
        name: false
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data:
          '@import "@/assets/scss/_var.scss";@import "@/assets/scss/_mixin.scss";'
      }
    }
  }
}

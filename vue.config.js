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
      '/pmobile': {
        target: `http://0.0.0.0:8088/mock`, // 本地mock数据
        // target: 'http://192.168.228.222:8762', // 微信地址
        // target: 'http://192.168.230.101:9003', // 曾地址
        // target: 'https://api.weixin.qq.com', // 微信网关地址
        // target: 'http://192.168.228.121:9000', // 涛测试地址
        // target: 'http://192.168.232.92:9001', // 鼎测试地址
        // target: 'http://192.168.230.157:8888', // 传奇测试地址
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/pmobile': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
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
      },
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // less 文件覆盖（文件路径为绝对路径）
          // 这里千万要写对，不然就会报错，或者直接没有效果，也找不到原因
          hack: `true; @import "${path.resolve(__dirname, 'src/assets/index.less')}";`
        }
      }

      // less: {
      //   data:
      //     '@import "@/assets/index.less";'
      // }
    }
  }
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, 'src/assets/index.less') // 需要全局导入的less
      ]
    })
}

const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 75
          })
        ]
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://m.you.163.com', // 请求地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // rewrite path
        },
      },
   
    }
  }
}

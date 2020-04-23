const cssLoaderConfig = require('@zeit/next-css/css-loader-config')
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs')
const path = require('path')
// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './public/less/antd-custom.less'), 'utf8')
)
const isProd = process.env.NODE_ENV === 'production'

module.exports = withLess({
  // cssModules: true,
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   localIdentName: "[local]___[hash:base64:5]",
  // },
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables,
  },
  distDir: 'build',
  // assetPrefix: isProd ? 'http://10.123.5.151/rebuild/wand-template/' : '',
  webpack: (config, {
    isServer,dev
  }) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'file-loader',
      options: {
        name: '/public/font/[name].[ext]',
      },
    })

    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      // your aliases
      'assets': path.resolve(__dirname, 'public/'),
      'comp': path.resolve(__dirname, 'pages/comp/'),
      '@': path.resolve(__dirname, 'pages/components/'),
    }

    if (!isServer) {
      config.plugins.push(
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: dev
            ? 'static/css/[name].css'
            : 'static/css/[name].[contenthash:8].css',
          chunkFilename: dev
            ? 'static/css/[name].chunk.css'
            : 'static/css/[name].[contenthash:8].chunk.css',
        ignoreOrder: true,
        })
      )
    }
    config.stats = {
      // HOTFIX: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250
      warningsFilter: (warning) => warning.indexOf('Conflicting order between:') > -1,
    };

    return config
  }
})

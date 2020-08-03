'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')
function resolve(dir) {
    return path.join(__dirname, dir)
  }
const name = defaultSettings.title || 'Youcku Admin' // 页面的title
const port = process.env.port || process.env.npm_config_port || 9528 // dev port

module.exports = {
    // 所有配置说明，都可以在官网查找到，不明白可以自行阅读  https://cli.vuejs.org/config/
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        // before: require('./mock/mock-server.js')
    },
}
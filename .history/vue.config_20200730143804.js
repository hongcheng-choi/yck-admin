// 所有配置说明，都可以在官网查找到，不明白可以自行阅读  https://cli.vuejs.org/config/


const port = process.env.port || process.env.npm_config_port || 9528 // dev port

module.exports = {
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
        before: require('./mock/mock-server.js')
    },
}
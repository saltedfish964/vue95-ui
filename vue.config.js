module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    }
  }
}
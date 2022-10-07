const path = require('path')

module.exports = {
  webpack: {
    configure: {
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'product.js',
        library: 'product',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        publicPath: 'http://localhost:4001/',
      },
    },
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 4001,
    historyApiFallback: true,
    hot: true,
  },
}

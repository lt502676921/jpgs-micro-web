const path = require('path')

module.exports = {
  webpack: {
    configure: {
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'user.js',
        library: 'user',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        publicPath: 'http://localhost:4002/',
      },
    },
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 4002,
    historyApiFallback: true,
    hot: true,
  },
}

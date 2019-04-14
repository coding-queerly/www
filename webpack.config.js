const path = require('path')

module.exports = {
  entry: './src',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        use: ['babel-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
}

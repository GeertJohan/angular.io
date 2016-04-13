// #docregion
module.exports = {
  devtools: 'source-map',
  
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts'
      },
      {
        test: /\.html$/,
        loader: 'html'
        
      },
      {
        test: /\.css$/,
        loader: 'null'
      }
    ]
  }
}
// #enddocregion
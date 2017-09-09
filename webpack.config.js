module.exports = {
  entry: [
    './src/index.jsx',
    './spec/components/AppSpec.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [__dirname + '\\src', __dirname + '\\spec'],
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '\\dist'
  }
};

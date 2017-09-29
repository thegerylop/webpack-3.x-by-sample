module.exports = {
  entry: ['./students.ts'],
  output: {
    filename: 'bundle.js',
  },
  resolve: {
        extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: [
          'babel-loader',
          'awesome-typescript-loader',
        ]},
    ],
  },
};

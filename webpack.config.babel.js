import webpack from 'webpack';

const config = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  context: __dirname,

  entry: { main: './src/index' },

  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js(x)?$)/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(gif|jpg|png|svg|eot|otf|ttf|woff(2)?)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=100000&name=/[name].[ext]',
      },
    ],
  },

  resolve: {
    alias: {
      components: `${__dirname}/src/components`,
      fonts: `${__dirname}/src/fonts`,
      images: `${__dirname}/src/images`,
      styles: `${__dirname}/src/styles`,
      utils: `${__dirname}/src/utils`,
      root: `${__dirname}`,
    },
  },

  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    compress: true,
    contentBase: 'dist',
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    noInfo: true,
    port: 8080,
  },

  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
};

export default config;

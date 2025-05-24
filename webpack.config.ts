import webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as path from "path";
import "webpack-dev-server";

const prod = process.env.NODE_ENV === 'production';

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html"
});

const config: webpack.Configuration = {
  mode: prod ? 'production' : 'development',
  entry: "./src/index.tsx",
  output: {
    path: __dirname + '/dist/',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader'
        ],
      },
    ]
  },
  devtool: prod ? undefined : 'source-map',
  
  plugins: [
    htmlPlugin,
    prod && new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    })
  ]
};

export default config;
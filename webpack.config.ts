import * as webpack from 'webpack';
import 'webpack-dev-server';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';

const prod = process.env.NODE_ENV === 'production';

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  inject: true, // Automatically inject script tags for bundled files
});

const config: webpack.Configuration = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'), // Use path.join for cross-platform compatibility
    filename: '[name].[contenthash].js', // Use contenthash for better caching in production
    clean: true, // Clean the dist folder before each build
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.less'], // Add .tsx and .ts extensions
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Process TypeScript and TSX files
        exclude: /node_modules/,
        loader: 'ts-loader', // Transpile TypeScript files
      },
      {
        test: /\.less$/, // For modular LESS files
        use: [
          prod ? MiniCssExtractPlugin.loader : 'style-loader', // Extract the compiled LESS into a separate CSS file
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]', // Custom class name pattern for CSS Modules
              },
            },
          },
          'less-loader', // Compile LESS into CSS
        ],
      },
    ],
  },
  devtool: prod ? false : 'source-map', // Only use source maps in development
  plugins: [
    htmlPlugin,
    new MiniCssExtractPlugin({
      filename: prod ? '[name].[contenthash].css' : '[name].css', // Use contenthash in production for caching
    }),
    // Additional plugins can be added here, such as TerserPlugin for minification in production
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // Optimize and split common dependencies into separate files
    },
    minimize: prod, // Enable minification only in production
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    hot: true, // Hot module replacement in development
    open: true, // Open the browser on server start
    historyApiFallback: true, // Support for client-side routing (React Router)
  },
};

export default config;

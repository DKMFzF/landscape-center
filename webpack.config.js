// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { DefinePlugin } = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");

const CopyWebpackPlugin = require("copy-webpack-plugin");

require('dotenv').config({
  path: path.join(process.cwd(), process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env')
});

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: "./src/index.ts",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
    watchFiles: ["src/pages/*.njk"],
    hot: true
  },
  plugins: [
    // html webpack
    new HtmlWebpackPlugin({
      template: "src/pages/index.html"
    }),

    new MiniCssExtractPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    new DefinePlugin({
      'process.env.DEVELOPMENT': !isProduction,
      'process.env.API_ORIGIN': JSON.stringify(process.env.API_ORIGIN ?? '')
    }),

    // copy manifest
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/public/manifest.json", to: "manifest.json" },
        { from: "src/public/android-chrome-192x192.png", to: "android-chrome-192x192.png" },
        { from: "src/public/android-chrome-512x512.png", to: "android-chrome-512x512.png" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: ["babel-loader", "ts-loader"],
        exclude: ["/node_modules/"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "resolve-url-loader", {
          loader: "sass-loader",
          options: {
            sourceMap: true,
            sassOptions: {
              includePaths: ["src/scss"]
            }
          }
        }],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        keep_classnames: true,
        keep_fnames: true
      }
    })]
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};

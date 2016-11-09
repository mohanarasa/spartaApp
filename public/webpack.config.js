var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'browser', 'js');
var JS_DIR = path.resolve(__dirname, 'src', 'js');
var DROPDOWN_DIR = path.resolve(__dirname, 'node_modules', 'react-foundation-menudropdown');
var isProduction = (process.env.NODE_ENV === 'production');

var config = {
  entry: JS_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
      loaders : [
        {
          test : /\.jsx?/,
          include : [JS_DIR, DROPDOWN_DIR],
          loader : 'babel'
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
        },
        { 
          test: /\.woff$/,
          loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]'
        },
        { 
          test: /\.woff2$/,
          loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]'
        },
        { 
          test: /\.[ot]tf$/,
          loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]'
        },
        { 
          test: /\.eot$/,
          loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]'
        }
      ]
  }
};

module.exports = config;

var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    basePath: '',
    
    frameworks: ['mocha', 'chai', 'sinon', 'es6-shim'],
    
    files: ['../webpack/test.js'],

    plugins: ["karma-*"],
    
    preprocessors: {
      '../webpack/test.js': ['webpack', 'sourcemap']
    },
    
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
          },
          {
            test: /\.json$/,
            loader: 'json'
          }
        ]
      },
      resolve: {
        modulesDirectories: [
          './src',
          'node_modules'
        ],
        extensions: ['', '.json', '.js', '.ts', '.tsx', '.jsx']
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
      },
      plugins: [
        new webpack.IgnorePlugin(/^fs$/),
        new webpack.IgnorePlugin(/^react\/addons$/)
      ]
    },

    webpackMiddleware: {
      noInfo: true
    },

    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
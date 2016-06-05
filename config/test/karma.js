var webpack = require('webpack');

module.exports = function (config) {
  var conf = {
    basePath: '',

    frameworks: ['mocha', 'chai', 'es6-shim'],

    browsers: [],

    files: ['../webpack/test.js'],

    plugins: ["karma-*"],

    preprocessors: {
      '../../app/*.ts': ['coverage'],
      '../../app/*.tsx': ['coverage'],
      '../webpack/test.js': ['webpack', 'sourcemap']
    },

    reporters: [ 'mocha', 'coverage' ],

    coverageReporter: {
      dir: '../../coverage',
      reporters: []
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
          },
          {
            test: /\.json$/,
            loader: 'json'
          }
        ],
        postLoaders: [
          {
            test: /\.tsx?$/,
            loader: 'istanbul-instrumenter-loader',
            exclude: [
              /node_modules/
            ]
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

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  };

  if (process.env.NODE_ENV === 'ci') {
    conf.autoWatch = false;
    conf.singleRun = true;
    conf.browsers.push('Firefox');
    conf.coverageReporter.reporters.push( { type : 'lcov', subdir : '.' } );
  } else {
    conf.browsers.push('Chrome');
    conf.coverageReporter.reporters.push( { type : 'html', subdir : 'html' } );
    conf.coverageReporter.reporters.push( { type : 'lcov', subdir : '.' } );
  }

  config.set(conf);
}

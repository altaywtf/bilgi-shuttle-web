var webpack = require('webpack');

module.exports = function (config) {
  var conf = {
    basePath: '',

    frameworks: [ 'mocha', 'chai', 'es6-shim' ],

    browsers: ['Firefox'],

    files: [ '../webpack/test.js' ],

    plugins: [ 'karma-*' ],

    preprocessors: {
      '../webpack/test.js': [ 'webpack', 'sourcemap' ],
    },

    reporters: [ 'mocha', 'coverage' ],

    coverageReporter: {
      dir: '../../coverage',
      reporters: []
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        noParse: [
            /node_modules\/sinon/,
        ],
        loaders: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
          },
          {
            test: /\.json$/,
            loader: 'json'
          },
          {
            test: /\.css$/,
            include: /app/,
            loaders: [
              'style',
              'css?modules&importLoaders=2&sourceMap&localIdentName=[local]__[hash:base64:5]',
              'postcss'
            ]
          },
        ],
        postLoaders: [
          {
            test: /\.tsx?$/,
            loader: 'istanbul-instrumenter-loader',
            include: /app/,
            exclude: [
              /\.test\.tsx?$/,
              /TestHelper\.tsx?$/,
              /\.model\.ts$/,
              /node_modules/,
              /config/
            ]
          }
        ]
      },
      postcss: function () {
        return [
          require("postcss-cssnext")(),
        ];
      },
      resolve: {
        modulesDirectories: [
          './app',
          'node_modules'
        ],
        extensions: ['', '.json', '.js', '.ts', '.tsx', '.jsx'],
        alias: {
          sinon: 'sinon/pkg/sinon'
        }
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
    conf.coverageReporter.reporters.push( { type : 'lcov', subdir : '.' } );
  } else {
    conf.browsers.push('Chrome');
    conf.coverageReporter.reporters.push( { type : 'html', subdir : 'html' } );
  }

  config.set(conf);
}

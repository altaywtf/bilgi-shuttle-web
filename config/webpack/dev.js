var path = require('path');
var webpack = require('webpack');

var baseConfig = require('./base');

var config = Object.assign({}, baseConfig, {
	debug: true,
	devtool: 'eval',

	entry: [
		'webpack-hot-middleware/client?reload=true',
		'./app/index.tsx'
	],

	plugins: [
		new webpack.DefinePlugin({
		  'process.env':{
		    'NODE_ENV': JSON.stringify('development')
		  }
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]

});

module.exports = config;
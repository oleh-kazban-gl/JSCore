const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				include: [
					path.resolve(__dirname, '**/*.js')
				],
				loader: 'eslint-loader'
			},
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, '**/*.js')
				],
				loader: 'babel-loader',
				query: {
					compact: true,
					presets: [
						['env', { modules: false }]
					]
				}
			}
		]
	},
	performance: {
		hints: false
	},
	devServer: {
		port: 3000,
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
};

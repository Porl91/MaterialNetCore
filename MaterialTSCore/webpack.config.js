const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./src/index.tsx",
	output: {
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'wwwroot')
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json"]
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Bootstrap Demo Page',
			template: 'src/index.html'
		})
	],

	// Remove me
	mode: 'development'
};
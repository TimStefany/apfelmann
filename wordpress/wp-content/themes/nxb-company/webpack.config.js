const path = require('path');
const Autoprefixer = require('autoprefixer');
const autoprefixerBrowsers = ['last 3 versions', '> 5%', 'ie >= 10'];
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
	entry: {
		main: './assets/main.js',
		blocks: './assets/blocks.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
	},
	devtool: "source-map",
	plugins: [
		new MiniCssExtractPlugin()
	],
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						"presets": [
							["env", {
								"modules": false,
								"targets": {
									"browsers": autoprefixerBrowsers
								}
							}]
						],
						"plugins": [
							["transform-react-jsx", {
								"pragma": "wp.element.createElement"
							}]
						]
					}

				}
			},
			{
				test: /\.(scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader', // translates CSS into CommonJS modules
						options: {
							sourceMap: true,
							url: false,
							import: false
						}
					},
					{
						loader: 'postcss-loader', // Run post css actions
						options: {
							sourceMap: true,
							plugins: () => [
								Autoprefixer({
									browsers: autoprefixerBrowsers,
								})
							]
						}
					},
					{
						loader: 'sass-loader', // compiles Sass to CSS
						options: {
							sourceMap: true,
							outputStyle: 'compressed'
						}

					}
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				exclude: '/node_modules/',
				use: [{
					loader: 'file',
					options: {
						emitFile: false
					}
				}]
				// use: [{
				// 	loader: 'file-loader',
				// 	options: {
				// 		name: '[name].[ext]',
				// 		outputPath: 'fonts/'
				// 	}
				// }]
			}


		],
	},
};

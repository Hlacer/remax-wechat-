const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
	output:'dist/miniprogram',
	compressTemplate:process.env.NODE_ENV === 'production',
	configWebpack({config}){
		config.plugin('copy-webpack-plugin').use(CopyWebpackPlugin,[
			new CopyWebpackPlugin({
				patterns:[
					{
						from:path.join(__dirname,'./cloudfunctions'),
						to:path.join(__dirname,'./dist/cloudfunctions')
					}
				]
			})
		])
	}
};

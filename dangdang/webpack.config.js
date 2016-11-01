// 通过此配置 可以在public文件夹下面生成临时的内存文件 不会出现实体文件
var webpack = require('webpack');
var path = require('path');
var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
module.exports = {
    entry: ['./public/assets/app.js',hotMiddlewareScript],
    output: {
        // path: './public',
        path: path.resolve('./public'),
        filename: 'bundle.js',
        publicPath:publicPath
    },
    module: {
        // 通过html-loader插件可以把html文件加载到js代码中
        // 加载之后以字符串的方式展示
        loaders: [{
            test: /\.html$/,
            loader: "html"
        }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}

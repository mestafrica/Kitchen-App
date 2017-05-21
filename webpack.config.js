var path = require('path');

module.exports = {
    entry: './src/App.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 8888,
        contentBase: "./public"
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /node_modules/
            },
            {
              loader: 'file-loader',
              test: /\.(png|jpg|gif|jpeg)$/,
              options: {
                name: '[name].[ext]?[hash]'
              }
            },
            {
                loader: 'style-loader!css-loader',
                test: /\.css$/
            },
            {
              test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file-loader'
            },
            {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    devtool: "cheap-module-eval-source-map"
};

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
            }
        ]
    }
};
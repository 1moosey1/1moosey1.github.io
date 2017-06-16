var path = require('path');

module.exports = {

    entry: './src/components/index.jsx',
    output: {

        filename: 'index.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            }
        ]
    }
};

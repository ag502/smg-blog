const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = function (env, args) {
    return {
        mode: env.production ? 'production' : 'development',
        entry: './src/index.jsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            filename: 'index.js',
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        devServer: env.production
            ? {}
            : {
                  static: {
                      directory: path.join(__dirname, 'dist'),
                  },
                  port: 3000,
                  historyApiFallback: true,
              },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env', '@babel/preset-react'],
                                plugins: [
                                    'babel-plugin-styled-components',
                                    '@babel/plugin-transform-runtime',
                                ],
                            },
                        },
                    ],
                },
                {
                    test: /.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    };
};

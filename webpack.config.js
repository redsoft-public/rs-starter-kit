const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const path = require('path');

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const webpack = require('webpack');
const yargs = require('yargs');

const { argv } = yargs.boolean('disable-compression-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const SvgStorePlugin = require('external-svg-sprite-loader');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const config = require('./config.js');
const pugData = require('./src/templates/pugData.js');

module.exports = (env) => {
    const type = env.NODE_ENV;
    const isProd = config[type].mode === 'production';

    const { outputPath } = config[type];

    const consoleStats = {
        all: false,
        modules: true,
        maxModules: 0,
        errors: true,
        warnings: true,
        moduleTrace: true,
        errorDetails: true,
    };
    return {
        mode: config[type],
        devtool: config[type].devtool,
        context: path.resolve(__dirname, './src'),
        cache: true,
        entry: {
            app: './app.js',
        },
        output: {
            path: path.resolve(__dirname, outputPath),
            publicPath: config[type].outputPublicPath,
            filename: `${config[type].jsPath}/bundle.[name].js`,
            chunkFilename: `${config[type].jsPath}/[name].js`,
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@styles': path.resolve(__dirname, './src/assets/styles/'),
                '@scripts': path.resolve(__dirname, './src/assets/scripts/'),
                '@templates': path.resolve(__dirname, './src/templates/'),
                '@assets': path.resolve(__dirname, './src/assets/'),
                '@blocks': path.resolve(__dirname, './src/templates/blocks'),
            },
        },
        externals: {
            jquery: 'jQuery',
        },
        devServer: {
            contentBase: path.resolve(__dirname, './src'),
            overlay: true,
            compress: true,
            port: 9090,
            stats: consoleStats,
            open: false,
        },
        stats: consoleStats,
        performance: {
            hints: false,
        },
        module: {
            rules: (function (argv) {
                const rules = [{
                    test: /\.(js|jsx)$/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    }],
                },
                {
                    test: /\.s?css$/,
                    use: [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader?sourceMap',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [autoprefixer],
                                sourceMap: config[type].scssSourseMap,
                            },
                        },
                        'sass-loader?sourceMap',
                        'import-glob-loader',
                    ],
                },
                {
                    test: /\.svg$/,
                    include: [
                        path.resolve(__dirname, './src/assets/images/svg-icons/'),
                    ],
                    use: [
                        {
                            loader: SvgStorePlugin.loader,
                            options: {
                                name: 'assets/images/svg-sprite/sprite.svg',
                                publicPath: config[type].publicPathInlineCSS,
                                iconName: '[name]',
                            },
                        },
                        {
                            loader: 'svgo-loader',
                            options: {
                                plugins: [
                                    {
                                        removeTitle: true,
                                    },
                                    {
                                        convertColors: {
                                            shorthex: true,
                                        },
                                    },
                                    {
                                        convertPathData: true,
                                    },
                                ],
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|ico|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    include: [
                        path.resolve(__dirname, './src/assets/fonts/'),
                        path.resolve(__dirname, './src/assets/images/'),
                    ],
                    exclude: [
                        path.resolve(__dirname, './src/assets/images/svg-icons/'),
                    ],
                    options: {
                        emitFile: true,
                        limit: 1,
                        publicPath: config[type].publicPathInlineCSS,
                        name: '[path][name].[ext]',
                    },
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    include: [
                        path.resolve(__dirname, './src/assets/fonts/'),
                    ],
                    loader: 'url-loader',
                    options: {
                        limit: 5000,
                        publicPath: config[type].publicPathInlineCSS,
                        name: isProd ? '[path][name].[ext]' : '../[path][name].[ext]',
                    },
                },
                {
                    test: /\.(mp4)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'assets/videos/[name].[hash:7].[ext]',
                    },
                },
                {
                    test: /\.pug$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: `${config[type].htmlFilesPath}[name].html`,
                            },
                        },
                        {
                            loader: 'pug-html-loader',
                            options: {
                                pretty: true,
                                exports: false,
                                data: {
                                    $data: pugData,
                                    bxpath: config[type].bxPugImageInlinePath
                                },
                            },
                        },
                    ],
                },
                ];

                if (config[type].esLint) {
                    rules.push({
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: [{
                            loader: 'eslint-loader',
                        }],
                    });
                }
                return rules;
            }(argv)),
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'bundle.vendors',
                        enforce: true,
                        chunks: 'all',
                    },
                },
            },
        },
        plugins: (function (argv) {
            const plugins = [
                new webpack.HashedModuleIdsPlugin(),
                new SvgStorePlugin({
                    sprite: {
                        startX: 0,
                        startY: 0,
                        deltaX: 10,
                        deltaY: 10,
                        iconHeight: 50,
                    },
                }),
                new CleanWebpackPlugin(),
                new CopyWebpackPlugin([{
                    from: 'assets/images',
                    to: 'assets/images',
                }]),
                new MiniCssExtractPlugin({
                    filename: `${config[type].cssPath}/bundle.[name].css`,
                    chunkFilename: `${config[type].cssPath}/[name].css`,
                }),
                new WebpackBuildNotifierPlugin({
                    title: 'RedSoft',
                    suppressSuccess: 'initial',
                    activateTerminalOnError: true,
                }),
                new FriendlyErrorsWebpackPlugin({
                    compilationSuccessInfo: {
                        messages: [isProd ? `Build complete at folder "${config[type].outputPath.replace(/\./g, '')}"` : 'You server is running here http://localhost:9090'],
                    },
                }),
                new webpack.ProvidePlugin({
                    Swiper: path.resolve(__dirname, './node_modules/swiper/dist/js/swiper'),
                }),
            ];

            if (isProd) {
                plugins.push(
                    new OptimizeCssAssetsPlugin({
                        cssProcessor: cssnano,
                        cssProcessorPluginOptions: {
                            preset: ['default', {
                                discardComments: {
                                    removeAll: true,
                                },
                            }],
                        },
                        canPrint: true,
                    }),
                    new ImageminPlugin({
                        pngquant: {
                            quality: '70',
                        },
                        test: /\.(jpe?g|png|gif)$/i,
                    }),
                );
            }

            if (process.argv.includes('--analyze')) {
                plugins.push(
                    new BundleAnalyzerPlugin(),
                );
            }

            if (config.styleLint) {
                plugins.push(new StyleLintPlugin());
            }

            return plugins;
        }(argv)),
    };
};

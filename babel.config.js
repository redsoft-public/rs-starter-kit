module.exports = {
    plugins: ['@babel/plugin-transform-object-assign', '@babel/plugin-syntax-dynamic-import', 'webpack-async-module-name'],
    presets: [
        [
            '@babel/preset-env',
            {
                loose: true,
                modules: false,
            },
        ],
    ],
};

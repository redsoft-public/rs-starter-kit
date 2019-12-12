module.exports = {
    plugins: ['@babel/plugin-syntax-dynamic-import'],
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

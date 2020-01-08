/**
 * Описание файлов для сборки, каждый ключ объекта targets
 * представляет описание js, scss и pug файлов, которые должны
 * будут собираться в папку - название ключа
 * Пример:
const targets = {
    main: {
        app: './app.js',
        'app.styles': './assets/styles/app.scss',
        'index.template': './templates/pages/index.pug',
    },
};
 * в папку dist/main будут собраны index.html, app.bundle.js и app.styles.bundle.css
 */
const targets = {
    main: {
        app: './app.js',
        'app.styles': './assets/styles/app.scss',
        index: './templates/pages/index.pug',
    },
    help: {
        app: './app.js',
        'app.styles': './assets/styles/app.scss',
        help: './templates/pages/help.pug',
    },
};

const commonConfig = {
    jsPath: 'assets/js', 				// путь для Js относительно outputPath
    cssPath: 'assets/css', 				// путь для CSS  относительно outputPath
    htmlFilesPath: './', 				// относительно outputPath
    publicPathInlineCSS: '../../', 		// publicPath к файлам внутри CSS;
    publicPathProdInCSS: '../../',
    styleLint: true,
    esLint: true,
};

module.exports = {
    targets,
    getConfigData(target) {
        return {
            production: {
                mode: 'production',
                devtool: 'none', // SourceMap

                outputPath: `./dist/${target}/`,
                outputPublicPath: './',

                scssSourceMap: false,
                bxPugImageInlinePath: false,

                ...commonConfig,
            },
            development: {
                mode: 'development',
                devtool: 'inline-source-map', // SourceMap

                outputPath: `./dist/${target}/`,
                outputPublicPath: './',

                scssSourceMap: true,
                bxPugImageInlinePath: false,

                ...commonConfig,
            },
            bx: {
                mode: 'production',
                devtool: 'none', // SourceMap

                outputPath: `../../local/templates/${target}/dist/`,
                outputPublicPath: './',

                scssSourceMap: false,
                bxPugImageInlinePath: `/local/templates/${target}/dist/assets/`, // заменяет переменную staticPath в файле ./src/templates/_mixins/list.pug

                ...commonConfig,
            },
            // Нужно довести до ума и протестить
            bxw: {
                mode: 'production',
                devtool: 'inline-source-map', // SourceMap

                outputPath: `../../local/templates/${target}/dist/`,
                outputPublicPath: './',

                scssSourceMap: false,
                bxPugImageInlinePath: `/local/templates/${target}/dist/assets/`, // заменяет переменную staticPath в файле ./src/templates/_mixins/list.pug

                ...commonConfig,
            },
        };
    },
};

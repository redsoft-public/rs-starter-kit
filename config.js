const projectDir = 'inners'; 			// префикс пути -- local/templates ТОЛЬКО ДЛЯ БИТРИКСА

const targets = {
    inners: {
        app: './app.js',
    },
    app2: {
        app2: './app2.js',
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

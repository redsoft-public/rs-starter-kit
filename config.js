const projectDir = 'inners'; 			// префикс пути -- local/templates ТОЛЬКО ДЛЯ БИТРИКСА

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
    production: {
        mode: 'production',
        devtool: 'none', // SourceMap

        outputPath: './dist/',
        outputPublicPath: './',

        scssSourseMap: false,
        bxPugImageInlinePath: false,

        ...commonConfig,
    },
    development: {
        mode: 'development',
        devtool: 'inline-source-map', // SourceMap

        outputPath: './dist/',
        outputPublicPath: '/',

        scssSourseMap: true,
        bxPugImageInlinePath: false,

        ...commonConfig,
    },
    bx: {
        mode: 'production',
        devtool: 'none', // SourceMap

        outputPath: `../../local/templates/${projectDir}/dist/`,
        outputPublicPath: './',

        scssSourseMap: false,
        bxPugImageInlinePath: `/local/templates/${projectDir}/dist/assets/`, // заменяет переменную staticPath в файле ./src/templates/_mixins/list.pug

        ...commonConfig,
    },
    // Нужно довести до ума и протестить
    bxw: {
        mode: 'production',
        devtool: 'inline-source-map', // SourceMap

        outputPath: `../../local/templates/${projectDir}/dist/`,
        outputPublicPath: './',

        scssSourseMap: false,
        bxPugImageInlinePath: `/local/templates/${projectDir}/dist/assets/`, // заменяет переменную staticPath в файле ./src/templates/_mixins/list.pug

        ...commonConfig,
    },
};

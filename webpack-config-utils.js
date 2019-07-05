
exports.configUtils = {
	outputPathDev: './dist/', // необходим для работы devserver (можно не изменять);
	outputPathProd: './dist/', // путь для компиляции билда на production;
	jsPath: 'assets/js', // путь для Js относительно outputPathProd || outputPathDev;
	cssPath: 'assets/css', // путь для CSS  относительно outputPathProd || outputPathDev;
	htmlFilesPath: './', // относительно outputPathProd || outputPathDev;
	publicPathInlineCSS: '../../', // publicPuth к файлам внутри CSS (по умолчанию, для папки outputPathProd - '../../');
	styleLint: true,
	esLint: true
};
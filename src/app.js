/**
 * Тут импортируем npm-пакеты
 */
import 'core-js/es/array/from';
import 'core-js/es/object/assign';
import 'core-js/modules/web.dom-collections.iterator';
import 'core-js/modules/web.dom-collections.for-each';

import svg4everybody from 'svg4everybody';

/**
 * Импорт модулей приложения
 * Модуль в данном случае большой кусок кода, затрагивающий разные
 * части приложения, но отвечающий за определенную, понятную функциональность
 * Например: инициализация какого-либо плагина, валидация форм, корзина ИМ и т.д.
 */
import '@scripts/modules/bootstrap';
import '@scripts/modules/browser-detect';
import imgToSvg from '@scripts/modules/img-to-svg';
import initCustomInputNumber from '@scripts/modules/custom-input-number';
import initCustomScrollBars from '@scripts/modules/custom-scrollbars';
import initCustomSelect from '@scripts/modules/custom-select';
import initFormValidation from '@scripts/modules/validate';
import initInputMask from '@scripts/modules/input-mask';
import initRangeSlider from '@scripts/modules/range-slider';

/**
 * Импорт кода относящегося к блокам в терминах БЭМ
 * Жестко привязан к конкретной разметке и затрагивает только ее
 */
import carousel from '@blocks/common/carousel/carousel';
import hamburger from '@blocks/common/hamburger/hamburger';
import { inputText } from '@blocks/common/input-text/input-text';


// Пример разбиения файлов на асинхронные чанки
// const chunks = {
//     styles: () => importName('@styles/dynamic/dynamic.scss', 'chunk.dynamic-scss'),
//     script: () => importName('@scripts/dynamic.js', 'chunk.dynamic-js'),
// };


/**
 * Инициализация библиотек и модулей
 * Сюда стоит заносить инициализацию тких частей приложения,
 * которые возможно будут реинициализироваться при ajax-обновлениях
 */
function initLibs() {
    imgToSvg();
    initCustomInputNumber();
    initInputMask();
    initCustomScrollBars();
    initCustomSelect();
    initRangeSlider();

    initFormValidation();
}

/**
 * Инициализирует MutationObserver на body
 * для автоматической инициализации библиотек при обновлении DOM
 * Следует продумать такой вариант на тему безбажности и производительности
 * в чистом виде есть проблемы с залипанием в бесконечный цикл
 * Мотивировано тем что реинициализация плагинов при ajax-обновлении частей страницы занимает
 * большУю часть клиентского кода
 * @see https://developer.mozilla.org/ru/docs/Web/API/MutationObserver
 */
// function initMutationObserver() {
//     const observer = new MutationObserver(() => {
//         initLibs();
//     });
//     const config = {
//         attributes: false,
//         childList: true,
//         subtree: true,
//     };
//
//     observer.observe(document.body, config);
// }

/**
 * Инициализация скриптов приложения
 */
function initApp() {
    svg4everybody();

    initLibs();

    inputText();
    carousel();
    hamburger();
}

document.addEventListener('DOMContentLoaded', initApp);

/**
 * Все что ниже: магия для работы спрайтов и pug, не убирать
 */
const requireAll = (r) => {
    r.keys().forEach(r);
};

requireAll(require.context('./assets/images/svg-icons/', true, /\.svg$/));

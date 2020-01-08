/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"bundle.vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!**************************************************************************************!*\
  !*** multi ../node_modules/webpack-dev-server/client?http://localhost:9090 ./app.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\gruzd\dev\projects\redsoft-starter-kit\node_modules\webpack-dev-server\client\index.js?http://localhost:9090 */"iPWU");
module.exports = __webpack_require__(/*! ./app.js */"mng9");


/***/ }),

/***/ "Bx5G":
/*!*************************************************************!*\
  !*** ./assets/scripts/modules/validate/validate-methods.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
$.validator.addMethod('phoneValid', function phoneValid(phoneVal, element) {
  return this.optional(element) || phoneVal.replace(/\D+/g, '').length > 10;
}, $.validator.format('Введите полный номер телефона'));
$.validator.addMethod('dateValid', function dateValid(dateVal, element) {
  // eslint-disable-next-line no-useless-escape
  var dateRegex = /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
  return this.optional(element) || dateRegex.test(dateVal);
}, $.validator.format('Укажите дату в формате DD.MM.YYYY'));
$.validator.addMethod('emailValid', function emailValid(emailVal, element) {
  // eslint-disable-next-line no-useless-escape
  var emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return this.optional(element) || emailRegex.test(emailVal);
}, $.validator.format('Введите полный E-mail адресс'));
$.validator.addMethod('valueNotEquals', function valueNotEquals(value, element, arg) {
  return this.optional(element) || arg !== value;
}, 'Выбрано пустое значение');
$.validator.addMethod('vmcardsonly', function vmcardsonly(value, element) {
  var preparedValue = value.replace(/\D/g, '');

  if (preparedValue.charAt(0) === '4' || preparedValue.charAt(0) === '5') {
    return this.optional(element) || preparedValue.length === 16;
  }

  return this.optional(element) || false;
}, 'Введите правильный номер банковской карты.');
var vData = {
  formClasses: {
    name: '.js-validate-form',
    field: '.js-validate-field',
    fieldRadio: '.js-form__radios',
    btn: '.js-btn-submit',
    btnDisabled: ''
  },
  btnSubmitDisabled: function btnSubmitDisabled(element, formClasses) {
    var name = formClasses.name,
        btn = formClasses.btn;
    var form = $(element).parents(name);

    if (element) {
      $(form).validate().element(element);
    }

    if (this.checkForm()) {
      $(form).find(btn).prop('disabled', true);
    } else {
      $(form).find(btn).prop('disabled', false);
    }
  },
  validResultClasses: function validResultClasses(element, type, formClasses) {
    var radio = $(element).attr('type') === 'radio';
    var parent = radio ? formClasses.fieldRadio : formClasses.field;

    if (!$(element).is('[required]')) {
      return;
    }

    if (type === 'highlight') {
      $(element).parents(parent).removeClass('success').addClass('error');
    } else {
      $(element).parents(parent).removeClass('error').addClass('success');
    }
  },
  checkFormOnInit: function checkFormOnInit() {
    var _this = this;

    $(this.formClasses.name).each(function (index, element) {
      var valid = $(element).validate().checkForm();

      if (!valid) {
        $(element).find(_this.formClasses.btn).addClass(_this.formClasses.btnDisabled);
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vData);

/***/ }),

/***/ "Ferj":
/*!************************************************!*\
  !*** ./assets/scripts/modules/range-slider.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initRangeSlider; });
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "QAI0");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);

function initRangeSlider() {
  var haveCustomRangeSliders = document.querySelector('.range-slider');

  if (haveCustomRangeSliders) {
    nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(document.querySelector('.range-slider'), {
      start: [20, 80],
      connect: true,
      behaviour: 'tap',
      step: 10,
      range: {
        min: 0,
        max: 100
      }
    });
  }
}

/***/ }),

/***/ "J/QT":
/*!*****************************************************!*\
  !*** ./assets/scripts/modules/custom-scrollbars.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initCustomScrollBars; });
/* harmony import */ var overlayscrollbars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! overlayscrollbars */ "cmaa");
/* harmony import */ var overlayscrollbars__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(overlayscrollbars__WEBPACK_IMPORTED_MODULE_0__);

function initCustomScrollBars() {
  $('.js-custom-scrollbar').overlayScrollbars({});
}

/***/ }),

/***/ "JEbc":
/*!******************************************************!*\
  !*** ./templates/blocks/common/carousel/carousel.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "Y3Db");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var slidersCategories = [];
  $('.carousel .swiper-container').each(function initCarouselHandler() {
    var t = $(this);
    var params = t.parent().data('swiper');
    var dataParams = {
      effect: 'slide',
      speed: 800,
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: false,
      navigation: {
        nextEl: t.find('.swiper-button-next')[0],
        prevEl: t.find('.swiper-button-prev')[0]
      },
      autoHeight: true
    };

    if (params) {
      dataParams = Object.assign(dataParams, params);
    }

    var categoriesSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](t[0], dataParams);
    slidersCategories.push(categoriesSwiper);
  });
});

/***/ }),

/***/ "JuBU":
/*!*******************************************************!*\
  !*** ./assets/scripts/modules/custom-input-number.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initCustomInputNumber; });
/* harmony import */ var jquery_nice_number_dist_jquery_nice_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery.nice-number/dist/jquery.nice-number */ "RUvT");
/* harmony import */ var jquery_nice_number_dist_jquery_nice_number__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_nice_number_dist_jquery_nice_number__WEBPACK_IMPORTED_MODULE_0__);

function initCustomInputNumber() {
  $('input.js-custom-number[type="number"]').niceNumber();
}

/***/ }),

/***/ "O0Y4":
/*!*********************************************!*\
  !*** ./assets/scripts/modules/bootstrap.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_js_dist_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/alert */ "Qv2f");
/* harmony import */ var bootstrap_js_dist_alert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_alert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_js_dist_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/js/dist/button */ "GSRD");
/* harmony import */ var bootstrap_js_dist_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/js/dist/collapse */ "hSFQ");
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/js/dist/dropdown */ "m1XM");
/* harmony import */ var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_js_dist_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/js/dist/index */ "n/cu");
/* harmony import */ var bootstrap_js_dist_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/js/dist/modal */ "Peo2");
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_js_dist_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/js/dist/popover */ "WH0S");
/* harmony import */ var bootstrap_js_dist_popover__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_popover__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap_js_dist_scrollspy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/js/dist/scrollspy */ "yOB3");
/* harmony import */ var bootstrap_js_dist_scrollspy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_scrollspy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/js/dist/tab */ "Nk23");
/* harmony import */ var bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap_js_dist_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/js/dist/toast */ "9q+R");
/* harmony import */ var bootstrap_js_dist_toast__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_toast__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/js/dist/tooltip */ "/1Gu");
/* harmony import */ var bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap/js/dist/util */ "3XUK");
/* harmony import */ var bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_11__);

 // import 'bootstrap/js/dist/carousel';












/***/ }),

/***/ "VEiJ":
/*!**************************************************!*\
  !*** ./assets/scripts/modules/validate/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initFormValidation; });
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-validation */ "5SM5");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_validation_dist_localization_messages_ru__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-validation/dist/localization/messages_ru */ "+iqe");
/* harmony import */ var jquery_validation_dist_localization_messages_ru__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_validation_dist_localization_messages_ru__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validate_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate-methods */ "Bx5G");



function initFormValidation() {
  var formClasses = _validate_methods__WEBPACK_IMPORTED_MODULE_2__["default"].formClasses,
      btnSubmitDisabled = _validate_methods__WEBPACK_IMPORTED_MODULE_2__["default"].btnSubmitDisabled,
      checkFormOnInit = _validate_methods__WEBPACK_IMPORTED_MODULE_2__["default"].checkFormOnInit;
  $(formClasses.name).validate({
    rules: {
      phoneRU: {
        phoneValid: true
      },
      date: {
        dateValid: true
      },
      email: {
        emailValid: true
      },
      select: {
        valueNotEquals: true
      },
      creditcard: {
        vmcardsonly: true
      }
    },
    onkeyup: function onkeyup(element) {
      btnSubmitDisabled.apply(this, [element, formClasses]);
    },
    onclick: function onclick(element) {
      btnSubmitDisabled.apply(this, [element, formClasses]);
    },
    errorPlacement: function errorPlacement(error, element) {
      var type = $(element).attr('type');
      var errorContainer = $(element).parent().find('.input-text__error');

      switch (type) {
        case 'radio':
          error.appendTo($(element).parents(formClasses.fieldRadio));
          break;

        default:
          errorContainer.html(error);
          break;
      }
    },
    highlight: function highlight(element) {
      var type = $(element).attr('type');

      switch (type) {
        default:
          $(element).parent().addClass('input-text_error');
          break;
      }
    },
    unhighlight: function unhighlight(element) {
      var type = $(element).attr('type');

      switch (type) {
        default:
          $(element).parent().removeClass('input-text_error');
          break;
      }
    },
    submitHandler: function submitHandler() {
      // eslint-disable-next-line no-alert
      alert('Форма успешно отправлена!');
    },
    errorElement: 'span'
  });
  checkFormOnInit.apply(_validate_methods__WEBPACK_IMPORTED_MODULE_2__["default"]);
}

/***/ }),

/***/ "XKCE":
/*!**************************************************!*\
  !*** ./assets/scripts/modules/browser-detect.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((function browserDetect() {
  document.addEventListener('DOMContentLoaded', function () {
    if (navigator.userAgent.indexOf('MSIE ') > -1 || navigator.userAgent.indexOf('Trident/') > -1) {
      $('body').addClass('ie');
    }

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      $('body').addClass('touch');
    }
  });
})());

/***/ }),

/***/ "Y32G":
/*!********************************************************!*\
  !*** ./templates/blocks/common/hamburger/hamburger.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.js-hamburger').click(function hamburgerClickHandler() {
    if ($(this).hasClass('backward')) {
      $(this).removeClass('backward').addClass('forward');
    } else if ($(this).hasClass('forward')) {
      $(this).addClass('backward');
    } else {
      $(this).addClass('forward');
    }
  });
});

/***/ }),

/***/ "a9L+":
/*!**********************************************************!*\
  !*** ./templates/blocks/common/input-text/input-text.js ***!
  \**********************************************************/
/*! exports provided: inputText, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputText", function() { return inputText; });
function inputText() {
  $(document).on('input change focus blur', 'input', function (_ref) {
    var target = _ref.target;
    var input = $(target);

    if (input.val()) {
      input.addClass('js-fill');
      return;
    }

    input.removeClass('js-fill');
  });
}
/* harmony default export */ __webpack_exports__["default"] = (inputText);

/***/ }),

/***/ "dXql":
/*!*********************************************!*\
  !*** ./assets/images/svg-icons sync \.svg$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./logo.svg": "tDlo",
	"./null.svg": "j0VF"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "dXql";

/***/ }),

/***/ "j0VF":
/*!******************************************!*\
  !*** ./assets/images/svg-icons/null.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var publicPath = '../../';
                    var symbolUrl = 'assets/images/svg-sprite/sprite.svg#null';
                    var viewUrl = 'assets/images/svg-sprite/sprite.svg#view-null';

                    
                        var addCacheBust = typeof document !== 'undefined' && document.readyState === 'complete';
    
                        if (addCacheBust) {
                            symbolUrl = 'assets/images/svg-sprite/sprite.svg?null#null';
                            viewUrl = 'assets/images/svg-sprite/sprite.svg?null#view-null';
                        }
                    

                    module.exports = {
                        symbol: publicPath + symbolUrl,
                        view: publicPath + viewUrl,
                        viewBox: '0 0 58 58',
                        title: '',
                        toString: function () {
                            return JSON.stringify(this.view);
                        }
                    };

/***/ }),

/***/ "mng9":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es/array/from */ "MfNX");
/* harmony import */ var core_js_es_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es/object/assign */ "ktk5");
/* harmony import */ var core_js_es_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "U00V");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "3dw1");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! svg4everybody */ "ACn5");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_modules_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @scripts/modules/bootstrap */ "O0Y4");
/* harmony import */ var _scripts_modules_browser_detect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @scripts/modules/browser-detect */ "XKCE");
/* harmony import */ var _scripts_modules_img_to_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @scripts/modules/img-to-svg */ "pfLd");
/* harmony import */ var _scripts_modules_custom_input_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @scripts/modules/custom-input-number */ "JuBU");
/* harmony import */ var _scripts_modules_custom_scrollbars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @scripts/modules/custom-scrollbars */ "J/QT");
/* harmony import */ var _scripts_modules_custom_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @scripts/modules/custom-select */ "vPx1");
/* harmony import */ var _scripts_modules_validate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @scripts/modules/validate */ "VEiJ");
/* harmony import */ var _scripts_modules_input_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @scripts/modules/input-mask */ "wIPv");
/* harmony import */ var _scripts_modules_range_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @scripts/modules/range-slider */ "Ferj");
/* harmony import */ var _blocks_common_input_text_input_text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @blocks/common/input-text/input-text */ "a9L+");
/* harmony import */ var _templates_blocks_common_carousel_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./templates/blocks/common/carousel/carousel */ "JEbc");
/* harmony import */ var _templates_blocks_common_hamburger_hamburger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./templates/blocks/common/hamburger/hamburger */ "Y32G");
/**
 * Тут импортируем npm-пакеты
 */





/**
 * Импорт модулей приложения
 * Модуль в данном случае большой кусок кода, затрагивающий разные
 * части приложения, но отвечающий за определенную, понятную функциональность
 * Например: инициализация какого-либо плагина, валидация форм, корзина ИМ и т.д.
 */










/**
 * Импорт кода относящегося к блокам в терминах БЭМ
 * Жестко привязан к конкретной разметке и затрагивает только ее
 */



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
  Object(_scripts_modules_img_to_svg__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_scripts_modules_custom_input_number__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_scripts_modules_input_mask__WEBPACK_IMPORTED_MODULE_12__["default"])();
  Object(_scripts_modules_custom_scrollbars__WEBPACK_IMPORTED_MODULE_9__["default"])();
  Object(_scripts_modules_custom_select__WEBPACK_IMPORTED_MODULE_10__["default"])();
  Object(_scripts_modules_range_slider__WEBPACK_IMPORTED_MODULE_13__["default"])();
  Object(_scripts_modules_validate__WEBPACK_IMPORTED_MODULE_11__["default"])();
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
  svg4everybody__WEBPACK_IMPORTED_MODULE_4___default()();
  initLibs();
  Object(_blocks_common_input_text_input_text__WEBPACK_IMPORTED_MODULE_14__["inputText"])();
  Object(_templates_blocks_common_carousel_carousel__WEBPACK_IMPORTED_MODULE_15__["default"])();
  Object(_templates_blocks_common_hamburger_hamburger__WEBPACK_IMPORTED_MODULE_16__["default"])();
}

document.addEventListener('DOMContentLoaded', initApp);
/**
 * Все что ниже: магия для работы спрайтов и pug, не убирать
 */

var requireAll = function requireAll(r) {
  r.keys().forEach(r);
};

requireAll(__webpack_require__("dXql"));

/***/ }),

/***/ "pfLd":
/*!**********************************************!*\
  !*** ./assets/scripts/modules/img-to-svg.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return imgToSvg; });
function imgToSvg() {
  $('img.js-svg').each(function (i, e) {
    var $img = $(e);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = $(data).find('svg'); // Add replaced image's ID to the new SVG

      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      } // Add replaced image's classes to the new SVG


      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + " replaced-svg");
      } // Remove any invalid XML tags as per http://validator.w3.org


      $svg = $svg.removeAttr('xmlns:a'); // Check if the viewport is set, if the viewport is not set the SVG wont't scale.

      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr("viewBox 0 0 " + $svg.attr('height') + " " + $svg.attr('width'));
      } // Replace image with new SVG


      $img.replaceWith($svg);
    }, 'xml');
  });
}

/***/ }),

/***/ "tDlo":
/*!******************************************!*\
  !*** ./assets/images/svg-icons/logo.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var publicPath = '../../';
                    var symbolUrl = 'assets/images/svg-sprite/sprite.svg#logo';
                    var viewUrl = 'assets/images/svg-sprite/sprite.svg#view-logo';

                    
                        var addCacheBust = typeof document !== 'undefined' && document.readyState === 'complete';
    
                        if (addCacheBust) {
                            symbolUrl = 'assets/images/svg-sprite/sprite.svg?logo#logo';
                            viewUrl = 'assets/images/svg-sprite/sprite.svg?logo#view-logo';
                        }
                    

                    module.exports = {
                        symbol: publicPath + symbolUrl,
                        view: publicPath + viewUrl,
                        viewBox: '0 0 100 100',
                        title: '',
                        toString: function () {
                            return JSON.stringify(this.view);
                        }
                    };

/***/ }),

/***/ "tMMr":
/*!***************************************************************!*\
  !*** ../node_modules/webpack/hot sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "hvgu"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "tMMr";

/***/ }),

/***/ "vPx1":
/*!*************************************************!*\
  !*** ./assets/scripts/modules/custom-select.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initCustomSelect; });
/* harmony import */ var jquery_nice_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-nice-select */ "3Gmb");
/* harmony import */ var jquery_nice_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_nice_select__WEBPACK_IMPORTED_MODULE_0__);

function initCustomSelect() {
  $('select').niceSelect();
}

/***/ }),

/***/ "wIPv":
/*!**********************************************!*\
  !*** ./assets/scripts/modules/input-mask.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initInputMask; });
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask */ "V1QP");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);

function initInputMask() {
  var masks = {
    tel: '+7 (999) 999-99-99',
    date: '99.99.9999',
    card: ['9{4} 9{4} 9{4} 9{4}', {
      placeholder: '∗'
    }]
  };
  Object.keys(masks).forEach(function (maskName) {
    var maskPlaceholder = masks[maskName];

    if (typeof maskPlaceholder === 'object') {
      inputmask__WEBPACK_IMPORTED_MODULE_0___default.a.apply(void 0, maskPlaceholder).mask("input.js-mask-" + maskName);
    } else {
      inputmask__WEBPACK_IMPORTED_MODULE_0___default()(maskPlaceholder).mask("input.js-mask-" + maskName);
    }
  });
}

/***/ }),

/***/ "xeH2":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy92YWxpZGF0ZS92YWxpZGF0ZS1tZXRob2RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvcmFuZ2Utc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvY3VzdG9tLXNjcm9sbGJhcnMuanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL2Jsb2Nrcy9jb21tb24vY2Fyb3VzZWwvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9jdXN0b20taW5wdXQtbnVtYmVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvdmFsaWRhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9icm93c2VyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvYmxvY2tzL2NvbW1vbi9oYW1idXJnZXIvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9ibG9ja3MvY29tbW9uL2lucHV0LXRleHQvaW5wdXQtdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL3N2Zy1pY29ucyBzeW5jIFxcLnN2ZyQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9zdmctaWNvbnMvbnVsbC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvaW1nLXRvLXN2Zy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL3N2Zy1pY29ucy9sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9sb2ckIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvY3VzdG9tLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2lucHV0LW1hc2suanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiJCIsInZhbGlkYXRvciIsImFkZE1ldGhvZCIsInBob25lVmFsaWQiLCJwaG9uZVZhbCIsImVsZW1lbnQiLCJvcHRpb25hbCIsInJlcGxhY2UiLCJsZW5ndGgiLCJmb3JtYXQiLCJkYXRlVmFsaWQiLCJkYXRlVmFsIiwiZGF0ZVJlZ2V4IiwidGVzdCIsImVtYWlsVmFsaWQiLCJlbWFpbFZhbCIsImVtYWlsUmVnZXgiLCJ2YWx1ZU5vdEVxdWFscyIsInZhbHVlIiwiYXJnIiwidm1jYXJkc29ubHkiLCJwcmVwYXJlZFZhbHVlIiwiY2hhckF0IiwidkRhdGEiLCJmb3JtQ2xhc3NlcyIsIm5hbWUiLCJmaWVsZCIsImZpZWxkUmFkaW8iLCJidG4iLCJidG5EaXNhYmxlZCIsImJ0blN1Ym1pdERpc2FibGVkIiwiZm9ybSIsInBhcmVudHMiLCJ2YWxpZGF0ZSIsImNoZWNrRm9ybSIsImZpbmQiLCJwcm9wIiwidmFsaWRSZXN1bHRDbGFzc2VzIiwidHlwZSIsInJhZGlvIiwiYXR0ciIsInBhcmVudCIsImlzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNoZWNrRm9ybU9uSW5pdCIsImVhY2giLCJpbmRleCIsInZhbGlkIiwiaW5pdFJhbmdlU2xpZGVyIiwiaGF2ZUN1c3RvbVJhbmdlU2xpZGVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5vVWlTbGlkZXIiLCJjcmVhdGUiLCJzdGFydCIsImNvbm5lY3QiLCJiZWhhdmlvdXIiLCJzdGVwIiwicmFuZ2UiLCJtaW4iLCJtYXgiLCJpbml0Q3VzdG9tU2Nyb2xsQmFycyIsIm92ZXJsYXlTY3JvbGxiYXJzIiwic2xpZGVyc0NhdGVnb3JpZXMiLCJpbml0Q2Fyb3VzZWxIYW5kbGVyIiwidCIsInBhcmFtcyIsImRhdGEiLCJkYXRhUGFyYW1zIiwiZWZmZWN0Iiwic3BlZWQiLCJzbGlkZXNQZXJWaWV3Iiwic2xpZGVzUGVyR3JvdXAiLCJsb29wIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImF1dG9IZWlnaHQiLCJPYmplY3QiLCJhc3NpZ24iLCJjYXRlZ29yaWVzU3dpcGVyIiwiU3dpcGVyIiwicHVzaCIsImluaXRDdXN0b21JbnB1dE51bWJlciIsIm5pY2VOdW1iZXIiLCJpbml0Rm9ybVZhbGlkYXRpb24iLCJydWxlcyIsInBob25lUlUiLCJkYXRlIiwiZW1haWwiLCJzZWxlY3QiLCJjcmVkaXRjYXJkIiwib25rZXl1cCIsImFwcGx5Iiwib25jbGljayIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJlcnJvckNvbnRhaW5lciIsImFwcGVuZFRvIiwiaHRtbCIsImhpZ2hsaWdodCIsInVuaGlnaGxpZ2h0Iiwic3VibWl0SGFuZGxlciIsImFsZXJ0IiwiZXJyb3JFbGVtZW50IiwiYnJvd3NlckRldGVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiY2xpY2siLCJoYW1idXJnZXJDbGlja0hhbmRsZXIiLCJoYXNDbGFzcyIsImlucHV0VGV4dCIsIm9uIiwidGFyZ2V0IiwiaW5wdXQiLCJ2YWwiLCJpbml0TGlicyIsImltZ1RvU3ZnIiwiaW5pdElucHV0TWFzayIsImluaXRDdXN0b21TZWxlY3QiLCJpbml0QXBwIiwic3ZnNGV2ZXJ5Ym9keSIsImNhcm91c2VsIiwiaGFtYnVyZ2VyIiwicmVxdWlyZUFsbCIsInIiLCJrZXlzIiwiZm9yRWFjaCIsInJlcXVpcmUiLCJpIiwiZSIsIiRpbWciLCJpbWdJRCIsImltZ0NsYXNzIiwiaW1nVVJMIiwiZ2V0IiwiJHN2ZyIsInJlbW92ZUF0dHIiLCJyZXBsYWNlV2l0aCIsIm5pY2VTZWxlY3QiLCJtYXNrcyIsInRlbCIsImNhcmQiLCJwbGFjZWhvbGRlciIsIm1hc2tOYW1lIiwibWFza1BsYWNlaG9sZGVyIiwiSW5wdXRtYXNrIiwibWFzayJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1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O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNqQixnQkFBVCxHQUE0QjtBQUN2QzFILEdBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWThJLFVBQVo7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU3JCLGFBQVQsR0FBeUI7QUFDcEMsTUFBTXNCLEtBQUssR0FBRztBQUNWQyxPQUFHLEVBQUUsb0JBREs7QUFFVnZELFFBQUksRUFBRSxZQUZJO0FBR1Z3RCxRQUFJLEVBQUUsQ0FBQyxxQkFBRCxFQUF3QjtBQUFFQyxpQkFBVyxFQUFFO0FBQWYsS0FBeEI7QUFISSxHQUFkO0FBTUFuRSxRQUFNLENBQUNrRCxJQUFQLENBQVljLEtBQVosRUFDS2IsT0FETCxDQUNhLFVBQUNpQixRQUFELEVBQWM7QUFDbkIsUUFBTUMsZUFBZSxHQUFHTCxLQUFLLENBQUNJLFFBQUQsQ0FBN0I7O0FBRUEsUUFBSSxPQUFPQyxlQUFQLEtBQTJCLFFBQS9CLEVBQXlDO0FBQ3JDQyxzREFBUyxNQUFULFNBQWFELGVBQWIsRUFDS0UsSUFETCxvQkFDMkJILFFBRDNCO0FBRUgsS0FIRCxNQUdPO0FBQ0hFLHNEQUFTLENBQUNELGVBQUQsQ0FBVCxDQUNLRSxJQURMLG9CQUMyQkgsUUFEM0I7QUFFSDtBQUNKLEdBWEw7QUFZSCxDOzs7Ozs7Ozs7OztBQ3JCRCx3QiIsImZpbGUiOiJhc3NldHMvanMvYnVuZGxlLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcImJ1bmRsZS52ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiJC52YWxpZGF0b3IuYWRkTWV0aG9kKCdwaG9uZVZhbGlkJywgZnVuY3Rpb24gcGhvbmVWYWxpZChwaG9uZVZhbCwgZWxlbWVudCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IHBob25lVmFsLnJlcGxhY2UoL1xcRCsvZywgJycpLmxlbmd0aCA+IDEwO1xufSwgJC52YWxpZGF0b3IuZm9ybWF0KCfQktCy0LXQtNC40YLQtSDQv9C+0LvQvdGL0Lkg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwJykpO1xuXG4kLnZhbGlkYXRvci5hZGRNZXRob2QoJ2RhdGVWYWxpZCcsIGZ1bmN0aW9uIGRhdGVWYWxpZChkYXRlVmFsLCBlbGVtZW50KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICAgY29uc3QgZGF0ZVJlZ2V4ID0gL14oPz1cXGQpKD86KD86MzEoPyEuKD86MD9bMjQ2OV18MTEpKXwoPzozMHwyOSkoPyEuMD8yKXwyOSg/PS4wPzIuKD86KD86KD86MVs2LTldfFsyLTldXFxkKT8oPzowWzQ4XXxbMjQ2OF1bMDQ4XXxbMTM1NzldWzI2XSl8KD86KD86MTZ8WzI0NjhdWzA0OF18WzM1NzldWzI2XSkwMCkpKSg/OlxceDIwfCQpKXwoPzoyWzAtOF18MVxcZHwwP1sxLTldKSkoWy0uXFwvXSkoPzoxWzAxMl18MD9bMS05XSlcXDEoPzoxWzYtOV18WzItOV1cXGQpP1xcZFxcZCg/Oig/PVxceDIwXFxkKVxceDIwfCQpKT8oKCgwP1sxLTldfDFbMDEyXSkoOlswLTVdXFxkKXswLDJ9KFxceDIwW0FQXU0pKXwoWzAxXVxcZHwyWzAtM10pKDpbMC01XVxcZCl7MSwyfSk/JC87XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgZGF0ZVJlZ2V4LnRlc3QoZGF0ZVZhbCk7XG59LCAkLnZhbGlkYXRvci5mb3JtYXQoJ9Cj0LrQsNC20LjRgtC1INC00LDRgtGDINCyINGE0L7RgNC80LDRgtC1IERELk1NLllZWVknKSk7XG5cbiQudmFsaWRhdG9yLmFkZE1ldGhvZCgnZW1haWxWYWxpZCcsIGZ1bmN0aW9uIGVtYWlsVmFsaWQoZW1haWxWYWwsIGVsZW1lbnQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL14oW0EtWmEtejAtOV9cXC1cXC5dKStcXEAoW0EtWmEtejAtOV9cXC1cXC5dKStcXC4oW0EtWmEtel17Miw0fSkkLztcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCBlbWFpbFJlZ2V4LnRlc3QoZW1haWxWYWwpO1xufSwgJC52YWxpZGF0b3IuZm9ybWF0KCfQktCy0LXQtNC40YLQtSDQv9C+0LvQvdGL0LkgRS1tYWlsINCw0LTRgNC10YHRgScpKTtcblxuJC52YWxpZGF0b3IuYWRkTWV0aG9kKCd2YWx1ZU5vdEVxdWFscycsIGZ1bmN0aW9uIHZhbHVlTm90RXF1YWxzKHZhbHVlLCBlbGVtZW50LCBhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCBhcmcgIT09IHZhbHVlO1xufSwgJ9CS0YvQsdGA0LDQvdC+INC/0YPRgdGC0L7QtSDQt9C90LDRh9C10L3QuNC1Jyk7XG5cbiQudmFsaWRhdG9yLmFkZE1ldGhvZCgndm1jYXJkc29ubHknLCBmdW5jdGlvbiB2bWNhcmRzb25seSh2YWx1ZSwgZWxlbWVudCkge1xuICAgIGNvbnN0IHByZXBhcmVkVmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgIGlmIChwcmVwYXJlZFZhbHVlLmNoYXJBdCgwKSA9PT0gJzQnIHx8IHByZXBhcmVkVmFsdWUuY2hhckF0KDApID09PSAnNScpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgcHJlcGFyZWRWYWx1ZS5sZW5ndGggPT09IDE2O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCBmYWxzZTtcbn0sICfQktCy0LXQtNC40YLQtSDQv9GA0LDQstC40LvRjNC90YvQuSDQvdC+0LzQtdGAINCx0LDQvdC60L7QstGB0LrQvtC5INC60LDRgNGC0YsuJyk7XG5cbmNvbnN0IHZEYXRhID0ge1xuICAgIGZvcm1DbGFzc2VzOiB7XG4gICAgICAgIG5hbWU6ICcuanMtdmFsaWRhdGUtZm9ybScsXG4gICAgICAgIGZpZWxkOiAnLmpzLXZhbGlkYXRlLWZpZWxkJyxcbiAgICAgICAgZmllbGRSYWRpbzogJy5qcy1mb3JtX19yYWRpb3MnLFxuICAgICAgICBidG46ICcuanMtYnRuLXN1Ym1pdCcsXG4gICAgICAgIGJ0bkRpc2FibGVkOiAnJyxcbiAgICB9LFxuICAgIGJ0blN1Ym1pdERpc2FibGVkKGVsZW1lbnQsIGZvcm1DbGFzc2VzKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgYnRuIH0gPSBmb3JtQ2xhc3NlcztcbiAgICAgICAgY29uc3QgZm9ybSA9ICQoZWxlbWVudClcbiAgICAgICAgICAgIC5wYXJlbnRzKG5hbWUpO1xuXG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGZvcm0pXG4gICAgICAgICAgICAgICAgLnZhbGlkYXRlKClcbiAgICAgICAgICAgICAgICAuZWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNoZWNrRm9ybSgpKSB7XG4gICAgICAgICAgICAkKGZvcm0pXG4gICAgICAgICAgICAgICAgLmZpbmQoYnRuKVxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChmb3JtKVxuICAgICAgICAgICAgICAgIC5maW5kKGJ0bilcbiAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHZhbGlkUmVzdWx0Q2xhc3NlcyhlbGVtZW50LCB0eXBlLCBmb3JtQ2xhc3Nlcykge1xuICAgICAgICBjb25zdCByYWRpbyA9ICQoZWxlbWVudClcbiAgICAgICAgICAgIC5hdHRyKCd0eXBlJykgPT09ICdyYWRpbyc7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHJhZGlvID8gZm9ybUNsYXNzZXMuZmllbGRSYWRpbyA6IGZvcm1DbGFzc2VzLmZpZWxkO1xuXG4gICAgICAgIGlmICghJChlbGVtZW50KVxuICAgICAgICAgICAgLmlzKCdbcmVxdWlyZWRdJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnaGlnaGxpZ2h0Jykge1xuICAgICAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgICAgICAgIC5wYXJlbnRzKHBhcmVudClcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAgICAgICAucGFyZW50cyhwYXJlbnQpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdlcnJvcicpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzdWNjZXNzJyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrRm9ybU9uSW5pdCgpIHtcbiAgICAgICAgJCh0aGlzLmZvcm1DbGFzc2VzLm5hbWUpXG4gICAgICAgICAgICAuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZCA9ICQoZWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgLnZhbGlkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrRm9ybSgpO1xuICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQodGhpcy5mb3JtQ2xhc3Nlcy5idG4pXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3ModGhpcy5mb3JtQ2xhc3Nlcy5idG5EaXNhYmxlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCB2RGF0YTtcbiIsImltcG9ydCBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0UmFuZ2VTbGlkZXIoKSB7XG4gICAgY29uc3QgaGF2ZUN1c3RvbVJhbmdlU2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZS1zbGlkZXInKTtcblxuICAgIGlmIChoYXZlQ3VzdG9tUmFuZ2VTbGlkZXJzKSB7XG4gICAgICAgIG5vVWlTbGlkZXIuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZS1zbGlkZXInKSwge1xuICAgICAgICAgICAgc3RhcnQ6IFsyMCwgODBdLFxuICAgICAgICAgICAgY29ubmVjdDogdHJ1ZSxcbiAgICAgICAgICAgIGJlaGF2aW91cjogJ3RhcCcsXG4gICAgICAgICAgICBzdGVwOiAxMCxcbiAgICAgICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICdvdmVybGF5c2Nyb2xsYmFycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRDdXN0b21TY3JvbGxCYXJzKCkge1xuICAgICQoJy5qcy1jdXN0b20tc2Nyb2xsYmFyJykub3ZlcmxheVNjcm9sbGJhcnMoe30pO1xufVxuIiwiaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2xpZGVyc0NhdGVnb3JpZXMgPSBbXTtcbiAgICAkKCcuY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXInKVxuICAgICAgICAuZWFjaChmdW5jdGlvbiBpbml0Q2Fyb3VzZWxIYW5kbGVyKCkge1xuICAgICAgICAgICAgY29uc3QgdCA9ICQodGhpcyk7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB0LnBhcmVudCgpXG4gICAgICAgICAgICAgICAgLmRhdGEoJ3N3aXBlcicpO1xuICAgICAgICAgICAgbGV0IGRhdGFQYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0OiAnc2xpZGUnLFxuICAgICAgICAgICAgICAgIHNwZWVkOiA4MDAsXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRFbDogdC5maW5kKCcuc3dpcGVyLWJ1dHRvbi1uZXh0JylbMF0sXG4gICAgICAgICAgICAgICAgICAgIHByZXZFbDogdC5maW5kKCcuc3dpcGVyLWJ1dHRvbi1wcmV2JylbMF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgICAgIGRhdGFQYXJhbXMgPSBPYmplY3QuYXNzaWduKGRhdGFQYXJhbXMsIHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzU3dpcGVyID0gbmV3IFN3aXBlcih0WzBdLCBkYXRhUGFyYW1zKTtcbiAgICAgICAgICAgIHNsaWRlcnNDYXRlZ29yaWVzLnB1c2goY2F0ZWdvcmllc1N3aXBlcik7XG4gICAgICAgIH0pO1xufVxuIiwiaW1wb3J0ICdqcXVlcnkubmljZS1udW1iZXIvZGlzdC9qcXVlcnkubmljZS1udW1iZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0Q3VzdG9tSW5wdXROdW1iZXIoKSB7XG4gICAgJCgnaW5wdXQuanMtY3VzdG9tLW51bWJlclt0eXBlPVwibnVtYmVyXCJdJykubmljZU51bWJlcigpO1xufVxuIiwiaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9hbGVydCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2J1dHRvbic7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2Nhcm91c2VsJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9kcm9wZG93bic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2luZGV4JztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvbW9kYWwnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9wb3BvdmVyJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3Qvc2Nyb2xsc3B5JztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdGFiJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdG9hc3QnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC90b29sdGlwJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdXRpbCc7XG4iLCJpbXBvcnQgJ2pxdWVyeS12YWxpZGF0aW9uJztcbmltcG9ydCAnanF1ZXJ5LXZhbGlkYXRpb24vZGlzdC9sb2NhbGl6YXRpb24vbWVzc2FnZXNfcnUnO1xuXG5pbXBvcnQgdkRhdGEgZnJvbSAnLi92YWxpZGF0ZS1tZXRob2RzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEZvcm1WYWxpZGF0aW9uKCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgZm9ybUNsYXNzZXMsIGJ0blN1Ym1pdERpc2FibGVkLCBjaGVja0Zvcm1PbkluaXQsXG4gICAgfSA9IHZEYXRhO1xuXG4gICAgJChmb3JtQ2xhc3Nlcy5uYW1lKVxuICAgICAgICAudmFsaWRhdGUoe1xuICAgICAgICAgICAgcnVsZXM6IHtcbiAgICAgICAgICAgICAgICBwaG9uZVJVOiB7XG4gICAgICAgICAgICAgICAgICAgIHBob25lVmFsaWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVWYWxpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsVmFsaWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVOb3RFcXVhbHM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjcmVkaXRjYXJkOiB7XG4gICAgICAgICAgICAgICAgICAgIHZtY2FyZHNvbmx5OiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25rZXl1cChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgYnRuU3VibWl0RGlzYWJsZWQuYXBwbHkodGhpcywgW2VsZW1lbnQsIGZvcm1DbGFzc2VzXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25jbGljayhlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgYnRuU3VibWl0RGlzYWJsZWQuYXBwbHkodGhpcywgW2VsZW1lbnQsIGZvcm1DbGFzc2VzXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JQbGFjZW1lbnQoZXJyb3IsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gJChlbGVtZW50KS5hdHRyKCd0eXBlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JDb250YWluZXIgPSAkKGVsZW1lbnQpLnBhcmVudCgpLmZpbmQoJy5pbnB1dC10ZXh0X19lcnJvcicpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgICAgICAgICBlcnJvci5hcHBlbmRUbygkKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucGFyZW50cyhmb3JtQ2xhc3Nlcy5maWVsZFJhZGlvKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ29udGFpbmVyLmh0bWwoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlnaGxpZ2h0KGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gJChlbGVtZW50KS5hdHRyKCd0eXBlJyk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnBhcmVudCgpLmFkZENsYXNzKCdpbnB1dC10ZXh0X2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bmhpZ2hsaWdodChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9ICQoZWxlbWVudCkuYXR0cigndHlwZScpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnaW5wdXQtdGV4dF9lcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0SGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgICAgICAgICAgICAgICBhbGVydCgn0KTQvtGA0LzQsCDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3QsCEnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvckVsZW1lbnQ6ICdzcGFuJyxcbiAgICAgICAgfSk7XG5cbiAgICBjaGVja0Zvcm1PbkluaXQuYXBwbHkodkRhdGEpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGJyb3dzZXJEZXRlY3QoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTVNJRSAnKSA+IC0xIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudC8nKSA+IC0xKSB7XG4gICAgICAgICAgICAkKCdib2R5JylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2llJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAkKCdib2R5JylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3RvdWNoJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0oKSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmpzLWhhbWJ1cmdlcicpXG4gICAgICAgIC5jbGljayhmdW5jdGlvbiBoYW1idXJnZXJDbGlja0hhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKVxuICAgICAgICAgICAgICAgIC5oYXNDbGFzcygnYmFja3dhcmQnKSkge1xuICAgICAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdiYWNrd2FyZCcpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZm9yd2FyZCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgkKHRoaXMpXG4gICAgICAgICAgICAgICAgLmhhc0NsYXNzKCdmb3J3YXJkJykpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYmFja3dhcmQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2ZvcndhcmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaW5wdXRUZXh0KCkge1xuICAgICQoZG9jdW1lbnQpLm9uKCdpbnB1dCBjaGFuZ2UgZm9jdXMgYmx1cicsICdpbnB1dCcsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0YXJnZXQpO1xuXG4gICAgICAgIGlmIChpbnB1dC52YWwoKSkge1xuICAgICAgICAgICAgaW5wdXQuYWRkQ2xhc3MoJ2pzLWZpbGwnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0LnJlbW92ZUNsYXNzKCdqcy1maWxsJyk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlucHV0VGV4dDtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9sb2dvLnN2Z1wiOiBcInREbG9cIixcblx0XCIuL251bGwuc3ZnXCI6IFwiajBWRlwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCJkWHFsXCI7IiwidmFyIHB1YmxpY1BhdGggPSAnLi4vLi4vJztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN5bWJvbFVybCA9ICdhc3NldHMvaW1hZ2VzL3N2Zy1zcHJpdGUvc3ByaXRlLnN2ZyNudWxsJztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZpZXdVcmwgPSAnYXNzZXRzL2ltYWdlcy9zdmctc3ByaXRlL3Nwcml0ZS5zdmcjdmlldy1udWxsJztcblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZGRDYWNoZUJ1c3QgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZSc7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRkQ2FjaGVCdXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sVXJsID0gJ2Fzc2V0cy9pbWFnZXMvc3ZnLXNwcml0ZS9zcHJpdGUuc3ZnP251bGwjbnVsbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld1VybCA9ICdhc3NldHMvaW1hZ2VzL3N2Zy1zcHJpdGUvc3ByaXRlLnN2Zz9udWxsI3ZpZXctbnVsbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiBwdWJsaWNQYXRoICsgc3ltYm9sVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlldzogcHVibGljUGF0aCArIHZpZXdVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiAnMCAwIDU4IDU4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMudmlldyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07IiwiLyoqXG4gKiDQotGD0YIg0LjQvNC/0L7RgNGC0LjRgNGD0LXQvCBucG0t0L/QsNC60LXRgtGLXG4gKi9cbmltcG9ydCAnY29yZS1qcy9lcy9hcnJheS9mcm9tJztcbmltcG9ydCAnY29yZS1qcy9lcy9vYmplY3QvYXNzaWduJztcbmltcG9ydCAnY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3InO1xuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaCc7XG5cbmltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xuXG4vKipcbiAqINCY0LzQv9C+0YDRgiDQvNC+0LTRg9C70LXQuSDQv9GA0LjQu9C+0LbQtdC90LjRj1xuICog0JzQvtC00YPQu9GMINCyINC00LDQvdC90L7QvCDRgdC70YPRh9Cw0LUg0LHQvtC70YzRiNC+0Lkg0LrRg9GB0L7QuiDQutC+0LTQsCwg0LfQsNGC0YDQsNCz0LjQstCw0Y7RidC40Lkg0YDQsNC30L3Ri9C1XG4gKiDRh9Cw0YHRgtC4INC/0YDQuNC70L7QttC10L3QuNGPLCDQvdC+INC+0YLQstC10YfQsNGO0YnQuNC5INC30LAg0L7Qv9GA0LXQtNC10LvQtdC90L3Rg9GOLCDQv9C+0L3Rj9GC0L3Rg9GOINGE0YPQvdC60YbQuNC+0L3QsNC70YzQvdC+0YHRgtGMXG4gKiDQndCw0L/RgNC40LzQtdGAOiDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQutCw0LrQvtCz0L4t0LvQuNCx0L4g0L/Qu9Cw0LPQuNC90LAsINCy0LDQu9C40LTQsNGG0LjRjyDRhNC+0YDQvCwg0LrQvtGA0LfQuNC90LAg0JjQnCDQuCDRgi7QtC5cbiAqL1xuaW1wb3J0ICdAc2NyaXB0cy9tb2R1bGVzL2Jvb3RzdHJhcCc7XG5pbXBvcnQgJ0BzY3JpcHRzL21vZHVsZXMvYnJvd3Nlci1kZXRlY3QnO1xuaW1wb3J0IGltZ1RvU3ZnIGZyb20gJ0BzY3JpcHRzL21vZHVsZXMvaW1nLXRvLXN2Zyc7XG5pbXBvcnQgaW5pdEN1c3RvbUlucHV0TnVtYmVyIGZyb20gJ0BzY3JpcHRzL21vZHVsZXMvY3VzdG9tLWlucHV0LW51bWJlcic7XG5pbXBvcnQgaW5pdEN1c3RvbVNjcm9sbEJhcnMgZnJvbSAnQHNjcmlwdHMvbW9kdWxlcy9jdXN0b20tc2Nyb2xsYmFycyc7XG5pbXBvcnQgaW5pdEN1c3RvbVNlbGVjdCBmcm9tICdAc2NyaXB0cy9tb2R1bGVzL2N1c3RvbS1zZWxlY3QnO1xuaW1wb3J0IGluaXRGb3JtVmFsaWRhdGlvbiBmcm9tICdAc2NyaXB0cy9tb2R1bGVzL3ZhbGlkYXRlJztcbmltcG9ydCBpbml0SW5wdXRNYXNrIGZyb20gJ0BzY3JpcHRzL21vZHVsZXMvaW5wdXQtbWFzayc7XG5pbXBvcnQgaW5pdFJhbmdlU2xpZGVyIGZyb20gJ0BzY3JpcHRzL21vZHVsZXMvcmFuZ2Utc2xpZGVyJztcblxuLyoqXG4gKiDQmNC80L/QvtGA0YIg0LrQvtC00LAg0L7RgtC90L7RgdGP0YnQtdCz0L7RgdGPINC6INCx0LvQvtC60LDQvCDQsiDRgtC10YDQvNC40L3QsNGFINCR0K3QnFxuICog0JbQtdGB0YLQutC+INC/0YDQuNCy0Y/Qt9Cw0L0g0Log0LrQvtC90LrRgNC10YLQvdC+0Lkg0YDQsNC30LzQtdGC0LrQtSDQuCDQt9Cw0YLRgNCw0LPQuNCy0LDQtdGCINGC0L7Qu9GM0LrQviDQtdC1XG4gKi9cbmltcG9ydCB7IGlucHV0VGV4dCB9IGZyb20gJ0BibG9ja3MvY29tbW9uL2lucHV0LXRleHQvaW5wdXQtdGV4dCc7XG5pbXBvcnQgY2Fyb3VzZWwgZnJvbSAnLi90ZW1wbGF0ZXMvYmxvY2tzL2NvbW1vbi9jYXJvdXNlbC9jYXJvdXNlbCc7XG5pbXBvcnQgaGFtYnVyZ2VyIGZyb20gJy4vdGVtcGxhdGVzL2Jsb2Nrcy9jb21tb24vaGFtYnVyZ2VyL2hhbWJ1cmdlcic7XG5cblxuLy8g0J/RgNC40LzQtdGAINGA0LDQt9Cx0LjQtdC90LjRjyDRhNCw0LnQu9C+0LIg0L3QsCDQsNGB0LjQvdGF0YDQvtC90L3Ri9C1INGH0LDQvdC60Lhcbi8vIGNvbnN0IGNodW5rcyA9IHtcbi8vICAgICBzdHlsZXM6ICgpID0+IGltcG9ydE5hbWUoJ0BzdHlsZXMvZHluYW1pYy9keW5hbWljLnNjc3MnLCAnY2h1bmsuZHluYW1pYy1zY3NzJyksXG4vLyAgICAgc2NyaXB0OiAoKSA9PiBpbXBvcnROYW1lKCdAc2NyaXB0cy9keW5hbWljLmpzJywgJ2NodW5rLmR5bmFtaWMtanMnKSxcbi8vIH07XG5cblxuLyoqXG4gKiDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQsdC40LHQu9C40L7RgtC10Log0Lgg0LzQvtC00YPQu9C10LlcbiAqINCh0Y7QtNCwINGB0YLQvtC40YIg0LfQsNC90L7RgdC40YLRjCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjiDRgtC60LjRhSDRh9Cw0YHRgtC10Lkg0L/RgNC40LvQvtC20LXQvdC40Y8sXG4gKiDQutC+0YLQvtGA0YvQtSDQstC+0LfQvNC+0LbQvdC+INCx0YPQtNGD0YIg0YDQtdC40L3QuNGG0LjQsNC70LjQt9C40YDQvtCy0LDRgtGM0YHRjyDQv9GA0LggYWpheC3QvtCx0L3QvtCy0LvQtdC90LjRj9GFXG4gKi9cbmZ1bmN0aW9uIGluaXRMaWJzKCkge1xuICAgIGltZ1RvU3ZnKCk7XG4gICAgaW5pdEN1c3RvbUlucHV0TnVtYmVyKCk7XG4gICAgaW5pdElucHV0TWFzaygpO1xuICAgIGluaXRDdXN0b21TY3JvbGxCYXJzKCk7XG4gICAgaW5pdEN1c3RvbVNlbGVjdCgpO1xuICAgIGluaXRSYW5nZVNsaWRlcigpO1xuXG4gICAgaW5pdEZvcm1WYWxpZGF0aW9uKCk7XG59XG5cbi8qKlxuICog0JjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXRgiBNdXRhdGlvbk9ic2VydmVyINC90LAgYm9keVxuICog0LTQu9GPINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC+0Lkg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Lgg0LHQuNCx0LvQuNC+0YLQtdC6INC/0YDQuCDQvtCx0L3QvtCy0LvQtdC90LjQuCBET01cbiAqINCh0LvQtdC00YPQtdGCINC/0YDQvtC00YPQvNCw0YLRjCDRgtCw0LrQvtC5INCy0LDRgNC40LDQvdGCINC90LAg0YLQtdC80YMg0LHQtdC30LHQsNC20L3QvtGB0YLQuCDQuCDQv9GA0L7QuNC30LLQvtC00LjRgtC10LvRjNC90L7RgdGC0LhcbiAqINCyINGH0LjRgdGC0L7QvCDQstC40LTQtSDQtdGB0YLRjCDQv9GA0L7QsdC70LXQvNGLINGBINC30LDQu9C40L/QsNC90LjQtdC8INCyINCx0LXRgdC60L7QvdC10YfQvdGL0Lkg0YbQuNC60LtcbiAqINCc0L7RgtC40LLQuNGA0L7QstCw0L3QviDRgtC10Lwg0YfRgtC+INGA0LXQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQv9C70LDQs9C40L3QvtCyINC/0YDQuCBhamF4LdC+0LHQvdC+0LLQu9C10L3QuNC4INGH0LDRgdGC0LXQuSDRgdGC0YDQsNC90LjRhtGLINC30LDQvdC40LzQsNC10YJcbiAqINCx0L7Qu9GM0YjQo9GOINGH0LDRgdGC0Ywg0LrQu9C40LXQvdGC0YHQutC+0LPQviDQutC+0LTQsFxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9ydS9kb2NzL1dlYi9BUEkvTXV0YXRpb25PYnNlcnZlclxuICovXG4vLyBmdW5jdGlvbiBpbml0TXV0YXRpb25PYnNlcnZlcigpIHtcbi8vICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbi8vICAgICAgICAgaW5pdExpYnMoKTtcbi8vICAgICB9KTtcbi8vICAgICBjb25zdCBjb25maWcgPSB7XG4vLyAgICAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlLFxuLy8gICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4vLyAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4vLyAgICAgfTtcbi8vXG4vLyAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCBjb25maWcpO1xuLy8gfVxuXG4vKipcbiAqINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0LrRgNC40L/RgtC+0LIg0L/RgNC40LvQvtC20LXQvdC40Y9cbiAqL1xuZnVuY3Rpb24gaW5pdEFwcCgpIHtcbiAgICBzdmc0ZXZlcnlib2R5KCk7XG5cbiAgICBpbml0TGlicygpO1xuXG4gICAgaW5wdXRUZXh0KCk7XG4gICAgY2Fyb3VzZWwoKTtcbiAgICBoYW1idXJnZXIoKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRBcHApO1xuXG4vKipcbiAqINCS0YHQtSDRh9GC0L4g0L3QuNC20LU6INC80LDQs9C40Y8g0LTQu9GPINGA0LDQsdC+0YLRiyDRgdC/0YDQsNC50YLQvtCyINC4IHB1Zywg0L3QtSDRg9Cx0LjRgNCw0YLRjFxuICovXG5jb25zdCByZXF1aXJlQWxsID0gKHIpID0+IHtcbiAgICByLmtleXMoKS5mb3JFYWNoKHIpO1xufTtcblxucmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzL2ltYWdlcy9zdmctaWNvbnMvJywgdHJ1ZSwgL1xcLnN2ZyQvKSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbWdUb1N2ZygpIHtcbiAgICAkKCdpbWcuanMtc3ZnJylcbiAgICAgICAgLmVhY2goKGksIGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbWcgPSAkKGUpO1xuXG4gICAgICAgICAgICBjb25zdCBpbWdJRCA9ICRpbWcuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgY29uc3QgaW1nQ2xhc3MgPSAkaW1nLmF0dHIoJ2NsYXNzJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGltZ1VSTCA9ICRpbWcuYXR0cignc3JjJyk7XG5cbiAgICAgICAgICAgICQuZ2V0KGltZ1VSTCwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIFNWRyB0YWcsIGlnbm9yZSB0aGUgcmVzdFxuICAgICAgICAgICAgICAgIGxldCAkc3ZnID0gJChkYXRhKVxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnc3ZnJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgcmVwbGFjZWQgaW1hZ2UncyBJRCB0byB0aGUgbmV3IFNWR1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaW1nSUQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICRzdmcgPSAkc3ZnLmF0dHIoJ2lkJywgaW1nSUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgcmVwbGFjZWQgaW1hZ2UncyBjbGFzc2VzIHRvIHRoZSBuZXcgU1ZHXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpbWdDbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgJHN2ZyA9ICRzdmcuYXR0cignY2xhc3MnLCBgJHtpbWdDbGFzc30gcmVwbGFjZWQtc3ZnYCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFueSBpbnZhbGlkIFhNTCB0YWdzIGFzIHBlciBodHRwOi8vdmFsaWRhdG9yLnczLm9yZ1xuICAgICAgICAgICAgICAgICRzdmcgPSAkc3ZnLnJlbW92ZUF0dHIoJ3htbG5zOmEnKTtcblxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSB2aWV3cG9ydCBpcyBzZXQsIGlmIHRoZSB2aWV3cG9ydCBpcyBub3Qgc2V0IHRoZSBTVkcgd29udCd0IHNjYWxlLlxuICAgICAgICAgICAgICAgIGlmICghJHN2Zy5hdHRyKCd2aWV3Qm94JykgJiYgJHN2Zy5hdHRyKCdoZWlnaHQnKSAmJiAkc3ZnLmF0dHIoJ3dpZHRoJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJHN2Zy5hdHRyKGB2aWV3Qm94IDAgMCAkeyRzdmcuYXR0cignaGVpZ2h0Jyl9ICR7JHN2Zy5hdHRyKCd3aWR0aCcpfWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgaW1hZ2Ugd2l0aCBuZXcgU1ZHXG4gICAgICAgICAgICAgICAgJGltZy5yZXBsYWNlV2l0aCgkc3ZnKTtcbiAgICAgICAgICAgIH0sICd4bWwnKTtcbiAgICAgICAgfSk7XG59XG4iLCJ2YXIgcHVibGljUGF0aCA9ICcuLi8uLi8nO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3ltYm9sVXJsID0gJ2Fzc2V0cy9pbWFnZXMvc3ZnLXNwcml0ZS9zcHJpdGUuc3ZnI2xvZ28nO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmlld1VybCA9ICdhc3NldHMvaW1hZ2VzL3N2Zy1zcHJpdGUvc3ByaXRlLnN2ZyN2aWV3LWxvZ28nO1xuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFkZENhY2hlQnVzdCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGRDYWNoZUJ1c3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xVcmwgPSAnYXNzZXRzL2ltYWdlcy9zdmctc3ByaXRlL3Nwcml0ZS5zdmc/bG9nbyNsb2dvJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3VXJsID0gJ2Fzc2V0cy9pbWFnZXMvc3ZnLXNwcml0ZS9zcHJpdGUuc3ZnP2xvZ28jdmlldy1sb2dvJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IHB1YmxpY1BhdGggKyBzeW1ib2xVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3OiBwdWJsaWNQYXRoICsgdmlld1VybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6ICcwIDAgMTAwIDEwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnZpZXcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9OyIsInZhciBtYXAgPSB7XG5cdFwiLi9sb2dcIjogXCJodmd1XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcInRNTXJcIjsiLCJpbXBvcnQgJ2pxdWVyeS1uaWNlLXNlbGVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRDdXN0b21TZWxlY3QoKSB7XG4gICAgJCgnc2VsZWN0JykubmljZVNlbGVjdCgpO1xufVxuIiwiaW1wb3J0IElucHV0bWFzayBmcm9tICdpbnB1dG1hc2snO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0SW5wdXRNYXNrKCkge1xuICAgIGNvbnN0IG1hc2tzID0ge1xuICAgICAgICB0ZWw6ICcrNyAoOTk5KSA5OTktOTktOTknLFxuICAgICAgICBkYXRlOiAnOTkuOTkuOTk5OScsXG4gICAgICAgIGNhcmQ6IFsnOXs0fSA5ezR9IDl7NH0gOXs0fScsIHsgcGxhY2Vob2xkZXI6ICfiiJcnIH1dLFxuICAgIH07XG5cbiAgICBPYmplY3Qua2V5cyhtYXNrcylcbiAgICAgICAgLmZvckVhY2goKG1hc2tOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXNrUGxhY2Vob2xkZXIgPSBtYXNrc1ttYXNrTmFtZV07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWFza1BsYWNlaG9sZGVyID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIElucHV0bWFzayguLi5tYXNrUGxhY2Vob2xkZXIpXG4gICAgICAgICAgICAgICAgICAgIC5tYXNrKGBpbnB1dC5qcy1tYXNrLSR7bWFza05hbWV9YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIElucHV0bWFzayhtYXNrUGxhY2Vob2xkZXIpXG4gICAgICAgICAgICAgICAgICAgIC5tYXNrKGBpbnB1dC5qcy1tYXNrLSR7bWFza05hbWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==
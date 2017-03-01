/*! Created by Reddy Huang. */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Moudi on 2017/2/25.
 */

//载入css
__webpack_require__(0);

var Pieces = function () {
    function Pieces(id) {
        _classCallCheck(this, Pieces);

        this.e = document.getElementById(id);
        this.nameArr = ['crow', 'vaquita', 'kakapo', 'ostrich', 'parrotfish', 'penguin', 'iguana', 'peccary', 'drill', 'oryx', 'owl', 'tapir', 'frog', 'seahorse', 'camel', 'butterfly', 'sloth', 'armadillo', 'damselfly', 'loris', 'echidna', 'bear', 'lynx', 'hirola', 'okapi', 'sifaka', 'panda', 'rhino', 'tamarin', 'turtle'];
        this.n = 0;
    }

    _createClass(Pieces, [{
        key: 'init',
        value: function init() {
            var eleHTML = '\n            <div class="wrapper">\n                <div class="pieces"></div>\n            </div>\n        ';
            var eleHTMLExtra = '\n            <div class="wrapper extra">\n                <div class="pieces"></div>\n            </div>\n        ';
            var eleHTMLShadow = '<div class="shadow"></div>';
            var ehtml = '';
            for (var i = 0; i < 30; i++) {
                ehtml += eleHTML;
            }
            for (var _i = 0; _i < 3; _i++) {
                ehtml += eleHTMLExtra;
            }
            ehtml += eleHTMLShadow;
            this.e.innerHTML = ehtml;
            document.body.className = this.nameArr[this.n];
            this._resize();
            this._initEvent();
        }
    }, {
        key: '_initEvent',
        value: function _initEvent() {
            var _this = this;

            document.addEventListener('click', function () {
                _this.n++;
                _this.n >= _this.nameArr.length && (_this.n = 0);
                document.body.className = _this.nameArr[_this.n];
            });
            window.onresize = function () {
                _this._resize();
            };
        }
    }, {
        key: '_resize',
        value: function _resize() {
            var w = window.innerWidth * .9;
            var h = w * (2 / 3);
            this.e.style.width = w + 'px';
            this.e.style.height = h + 'px';
        }
    }]);

    return Pieces;
}();

window.onload = function () {
    var ss = new Pieces('show-stage');
    ss.init();
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map
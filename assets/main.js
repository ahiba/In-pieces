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
    this.init();
  }

  _createClass(Pieces, [{
    key: 'init',
    value: function init() {
      var _this = this;

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
      this._resize();
      this._initEvent();
      window.onload = function () {
        _this._preloaderSeq();
        // this._dev();
      };
    }
  }, {
    key: '_dev',
    value: function _dev() {
      document.body.classList.remove('preloader');
      document.body.classList.add('title');
      setTimeout(function () {
        document.body.classList.add('show-title');
      }, 2000);
    }
  }, {
    key: '_initEvent',
    value: function _initEvent() {
      var _this2 = this;

      document.addEventListener('click', function () {
        document.body.classList.remove('animation-lock');
        _this2.n++;
        _this2.n >= _this2.nameArr.length && (_this2.n = 0);
        document.body.classList.remove(_this2.nameArr[_this2.n - 1]);
        document.body.classList.add(_this2.nameArr[_this2.n]);
        setTimeout(function () {
          document.body.classList.add('animation-lock');
        }, 2000);
      });
      window.onresize = this._resize.bind(this);
      this._setStateX();
      this._setState_X();
      this._setShimmer();
    }
  }, {
    key: '_resize',
    value: function _resize() {
      var w = window.innerWidth * .9;
      var h = w * (2 / 3);
      this.e.style.width = w + 'px';
      this.e.style.height = h + 'px';
    }

    //TODO: preloader sequence

  }, {
    key: '_preloaderSeq',
    value: function _preloaderSeq() {
      var _this3 = this;

      var b = document.body;
      setTimeout(function () {
        b.classList.add('ready');
        b.classList.remove('preloader');
        _this3._introSeq();
        setTimeout(function () {
          b.classList.add('preAni');
          setTimeout(function () {
            b.classList.remove('preAni');
            setTimeout(function () {
              b.classList.remove('ready');
              b.classList.add('title');
              setTimeout(function () {
                b.classList.add('show-title');
              }, 2000);
            }, 2300);
          }, 10000);
        }, 4500);
      }, 3000);
    }
  }, {
    key: '_introSeq',
    value: function _introSeq() {
      var intro = document.getElementsByClassName('loading-intro')[0];
      var ps = intro.getElementsByTagName('p');
      ps[0].classList.add('show');
      setTimeout(function () {
        ps[0].classList.remove('show');
        ps[1].classList.add('show');
        setTimeout(function () {
          ps[1].classList.remove('show');
          ps[2].classList.add('show');
          setTimeout(function () {
            ps[2].classList.remove('show');
            ps[3].classList.add('show');
            setTimeout(function () {
              ps[3].classList.remove('show');
            }, 4000);
          }, 4000);
        }, 4000);
      }, 4000);
    }
  }, {
    key: '_setStateX',
    value: function _setStateX() {
      var b = document.body;
      setInterval(function () {
        b.classList.remove("state3");
        setTimeout(function () {
          b.classList.add("state1");
        }, 1000);
        setTimeout(function () {
          b.classList.remove("state1");
          b.classList.add("state2");
        }, 2500);
        setTimeout(function () {
          b.classList.remove("state2");
          b.classList.add("state3");
        }, 3500);
      }, 5000);
    }
  }, {
    key: '_setState_X',
    value: function _setState_X() {
      setInterval(function () {
        var b = document.body;
        setTimeout(function () {
          b.classList.add("state-1");
        }, 1000);
        setTimeout(function () {
          b.classList.remove("state-1");
        }, 1500);
        setTimeout(function () {
          b.classList.add("state-1");
        }, 1900);
        setTimeout(function () {
          b.classList.remove("state-1");
        }, 2500);
      }, 3000);
    }
  }, {
    key: '_setShimmer',
    value: function _setShimmer() {
      var b = document.body;
      setInterval(function () {
        setTimeout(function () {
          b.classList.add("shimmer");
        }, 2000);
        setTimeout(function () {
          b.classList.remove("shimmer");
        }, 6000);
      }, 7000);
    }
  }]);

  return Pieces;
}();

document.addEventListener('DOMContentLoaded', function () {
  var ss = new Pieces('show-stage');
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map
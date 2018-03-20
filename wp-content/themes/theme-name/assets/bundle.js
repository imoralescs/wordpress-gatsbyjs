/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/js/index.js":
/*!******************************!*\
  !*** ./frontend/js/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _example = __webpack_require__(/*! ./modules/example.js */ \"./frontend/js/modules/example.js\");\n\n__webpack_require__(/*! ../scss/main.scss */ \"./frontend/scss/main.scss\");\n\n// Modules\nvar objects = {\n    name: \"Sed Accumsan\",\n    description: \"Pellentesque eget nulla a mi commodo vestibulum.\"\n};\n\n// CSS\n\n\nvar example = new _example.Example(objects);\nconsole.log(example.getName());\n\nvar arr = [1, 2, 3];\nvar iAmJavascriptES6 = function iAmJavascriptES6() {\n    var _console;\n\n    return (_console = console).log.apply(_console, arr);\n};\nwindow.iAmJavascriptES6 = iAmJavascriptES6;\n\n//# sourceURL=webpack:///./frontend/js/index.js?");

/***/ }),

/***/ "./frontend/js/modules/example.js":
/*!****************************************!*\
  !*** ./frontend/js/modules/example.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Example = exports.Example = function () {\n    function Example(parameters) {\n        _classCallCheck(this, Example);\n\n        this.name = parameters.name;\n        this.description = parameters.description;\n    }\n\n    _createClass(Example, [{\n        key: \"getName\",\n        value: function getName() {\n            return this.name;\n        }\n    }]);\n\n    return Example;\n}();\n\n//# sourceURL=webpack:///./frontend/js/modules/example.js?");

/***/ }),

/***/ "./frontend/scss/main.scss":
/*!*********************************!*\
  !*** ./frontend/scss/main.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./frontend/scss/main.scss?");

/***/ })

/******/ });
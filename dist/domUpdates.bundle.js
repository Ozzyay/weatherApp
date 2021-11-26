/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weatherConversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherConversion */ \"./src/weatherConversion.js\");\n\n\nvar domUpdates = function () {\n  var refreshPage = function refreshPage(weatherObject, limiter) {\n    var descDiv = document.querySelector('.readout');\n    var locDiv = document.querySelector('.loc');\n    var tempDiv = document.querySelector('.bigTemp');\n    var feelsDiv = document.querySelector('.feelsLike');\n    var pressureDiv = document.querySelector('.wind');\n    var humiDiv = document.querySelector('.humidity');\n    var bigUnit = document.querySelector('.smallDeg');\n\n    if (limiter === 'c') {\n      tempDiv.innerHTML = Math.ceil((0,_weatherConversion__WEBPACK_IMPORTED_MODULE_0__.ktoc)(weatherObject.temp));\n      bigUnit.innerHTML = '°C';\n      var feelsNum = Math.ceil((0,_weatherConversion__WEBPACK_IMPORTED_MODULE_0__.ktoc)(weatherObject.feelsLike));\n      feelsDiv.innerText = \"Feels Like: \".concat(feelsNum, \"\\xB0C\");\n    } else {\n      tempDiv.innerHTML = Math.ceil((0,_weatherConversion__WEBPACK_IMPORTED_MODULE_0__.ktof)(weatherObject.temp));\n\n      var _feelsNum = Math.ceil((0,_weatherConversion__WEBPACK_IMPORTED_MODULE_0__.ktof)(weatherObject.feelsLike));\n\n      feelsDiv.innerHTML = \"Feels Like: \".concat(_feelsNum, \"\\xB0F\");\n      bigUnit.innerText = '°F';\n    }\n\n    descDiv.innerHTML = \"\".concat(weatherObject.description);\n    locDiv.innerHTML = \"\".concat(weatherObject.city, \", \").concat(weatherObject.country);\n    pressureDiv.innerHTML = \"Pressure: \".concat(weatherObject.pressure, \"mb\");\n    humiDiv.innerHTML = \"Humidity: \".concat(weatherObject.humidity, \"%\");\n  };\n\n  return {\n    refreshPage: refreshPage\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domUpdates);\n\n//# sourceURL=webpack://my-webpack-project/./src/domUpdates.js?");

/***/ }),

/***/ "./src/weatherConversion.js":
/*!**********************************!*\
  !*** ./src/weatherConversion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ktoc\": () => (/* binding */ ktoc),\n/* harmony export */   \"ktof\": () => (/* binding */ ktof)\n/* harmony export */ });\nvar ktoc = function ktoc(arg1) {\n  var celsius = arg1 - 273.15;\n  return celsius;\n};\n\nvar ktof = function ktof(arg1) {\n  var m = ktoc(arg1);\n  var fahrenheit = m * 9 / 5 + 32;\n  return fahrenheit;\n};\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/weatherConversion.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/domUpdates.js");
/******/ 	
/******/ })()
;
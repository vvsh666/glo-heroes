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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getData */ \"./modules/getData.js\");\n/* harmony import */ var _modules_getMovies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getMovies */ \"./modules/getMovies.js\");\n/* harmony import */ var _modules_getProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getProperty */ \"./modules/getProperty.js\");\n/* harmony import */ var _modules_showSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/showSelect */ \"./modules/showSelect.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_getData__WEBPACK_IMPORTED_MODULE_0__.getData)()\r\n;(0,_modules_getMovies__WEBPACK_IMPORTED_MODULE_1__.getMovies)()\r\n;(0,_modules_getProperty__WEBPACK_IMPORTED_MODULE_2__.getProperty)()\r\n;(0,_modules_showSelect__WEBPACK_IMPORTED_MODULE_3__.showSelect)()\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/getData.js":
/*!****************************!*\
  !*** ./modules/getData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nconst getData = () => {\r\n\r\n    return fetch('./dbHeroes.json')\r\n        .then(response => response.json())\r\n        .catch(error => console.log(error.message))\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/getData.js?");

/***/ }),

/***/ "./modules/getMovies.js":
/*!******************************!*\
  !*** ./modules/getMovies.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMovies\": () => (/* binding */ getMovies)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./modules/getData.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n;\r\n\r\n\r\nconst getMovies = () => {\r\n    let moviesList = []\r\n\r\n    return (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)().then(data => {\r\n        data.forEach(item => {\r\n            if (item.movies) {\r\n                moviesList = [...moviesList, ...item.movies]\r\n            }\r\n        })\r\n        moviesList = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getArrOfUnique)(moviesList)\r\n    })\r\n        .catch(error => console.log(error.message))\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/getMovies.js?");

/***/ }),

/***/ "./modules/getProperty.js":
/*!********************************!*\
  !*** ./modules/getProperty.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProperty\": () => (/* binding */ getProperty)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./modules/getData.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n;\r\n\r\n\r\nconst getProperty = (key) => {\r\n    const select = document.getElementById(key)\r\n    \r\n    let propertyList = []\r\n\r\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)().then(data => {\r\n        data.forEach(item => {\r\n            if (item[key]) {\r\n                propertyList.push(item[key])\r\n            }\r\n        })\r\n        propertyList = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getArrOfUnique)(propertyList)\r\n                \r\n        propertyList.forEach(item => {\r\n            const option = document.createElement('option')\r\n            option.value = item\r\n            option.textContent = item\r\n            select.append(option)\r\n        })\r\n        \r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/getProperty.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getArrOfUnique\": () => (/* binding */ getArrOfUnique)\n/* harmony export */ });\n\r\n\r\nconst getArrOfUnique = (arr) => {\r\n    return [...new Set(arr)]\r\n}\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/showSelect.js":
/*!*******************************!*\
  !*** ./modules/showSelect.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showSelect\": () => (/* binding */ showSelect)\n/* harmony export */ });\n/* harmony import */ var _getProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getProperty */ \"./modules/getProperty.js\");\n\r\n\r\nconst showSelect = () => {\r\n    const propertyArr = [\"species\", \"gender\", \"status\", \"citizenship\"]\r\n\r\n    propertyArr.forEach(property => {\r\n        ;(0,_getProperty__WEBPACK_IMPORTED_MODULE_0__.getProperty)(property)\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/showSelect.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const input = document.querySelector(\".input\");\nconst btn = document.querySelector(\".btn\");\n\nfunction getWeatherInfo(location) {\n  fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=c4b056d22aca4491323fcab7b96db61c`,\n    { mode: \"cors\" }\n  )\n    .then(function (response) {\n      return response.json();\n    })\n    .then(function (response) {\n      let currentWeather = response.main.temp;\n      console.log(currentWeather);\n    })\n    .catch(function (err) {\n      console.log(\"Error \" + err);\n    });\n}\n\nbtn.addEventListener('click', () => {\n    getWeatherInfo(input.value)\n})\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
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

eval("const input = document.querySelector(\".input\");\nconst place_h = document.querySelector(\".place1\");\nconst weather_h = document.querySelector(\".weather\");\nconst description_h = document.querySelector(\".description\");\nconst temp_h = document.querySelector(\".temp\");\nconst feels_h = document.querySelector(\".feels-like\");\nconst date_h = document.querySelector(\".date\");\n\nconst date = new Date()\n// const btn = document.querySelector(\".btn\");\n\nfunction getWeatherInfo(location) {\n  fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=c4b056d22aca4491323fcab7b96db61c`,\n    { mode: \"cors\" }\n  )\n    .then(function (response) {\n      return response.json();\n      // console.log(response.json());\n    })\n    .then(function (response) {\n      // return response\n      // let currentWeather = response.main.temp;\n      // return currentWeather;\n      // console.log(response);\n      // console.log(formatData(response));\n      formatData(response);\n    })\n    .catch(function (err) {\n      console.log(\"Error \" + err);\n    });\n}\n\n// btn.addEventListener(\"click\", () => {\n// });\n\ninput.addEventListener(\"keypress\", (event) => {\n  if (event.key === \"Enter\") {\n    getWeatherInfo(input.value);\n  }\n});\n\nfunction formatData(data) {\n  // data.slice(data.main.temp);\n  let temp = data.main.temp;\n  let feelsLike = data.main.feels_like;\n  // let humidity = data.main.humidity;\n\n  let weather = data.weather[0].main;\n  let description = data.weather[0].description;\n  console.log(temp, feelsLike, weather, description);\n\n  // place_h.textContent = input.value;\n  weather_h.textContent = weather;\n  description_h.textContent = weather;\n  temp_h.textContent = temp + '°';\n  feels_h.textContent = feelsLike + '°';\n  // date_h.textContent = date;  \n}\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

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
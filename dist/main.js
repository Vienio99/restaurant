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

/***/ "./src/home-tab.js":
/*!*************************!*\
  !*** ./src/home-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeTabLoad = () => {\n    \n    const content = document.getElementById('content');\n\n    // Description & image\n    const description = document.createElement('div');\n    description.setAttribute('id', 'description');\n    description.textContent = \"Fat Thai, located in the heart of Kailua-Kona, is a family owned and operated restaurant. Fat Thai is owned and operated by Chariya and her three daughters. Preserving recipes and traditions of the past for future generations, Fat Thai is a local favorite.\"\n    content.appendChild(description);\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeTabLoad);\n\n//# sourceURL=webpack://restaurant/./src/home-tab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-page.js */ \"./src/load-page.js\");\n/* harmony import */ var _home_tab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-tab.js */ \"./src/home-tab.js\");\n/* harmony import */ var _menu_tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-tab.js */ \"./src/menu-tab.js\");\n\n\n\n\n(0,_load_page_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_home_tab_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n\ndocument.addEventListener('click', (e) => {\n\n    const content = document.getElementById('content');\n\n    if (e.target) {\n        if (e.target.id == 'home-tab') {\n            removeContent(content);\n            (0,_home_tab_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n        };\n\n        if (e.target.id == 'menu-tab') {\n            removeContent(content);\n            (0,_menu_tab_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n        }\n    }\n});\n\nfunction removeContent(content) {\n    while (content.firstChild) {\n        content.removeChild(content.firstChild)\n    }\n\n};\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadPage = () => {\n    \n    const navbar = document.getElementById('navbar');\n\n    // Left side of navbar\n    const homeButton = document.createElement('button');\n    homeButton.setAttribute('id', 'home-tab');\n    homeButton.textContent = 'Home';\n    navbar.appendChild(homeButton);\n\n    const menuButton = document.createElement('button');\n    menuButton.setAttribute('id', 'menu-tab');\n    menuButton.textContent = 'Menu';\n    navbar.appendChild(menuButton);\n\n    // Middle side of navbar\n\n    const titles = document.createElement('div');\n    navbar.appendChild(titles);\n\n    const title = document.createElement('h1');\n    title.setAttribute('id', 'title');\n    title.textContent = 'Fat Thai';\n    titles.appendChild(title);\n\n    const subTitle = document.createElement('p');\n    subTitle.setAttribute('id', 'sub-title');\n    subTitle.textContent = 'Ketogenic Thai cuisine';\n    titles.appendChild(subTitle);\n\n    // Right side of navbar\n    const contactButton = document.createElement('button');\n    contactButton.setAttribute('id', 'contact-tab');\n    contactButton.textContent = 'Contact us';\n    navbar.appendChild(contactButton);\n\n    const aboutButton = document.createElement('button');\n    aboutButton.setAttribute('id', 'about-tab');\n    aboutButton.textContent = 'About';\n    navbar.appendChild(aboutButton);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant/./src/load-page.js?");

/***/ }),

/***/ "./src/menu-tab.js":
/*!*************************!*\
  !*** ./src/menu-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuTabLoad = () => {\n    \n    const content = document.getElementById('content');\n\n    const menuList = document.createElement('div');\n    menuList.setAttribute('class', 'menu-list')\n    content.appendChild(menuList);\n    \n\n    for (let i = 1; i <= 6; i++) {\n        const meal = document.createElement('div');\n        meal.setAttribute('class', 'meal');\n\n        const title = document.createElement('h3');\n        meal.appendChild(title);\n\n        const price = document.createElement('p');\n        meal.appendChild(price);\n        price.textContent = '11$';\n\n        const img = document.createElement('img');\n        meal.appendChild(img);\n        img.src = `../img/${i}.png`\n        \n        const igredients = document.createElement('div');\n        igredients.setAttribute('class', 'ingredients');\n        meal.appendChild(igredients);\n\n        meal.setAttribute('id', i);\n        menuList.appendChild(meal);\n    }\n\n    const firstMeal = document.getElementById('1');\n    firstMeal.firstChild.textContent = 'Classic Fat Thai';\n    firstMeal.lastChild.textContent = 'king prawn pad Thai, dried shrimp, tofu, egg, beansprout and fried shallot with garlic chives, peanut and lime';\n\n    const secondMeal = document.getElementById('2');\n    secondMeal.firstChild.textContent = 'Ginger Beef';\n    secondMeal.lastChild.textContent = 'beef rump steak in garlic and ginger sauce with mushroom, Thai pepper, fresh chilli and spring onion';\n\n    const thirdMeal = document.getElementById('3');\n    thirdMeal.firstChild.textContent = 'Weeping Tiger Jay';\n    thirdMeal.lastChild.textContent = 'triple-cooked soya with green beans, chilli and ginger';\n\n    const fourthMeal = document.getElementById('4');\n    fourthMeal.firstChild.textContent = 'Green Curry Jay';\n    fourthMeal.lastChild.textContent = 'green curry infused with lemongrass. chilli and ginger with courgette, pea aubergine, bamboo and sweet basil';\n\n    const fifthMeal = document.getElementById('5');\n    fifthMeal.firstChild.textContent = 'Aubergine Curry';\n    fifthMeal.lastChild.textContent = 'wok-fried Thai and purple aubergines in a yellow coconut curry'\n\n    const sixthMeal = document.getElementById('6');\n    sixthMeal.firstChild.textContent = 'Sriracha Ho Fun Noodles';\n    sixthMeal.lastChild.textContent = 'wok-fried mushroom, red pepper, baby spinach and flat rice noodles seasoned with sweet chilli, soy and ginger sauce'\n\n\n    img.src = '../img/food.png';\n    content.appendChild(img);\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuTabLoad);\n\n//# sourceURL=webpack://restaurant/./src/menu-tab.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
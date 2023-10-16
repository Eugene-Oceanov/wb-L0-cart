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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/SegoeUI.ttf */ \"./src/assets/fonts/SegoeUI.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* variables start */\n:root {\n  --index: calc(1vw + 1vh);\n  --system-black: #000;\n  --system-white: #fff;\n  --system-violet: #6725A8;\n  --system-magenta: #CB11AB;\n  --system-red: #FF3B30;\n  --system-grey: #9797AF;\n  --main-background-smoky: #F6F6FA;\n}\n\n/* variables end */\n\n/* fonts start */\n@font-face {\n  font-family: \"Segoe UI\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  font-weight: normal;\n}\n\n/* fonts end */\n\n/* reset start */\n*,\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Segoe UI\", Arial, Helvetica, sans-serif;\n  font-size: calc(var(--index) * 0.8);\n  line-height: var(--index);\n  letter-spacing: normal;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: #6725A8;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n/* reset end */\n\n/* default start */\n.container {\n  width: 100%;\n  padding: 0 1.45em;\n}\n\n.d-none {\n  display: none;\n}\n\n.d-block {\n  display: block;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.jc-space-between {\n  justify-content: space-between;\n}\n\n.jc-center {\n  justify-content: center;\n}\n\n.jc-end {\n  justify-content: flex-end;\n}\n\n.ai-center {\n  align-items: center;\n}\n\n.ai-end {\n  align-items: flex-end;\n}\n\n.fd-column {\n  flex-direction: column;\n}\n\n/* custom checkbox start */\ninput[type=\"checkbox\"]:checked,\ninput[type=\"checkbox\"]:not(:checked) {\n  display: none;\n}\n\nlabel {\n  display: block;\n  position: relative;\n  width: 1.3em;\n  height: 1.3em;\n  border: 1px solid var(--system-magenta);\n  border-radius: .35em;\n  cursor: pointer;\n}\n\ninput[type=\"checkbox\"]:checked+label {\n  background: var(--system-magenta);\n}\n\ninput[type=\"checkbox\"]:checked+label:after {\n  content: \"\";\n  position: absolute;\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  -o-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  left: .25em;\n  top: .25em;\n  width: 10px;\n  height: 5px;\n  border-radius: 1px;\n  border-left: .14em solid #fff;\n  border-bottom: .14em solid #fff;\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n\ninput[type=\"checkbox\"]:not(:checked)+label:after {\n  opacity: 0;\n}\n\ninput[type=\"checkbox\"]:checked+label:after {\n  opacity: 1;\n}\n\n/* custom checkbox end */\n/* default end */\n\n/* header start */\n#header {\n  color: #fff;\n  margin: 1em 0;\n}\n\n.header__logo {\n  width: 8%;\n  margin-left: 3.8em;\n}\n\n.header__logo--text {\n  text-transform: uppercase;\n  font-size: 1.3em;\n  line-height: 1.1em;\n  letter-spacing: 2px;\n  font-weight: 600;\n}\n\n.header__search {\n  width: 72.3%;\n  margin-right: 1em;\n  padding-left: 0.6em;\n  position: relative;\n}\n\n.header__search--input {\n  width: 100%;\n  padding: .95em 1.3em;\n  color: #fff;\n  font-size: .9em;\n  line-height: 0.5em;\n  border-radius: 10em;\n  border: none;\n  outline: none;\n  margin-right: -2em;\n  background: rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n}\n\n.header__search--input::-moz-placeholder {\n  color: #ccc;\n}\n\n.header__search--input::placeholder {\n  color: #ccc;\n}\n\n.header__search--input:focus {\n  color: #000;\n  opacity: 1;\n  background: #fff;\n}\n\n.header__search--icon {\n  position: absolute;\n  top: 0.7em;\n  right: 1.2em;\n}\n\n.header__search--icon path {\n  fill: #fff;\n}\n\n.header__nav {\n  width: 10.7%;\n}\n\n.header__nav--item {\n  text-align: center;\n  cursor: pointer;\n}\n\n.header__nav--item p {\n  font-size: 0.75em;\n}\n\n.header__nav--profile-link {\n  padding-top: 0.2em;\n}\n\n.header__nav--cart-link {\n  position: relative;\n}\n\n.header__nav--cart-link svg {\n  margin-left: -0.5em;\n}\n\n/* header end */\n\n/* main start */\n#main {\n  background: var(--main-background-smoky);\n  border-radius: 1.3em;\n  padding: 1.3em 0;\n}\n\n.cart-main {\n  margin-top: 0.4em;\n  width: 66%;\n  padding: .8em 0;\n}\n\n.cart-main__title {\n  font-size: 1.65em;\n  margin-bottom: .7em;\n}\n\n.cart-aviable {\n  margin-bottom: .75em;\n}\n\n.cart-aviable__hide-block,\n.cart-not-aviable__to-hide-block {\n  width: 100%;\n  padding: 1em 0;\n  border-bottom: 1px solid var(--system-grey);\n  margin-bottom: .6em;\n}\n\n.cart-aviable__hide-block p {\n  margin-left: .7em;\n}\n\n.cart-not-aviable__to-hide-block p {\n  font-weight: 600 !important;\n  margin-bottom: 0.2em;\n}\n\n.cart-aviable__hide-block p,\n.cart-not-aviable__to-hide-block p {\n  font-size: .95em;\n  font-weight: 400;\n}\n\n/* cart item start */\n.cart-item__checkbox {\n  display: block;\n  margin-top: 2.3em;\n}\n\n.cart-item+.cart-item,\n.cart-item-not-aviable+.cart-item-not-aviable {\n  margin-top: 1.6em;\n}\n\n.cart-item-wrapper {\n  width: 100%;\n  margin-left: .75em;\n}\n\n.cart-item-info__img,\n.cart-item-not-aviable-info__img {\n  width: 4.3em;\n}\n\n.cart-item-info {\n  width: 100%;\n}\n\n.cart-item-info-description {\n  width: 32%;\n  margin-left: 1em;\n  padding: 0.1em 0;\n}\n\n.cart-item__title,\n.cart-item-not-aviable__title {\n  font-size: 1em;\n  font-weight: 400;\n  letter-spacing: -.4px;\n  line-height: 1.45em;\n  margin-bottom: .25em;\n}\n\n.cart-item-info-description p,\n.cart-item-not-aviable-info-description p {\n  font-size: 0.78em;\n}\n\n.cart-item-properties {\n  margin-bottom: 0.2em;\n}\n\n.cart-item-properties__item+.cart-item-properties__item,\n.cart-item-not-aviable-properties__item+.cart-item-not-aviable-properties__item {\n  margin-left: 1.3em;\n}\n\n.cart-item__stock,\n.cart-item__manufacturer {\n  color: var(--system-grey);\n}\n\n.cart-item-options {\n  width: 29%;\n}\n\n.cart-item-options-panel-quantity {\n  background: var(--system-white);\n  padding: 0.6em 0.6em;\n  border-radius: .5em;\n  margin-bottom: 0.4em;\n}\n\n.cart-item-options-panel-quantity p {\n  font-size: 1.2em;\n  line-height: 1.2em;\n}\n\n.cart-item-options-panel__quantity-input {\n  background: none;\n  border: none;\n  outline: none;\n  width: 3.2em;\n  text-align: center;\n}\n\n.cart-item-options-panel__remainder {\n  font-size: .8em;\n  color: var(--system-red);\n  margin-bottom: 0.2em;\n}\n\n.cart-item-options-panel__remove-btn {\n  margin-left: .8em;\n}\n\n.cart-item-options-price {\n  width: 6em;\n  padding: 0.1em;\n}\n\n.cart-item-options-price span {\n  font-size: 0.8em;\n}\n\n.cart-item-options-price__final {\n  font-size: 1.2em;\n  font-weight: 700;\n  margin-bottom: 0.2em;\n}\n\n.cart-item-options-price__original {\n  font-size: 0.8em;\n  color: var(--system-grey);\n  text-decoration: line-through;\n  border-bottom: 1px dashed var(--system-grey);\n}\n\n.cart-not-aviable {\n  margin-bottom: 2.1em;\n}\n\n.cart-item-not-aviable-info {\n  width: 45%;\n}\n\n.cart-item-not-aviable-info-description {\n  margin-left: 0.9em;\n  padding: 0.18em 0;\n}\n\n.cart-item-not-aviable-info__img {\n  filter: grayscale(1);\n}\n\n.cart-item-not-aviable-info-description {\n  color: var(--system-grey);\n}\n\n.cart-item-not-aviable-options {\n  width: 25%;\n}\n\n/* cart item end */\n\n.cart-main-section {\n  width: 100%;\n  padding: 1.3em 1.45em;\n  border-radius: .8em;\n  background: var(--system-white);\n}\n\n.cart-main-section+.cart-main-section {\n  margin-top: 1em;\n}\n\n.cart-main-section__title {\n  font-size: 1.42em;\n  font-weight: 700;\n  letter-spacing: -0.2px;\n}\n\n.cart-main-section__options-btn {\n  font-size: 0.95em;\n  font-weight: 700;\n  color: var(--system-magenta);\n  line-height: calc(var(--index) * 0.8);\n  display: block;\n  padding: none;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n}\n\n/* cart main delivery start */\n.cart-main-delivery__row+.cart-main-delivery__row {\n  margin-top: 1.05em;\n}\n\n.cart-main-delivery p {\n  font-size: 0.9em;\n}\n\n.cart-main-delivery span {\n  font-size: 0.8em;\n  letter-spacing: normal;\n}\n\n.cart-main-delivery__text-block {\n  width: 21.9%;\n  font-weight: 700;\n}\n\n.cart-main-delivery-point {\n  margin-top: 1.35em !important;\n}\n\n.cart-main-delivery-point-info__adress {\n  letter-spacing: .1px;\n}\n\n.cart-main-delivery-point-info__rating span:first-child {\n  margin-right: .25em;\n}\n\n.cart-main-delivery-date-item__img {\n  width: 2.4em;\n}\n\n.cart-main-delivery-date-item__img+.cart-main-delivery-date-item__img {\n  margin-left: 0.2em;\n}\n\n.cart-main-delivery-return__info {\n  font-size: .78em !important;\n  margin-left: 0.5em;\n}\n\n.cart-main-delivery-return__info span {\n  font-size: 1em !important;\n  color: #0CB477;\n  border-bottom: 1px dashed #0CB477;\n}\n\n/* cart main delivery end */\n\n/* cart main payment start */\n.cart-main-payment-card {\n  margin-top: 1.4em;\n  margin-bottom: 0.5em;\n}\n\n.cart-main-payment-card p {\n  /* font-size: 1em; */\n  margin-left: 0.5em;\n  letter-spacing: -0.2px;\n}\n\n.cart-main-payment__write-off {\n  font-size: 0.78em;\n  color: var(--system-grey);\n}\n\n/* cart main payment end */\n\n/* cart main recipient form start */\n.cart-main-recipient-form {\n  margin-bottom: .3em;\n}\n\n.cart-main-form {\n  width: 83%;\n  flex-wrap: wrap;\n}\n\n.cart-main-form-placeholder-wrapper {\n  position: relative;\n  width: 31%;\n}\n\n.cart-main-form-placeholder-wrapper--50per {\n  width: 48%;\n}\n\n.cart-main-form__input {\n  display: block;\n  width: 100%;\n  padding: .3em 0;\n  border: none;\n  border-bottom: 1px solid var(--system-grey);\n  outline: none;\n  margin-top: 2em;\n}\n\n.cart-main-form__placeholder {\n  position: absolute;\n  left: 0;\n  top: 2.35em;\n  transition: all .3s ease;\n  pointer-events: none;\n  color: var(--system-grey);\n}\n\n.cart-main-form__input:focus+.cart-main-form__placeholder,\n.cart-main-form__input:not(:placeholder-shown)+.cart-main-form__placeholder {\n  transform: translate(0, -1.1em);\n  font-size: 0.8em;\n}\n\n.cart-main-form__inn-description {\n  font-size: 0.7em;\n}\n\n/* cart main recipient form end */\n\n/* cart sidebar start */\n.cart-sidebar {\n  width: 31.6%;\n  height: fit-content;\n  background: #fff;\n  padding: 1.25em 1.35em;\n  border-radius: .8em;\n  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.30), 0px 2px 10px 0px rgba(0, 0, 0, 0.15);\n}\n\n.main-sidebar__row+.main-sidebar__row {\n  margin-bottom: 0.15em;\n}\n\n.main-sidebar-summary-price {\n  margin-bottom: .9em;\n}\n\n.main-sidebar-summary-price .valute {\n  font-size: 0.9em;\n}\n\n.main-sidebar-summary-price p {\n  font-size: 1.4em;\n  font-weight: 700;\n}\n\n.main-sidebar-pickup-point {\n  margin: 1.6em 0;\n}\n\n.main-sidebar-pickup-point__title {\n  font-weight: 600;\n  margin-bottom: 0.3em;\n}\n\n.main-sidebar-pickup-point__point {\n  font-size: 0.78em;\n}\n\n.main-sidebar-pickup-point__delivery-date {\n  width: fit-content;\n  margin-bottom: 0.6em;\n  cursor: pointer;\n  font-size: 0.78em;\n  color: var(--system-magenta);\n  border-bottom: 1px dashed var(--system-magenta);\n}\n\n.main-sidebar-return-delivery {\n  padding: 0.65em 0.5em;\n  background: var(--main-background-smoky);\n  border-radius: .4em;\n  position: relative;\n}\n\n.main-sidebar-return-delivery svg {\n  margin-top: -0.3em;\n  width: 1.5em;\n  height: 1.5em;\n}\n\n.main-sidebar-return-delivery__info {\n  margin-left: .4em;\n  font-size: 0.78em;\n  line-height: .8em;\n}\n\n.main-sidebar-return-delivery__info span {\n  font-size: 1em;\n  color: #0CB477;\n  border-bottom: 1px dashed #0CB477;\n}\n\n.main-sidebar-payment {\n  margin-bottom: 1.45em;\n}\n\n.main-sidebar-payment__title {\n  font-weight: 600;\n  margin-bottom: 0.3em;\n}\n\n.main-sidebar-payment-card {\n  margin-bottom: .75em;\n}\n\n.main-sidebar-payment-card__number {\n  font-size: 0.75em;\n  margin-left: .8em;\n}\n\n.main-sidebar-payment-postpaid {\n  background: var(--main-background-smoky);\n  padding: .5em;\n  border-radius: .4em;\n}\n\n.main-sidebar-payment-postpaid label {\n  margin-bottom: 0.45em;\n}\n\n.main-sidebar-payment-postpaid span {\n  font-size: 0.8em;\n  white-space: nowrap;\n  margin-left: 2em;\n}\n\n.main-sidebar-payment-postpaid__info {\n  font-size: 0.78em;\n}\n\n.cart-sidebar__order-btn {\n  width: 100%;\n  padding: 0.65em;\n  margin-bottom: .7em;\n  background: var(--system-magenta);\n  color: var(--system-white);\n  font-weight: 500;\n  border: none;\n  outline: none;\n  border-radius: .45em;\n}\n\n.main-sidebar-agreement__links {\n  margin-left: .8em;\n  font-size: 0.77em;\n  line-height: 1.3em;\n}\n\n.main-sidebar-agreement__links a {\n  font-size: 1em;\n  line-height: 1.3em;\n  text-decoration: underline;\n}\n\n/* cart sidebar end */\n\n/* main end */`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://l0-cart/./src/assets/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://l0-cart/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://l0-cart/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://l0-cart/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://l0-cart/./src/assets/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://l0-cart/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://l0-cart/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://l0-cart/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://l0-cart/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://l0-cart/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://l0-cart/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/cart-item.js":
/*!*************************************!*\
  !*** ./src/components/cart-item.js ***!
  \*************************************/
/***/ ((module) => {

eval("module.exports = {\r\n    fullCartItem: function (item) {\r\n        let finalPrice = (Math.round(item.price - (item.price / 100 * item.discount))) * item.quantity;\r\n        const cartItem = document.createElement(\"DIV\");\r\n        cartItem.classList.add(\"cart-item\", \"d-flex\");\r\n        cartItem.innerHTML = `\r\n            <input type=\"checkbox\" id=\"cart-item-${item.id}__cb\" checked>\r\n            <label for=\"cart-item-${item.id}__cb\" class=\"cart-item__checkbox d-flex jc-space-between\"></label>\r\n            <div class=\"cart-item-wrapper d-flex\">\r\n                <a href=\"#\"><img src=\"${item.img}\" alt=\"${item.title}\" class=\"cart-item-info__img\"></a>\r\n                <div class=\"cart-item-info d-flex jc-space-between\">\r\n                    <div class=\"cart-item-info-description\">\r\n                        <h2 class=\"cart-item__title\">${item.title}</h2>\r\n                        <div class=\"cart-item-properties d-flex\">\r\n                            ${item.color ? `<p class=\"cart-item-properties__item\">Цвет: ${item.color}</p>` : \"\"}\r\n                            ${item.size ? `<p class=\"cart-item-properties__item\">Размер: ${item.size}</p>` : \"\"}\r\n                        </div>\r\n                        <p class=\"cart-item__stock\">${item.stock}</p>\r\n                        <p class=\"cart-item__manufacturer\">${item.manufacturer}</p>\r\n                    </div>\r\n                    <div class=\"cart-item-options d-flex jc-space-between\">\r\n                        <div class=\"cart-item-options-panel\">\r\n                            <div class=\"cart-item-options-panel-quantity d-flex jc-space-between ai-center\">\r\n                                <p class=\"cart-item-options-panel__quantity-lower\">−</p>\r\n                                <input type=\"text\" class=\"cart-item-options-panel__quantity-input\" value=\"${item.quantity}\">\r\n                                <p class=\"cart-item-options-panel__quantity-increase\">+</p>\r\n                            </div>\r\n                            ${item.remainder <= 3 ? `<p class=\"cart-item-options-panel__remainder\">Осталось ${item.remainder} шт.</p>` : \"\"}\r\n                            <div class=\"cart-item-options-panel__buttons d-flex jc-end\">\r\n                                <svg class=\"cart-item-options-panel__like-btn\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\">\r\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z\" fill=\"black\"/></svg>\r\n\r\n                                <svg class=\"cart-item-options-panel__remove-btn\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z\" fill=\"black\"/>\r\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z\" fill=\"black\"/>\r\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z\" fill=\"black\"/></svg>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cart-item-options-price d-flex fd-column ai-end\">\r\n                            <p class=\"cart-item-options-price__final\">${finalPrice.toLocaleString(\"ru\")} <span>сом</span></p>\r\n                            <p class=\"cart-item-options-price__original\">${(item.price * item.quantity).toLocaleString(\"ru\")} сом</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>`\r\n        return cartItem;\r\n    },\r\n\r\n    cartItemNotAviable: function (item) {\r\n        const cartItemNotAviable1 = document.createElement(\"DIV\");\r\n        cartItemNotAviable1.classList.add(\"cart-item-not-aviable\", \"d-flex\", \"jc-space-between\");\r\n        cartItemNotAviable1.innerHTML = `\r\n            <div class=\"cart-item-not-aviable-info d-flex\">\r\n                <a href=\"#\"><img src=\"${item.img}\" alt=\"${item.title}\" class=\"cart-item-not-aviable-info__img\"></a>\r\n                <div class=\"cart-item-not-aviable-info-description\">\r\n                    <h2 class=\"cart-item-not-aviable__title\">${item.title}</h2>\r\n                    <div class=\"cart-item-not-aviable-properties d-flex\">\r\n                        ${item.color ? `<p class=\"cart-item-not-aviable-properties__item\">Цвет: ${item.color}</p>` : \"\"}\r\n                        ${item.size ? `<p class=\"cart-item-not-aviable-properties__item\">Размер: ${item.size}</p>` : \"\"}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cart-item-not-aviable-options d-flex\">\r\n                <svg class=\"cart-item-options-panel__like-btn\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\">\r\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z\" fill=\"black\"/></svg>\r\n\r\n                <svg class=\"cart-item-options-panel__remove-btn\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z\" fill=\"black\"/>\r\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z\" fill=\"black\"/>\r\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z\" fill=\"black\"/></svg>\r\n            </div>`;\r\n        return cartItemNotAviable1;\r\n    },\r\n}\n\n//# sourceURL=webpack://l0-cart/./src/components/cart-item.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ \"./src/assets/css/style.css\");\n\r\n\r\n;\r\nconst cartItemLayout = __webpack_require__(/*! ./components/cart-item.js */ \"./src/components/cart-item.js\");\r\nconst cartAviable = document.querySelector(\".cart-aviable__container\");\r\nconst cartNotAviable = document.querySelector(\".cart-not-aviable__container\");\r\nconst inputsArr = document.querySelectorAll(\".cart-main-form-placeholder-wrapper\");\r\nconst cart = getCartData();\r\n\r\ncart.then(data => {\r\n    data.forEach(item => {\r\n        if (item.remainder > 0) {\r\n            const cartItem = cartItemLayout.fullCartItem(item);\r\n            cartAviable.append(cartItem);\r\n        } else if (item.remainder === 0) {\r\n            const cartItemNotAviable = cartItemLayout.cartItemNotAviable(item);\r\n            cartNotAviable.append(cartItemNotAviable)\r\n        }\r\n    })\r\n});\r\n\r\nasync function getCartData() {\r\n    let json = await fetch(\"https://raw.githubusercontent.com/Eugene-Oceanov/wb-L0-cart/main/src/json/cart-api.json\");\r\n    let data = await json.json();\r\n    return data;\r\n}\n\n//# sourceURL=webpack://l0-cart/./src/index.js?");

/***/ }),

/***/ "./src/assets/fonts/SegoeUI.ttf":
/*!**************************************!*\
  !*** ./src/assets/fonts/SegoeUI.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"SegoeUI.ttf\";\n\n//# sourceURL=webpack://l0-cart/./src/assets/fonts/SegoeUI.ttf?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"mainScript": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
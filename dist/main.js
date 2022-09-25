/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/Menu.js":
/*!***************************!*\
  !*** ./src/pages/Menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMenuOption)
/* harmony export */ });
const content = document.querySelector('#content');
const body = document.querySelector('body');
let header = 0;
function addMenuOption(plateImg, plateName) {
  body.className = "menu";
  content.className = "menu_content";

  if (header % 6 === 0) {
    const menuHeader = document.createElement('h2');
    menuHeader.textContent = "Menu";
    content.appendChild(menuHeader);
  }

  header++;
  const menuOption = document.createElement('div');
  menuOption.classList.add("menu-option");
  menuOption.setAttribute('id', plateName);
  content.appendChild(menuOption);
  const myImage = new Image();
  myImage.src = plateImg;
  myImage.classList = "plate";
  myImage.id = plateName;
  myImage.alt = `A picture of ${plateName}`;
  menuOption.appendChild(myImage);
  const caption = document.createElement('div');
  const plate = document.createElement('div');
  const price = document.createElement('div');
  plate.className = "plate";
  plate.textContent = plateName;
  price.className = "price";
  let number = 0;
  price.textContent = 20 + "$";
  caption.className = 'caption';
  menuOption.appendChild(caption);
  caption.appendChild(plate);
  caption.appendChild(price);
}

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addContact)
/* harmony export */ });
const content = document.querySelector('#content');
const body = document.querySelector('body');
const form = document.createElement('form');
function addContact() {
  content.className = "contact_content";
  body.className = "contact";
  content.appendChild(form);

  if (form.children.length === 0) {
    createLabel("Your Name:", "name", "text");
    createLabel("Your Email:", "email", "email");
    createLabel("Your Message:", "message", "textarea");
    createLabel("", "submit-btn", 'submit');
    form.addEventListener('submit', e => {
      e.preventDefault();
    });
  }

  addMap();
}

function createLabel(labelContent, labelFor, inputType) {
  const label = document.createElement('label');
  label.textContent = labelContent;
  label.setAttribute('for', labelFor);
  form.appendChild(label);
  let type;
  if (inputType !== "textarea") type = "input";else type = "textarea";
  const input = document.createElement(type);
  input.setAttribute('placeholder', `Enter your ${labelFor}`);
  input.setAttribute('type', inputType);
  input.setAttribute('id', labelFor);
  form.appendChild(input);
  input.required = true;
}

;

function addMap() {
  let mapDiv = document.createElement('div');
  mapDiv.id = "map";
  mapDiv.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.7122980883705!2d-118.25255968491061!3d33.94852708063434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sma!4v1661685470126!5m2!1sen!2sma" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  content.appendChild(mapDiv);
}

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addAboutUs)
/* harmony export */ });
const content = document.querySelector('#content');
const body = document.querySelector('body');
const head = document.createElement('h1');
const img = document.createElement('img');
const para = document.createElement('p');
const button = document.createElement('button');
function addAboutUs() {
  body.className = "home";
  content.className = "home_content";
  head.textContent = "Restaurant";
  para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum odio quis neque ultricies eleifend eget at augue. Quisque condimentum elit erat, et lobortis dolor condimentum a. Duis sed tristique nisl, in consequat libero.";
  button.textContent = 'go to Menu';
  content.appendChild(head);
  content.appendChild(para);
  content.appendChild(button);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/contact.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/contact.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".contact_content {\n  padding-top: 10vh;\n  height: 100vh;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-flow: row-reverse wrap;\n  width: 70%;\n  margin: auto;\n}\n.contact_content #map {\n  box-shadow: 0 0 5px black;\n}\n.contact_content label {\n  display: block;\n  margin: 10px;\n}\n.contact_content input, .contact_content textarea {\n  font-size: 15px;\n  padding: 5px;\n}\n.contact_content #submit-btn {\n  display: block;\n  margin: auto;\n  background-color: rgb(61, 146, 61);\n  border: none;\n  color: white;\n}\n.contact_content #submit-btn:hover {\n  filter: saturate(150%);\n}\n.contact_content textarea {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/styles/contact.scss"],"names":[],"mappings":"AAAA;EACI,iBAAA;EACA,aAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,2BAAA;EACA,UAAA;EACA,YAAA;AACJ;AAAI;EACI,yBAAA;AAER;AAAI;EACI,cAAA;EACA,YAAA;AAER;AAAI;EACI,eAAA;EACA,YAAA;AAER;AAAI;EACI,cAAA;EACA,YAAA;EACA,kCAAA;EACA,YAAA;EACA,YAAA;AAER;AADQ;EACI,sBAAA;AAGZ;AAAI;EACI,WAAA;AAER","sourcesContent":[".contact_content {\r\n    padding-top: 10vh;\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    flex-flow: row-reverse wrap;\r\n    width: 70% ;\r\n    margin: auto;\r\n    #map {\r\n        box-shadow: 0 0 5px black;\r\n    }\r\n    label {\r\n        display: block;\r\n        margin: 10px;\r\n    }\r\n    input, textarea {\r\n        font-size: 15px;\r\n        padding: 5px;\r\n    }\r\n    #submit-btn {\r\n        display: block;\r\n        margin: auto;\r\n        background-color: rgb(61, 146, 61);\r\n        border: none;\r\n        color: white;\r\n        &:hover {\r\n            filter: saturate(150%);\r\n        }\r\n    }\r\n    textarea {\r\n        width: 100%;\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: black;\n  color: white;\n  font-family: sans-serif;\n  background-image: url(\"https://img.freepik.com/premium-photo/set-colored-spices-bowls-herbs-black-stone-background-view-from-top-view_187166-28543.jpg?w=2000\");\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1%;\n  height: 8vh;\n  width: 100%;\n  color: white;\n  position: fixed;\n  font-family: sans-serif;\n}\nheader #logo, header li {\n  display: inline-block;\n}\nheader #logo {\n  font-size: min(4vh, 25px);\n  font-weight: 700;\n  border: 5px solid rgb(255, 255, 255);\n  padding: 5px;\n}\nheader li {\n  width: min(15vw, 120px);\n  text-align: center;\n}\nheader li:hover {\n  border: 1px solid black;\n  background-color: rgba(255, 255, 255, 0.842);\n  color: black;\n  border-radius: 20px;\n  padding: 5px;\n  cursor: pointer;\n}\n\n.home_content {\n  padding-top: 8vh;\n  height: 100vh;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.home_content h1 {\n  padding: 4vh;\n}\n.home_content p {\n  text-align: center;\n  width: 50%;\n  line-height: 1.5rem;\n  padding: 1vh;\n  font-size: min(5vw, 17px);\n}\n.home_content button {\n  padding: 8px 20px;\n  margin: 10px;\n  font-size: 1.2em;\n  background-color: transparent;\n  color: aliceblue;\n  font-weight: 500;\n  border: 2px solid white;\n  border-radius: 10px;\n}\n.home_content button:hover {\n  outline: 2px solid rgb(63, 61, 61);\n  background-color: rgba(255, 255, 255, 0.925);\n  color: black;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles/index.scss"],"names":[],"mappings":"AAYA;EACI,UAAA;EACA,SAAA;EACA,sBAAA;AAXJ;;AAaA;EACI,uBAAA;EACA,YATO;EAUP,uBAAA;EACA,+JAAA;EACA,sBAAA;EACA,4BAAA;EACA,2BAAA;EACA,4BAAA;AAVJ;;AAaA;EAxBI,aAAA;EACA,8BAAA;EACA,mBAAA;EAwBA,WAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,uBAAA;AARJ;AASI;EACG,qBAAA;AAPP;AASI;EACI,yBAAA;EACA,gBAAA;EACA,oCAAA;EACA,YAAA;AAPR;AASI;EACI,uBAAA;EACA,kBAAA;AAPR;AAQQ;EACI,uBAAA;EACA,4CAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,eAAA;AANZ;;AAUA;EACI,gBAAA;EACA,aAAA;EAxDA,aAAA;EACA,8BAAA;EACA,mBAAA;EAwDA,uBAAA;EACA,sBAAA;AALJ;AAMI;EACI,YAAA;AAJR;AAMI;EACI,kBAAA;EACA,UAAA;EACA,mBAAA;EACA,YAAA;EACA,yBAAA;AAJR;AAMI;EACI,iBAAA;EACA,YAAA;EACA,gBAAA;EACA,6BAAA;EACA,gBAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;AAJR;AAKQ;EACI,kCAAA;EACA,4CAAA;EACA,YAAA;EACA,eAAA;AAHZ","sourcesContent":["@mixin border {\r\n    border: 1px solid red;\r\n}\r\n@mixin flex_between {\r\n    display:flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n$headerBg: rgba(0, 0, 0, 0.842);\r\n$bodyBg: rgb(34, 34, 34);\r\n$bodyFont: white;\r\n$content: rgb(80, 79, 79);\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    background-color: black;\r\n    color: $bodyFont;\r\n    font-family: sans-serif ;\r\n    background-image: url('https://img.freepik.com/premium-photo/set-colored-spices-bowls-herbs-black-stone-background-view-from-top-view_187166-28543.jpg?w=2000');\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\nheader {\r\n    @include flex_between();\r\n    padding: 1%;\r\n    height: 8vh;\r\n    width: 100%;\r\n    color: white;\r\n    position: fixed;\r\n    font-family: sans-serif;\r\n    #logo ,li {\r\n       display: inline-block;\r\n    }\r\n    #logo {\r\n        font-size: min(4vh, 25px);\r\n        font-weight: 700;\r\n        border: 5px solid rgb(255, 255, 255);\r\n        padding: 5px;\r\n    }\r\n    li {\r\n        width: min(15vw, 120px);\r\n        text-align: center;\r\n        &:hover {\r\n            border: 1px solid black;\r\n            background-color: rgba(255, 255, 255, 0.842);\r\n            color: black;\r\n            border-radius: 20px;\r\n            padding: 5px;\r\n            cursor: pointer;\r\n        }\r\n    }\r\n}\r\n.home_content {\r\n    padding-top: 8vh;\r\n    height: 100vh;\r\n    @include flex_between();\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    h1 {\r\n        padding: 4vh;\r\n    }\r\n    p {\r\n        text-align: center;\r\n        width: 50%;\r\n        line-height: 1.5rem;\r\n        padding: 1vh;\r\n        font-size: min(5vw, 17px);\r\n    }\r\n    button {\r\n        padding: 8px 20px;\r\n        margin: 10px;\r\n        font-size: 1.2em;\r\n        background-color: transparent;\r\n        color: aliceblue;\r\n        font-weight: 500;\r\n        border: 2px solid white;\r\n        border-radius: 10px;\r\n        &:hover {\r\n            outline: 2px solid rgb(63, 61, 61);\r\n            background-color: rgba(255, 255, 255, 0.925);\r\n            color: black;\r\n            cursor: pointer;\r\n        }\r\n    }\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@900&family=Space+Mono:wght@700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu_content {\n  font-family: \"space mono\";\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  gap: 10px;\n  padding-top: 8vh;\n  margin: auto;\n  width: 90%;\n}\n.menu_content h2 {\n  font-family: \"lato\";\n  width: 100%;\n  text-align: center;\n  font-size: 10vw;\n  color: azure;\n  margin: 5vw;\n}\n.menu_content .menu-option {\n  margin: 10px;\n  padding: 10px;\n  width: min(80vw, 300px);\n  height: min(40vw, 150px);\n  color: black;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  position: relative;\n  border-radius: 20px;\n}\n.menu_content .menu-option img {\n  border-radius: 50%;\n  width: max(8vw, 80px);\n  aspect-ratio: 1;\n  object-fit: cover;\n  object-position: center;\n  position: absolute;\n  left: calc((100% - max(8vw, 80px)) / 2);\n  top: -2vw;\n}\n.menu_content .menu-option .caption {\n  width: 90%;\n  display: flex;\n  justify-content: space-around;\n}", "",{"version":3,"sources":["webpack://./src/styles/menu.scss"],"names":[],"mappings":"AAUA;EACI,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,gBAAA;EACA,YAAA;EACA,UAAA;AARJ;AASI;EACI,mBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;AAPR;AASI;EACI,YAAA;EACA,aAAA;EACA,uBAAA;EACA,wBAAA;EACA,YAAA;EACA,uBAAA;EA3BJ,aAAA;EACA,uBAAA;EACA,qBAAA;EA2BI,kBAAA;EACA,mBAAA;AALR;AAMQ;EACI,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,uCAAA;EACA,SAAA;AAJZ;AAMQ;EACI,UAAA;EACA,aAAA;EACA,6BAAA;AAJZ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&family=Space+Mono:wght@700&display=swap');\r\n\r\n@mixin border {\r\n    border: 1px solid red;\r\n}\r\n@mixin flexCenter {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n}\r\n.menu_content {\r\n    font-family: 'space mono';\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    padding-top: 8vh;\r\n    margin: auto;\r\n    width: 90%;\r\n    h2 {\r\n        font-family: 'lato';\r\n        width: 100%;\r\n        text-align: center;\r\n        font-size: 10vw;\r\n        color: azure;\r\n        margin: 5vw;\r\n    }\r\n    .menu-option {\r\n        margin: 10px ;\r\n        padding: 10px;\r\n        width: min(80vw, 300px);\r\n        height: min(40vw, 150px);\r\n        color: black;\r\n        background-color: white;\r\n        @include flexCenter();\r\n        position: relative;\r\n        border-radius: 20px;\r\n        img {\r\n            border-radius: 50%;\r\n            width: max(8vw, 80px);\r\n            aspect-ratio: 1;\r\n            object-fit: cover;\r\n            object-position: center;\r\n            position: absolute;\r\n            left: calc((100% - max(8vw, 80px)) / 2);\r\n            top: -2vw;\r\n        }\r\n        .caption {\r\n            width: 90%;\r\n            display: flex;\r\n            justify-content: space-around;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/contact.scss":
/*!*********************************!*\
  !*** ./src/styles/contact.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./contact.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/contact.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/menu.scss":
/*!******************************!*\
  !*** ./src/styles/menu.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./menu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/burger.jpg":
/*!*******************************!*\
  !*** ./src/images/burger.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d1a0ed21ef259658816.jpg";

/***/ }),

/***/ "./src/images/cookies&cream-parfait.png":
/*!**********************************************!*\
  !*** ./src/images/cookies&cream-parfait.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7f55d4a141cbde219b0.png";

/***/ }),

/***/ "./src/images/lava-cake.png":
/*!**********************************!*\
  !*** ./src/images/lava-cake.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c63dd3881eaa0cc4db9.png";

/***/ }),

/***/ "./src/images/shrimp-taco.jpg":
/*!************************************!*\
  !*** ./src/images/shrimp-taco.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5479369111b5486fe614.jpg";

/***/ }),

/***/ "./src/images/spaghetti.png":
/*!**********************************!*\
  !*** ./src/images/spaghetti.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fbf90fc6971b1264a1f.png";

/***/ }),

/***/ "./src/images/steak.png":
/*!******************************!*\
  !*** ./src/images/steak.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bbbd579609910ff730a5.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _images_burger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/burger.jpg */ "./src/images/burger.jpg");
/* harmony import */ var _styles_menu_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/menu.scss */ "./src/styles/menu.scss");
/* harmony import */ var _pages_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Menu */ "./src/pages/Menu.js");
/* harmony import */ var _images_shrimp_taco_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/shrimp-taco.jpg */ "./src/images/shrimp-taco.jpg");
/* harmony import */ var _images_spaghetti_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/spaghetti.png */ "./src/images/spaghetti.png");
/* harmony import */ var _images_steak_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/steak.png */ "./src/images/steak.png");
/* harmony import */ var _images_lava_cake_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/lava-cake.png */ "./src/images/lava-cake.png");
/* harmony import */ var _images_cookies_cream_parfait_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/cookies&cream-parfait.png */ "./src/images/cookies&cream-parfait.png");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");
/* harmony import */ var _styles_contact_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/contact.scss */ "./src/styles/contact.scss");












const homeBtn = document.querySelector('#home-btn');
(0,_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
let contentChildren = content.children;
homeBtn.addEventListener('click', () => {
  [...contentChildren].forEach(child => child.remove());
  (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
const button = document.querySelector('button');
const menuBtn = document.querySelector('#menu-btn');
button.addEventListener('click', showMenu);
menuBtn.addEventListener('click', showMenu);

function showMenu() {
  [...contentChildren].forEach(child => child.remove());
  (0,_pages_Menu__WEBPACK_IMPORTED_MODULE_4__["default"])(_images_burger_jpg__WEBPACK_IMPORTED_MODULE_2__, "burger");
  (0,_pages_Menu__WEBPACK_IMPORTED_MODULE_4__["default"])(_images_shrimp_taco_jpg__WEBPACK_IMPORTED_MODULE_5__, 'Shrimp Taco');
  (0,_pages_Menu__WEBPACK_IMPORTED_MODULE_4__["default"])(_images_spaghetti_png__WEBPACK_IMPORTED_MODULE_6__, "Spaghetti");
  (0,_pages_Menu__WEBPACK_IMPORTED_MODULE_4__["default"])(_images_steak_png__WEBPACK_IMPORTED_MODULE_7__, "Steak");
  (0,_pages_Menu__WEBPACK_IMPORTED_MODULE_4__["default"])(_images_lava_cake_png__WEBPACK_IMPORTED_MODULE_8__, 'Lava Cake');
  (0,_pages_Menu__WEBPACK_IMPORTED_MODULE_4__["default"])(_images_cookies_cream_parfait_png__WEBPACK_IMPORTED_MODULE_9__, "Cookies And Cream Parfait");
}

const contactBtn = document.querySelector('#contact-btn');
contactBtn.addEventListener('click', () => {
  [...contentChildren].forEach(child => child.remove());
  (0,_pages_contact__WEBPACK_IMPORTED_MODULE_10__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF1QixRQUF2QixDQUFmO0FBQ0EsTUFBTTBELE9BQU8sR0FBRzNELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFoQjtBQUVBNkMsTUFBTSxDQUFDaEIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUM4QixRQUFqQztBQUNBRCxPQUFPLENBQUM3QixnQkFBUixDQUF5QixPQUF6QixFQUFrQzhCLFFBQWxDOztBQUdBLFNBQVNBLFFBQVQsR0FBb0I7RUFDaEIsQ0FBQyxHQUFHTCxlQUFKLEVBQXFCQyxPQUFyQixDQUE2QkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLE1BQU4sRUFBdEM7RUFDQXRELHVEQUFhLENBQUM0QywrQ0FBRCxFQUFTLFFBQVQsQ0FBYjtFQUNBNUMsdURBQWEsQ0FBQzZDLG9EQUFELEVBQU8sYUFBUCxDQUFiO0VBQ0E3Qyx1REFBYSxDQUFDOEMsa0RBQUQsRUFBWSxXQUFaLENBQWI7RUFDQTlDLHVEQUFhLENBQUMrQyw4Q0FBRCxFQUFRLE9BQVIsQ0FBYjtFQUNBL0MsdURBQWEsQ0FBQ2dELGtEQUFELEVBQU8sV0FBUCxDQUFiO0VBQ0FoRCx1REFBYSxDQUFDaUQsOERBQUQsRUFBaUIsMkJBQWpCLENBQWI7QUFDSDs7QUFFRCxNQUFNUSxVQUFVLEdBQUc3RCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFFQTRELFVBQVUsQ0FBQy9CLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLE1BQUs7RUFDdEMsQ0FBQyxHQUFHeUIsZUFBSixFQUFxQkMsT0FBckIsQ0FBNkJDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxNQUFOLEVBQXRDO0VBQ0FoQywyREFBVTtBQUNiLENBSEQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9NZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvY29udGFjdC5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL21lbnUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvY29udGFjdC5zY3NzPzM3NWEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzRjMzciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9tZW51LnNjc3M/MzhmNCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbmxldCBoZWFkZXIgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWVudU9wdGlvbihwbGF0ZUltZyxwbGF0ZU5hbWUpIHtcclxuICAgIGJvZHkuY2xhc3NOYW1lID0gXCJtZW51XCI7XHJcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9IFwibWVudV9jb250ZW50XCI7XHJcbiAgICBpZiAoaGVhZGVyICUgNiA9PT0gMCkge1xyXG4gICAgICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIG1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyKys7XHJcbiAgICBjb25zdCBtZW51T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51T3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJtZW51LW9wdGlvblwiKTtcclxuICAgIG1lbnVPcHRpb24uc2V0QXR0cmlidXRlKCdpZCcscGxhdGVOYW1lKVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51T3B0aW9uKTtcclxuICAgIGNvbnN0IG15SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIG15SW1hZ2Uuc3JjID0gcGxhdGVJbWc7XHJcbiAgICBteUltYWdlLmNsYXNzTGlzdCA9IFwicGxhdGVcIjtcclxuICAgIG15SW1hZ2UuaWQgPSBwbGF0ZU5hbWU7XHJcbiAgICBteUltYWdlLmFsdCA9IGBBIHBpY3R1cmUgb2YgJHtwbGF0ZU5hbWV9YDtcclxuICAgIG1lbnVPcHRpb24uYXBwZW5kQ2hpbGQobXlJbWFnZSk7XHJcbiAgICBjb25zdCBjYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBsYXRlLmNsYXNzTmFtZSA9IFwicGxhdGVcIjtcclxuICAgIHBsYXRlLnRleHRDb250ZW50ID0gcGxhdGVOYW1lO1xyXG4gICAgcHJpY2UuY2xhc3NOYW1lID0gXCJwcmljZVwiO1xyXG4gICAgbGV0IG51bWJlciA9IDA7XHJcbiAgICBwcmljZS50ZXh0Q29udGVudCA9IDIwICsgXCIkXCIgO1xyXG4gICAgY2FwdGlvbi5jbGFzc05hbWUgPSAnY2FwdGlvbic7XHJcbiAgICBtZW51T3B0aW9uLmFwcGVuZENoaWxkKGNhcHRpb24pO1xyXG4gICAgY2FwdGlvbi5hcHBlbmRDaGlsZChwbGF0ZSk7XHJcbiAgICBjYXB0aW9uLmFwcGVuZENoaWxkKHByaWNlKTtcclxufVxyXG4iLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcblxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRDb250YWN0ICgpIHtcclxuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJjb250YWN0X2NvbnRlbnRcIjtcclxuICAgIGJvZHkuY2xhc3NOYW1lID0gXCJjb250YWN0XCI7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgaWYgKGZvcm0uY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY3JlYXRlTGFiZWwoXCJZb3VyIE5hbWU6XCIsIFwibmFtZVwiLCBcInRleHRcIik7XHJcbiAgICAgICAgY3JlYXRlTGFiZWwoXCJZb3VyIEVtYWlsOlwiLCBcImVtYWlsXCIsIFwiZW1haWxcIik7XHJcbiAgICAgICAgY3JlYXRlTGFiZWwoXCJZb3VyIE1lc3NhZ2U6XCIsIFwibWVzc2FnZVwiLCBcInRleHRhcmVhXCIpO1xyXG4gICAgICAgIGNyZWF0ZUxhYmVsKFwiXCIsIFwic3VibWl0LWJ0blwiLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSl9XHJcbiAgICBhZGRNYXAoKTtcclxufSBcclxuZnVuY3Rpb24gY3JlYXRlTGFiZWwgKGxhYmVsQ29udGVudCwgbGFiZWxGb3IsIGlucHV0VHlwZSkge1xyXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbENvbnRlbnQ7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGxhYmVsRm9yKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpOyBcclxuICAgIGxldCB0eXBlO1xyXG4gICAgaWYgKGlucHV0VHlwZSAhPT0gXCJ0ZXh0YXJlYVwiKSB0eXBlID0gXCJpbnB1dFwiO1xyXG4gICAgZWxzZSB0eXBlID0gXCJ0ZXh0YXJlYVwiO1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGBFbnRlciB5b3VyICR7bGFiZWxGb3J9YCApIDtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGlucHV0VHlwZSk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgbGFiZWxGb3IpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbn07XHJcbmZ1bmN0aW9uIGFkZE1hcCgpIHtcclxuICAgIGxldCBtYXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1hcERpdi5pZCA9IFwibWFwXCI7XHJcbiAgICBtYXBEaXYuaW5uZXJIVE1MID0gYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMzMwOS43MTIyOTgwODgzNzA1ITJkLTExOC4yNTI1NTk2ODQ5MTA2MSEzZDMzLjk0ODUyNzA4MDYzNDM0ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4MGMyYzc1ZGRjMjdkYTEzJTNBMHhlMjJmZGY2ZjI1NDYwOGY0ITJzTG9zJTIwQW5nZWxlcyUyQyUyMENBJTJDJTIwVVNBITVlMCEzbTIhMXNlbiEyc21hITR2MTY2MTY4NTQ3MDEyNiE1bTIhMXNlbiEyc21hXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIzMDBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPmBcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFwRGl2KTtcclxufSIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5jb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbmNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQWJvdXRVcyAoKSB7XHJcbiAgICBib2R5LmNsYXNzTmFtZSA9IFwiaG9tZVwiXHJcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9IFwiaG9tZV9jb250ZW50XCJcclxuICAgIGhlYWQudGV4dENvbnRlbnQgPSBcIlJlc3RhdXJhbnRcIjtcclxuICAgIHBhcmEudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEN1cmFiaXR1ciBkaWN0dW0gb2RpbyBxdWlzIG5lcXVlIHVsdHJpY2llcyBlbGVpZmVuZCBlZ2V0IGF0IGF1Z3VlLiBRdWlzcXVlIGNvbmRpbWVudHVtIGVsaXQgZXJhdCwgZXQgbG9ib3J0aXMgZG9sb3IgY29uZGltZW50dW0gYS4gRHVpcyBzZWQgdHJpc3RpcXVlIG5pc2wsIGluIGNvbnNlcXVhdCBsaWJlcm8uXCI7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnZ28gdG8gTWVudSc7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWN0X2NvbnRlbnQge1xcbiAgcGFkZGluZy10b3A6IDEwdmg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZmxvdzogcm93LXJldmVyc2Ugd3JhcDtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5jb250YWN0X2NvbnRlbnQgI21hcCB7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xcbn1cXG4uY29udGFjdF9jb250ZW50IGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG4uY29udGFjdF9jb250ZW50IGlucHV0LCAuY29udGFjdF9jb250ZW50IHRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLmNvbnRhY3RfY29udGVudCAjc3VibWl0LWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgMTQ2LCA2MSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5jb250YWN0X2NvbnRlbnQgI3N1Ym1pdC1idG46aG92ZXIge1xcbiAgZmlsdGVyOiBzYXR1cmF0ZSgxNTAlKTtcXG59XFxuLmNvbnRhY3RfY29udGVudCB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb250YWN0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0kseUJBQUE7QUFFUjtBQUFJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFFUjtBQUFJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFFUjtBQUFJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRVI7QUFEUTtFQUNJLHNCQUFBO0FBR1o7QUFBSTtFQUNJLFdBQUE7QUFFUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFjdF9jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwdmg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlIHdyYXA7XFxyXFxuICAgIHdpZHRoOiA3MCUgO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICNtYXAge1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCBibGFjaztcXHJcXG4gICAgfVxcclxcbiAgICBsYWJlbCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICBpbnB1dCwgdGV4dGFyZWEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB9XFxyXFxuICAgICNzdWJtaXQtYnRuIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCAxNDYsIDYxKTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGZpbHRlcjogc2F0dXJhdGUoMTUwJSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgdGV4dGFyZWEge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2ltZy5mcmVlcGlrLmNvbS9wcmVtaXVtLXBob3RvL3NldC1jb2xvcmVkLXNwaWNlcy1ib3dscy1oZXJicy1ibGFjay1zdG9uZS1iYWNrZ3JvdW5kLXZpZXctZnJvbS10b3Atdmlld18xODcxNjYtMjg1NDMuanBnP3c9MjAwMFxcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxJTtcXG4gIGhlaWdodDogOHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuaGVhZGVyICNsb2dvLCBoZWFkZXIgbGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5oZWFkZXIgI2xvZ28ge1xcbiAgZm9udC1zaXplOiBtaW4oNHZoLCAyNXB4KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbmhlYWRlciBsaSB7XFxuICB3aWR0aDogbWluKDE1dncsIDEyMHB4KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuaGVhZGVyIGxpOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg0Mik7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG9tZV9jb250ZW50IHtcXG4gIHBhZGRpbmctdG9wOiA4dmg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5ob21lX2NvbnRlbnQgaDEge1xcbiAgcGFkZGluZzogNHZoO1xcbn1cXG4uaG9tZV9jb250ZW50IHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBwYWRkaW5nOiAxdmg7XFxuICBmb250LXNpemU6IG1pbig1dncsIDE3cHgpO1xcbn1cXG4uaG9tZV9jb250ZW50IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA4cHggMjBweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uaG9tZV9jb250ZW50IGJ1dHRvbjpob3ZlciB7XFxuICBvdXRsaW5lOiAycHggc29saWQgcmdiKDYzLCA2MSwgNjEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyNSk7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFZQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFYSjs7QUFhQTtFQUNJLHVCQUFBO0VBQ0EsWUFUTztFQVVQLHVCQUFBO0VBQ0EsK0pBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQVZKOztBQWFBO0VBeEJJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBd0JBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFSSjtBQVNJO0VBQ0cscUJBQUE7QUFQUDtBQVNJO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQVBSO0FBU0k7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0FBUFI7QUFRUTtFQUNJLHVCQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQU5aOztBQVVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBeERBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBd0RBLHVCQUFBO0VBQ0Esc0JBQUE7QUFMSjtBQU1JO0VBQ0ksWUFBQTtBQUpSO0FBTUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUpSO0FBTUk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQUtRO0VBQ0ksa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSFpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIGJvcmRlciB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuQG1peGluIGZsZXhfYmV0d2VlbiB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4kaGVhZGVyQmc6IHJnYmEoMCwgMCwgMCwgMC44NDIpO1xcclxcbiRib2R5Qmc6IHJnYigzNCwgMzQsIDM0KTtcXHJcXG4kYm9keUZvbnQ6IHdoaXRlO1xcclxcbiRjb250ZW50OiByZ2IoODAsIDc5LCA3OSk7XFxyXFxuKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogJGJvZHlGb250O1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZiA7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vcHJlbWl1bS1waG90by9zZXQtY29sb3JlZC1zcGljZXMtYm93bHMtaGVyYnMtYmxhY2stc3RvbmUtYmFja2dyb3VuZC12aWV3LWZyb20tdG9wLXZpZXdfMTg3MTY2LTI4NTQzLmpwZz93PTIwMDAnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBAaW5jbHVkZSBmbGV4X2JldHdlZW4oKTtcXHJcXG4gICAgcGFkZGluZzogMSU7XFxyXFxuICAgIGhlaWdodDogOHZoO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgICAjbG9nbyAsbGkge1xcclxcbiAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgI2xvZ28ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiBtaW4oNHZoLCAyNXB4KTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgbGkge1xcclxcbiAgICAgICAgd2lkdGg6IG1pbigxNXZ3LCAxMjBweCk7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODQyKTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi5ob21lX2NvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nLXRvcDogOHZoO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBAaW5jbHVkZSBmbGV4X2JldHdlZW4oKTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDR2aDtcXHJcXG4gICAgfVxcclxcbiAgICBwIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMXZoO1xcclxcbiAgICAgICAgZm9udC1zaXplOiBtaW4oNXZ3LCAxN3B4KTtcXHJcXG4gICAgfVxcclxcbiAgICBidXR0b24ge1xcclxcbiAgICAgICAgcGFkZGluZzogOHB4IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoNjMsIDYxLCA2MSk7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyNSk7XFxyXFxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAOTAwJmZhbWlseT1TcGFjZStNb25vOndnaHRANzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tZW51X2NvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJzcGFjZSBtb25vXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogOHZoO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuLm1lbnVfY29udGVudCBoMiB7XFxuICBmb250LWZhbWlseTogXFxcImxhdG9cXFwiO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEwdnc7XFxuICBjb2xvcjogYXp1cmU7XFxuICBtYXJnaW46IDV2dztcXG59XFxuLm1lbnVfY29udGVudCAubWVudS1vcHRpb24ge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiBtaW4oODB2dywgMzAwcHgpO1xcbiAgaGVpZ2h0OiBtaW4oNDB2dywgMTUwcHgpO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4ubWVudV9jb250ZW50IC5tZW51LW9wdGlvbiBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IG1heCg4dncsIDgwcHgpO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IGNhbGMoKDEwMCUgLSBtYXgoOHZ3LCA4MHB4KSkgLyAyKTtcXG4gIHRvcDogLTJ2dztcXG59XFxuLm1lbnVfY29udGVudCAubWVudS1vcHRpb24gLmNhcHRpb24ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tZW51LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBVUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFSSjtBQVNJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFQUjtBQVNJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBM0JKLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBMkJJLGtCQUFBO0VBQ0EsbUJBQUE7QUFMUjtBQU1RO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFNBQUE7QUFKWjtBQU1RO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUpaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEA5MDAmZmFtaWx5PVNwYWNlK01vbm86d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuQG1peGluIGJvcmRlciB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuQG1peGluIGZsZXhDZW50ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG4ubWVudV9jb250ZW50IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdzcGFjZSBtb25vJztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDh2aDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoMiB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ2xhdG8nO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEwdnc7XFxyXFxuICAgICAgICBjb2xvcjogYXp1cmU7XFxyXFxuICAgICAgICBtYXJnaW46IDV2dztcXHJcXG4gICAgfVxcclxcbiAgICAubWVudS1vcHRpb24ge1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4IDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICB3aWR0aDogbWluKDgwdncsIDMwMHB4KTtcXHJcXG4gICAgICAgIGhlaWdodDogbWluKDQwdncsIDE1MHB4KTtcXHJcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiBtYXgoOHZ3LCA4MHB4KTtcXHJcXG4gICAgICAgICAgICBhc3BlY3QtcmF0aW86IDE7XFxyXFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IGNhbGMoKDEwMCUgLSBtYXgoOHZ3LCA4MHB4KSkgLyAyKTtcXHJcXG4gICAgICAgICAgICB0b3A6IC0ydnc7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2FwdGlvbiB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3Quc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3Quc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGFkZEFib3V0VXMgZnJvbSAnLi9wYWdlcy9ob21lJztcclxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcclxuaW1wb3J0IEJ1cmdlciBmcm9tICcuL2ltYWdlcy9idXJnZXIuanBnJztcclxuaW1wb3J0ICcuL3N0eWxlcy9tZW51LnNjc3MnXHJcbmltcG9ydCBhZGRNZW51T3B0aW9uIGZyb20gJy4vcGFnZXMvTWVudSc7XHJcbmltcG9ydCBUYWNvIGZyb20gJy4vaW1hZ2VzL3NocmltcC10YWNvLmpwZyc7XHJcbmltcG9ydCBzcGFnaGV0dGkgZnJvbSAnLi9pbWFnZXMvc3BhZ2hldHRpLnBuZyc7XHJcbmltcG9ydCBzdGVhayBmcm9tICcuL2ltYWdlcy9zdGVhay5wbmcnO1xyXG5pbXBvcnQgbGF2YSBmcm9tICcuL2ltYWdlcy9sYXZhLWNha2UucG5nJztcclxuaW1wb3J0IGNvb2tpZXNQYXJmYWl0IGZyb20gJy4vaW1hZ2VzL2Nvb2tpZXMmY3JlYW0tcGFyZmFpdC5wbmcnO1xyXG5pbXBvcnQgYWRkQ29udGFjdCBmcm9tICcuL3BhZ2VzL2NvbnRhY3QnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2NvbnRhY3Quc2Nzcyc7XHJcblxyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtYnRuJyk7XHJcblxyXG5hZGRBYm91dFVzKCk7XHJcblxyXG5sZXQgY29udGVudENoaWxkcmVuID0gY29udGVudC5jaGlsZHJlbjtcclxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIFsuLi5jb250ZW50Q2hpbGRyZW5dLmZvckVhY2goY2hpbGQgPT4gY2hpbGQucmVtb3ZlKCkpXHJcbiAgICBhZGRBYm91dFVzKCk7XHJcbn0pO1xyXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWJ0bicpO1xyXG5cclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01lbnUpO1xyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01lbnUpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dNZW51KCkge1xyXG4gICAgWy4uLmNvbnRlbnRDaGlsZHJlbl0uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5yZW1vdmUoKSlcclxuICAgIGFkZE1lbnVPcHRpb24oQnVyZ2VyLCBcImJ1cmdlclwiKTtcclxuICAgIGFkZE1lbnVPcHRpb24oVGFjbywgJ1NocmltcCBUYWNvJyk7XHJcbiAgICBhZGRNZW51T3B0aW9uKHNwYWdoZXR0aSwgXCJTcGFnaGV0dGlcIik7XHJcbiAgICBhZGRNZW51T3B0aW9uKHN0ZWFrLCBcIlN0ZWFrXCIpO1xyXG4gICAgYWRkTWVudU9wdGlvbihsYXZhLCAnTGF2YSBDYWtlJyk7XHJcbiAgICBhZGRNZW51T3B0aW9uKGNvb2tpZXNQYXJmYWl0LCBcIkNvb2tpZXMgQW5kIENyZWFtIFBhcmZhaXRcIilcclxufVxyXG5cclxuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0LWJ0bicpO1xyXG5cclxuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgWy4uLmNvbnRlbnRDaGlsZHJlbl0uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5yZW1vdmUoKSlcclxuICAgIGFkZENvbnRhY3QoKTtcclxufSlcclxuIl0sIm5hbWVzIjpbImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJib2R5IiwiaGVhZGVyIiwiYWRkTWVudU9wdGlvbiIsInBsYXRlSW1nIiwicGxhdGVOYW1lIiwiY2xhc3NOYW1lIiwibWVudUhlYWRlciIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwibWVudU9wdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsIm15SW1hZ2UiLCJJbWFnZSIsInNyYyIsImlkIiwiYWx0IiwiY2FwdGlvbiIsInBsYXRlIiwicHJpY2UiLCJudW1iZXIiLCJmb3JtIiwiYWRkQ29udGFjdCIsImNoaWxkcmVuIiwibGVuZ3RoIiwiY3JlYXRlTGFiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkTWFwIiwibGFiZWxDb250ZW50IiwibGFiZWxGb3IiLCJpbnB1dFR5cGUiLCJsYWJlbCIsInR5cGUiLCJpbnB1dCIsInJlcXVpcmVkIiwibWFwRGl2IiwiaW5uZXJIVE1MIiwiaGVhZCIsImltZyIsInBhcmEiLCJidXR0b24iLCJhZGRBYm91dFVzIiwiQnVyZ2VyIiwiVGFjbyIsInNwYWdoZXR0aSIsInN0ZWFrIiwibGF2YSIsImNvb2tpZXNQYXJmYWl0IiwiaG9tZUJ0biIsImNvbnRlbnRDaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsInJlbW92ZSIsIm1lbnVCdG4iLCJzaG93TWVudSIsImNvbnRhY3RCdG4iXSwic291cmNlUm9vdCI6IiJ9
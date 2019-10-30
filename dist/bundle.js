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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_entry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/entry */ "./src/entry.js");
/* harmony import */ var _src_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/functions */ "./src/functions.js");
/* harmony import */ var _src_syntax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/syntax */ "./src/syntax.js");
 // import { testVar, testLet, testConst } from './src/variables';



Object(_src_entry__WEBPACK_IMPORTED_MODULE_0__["app"])('JSCore'); // testVar();
// testLet();
// testConst();
// console.log('add: ', add(1, 2));
// console.log('multiply: ', multiply(1, 2));
// console.log('arrowAdd: ', arrowAdd(1, 2));
// console.log('arrowMultiply: ', arrowMultiply(1, 2));

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
let app = (name) => {
  console.log(`hello from ${name}`);
};


/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: add, multiply, arrowAdd, arrowMultiply, fabrique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrowAdd", function() { return arrowAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrowMultiply", function() { return arrowMultiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fabrique", function() { return fabrique; });
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

const arrowAdd = (a, b) => a + b;
const arrowMultiply = (a, b) => a * b;
const fabrique = (userName, age, sex) => ({
  userName: userName,
  age: age,
  sex: sex
});

const singleArg = arg => 'pre ' + arg;

const greetUser = user => {
  if (user) {
    console.log(`Greetings, ${user}`);

    return 'Handshake';
  } else {
    console.log(`Tell me your name first!`);
  }
};

// console.log('singleArg: ', singleArg(123));

// greetUser('Oleh');
// console.log(greetUser('Oleh'));

// greetUser();
// console.log(greetUser());

// console.log(fabrique('Oleh'));


/***/ }),

/***/ "./src/syntax.js":
/*!***********************!*\
  !*** ./src/syntax.js ***!
  \***********************/
/*! exports provided: shortFabrique, destructionArray, destructionObject, spreadOperator, restOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortFabrique", function() { return shortFabrique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destructionArray", function() { return destructionArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destructionObject", function() { return destructionObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spreadOperator", function() { return spreadOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restOperator", function() { return restOperator; });
const shortFabrique = (userName, age, sex) => ({ userName, age, sex });
const destructionArray = ([first, second, rest]) => {
  console.log('first: ', first);
  console.log('second: ', second);
  console.log('rest: ', rest);
};
const destructionObject = ({ name, age, sex }) => {
  console.log('name: ', name);
  console.log('age: ', age);
  console.log('sex: ', sex);
};

// console.log(shortFabrique('Oleh', 39, 'M'));
// destructionArray(['abc', 39, ['READ', 'WRITE', 'DELETE']]);
// destructionArray(['abc', 39]);
destructionObject({
  name: 'Oleh',
  age: 39,
  sex: 'M'
});
destructionObject({
  firstName: 'Oleh',
  lastName: 'Kazban',
  age: 39,
  sex: 'M'
});

// Spread & rest
const spreadOperator = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const restOperator = (userName, age, ...args) => {
  console.log('--- rest ---');
  console.log('userName: ', userName);
  console.log('age: ', age);
  console.log('args: ', args);
};

// restOperator(
//   'Oleh',
//   39,
//   'mail@box.com',
//   ['READ', 'WRITE', 'DELETE'],
//   ['USER', 'SYSTEM_USER']
// );
// restOperator('Oleh', 39);

const user = {
  firstName: 'Oleh',
  lastName: 'Kazban',
  age: 39,
  sex: 'M',
};
const system = {
  email: 'mail@box.com',
  authorities: ['READ', 'WRITE', 'DELETE'],
  roles: ['USER', 'SYSTEM_USER'],
};
const systemUser = spreadOperator(user, system);
const userCopy = { ...user };

// const checkRef = (obj1, obj2) => obj1 === obj2;

// console.log('userCopy: ', userCopy);
// console.log('checkRef: ', checkRef(user, userCopy));

// console.log('systemUser: ', systemUser);

let counter = {
  value: 3600,
  count: function () {
    setTimeout(function() {
      console.log(this);
    }, 1000);
  }
};
let counterArrow = {
  value: 3600,
  count: () => {
    setTimeout(() => {
      console.log(undefined);
    }, 1000);
  }
};

// counter.count();
// counterArrow.count();


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
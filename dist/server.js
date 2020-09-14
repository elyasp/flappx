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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/config/index.ts":
/*!************************************!*\
  !*** ./src/server/config/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\r\nexports.default = {\r\n    mysql: {\r\n        host: process.env.DB_HOST,\r\n        port: process.env.DB_PORT,\r\n        user: process.env.DB_USER,\r\n        database: process.env.DB_SCHEMA,\r\n        password: process.env.DB_PASSWORD,\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/config/index.ts?");

/***/ }),

/***/ "./src/server/db/bundles.ts":
/*!**********************************!*\
  !*** ./src/server/db/bundles.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.remove = exports.create = exports.all = void 0;\r\nconst index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\r\nexports.all = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    return new Promise((resolve, reject) => {\r\n        index_1.connection.query(\"SELECT * FROM package\", (error, result) => {\r\n            if (error) {\r\n                return reject(error);\r\n            }\r\n            resolve(result);\r\n        });\r\n    });\r\n});\r\nexports.create = (name, bundle, company, email, active, category) => __awaiter(void 0, void 0, void 0, function* () {\r\n    return new Promise((resolve, reject) => {\r\n        index_1.connection.query(`INSERT INTO package VALUES (\"${name}\", \"${bundle}\", \"${company}\", \"${email}\", ${active}, \"${category}\");`, (error, result) => {\r\n            if (error) {\r\n                return reject(error);\r\n            }\r\n            resolve(result);\r\n        });\r\n    });\r\n});\r\nexports.remove = (bundle) => __awaiter(void 0, void 0, void 0, function* () {\r\n    return new Promise((resolve, reject) => {\r\n        index_1.connection.query(`DELETE FROM package WHERE bundle=\"${bundle}\";`, (error, result) => {\r\n            if (error) {\r\n                return reject(error);\r\n            }\r\n            resolve(result);\r\n        });\r\n    });\r\n});\r\nexports.default = {\r\n    all: exports.all,\r\n    create: exports.create,\r\n    remove: exports.remove,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/bundles.ts?");

/***/ }),

/***/ "./src/server/db/index.ts":
/*!********************************!*\
  !*** ./src/server/db/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.connection = void 0;\r\nconst mysql = __webpack_require__(/*! mysql */ \"mysql\");\r\nconst config_1 = __webpack_require__(/*! ../config */ \"./src/server/config/index.ts\");\r\nconst bundles_1 = __webpack_require__(/*! ./bundles */ \"./src/server/db/bundles.ts\");\r\nconst initConnection = (config) => {\r\n    function addDisconnectHandler(connection) {\r\n        connection.on(\"error\", function (error) {\r\n            if (error) {\r\n                if (error.code === \"PROTOCOL_CONNECTION_LOST\") {\r\n                    console.error(error.stack);\r\n                    console.log(\"Lost connection. Reconnecting...\");\r\n                    initConnection(connection.config);\r\n                }\r\n                else if (error.fatal) {\r\n                    throw error;\r\n                }\r\n            }\r\n        });\r\n    }\r\n    exports.connection = mysql.createConnection(config);\r\n    addDisconnectHandler(exports.connection);\r\n    exports.connection.connect();\r\n    return exports.connection;\r\n};\r\nexports.connection = initConnection(config_1.default.mysql);\r\nexports.default = {\r\n    Bundles: bundles_1.default,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/index.ts?");

/***/ }),

/***/ "./src/server/routes.ts":
/*!******************************!*\
  !*** ./src/server/routes.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst express = __webpack_require__(/*! express */ \"express\");\r\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\nconst db_1 = __webpack_require__(/*! ./db */ \"./src/server/db/index.ts\");\r\nconst router = express.Router();\r\nconst urlencodedParser = bodyParser.urlencoded({ extended: true });\r\nrouter.use(bodyParser.json());\r\n// Get all bundles\r\nrouter.get(\"/bundles\", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        let bundles = yield db_1.default.Bundles.all();\r\n        res.json(bundles);\r\n    }\r\n    catch (error) {\r\n        console.log(error);\r\n        res.sendStatus(500);\r\n    }\r\n}));\r\n//Add a bundle\r\nrouter.post(\"/bundles/add\", urlencodedParser, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const { name, bundle, company, email, active, category } = req.body;\r\n    yield db_1.default.Bundles.create(name, bundle, company, email, active, category)\r\n        .then((x) => {\r\n        console.log(\"ADDED RESPONSE:>>>>>>>>>>>>>>\", x);\r\n        res.sendStatus(200);\r\n    })\r\n        .catch((error) => {\r\n        console.log(\"Error Adding to Database>>>>>>\", error);\r\n        res.sendStatus(500);\r\n    });\r\n}));\r\n// Delete a bundle\r\nrouter.post(\"/bundles/delete\", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {\r\n    console.log(\"ROUTE\", req.body);\r\n    const { bundle } = req.body;\r\n    yield db_1.default.Bundles.remove(bundle)\r\n        .then((x) => {\r\n        console.log(\"DELETED RESPONSE:>>>>>>>>>>>>>>\", x);\r\n        res.sendStatus(200);\r\n    })\r\n        .catch((error) => {\r\n        console.log(error);\r\n        res.sendStatus(500);\r\n    });\r\n}));\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst express = __webpack_require__(/*! express */ \"express\");\r\nconst routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes.ts\");\r\nconst app = express();\r\napp.use(express.static('public'));\r\napp.use(routes_1.default);\r\nconst port = process.env.PORT || 3000;\r\napp.listen(port, () => console.log(`Server listening on port: ${port}`));\r\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ })

/******/ });
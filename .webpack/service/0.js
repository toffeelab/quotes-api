exports.ids = [0];
exports.modules = {

/***/ "./src/api/v1/quote/index.js":
/*!***********************************!*\
  !*** ./src/api/v1/quote/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);


const router = express__WEBPACK_IMPORTED_MODULE_1___default.a.Router();
router.get('/test', (req, res, next) => {
  console.log('good');
  res.send('good');
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ })

};;
//# sourceMappingURL=0.js.map
webpackHotUpdate_N_E("pages/products",{

/***/ "./components/Products/ProductsListing.js":
/*!************************************************!*\
  !*** ./components/Products/ProductsListing.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductListing; });
/* harmony import */ var C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product */ "./components/Products/Product.js");



var _jsxFileName = "C:\\Users\\zak.ali\\Desktop\\ReactProjects\\Advanced-React\\sick-fits\\frontend\\components\\Products\\ProductsListing.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query ALL_PRODUCTS_QUERY {\n    allProducts {\n      id\n      name\n      description\n      status\n      price\n      photo {\n        id\n        altText\n        image {\n          id\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // Defined in Graphql playground

var ALL_PRODUCTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
function ProductListing() {
  _s();

  var _this = this;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(ALL_PRODUCTS_QUERY),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
    children: "Loading...."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
    children: ["Error: ", error]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 21
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: data.allProducts.map(function (product) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_4__["default"], {
        product: product
      }, product.id, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

_s(ProductListing, "eE+cqeCo2lkI//dPlCsO1rICVGU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
});

_c = ProductListing;

var _c;

$RefreshReg$(_c, "ProductListing");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0c0xpc3RpbmcuanMiXSwibmFtZXMiOlsiQUxMX1BST0RVQ1RTX1FVRVJZIiwiZ3FsIiwiUHJvZHVjdExpc3RpbmciLCJ1c2VRdWVyeSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJhbGxQcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFILG1CQUF4QjtBQW9CZSxTQUFTQyxjQUFULEdBQTBCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ05DLCtEQUFRLENBQUNILGtCQUFELENBREY7QUFBQSxNQUMvQkksSUFEK0IsYUFDL0JBLElBRCtCO0FBQUEsTUFDekJDLEtBRHlCLGFBQ3pCQSxLQUR5QjtBQUFBLE1BQ2xCQyxPQURrQixhQUNsQkEsT0FEa0I7O0FBR3ZDLE1BQUlBLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ2IsTUFBSUQsS0FBSixFQUFXLG9CQUFPO0FBQUEsMEJBQVdBLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFWCxzQkFDRTtBQUFBLGNBQ0dELElBQUksQ0FBQ0csV0FBTCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsT0FBRDtBQUFBLDBCQUNwQixxRUFBQyxnREFBRDtBQUEwQixlQUFPLEVBQUVBO0FBQW5DLFNBQWNBLE9BQU8sQ0FBQ0MsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURvQjtBQUFBLEtBQXJCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0dBYnVCUixjO1VBQ1dDLHVEOzs7S0FEWEQsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy5jZWUxM2QzNDI1N2Q0ODc2MWUxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xyXG5cclxuLy8gRGVmaW5lZCBpbiBHcmFwaHFsIHBsYXlncm91bmRcclxuY29uc3QgQUxMX1BST0RVQ1RTX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IEFMTF9QUk9EVUNUU19RVUVSWSB7XHJcbiAgICBhbGxQcm9kdWN0cyB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgc3RhdHVzXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGFsdFRleHRcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0TGlzdGluZygpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShBTExfUFJPRFVDVFNfUVVFUlkpO1xyXG5cclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yfTwvcD47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7ZGF0YS5hbGxQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICA8UHJvZHVjdCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
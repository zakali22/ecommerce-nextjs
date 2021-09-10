webpackHotUpdate_N_E("pages/products",{

/***/ "./components/Products/Product.js":
/*!****************************************!*\
  !*** ./components/Products/Product.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/ItemStyles */ "./components/styles/ItemStyles.js");
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/PriceTag */ "./components/styles/PriceTag.js");
/* harmony import */ var _lib_formatPrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/formatPrice */ "./lib/formatPrice.js");

var _jsxFileName = "C:\\Users\\zak.ali\\Desktop\\ReactProjects\\Advanced-React\\sick-fits\\frontend\\components\\Products\\Product.js";

/* eslint-disable jsx-a11y/img-redundant-alt */





function Product(_ref) {
  var _product$photo, _product$photo$image, _product$photo2;

  var product = _ref.product;
  console.log(product);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/product/".concat(product.id),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : (_product$photo$image = _product$photo.image) === null || _product$photo$image === void 0 ? void 0 : _product$photo$image.publicUrlTransformed,
        alt: product === null || product === void 0 ? void 0 : (_product$photo2 = product.photo) === null || _product$photo2 === void 0 ? void 0 : _product$photo2.altText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: Object(_lib_formatPrice__WEBPACK_IMPORTED_MODULE_5__["default"])(product === null || product === void 0 ? void 0 : product.price)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: product === null || product === void 0 ? void 0 : product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
_c = Product;
Product.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var _c;

$RefreshReg$(_c, "Product");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwiY29uc29sZSIsImxvZyIsImlkIiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwiYWx0VGV4dCIsImZvcm1hdFByaWNlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUMzQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQSxzQkFDRSxxRUFBQyxnREFBRDtBQUFNLFFBQUkscUJBQWNBLE9BQU8sQ0FBQ0csRUFBdEIsQ0FBVjtBQUFBLDJCQUNFLHFFQUFDLDBEQUFEO0FBQUEsOEJBQ0U7QUFDRSxXQUFHLEVBQUVILE9BQUYsYUFBRUEsT0FBRix5Q0FBRUEsT0FBTyxDQUFFSSxLQUFYLDJFQUFFLGVBQWdCQyxLQUFsQix5REFBRSxxQkFBdUJDLG9CQUQ5QjtBQUVFLFdBQUcsRUFBRU4sT0FBRixhQUFFQSxPQUFGLDBDQUFFQSxPQUFPLENBQUVJLEtBQVgsb0RBQUUsZ0JBQWdCRztBQUZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRSxxRUFBQyx3REFBRDtBQUFBLGtCQUFXQyxnRUFBVyxDQUFDUixPQUFELGFBQUNBLE9BQUQsdUJBQUNBLE9BQU8sQ0FBRVMsS0FBVjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFBLGtCQUFJVCxPQUFKLGFBQUlBLE9BQUosdUJBQUlBLE9BQU8sQ0FBRVU7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7S0FkdUJYLE87QUFnQnhCQSxPQUFPLENBQUNZLFNBQVIsR0FBb0I7QUFDbEJYLFNBQU8sRUFBRVksaURBQVMsQ0FBQ0M7QUFERCxDQUFwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy44YjMwNDYxYmY1MDMzZWQwZDYyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvaW1nLXJlZHVuZGFudC1hbHQgKi9cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEl0ZW1TdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0l0ZW1TdHlsZXMnO1xyXG5pbXBvcnQgUHJpY2VUYWcgZnJvbSAnLi4vc3R5bGVzL1ByaWNlVGFnJztcclxuaW1wb3J0IGZvcm1hdFByaWNlIGZyb20gJy4uLy4uL2xpYi9mb3JtYXRQcmljZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0KHsgcHJvZHVjdCB9KSB7XHJcbiAgY29uc29sZS5sb2cocHJvZHVjdCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+XHJcbiAgICAgIDxJdGVtU3R5bGVzPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17cHJvZHVjdD8ucGhvdG8/LmltYWdlPy5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICAgIGFsdD17cHJvZHVjdD8ucGhvdG8/LmFsdFRleHR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UHJpY2VUYWc+e2Zvcm1hdFByaWNlKHByb2R1Y3Q/LnByaWNlKX08L1ByaWNlVGFnPlxyXG4gICAgICAgIDxwPntwcm9kdWN0Py5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvSXRlbVN0eWxlcz5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcblxyXG5Qcm9kdWN0LnByb3BUeXBlcyA9IHtcclxuICBwcm9kdWN0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
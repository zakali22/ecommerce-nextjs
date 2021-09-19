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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ItemStyles */ "./components/styles/ItemStyles.js");
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/PriceTag */ "./components/styles/PriceTag.js");
/* harmony import */ var _lib_formatPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/formatPrice */ "./lib/formatPrice.js");
/* harmony import */ var _DeleteProduct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeleteProduct */ "./components/Products/DeleteProduct.js");

var _jsxFileName = "C:\\Users\\zak.ali\\Desktop\\ReactProjects\\Advanced-React\\sick-fits\\frontend\\components\\Products\\Product.js";

/* eslint-disable jsx-a11y/img-redundant-alt */







var ItemTitleStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h2.withConfig({
  displayName: "Product__ItemTitleStyle",
  componentId: "sc-17r63tk-0"
})(["background:var(--red);font-size:3.5rem;text-align:center;align-self:center;padding:1rem;color:white;position:absolute;margin:0;bottom:89px;transform:skewX(-6deg) rotate(-1deg);"]);
_c = ItemTitleStyle;
function Product(_ref) {
  var _product$photo, _product$photo$image, _product$photo2;

  var product = _ref.product;
  console.log(product);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/product/".concat(product.id),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : (_product$photo$image = _product$photo.image) === null || _product$photo$image === void 0 ? void 0 : _product$photo$image.publicUrlTransformed,
        alt: product === null || product === void 0 ? void 0 : (_product$photo2 = product.photo) === null || _product$photo2 === void 0 ? void 0 : _product$photo2.altText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: Object(_lib_formatPrice__WEBPACK_IMPORTED_MODULE_6__["default"])(product === null || product === void 0 ? void 0 : product.price)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ItemTitleStyle, {
        children: product === null || product === void 0 ? void 0 : product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: product === null || product === void 0 ? void 0 : product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "buttonList",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: {
            pathname: 'update',
            query: {
              id: product === null || product === void 0 ? void 0 : product.id
            }
          },
          children: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DeleteProduct__WEBPACK_IMPORTED_MODULE_7__["default"], {
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
_c2 = Product;
Product.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var _c, _c2;

$RefreshReg$(_c, "ItemTitleStyle");
$RefreshReg$(_c2, "Product");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkl0ZW1UaXRsZVN0eWxlIiwic3R5bGVkIiwiaDIiLCJQcm9kdWN0IiwicHJvZHVjdCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsImFsdFRleHQiLCJmb3JtYXRQcmljZSIsInByaWNlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicGF0aG5hbWUiLCJxdWVyeSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLHdMQUFwQjtLQUFNRixjO0FBZVMsU0FBU0csT0FBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUMzQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQSxzQkFDRSxxRUFBQyxnREFBRDtBQUFNLFFBQUkscUJBQWNBLE9BQU8sQ0FBQ0csRUFBdEIsQ0FBVjtBQUFBLDJCQUNFLHFFQUFDLDBEQUFEO0FBQUEsOEJBQ0U7QUFDRSxXQUFHLEVBQUVILE9BQUYsYUFBRUEsT0FBRix5Q0FBRUEsT0FBTyxDQUFFSSxLQUFYLDJFQUFFLGVBQWdCQyxLQUFsQix5REFBRSxxQkFBdUJDLG9CQUQ5QjtBQUVFLFdBQUcsRUFBRU4sT0FBRixhQUFFQSxPQUFGLDBDQUFFQSxPQUFPLENBQUVJLEtBQVgsb0RBQUUsZ0JBQWdCRztBQUZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRSxxRUFBQyx3REFBRDtBQUFBLGtCQUFXQyxnRUFBVyxDQUFDUixPQUFELGFBQUNBLE9BQUQsdUJBQUNBLE9BQU8sQ0FBRVMsS0FBVjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRSxxRUFBQyxjQUFEO0FBQUEsa0JBQWlCVCxPQUFqQixhQUFpQkEsT0FBakIsdUJBQWlCQSxPQUFPLENBQUVVO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FO0FBQUEsa0JBQUlWLE9BQUosYUFBSUEsT0FBSix1QkFBSUEsT0FBTyxDQUFFVztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVFFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxjQUFJLEVBQUU7QUFDSkMsb0JBQVEsRUFBRSxRQUROO0FBRUpDLGlCQUFLLEVBQUU7QUFDTFYsZ0JBQUUsRUFBRUgsT0FBRixhQUFFQSxPQUFGLHVCQUFFQSxPQUFPLENBQUVHO0FBRFI7QUFGSCxXQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBV0UscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEJEO01BNUJ1QkosTztBQThCeEJBLE9BQU8sQ0FBQ2UsU0FBUixHQUFvQjtBQUNsQmQsU0FBTyxFQUFFZSxpREFBUyxDQUFDQztBQURELENBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzLjJkY2E0MjM2MGU2OWNhZTQ0OTgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9pbWctcmVkdW5kYW50LWFsdCAqL1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEl0ZW1TdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0l0ZW1TdHlsZXMnO1xyXG5pbXBvcnQgUHJpY2VUYWcgZnJvbSAnLi4vc3R5bGVzL1ByaWNlVGFnJztcclxuaW1wb3J0IGZvcm1hdFByaWNlIGZyb20gJy4uLy4uL2xpYi9mb3JtYXRQcmljZSc7XHJcbmltcG9ydCBEZWxldGVQcm9kdWN0IGZyb20gJy4vRGVsZXRlUHJvZHVjdCc7XHJcblxyXG5jb25zdCBJdGVtVGl0bGVTdHlsZSA9IHN0eWxlZC5oMmBcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xyXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3R0b206IDg5cHg7XHJcbiAgdHJhbnNmb3JtOiBza2V3WCgtNmRlZykgcm90YXRlKC0xZGVnKTtcclxuICAvKiB0ZXh0LXNoYWRvdzogMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTsgKi9cclxuICAvKiBib3gtc2hhZG93OiAwcHggNnB4IDE0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43KTsgKi9cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3QoeyBwcm9kdWN0IH0pIHtcclxuICBjb25zb2xlLmxvZyhwcm9kdWN0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT5cclxuICAgICAgPEl0ZW1TdHlsZXM+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtwcm9kdWN0Py5waG90bz8uaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG4gICAgICAgICAgYWx0PXtwcm9kdWN0Py5waG90bz8uYWx0VGV4dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxQcmljZVRhZz57Zm9ybWF0UHJpY2UocHJvZHVjdD8ucHJpY2UpfTwvUHJpY2VUYWc+XHJcbiAgICAgICAgPEl0ZW1UaXRsZVN0eWxlPntwcm9kdWN0Py5uYW1lfTwvSXRlbVRpdGxlU3R5bGU+XHJcbiAgICAgICAgPHA+e3Byb2R1Y3Q/LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkxpc3RcIj5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICBwYXRobmFtZTogJ3VwZGF0ZScsXHJcbiAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBwcm9kdWN0Py5pZCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8RGVsZXRlUHJvZHVjdD5EZWxldGU8L0RlbGV0ZVByb2R1Y3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvSXRlbVN0eWxlcz5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcblxyXG5Qcm9kdWN0LnByb3BUeXBlcyA9IHtcclxuICBwcm9kdWN0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
webpackHotUpdate_N_E("pages/update",{

/***/ "./components/EditForm.tsx":
/*!*********************************!*\
  !*** ./components/EditForm.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditForm; });
/* harmony import */ var C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _Products_UpdateProduct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Products/UpdateProduct */ "./components/Products/UpdateProduct.js");
/* harmony import */ var _Products_SingleProduct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Products/SingleProduct */ "./components/Products/SingleProduct.js");






var _jsxFileName = "C:\\Users\\zak.ali\\Desktop\\ReactProjects\\Advanced-React\\sick-fits\\frontend\\components\\EditForm.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable import/no-cycle */







function EditForm(_ref) {
  _s();

  var _ref$product = _ref.product,
      id = _ref$product.id,
      name = _ref$product.name,
      description = _ref$product.description,
      price = _ref$product.price,
      status = _ref$product.status,
      photo = _ref$product.photo;

  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_8__["default"])({
    name: name,
    description: description,
    price: price,
    status: status,
    image: photo
  }),
      inputs = _useForm.inputs,
      handleInputChange = _useForm.handleInputChange,
      clearForm = _useForm.clearForm,
      resetForm = _useForm.resetForm;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(_Products_UpdateProduct__WEBPACK_IMPORTED_MODULE_10__["UPDATE_PRODUCT_MUTATION"], {
    variables: _objectSpread({
      id: id
    }, inputs),
    refetchQueries: [{
      query: _Products_SingleProduct__WEBPACK_IMPORTED_MODULE_11__["PRODUCT_QUERY"],
      variables: {
        id: id
      }
    }]
  }),
      _useMutation2 = Object(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMutation, 2),
      updateProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = Object(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var _res$data, _res$data$updateProdu;

        var res;
        return C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return updateProduct();

              case 3:
                res = _context.sent;
                console.log(res.data);
                next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push({
                  pathname: "/product/".concat((_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$updateProdu = _res$data.updateProduct) === null || _res$data$updateProdu === void 0 ? void 0 : _res$data$updateProdu.id)
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("fieldset", {
      "aria-busy": loading,
      disabled: loading,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          id: "name",
          name: "name",
          type: "text",
          value: inputs.name,
          placeholder: "Enter name of product",
          onChange: function onChange(e) {
            return handleInputChange(e);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "price",
        children: ["Price", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          id: "price",
          name: "price",
          type: "number",
          value: inputs.price,
          placeholder: "Enter price of product",
          onChange: function onChange(e) {
            return handleInputChange(e);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "description",
        children: ["Description", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("textarea", {
          id: "description",
          name: "description",
          value: inputs.description,
          placeholder: "Enter description of product",
          onChange: function onChange(e) {
            return handleInputChange(e);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        htmlFor: "description",
        children: ["Status", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("select", {
          id: "status",
          name: "status",
          onChange: function onChange(e) {
            return handleInputChange(e);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
            value: "AVAILABLE",
            children: "Available"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
            value: "IN_PROGRESS",
            children: "In progress"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
            value: "UNAVAILABLE",
            children: "Unavailable"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "submit",
        children: "Update product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "button",
        onClick: clearForm,
        children: "Clear form"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "button",
        onClick: resetForm,
        children: "Reset form"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

_s(EditForm, "nxgchdpYIMPqdd9Cqrc/MOCERac=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_8__["default"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"]];
});

_c = EditForm;
EditForm.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
};

var _c;

$RefreshReg$(_c, "EditForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0Rm9ybS50c3giXSwibmFtZXMiOlsiRWRpdEZvcm0iLCJwcm9kdWN0IiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInN0YXR1cyIsInBob3RvIiwidXNlRm9ybSIsImltYWdlIiwiaW5wdXRzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJ1c2VNdXRhdGlvbiIsIlVQREFURV9QUk9EVUNUX01VVEFUSU9OIiwidmFyaWFibGVzIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIlBST0RVQ1RfUVVFUlkiLCJ1cGRhdGVQcm9kdWN0IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsT0FFWjtBQUFBOztBQUFBLDBCQUREQyxPQUNDO0FBQUEsTUFEVUMsRUFDVixnQkFEVUEsRUFDVjtBQUFBLE1BRGNDLElBQ2QsZ0JBRGNBLElBQ2Q7QUFBQSxNQURvQkMsV0FDcEIsZ0JBRG9CQSxXQUNwQjtBQUFBLE1BRGlDQyxLQUNqQyxnQkFEaUNBLEtBQ2pDO0FBQUEsTUFEd0NDLE1BQ3hDLGdCQUR3Q0EsTUFDeEM7QUFBQSxNQURnREMsS0FDaEQsZ0JBRGdEQSxLQUNoRDs7QUFBQSxpQkFDMkRDLDREQUFPLENBQUM7QUFDbEVMLFFBQUksRUFBSkEsSUFEa0U7QUFFbEVDLGVBQVcsRUFBWEEsV0FGa0U7QUFHbEVDLFNBQUssRUFBTEEsS0FIa0U7QUFJbEVDLFVBQU0sRUFBTkEsTUFKa0U7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QyxRQURMO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxrQkFBUSxFQUFFLGtCQUFDQSxDQUFEO0FBQUEsbUJBQU9iLGlCQUFpQixDQUFDYSxDQUFELENBQXhCO0FBQUEsV0FIWjtBQUFBLGtDQUtFO0FBQVEsaUJBQUssRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLGVBTUU7QUFBUSxpQkFBSyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkYsZUFPRTtBQUFRLGlCQUFLLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0NGLGVBdURFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2REYsZUF3REU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUVaLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeERGLGVBMkRFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFQyxTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0RUQ7O0dBekd1QmIsUTtVQUdzQ1Esb0QsRUFRVk0sMEQ7OztLQVg1QmQsUTtBQTJHeEJBLFFBQVEsQ0FBQ2dDLFNBQVQsR0FBcUI7QUFDbkIvQixTQUFPLEVBQUVnQyxpREFBUyxDQUFDQztBQURBLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VwZGF0ZS43MGIxMWMzMjc4Zjc2MTIxMGMzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xyXG5pbXBvcnQgeyBVUERBVEVfUFJPRFVDVF9NVVRBVElPTiB9IGZyb20gJy4vUHJvZHVjdHMvVXBkYXRlUHJvZHVjdCc7XHJcbmltcG9ydCB7IFBST0RVQ1RfUVVFUlkgfSBmcm9tICcuL1Byb2R1Y3RzL1NpbmdsZVByb2R1Y3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdEZvcm0oe1xyXG4gIHByb2R1Y3Q6IHsgaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgc3RhdHVzLCBwaG90byB9LFxyXG59KSB7XHJcbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUlucHV0Q2hhbmdlLCBjbGVhckZvcm0sIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcbiAgICBuYW1lLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBwcmljZSxcclxuICAgIHN0YXR1cyxcclxuICAgIGltYWdlOiBwaG90byxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3VwZGF0ZVByb2R1Y3QsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihcclxuICAgIFVQREFURV9QUk9EVUNUX01VVEFUSU9OLFxyXG4gICAge1xyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICBpZCxcclxuICAgICAgICAuLi5pbnB1dHMsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcXVlcnk6IFBST0RVQ1RfUVVFUlksXHJcbiAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtXHJcbiAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB1cGRhdGVQcm9kdWN0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIHBhdGhuYW1lOiBgL3Byb2R1Y3QvJHtyZXMuZGF0YT8udXBkYXRlUHJvZHVjdD8uaWR9YCxcclxuICAgICAgICB9KTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGZpZWxkc2V0IGFyaWEtYnVzeT17bG9hZGluZ30gZGlzYWJsZWQ9e2xvYWRpbmd9PlxyXG4gICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+XHJcbiAgICAgICAgICBJbWFnZVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+ICovfVxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxyXG4gICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZSBvZiBwcm9kdWN0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+XHJcbiAgICAgICAgICBQcmljZVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwicHJpY2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wcmljZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwcmljZSBvZiBwcm9kdWN0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGRlc2NyaXB0aW9uIG9mIHByb2R1Y3RcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIFN0YXR1c1xyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBpZD1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQVZBSUxBQkxFXCI+QXZhaWxhYmxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJTl9QUk9HUkVTU1wiPkluIHByb2dyZXNzPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVTkFWQUlMQUJMRVwiPlVuYXZhaWxhYmxlPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlVwZGF0ZSBwcm9kdWN0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2xlYXJGb3JtfT5cclxuICAgICAgICAgIENsZWFyIGZvcm1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtyZXNldEZvcm19PlxyXG4gICAgICAgICAgUmVzZXQgZm9ybVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbkVkaXRGb3JtLnByb3BUeXBlcyA9IHtcclxuICBwcm9kdWN0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
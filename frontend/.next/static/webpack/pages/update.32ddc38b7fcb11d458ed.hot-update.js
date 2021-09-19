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
/* harmony import */ var C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _Products_UpdateProduct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Products/UpdateProduct */ "./components/Products/UpdateProduct.js");
/* harmony import */ var _Products_SingleProduct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Products/SingleProduct */ "./components/Products/SingleProduct.js");





var _jsxFileName = "C:\\Users\\zak.ali\\Desktop\\ReactProjects\\Advanced-React\\sick-fits\\frontend\\components\\EditForm.tsx",
    _s = $RefreshSig$();

/* eslint-disable import/no-cycle */





function EditForm(_ref) {
  _s();

  var _ref$product = _ref.product,
      name = _ref$product.name,
      description = _ref$product.description,
      price = _ref$product.price,
      status = _ref$product.status;

  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_5__["default"])({
    name: name,
    description: description,
    price: price,
    status: status // image: publicUrlTransformed,

  }),
      inputs = _useForm.inputs,
      handleInputChange = _useForm.handleInputChange,
      clearForm = _useForm.clearForm,
      resetForm = _useForm.resetForm;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_Products_UpdateProduct__WEBPACK_IMPORTED_MODULE_7__["UPDATE_PRODUCT_MUTATION"], {
    variables: inputs,
    refetchQueries: [{
      query: _Products_SingleProduct__WEBPACK_IMPORTED_MODULE_8__["PRODUCT_QUERY"],
      variables: {
        id: data === null || data === void 0 ? void 0 : data.updateProduct.id
      }
    }]
  }),
      _useMutation2 = Object(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 2),
      updateProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = Object(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        return C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return updateProduct();

              case 3:
                console.log(data);

              case 4:
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("fieldset", {
      "aria-busy": loading,
      disabled: loading,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
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
          lineNumber: 58,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        htmlFor: "price",
        children: ["Price", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
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
          lineNumber: 69,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        htmlFor: "description",
        children: ["Description", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("textarea", {
          id: "description",
          name: "description",
          value: inputs.description,
          placeholder: "Enter description of product",
          onChange: function onChange(e) {
            return handleInputChange(e);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        htmlFor: "description",
        children: ["Status", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("select", {
          id: "status",
          name: "status",
          onChange: function onChange(e) {
            return handleInputChange(e);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
            value: "AVAILABLE",
            children: "Available"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
            value: "IN_PROGRESS",
            children: "In progress"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("option", {
            value: "UNAVAILABLE",
            children: "Unavailable"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        type: "submit",
        children: "Update product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        type: "submit",
        onClick: clearForm,
        children: "Clear form"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        type: "submit",
        onClick: resetForm,
        children: "Reset form"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

_s(EditForm, "nxgchdpYIMPqdd9Cqrc/MOCERac=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_5__["default"], _apollo_client__WEBPACK_IMPORTED_MODULE_4__["useMutation"]];
});

_c = EditForm;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0Rm9ybS50c3giXSwibmFtZXMiOlsiRWRpdEZvcm0iLCJwcm9kdWN0IiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJzdGF0dXMiLCJ1c2VGb3JtIiwiaW5wdXRzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJ1c2VNdXRhdGlvbiIsIlVQREFURV9QUk9EVUNUX01VVEFUSU9OIiwidmFyaWFibGVzIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIlBST0RVQ1RfUVVFUlkiLCJpZCIsImRhdGEiLCJ1cGRhdGVQcm9kdWN0IiwibG9hZGluZyIsImVycm9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsT0FFWjtBQUFBOztBQUFBLDBCQUREQyxPQUNDO0FBQUEsTUFEVUMsSUFDVixnQkFEVUEsSUFDVjtBQUFBLE1BRGdCQyxXQUNoQixnQkFEZ0JBLFdBQ2hCO0FBQUEsTUFENkJDLEtBQzdCLGdCQUQ2QkEsS0FDN0I7QUFBQSxNQURvQ0MsTUFDcEMsZ0JBRG9DQSxNQUNwQzs7QUFBQSxpQkFDMkRDLDREQUFPLENBQUM7QUFDbEVKLFFBQUksRUFBSkEsSUFEa0U7QUFFbEVDLGVBQVcsRUFBWEEsV0FGa0U7QUFHbEVDLFNBQUssRUFBTEEsS0FIa0U7QUFJbEVDLFVBQU0sRUFBTkEsTUFKa0UsQ0FLbEU7O0FBTGtFLEdBQUQsQ0FEbEU7QUFBQSxNQUNPRSxNQURQLFlBQ09BLE1BRFA7QUFBQSxNQUNlQyxpQkFEZixZQUNlQSxpQkFEZjtBQUFBLE1BQ2tDQyxTQURsQyxZQUNrQ0EsU0FEbEM7QUFBQSxNQUM2Q0MsU0FEN0MsWUFDNkNBLFNBRDdDOztBQUFBLHFCQVNpREMsa0VBQVcs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QTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0NGLGVBdURFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2REYsZUF3REU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUViLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeERGLGVBMkRFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFQyxTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5RUQ7O0dBbkd1QlYsUTtVQUdzQ00sb0QsRUFRVkssMEQ7OztLQVg1QlgsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91cGRhdGUuMzJkZGMzOGI3ZmNiMTFkNDU4ZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJztcclxuaW1wb3J0IHsgVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04gfSBmcm9tICcuL1Byb2R1Y3RzL1VwZGF0ZVByb2R1Y3QnO1xyXG5pbXBvcnQgeyBQUk9EVUNUX1FVRVJZIH0gZnJvbSAnLi9Qcm9kdWN0cy9TaW5nbGVQcm9kdWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRGb3JtKHtcclxuICBwcm9kdWN0OiB7IG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgc3RhdHVzIH0sXHJcbn0pIHtcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlSW5wdXRDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuICAgIG5hbWUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIHByaWNlLFxyXG4gICAgc3RhdHVzLFxyXG4gICAgLy8gaW1hZ2U6IHB1YmxpY1VybFRyYW5zZm9ybWVkLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbdXBkYXRlUHJvZHVjdCwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKFxyXG4gICAgVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04sXHJcbiAgICB7XHJcbiAgICAgIHZhcmlhYmxlczogaW5wdXRzLFxyXG4gICAgICByZWZldGNoUXVlcmllczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHF1ZXJ5OiBQUk9EVUNUX1FVRVJZLFxyXG4gICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgIGlkOiBkYXRhPy51cGRhdGVQcm9kdWN0LmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVxyXG4gICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYXdhaXQgdXBkYXRlUHJvZHVjdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZmllbGRzZXQgYXJpYS1idXN5PXtsb2FkaW5nfSBkaXNhYmxlZD17bG9hZGluZ30+XHJcbiAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5cclxuICAgICAgICAgIEltYWdlXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD4gKi99XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XHJcbiAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBuYW1lIG9mIHByb2R1Y3RcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cclxuICAgICAgICAgIFByaWNlXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJwcmljZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnByaWNlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHByaWNlIG9mIHByb2R1Y3RcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIERlc2NyaXB0aW9uXHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZGVzY3JpcHRpb24gb2YgcHJvZHVjdFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgU3RhdHVzXHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIGlkPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBVkFJTEFCTEVcIj5BdmFpbGFibGU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklOX1BST0dSRVNTXCI+SW4gcHJvZ3Jlc3M8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVOQVZBSUxBQkxFXCI+VW5hdmFpbGFibGU8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBkYXRlIHByb2R1Y3Q8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtjbGVhckZvcm19PlxyXG4gICAgICAgICAgQ2xlYXIgZm9ybVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3Jlc2V0Rm9ybX0+XHJcbiAgICAgICAgICBSZXNldCBmb3JtXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
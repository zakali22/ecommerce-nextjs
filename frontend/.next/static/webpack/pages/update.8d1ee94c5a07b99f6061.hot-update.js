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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _Products_UpdateProduct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Products/UpdateProduct */ "./components/Products/UpdateProduct.js");
/* harmony import */ var _Products_SingleProduct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Products/SingleProduct */ "./components/Products/SingleProduct.js");






var _jsxFileName = "C:\\Users\\zak.ali\\Desktop\\ReactProjects\\Advanced-React\\sick-fits\\frontend\\components\\EditForm.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable import/no-cycle */






function EditForm(_ref) {
  _s();

  var _photo$image;

  var _ref$product = _ref.product,
      id = _ref$product.id,
      name = _ref$product.name,
      description = _ref$product.description,
      price = _ref$product.price,
      status = _ref$product.status,
      photo = _ref$product.photo;

  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"])({
    name: name,
    description: description,
    price: price,
    status: status,
    image: photo === null || photo === void 0 ? void 0 : (_photo$image = photo.image) === null || _photo$image === void 0 ? void 0 : _photo$image.publicUrlTransformed
  }),
      inputs = _useForm.inputs,
      handleInputChange = _useForm.handleInputChange,
      clearForm = _useForm.clearForm,
      resetForm = _useForm.resetForm;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(_Products_UpdateProduct__WEBPACK_IMPORTED_MODULE_9__["UPDATE_PRODUCT_MUTATION"], {
    variables: _objectSpread({
      id: id
    }, inputs),
    refetchQueries: [{
      query: _Products_SingleProduct__WEBPACK_IMPORTED_MODULE_10__["PRODUCT_QUERY"],
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

  console.log(photo);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = Object(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        return C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                console.log(inputs.image); // const res = await updateProduct();
                // console.log(res.data);
                // Router.push({
                //   pathname: `/product/${res.data?.updateProduct?.id}`,
                // });

              case 2:
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
          lineNumber: 67,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
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
          lineNumber: 78,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
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
          lineNumber: 89,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
            lineNumber: 104,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
            value: "IN_PROGRESS",
            children: "In progress"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
            value: "UNAVAILABLE",
            children: "Unavailable"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "submit",
        children: "Update product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "button",
        onClick: clearForm,
        children: "Clear form"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "button",
        onClick: resetForm,
        children: "Reset form"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

_s(EditForm, "nxgchdpYIMPqdd9Cqrc/MOCERac=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"]];
});

_c = EditForm;
EditForm.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
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

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
false,

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
false,

/***/ "./node_modules/next/dist/client/route-loader.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0Rm9ybS50c3giXSwibmFtZXMiOlsiRWRpdEZvcm0iLCJwcm9kdWN0IiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInN0YXR1cyIsInBob3RvIiwidXNlRm9ybSIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJpbnB1dHMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImNsZWFyRm9ybSIsInJlc2V0Rm9ybSIsInVzZU11dGF0aW9uIiwiVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04iLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiUFJPRFVDVF9RVUVSWSIsInVwZGF0ZVByb2R1Y3QiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULE9BRVo7QUFBQTs7QUFBQTs7QUFBQSwwQkFEREMsT0FDQztBQUFBLE1BRFVDLEVBQ1YsZ0JBRFVBLEVBQ1Y7QUFBQSxNQURjQyxJQUNkLGdCQURjQSxJQUNkO0FBQUEsTUFEb0JDLFdBQ3BCLGdCQURvQkEsV0FDcEI7QUFBQSxNQURpQ0MsS0FDakMsZ0JBRGlDQSxLQUNqQztBQUFBLE1BRHdDQyxNQUN4QyxnQkFEd0NBLE1BQ3hDO0FBQUEsTUFEZ0RDLEtBQ2hELGdCQURnREEsS0FDaEQ7O0FBQUEsaUJBQzJEQyw0REFBTyxDQUFDO0FBQ2xFTCxRQUFJLEVBQUpBLElBRGtFO0FBRWxFQyxlQUFXLEVBQVhBLFdBRmtFO0FBR2xFQyxTQUFLLEVBQUxBLEtBSGtFO0FBSWxFQyxVQUFNLEVBQU5BLE1BSmtFO0FBS2xFRyxTQUFL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ZixpQkFBaUIsQ0FBQ2UsQ0FBRCxDQUF4QjtBQUFBLFdBSFo7QUFBQSxrQ0FLRTtBQUFRLGlCQUFLLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixlQU1FO0FBQVEsaUJBQUssRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GLGVBT0U7QUFBUSxpQkFBSyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNDRixlQXVERTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkRGLGVBd0RFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFZCxTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhERixlQTJERTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRUMsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkVEOztHQTVHdUJkLFE7VUFHc0NRLG9ELEVBUVZPLDBEOzs7S0FYNUJmLFE7QUE4R3hCQSxRQUFRLENBQUM2QixTQUFULEdBQXFCO0FBQ25CNUIsU0FBTyxFQUFFNkIsaURBQVMsQ0FBQ0M7QUFEQSxDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91cGRhdGUuOGQxZWU5NGM1YTA3Yjk5ZjYwNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJztcclxuaW1wb3J0IHsgVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04gfSBmcm9tICcuL1Byb2R1Y3RzL1VwZGF0ZVByb2R1Y3QnO1xyXG5pbXBvcnQgeyBQUk9EVUNUX1FVRVJZIH0gZnJvbSAnLi9Qcm9kdWN0cy9TaW5nbGVQcm9kdWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRGb3JtKHtcclxuICBwcm9kdWN0OiB7IGlkLCBuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIHN0YXR1cywgcGhvdG8gfSxcclxufSkge1xyXG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVJbnB1dENoYW5nZSwgY2xlYXJGb3JtLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xyXG4gICAgbmFtZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgcHJpY2UsXHJcbiAgICBzdGF0dXMsXHJcbiAgICBpbWFnZTogcGhvdG8/LmltYWdlPy5wdWJsaWNVcmxUcmFuc2Zvcm1lZCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3VwZGF0ZVByb2R1Y3QsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihcclxuICAgIFVQREFURV9QUk9EVUNUX01VVEFUSU9OLFxyXG4gICAge1xyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICBpZCxcclxuICAgICAgICAuLi5pbnB1dHMsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcXVlcnk6IFBST0RVQ1RfUVVFUlksXHJcbiAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc29sZS5sb2cocGhvdG8pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0cy5pbWFnZSk7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgdXBkYXRlUHJvZHVjdCgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAvLyBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgLy8gICBwYXRobmFtZTogYC9wcm9kdWN0LyR7cmVzLmRhdGE/LnVwZGF0ZVByb2R1Y3Q/LmlkfWAsXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxmaWVsZHNldCBhcmlhLWJ1c3k9e2xvYWRpbmd9IGRpc2FibGVkPXtsb2FkaW5nfT5cclxuICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgSW1hZ2VcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBpZD1cImltYWdlXCJcclxuICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPiAqL31cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgIE5hbWVcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG5hbWUgb2YgcHJvZHVjdFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlxyXG4gICAgICAgICAgUHJpY2VcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJpY2Ugb2YgcHJvZHVjdFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgRGVzY3JpcHRpb25cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBkZXNjcmlwdGlvbiBvZiBwcm9kdWN0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICBTdGF0dXNcclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgaWQ9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFWQUlMQUJMRVwiPkF2YWlsYWJsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSU5fUFJPR1JFU1NcIj5JbiBwcm9ncmVzczwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVU5BVkFJTEFCTEVcIj5VbmF2YWlsYWJsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5VcGRhdGUgcHJvZHVjdDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2NsZWFyRm9ybX0+XHJcbiAgICAgICAgICBDbGVhciBmb3JtXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cmVzZXRGb3JtfT5cclxuICAgICAgICAgIFJlc2V0IGZvcm1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9maWVsZHNldD5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcblxyXG5FZGl0Rm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdDogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/update",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useForm; });
/* harmony import */ var C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function useForm() {
  _s();

  var initialFormState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialFormState),
      inputs = _useState[0],
      setInputs = _useState[1];

  var inputValues = Object.values(inputs).join(''); // useEffect(() => {
  //   setInputs(initialFormState);
  // }, [inputValues]);

  function handleInputChange(e) {
    var _e$target = e.target,
        value = _e$target.value,
        name = _e$target.name,
        type = _e$target.type;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      var _e$target$files = Object(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target.files, 1);

      value = _e$target$files[0];
      console.log(value);
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value)));
  }

  function clearForm() {
    var blankFormState = Object.fromEntries(Object.entries(inputs).map(function (_ref) {
      var _ref2 = Object(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return [key, ''];
    }));
    setInputs(blankFormState);
  }

  function resetForm() {
    setInputs(initialFormState);
    console.log(inputs);
  }

  return {
    inputs: inputs,
    handleInputChange: handleInputChange,
    clearForm: clearForm,
    resetForm: resetForm
  };
}

_s(useForm, "OALdClW77x2CFOd+Dq+b/M7NHsw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanMiXSwibmFtZXMiOlsidXNlRm9ybSIsImluaXRpYWxGb3JtU3RhdGUiLCJ1c2VTdGF0ZSIsImlucHV0cyIsInNldElucHV0cyIsImlucHV0VmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiam9pbiIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInR5cGUiLCJwYXJzZUludCIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsImNsZWFyRm9ybSIsImJsYW5rRm9ybVN0YXRlIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwicmVzZXRGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULEdBQXdDO0FBQUE7O0FBQUEsTUFBdkJDLGdCQUF1Qix1RUFBSixFQUFJOztBQUFBLGtCQUN6QkMsc0RBQVEsQ0FBQ0QsZ0JBQUQsQ0FEaUI7QUFBQSxNQUM5Q0UsTUFEOEM7QUFBQSxNQUN0Q0MsU0FEc0M7O0FBRXJELE1BQU1DLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNKLE1BQWQsRUFBc0JLLElBQXRCLENBQTJCLEVBQTNCLENBQXBCLENBRnFELENBSXJEO0FBQ0E7QUFDQTs7QUFFQSxXQUFTQyxpQkFBVCxDQUEyQkMsQ0FBM0IsRUFBOEI7QUFBQSxvQkFDQUEsQ0FBQyxDQUFDQyxNQURGO0FBQUEsUUFDdEJDLEtBRHNCLGFBQ3RCQSxLQURzQjtBQUFBLFFBQ2ZDLElBRGUsYUFDZkEsSUFEZTtBQUFBLFFBQ1RDLElBRFMsYUFDVEEsSUFEUzs7QUFHNUIsUUFBSUEsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDckJGLFdBQUssR0FBR0csUUFBUSxDQUFDSCxLQUFELENBQWhCO0FBQ0Q7O0FBRUQsUUFBSUUsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFBQSwyTkFDVEosQ0FBQyxDQUFDQyxNQUFGLENBQVNLLEtBREE7O0FBQ2xCSixXQURrQjtBQUVuQkssYUFBTyxDQUFDQyxHQUFSLENBQVlOLEtBQVo7QUFDRDs7QUFFRFIsYUFBUyxpQ0FDSkQsTUFESSwyTUFFTlUsSUFGTSxFQUVDRCxLQUZELEdBQVQ7QUFJRDs7QUFFRCxXQUFTTyxTQUFULEdBQXFCO0FBQ25CLFFBQU1DLGNBQWMsR0FBR2QsTUFBTSxDQUFDZSxXQUFQLENBQ3JCZixNQUFNLENBQUNnQixPQUFQLENBQWVuQixNQUFmLEVBQXVCb0IsR0FBdkIsQ0FBMkI7QUFBQTtBQUFBLFVBQUVDLEdBQUY7QUFBQSxVQUFPWixLQUFQOztBQUFBLGFBQWtCLENBQUNZLEdBQUQsRUFBTSxFQUFOLENBQWxCO0FBQUEsS0FBM0IsQ0FEcUIsQ0FBdkI7QUFJQXBCLGFBQVMsQ0FBQ2dCLGNBQUQsQ0FBVDtBQUNEOztBQUVELFdBQVNLLFNBQVQsR0FBcUI7QUFDbkJyQixhQUFTLENBQUNILGdCQUFELENBQVQ7QUFDQWdCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZixNQUFaO0FBQ0Q7O0FBRUQsU0FBTztBQUNMQSxVQUFNLEVBQU5BLE1BREs7QUFFTE0scUJBQWlCLEVBQWpCQSxpQkFGSztBQUdMVSxhQUFTLEVBQVRBLFNBSEs7QUFJTE0sYUFBUyxFQUFUQTtBQUpLLEdBQVA7QUFNRDs7R0E3Q3VCekIsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91cGRhdGUuOGExMTExMDgzODdkNTAwMGU0MWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JtKGluaXRpYWxGb3JtU3RhdGUgPSB7fSkge1xyXG4gIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZShpbml0aWFsRm9ybVN0YXRlKTtcclxuICBjb25zdCBpbnB1dFZhbHVlcyA9IE9iamVjdC52YWx1ZXMoaW5wdXRzKS5qb2luKCcnKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIHNldElucHV0cyhpbml0aWFsRm9ybVN0YXRlKTtcclxuICAvLyB9LCBbaW5wdXRWYWx1ZXNdKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xyXG4gICAgbGV0IHsgdmFsdWUsIG5hbWUsIHR5cGUgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xyXG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ2ZpbGUnKSB7XHJcbiAgICAgIFt2YWx1ZV0gPSBlLnRhcmdldC5maWxlcztcclxuICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElucHV0cyh7XHJcbiAgICAgIC4uLmlucHV0cyxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xyXG4gICAgY29uc3QgYmxhbmtGb3JtU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKGlucHV0cykubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksICcnXSlcclxuICAgICk7XHJcblxyXG4gICAgc2V0SW5wdXRzKGJsYW5rRm9ybVN0YXRlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIHNldElucHV0cyhpbml0aWFsRm9ybVN0YXRlKTtcclxuICAgIGNvbnNvbGUubG9nKGlucHV0cyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5wdXRzLFxyXG4gICAgaGFuZGxlSW5wdXRDaGFuZ2UsXHJcbiAgICBjbGVhckZvcm0sXHJcbiAgICByZXNldEZvcm0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
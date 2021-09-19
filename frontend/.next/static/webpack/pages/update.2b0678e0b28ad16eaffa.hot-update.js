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

  var inputValues = Object.values(inputs);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setInputs(initialFormState);
  }, [inputValues]);

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

_s(useForm, "5oyh4PqCUb09AFE5OtkF0KgMW9M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanMiXSwibmFtZXMiOlsidXNlRm9ybSIsImluaXRpYWxGb3JtU3RhdGUiLCJ1c2VTdGF0ZSIsImlucHV0cyIsInNldElucHV0cyIsImlucHV0VmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwidXNlRWZmZWN0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwidHlwZSIsInBhcnNlSW50IiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJGb3JtIiwiYmxhbmtGb3JtU3RhdGUiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJyZXNldEZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE9BQVQsR0FBd0M7QUFBQTs7QUFBQSxNQUF2QkMsZ0JBQXVCLHVFQUFKLEVBQUk7O0FBQUEsa0JBQ3pCQyxzREFBUSxDQUFDRCxnQkFBRCxDQURpQjtBQUFBLE1BQzlDRSxNQUQ4QztBQUFBLE1BQ3RDQyxTQURzQzs7QUFFckQsTUFBTUMsV0FBVyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0osTUFBZCxDQUFwQjtBQUVBSyx5REFBUyxDQUFDLFlBQU07QUFDZEosYUFBUyxDQUFDSCxnQkFBRCxDQUFUO0FBQ0QsR0FGUSxFQUVOLENBQUNJLFdBQUQsQ0FGTSxDQUFUOztBQUlBLFdBQVNJLGlCQUFULENBQTJCQyxDQUEzQixFQUE4QjtBQUFBLG9CQUNBQSxDQUFDLENBQUNDLE1BREY7QUFBQSxRQUN0QkMsS0FEc0IsYUFDdEJBLEtBRHNCO0FBQUEsUUFDZkMsSUFEZSxhQUNmQSxJQURlO0FBQUEsUUFDVEMsSUFEUyxhQUNUQSxJQURTOztBQUc1QixRQUFJQSxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQkYsV0FBSyxHQUFHRyxRQUFRLENBQUNILEtBQUQsQ0FBaEI7QUFDRDs7QUFFRCxRQUFJRSxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUFBLDJOQUNUSixDQUFDLENBQUNDLE1BQUYsQ0FBU0ssS0FEQTs7QUFDbEJKLFdBRGtCO0FBRW5CSyxhQUFPLENBQUNDLEdBQVIsQ0FBWU4sS0FBWjtBQUNEOztBQUVEUixhQUFTLGlDQUNKRCxNQURJLDJNQUVOVSxJQUZNLEVBRUNELEtBRkQsR0FBVDtBQUlEOztBQUVELFdBQVNPLFNBQVQsR0FBcUI7QUFDbkIsUUFBTUMsY0FBYyxHQUFHZCxNQUFNLENBQUNlLFdBQVAsQ0FDckJmLE1BQU0sQ0FBQ2dCLE9BQVAsQ0FBZW5CLE1BQWYsRUFBdUJvQixHQUF2QixDQUEyQjtBQUFBO0FBQUEsVUFBRUMsR0FBRjtBQUFBLFVBQU9aLEtBQVA7O0FBQUEsYUFBa0IsQ0FBQ1ksR0FBRCxFQUFNLEVBQU4sQ0FBbEI7QUFBQSxLQUEzQixDQURxQixDQUF2QjtBQUlBcEIsYUFBUyxDQUFDZ0IsY0FBRCxDQUFUO0FBQ0Q7O0FBRUQsV0FBU0ssU0FBVCxHQUFxQjtBQUNuQnJCLGFBQVMsQ0FBQ0gsZ0JBQUQsQ0FBVDtBQUNBZ0IsV0FBTyxDQUFDQyxHQUFSLENBQVlmLE1BQVo7QUFDRDs7QUFFRCxTQUFPO0FBQ0xBLFVBQU0sRUFBTkEsTUFESztBQUVMTSxxQkFBaUIsRUFBakJBLGlCQUZLO0FBR0xVLGFBQVMsRUFBVEEsU0FISztBQUlMTSxhQUFTLEVBQVRBO0FBSkssR0FBUDtBQU1EOztHQTdDdUJ6QixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VwZGF0ZS4yYjA2NzhlMGIyOGFkMTZlYWZmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm0oaW5pdGlhbEZvcm1TdGF0ZSA9IHt9KSB7XHJcbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKGluaXRpYWxGb3JtU3RhdGUpO1xyXG4gIGNvbnN0IGlucHV0VmFsdWVzID0gT2JqZWN0LnZhbHVlcyhpbnB1dHMpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW5wdXRzKGluaXRpYWxGb3JtU3RhdGUpO1xyXG4gIH0sIFtpbnB1dFZhbHVlc10pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShlKSB7XHJcbiAgICBsZXQgeyB2YWx1ZSwgbmFtZSwgdHlwZSB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSAnZmlsZScpIHtcclxuICAgICAgW3ZhbHVlXSA9IGUudGFyZ2V0LmZpbGVzO1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5wdXRzKHtcclxuICAgICAgLi4uaW5wdXRzLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhckZvcm0oKSB7XHJcbiAgICBjb25zdCBibGFua0Zvcm1TdGF0ZSA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgICAgT2JqZWN0LmVudHJpZXMoaW5wdXRzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleSwgJyddKVxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRJbnB1dHMoYmxhbmtGb3JtU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gICAgc2V0SW5wdXRzKGluaXRpYWxGb3JtU3RhdGUpO1xyXG4gICAgY29uc29sZS5sb2coaW5wdXRzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbnB1dHMsXHJcbiAgICBoYW5kbGVJbnB1dENoYW5nZSxcclxuICAgIGNsZWFyRm9ybSxcclxuICAgIHJlc2V0Rm9ybSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
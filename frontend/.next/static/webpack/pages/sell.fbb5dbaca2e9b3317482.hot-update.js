webpackHotUpdate_N_E("pages/sell",{

/***/ "./components/Products/DeleteProduct.js":
/*!**********************************************!*\
  !*** ./components/Products/DeleteProduct.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeleteProduct; });
/* harmony import */ var C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\zak.ali\\Desktop\\ReactProjects\\Advanced-React\\sick-fits\\frontend\\components\\Products\\DeleteProduct.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation DELETE_PRODUCT_MUTATION($id: ID!) {\n    deleteProduct(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // import { ALL_PRODUCTS_QUERY } from './ProductsListing';

var DELETE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
function DeleteProduct(_ref) {
  _s();

  var id = _ref.id,
      children = _ref.children;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(DELETE_PRODUCT_MUTATION, {
    variables: {
      id: id
    },
    //   refetchQueries: [{ query: ALL_PRODUCTS_QUERY }], /* One way of refreshing the UI */
    update: function update(cache, payload) {
      cache.evict(cache.identify(payload.data.deleteProduct));
    }
  }),
      _useMutation2 = Object(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      deleteProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
    type: "button",
    onClick: function onClick(e) {
      e.stopPropagation();
      deleteProduct();
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push({
        pathname: '/products'
      });
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

_s(DeleteProduct, "UKtVPfUn7knxyGC0UBRlZieyfpk=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useMutation"]];
});

_c = DeleteProduct;
DeleteProduct.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};

var _c;

$RefreshReg$(_c, "DeleteProduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy9EZWxldGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkRFTEVURV9QUk9EVUNUX01VVEFUSU9OIiwiZ3FsIiwiRGVsZXRlUHJvZHVjdCIsImlkIiwiY2hpbGRyZW4iLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsInVwZGF0ZSIsImNhY2hlIiwicGF5bG9hZCIsImV2aWN0IiwiaWRlbnRpZnkiLCJkYXRhIiwiZGVsZXRlUHJvZHVjdCIsImxvYWRpbmciLCJlcnJvciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSx1QkFBdUIsR0FBR0Msa0RBQUgsbUJBQTdCO0FBUWUsU0FBU0MsYUFBVCxPQUF5QztBQUFBOztBQUFBLE1BQWhCQyxFQUFnQixRQUFoQkEsRUFBZ0I7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEscUJBQ0pDLGtFQUFXLENBQzNETCx1QkFEMkQsRUFFM0Q7QUFDRU0sYUFBUyxFQUFFO0FBQ1RILFFBQUUsRUFBRkE7QUFEUyxLQURiO0FBSUU7QUFDQUksVUFMRixrQkFLU0MsS0FMVCxFQUtnQkMsT0FMaEIsRUFLeUI7QUFDckJELFdBQUssQ0FBQ0UsS0FBTixDQUFZRixLQUFLLENBQUNHLFFBQU4sQ0FBZUYsT0FBTyxDQUFDRyxJQUFSLENBQWFDLGFBQTVCLENBQVo7QUFDRDtBQVBILEdBRjJELENBRFA7QUFBQTtBQUFBLE1BQy9DQSxhQUQrQztBQUFBO0FBQUEsTUFDOUJELElBRDhCLGtCQUM5QkEsSUFEOEI7QUFBQSxNQUN4QkUsT0FEd0Isa0JBQ3hCQSxPQUR3QjtBQUFBLE1BQ2ZDLEtBRGUsa0JBQ2ZBLEtBRGU7O0FBY3RELHNCQUNFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxXQUFPLEVBQUUsaUJBQUNDLENBQUQsRUFBTztBQUNkQSxPQUFDLENBQUNDLGVBQUY7QUFDQUosbUJBQWE7QUFDYkssd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1ZDLGdCQUFRLEVBQUU7QUFEQSxPQUFaO0FBR0QsS0FSSDtBQUFBLGNBVUdoQjtBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztHQTVCdUJGLGE7VUFDNEJHLDBEOzs7S0FENUJILGE7QUE4QnhCQSxhQUFhLENBQUNtQixTQUFkLEdBQTBCO0FBQ3hCbEIsSUFBRSxFQUFFbUIsaURBQVMsQ0FBQ0MsTUFEVTtBQUV4Qm5CLFVBQVEsRUFBRWtCLGlEQUFTLENBQUNFO0FBRkksQ0FBMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VsbC5mYmI1ZGJhY2EyZTliMzMxNzQ4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuLy8gaW1wb3J0IHsgQUxMX1BST0RVQ1RTX1FVRVJZIH0gZnJvbSAnLi9Qcm9kdWN0c0xpc3RpbmcnO1xyXG5cclxuY29uc3QgREVMRVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gREVMRVRFX1BST0RVQ1RfTVVUQVRJT04oJGlkOiBJRCEpIHtcclxuICAgIGRlbGV0ZVByb2R1Y3QoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZVByb2R1Y3QoeyBpZCwgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtkZWxldGVQcm9kdWN0LCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oXHJcbiAgICBERUxFVEVfUFJPRFVDVF9NVVRBVElPTixcclxuICAgIHtcclxuICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBBTExfUFJPRFVDVFNfUVVFUlkgfV0sIC8qIE9uZSB3YXkgb2YgcmVmcmVzaGluZyB0aGUgVUkgKi9cclxuICAgICAgdXBkYXRlKGNhY2hlLCBwYXlsb2FkKSB7XHJcbiAgICAgICAgY2FjaGUuZXZpY3QoY2FjaGUuaWRlbnRpZnkocGF5bG9hZC5kYXRhLmRlbGV0ZVByb2R1Y3QpKTtcclxuICAgICAgfSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGRlbGV0ZVByb2R1Y3QoKTtcclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBwYXRobmFtZTogJy9wcm9kdWN0cycsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn1cclxuXHJcbkRlbGV0ZVByb2R1Y3QucHJvcFR5cGVzID0ge1xyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
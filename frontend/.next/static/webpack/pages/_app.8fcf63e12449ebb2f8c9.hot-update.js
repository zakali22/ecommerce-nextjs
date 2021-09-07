webpackHotUpdate_N_E("pages/_app",{

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint, prodEndpoint, perPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prodEndpoint", function() { return prodEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPage", function() { return perPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:3000/api/graphql";
var prodEndpoint = "fill me in when we deploy";
var perPage = 4;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/link-error */ "./node_modules/@apollo/link-error/lib/bundle.esm.js");
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/react/ssr */ "./node_modules/@apollo/client/react/ssr/index.js");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-upload-client */ "./node_modules/apollo-upload-client/public/index.mjs");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");







function createClient(_ref) {
  var headers = _ref.headers,
      initialState = _ref.initialState;
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    link: _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].from([Object(_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__["onError"])(function (_ref2) {
      var graphQLErrors = _ref2.graphQLErrors,
          networkError = _ref2.networkError;
      if (graphQLErrors) graphQLErrors.forEach(function (_ref3) {
        var message = _ref3.message,
            locations = _ref3.locations,
            path = _ref3.path;
        return console.log("[GraphQL error]: Message: ".concat(message, ", Location: ").concat(locations, ", Path: ").concat(path));
      });
      if (networkError) console.log("[Network error]: ".concat(networkError, ". Backend is unreachable. Is it running?"));
    }), // this uses apollo-link-http under the hood, so all the options here come from that package
    Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__["createUploadLink"])({
      uri: true ? _config__WEBPACK_IMPORTED_MODULE_5__["endpoint"] : undefined,
      fetchOptions: {
        credentials: 'include'
      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers: headers
    })]),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]({
      typePolicies: {
        Query: {
          fields: {// TODO: We will add this together!
            // allProducts: paginationField(),
          }
        }
      }
    }).restore(initialState || {})
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default()(createClient, {
  getDataFromTree: _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__["getDataFromTree"]
}));

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

/***/ "./node_modules/@apollo/client/react/ssr/RenderPromises.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/react/ssr/RenderPromises.js ***!
  \*****************************************************************/
/*! exports provided: RenderPromises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPromises", function() { return RenderPromises; });
function makeDefaultQueryInfo() {
    return {
        seen: false,
        observable: null
    };
}
var RenderPromises = (function () {
    function RenderPromises() {
        this.queryPromises = new Map();
        this.queryInfoTrie = new Map();
    }
    RenderPromises.prototype.registerSSRObservable = function (observable, props) {
        this.lookupQueryInfo(props).observable = observable;
    };
    RenderPromises.prototype.getSSRObservable = function (props) {
        return this.lookupQueryInfo(props).observable;
    };
    RenderPromises.prototype.addQueryPromise = function (queryInstance, finish) {
        var info = this.lookupQueryInfo(queryInstance.getOptions());
        if (!info.seen) {
            this.queryPromises.set(queryInstance.getOptions(), new Promise(function (resolve) {
                resolve(queryInstance.fetchData());
            }));
            return null;
        }
        return finish();
    };
    RenderPromises.prototype.hasPromises = function () {
        return this.queryPromises.size > 0;
    };
    RenderPromises.prototype.consumeAndAwaitPromises = function () {
        var _this = this;
        var promises = [];
        this.queryPromises.forEach(function (promise, queryInstance) {
            _this.lookupQueryInfo(queryInstance).seen = true;
            promises.push(promise);
        });
        this.queryPromises.clear();
        return Promise.all(promises);
    };
    RenderPromises.prototype.lookupQueryInfo = function (props) {
        var queryInfoTrie = this.queryInfoTrie;
        var query = props.query, variables = props.variables;
        var varMap = queryInfoTrie.get(query) || new Map();
        if (!queryInfoTrie.has(query))
            queryInfoTrie.set(query, varMap);
        var variablesString = JSON.stringify(variables);
        var info = varMap.get(variablesString) || makeDefaultQueryInfo();
        if (!varMap.has(variablesString))
            varMap.set(variablesString, info);
        return info;
    };
    return RenderPromises;
}());

//# sourceMappingURL=RenderPromises.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/ssr/getDataFromTree.js":
/*!******************************************************************!*\
  !*** ./node_modules/@apollo/client/react/ssr/getDataFromTree.js ***!
  \******************************************************************/
/*! exports provided: getDataFromTree, getMarkupFromTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataFromTree", function() { return getDataFromTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupFromTree", function() { return getMarkupFromTree; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/index.js */ "./node_modules/@apollo/client/react/context/index.js");
/* harmony import */ var _RenderPromises_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RenderPromises.js */ "./node_modules/@apollo/client/react/ssr/RenderPromises.js");




function getDataFromTree(tree, context) {
    if (context === void 0) { context = {}; }
    return getMarkupFromTree({
        tree: tree,
        context: context,
        renderFunction: __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js").renderToStaticMarkup
    });
}
function getMarkupFromTree(_a) {
    var tree = _a.tree, _b = _a.context, context = _b === void 0 ? {} : _b, _c = _a.renderFunction, renderFunction = _c === void 0 ? __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js").renderToStaticMarkup : _c;
    var renderPromises = new _RenderPromises_js__WEBPACK_IMPORTED_MODULE_3__["RenderPromises"]();
    function process() {
        var ApolloContext = Object(_context_index_js__WEBPACK_IMPORTED_MODULE_2__["getApolloContext"])();
        return new Promise(function (resolve) {
            var element = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ApolloContext.Provider, { value: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { renderPromises: renderPromises }) }, tree);
            resolve(renderFunction(element));
        }).then(function (html) {
            return renderPromises.hasPromises()
                ? renderPromises.consumeAndAwaitPromises().then(process)
                : html;
        });
    }
    return Promise.resolve().then(process);
}
//# sourceMappingURL=getDataFromTree.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/ssr/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/react/ssr/index.js ***!
  \********************************************************/
/*! exports provided: getMarkupFromTree, getDataFromTree, renderToStringWithData, RenderPromises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDataFromTree.js */ "./node_modules/@apollo/client/react/ssr/getDataFromTree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMarkupFromTree", function() { return _getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupFromTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDataFromTree", function() { return _getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__["getDataFromTree"]; });

/* harmony import */ var _renderToStringWithData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderToStringWithData.js */ "./node_modules/@apollo/client/react/ssr/renderToStringWithData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderToStringWithData", function() { return _renderToStringWithData_js__WEBPACK_IMPORTED_MODULE_1__["renderToStringWithData"]; });

/* harmony import */ var _RenderPromises_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RenderPromises.js */ "./node_modules/@apollo/client/react/ssr/RenderPromises.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderPromises", function() { return _RenderPromises_js__WEBPACK_IMPORTED_MODULE_2__["RenderPromises"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/ssr/renderToStringWithData.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@apollo/client/react/ssr/renderToStringWithData.js ***!
  \*************************************************************************/
/*! exports provided: renderToStringWithData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToStringWithData", function() { return renderToStringWithData; });
/* harmony import */ var _getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDataFromTree.js */ "./node_modules/@apollo/client/react/ssr/getDataFromTree.js");

function renderToStringWithData(component) {
    return Object(_getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupFromTree"])({
        tree: component,
        renderFunction: __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js").renderToString
    });
}
//# sourceMappingURL=renderToStringWithData.js.map

/***/ }),

/***/ "./node_modules/@apollo/link-error/lib/bundle.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/link-error/lib/bundle.esm.js ***!
  \***********************************************************/
/*! exports provided: ErrorLink, onError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorLink", function() { return ErrorLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return onError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/core */ "./node_modules/@apollo/client/core/index.js");



function onError(errorHandler) {
    return new _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"](function (operation, forward) {
        return new _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var sub;
            var retriedSub;
            var retriedResult;
            try {
                sub = forward(operation).subscribe({
                    next: function (result) {
                        if (result.errors) {
                            retriedResult = errorHandler({
                                graphQLErrors: result.errors,
                                response: result,
                                operation: operation,
                                forward: forward,
                            });
                            if (retriedResult) {
                                retriedSub = retriedResult.subscribe({
                                    next: observer.next.bind(observer),
                                    error: observer.error.bind(observer),
                                    complete: observer.complete.bind(observer),
                                });
                                return;
                            }
                        }
                        observer.next(result);
                    },
                    error: function (networkError) {
                        retriedResult = errorHandler({
                            operation: operation,
                            networkError: networkError,
                            graphQLErrors: networkError &&
                                networkError.result &&
                                networkError.result.errors,
                            forward: forward,
                        });
                        if (retriedResult) {
                            retriedSub = retriedResult.subscribe({
                                next: observer.next.bind(observer),
                                error: observer.error.bind(observer),
                                complete: observer.complete.bind(observer),
                            });
                            return;
                        }
                        observer.error(networkError);
                    },
                    complete: function () {
                        if (!retriedResult) {
                            observer.complete.bind(observer)();
                        }
                    },
                });
            }
            catch (e) {
                errorHandler({ networkError: e, operation: operation, forward: forward });
                observer.error(e);
            }
            return function () {
                if (sub)
                    sub.unsubscribe();
                if (retriedSub)
                    sub.unsubscribe();
            };
        });
    });
}
var ErrorLink = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ErrorLink, _super);
    function ErrorLink(errorHandler) {
        var _this = _super.call(this) || this;
        _this.link = onError(errorHandler);
        return _this;
    }
    ErrorLink.prototype.request = function (operation, forward) {
        return this.link.request(operation, forward);
    };
    return ErrorLink;
}(_apollo_client_core__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]));


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-upload-client/node_modules/@babel/runtime/helpers/extends.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/apollo-upload-client/node_modules/@babel/runtime/helpers/extends.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/apollo-upload-client/public/ReactNativeFile.js":
/*!*********************************************************************!*\
  !*** ./node_modules/apollo-upload-client/public/ReactNativeFile.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! extract-files/public/ReactNativeFile */ "./node_modules/extract-files/public/ReactNativeFile.js");


/***/ }),

/***/ "./node_modules/apollo-upload-client/public/createUploadLink.js":
/*!**********************************************************************!*\
  !*** ./node_modules/apollo-upload-client/public/createUploadLink.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/apollo-upload-client/node_modules/@babel/runtime/helpers/extends.js");

var _require = __webpack_require__(/*! @apollo/client/core */ "./node_modules/@apollo/client/core/index.js"),
  ApolloLink = _require.ApolloLink,
  Observable = _require.Observable;

var _require2 = __webpack_require__(/*! @apollo/client/link/http */ "./node_modules/@apollo/client/link/http/index.js"),
  createSignalIfSupported = _require2.createSignalIfSupported,
  fallbackHttpConfig = _require2.fallbackHttpConfig,
  parseAndCheckHttpResponse = _require2.parseAndCheckHttpResponse,
  rewriteURIForGET = _require2.rewriteURIForGET,
  selectHttpOptionsAndBody = _require2.selectHttpOptionsAndBody,
  selectURI = _require2.selectURI,
  serializeFetchParameter = _require2.serializeFetchParameter;

var extractFiles = __webpack_require__(/*! extract-files/public/extractFiles */ "./node_modules/extract-files/public/extractFiles.js");

var formDataAppendFile = __webpack_require__(/*! ./formDataAppendFile */ "./node_modules/apollo-upload-client/public/formDataAppendFile.js");

var isExtractableFile = __webpack_require__(/*! ./isExtractableFile */ "./node_modules/apollo-upload-client/public/isExtractableFile.js");

module.exports = function createUploadLink(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$uri = _ref.uri,
    fetchUri = _ref$uri === void 0 ? '/graphql' : _ref$uri,
    useGETForQueries = _ref.useGETForQueries,
    _ref$isExtractableFil = _ref.isExtractableFile,
    customIsExtractableFile =
      _ref$isExtractableFil === void 0
        ? isExtractableFile
        : _ref$isExtractableFil,
    CustomFormData = _ref.FormData,
    _ref$formDataAppendFi = _ref.formDataAppendFile,
    customFormDataAppendFile =
      _ref$formDataAppendFi === void 0
        ? formDataAppendFile
        : _ref$formDataAppendFi,
    customFetch = _ref.fetch,
    fetchOptions = _ref.fetchOptions,
    credentials = _ref.credentials,
    headers = _ref.headers,
    includeExtensions = _ref.includeExtensions;

  var linkConfig = {
    http: {
      includeExtensions: includeExtensions,
    },
    options: fetchOptions,
    credentials: credentials,
    headers: headers,
  };
  return new ApolloLink(function (operation) {
    var context = operation.getContext();
    var _context$clientAwaren = context.clientAwareness;
    _context$clientAwaren =
      _context$clientAwaren === void 0 ? {} : _context$clientAwaren;
    var name = _context$clientAwaren.name,
      version = _context$clientAwaren.version,
      headers = context.headers;
    var contextConfig = {
      http: context.http,
      options: context.fetchOptions,
      credentials: context.credentials,
      headers: _extends(
        {},
        name && {
          'apollographql-client-name': name,
        },
        version && {
          'apollographql-client-version': version,
        },
        headers
      ),
    };

    var _selectHttpOptionsAnd = selectHttpOptionsAndBody(
        operation,
        fallbackHttpConfig,
        linkConfig,
        contextConfig
      ),
      options = _selectHttpOptionsAnd.options,
      body = _selectHttpOptionsAnd.body;

    var _extractFiles = extractFiles(body, '', customIsExtractableFile),
      clone = _extractFiles.clone,
      files = _extractFiles.files;

    var uri = selectURI(operation, fetchUri);

    if (files.size) {
      delete options.headers['content-type'];
      var RuntimeFormData = CustomFormData || FormData;
      var form = new RuntimeFormData();
      form.append('operations', serializeFetchParameter(clone, 'Payload'));
      var map = {};
      var i = 0;
      files.forEach(function (paths) {
        map[++i] = paths;
      });
      form.append('map', JSON.stringify(map));
      i = 0;
      files.forEach(function (paths, file) {
        customFormDataAppendFile(form, ++i, file);
      });
      options.body = form;
    } else {
      if (
        useGETForQueries &&
        !operation.query.definitions.some(function (definition) {
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'mutation'
          );
        })
      )
        options.method = 'GET';

      if (options.method === 'GET') {
        var _rewriteURIForGET = rewriteURIForGET(uri, body),
          newURI = _rewriteURIForGET.newURI,
          parseError = _rewriteURIForGET.parseError;

        if (parseError)
          return new Observable(function (observer) {
            observer.error(parseError);
          });
        uri = newURI;
      } else options.body = serializeFetchParameter(clone, 'Payload');
    }

    var _createSignalIfSuppor = createSignalIfSupported(),
      controller = _createSignalIfSuppor.controller;

    if (controller) {
      if (options.signal)
        options.signal.addEventListener('abort', function () {
          controller.abort();
        });
      options.signal = controller.signal;
    }

    var runtimeFetch = customFetch || fetch;
    return new Observable(function (observer) {
      var cleaningUp;
      runtimeFetch(uri, options)
        .then(function (response) {
          operation.setContext({
            response: response,
          });
          return response;
        })
        .then(parseAndCheckHttpResponse(operation))
        .then(function (result) {
          observer.next(result);
          observer.complete();
        })
        .catch(function (error) {
          if (!cleaningUp) {
            if (error.result && error.result.errors && error.result.data)
              observer.next(error.result);
            observer.error(error);
          }
        });
      return function () {
        cleaningUp = true;
        if (controller) controller.abort();
      };
    });
  });
};


/***/ }),

/***/ "./node_modules/apollo-upload-client/public/formDataAppendFile.js":
/*!************************************************************************!*\
  !*** ./node_modules/apollo-upload-client/public/formDataAppendFile.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function formDataAppendFile(formData, fieldName, file) {
  formData.append(fieldName, file, file.name);
};


/***/ }),

/***/ "./node_modules/apollo-upload-client/public/index.mjs":
/*!************************************************************!*\
  !*** ./node_modules/apollo-upload-client/public/index.mjs ***!
  \************************************************************/
/*! exports provided: createUploadLink, formDataAppendFile, isExtractableFile, ReactNativeFile */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createUploadLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createUploadLink.js */ "./node_modules/apollo-upload-client/public/createUploadLink.js");
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "createUploadLink", function() { return _createUploadLink_js__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _formDataAppendFile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formDataAppendFile.js */ "./node_modules/apollo-upload-client/public/formDataAppendFile.js");
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "formDataAppendFile", function() { return _formDataAppendFile_js__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _isExtractableFile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isExtractableFile.js */ "./node_modules/apollo-upload-client/public/isExtractableFile.js");
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "isExtractableFile", function() { return _isExtractableFile_js__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _ReactNativeFile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReactNativeFile.js */ "./node_modules/apollo-upload-client/public/ReactNativeFile.js");
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ReactNativeFile", function() { return _ReactNativeFile_js__WEBPACK_IMPORTED_MODULE_3__; });






/***/ }),

/***/ "./node_modules/apollo-upload-client/public/isExtractableFile.js":
/*!***********************************************************************!*\
  !*** ./node_modules/apollo-upload-client/public/isExtractableFile.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! extract-files/public/isExtractableFile */ "./node_modules/extract-files/public/isExtractableFile.js");


/***/ }),

/***/ "./node_modules/extract-files/public/ReactNativeFile.js":
/*!**************************************************************!*\
  !*** ./node_modules/extract-files/public/ReactNativeFile.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function ReactNativeFile(_ref) {
  var uri = _ref.uri,
    name = _ref.name,
    type = _ref.type;
  this.uri = uri;
  this.name = name;
  this.type = type;
};


/***/ }),

/***/ "./node_modules/extract-files/public/extractFiles.js":
/*!***********************************************************!*\
  !*** ./node_modules/extract-files/public/extractFiles.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaultIsExtractableFile = __webpack_require__(/*! ./isExtractableFile */ "./node_modules/extract-files/public/isExtractableFile.js");

module.exports = function extractFiles(value, path, isExtractableFile) {
  if (path === void 0) {
    path = '';
  }

  if (isExtractableFile === void 0) {
    isExtractableFile = defaultIsExtractableFile;
  }

  var clone;
  var files = new Map();

  function addFile(paths, file) {
    var storedPaths = files.get(file);
    if (storedPaths) storedPaths.push.apply(storedPaths, paths);
    else files.set(file, paths);
  }

  if (isExtractableFile(value)) {
    clone = null;
    addFile([path], value);
  } else {
    var prefix = path ? path + '.' : '';
    if (typeof FileList !== 'undefined' && value instanceof FileList)
      clone = Array.prototype.map.call(value, function (file, i) {
        addFile(['' + prefix + i], file);
        return null;
      });
    else if (Array.isArray(value))
      clone = value.map(function (child, i) {
        var result = extractFiles(child, '' + prefix + i, isExtractableFile);
        result.files.forEach(addFile);
        return result.clone;
      });
    else if (value && value.constructor === Object) {
      clone = {};

      for (var i in value) {
        var result = extractFiles(value[i], '' + prefix + i, isExtractableFile);
        result.files.forEach(addFile);
        clone[i] = result.clone;
      }
    } else clone = value;
  }

  return {
    clone: clone,
    files: files,
  };
};


/***/ }),

/***/ "./node_modules/extract-files/public/isExtractableFile.js":
/*!****************************************************************!*\
  !*** ./node_modules/extract-files/public/isExtractableFile.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ReactNativeFile = __webpack_require__(/*! ./ReactNativeFile */ "./node_modules/extract-files/public/ReactNativeFile.js");

module.exports = function isExtractableFile(value) {
  return (
    (typeof File !== 'undefined' && value instanceof File) ||
    (typeof Blob !== 'undefined' && value instanceof Blob) ||
    value instanceof ReactNativeFile
  );
};


/***/ }),

/***/ "./node_modules/next-with-apollo/lib/apollo.js":
/*!*****************************************************!*\
  !*** ./node_modules/next-with-apollo/lib/apollo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Polyfill fetch
__webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
var _apolloClient;
function initApollo(clientFn, options) {
    if (!clientFn) {
        throw new Error('[withApollo] the first param is missing and is required to get the ApolloClient');
    }
    if (typeof window === 'undefined') {
        return getClient(clientFn, options);
    }
    if (!_apolloClient) {
        _apolloClient = getClient(clientFn, options);
    }
    return _apolloClient;
}
exports.default = initApollo;
function getClient(clientFn, options) {
    if (options === void 0) { options = {}; }
    if (typeof clientFn !== 'function') {
        throw new Error('[withApollo] requires a function that returns an ApolloClient');
    }
    return clientFn(options);
}


/***/ }),

/***/ "./node_modules/next-with-apollo/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/next-with-apollo/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var withApollo_1 = __importDefault(__webpack_require__(/*! ./withApollo */ "./node_modules/next-with-apollo/lib/withApollo.js"));
exports.withApollo = withApollo_1.default;
var apollo_1 = __webpack_require__(/*! ./apollo */ "./node_modules/next-with-apollo/lib/apollo.js");
exports.initApollo = apollo_1.default;
exports.default = withApollo_1.default;


/***/ }),

/***/ "./node_modules/next-with-apollo/lib/withApollo.js":
/*!*********************************************************!*\
  !*** ./node_modules/next-with-apollo/lib/withApollo.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var head_1 = __importDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js"));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var apollo_1 = __importDefault(__webpack_require__(/*! ./apollo */ "./node_modules/next-with-apollo/lib/apollo.js"));
// Gets the display name of a JSX component for dev tools
function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Unknown';
}
function withApollo(client, options) {
    var _this = this;
    if (options === void 0) { options = {}; }
    return function (Page, pageOptions) {
        if (pageOptions === void 0) { pageOptions = {}; }
        var getInitialProps = Page.getInitialProps;
        var getDataFromTree = 'getDataFromTree' in pageOptions
            ? pageOptions.getDataFromTree
            : options.getDataFromTree;
        var render = pageOptions.render || options.render;
        var onError = pageOptions.onError || options.onError;
        function WithApollo(_a) {
            var _b;
            var apollo = _a.apollo, apolloState = _a.apolloState, props = __rest(_a, ["apollo", "apolloState"]);
            var apolloClient = apollo ||
                apollo_1.default(client, { initialState: (_b = apolloState) === null || _b === void 0 ? void 0 : _b.data });
            if (render) {
                return render({
                    Page: Page,
                    props: __assign(__assign({}, props), { apollo: apolloClient })
                });
            }
            return react_1.default.createElement(Page, __assign({}, props, { apollo: apolloClient }));
        }
        WithApollo.displayName = "WithApollo(" + getDisplayName(Page) + ")";
        if (getInitialProps || getDataFromTree) {
            WithApollo.getInitialProps = function (pageCtx) { return __awaiter(_this, void 0, void 0, function () {
                var ctx, AppTree, headers, apollo, apolloState, pageProps, props, appTreeProps, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ctx = 'Component' in pageCtx ? pageCtx.ctx : pageCtx;
                            AppTree = pageCtx.AppTree;
                            headers = ctx.req ? ctx.req.headers : {};
                            apollo = apollo_1.default(client, { ctx: ctx, headers: headers });
                            apolloState = {};
                            pageProps = {};
                            if (!getInitialProps) return [3 /*break*/, 2];
                            ctx.apolloClient = apollo;
                            return [4 /*yield*/, getInitialProps(pageCtx)];
                        case 1:
                            pageProps = _a.sent();
                            _a.label = 2;
                        case 2:
                            if (!(typeof window === 'undefined')) return [3 /*break*/, 7];
                            if (ctx.res && (ctx.res.headersSent || ctx.res.finished)) {
                                return [2 /*return*/, pageProps];
                            }
                            if (!getDataFromTree) return [3 /*break*/, 7];
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 5, , 6]);
                            props = __assign(__assign({}, pageProps), { apolloState: apolloState, apollo: apollo });
                            appTreeProps = 'Component' in pageCtx ? props : { pageProps: props };
                            return [4 /*yield*/, getDataFromTree(react_1.default.createElement(AppTree, __assign({}, appTreeProps)))];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            error_1 = _a.sent();
                            if (onError) {
                                onError(error_1, ctx);
                            }
                            else {
                                // Prevent Apollo Client GraphQL errors from crashing SSR.
                                if (true) {
                                    // tslint:disable-next-line no-console This is a necessary debugging log
                                    console.error('GraphQL error occurred [getDataFromTree]', error_1);
                                }
                            }
                            return [3 /*break*/, 6];
                        case 6:
                            // getDataFromTree does not call componentWillUnmount
                            // head side effect therefore need to be cleared manually
                            head_1.default.rewind();
                            apolloState.data = apollo.cache.extract();
                            _a.label = 7;
                        case 7:
                            // To avoid calling initApollo() twice in the server we send the Apollo Client as a prop
                            // to the component, otherwise the component would have to call initApollo() again but this
                            // time without the context, once that happens the following code will make sure we send
                            // the prop as `null` to the browser
                            apollo.toJSON = function () {
                                return null;
                            };
                            return [2 /*return*/, __assign(__assign({}, pageProps), { apolloState: apolloState,
                                    apollo: apollo })];
                    }
                });
            }); };
        }
        return WithApollo;
    };
}
exports.default = withApollo;


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */var fetch=self.fetch.bind(self);module.exports=fetch;module.exports.default=module.exports;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom-server.browser.development.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be replaced with error codes
// during build.
function formatProdErrorMessage(code) {
  var url = 'https://reactjs.org/docs/error-decoder.html?invariant=' + code;

  for (var i = 1; i < arguments.length; i++) {
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return "Minified React error #" + code + "; visit " + url + " for the full message or " + 'use the non-minified dev environment for full errors and additional ' + 'helpful warnings.';
}

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.1';

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableSuspenseServerRenderer = false;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var didWarnAboutInvalidateContextType;

{
  didWarnAboutInvalidateContextType = new Set();
}

var emptyObject = {};

{
  Object.freeze(emptyObject);
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;

  if (!contextTypes) {
    return emptyObject;
  }

  var maskedContext = {};

  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }

  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes(typeSpecs, values, location, 'Component');
  }
}

function validateContextBounds(context, threadID) {
  // If we don't have enough slots in this context to store this threadID,
  // fill it in without leaving any holes to ensure that the VM optimizes
  // this as non-holey index properties.
  // (Note: If `react` package is < 16.6, _threadCount is undefined.)
  for (var i = context._threadCount | 0; i <= threadID; i++) {
    // We assume that this is the same as the defaultValue which might not be
    // true if we're rendering inside a secondary renderer but they are
    // secondary because these use cases are very rare.
    context[i] = context._currentValue2;
    context._threadCount = i + 1;
  }
}
function processContext(type, context, threadID, isClass) {
  if (isClass) {
    var contextType = type.contextType;

    {
      if ('contextType' in type) {
        var isValid = // Allow null for conditional declaration
        contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

        if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
          didWarnAboutInvalidateContextType.add(type);
          var addendum = '';

          if (contextType === undefined) {
            addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
          } else if (typeof contextType !== 'object') {
            addendum = ' However, it is set to a ' + typeof contextType + '.';
          } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
            addendum = ' Did you accidentally pass the Context.Provider instead?';
          } else if (contextType._context !== undefined) {
            // <Context.Consumer>
            addendum = ' Did you accidentally pass the Context.Consumer instead?';
          } else {
            addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
          }

          error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(type) || 'Component', addendum);
        }
      }
    }

    if (typeof contextType === 'object' && contextType !== null) {
      validateContextBounds(contextType, threadID);
      return contextType[threadID];
    }

    {
      var maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, maskedContext, 'context');
        }
      }

      return maskedContext;
    }
  } else {
    {
      var _maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, _maskedContext, 'context');
        }
      }

      return _maskedContext;
    }
  }
}

var nextAvailableThreadIDs = new Uint16Array(16);

for (var i = 0; i < 15; i++) {
  nextAvailableThreadIDs[i] = i + 1;
}

nextAvailableThreadIDs[15] = 0;

function growThreadCountAndReturnNextAvailable() {
  var oldArray = nextAvailableThreadIDs;
  var oldSize = oldArray.length;
  var newSize = oldSize * 2;

  if (!(newSize <= 0x10000)) {
    {
      throw Error( "Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic." );
    }
  }

  var newArray = new Uint16Array(newSize);
  newArray.set(oldArray);
  nextAvailableThreadIDs = newArray;
  nextAvailableThreadIDs[0] = oldSize + 1;

  for (var _i = oldSize; _i < newSize - 1; _i++) {
    nextAvailableThreadIDs[_i] = _i + 1;
  }

  nextAvailableThreadIDs[newSize - 1] = 0;
  return oldSize;
}

function allocThreadID() {
  var nextID = nextAvailableThreadIDs[0];

  if (nextID === 0) {
    return growThreadCountAndReturnNextAvailable();
  }

  nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
  return nextID;
}
function freeThreadID(id) {
  nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
  nextAvailableThreadIDs[0] = id;
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
/* eslint-enable max-len */

var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty = Object.prototype.hasOwnProperty;
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }

  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }

  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }

  illegalAttributeNameCache[attributeName] = true;

  {
    error('Invalid attribute name: `%s`', attributeName);
  }

  return false;
}
function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }

  return false;
}
function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }

  switch (typeof value) {
    case 'function': // $FlowIssue symbol is perfectly valid here

    case 'symbol':
      // eslint-disable-line
      return true;

    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }

        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }

    default:
      return false;
  }
}
function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }

  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (propertyInfo !== null) {

    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;

      case OVERLOADED_BOOLEAN:
        return value === false;

      case NUMERIC:
        return isNaN(value);

      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }

  return false;
}
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];
reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function (token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
  false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
  false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
false);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true, // sanitizeURL
  true);
});

// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space

/* eslint-disable max-len */

var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
var didWarn = false;

function sanitizeURL(url) {
  {
    if (!didWarn && isJavaScriptProtocol.test(url)) {
      didWarn = true;

      error('A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
    }
  }
}

// code copied and modified from escape-html

/**
 * Module variables.
 * @private
 */
var matchHtmlRegExp = /["'&<>]/;
/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;

      case 38:
        // &
        escape = '&amp;';
        break;

      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'

        break;

      case 60:
        // <
        escape = '&lt;';
        break;

      case 62:
        // >
        escape = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */


function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }

  return escapeHtml(text);
}

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */

function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextForBrowser(value) + '"';
}

function createMarkupForRoot() {
  return ROOT_ATTRIBUTE_NAME + '=""';
}
/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */

function createMarkupForProperty(name, value) {
  var propertyInfo = getPropertyInfo(name);

  if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
    return '';
  }

  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
    return '';
  }

  if (propertyInfo !== null) {
    var attributeName = propertyInfo.attributeName;
    var type = propertyInfo.type;

    if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
      return attributeName + '=""';
    } else {
      if (propertyInfo.sanitizeURL) {
        value = '' + value;
        sanitizeURL(value);
      }

      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    }
  } else if (isAttributeNameSafe(name)) {
    return name + '=' + quoteAttributeValueForBrowser(value);
  }

  return '';
}
/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */

function createMarkupForCustomAttribute(name, value) {
  if (!isAttributeNameSafe(name) || value == null) {
    return '';
  }

  return name + '=' + quoteAttributeValueForBrowser(value);
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var currentlyRenderingComponent = null;
var firstWorkInProgressHook = null;
var workInProgressHook = null; // Whether the work-in-progress hook is a re-rendered hook

var isReRender = false; // Whether an update was scheduled during the currently executing render pass.

var didScheduleRenderPhaseUpdate = false; // Lazily created map of render-phase updates

var renderPhaseUpdates = null; // Counter to prevent infinite loops.

var numberOfReRenders = 0;
var RE_RENDER_LIMIT = 25;
var isInHookUserCodeInDev = false; // In DEV, this is the name of the currently executing primitive hook

var currentHookNameInDev;

function resolveCurrentlyRenderingComponent() {
  if (!(currentlyRenderingComponent !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  {
    if (isInHookUserCodeInDev) {
      error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://reactjs.org/link/rules-of-hooks');
    }
  }

  return currentlyRenderingComponent;
}

function areHookInputsEqual(nextDeps, prevDeps) {
  if (prevDeps === null) {
    {
      error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
    }

    return false;
  }

  {
    // Don't bother comparing lengths in prod because these arrays should be
    // passed inline.
    if (nextDeps.length !== prevDeps.length) {
      error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
    }
  }

  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (objectIs(nextDeps[i], prevDeps[i])) {
      continue;
    }

    return false;
  }

  return true;
}

function createHook() {
  if (numberOfReRenders > 0) {
    {
      {
        throw Error( "Rendered more hooks than during the previous render" );
      }
    }
  }

  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function createWorkInProgressHook() {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      firstWorkInProgressHook = workInProgressHook = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false; // Append to the end of the list

      workInProgressHook = workInProgressHook.next = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
    }
  }

  return workInProgressHook;
}

function prepareToUseHooks(componentIdentity) {
  currentlyRenderingComponent = componentIdentity;

  {
    isInHookUserCodeInDev = false;
  } // The following should have already been reset
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;

}
function finishHooks(Component, props, children, refOrContext) {
  // This must be called after every function component to prevent hooks from
  // being used in classes.
  while (didScheduleRenderPhaseUpdate) {
    // Updates were scheduled during the render phase. They are stored in
    // the `renderPhaseUpdates` map. Call the component again, reusing the
    // work-in-progress hooks and applying the additional updates on top. Keep
    // restarting until no more updates are scheduled.
    didScheduleRenderPhaseUpdate = false;
    numberOfReRenders += 1; // Start over from the beginning of the list

    workInProgressHook = null;
    children = Component(props, refOrContext);
  }

  resetHooksState();
  return children;
} // Reset the internal hooks state if an error occurs while rendering a component

function resetHooksState() {
  {
    isInHookUserCodeInDev = false;
  }

  currentlyRenderingComponent = null;
  didScheduleRenderPhaseUpdate = false;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  renderPhaseUpdates = null;
  workInProgressHook = null;
}

function readContext(context, observedBits) {
  var threadID = currentPartialRenderer.threadID;
  validateContextBounds(context, threadID);

  {
    if (isInHookUserCodeInDev) {
      error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
    }
  }

  return context[threadID];
}

function useContext(context, observedBits) {
  {
    currentHookNameInDev = 'useContext';
  }

  resolveCurrentlyRenderingComponent();
  var threadID = currentPartialRenderer.threadID;
  validateContextBounds(context, threadID);
  return context[threadID];
}

function basicStateReducer(state, action) {
  // $FlowFixMe: Flow doesn't like mixed types
  return typeof action === 'function' ? action(state) : action;
}

function useState(initialState) {
  {
    currentHookNameInDev = 'useState';
  }

  return useReducer(basicStateReducer, // useReducer has a special case to support lazy useState initializers
  initialState);
}
function useReducer(reducer, initialArg, init) {
  {
    if (reducer !== basicStateReducer) {
      currentHookNameInDev = 'useReducer';
    }
  }

  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  if (isReRender) {
    // This is a re-render. Apply the new render phase updates to the previous
    // current hook.
    var queue = workInProgressHook.queue;
    var dispatch = queue.dispatch;

    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(queue);
        var newState = workInProgressHook.memoizedState;
        var update = firstRenderPhaseUpdate;

        do {
          // Process this render phase update. We don't have to check the
          // priority because it will always be the same as the current
          // render's.
          var action = update.action;

          {
            isInHookUserCodeInDev = true;
          }

          newState = reducer(newState, action);

          {
            isInHookUserCodeInDev = false;
          }

          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;
        return [newState, dispatch];
      }
    }

    return [workInProgressHook.memoizedState, dispatch];
  } else {
    {
      isInHookUserCodeInDev = true;
    }

    var initialState;

    if (reducer === basicStateReducer) {
      // Special case for `useState`.
      initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
    } else {
      initialState = init !== undefined ? init(initialArg) : initialArg;
    }

    {
      isInHookUserCodeInDev = false;
    }

    workInProgressHook.memoizedState = initialState;

    var _queue = workInProgressHook.queue = {
      last: null,
      dispatch: null
    };

    var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);

    return [workInProgressHook.memoizedState, _dispatch];
  }
}

function useMemo(nextCreate, deps) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var nextDeps = deps === undefined ? null : deps;

  if (workInProgressHook !== null) {
    var prevState = workInProgressHook.memoizedState;

    if (prevState !== null) {
      if (nextDeps !== null) {
        var prevDeps = prevState[1];

        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }
  }

  {
    isInHookUserCodeInDev = true;
  }

  var nextValue = nextCreate();

  {
    isInHookUserCodeInDev = false;
  }

  workInProgressHook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

function useRef(initialValue) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var previousRef = workInProgressHook.memoizedState;

  if (previousRef === null) {
    var ref = {
      current: initialValue
    };

    {
      Object.seal(ref);
    }

    workInProgressHook.memoizedState = ref;
    return ref;
  } else {
    return previousRef;
  }
}

function useLayoutEffect(create, inputs) {
  {
    currentHookNameInDev = 'useLayoutEffect';

    error('useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://reactjs.org/link/uselayouteffect-ssr for common fixes.');
  }
}

function dispatchAction(componentIdentity, queue, action) {
  if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
    {
      throw Error( "Too many re-renders. React limits the number of renders to prevent an infinite loop." );
    }
  }

  if (componentIdentity === currentlyRenderingComponent) {
    // This is a render phase update. Stash it in a lazily-created map of
    // queue -> linked list of updates. After this render pass, we'll restart
    // and apply the stashed updates on top of the work-in-progress hook.
    didScheduleRenderPhaseUpdate = true;
    var update = {
      action: action,
      next: null
    };

    if (renderPhaseUpdates === null) {
      renderPhaseUpdates = new Map();
    }

    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

    if (firstRenderPhaseUpdate === undefined) {
      renderPhaseUpdates.set(queue, update);
    } else {
      // Append the update to the end of the list.
      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

      while (lastRenderPhaseUpdate.next !== null) {
        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      }

      lastRenderPhaseUpdate.next = update;
    }
  }
}

function useCallback(callback, deps) {
  return useMemo(function () {
    return callback;
  }, deps);
} // TODO Decide on how to implement this hook for server rendering.
// If a mutation occurs during render, consider triggering a Suspense boundary
// and falling back to client rendering.

function useMutableSource(source, getSnapshot, subscribe) {
  resolveCurrentlyRenderingComponent();
  return getSnapshot(source._source);
}

function useDeferredValue(value) {
  resolveCurrentlyRenderingComponent();
  return value;
}

function useTransition() {
  resolveCurrentlyRenderingComponent();

  var startTransition = function (callback) {
    callback();
  };

  return [startTransition, false];
}

function useOpaqueIdentifier() {
  return (currentPartialRenderer.identifierPrefix || '') + 'R:' + (currentPartialRenderer.uniqueID++).toString(36);
}

function noop() {}

var currentPartialRenderer = null;
function setCurrentPartialRenderer(renderer) {
  currentPartialRenderer = renderer;
}
var Dispatcher = {
  readContext: readContext,
  useContext: useContext,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useLayoutEffect: useLayoutEffect,
  useCallback: useCallback,
  // useImperativeHandle is not run in the server environment
  useImperativeHandle: noop,
  // Effects are not run in the server environment.
  useEffect: noop,
  // Debugging effect
  useDebugValue: noop,
  useDeferredValue: useDeferredValue,
  useTransition: useTransition,
  useOpaqueIdentifier: useOpaqueIdentifier,
  // Subscriptions are not setup in a server environment.
  useMutableSource: useMutableSource
};

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
}; // Assumes there is no parent namespace.

function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;

    case 'math':
      return MATH_NAMESPACE;

    default:
      return HTML_NAMESPACE;
  }
}
function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }

  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  } // By default, pass namespace below.


  return parentNamespace;
}

var hasReadOnlyValue = {
  button: true,
  checkbox: true,
  image: true,
  hidden: true,
  radio: true,
  reset: true,
  submit: true
};
function checkControlledValueProps(tagName, props) {
  {
    if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
      error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }

    if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
      error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  }
}

// For HTML, certain tags should omit their close tag. We keep a list for
// those special-case tags.
var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true // NOTE: menuitem's close tag should be omitted, but that causes problems.

};

// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

var HTML = '__html';

function assertValidProps(tag, props) {
  if (!props) {
    return;
  } // Note the use of `==` which checks for null or undefined.


  if (voidElementTags[tag]) {
    if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
      {
        throw Error( tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." );
      }
    }
  }

  if (props.dangerouslySetInnerHTML != null) {
    if (!(props.children == null)) {
      {
        throw Error( "Can only set one of `children` or `props.dangerouslySetInnerHTML`." );
      }
    }

    if (!(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML)) {
      {
        throw Error( "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information." );
      }
    }
  }

  {
    if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
      error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
    }
  }

  if (!(props.style == null || typeof props.style === 'object')) {
    {
      throw Error( "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." );
    }
  }
}

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */

function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */

function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this list too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;

    default:
      return true;
  }
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern$1 = /^-ms-/;
  var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

  var badStyleValueWithSemicolonPattern = /;\s*$/;
  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern$1, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;

    error("Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;

    error('`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;

    error('`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

var ariaProperties = {
  'aria-current': 0,
  // state
  'aria-details': 0,
  'aria-disabled': 0,
  // state
  'aria-hidden': 0,
  // state
  'aria-invalid': 0,
  // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

function validateProperty(tagName, name) {
  {
    if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) {
      return true;
    }

    if (rARIACamel.test(name)) {
      var ariaName = 'aria-' + name.slice(4).toLowerCase();
      var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (correctName == null) {
        error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);

        warnedProperties[name] = true;
        return true;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== correctName) {
        error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);

        warnedProperties[name] = true;
        return true;
      }
    }

    if (rARIA.test(name)) {
      var lowerCasedName = name.toLowerCase();
      var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (standardName == null) {
        warnedProperties[name] = true;
        return false;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== standardName) {
        error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties[name] = true;
        return true;
      }
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  {
    var invalidProps = [];

    for (var key in props) {
      var isValid = validateProperty(type, key);

      if (!isValid) {
        invalidProps.push(key);
      }
    }

    var unknownPropString = invalidProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (invalidProps.length === 1) {
      error('Invalid aria prop %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
    } else if (invalidProps.length > 1) {
      error('Invalid aria props %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
    }
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;
function validateProperties$1(type, props) {
  {
    if (type !== 'input' && type !== 'textarea' && type !== 'select') {
      return;
    }

    if (props != null && props.value === null && !didWarnValueNull) {
      didWarnValueNull = true;

      if (type === 'select' && props.multiple) {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
      } else {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
      }
    }
  }
}

// When adding attributes to the HTML or SVG allowed attribute list, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  disablepictureinpicture: 'disablePictureInPicture',
  disableremoteplayback: 'disableRemotePlayback',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  enterkeyhint: 'enterKeyHint',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',
  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, eventRegistry) {
    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();

    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');

      warnedProperties$1[name] = true;
      return true;
    } // We can't rely on the event system being injected on the server.


    if (eventRegistry != null) {
      var registrationNameDependencies = eventRegistry.registrationNameDependencies,
          possibleRegistrationNames = eventRegistry.possibleRegistrationNames;

      if (registrationNameDependencies.hasOwnProperty(name)) {
        return true;
      }

      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

      if (registrationName != null) {
        error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);

        warnedProperties$1[name] = true;
        return true;
      }

      if (EVENT_NAME_REGEX.test(name)) {
        error('Unknown event handler property `%s`. It will be ignored.', name);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Let the ARIA attribute hook validate ARIA attributes


    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);

      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];

      if (standardName !== name) {
        error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Now that we've validated casing, do not validate
    // data types for reserved props


    if (isReserved) {
      return true;
    } // Warn when a known attribute is a bad type


    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    } // Warn when passing the strings 'false' or 'true' into a boolean prop


    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);

      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, eventRegistry) {
  {
    var unknownProps = [];

    for (var key in props) {
      var isValid = validateProperty$1(type, key, props[key], eventRegistry);

      if (!isValid) {
        unknownProps.push(key);
      }
    }

    var unknownPropString = unknownProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (unknownProps.length === 1) {
      error('Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
    } else if (unknownProps.length > 1) {
      error('Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
    }
  }
};

function validateProperties$2(type, props, eventRegistry) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnUnknownProperties(type, props, eventRegistry);
}

var toArray = React.Children.toArray; // This is only used in DEV.
// Each entry is `this.stack` from a currently executing renderer instance.
// (There may be more than one because ReactDOMServer is reentrant).
// Each stack is an array of frames which may contain nested stacks of elements.

var currentDebugStacks = [];
var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var ReactDebugCurrentFrame$1;
var prevGetCurrentStackImpl = null;

var getCurrentServerStackImpl = function () {
  return '';
};

var describeStackFrame = function (element) {
  return '';
};

var validatePropertiesInDevelopment = function (type, props) {};

var pushCurrentDebugStack = function (stack) {};

var pushElementToDebugStack = function (element) {};

var popCurrentDebugStack = function () {};

var hasWarnedAboutUsingContextAsConsumer = false;

{
  ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props, null);
  };

  describeStackFrame = function (element) {
    return describeUnknownElementTypeFrameInDEV(element.type, element._source, null);
  };

  pushCurrentDebugStack = function (stack) {
    currentDebugStacks.push(stack);

    if (currentDebugStacks.length === 1) {
      // We are entering a server renderer.
      // Remember the previous (e.g. client) global stack implementation.
      prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
      ReactDebugCurrentFrame$1.getCurrentStack = getCurrentServerStackImpl;
    }
  };

  pushElementToDebugStack = function (element) {
    // For the innermost executing ReactDOMServer call,
    var stack = currentDebugStacks[currentDebugStacks.length - 1]; // Take the innermost executing frame (e.g. <Foo>),

    var frame = stack[stack.length - 1]; // and record that it has one more element associated with it.

    frame.debugElementStack.push(element); // We only need this because we tail-optimize single-element
    // children and directly handle them in an inner loop instead of
    // creating separate frames for them.
  };

  popCurrentDebugStack = function () {
    currentDebugStacks.pop();

    if (currentDebugStacks.length === 0) {
      // We are exiting the server renderer.
      // Restore the previous (e.g. client) global stack implementation.
      ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
      prevGetCurrentStackImpl = null;
    }
  };

  getCurrentServerStackImpl = function () {
    if (currentDebugStacks.length === 0) {
      // Nothing is currently rendering.
      return '';
    } // ReactDOMServer is reentrant so there may be multiple calls at the same time.
    // Take the frames from the innermost call which is the last in the array.


    var frames = currentDebugStacks[currentDebugStacks.length - 1];
    var stack = ''; // Go through every frame in the stack from the innermost one.

    for (var i = frames.length - 1; i >= 0; i--) {
      var frame = frames[i]; // Every frame might have more than one debug element stack entry associated with it.
      // This is because single-child nesting doesn't create materialized frames.
      // Instead it would push them through `pushElementToDebugStack()`.

      var debugElementStack = frame.debugElementStack;

      for (var ii = debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(debugElementStack[ii]);
      }
    }

    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutBadClass = {};
var didWarnAboutModulePatternComponent = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUndefinedDerivedState = {};
var didWarnAboutUninitializedState = {};
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
}; // We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name

var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset

var validatedTagCache = {};

function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    if (!VALID_TAG_REGEX.test(tag)) {
      {
        throw Error( "Invalid tag: " + tag );
      }
    }

    validatedTagCache[tag] = true;
  }
}

var styleNameCache = {};

var processStyleName = function (styleName) {
  if (styleNameCache.hasOwnProperty(styleName)) {
    return styleNameCache[styleName];
  }

  var result = hyphenateStyleName(styleName);
  styleNameCache[styleName] = result;
  return result;
};

function createMarkupForStyles(styles) {
  var serialized = '';
  var delimiter = '';

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];

    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styleValue);
      }
    }

    if (styleValue != null) {
      serialized += delimiter + (isCustomProperty ? styleName : processStyleName(styleName)) + ':';
      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
      delimiter = ';';
    }
  }

  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;

    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    error('%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);

    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

function shouldConstruct$1(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;

  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;

    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextForBrowser(content);
    }
  }

  return null;
}

function flattenTopLevelChildren(children) {
  if (!React.isValidElement(children)) {
    return toArray(children);
  }

  var element = children;

  if (element.type !== REACT_FRAGMENT_TYPE) {
    return [element];
  }

  var fragmentChildren = element.props.children;

  if (!React.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }

  var fragmentChildElement = fragmentChildren;
  return [fragmentChildElement];
}

function flattenOptionChildren(children) {
  if (children === undefined || children === null) {
    return children;
  }

  var content = ''; // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.

  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }

    content += child;

    {
      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
        didWarnInvalidOptionChildren = true;

        error('Only strings and numbers are supported as <option> children.');
      }
    }
  });
  return content;
}

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
  var ret = '<' + tagVerbatim;
  var isCustomComponent$1 = isCustomComponent(tagLowercase, props);

  for (var propKey in props) {
    if (!hasOwnProperty$2.call(props, propKey)) {
      continue;
    }

    var propValue = props[propKey];

    if (propValue == null) {
      continue;
    }

    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }

    var markup = null;

    if (isCustomComponent$1) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = createMarkupForProperty(propKey, propValue);
    }

    if (markup) {
      ret += ' ' + markup;
    }
  } // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.


  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + createMarkupForRoot();
  }

  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    {
      {
        throw Error( (getComponentName(type) || 'Component') + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null." );
      }
    }
  }
}

function resolve(child, context, threadID) {
  while (React.isValidElement(child)) {
    // Safe because we just checked it's an element.
    var element = child;
    var Component = element.type;

    {
      pushElementToDebugStack(element);
    }

    if (typeof Component !== 'function') {
      break;
    }

    processChild(element, Component);
  } // Extra closure so queue and replace can be captured properly


  function processChild(element, Component) {
    var isClass = shouldConstruct$1(Component);
    var publicContext = processContext(Component, context, threadID, isClass);
    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, currentPartialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }

        queue.push(currentPartialState);
      }
    };
    var inst;

    if (isClass) {
      inst = new Component(element.props, publicContext, updater);

      if (typeof Component.getDerivedStateFromProps === 'function') {
        {
          if (inst.state === null || inst.state === undefined) {
            var componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUninitializedState[componentName]) {
              error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);

              didWarnAboutUninitializedState[componentName] = true;
            }
          }
        }

        var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

        {
          if (partialState === undefined) {
            var _componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUndefinedDerivedState[_componentName]) {
              error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);

              didWarnAboutUndefinedDerivedState[_componentName] = true;
            }
          }
        }

        if (partialState != null) {
          inst.state = _assign({}, inst.state, partialState);
        }
      }
    } else {
      {
        if (Component.prototype && typeof Component.prototype.render === 'function') {
          var _componentName2 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutBadClass[_componentName2]) {
            error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);

            didWarnAboutBadClass[_componentName2] = true;
          }
        }
      }

      var componentIdentity = {};
      prepareToUseHooks(componentIdentity);
      inst = Component(element.props, publicContext, updater);
      inst = finishHooks(Component, element.props, inst, publicContext);

      {
        // Support for module components is deprecated and is removed behind a flag.
        // Whether or not it would crash later, we want to show a good message in DEV first.
        if (inst != null && inst.render != null) {
          var _componentName3 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutModulePatternComponent[_componentName3]) {
            error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName3, _componentName3, _componentName3);

            didWarnAboutModulePatternComponent[_componentName3] = true;
          }
        }
      } // If the flag is on, everything is assumed to be a function component.
      // Otherwise, we also do the unfortunate dynamic checks.


      if ( inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        return;
      }
    }

    inst.props = element.props;
    inst.context = publicContext;
    inst.updater = updater;
    var initialState = inst.state;

    if (initialState === undefined) {
      inst.state = initialState = null;
    }

    if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
      if (typeof inst.componentWillMount === 'function') {
        {
          if ( inst.componentWillMount.__suppressDeprecationWarning !== true) {
            var _componentName4 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutDeprecatedWillMount[_componentName4]) {
              warn( // keep this warning in sync with ReactStrictModeWarning.js
              'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', _componentName4);

              didWarnAboutDeprecatedWillMount[_componentName4] = true;
            }
          }
        } // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.


        if (typeof Component.getDerivedStateFromProps !== 'function') {
          inst.componentWillMount();
        }
      }

      if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        inst.UNSAFE_componentWillMount();
      }

      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;

          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];

            var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;

            if (_partialState != null) {
              if (dontMutate) {
                dontMutate = false;
                nextState = _assign({}, nextState, _partialState);
              } else {
                _assign(nextState, _partialState);
              }
            }
          }

          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }

    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }

    validateRenderResult(child, Component);
    var childContext;

    {
      if (typeof inst.getChildContext === 'function') {
        var _childContextTypes = Component.childContextTypes;

        if (typeof _childContextTypes === 'object') {
          childContext = inst.getChildContext();

          for (var contextKey in childContext) {
            if (!(contextKey in _childContextTypes)) {
              {
                throw Error( (getComponentName(Component) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes." );
              }
            }
          }
        } else {
          {
            error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
          }
        }
      }

      if (childContext) {
        context = _assign({}, context, childContext);
      }
    }
  }

  return {
    child: child,
    context: context
  };
}

var ReactDOMServerRenderer = /*#__PURE__*/function () {
  // TODO: type this more strictly:
  // DEV-only
  function ReactDOMServerRenderer(children, makeStaticMarkup, options) {
    var flatChildren = flattenTopLevelChildren(children);
    var topFrame = {
      type: null,
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: flatChildren,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };

    {
      topFrame.debugElementStack = [];
    }

    this.threadID = allocThreadID();
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;
    this.suspenseDepth = 0; // Context (new API)

    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = []; // useOpaqueIdentifier ID

    this.uniqueID = 0;
    this.identifierPrefix = options && options.identifierPrefix || '';

    {
      this.contextProviderStack = [];
    }
  }

  var _proto = ReactDOMServerRenderer.prototype;

  _proto.destroy = function destroy() {
    if (!this.exhausted) {
      this.exhausted = true;
      this.clearProviders();
      freeThreadID(this.threadID);
    }
  }
  /**
   * Note: We use just two stacks regardless of how many context providers you have.
   * Providers are always popped in the reverse order to how they were pushed
   * so we always know on the way down which provider you'll encounter next on the way up.
   * On the way down, we push the current provider, and its context value *before*
   * we mutated it, onto the stacks. Therefore, on the way up, we always know which
   * provider needs to be "restored" to which value.
   * https://github.com/facebook/react/pull/12985#issuecomment-396301248
   */
  ;

  _proto.pushProvider = function pushProvider(provider) {
    var index = ++this.contextIndex;
    var context = provider.type._context;
    var threadID = this.threadID;
    validateContextBounds(context, threadID);
    var previousValue = context[threadID]; // Remember which value to restore this context to on our way up.

    this.contextStack[index] = context;
    this.contextValueStack[index] = previousValue;

    {
      // Only used for push/pop mismatch warnings.
      this.contextProviderStack[index] = provider;
    } // Mutate the current value.


    context[threadID] = provider.props.value;
  };

  _proto.popProvider = function popProvider(provider) {
    var index = this.contextIndex;

    {
      if (index < 0 || provider !== this.contextProviderStack[index]) {
        error('Unexpected pop.');
      }
    }

    var context = this.contextStack[index];
    var previousValue = this.contextValueStack[index]; // "Hide" these null assignments from Flow by using `any`
    // because conceptually they are deletions--as long as we
    // promise to never access values beyond `this.contextIndex`.

    this.contextStack[index] = null;
    this.contextValueStack[index] = null;

    {
      this.contextProviderStack[index] = null;
    }

    this.contextIndex--; // Restore to the previous value we stored as we were walking down.
    // We've already verified that this context has been expanded to accommodate
    // this thread id, so we don't need to do it again.

    context[this.threadID] = previousValue;
  };

  _proto.clearProviders = function clearProviders() {
    // Restore any remaining providers on the stack to previous values
    for (var index = this.contextIndex; index >= 0; index--) {
      var context = this.contextStack[index];
      var previousValue = this.contextValueStack[index];
      context[this.threadID] = previousValue;
    }
  };

  _proto.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var prevPartialRenderer = currentPartialRenderer;
    setCurrentPartialRenderer(this);
    var prevDispatcher = ReactCurrentDispatcher$1.current;
    ReactCurrentDispatcher$1.current = Dispatcher;

    try {
      // Markup generated within <Suspense> ends up buffered until we know
      // nothing in that boundary suspended
      var out = [''];
      var suspended = false;

      while (out[0].length < bytes) {
        if (this.stack.length === 0) {
          this.exhausted = true;
          freeThreadID(this.threadID);
          break;
        }

        var frame = this.stack[this.stack.length - 1];

        if (suspended || frame.childIndex >= frame.children.length) {
          var footer = frame.footer;

          if (footer !== '') {
            this.previousWasTextNode = false;
          }

          this.stack.pop();

          if (frame.type === 'select') {
            this.currentSelectValue = null;
          } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
            var provider = frame.type;
            this.popProvider(provider);
          } else if (frame.type === REACT_SUSPENSE_TYPE) {
            this.suspenseDepth--;
            var buffered = out.pop();

            if (suspended) {
              suspended = false; // If rendering was suspended at this boundary, render the fallbackFrame

              var fallbackFrame = frame.fallbackFrame;

              if (!fallbackFrame) {
                {
                  throw Error(true ? "ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue." : undefined);
                }
              }

              this.stack.push(fallbackFrame);
              out[this.suspenseDepth] += '<!--$!-->'; // Skip flushing output since we're switching to the fallback

              continue;
            } else {
              out[this.suspenseDepth] += buffered;
            }
          } // Flush output


          out[this.suspenseDepth] += footer;
          continue;
        }

        var child = frame.children[frame.childIndex++];
        var outBuffer = '';

        if (true) {
          pushCurrentDebugStack(this.stack); // We're starting work on this frame, so reset its inner stack.

          frame.debugElementStack.length = 0;
        }

        try {
          outBuffer += this.render(child, frame.context, frame.domNamespace);
        } catch (err) {
          if (err != null && typeof err.then === 'function') {
            if (enableSuspenseServerRenderer) {
              if (!(this.suspenseDepth > 0)) {
                {
                  throw Error(true ? "A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." : undefined);
                }
              }

              suspended = true;
            } else {
              if (true) {
                {
                  throw Error(true ? "ReactDOMServer does not yet support Suspense." : undefined);
                }
              }
            }
          } else {
            throw err;
          }
        } finally {
          if (true) {
            popCurrentDebugStack();
          }
        }

        if (out.length <= this.suspenseDepth) {
          out.push('');
        }

        out[this.suspenseDepth] += outBuffer;
      }

      return out[0];
    } finally {
      ReactCurrentDispatcher$1.current = prevDispatcher;
      setCurrentPartialRenderer(prevPartialRenderer);
      resetHooksState();
    }
  };

  _proto.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;

      if (text === '') {
        return '';
      }

      if (this.makeStaticMarkup) {
        return escapeTextForBrowser(text);
      }

      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextForBrowser(text);
      }

      this.previousWasTextNode = true;
      return escapeTextForBrowser(text);
    } else {
      var nextChild;

      var _resolve = resolve(child, context, this.threadID);

      nextChild = _resolve.child;
      context = _resolve.context;

      if (nextChild === null || nextChild === false) {
        return '';
      } else if (!React.isValidElement(nextChild)) {
        if (nextChild != null && nextChild.$$typeof != null) {
          // Catch unexpected special types early.
          var $$typeof = nextChild.$$typeof;

          if (!($$typeof !== REACT_PORTAL_TYPE)) {
            {
              throw Error( "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." );
            }
          } // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.


          {
            {
              throw Error( "Unknown element-like object type: " + $$typeof.toString() + ". This is likely a bug in React. Please file an issue." );
            }
          }
        }

        var nextChildren = toArray(nextChild);
        var frame = {
          type: null,
          domNamespace: parentNamespace,
          children: nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };

        {
          frame.debugElementStack = [];
        }

        this.stack.push(frame);
        return '';
      } // Safe because we just checked it's an element.


      var nextElement = nextChild;
      var elementType = nextElement.type;

      if (typeof elementType === 'string') {
        return this.renderDOM(nextElement, context, parentNamespace);
      }

      switch (elementType) {
        // TODO: LegacyHidden acts the same as a fragment. This only works
        // because we currently assume that every instance of LegacyHidden is
        // accompanied by a host component wrapper. In the hidden mode, the host
        // component is given a `hidden` attribute, which ensures that the
        // initial HTML is not visible. To support the use of LegacyHidden as a
        // true fragment, without an extra DOM node, we would have to hide the
        // initial HTML in some other way.
        case REACT_LEGACY_HIDDEN_TYPE:
        case REACT_DEBUG_TRACING_MODE_TYPE:
        case REACT_STRICT_MODE_TYPE:
        case REACT_PROFILER_TYPE:
        case REACT_SUSPENSE_LIST_TYPE:
        case REACT_FRAGMENT_TYPE:
          {
            var _nextChildren = toArray(nextChild.props.children);

            var _frame = {
              type: null,
              domNamespace: parentNamespace,
              children: _nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };

            {
              _frame.debugElementStack = [];
            }

            this.stack.push(_frame);
            return '';
          }

        case REACT_SUSPENSE_TYPE:
          {
            {
              {
                {
                  throw Error( "ReactDOMServer does not yet support Suspense." );
                }
              }
            }
          }
        // eslint-disable-next-line-no-fallthrough

        case REACT_SCOPE_TYPE:
          {

            {
              {
                throw Error( "ReactDOMServer does not yet support scope components." );
              }
            }
          }
      }

      if (typeof elementType === 'object' && elementType !== null) {
        switch (elementType.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            {
              var element = nextChild;

              var _nextChildren5;

              var componentIdentity = {};
              prepareToUseHooks(componentIdentity);
              _nextChildren5 = elementType.render(element.props, element.ref);
              _nextChildren5 = finishHooks(elementType.render, element.props, _nextChildren5, element.ref);
              _nextChildren5 = toArray(_nextChildren5);
              var _frame5 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren5,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame5.debugElementStack = [];
              }

              this.stack.push(_frame5);
              return '';
            }

          case REACT_MEMO_TYPE:
            {
              var _element = nextChild;
              var _nextChildren6 = [React.createElement(elementType.type, _assign({
                ref: _element.ref
              }, _element.props))];
              var _frame6 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren6,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame6.debugElementStack = [];
              }

              this.stack.push(_frame6);
              return '';
            }

          case REACT_PROVIDER_TYPE:
            {
              var provider = nextChild;
              var nextProps = provider.props;

              var _nextChildren7 = toArray(nextProps.children);

              var _frame7 = {
                type: provider,
                domNamespace: parentNamespace,
                children: _nextChildren7,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame7.debugElementStack = [];
              }

              this.pushProvider(provider);
              this.stack.push(_frame7);
              return '';
            }

          case REACT_CONTEXT_TYPE:
            {
              var reactContext = nextChild.type; // The logic below for Context differs depending on PROD or DEV mode. In
              // DEV mode, we create a separate object for Context.Consumer that acts
              // like a proxy to Context. This proxy object adds unnecessary code in PROD
              // so we use the old behaviour (Context.Consumer references Context) to
              // reduce size and overhead. The separate object references context via
              // a property called "_context", which also gives us the ability to check
              // in DEV mode if this property exists or not and warn if it does not.

              {
                if (reactContext._context === undefined) {
                  // This may be because it's a Context (rather than a Consumer).
                  // Or it may be because it's older React where they're the same thing.
                  // We only want to warn if we're sure it's a new React.
                  if (reactContext !== reactContext.Consumer) {
                    if (!hasWarnedAboutUsingContextAsConsumer) {
                      hasWarnedAboutUsingContextAsConsumer = true;

                      error('Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                    }
                  }
                } else {
                  reactContext = reactContext._context;
                }
              }

              var _nextProps = nextChild.props;
              var threadID = this.threadID;
              validateContextBounds(reactContext, threadID);
              var nextValue = reactContext[threadID];

              var _nextChildren8 = toArray(_nextProps.children(nextValue));

              var _frame8 = {
                type: nextChild,
                domNamespace: parentNamespace,
                children: _nextChildren8,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame8.debugElementStack = [];
              }

              this.stack.push(_frame8);
              return '';
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_FUNDAMENTAL_TYPE:
            {

              {
                {
                  throw Error( "ReactDOMServer does not yet support the fundamental API." );
                }
              }
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_LAZY_TYPE:
            {
              var _element2 = nextChild;
              var lazyComponent = nextChild.type; // Attempt to initialize lazy component regardless of whether the
              // suspense server-side renderer is enabled so synchronously
              // resolved constructors are supported.

              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              var result = init(payload);
              var _nextChildren10 = [React.createElement(result, _assign({
                ref: _element2.ref
              }, _element2.props))];
              var _frame10 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren10,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame10.debugElementStack = [];
              }

              this.stack.push(_frame10);
              return '';
            }
        }
      }

      var info = '';

      {
        var owner = nextElement._owner;

        if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
        }

        var ownerName = owner ? getComponentName(owner) : null;

        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }
      }

      {
        {
          throw Error( "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (elementType == null ? elementType : typeof elementType) + "." + info );
        }
      }
    }
  };

  _proto.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();
    var namespace = parentNamespace;

    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        if (tag !== element.type) {
          error('<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type);
        }
      }
    }

    validateDangerousTag(tag);
    var props = element.props;

    if (tag === 'input') {
      {
        checkControlledValueProps('input', props);

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          error('%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

          didWarnDefaultChecked = true;
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          error('%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

          didWarnDefaultInputValue = true;
        }
      }

      props = _assign({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        checkControlledValueProps('textarea', props);

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          error('Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;

      if (initialValue == null) {
        var defaultValue = props.defaultValue; // TODO (yungsters): Remove support for children content in <textarea>.

        var textareaChildren = props.children;

        if (textareaChildren != null) {
          {
            error('Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }

          if (!(defaultValue == null)) {
            {
              throw Error( "If you supply `defaultValue` on a <textarea>, do not pass children." );
            }
          }

          if (Array.isArray(textareaChildren)) {
            if (!(textareaChildren.length <= 1)) {
              {
                throw Error( "<textarea> can only have at most one child." );
              }
            }

            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }

        if (defaultValue == null) {
          defaultValue = '';
        }

        initialValue = defaultValue;
      }

      props = _assign({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        checkControlledValueProps('select', props);

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];

          if (props[propName] == null) {
            continue;
          }

          var isArray = Array.isArray(props[propName]);

          if (props.multiple && !isArray) {
            error('The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
          } else if (!props.multiple && isArray) {
            error('The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          error('Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

          didWarnDefaultSelectValue = true;
        }
      }

      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = _assign({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);

      if (selectValue != null) {
        var value;

        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }

        selected = false;

        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = _assign({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps(tag, props);
    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
    var footer = '';

    if (omittedCloseTags.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }

    var children;
    var innerMarkup = getNonChildrenInnerMarkup(props);

    if (innerMarkup != null) {
      children = [];

      if (newlineEatingTags.hasOwnProperty(tag) && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }

      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }

    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      type: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };

    {
      frame.debugElementStack = [];
    }

    this.stack.push(frame);
    this.previousWasTextNode = false;
    return out;
  };

  return ReactDOMServerRenderer;
}();

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
 */

function renderToString(element, options) {
  var renderer = new ReactDOMServerRenderer(element, false, options);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}
/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
 */

function renderToStaticMarkup(element, options) {
  var renderer = new ReactDOMServerRenderer(element, true, options);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

function renderToNodeStream() {
  {
    {
      throw Error( "ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead." );
    }
  }
}

function renderToStaticNodeStream() {
  {
    {
      throw Error( "ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead." );
    }
  }
}

exports.renderToNodeStream = renderToNodeStream;
exports.renderToStaticMarkup = renderToStaticMarkup;
exports.renderToStaticNodeStream = renderToStaticNodeStream;
exports.renderToString = renderToString;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react-dom/server.browser.js":
/*!**************************************************!*\
  !*** ./node_modules/react-dom/server.browser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.browser.development.js */ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Page */ "./components/Page.tsx");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/styles/nprogress.css */ "./components/styles/nprogress.css");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "C:\\Users\\zak.ali\\Desktop\\ReactProjects\\Advanced-React\\sick-fits\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable import/no-unresolved */

/* eslint-disable react/prop-types */






next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on('routeChangeStart', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start();
});
next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on('routeChangeComplete', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
});
next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on('routeChangeError', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
});

function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      apollo = _ref.apollo;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
    client: apollo,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Page__WEBPACK_IMPORTED_MODULE_8__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_c = App;

App.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var Component, ctx, pageProps;
    return C_Users_zak_ali_Desktop_ReactProjects_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = _ref2.Component, ctx = _ref2.ctx;
            pageProps = {};

            if (!Component.getInitialProps) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return Component.getInitialProps(ctx);

          case 5:
            pageProps = _context.sent;

          case 6:
            pageProps.query = ctx.query;
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_lib_withData__WEBPACK_IMPORTED_MODULE_7__["default"])(App));

var _c, _c2;

$RefreshReg$(_c, "App");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9saWIvd2l0aERhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9zc3IvUmVuZGVyUHJvbWlzZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9zc3IvZ2V0RGF0YUZyb21UcmVlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyL3JlbmRlclRvU3RyaW5nV2l0aERhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2xpbmstZXJyb3IvbGliL2J1bmRsZS5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hcG9sbG8tdXBsb2FkLWNsaWVudC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXBvbGxvLXVwbG9hZC1jbGllbnQvcHVibGljL1JlYWN0TmF0aXZlRmlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Fwb2xsby11cGxvYWQtY2xpZW50L3B1YmxpYy9jcmVhdGVVcGxvYWRMaW5rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXBvbGxvLXVwbG9hZC1jbGllbnQvcHVibGljL2Zvcm1EYXRhQXBwZW5kRmlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Fwb2xsby11cGxvYWQtY2xpZW50L3B1YmxpYy9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hcG9sbG8tdXBsb2FkLWNsaWVudC9wdWJsaWMvaXNFeHRyYWN0YWJsZUZpbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9leHRyYWN0LWZpbGVzL3B1YmxpYy9SZWFjdE5hdGl2ZUZpbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9leHRyYWN0LWZpbGVzL3B1YmxpYy9leHRyYWN0RmlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9leHRyYWN0LWZpbGVzL3B1YmxpYy9pc0V4dHJhY3RhYmxlRmlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQtd2l0aC1hcG9sbG8vbGliL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQtd2l0aC1hcG9sbG8vbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC13aXRoLWFwb2xsby9saWIvd2l0aEFwb2xsby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvZmV0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Nqcy9yZWFjdC1kb20tc2VydmVyLmJyb3dzZXIuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiZW5kcG9pbnQiLCJwcm9kRW5kcG9pbnQiLCJwZXJQYWdlIiwiY3JlYXRlQ2xpZW50IiwiaGVhZGVycyIsImluaXRpYWxTdGF0ZSIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJBcG9sbG9MaW5rIiwiZnJvbSIsIm9uRXJyb3IiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJsb2NhdGlvbnMiLCJwYXRoIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVVwbG9hZExpbmsiLCJ1cmkiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwicmVzdG9yZSIsIndpdGhBcG9sbG8iLCJnZXREYXRhRnJvbVRyZWUiLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsIk5Qcm9ncmVzcyIsInN0YXJ0IiwiZG9uZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFwb2xsbyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5Iiwid2l0aERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sSUFBTUEsUUFBUSxzQ0FBZDtBQUNBLElBQU1DLFlBQVksOEJBQWxCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLENBQWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNDLFlBQVQsT0FBaUQ7QUFBQSxNQUF6QkMsT0FBeUIsUUFBekJBLE9BQXlCO0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjtBQUMvQyxTQUFPLElBQUlDLDJEQUFKLENBQWlCO0FBQ3RCQyxRQUFJLEVBQUVDLHlEQUFVLENBQUNDLElBQVgsQ0FBZ0IsQ0FDcEJDLGtFQUFPLENBQUMsaUJBQXFDO0FBQUEsVUFBbENDLGFBQWtDLFNBQWxDQSxhQUFrQztBQUFBLFVBQW5CQyxZQUFtQixT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QUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDNUthOztBQUViO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFv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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRFQUE0RSxZQUFZO0FBQ3hGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwySEFBMkgsNkJBQTZCO0FBQ3hKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLFlBQVksT0FBTztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUIsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0ZBQWtGO0FBQ2xGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sMENBQTBDOzs7QUFHakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0ZBQStGO0FBQy9GOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMENBQTBDOzs7QUFHakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztB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bUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLDBDQUEwQyxxQkFBcUI7QUFDL0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLFlBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQzs7QUFFaEM7O0FBRUE7QUFDQTtBQUNBLDRKQUE0SixTQUEyQjtBQUN2TDtBQUNBOztBQUVBO0FBQ0EscURBQXFEOztBQUVyRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdQQUFnUCxTQUEyQjtBQUMzUTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiLGtCQUFrQixJQUFNO0FBQ3hCO0FBQ0EsdUZBQXVGLFNBQTJCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw4Q0FBOEM7O0FBRTlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FB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QTtBQUFBO0FBQWtCSCxxQkFBbEIsU0FBa0JBLFNBQWxCLEVBQTZCSSxHQUE3QixTQUE2QkEsR0FBN0I7QUFDaEJILHFCQURnQixHQUNKLEVBREk7O0FBQUEsaUJBRWhCRCxTQUFTLENBQUNHLGVBRk07QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFHQUgsU0FBUyxDQUFDRyxlQUFWLENBQTBCQyxHQUExQixDQUhBOztBQUFBO0FBR2xCSCxxQkFIa0I7O0FBQUE7QUFNcEJBLHFCQUFTLENBQUNJLEtBQVYsR0FBa0JELEdBQUcsQ0FBQ0MsS0FBdEI7QUFOb0IsNkNBT2I7QUFBRUosdUJBQVMsRUFBVEE7QUFBRixhQVBhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXRCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVlLHFFQUFBSyw2REFBUSxDQUFDUCxHQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOGZjZjYzZTEyNDQ5ZWJiMmY4YzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgY2xpZW50IHNpZGUgY29uZmlnIG9ubHkgLSBkb24ndCBwdXQgYW55dGhpbmcgaW4gaGVyZSB0aGF0IHNob3VsZG4ndCBiZSBwdWJsaWMhXHJcbmV4cG9ydCBjb25zdCBlbmRwb2ludCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dyYXBocWxgO1xyXG5leHBvcnQgY29uc3QgcHJvZEVuZHBvaW50ID0gYGZpbGwgbWUgaW4gd2hlbiB3ZSBkZXBsb3lgO1xyXG5leHBvcnQgY29uc3QgcGVyUGFnZSA9IDQ7XHJcbiIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgQXBvbGxvTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgb25FcnJvciB9IGZyb20gJ0BhcG9sbG8vbGluay1lcnJvcic7XHJcbmltcG9ydCB7IGdldERhdGFGcm9tVHJlZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50L3JlYWN0L3Nzcic7XHJcbmltcG9ydCB7IGNyZWF0ZVVwbG9hZExpbmsgfSBmcm9tICdhcG9sbG8tdXBsb2FkLWNsaWVudCc7XHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ25leHQtd2l0aC1hcG9sbG8nO1xyXG5pbXBvcnQgeyBlbmRwb2ludCwgcHJvZEVuZHBvaW50IH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNsaWVudCh7IGhlYWRlcnMsIGluaXRpYWxTdGF0ZSB9KSB7XHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgbGluazogQXBvbGxvTGluay5mcm9tKFtcclxuICAgICAgb25FcnJvcigoeyBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3IgfSkgPT4ge1xyXG4gICAgICAgIGlmIChncmFwaFFMRXJyb3JzKVxyXG4gICAgICAgICAgZ3JhcGhRTEVycm9ycy5mb3JFYWNoKCh7IG1lc3NhZ2UsIGxvY2F0aW9ucywgcGF0aCB9KSA9PlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICBgW0dyYXBoUUwgZXJyb3JdOiBNZXNzYWdlOiAke21lc3NhZ2V9LCBMb2NhdGlvbjogJHtsb2NhdGlvbnN9LCBQYXRoOiAke3BhdGh9YFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGlmIChuZXR3b3JrRXJyb3IpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgYFtOZXR3b3JrIGVycm9yXTogJHtuZXR3b3JrRXJyb3J9LiBCYWNrZW5kIGlzIHVucmVhY2hhYmxlLiBJcyBpdCBydW5uaW5nP2BcclxuICAgICAgICAgICk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAvLyB0aGlzIHVzZXMgYXBvbGxvLWxpbmstaHR0cCB1bmRlciB0aGUgaG9vZCwgc28gYWxsIHRoZSBvcHRpb25zIGhlcmUgY29tZSBmcm9tIHRoYXQgcGFja2FnZVxyXG4gICAgICBjcmVhdGVVcGxvYWRMaW5rKHtcclxuICAgICAgICB1cmk6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gZW5kcG9pbnQgOiBwcm9kRW5kcG9pbnQsXHJcbiAgICAgICAgZmV0Y2hPcHRpb25zOiB7XHJcbiAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gcGFzcyB0aGUgaGVhZGVycyBhbG9uZyBmcm9tIHRoaXMgcmVxdWVzdC4gVGhpcyBlbmFibGVzIFNTUiB3aXRoIGxvZ2dlZCBpbiBzdGF0ZVxyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgIH0pLFxyXG4gICAgXSksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xyXG4gICAgICB0eXBlUG9saWNpZXM6IHtcclxuICAgICAgICBRdWVyeToge1xyXG4gICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFdlIHdpbGwgYWRkIHRoaXMgdG9nZXRoZXIhXHJcbiAgICAgICAgICAgIC8vIGFsbFByb2R1Y3RzOiBwYWdpbmF0aW9uRmllbGQoKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLnJlc3RvcmUoaW5pdGlhbFN0YXRlIHx8IHt9KSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhjcmVhdGVDbGllbnQsIHsgZ2V0RGF0YUZyb21UcmVlIH0pO1xyXG4iLCJmdW5jdGlvbiBtYWtlRGVmYXVsdFF1ZXJ5SW5mbygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWVuOiBmYWxzZSxcbiAgICAgICAgb2JzZXJ2YWJsZTogbnVsbFxuICAgIH07XG59XG52YXIgUmVuZGVyUHJvbWlzZXMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlbmRlclByb21pc2VzKCkge1xuICAgICAgICB0aGlzLnF1ZXJ5UHJvbWlzZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucXVlcnlJbmZvVHJpZSA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLnJlZ2lzdGVyU1NST2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvYnNlcnZhYmxlLCBwcm9wcykge1xuICAgICAgICB0aGlzLmxvb2t1cFF1ZXJ5SW5mbyhwcm9wcykub2JzZXJ2YWJsZSA9IG9ic2VydmFibGU7XG4gICAgfTtcbiAgICBSZW5kZXJQcm9taXNlcy5wcm90b3R5cGUuZ2V0U1NST2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICByZXR1cm4gdGhpcy5sb29rdXBRdWVyeUluZm8ocHJvcHMpLm9ic2VydmFibGU7XG4gICAgfTtcbiAgICBSZW5kZXJQcm9taXNlcy5wcm90b3R5cGUuYWRkUXVlcnlQcm9taXNlID0gZnVuY3Rpb24gKHF1ZXJ5SW5zdGFuY2UsIGZpbmlzaCkge1xuICAgICAgICB2YXIgaW5mbyA9IHRoaXMubG9va3VwUXVlcnlJbmZvKHF1ZXJ5SW5zdGFuY2UuZ2V0T3B0aW9ucygpKTtcbiAgICAgICAgaWYgKCFpbmZvLnNlZW4pIHtcbiAgICAgICAgICAgIHRoaXMucXVlcnlQcm9taXNlcy5zZXQocXVlcnlJbnN0YW5jZS5nZXRPcHRpb25zKCksIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShxdWVyeUluc3RhbmNlLmZldGNoRGF0YSgpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaW5pc2goKTtcbiAgICB9O1xuICAgIFJlbmRlclByb21pc2VzLnByb3RvdHlwZS5oYXNQcm9taXNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlQcm9taXNlcy5zaXplID4gMDtcbiAgICB9O1xuICAgIFJlbmRlclByb21pc2VzLnByb3RvdHlwZS5jb25zdW1lQW5kQXdhaXRQcm9taXNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHByb21pc2VzID0gW107XG4gICAgICAgIHRoaXMucXVlcnlQcm9taXNlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9taXNlLCBxdWVyeUluc3RhbmNlKSB7XG4gICAgICAgICAgICBfdGhpcy5sb29rdXBRdWVyeUluZm8ocXVlcnlJbnN0YW5jZSkuc2VlbiA9IHRydWU7XG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5xdWVyeVByb21pc2VzLmNsZWFyKCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfTtcbiAgICBSZW5kZXJQcm9taXNlcy5wcm90b3R5cGUubG9va3VwUXVlcnlJbmZvID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHZhciBxdWVyeUluZm9UcmllID0gdGhpcy5xdWVyeUluZm9UcmllO1xuICAgICAgICB2YXIgcXVlcnkgPSBwcm9wcy5xdWVyeSwgdmFyaWFibGVzID0gcHJvcHMudmFyaWFibGVzO1xuICAgICAgICB2YXIgdmFyTWFwID0gcXVlcnlJbmZvVHJpZS5nZXQocXVlcnkpIHx8IG5ldyBNYXAoKTtcbiAgICAgICAgaWYgKCFxdWVyeUluZm9UcmllLmhhcyhxdWVyeSkpXG4gICAgICAgICAgICBxdWVyeUluZm9UcmllLnNldChxdWVyeSwgdmFyTWFwKTtcbiAgICAgICAgdmFyIHZhcmlhYmxlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHZhcmlhYmxlcyk7XG4gICAgICAgIHZhciBpbmZvID0gdmFyTWFwLmdldCh2YXJpYWJsZXNTdHJpbmcpIHx8IG1ha2VEZWZhdWx0UXVlcnlJbmZvKCk7XG4gICAgICAgIGlmICghdmFyTWFwLmhhcyh2YXJpYWJsZXNTdHJpbmcpKVxuICAgICAgICAgICAgdmFyTWFwLnNldCh2YXJpYWJsZXNTdHJpbmcsIGluZm8pO1xuICAgICAgICByZXR1cm4gaW5mbztcbiAgICB9O1xuICAgIHJldHVybiBSZW5kZXJQcm9taXNlcztcbn0oKSk7XG5leHBvcnQgeyBSZW5kZXJQcm9taXNlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UmVuZGVyUHJvbWlzZXMuanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRBcG9sbG9Db250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvaW5kZXguanNcIjtcbmltcG9ydCB7IFJlbmRlclByb21pc2VzIH0gZnJvbSBcIi4vUmVuZGVyUHJvbWlzZXMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhRnJvbVRyZWUodHJlZSwgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHt9OyB9XG4gICAgcmV0dXJuIGdldE1hcmt1cEZyb21UcmVlKHtcbiAgICAgICAgdHJlZTogdHJlZSxcbiAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgcmVuZGVyRnVuY3Rpb246IHJlcXVpcmUoJ3JlYWN0LWRvbS9zZXJ2ZXInKS5yZW5kZXJUb1N0YXRpY01hcmt1cFxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcmt1cEZyb21UcmVlKF9hKSB7XG4gICAgdmFyIHRyZWUgPSBfYS50cmVlLCBfYiA9IF9hLmNvbnRleHQsIGNvbnRleHQgPSBfYiA9PT0gdm9pZCAwID8ge30gOiBfYiwgX2MgPSBfYS5yZW5kZXJGdW5jdGlvbiwgcmVuZGVyRnVuY3Rpb24gPSBfYyA9PT0gdm9pZCAwID8gcmVxdWlyZSgncmVhY3QtZG9tL3NlcnZlcicpLnJlbmRlclRvU3RhdGljTWFya3VwIDogX2M7XG4gICAgdmFyIHJlbmRlclByb21pc2VzID0gbmV3IFJlbmRlclByb21pc2VzKCk7XG4gICAgZnVuY3Rpb24gcHJvY2VzcygpIHtcbiAgICAgICAgdmFyIEFwb2xsb0NvbnRleHQgPSBnZXRBcG9sbG9Db250ZXh0KCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEFwb2xsb0NvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjb250ZXh0KSwgeyByZW5kZXJQcm9taXNlczogcmVuZGVyUHJvbWlzZXMgfSkgfSwgdHJlZSk7XG4gICAgICAgICAgICByZXNvbHZlKHJlbmRlckZ1bmN0aW9uKGVsZW1lbnQpKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlclByb21pc2VzLmhhc1Byb21pc2VzKClcbiAgICAgICAgICAgICAgICA/IHJlbmRlclByb21pc2VzLmNvbnN1bWVBbmRBd2FpdFByb21pc2VzKCkudGhlbihwcm9jZXNzKVxuICAgICAgICAgICAgICAgIDogaHRtbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKHByb2Nlc3MpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0RGF0YUZyb21UcmVlLmpzLm1hcCIsImV4cG9ydCB7IGdldE1hcmt1cEZyb21UcmVlLCBnZXREYXRhRnJvbVRyZWUgfSBmcm9tIFwiLi9nZXREYXRhRnJvbVRyZWUuanNcIjtcbmV4cG9ydCB7IHJlbmRlclRvU3RyaW5nV2l0aERhdGEgfSBmcm9tIFwiLi9yZW5kZXJUb1N0cmluZ1dpdGhEYXRhLmpzXCI7XG5leHBvcnQgeyBSZW5kZXJQcm9taXNlcyB9IGZyb20gXCIuL1JlbmRlclByb21pc2VzLmpzXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBnZXRNYXJrdXBGcm9tVHJlZSB9IGZyb20gXCIuL2dldERhdGFGcm9tVHJlZS5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvU3RyaW5nV2l0aERhdGEoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIGdldE1hcmt1cEZyb21UcmVlKHtcbiAgICAgICAgdHJlZTogY29tcG9uZW50LFxuICAgICAgICByZW5kZXJGdW5jdGlvbjogcmVxdWlyZSgncmVhY3QtZG9tL3NlcnZlcicpLnJlbmRlclRvU3RyaW5nXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZW5kZXJUb1N0cmluZ1dpdGhEYXRhLmpzLm1hcCIsImltcG9ydCB7IF9fZXh0ZW5kcyB9IGZyb20gJ3RzbGliJztcbmltcG9ydCB7IEFwb2xsb0xpbmssIE9ic2VydmFibGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudC9jb3JlJztcblxuZnVuY3Rpb24gb25FcnJvcihlcnJvckhhbmRsZXIpIHtcbiAgICByZXR1cm4gbmV3IEFwb2xsb0xpbmsoZnVuY3Rpb24gKG9wZXJhdGlvbiwgZm9yd2FyZCkge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICB2YXIgc3ViO1xuICAgICAgICAgICAgdmFyIHJldHJpZWRTdWI7XG4gICAgICAgICAgICB2YXIgcmV0cmllZFJlc3VsdDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc3ViID0gZm9yd2FyZChvcGVyYXRpb24pLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0cmllZFJlc3VsdCA9IGVycm9ySGFuZGxlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IHJlc3VsdC5lcnJvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogb3BlcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkOiBmb3J3YXJkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXRyaWVkUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHJpZWRTdWIgPSByZXRyaWVkUmVzdWx0LnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IG9ic2VydmVyLmNvbXBsZXRlLmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChuZXR3b3JrRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHJpZWRSZXN1bHQgPSBlcnJvckhhbmRsZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogb3BlcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtFcnJvcjogbmV0d29ya0Vycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoUUxFcnJvcnM6IG5ldHdvcmtFcnJvciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3IucmVzdWx0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmQ6IGZvcndhcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXRyaWVkUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0cmllZFN1YiA9IHJldHJpZWRSZXN1bHQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogb2JzZXJ2ZXIuY29tcGxldGUuYmluZChvYnNlcnZlciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV0d29ya0Vycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmV0cmllZFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlLmJpbmQob2JzZXJ2ZXIpKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcih7IG5ldHdvcmtFcnJvcjogZSwgb3BlcmF0aW9uOiBvcGVyYXRpb24sIGZvcndhcmQ6IGZvcndhcmQgfSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzdWIpXG4gICAgICAgICAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIGlmIChyZXRyaWVkU3ViKVxuICAgICAgICAgICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxudmFyIEVycm9yTGluayA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEVycm9yTGluaywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBFcnJvckxpbmsoZXJyb3JIYW5kbGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmxpbmsgPSBvbkVycm9yKGVycm9ySGFuZGxlcik7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRXJyb3JMaW5rLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gKG9wZXJhdGlvbiwgZm9yd2FyZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saW5rLnJlcXVlc3Qob3BlcmF0aW9uLCBmb3J3YXJkKTtcbiAgICB9O1xuICAgIHJldHVybiBFcnJvckxpbms7XG59KEFwb2xsb0xpbmspKTtcblxuZXhwb3J0IHsgRXJyb3JMaW5rLCBvbkVycm9yIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1idW5kbGUuZXNtLmpzLm1hcFxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdleHRyYWN0LWZpbGVzL3B1YmxpYy9SZWFjdE5hdGl2ZUZpbGUnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ0BhcG9sbG8vY2xpZW50L2NvcmUnKSxcbiAgQXBvbGxvTGluayA9IF9yZXF1aXJlLkFwb2xsb0xpbmssXG4gIE9ic2VydmFibGUgPSBfcmVxdWlyZS5PYnNlcnZhYmxlO1xuXG52YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgnQGFwb2xsby9jbGllbnQvbGluay9odHRwJyksXG4gIGNyZWF0ZVNpZ25hbElmU3VwcG9ydGVkID0gX3JlcXVpcmUyLmNyZWF0ZVNpZ25hbElmU3VwcG9ydGVkLFxuICBmYWxsYmFja0h0dHBDb25maWcgPSBfcmVxdWlyZTIuZmFsbGJhY2tIdHRwQ29uZmlnLFxuICBwYXJzZUFuZENoZWNrSHR0cFJlc3BvbnNlID0gX3JlcXVpcmUyLnBhcnNlQW5kQ2hlY2tIdHRwUmVzcG9uc2UsXG4gIHJld3JpdGVVUklGb3JHRVQgPSBfcmVxdWlyZTIucmV3cml0ZVVSSUZvckdFVCxcbiAgc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5ID0gX3JlcXVpcmUyLnNlbGVjdEh0dHBPcHRpb25zQW5kQm9keSxcbiAgc2VsZWN0VVJJID0gX3JlcXVpcmUyLnNlbGVjdFVSSSxcbiAgc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIgPSBfcmVxdWlyZTIuc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXI7XG5cbnZhciBleHRyYWN0RmlsZXMgPSByZXF1aXJlKCdleHRyYWN0LWZpbGVzL3B1YmxpYy9leHRyYWN0RmlsZXMnKTtcblxudmFyIGZvcm1EYXRhQXBwZW5kRmlsZSA9IHJlcXVpcmUoJy4vZm9ybURhdGFBcHBlbmRGaWxlJyk7XG5cbnZhciBpc0V4dHJhY3RhYmxlRmlsZSA9IHJlcXVpcmUoJy4vaXNFeHRyYWN0YWJsZUZpbGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVVcGxvYWRMaW5rKF90ZW1wKSB7XG4gIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgX3JlZiR1cmkgPSBfcmVmLnVyaSxcbiAgICBmZXRjaFVyaSA9IF9yZWYkdXJpID09PSB2b2lkIDAgPyAnL2dyYXBocWwnIDogX3JlZiR1cmksXG4gICAgdXNlR0VURm9yUXVlcmllcyA9IF9yZWYudXNlR0VURm9yUXVlcmllcyxcbiAgICBfcmVmJGlzRXh0cmFjdGFibGVGaWwgPSBfcmVmLmlzRXh0cmFjdGFibGVGaWxlLFxuICAgIGN1c3RvbUlzRXh0cmFjdGFibGVGaWxlID1cbiAgICAgIF9yZWYkaXNFeHRyYWN0YWJsZUZpbCA9PT0gdm9pZCAwXG4gICAgICAgID8gaXNFeHRyYWN0YWJsZUZpbGVcbiAgICAgICAgOiBfcmVmJGlzRXh0cmFjdGFibGVGaWwsXG4gICAgQ3VzdG9tRm9ybURhdGEgPSBfcmVmLkZvcm1EYXRhLFxuICAgIF9yZWYkZm9ybURhdGFBcHBlbmRGaSA9IF9yZWYuZm9ybURhdGFBcHBlbmRGaWxlLFxuICAgIGN1c3RvbUZvcm1EYXRhQXBwZW5kRmlsZSA9XG4gICAgICBfcmVmJGZvcm1EYXRhQXBwZW5kRmkgPT09IHZvaWQgMFxuICAgICAgICA/IGZvcm1EYXRhQXBwZW5kRmlsZVxuICAgICAgICA6IF9yZWYkZm9ybURhdGFBcHBlbmRGaSxcbiAgICBjdXN0b21GZXRjaCA9IF9yZWYuZmV0Y2gsXG4gICAgZmV0Y2hPcHRpb25zID0gX3JlZi5mZXRjaE9wdGlvbnMsXG4gICAgY3JlZGVudGlhbHMgPSBfcmVmLmNyZWRlbnRpYWxzLFxuICAgIGhlYWRlcnMgPSBfcmVmLmhlYWRlcnMsXG4gICAgaW5jbHVkZUV4dGVuc2lvbnMgPSBfcmVmLmluY2x1ZGVFeHRlbnNpb25zO1xuXG4gIHZhciBsaW5rQ29uZmlnID0ge1xuICAgIGh0dHA6IHtcbiAgICAgIGluY2x1ZGVFeHRlbnNpb25zOiBpbmNsdWRlRXh0ZW5zaW9ucyxcbiAgICB9LFxuICAgIG9wdGlvbnM6IGZldGNoT3B0aW9ucyxcbiAgICBjcmVkZW50aWFsczogY3JlZGVudGlhbHMsXG4gICAgaGVhZGVyczogaGVhZGVycyxcbiAgfTtcbiAgcmV0dXJuIG5ldyBBcG9sbG9MaW5rKGZ1bmN0aW9uIChvcGVyYXRpb24pIHtcbiAgICB2YXIgY29udGV4dCA9IG9wZXJhdGlvbi5nZXRDb250ZXh0KCk7XG4gICAgdmFyIF9jb250ZXh0JGNsaWVudEF3YXJlbiA9IGNvbnRleHQuY2xpZW50QXdhcmVuZXNzO1xuICAgIF9jb250ZXh0JGNsaWVudEF3YXJlbiA9XG4gICAgICBfY29udGV4dCRjbGllbnRBd2FyZW4gPT09IHZvaWQgMCA/IHt9IDogX2NvbnRleHQkY2xpZW50QXdhcmVuO1xuICAgIHZhciBuYW1lID0gX2NvbnRleHQkY2xpZW50QXdhcmVuLm5hbWUsXG4gICAgICB2ZXJzaW9uID0gX2NvbnRleHQkY2xpZW50QXdhcmVuLnZlcnNpb24sXG4gICAgICBoZWFkZXJzID0gY29udGV4dC5oZWFkZXJzO1xuICAgIHZhciBjb250ZXh0Q29uZmlnID0ge1xuICAgICAgaHR0cDogY29udGV4dC5odHRwLFxuICAgICAgb3B0aW9uczogY29udGV4dC5mZXRjaE9wdGlvbnMsXG4gICAgICBjcmVkZW50aWFsczogY29udGV4dC5jcmVkZW50aWFscyxcbiAgICAgIGhlYWRlcnM6IF9leHRlbmRzKFxuICAgICAgICB7fSxcbiAgICAgICAgbmFtZSAmJiB7XG4gICAgICAgICAgJ2Fwb2xsb2dyYXBocWwtY2xpZW50LW5hbWUnOiBuYW1lLFxuICAgICAgICB9LFxuICAgICAgICB2ZXJzaW9uICYmIHtcbiAgICAgICAgICAnYXBvbGxvZ3JhcGhxbC1jbGllbnQtdmVyc2lvbic6IHZlcnNpb24sXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcnNcbiAgICAgICksXG4gICAgfTtcblxuICAgIHZhciBfc2VsZWN0SHR0cE9wdGlvbnNBbmQgPSBzZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHkoXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgZmFsbGJhY2tIdHRwQ29uZmlnLFxuICAgICAgICBsaW5rQ29uZmlnLFxuICAgICAgICBjb250ZXh0Q29uZmlnXG4gICAgICApLFxuICAgICAgb3B0aW9ucyA9IF9zZWxlY3RIdHRwT3B0aW9uc0FuZC5vcHRpb25zLFxuICAgICAgYm9keSA9IF9zZWxlY3RIdHRwT3B0aW9uc0FuZC5ib2R5O1xuXG4gICAgdmFyIF9leHRyYWN0RmlsZXMgPSBleHRyYWN0RmlsZXMoYm9keSwgJycsIGN1c3RvbUlzRXh0cmFjdGFibGVGaWxlKSxcbiAgICAgIGNsb25lID0gX2V4dHJhY3RGaWxlcy5jbG9uZSxcbiAgICAgIGZpbGVzID0gX2V4dHJhY3RGaWxlcy5maWxlcztcblxuICAgIHZhciB1cmkgPSBzZWxlY3RVUkkob3BlcmF0aW9uLCBmZXRjaFVyaSk7XG5cbiAgICBpZiAoZmlsZXMuc2l6ZSkge1xuICAgICAgZGVsZXRlIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ107XG4gICAgICB2YXIgUnVudGltZUZvcm1EYXRhID0gQ3VzdG9tRm9ybURhdGEgfHwgRm9ybURhdGE7XG4gICAgICB2YXIgZm9ybSA9IG5ldyBSdW50aW1lRm9ybURhdGEoKTtcbiAgICAgIGZvcm0uYXBwZW5kKCdvcGVyYXRpb25zJywgc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIoY2xvbmUsICdQYXlsb2FkJykpO1xuICAgICAgdmFyIG1hcCA9IHt9O1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAocGF0aHMpIHtcbiAgICAgICAgbWFwWysraV0gPSBwYXRocztcbiAgICAgIH0pO1xuICAgICAgZm9ybS5hcHBlbmQoJ21hcCcsIEpTT04uc3RyaW5naWZ5KG1hcCkpO1xuICAgICAgaSA9IDA7XG4gICAgICBmaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXRocywgZmlsZSkge1xuICAgICAgICBjdXN0b21Gb3JtRGF0YUFwcGVuZEZpbGUoZm9ybSwgKytpLCBmaWxlKTtcbiAgICAgIH0pO1xuICAgICAgb3B0aW9ucy5ib2R5ID0gZm9ybTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKFxuICAgICAgICB1c2VHRVRGb3JRdWVyaWVzICYmXG4gICAgICAgICFvcGVyYXRpb24ucXVlcnkuZGVmaW5pdGlvbnMuc29tZShmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBkZWZpbml0aW9uLmtpbmQgPT09ICdPcGVyYXRpb25EZWZpbml0aW9uJyAmJlxuICAgICAgICAgICAgZGVmaW5pdGlvbi5vcGVyYXRpb24gPT09ICdtdXRhdGlvbidcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuXG4gICAgICBpZiAob3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIHZhciBfcmV3cml0ZVVSSUZvckdFVCA9IHJld3JpdGVVUklGb3JHRVQodXJpLCBib2R5KSxcbiAgICAgICAgICBuZXdVUkkgPSBfcmV3cml0ZVVSSUZvckdFVC5uZXdVUkksXG4gICAgICAgICAgcGFyc2VFcnJvciA9IF9yZXdyaXRlVVJJRm9yR0VULnBhcnNlRXJyb3I7XG5cbiAgICAgICAgaWYgKHBhcnNlRXJyb3IpXG4gICAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IocGFyc2VFcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHVyaSA9IG5ld1VSSTtcbiAgICAgIH0gZWxzZSBvcHRpb25zLmJvZHkgPSBzZXJpYWxpemVGZXRjaFBhcmFtZXRlcihjbG9uZSwgJ1BheWxvYWQnKTtcbiAgICB9XG5cbiAgICB2YXIgX2NyZWF0ZVNpZ25hbElmU3VwcG9yID0gY3JlYXRlU2lnbmFsSWZTdXBwb3J0ZWQoKSxcbiAgICAgIGNvbnRyb2xsZXIgPSBfY3JlYXRlU2lnbmFsSWZTdXBwb3IuY29udHJvbGxlcjtcblxuICAgIGlmIChjb250cm9sbGVyKSB7XG4gICAgICBpZiAob3B0aW9ucy5zaWduYWwpXG4gICAgICAgIG9wdGlvbnMuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgfSk7XG4gICAgICBvcHRpb25zLnNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsO1xuICAgIH1cblxuICAgIHZhciBydW50aW1lRmV0Y2ggPSBjdXN0b21GZXRjaCB8fCBmZXRjaDtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICB2YXIgY2xlYW5pbmdVcDtcbiAgICAgIHJ1bnRpbWVGZXRjaCh1cmksIG9wdGlvbnMpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIG9wZXJhdGlvbi5zZXRDb250ZXh0KHtcbiAgICAgICAgICAgIHJlc3BvbnNlOiByZXNwb25zZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHBhcnNlQW5kQ2hlY2tIdHRwUmVzcG9uc2Uob3BlcmF0aW9uKSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgaWYgKCFjbGVhbmluZ1VwKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzdWx0ICYmIGVycm9yLnJlc3VsdC5lcnJvcnMgJiYgZXJyb3IucmVzdWx0LmRhdGEpXG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZXJyb3IucmVzdWx0KTtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYW5pbmdVcCA9IHRydWU7XG4gICAgICAgIGlmIChjb250cm9sbGVyKSBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZm9ybURhdGFBcHBlbmRGaWxlKGZvcm1EYXRhLCBmaWVsZE5hbWUsIGZpbGUpIHtcbiAgZm9ybURhdGEuYXBwZW5kKGZpZWxkTmFtZSwgZmlsZSwgZmlsZS5uYW1lKTtcbn07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZVVwbG9hZExpbmsgfSBmcm9tICcuL2NyZWF0ZVVwbG9hZExpbmsuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmb3JtRGF0YUFwcGVuZEZpbGUgfSBmcm9tICcuL2Zvcm1EYXRhQXBwZW5kRmlsZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRXh0cmFjdGFibGVGaWxlIH0gZnJvbSAnLi9pc0V4dHJhY3RhYmxlRmlsZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0TmF0aXZlRmlsZSB9IGZyb20gJy4vUmVhY3ROYXRpdmVGaWxlLmpzJztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdleHRyYWN0LWZpbGVzL3B1YmxpYy9pc0V4dHJhY3RhYmxlRmlsZScpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFJlYWN0TmF0aXZlRmlsZShfcmVmKSB7XG4gIHZhciB1cmkgPSBfcmVmLnVyaSxcbiAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgIHR5cGUgPSBfcmVmLnR5cGU7XG4gIHRoaXMudXJpID0gdXJpO1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLnR5cGUgPSB0eXBlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRJc0V4dHJhY3RhYmxlRmlsZSA9IHJlcXVpcmUoJy4vaXNFeHRyYWN0YWJsZUZpbGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRyYWN0RmlsZXModmFsdWUsIHBhdGgsIGlzRXh0cmFjdGFibGVGaWxlKSB7XG4gIGlmIChwYXRoID09PSB2b2lkIDApIHtcbiAgICBwYXRoID0gJyc7XG4gIH1cblxuICBpZiAoaXNFeHRyYWN0YWJsZUZpbGUgPT09IHZvaWQgMCkge1xuICAgIGlzRXh0cmFjdGFibGVGaWxlID0gZGVmYXVsdElzRXh0cmFjdGFibGVGaWxlO1xuICB9XG5cbiAgdmFyIGNsb25lO1xuICB2YXIgZmlsZXMgPSBuZXcgTWFwKCk7XG5cbiAgZnVuY3Rpb24gYWRkRmlsZShwYXRocywgZmlsZSkge1xuICAgIHZhciBzdG9yZWRQYXRocyA9IGZpbGVzLmdldChmaWxlKTtcbiAgICBpZiAoc3RvcmVkUGF0aHMpIHN0b3JlZFBhdGhzLnB1c2guYXBwbHkoc3RvcmVkUGF0aHMsIHBhdGhzKTtcbiAgICBlbHNlIGZpbGVzLnNldChmaWxlLCBwYXRocyk7XG4gIH1cblxuICBpZiAoaXNFeHRyYWN0YWJsZUZpbGUodmFsdWUpKSB7XG4gICAgY2xvbmUgPSBudWxsO1xuICAgIGFkZEZpbGUoW3BhdGhdLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHByZWZpeCA9IHBhdGggPyBwYXRoICsgJy4nIDogJyc7XG4gICAgaWYgKHR5cGVvZiBGaWxlTGlzdCAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBGaWxlTGlzdClcbiAgICAgIGNsb25lID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKHZhbHVlLCBmdW5jdGlvbiAoZmlsZSwgaSkge1xuICAgICAgICBhZGRGaWxlKFsnJyArIHByZWZpeCArIGldLCBmaWxlKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KTtcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSlcbiAgICAgIGNsb25lID0gdmFsdWUubWFwKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZXh0cmFjdEZpbGVzKGNoaWxkLCAnJyArIHByZWZpeCArIGksIGlzRXh0cmFjdGFibGVGaWxlKTtcbiAgICAgICAgcmVzdWx0LmZpbGVzLmZvckVhY2goYWRkRmlsZSk7XG4gICAgICAgIHJldHVybiByZXN1bHQuY2xvbmU7XG4gICAgICB9KTtcbiAgICBlbHNlIGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICBjbG9uZSA9IHt9O1xuXG4gICAgICBmb3IgKHZhciBpIGluIHZhbHVlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RmlsZXModmFsdWVbaV0sICcnICsgcHJlZml4ICsgaSwgaXNFeHRyYWN0YWJsZUZpbGUpO1xuICAgICAgICByZXN1bHQuZmlsZXMuZm9yRWFjaChhZGRGaWxlKTtcbiAgICAgICAgY2xvbmVbaV0gPSByZXN1bHQuY2xvbmU7XG4gICAgICB9XG4gICAgfSBlbHNlIGNsb25lID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsb25lOiBjbG9uZSxcbiAgICBmaWxlczogZmlsZXMsXG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3ROYXRpdmVGaWxlID0gcmVxdWlyZSgnLi9SZWFjdE5hdGl2ZUZpbGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0V4dHJhY3RhYmxlRmlsZSh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgICh0eXBlb2YgRmlsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBGaWxlKSB8fFxuICAgICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBCbG9iKSB8fFxuICAgIHZhbHVlIGluc3RhbmNlb2YgUmVhY3ROYXRpdmVGaWxlXG4gICk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBQb2x5ZmlsbCBmZXRjaFxucmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTtcbnZhciBfYXBvbGxvQ2xpZW50O1xuZnVuY3Rpb24gaW5pdEFwb2xsbyhjbGllbnRGbiwgb3B0aW9ucykge1xuICAgIGlmICghY2xpZW50Rm4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbd2l0aEFwb2xsb10gdGhlIGZpcnN0IHBhcmFtIGlzIG1pc3NpbmcgYW5kIGlzIHJlcXVpcmVkIHRvIGdldCB0aGUgQXBvbGxvQ2xpZW50Jyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZ2V0Q2xpZW50KGNsaWVudEZuLCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKCFfYXBvbGxvQ2xpZW50KSB7XG4gICAgICAgIF9hcG9sbG9DbGllbnQgPSBnZXRDbGllbnQoY2xpZW50Rm4sIG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gX2Fwb2xsb0NsaWVudDtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGluaXRBcG9sbG87XG5mdW5jdGlvbiBnZXRDbGllbnQoY2xpZW50Rm4sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIGlmICh0eXBlb2YgY2xpZW50Rm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbd2l0aEFwb2xsb10gcmVxdWlyZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gQXBvbGxvQ2xpZW50Jyk7XG4gICAgfVxuICAgIHJldHVybiBjbGllbnRGbihvcHRpb25zKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHdpdGhBcG9sbG9fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi93aXRoQXBvbGxvXCIpKTtcbmV4cG9ydHMud2l0aEFwb2xsbyA9IHdpdGhBcG9sbG9fMS5kZWZhdWx0O1xudmFyIGFwb2xsb18xID0gcmVxdWlyZShcIi4vYXBvbGxvXCIpO1xuZXhwb3J0cy5pbml0QXBvbGxvID0gYXBvbGxvXzEuZGVmYXVsdDtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhBcG9sbG9fMS5kZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBoZWFkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm5leHQvaGVhZFwiKSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGFwb2xsb18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Fwb2xsb1wiKSk7XG4vLyBHZXRzIHRoZSBkaXNwbGF5IG5hbWUgb2YgYSBKU1ggY29tcG9uZW50IGZvciBkZXYgdG9vbHNcbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICAgIHJldHVybiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZnVuY3Rpb24gd2l0aEFwb2xsbyhjbGllbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChQYWdlLCBwYWdlT3B0aW9ucykge1xuICAgICAgICBpZiAocGFnZU9wdGlvbnMgPT09IHZvaWQgMCkgeyBwYWdlT3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHZhciBnZXRJbml0aWFsUHJvcHMgPSBQYWdlLmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgdmFyIGdldERhdGFGcm9tVHJlZSA9ICdnZXREYXRhRnJvbVRyZWUnIGluIHBhZ2VPcHRpb25zXG4gICAgICAgICAgICA/IHBhZ2VPcHRpb25zLmdldERhdGFGcm9tVHJlZVxuICAgICAgICAgICAgOiBvcHRpb25zLmdldERhdGFGcm9tVHJlZTtcbiAgICAgICAgdmFyIHJlbmRlciA9IHBhZ2VPcHRpb25zLnJlbmRlciB8fCBvcHRpb25zLnJlbmRlcjtcbiAgICAgICAgdmFyIG9uRXJyb3IgPSBwYWdlT3B0aW9ucy5vbkVycm9yIHx8IG9wdGlvbnMub25FcnJvcjtcbiAgICAgICAgZnVuY3Rpb24gV2l0aEFwb2xsbyhfYSkge1xuICAgICAgICAgICAgdmFyIF9iO1xuICAgICAgICAgICAgdmFyIGFwb2xsbyA9IF9hLmFwb2xsbywgYXBvbGxvU3RhdGUgPSBfYS5hcG9sbG9TdGF0ZSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImFwb2xsb1wiLCBcImFwb2xsb1N0YXRlXCJdKTtcbiAgICAgICAgICAgIHZhciBhcG9sbG9DbGllbnQgPSBhcG9sbG8gfHxcbiAgICAgICAgICAgICAgICBhcG9sbG9fMS5kZWZhdWx0KGNsaWVudCwgeyBpbml0aWFsU3RhdGU6IChfYiA9IGFwb2xsb1N0YXRlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZGF0YSB9KTtcbiAgICAgICAgICAgIGlmIChyZW5kZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgUGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm9wcyksIHsgYXBvbGxvOiBhcG9sbG9DbGllbnQgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQYWdlLCBfX2Fzc2lnbih7fSwgcHJvcHMsIHsgYXBvbGxvOiBhcG9sbG9DbGllbnQgfSkpO1xuICAgICAgICB9XG4gICAgICAgIFdpdGhBcG9sbG8uZGlzcGxheU5hbWUgPSBcIldpdGhBcG9sbG8oXCIgKyBnZXREaXNwbGF5TmFtZShQYWdlKSArIFwiKVwiO1xuICAgICAgICBpZiAoZ2V0SW5pdGlhbFByb3BzIHx8IGdldERhdGFGcm9tVHJlZSkge1xuICAgICAgICAgICAgV2l0aEFwb2xsby5nZXRJbml0aWFsUHJvcHMgPSBmdW5jdGlvbiAocGFnZUN0eCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBjdHgsIEFwcFRyZWUsIGhlYWRlcnMsIGFwb2xsbywgYXBvbGxvU3RhdGUsIHBhZ2VQcm9wcywgcHJvcHMsIGFwcFRyZWVQcm9wcywgZXJyb3JfMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHggPSAnQ29tcG9uZW50JyBpbiBwYWdlQ3R4ID8gcGFnZUN0eC5jdHggOiBwYWdlQ3R4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcFRyZWUgPSBwYWdlQ3R4LkFwcFRyZWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA9IGN0eC5yZXEgPyBjdHgucmVxLmhlYWRlcnMgOiB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcG9sbG8gPSBhcG9sbG9fMS5kZWZhdWx0KGNsaWVudCwgeyBjdHg6IGN0eCwgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcG9sbG9TdGF0ZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VQcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ2V0SW5pdGlhbFByb3BzKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguYXBvbGxvQ2xpZW50ID0gYXBvbGxvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldEluaXRpYWxQcm9wcyhwYWdlQ3R4KV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVByb3BzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHgucmVzICYmIChjdHgucmVzLmhlYWRlcnNTZW50IHx8IGN0eC5yZXMuZmluaXNoZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBwYWdlUHJvcHNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdldERhdGFGcm9tVHJlZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMywgNSwgLCA2XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcGFnZVByb3BzKSwgeyBhcG9sbG9TdGF0ZTogYXBvbGxvU3RhdGUsIGFwb2xsbzogYXBvbGxvIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcFRyZWVQcm9wcyA9ICdDb21wb25lbnQnIGluIHBhZ2VDdHggPyBwcm9wcyA6IHsgcGFnZVByb3BzOiBwcm9wcyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldERhdGFGcm9tVHJlZShyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChBcHBUcmVlLCBfX2Fzc2lnbih7fSwgYXBwVHJlZVByb3BzKSkpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yXzEsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IEFwb2xsbyBDbGllbnQgR3JhcGhRTCBlcnJvcnMgZnJvbSBjcmFzaGluZyBTU1IuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZSBUaGlzIGlzIGEgbmVjZXNzYXJ5IGRlYnVnZ2luZyBsb2dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0dyYXBoUUwgZXJyb3Igb2NjdXJyZWQgW2dldERhdGFGcm9tVHJlZV0nLCBlcnJvcl8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXREYXRhRnJvbVRyZWUgZG9lcyBub3QgY2FsbCBjb21wb25lbnRXaWxsVW5tb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlYWQgc2lkZSBlZmZlY3QgdGhlcmVmb3JlIG5lZWQgdG8gYmUgY2xlYXJlZCBtYW51YWxseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRfMS5kZWZhdWx0LnJld2luZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwb2xsb1N0YXRlLmRhdGEgPSBhcG9sbG8uY2FjaGUuZXh0cmFjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUbyBhdm9pZCBjYWxsaW5nIGluaXRBcG9sbG8oKSB0d2ljZSBpbiB0aGUgc2VydmVyIHdlIHNlbmQgdGhlIEFwb2xsbyBDbGllbnQgYXMgYSBwcm9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gdGhlIGNvbXBvbmVudCwgb3RoZXJ3aXNlIHRoZSBjb21wb25lbnQgd291bGQgaGF2ZSB0byBjYWxsIGluaXRBcG9sbG8oKSBhZ2FpbiBidXQgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRpbWUgd2l0aG91dCB0aGUgY29udGV4dCwgb25jZSB0aGF0IGhhcHBlbnMgdGhlIGZvbGxvd2luZyBjb2RlIHdpbGwgbWFrZSBzdXJlIHdlIHNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcHJvcCBhcyBgbnVsbGAgdG8gdGhlIGJyb3dzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcG9sbG8udG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcGFnZVByb3BzKSwgeyBhcG9sbG9TdGF0ZTogYXBvbGxvU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcG9sbG86IGFwb2xsbyB9KV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pOyB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBXaXRoQXBvbGxvO1xuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoQXBvbGxvO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7LyogZ2xvYmFscyBzZWxmICovdmFyIGZldGNoPXNlbGYuZmV0Y2guYmluZChzZWxmKTttb2R1bGUuZXhwb3J0cz1mZXRjaDttb2R1bGUuZXhwb3J0cy5kZWZhdWx0PW1vZHVsZS5leHBvcnRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjFcbiAqIHJlYWN0LWRvbS1zZXJ2ZXIuYnJvd3Nlci5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gRG8gbm90IHJlcXVpcmUgdGhpcyBtb2R1bGUgZGlyZWN0bHkhIFVzZSBub3JtYWwgYGludmFyaWFudGAgY2FsbHMgd2l0aFxuLy8gdGVtcGxhdGUgbGl0ZXJhbCBzdHJpbmdzLiBUaGUgbWVzc2FnZXMgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGVycm9yIGNvZGVzXG4vLyBkdXJpbmcgYnVpbGQuXG5mdW5jdGlvbiBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKGNvZGUpIHtcbiAgdmFyIHVybCA9ICdodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD0nICsgY29kZTtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHVybCArPSAnJmFyZ3NbXT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tpXSk7XG4gIH1cblxuICByZXR1cm4gXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIgKyBjb2RlICsgXCI7IHZpc2l0IFwiICsgdXJsICsgXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgXCIgKyAndXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCAnICsgJ2hlbHBmdWwgd2FybmluZ3MuJztcbn1cblxuLy8gVE9ETzogdGhpcyBpcyBzcGVjaWFsIGJlY2F1c2UgaXQgZ2V0cyBpbXBvcnRlZCBkdXJpbmcgYnVpbGQuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE3LjAuMSc7XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTdXNwZW5zZVNlcnZlclJlbmRlcmVyID0gZmFsc2U7XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5BYm91dEludmFsaWRhdGVDb250ZXh0VHlwZTtcblxue1xuICBkaWRXYXJuQWJvdXRJbnZhbGlkYXRlQ29udGV4dFR5cGUgPSBuZXcgU2V0KCk7XG59XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuXG5mdW5jdGlvbiBtYXNrQ29udGV4dCh0eXBlLCBjb250ZXh0KSB7XG4gIHZhciBjb250ZXh0VHlwZXMgPSB0eXBlLmNvbnRleHRUeXBlcztcblxuICBpZiAoIWNvbnRleHRUeXBlcykge1xuICAgIHJldHVybiBlbXB0eU9iamVjdDtcbiAgfVxuXG4gIHZhciBtYXNrZWRDb250ZXh0ID0ge307XG5cbiAgZm9yICh2YXIgY29udGV4dE5hbWUgaW4gY29udGV4dFR5cGVzKSB7XG4gICAgbWFza2VkQ29udGV4dFtjb250ZXh0TmFtZV0gPSBjb250ZXh0W2NvbnRleHROYW1lXTtcbiAgfVxuXG4gIHJldHVybiBtYXNrZWRDb250ZXh0O1xufVxuXG5mdW5jdGlvbiBjaGVja0NvbnRleHRUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24pIHtcbiAge1xuICAgIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgJ0NvbXBvbmVudCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhjb250ZXh0LCB0aHJlYWRJRCkge1xuICAvLyBJZiB3ZSBkb24ndCBoYXZlIGVub3VnaCBzbG90cyBpbiB0aGlzIGNvbnRleHQgdG8gc3RvcmUgdGhpcyB0aHJlYWRJRCxcbiAgLy8gZmlsbCBpdCBpbiB3aXRob3V0IGxlYXZpbmcgYW55IGhvbGVzIHRvIGVuc3VyZSB0aGF0IHRoZSBWTSBvcHRpbWl6ZXNcbiAgLy8gdGhpcyBhcyBub24taG9sZXkgaW5kZXggcHJvcGVydGllcy5cbiAgLy8gKE5vdGU6IElmIGByZWFjdGAgcGFja2FnZSBpcyA8IDE2LjYsIF90aHJlYWRDb3VudCBpcyB1bmRlZmluZWQuKVxuICBmb3IgKHZhciBpID0gY29udGV4dC5fdGhyZWFkQ291bnQgfCAwOyBpIDw9IHRocmVhZElEOyBpKyspIHtcbiAgICAvLyBXZSBhc3N1bWUgdGhhdCB0aGlzIGlzIHRoZSBzYW1lIGFzIHRoZSBkZWZhdWx0VmFsdWUgd2hpY2ggbWlnaHQgbm90IGJlXG4gICAgLy8gdHJ1ZSBpZiB3ZSdyZSByZW5kZXJpbmcgaW5zaWRlIGEgc2Vjb25kYXJ5IHJlbmRlcmVyIGJ1dCB0aGV5IGFyZVxuICAgIC8vIHNlY29uZGFyeSBiZWNhdXNlIHRoZXNlIHVzZSBjYXNlcyBhcmUgdmVyeSByYXJlLlxuICAgIGNvbnRleHRbaV0gPSBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gaSArIDE7XG4gIH1cbn1cbmZ1bmN0aW9uIHByb2Nlc3NDb250ZXh0KHR5cGUsIGNvbnRleHQsIHRocmVhZElELCBpc0NsYXNzKSB7XG4gIGlmIChpc0NsYXNzKSB7XG4gICAgdmFyIGNvbnRleHRUeXBlID0gdHlwZS5jb250ZXh0VHlwZTtcblxuICAgIHtcbiAgICAgIGlmICgnY29udGV4dFR5cGUnIGluIHR5cGUpIHtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSAvLyBBbGxvdyBudWxsIGZvciBjb25kaXRpb25hbCBkZWNsYXJhdGlvblxuICAgICAgICBjb250ZXh0VHlwZSA9PT0gbnVsbCB8fCBjb250ZXh0VHlwZSAhPT0gdW5kZWZpbmVkICYmIGNvbnRleHRUeXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgJiYgY29udGV4dFR5cGUuX2NvbnRleHQgPT09IHVuZGVmaW5lZDsgLy8gTm90IGEgPENvbnRleHQuQ29uc3VtZXI+XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkICYmICFkaWRXYXJuQWJvdXRJbnZhbGlkYXRlQ29udGV4dFR5cGUuaGFzKHR5cGUpKSB7XG4gICAgICAgICAgZGlkV2FybkFib3V0SW52YWxpZGF0ZUNvbnRleHRUeXBlLmFkZCh0eXBlKTtcbiAgICAgICAgICB2YXIgYWRkZW5kdW0gPSAnJztcblxuICAgICAgICAgIGlmIChjb250ZXh0VHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhZGRlbmR1bSA9ICcgSG93ZXZlciwgaXQgaXMgc2V0IHRvIHVuZGVmaW5lZC4gJyArICdUaGlzIGNhbiBiZSBjYXVzZWQgYnkgYSB0eXBvIG9yIGJ5IG1peGluZyB1cCBuYW1lZCBhbmQgZGVmYXVsdCBpbXBvcnRzLiAnICsgJ1RoaXMgY2FuIGFsc28gaGFwcGVuIGR1ZSB0byBhIGNpcmN1bGFyIGRlcGVuZGVuY3ksIHNvICcgKyAndHJ5IG1vdmluZyB0aGUgY3JlYXRlQ29udGV4dCgpIGNhbGwgdG8gYSBzZXBhcmF0ZSBmaWxlLic7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29udGV4dFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBhZGRlbmR1bSA9ICcgSG93ZXZlciwgaXQgaXMgc2V0IHRvIGEgJyArIHR5cGVvZiBjb250ZXh0VHlwZSArICcuJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHRUeXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFKSB7XG4gICAgICAgICAgICBhZGRlbmR1bSA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyB0aGUgQ29udGV4dC5Qcm92aWRlciBpbnN0ZWFkPyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0VHlwZS5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyA8Q29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICAgIGFkZGVuZHVtID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIHRoZSBDb250ZXh0LkNvbnN1bWVyIGluc3RlYWQ/JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkZW5kdW0gPSAnIEhvd2V2ZXIsIGl0IGlzIHNldCB0byBhbiBvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY29udGV4dFR5cGUpLmpvaW4oJywgJykgKyAnfS4nO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yKCclcyBkZWZpbmVzIGFuIGludmFsaWQgY29udGV4dFR5cGUuICcgKyAnY29udGV4dFR5cGUgc2hvdWxkIHBvaW50IHRvIHRoZSBDb250ZXh0IG9iamVjdCByZXR1cm5lZCBieSBSZWFjdC5jcmVhdGVDb250ZXh0KCkuJXMnLCBnZXRDb21wb25lbnROYW1lKHR5cGUpIHx8ICdDb21wb25lbnQnLCBhZGRlbmR1bSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbnRleHRUeXBlID09PSAnb2JqZWN0JyAmJiBjb250ZXh0VHlwZSAhPT0gbnVsbCkge1xuICAgICAgdmFsaWRhdGVDb250ZXh0Qm91bmRzKGNvbnRleHRUeXBlLCB0aHJlYWRJRCk7XG4gICAgICByZXR1cm4gY29udGV4dFR5cGVbdGhyZWFkSURdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIHZhciBtYXNrZWRDb250ZXh0ID0gbWFza0NvbnRleHQodHlwZSwgY29udGV4dCk7XG5cbiAgICAgIHtcbiAgICAgICAgaWYgKHR5cGUuY29udGV4dFR5cGVzKSB7XG4gICAgICAgICAgY2hlY2tDb250ZXh0VHlwZXModHlwZS5jb250ZXh0VHlwZXMsIG1hc2tlZENvbnRleHQsICdjb250ZXh0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1hc2tlZENvbnRleHQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgIHZhciBfbWFza2VkQ29udGV4dCA9IG1hc2tDb250ZXh0KHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlLmNvbnRleHRUeXBlcykge1xuICAgICAgICAgIGNoZWNrQ29udGV4dFR5cGVzKHR5cGUuY29udGV4dFR5cGVzLCBfbWFza2VkQ29udGV4dCwgJ2NvbnRleHQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gX21hc2tlZENvbnRleHQ7XG4gICAgfVxuICB9XG59XG5cbnZhciBuZXh0QXZhaWxhYmxlVGhyZWFkSURzID0gbmV3IFVpbnQxNkFycmF5KDE2KTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XG4gIG5leHRBdmFpbGFibGVUaHJlYWRJRHNbaV0gPSBpICsgMTtcbn1cblxubmV4dEF2YWlsYWJsZVRocmVhZElEc1sxNV0gPSAwO1xuXG5mdW5jdGlvbiBncm93VGhyZWFkQ291bnRBbmRSZXR1cm5OZXh0QXZhaWxhYmxlKCkge1xuICB2YXIgb2xkQXJyYXkgPSBuZXh0QXZhaWxhYmxlVGhyZWFkSURzO1xuICB2YXIgb2xkU2l6ZSA9IG9sZEFycmF5Lmxlbmd0aDtcbiAgdmFyIG5ld1NpemUgPSBvbGRTaXplICogMjtcblxuICBpZiAoIShuZXdTaXplIDw9IDB4MTAwMDApKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiTWF4aW11bSBudW1iZXIgb2YgY29uY3VycmVudCBSZWFjdCByZW5kZXJlcnMgZXhjZWVkZWQuIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgYXJlIG5vdCBwcm9wZXJseSBkZXN0cm95aW5nIHRoZSBSZWFkYWJsZSBwcm92aWRlZCBieSBSZWFjdC4gRW5zdXJlIHRoYXQgeW91IGNhbGwgLmRlc3Ryb3koKSBvbiBpdCBpZiB5b3Ugbm8gbG9uZ2VyIHdhbnQgdG8gcmVhZCBmcm9tIGl0LCBhbmQgZGlkIG5vdCByZWFkIHRvIHRoZSBlbmQuIElmIHlvdSB1c2UgLnBpcGUoKSB0aGlzIHNob3VsZCBiZSBhdXRvbWF0aWMuXCIgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgbmV3QXJyYXkgPSBuZXcgVWludDE2QXJyYXkobmV3U2l6ZSk7XG4gIG5ld0FycmF5LnNldChvbGRBcnJheSk7XG4gIG5leHRBdmFpbGFibGVUaHJlYWRJRHMgPSBuZXdBcnJheTtcbiAgbmV4dEF2YWlsYWJsZVRocmVhZElEc1swXSA9IG9sZFNpemUgKyAxO1xuXG4gIGZvciAodmFyIF9pID0gb2xkU2l6ZTsgX2kgPCBuZXdTaXplIC0gMTsgX2krKykge1xuICAgIG5leHRBdmFpbGFibGVUaHJlYWRJRHNbX2ldID0gX2kgKyAxO1xuICB9XG5cbiAgbmV4dEF2YWlsYWJsZVRocmVhZElEc1tuZXdTaXplIC0gMV0gPSAwO1xuICByZXR1cm4gb2xkU2l6ZTtcbn1cblxuZnVuY3Rpb24gYWxsb2NUaHJlYWRJRCgpIHtcbiAgdmFyIG5leHRJRCA9IG5leHRBdmFpbGFibGVUaHJlYWRJRHNbMF07XG5cbiAgaWYgKG5leHRJRCA9PT0gMCkge1xuICAgIHJldHVybiBncm93VGhyZWFkQ291bnRBbmRSZXR1cm5OZXh0QXZhaWxhYmxlKCk7XG4gIH1cblxuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzWzBdID0gbmV4dEF2YWlsYWJsZVRocmVhZElEc1tuZXh0SURdO1xuICByZXR1cm4gbmV4dElEO1xufVxuZnVuY3Rpb24gZnJlZVRocmVhZElEKGlkKSB7XG4gIG5leHRBdmFpbGFibGVUaHJlYWRJRHNbaWRdID0gbmV4dEF2YWlsYWJsZVRocmVhZElEc1swXTtcbiAgbmV4dEF2YWlsYWJsZVRocmVhZElEc1swXSA9IGlkO1xufVxuXG4vLyBBIHJlc2VydmVkIGF0dHJpYnV0ZS5cbi8vIEl0IGlzIGhhbmRsZWQgYnkgUmVhY3Qgc2VwYXJhdGVseSBhbmQgc2hvdWxkbid0IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbnZhciBSRVNFUlZFRCA9IDA7IC8vIEEgc2ltcGxlIHN0cmluZyBhdHRyaWJ1dGUuXG4vLyBBdHRyaWJ1dGVzIHRoYXQgYXJlbid0IGluIHRoZSBmaWx0ZXIgYXJlIHByZXN1bWVkIHRvIGhhdmUgdGhpcyB0eXBlLlxuXG52YXIgU1RSSU5HID0gMTsgLy8gQSBzdHJpbmcgYXR0cmlidXRlIHRoYXQgYWNjZXB0cyBib29sZWFucyBpbiBSZWFjdC4gSW4gSFRNTCwgdGhlc2UgYXJlIGNhbGxlZFxuLy8gXCJlbnVtZXJhdGVkXCIgYXR0cmlidXRlcyB3aXRoIFwidHJ1ZVwiIGFuZCBcImZhbHNlXCIgYXMgcG9zc2libGUgdmFsdWVzLlxuLy8gV2hlbiB0cnVlLCBpdCBzaG91bGQgYmUgc2V0IHRvIGEgXCJ0cnVlXCIgc3RyaW5nLlxuLy8gV2hlbiBmYWxzZSwgaXQgc2hvdWxkIGJlIHNldCB0byBhIFwiZmFsc2VcIiBzdHJpbmcuXG5cbnZhciBCT09MRUFOSVNIX1NUUklORyA9IDI7IC8vIEEgcmVhbCBib29sZWFuIGF0dHJpYnV0ZS5cbi8vIFdoZW4gdHJ1ZSwgaXQgc2hvdWxkIGJlIHByZXNlbnQgKHNldCBlaXRoZXIgdG8gYW4gZW1wdHkgc3RyaW5nIG9yIGl0cyBuYW1lKS5cbi8vIFdoZW4gZmFsc2UsIGl0IHNob3VsZCBiZSBvbWl0dGVkLlxuXG52YXIgQk9PTEVBTiA9IDM7IC8vIEFuIGF0dHJpYnV0ZSB0aGF0IGNhbiBiZSB1c2VkIGFzIGEgZmxhZyBhcyB3ZWxsIGFzIHdpdGggYSB2YWx1ZS5cbi8vIFdoZW4gdHJ1ZSwgaXQgc2hvdWxkIGJlIHByZXNlbnQgKHNldCBlaXRoZXIgdG8gYW4gZW1wdHkgc3RyaW5nIG9yIGl0cyBuYW1lKS5cbi8vIFdoZW4gZmFsc2UsIGl0IHNob3VsZCBiZSBvbWl0dGVkLlxuLy8gRm9yIGFueSBvdGhlciB2YWx1ZSwgc2hvdWxkIGJlIHByZXNlbnQgd2l0aCB0aGF0IHZhbHVlLlxuXG52YXIgT1ZFUkxPQURFRF9CT09MRUFOID0gNDsgLy8gQW4gYXR0cmlidXRlIHRoYXQgbXVzdCBiZSBudW1lcmljIG9yIHBhcnNlIGFzIGEgbnVtZXJpYy5cbi8vIFdoZW4gZmFsc3ksIGl0IHNob3VsZCBiZSByZW1vdmVkLlxuXG52YXIgTlVNRVJJQyA9IDU7IC8vIEFuIGF0dHJpYnV0ZSB0aGF0IG11c3QgYmUgcG9zaXRpdmUgbnVtZXJpYyBvciBwYXJzZSBhcyBhIHBvc2l0aXZlIG51bWVyaWMuXG4vLyBXaGVuIGZhbHN5LCBpdCBzaG91bGQgYmUgcmVtb3ZlZC5cblxudmFyIFBPU0lUSVZFX05VTUVSSUMgPSA2O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG52YXIgQVRUUklCVVRFX05BTUVfU1RBUlRfQ0hBUiA9IFwiOkEtWl9hLXpcXFxcdTAwQzAtXFxcXHUwMEQ2XFxcXHUwMEQ4LVxcXFx1MDBGNlxcXFx1MDBGOC1cXFxcdTAyRkZcXFxcdTAzNzAtXFxcXHUwMzdEXFxcXHUwMzdGLVxcXFx1MUZGRlxcXFx1MjAwQy1cXFxcdTIwMERcXFxcdTIwNzAtXFxcXHUyMThGXFxcXHUyQzAwLVxcXFx1MkZFRlxcXFx1MzAwMS1cXFxcdUQ3RkZcXFxcdUY5MDAtXFxcXHVGRENGXFxcXHVGREYwLVxcXFx1RkZGRFwiO1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5cbnZhciBBVFRSSUJVVEVfTkFNRV9DSEFSID0gQVRUUklCVVRFX05BTUVfU1RBUlRfQ0hBUiArIFwiXFxcXC0uMC05XFxcXHUwMEI3XFxcXHUwMzAwLVxcXFx1MDM2RlxcXFx1MjAzRi1cXFxcdTIwNDBcIjtcbnZhciBST09UX0FUVFJJQlVURV9OQU1FID0gJ2RhdGEtcmVhY3Ryb290JztcbnZhciBWQUxJRF9BVFRSSUJVVEVfTkFNRV9SRUdFWCA9IG5ldyBSZWdFeHAoJ15bJyArIEFUVFJJQlVURV9OQU1FX1NUQVJUX0NIQVIgKyAnXVsnICsgQVRUUklCVVRFX05BTUVfQ0hBUiArICddKiQnKTtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgaWxsZWdhbEF0dHJpYnV0ZU5hbWVDYWNoZSA9IHt9O1xudmFyIHZhbGlkYXRlZEF0dHJpYnV0ZU5hbWVDYWNoZSA9IHt9O1xuZnVuY3Rpb24gaXNBdHRyaWJ1dGVOYW1lU2FmZShhdHRyaWJ1dGVOYW1lKSB7XG4gIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbGlkYXRlZEF0dHJpYnV0ZU5hbWVDYWNoZSwgYXR0cmlidXRlTmFtZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGlsbGVnYWxBdHRyaWJ1dGVOYW1lQ2FjaGUsIGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKFZBTElEX0FUVFJJQlVURV9OQU1FX1JFR0VYLnRlc3QoYXR0cmlidXRlTmFtZSkpIHtcbiAgICB2YWxpZGF0ZWRBdHRyaWJ1dGVOYW1lQ2FjaGVbYXR0cmlidXRlTmFtZV0gPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWxsZWdhbEF0dHJpYnV0ZU5hbWVDYWNoZVthdHRyaWJ1dGVOYW1lXSA9IHRydWU7XG5cbiAge1xuICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBuYW1lOiBgJXNgJywgYXR0cmlidXRlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBzaG91bGRJZ25vcmVBdHRyaWJ1dGUobmFtZSwgcHJvcGVydHlJbmZvLCBpc0N1c3RvbUNvbXBvbmVudFRhZykge1xuICBpZiAocHJvcGVydHlJbmZvICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SW5mby50eXBlID09PSBSRVNFUlZFRDtcbiAgfVxuXG4gIGlmIChpc0N1c3RvbUNvbXBvbmVudFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChuYW1lLmxlbmd0aCA+IDIgJiYgKG5hbWVbMF0gPT09ICdvJyB8fCBuYW1lWzBdID09PSAnTycpICYmIChuYW1lWzFdID09PSAnbicgfHwgbmFtZVsxXSA9PT0gJ04nKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gc2hvdWxkUmVtb3ZlQXR0cmlidXRlV2l0aFdhcm5pbmcobmFtZSwgdmFsdWUsIHByb3BlcnR5SW5mbywgaXNDdXN0b21Db21wb25lbnRUYWcpIHtcbiAgaWYgKHByb3BlcnR5SW5mbyAhPT0gbnVsbCAmJiBwcm9wZXJ0eUluZm8udHlwZSA9PT0gUkVTRVJWRUQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgIGNhc2UgJ2Z1bmN0aW9uJzogLy8gJEZsb3dJc3N1ZSBzeW1ib2wgaXMgcGVyZmVjdGx5IHZhbGlkIGhlcmVcblxuICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAge1xuICAgICAgICBpZiAoaXNDdXN0b21Db21wb25lbnRUYWcpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcGVydHlJbmZvICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuICFwcm9wZXJ0eUluZm8uYWNjZXB0c0Jvb2xlYW5zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcmVmaXggPSBuYW1lLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCwgNSk7XG4gICAgICAgICAgcmV0dXJuIHByZWZpeCAhPT0gJ2RhdGEtJyAmJiBwcmVmaXggIT09ICdhcmlhLSc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbmZ1bmN0aW9uIHNob3VsZFJlbW92ZUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgcHJvcGVydHlJbmZvLCBpc0N1c3RvbUNvbXBvbmVudFRhZykge1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHNob3VsZFJlbW92ZUF0dHJpYnV0ZVdpdGhXYXJuaW5nKG5hbWUsIHZhbHVlLCBwcm9wZXJ0eUluZm8sIGlzQ3VzdG9tQ29tcG9uZW50VGFnKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGlzQ3VzdG9tQ29tcG9uZW50VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHByb3BlcnR5SW5mbyAhPT0gbnVsbCkge1xuXG4gICAgc3dpdGNoIChwcm9wZXJ0eUluZm8udHlwZSkge1xuICAgICAgY2FzZSBCT09MRUFOOlxuICAgICAgICByZXR1cm4gIXZhbHVlO1xuXG4gICAgICBjYXNlIE9WRVJMT0FERURfQk9PTEVBTjpcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBmYWxzZTtcblxuICAgICAgY2FzZSBOVU1FUklDOlxuICAgICAgICByZXR1cm4gaXNOYU4odmFsdWUpO1xuXG4gICAgICBjYXNlIFBPU0lUSVZFX05VTUVSSUM6XG4gICAgICAgIHJldHVybiBpc05hTih2YWx1ZSkgfHwgdmFsdWUgPCAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGdldFByb3BlcnR5SW5mbyhuYW1lKSB7XG4gIHJldHVybiBwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KG5hbWUpID8gcHJvcGVydGllc1tuYW1lXSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCB0eXBlLCBtdXN0VXNlUHJvcGVydHksIGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZU5hbWVzcGFjZSwgc2FuaXRpemVVUkwsIHJlbW92ZUVtcHR5U3RyaW5nKSB7XG4gIHRoaXMuYWNjZXB0c0Jvb2xlYW5zID0gdHlwZSA9PT0gQk9PTEVBTklTSF9TVFJJTkcgfHwgdHlwZSA9PT0gQk9PTEVBTiB8fCB0eXBlID09PSBPVkVSTE9BREVEX0JPT0xFQU47XG4gIHRoaXMuYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZU5hbWU7XG4gIHRoaXMuYXR0cmlidXRlTmFtZXNwYWNlID0gYXR0cmlidXRlTmFtZXNwYWNlO1xuICB0aGlzLm11c3RVc2VQcm9wZXJ0eSA9IG11c3RVc2VQcm9wZXJ0eTtcbiAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBuYW1lO1xuICB0aGlzLnR5cGUgPSB0eXBlO1xuICB0aGlzLnNhbml0aXplVVJMID0gc2FuaXRpemVVUkw7XG4gIHRoaXMucmVtb3ZlRW1wdHlTdHJpbmcgPSByZW1vdmVFbXB0eVN0cmluZztcbn0gLy8gV2hlbiBhZGRpbmcgYXR0cmlidXRlcyB0byB0aGlzIGxpc3QsIGJlIHN1cmUgdG8gYWxzbyBhZGQgdGhlbSB0b1xuLy8gdGhlIGBwb3NzaWJsZVN0YW5kYXJkTmFtZXNgIG1vZHVsZSB0byBlbnN1cmUgY2FzaW5nIGFuZCBpbmNvcnJlY3Rcbi8vIG5hbWUgd2FybmluZ3MuXG5cblxudmFyIHByb3BlcnRpZXMgPSB7fTsgLy8gVGhlc2UgcHJvcHMgYXJlIHJlc2VydmVkIGJ5IFJlYWN0LiBUaGV5IHNob3VsZG4ndCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG5cbnZhciByZXNlcnZlZFByb3BzID0gWydjaGlsZHJlbicsICdkYW5nZXJvdXNseVNldElubmVySFRNTCcsIC8vIFRPRE86IFRoaXMgcHJldmVudHMgdGhlIGFzc2lnbm1lbnQgb2YgZGVmYXVsdFZhbHVlIHRvIHJlZ3VsYXJcbi8vIGVsZW1lbnRzIChub3QganVzdCBpbnB1dHMpLiBOb3cgdGhhdCBSZWFjdERPTUlucHV0IGFzc2lnbnMgdG8gdGhlXG4vLyBkZWZhdWx0VmFsdWUgcHJvcGVydHkgLS0gZG8gd2UgbmVlZCB0aGlzP1xuJ2RlZmF1bHRWYWx1ZScsICdkZWZhdWx0Q2hlY2tlZCcsICdpbm5lckhUTUwnLCAnc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nJywgJ3N1cHByZXNzSHlkcmF0aW9uV2FybmluZycsICdzdHlsZSddO1xucmVzZXJ2ZWRQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFJFU0VSVkVELCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gQSBmZXcgUmVhY3Qgc3RyaW5nIGF0dHJpYnV0ZXMgaGF2ZSBhIGRpZmZlcmVudCBuYW1lLlxuLy8gVGhpcyBpcyBhIG1hcHBpbmcgZnJvbSBSZWFjdCBwcm9wIG5hbWVzIHRvIHRoZSBhdHRyaWJ1dGUgbmFtZXMuXG5cbltbJ2FjY2VwdENoYXJzZXQnLCAnYWNjZXB0LWNoYXJzZXQnXSwgWydjbGFzc05hbWUnLCAnY2xhc3MnXSwgWydodG1sRm9yJywgJ2ZvciddLCBbJ2h0dHBFcXVpdicsICdodHRwLWVxdWl2J11dLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIG5hbWUgPSBfcmVmWzBdLFxuICAgICAgYXR0cmlidXRlTmFtZSA9IF9yZWZbMV07XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGFyZSBcImVudW1lcmF0ZWRcIiBIVE1MIGF0dHJpYnV0ZXMgdGhhdCBhY2NlcHQgXCJ0cnVlXCIgYW5kIFwiZmFsc2VcIi5cbi8vIEluIFJlYWN0LCB3ZSBsZXQgdXNlcnMgcGFzcyBgdHJ1ZWAgYW5kIGBmYWxzZWAgZXZlbiB0aG91Z2ggdGVjaG5pY2FsbHlcbi8vIHRoZXNlIGFyZW4ndCBib29sZWFuIGF0dHJpYnV0ZXMgKHRoZXkgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncykuXG5cblsnY29udGVudEVkaXRhYmxlJywgJ2RyYWdnYWJsZScsICdzcGVsbENoZWNrJywgJ3ZhbHVlJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBCT09MRUFOSVNIX1NUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLnRvTG93ZXJDYXNlKCksIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIFwiZW51bWVyYXRlZFwiIFNWRyBhdHRyaWJ1dGVzIHRoYXQgYWNjZXB0IFwidHJ1ZVwiIGFuZCBcImZhbHNlXCIuXG4vLyBJbiBSZWFjdCwgd2UgbGV0IHVzZXJzIHBhc3MgYHRydWVgIGFuZCBgZmFsc2VgIGV2ZW4gdGhvdWdoIHRlY2huaWNhbGx5XG4vLyB0aGVzZSBhcmVuJ3QgYm9vbGVhbiBhdHRyaWJ1dGVzICh0aGV5IGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MpLlxuLy8gU2luY2UgdGhlc2UgYXJlIFNWRyBhdHRyaWJ1dGVzLCB0aGVpciBhdHRyaWJ1dGUgbmFtZXMgYXJlIGNhc2Utc2Vuc2l0aXZlLlxuXG5bJ2F1dG9SZXZlcnNlJywgJ2V4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWQnLCAnZm9jdXNhYmxlJywgJ3ByZXNlcnZlQWxwaGEnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIEJPT0xFQU5JU0hfU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIEhUTUwgYm9vbGVhbiBhdHRyaWJ1dGVzLlxuXG5bJ2FsbG93RnVsbFNjcmVlbicsICdhc3luYycsIC8vIE5vdGU6IHRoZXJlIGlzIGEgc3BlY2lhbCBjYXNlIHRoYXQgcHJldmVudHMgaXQgZnJvbSBiZWluZyB3cml0dGVuIHRvIHRoZSBET01cbi8vIG9uIHRoZSBjbGllbnQgc2lkZSBiZWNhdXNlIHRoZSBicm93c2VycyBhcmUgaW5jb25zaXN0ZW50LiBJbnN0ZWFkIHdlIGNhbGwgZm9jdXMoKS5cbidhdXRvRm9jdXMnLCAnYXV0b1BsYXknLCAnY29udHJvbHMnLCAnZGVmYXVsdCcsICdkZWZlcicsICdkaXNhYmxlZCcsICdkaXNhYmxlUGljdHVyZUluUGljdHVyZScsICdkaXNhYmxlUmVtb3RlUGxheWJhY2snLCAnZm9ybU5vVmFsaWRhdGUnLCAnaGlkZGVuJywgJ2xvb3AnLCAnbm9Nb2R1bGUnLCAnbm9WYWxpZGF0ZScsICdvcGVuJywgJ3BsYXlzSW5saW5lJywgJ3JlYWRPbmx5JywgJ3JlcXVpcmVkJywgJ3JldmVyc2VkJywgJ3Njb3BlZCcsICdzZWFtbGVzcycsIC8vIE1pY3JvZGF0YVxuJ2l0ZW1TY29wZSddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgQk9PTEVBTiwgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLnRvTG93ZXJDYXNlKCksIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIHRoZSBmZXcgUmVhY3QgcHJvcHMgdGhhdCB3ZSBzZXQgYXMgRE9NIHByb3BlcnRpZXNcbi8vIHJhdGhlciB0aGFuIGF0dHJpYnV0ZXMuIFRoZXNlIGFyZSBhbGwgYm9vbGVhbnMuXG5cblsnY2hlY2tlZCcsIC8vIE5vdGU6IGBvcHRpb24uc2VsZWN0ZWRgIGlzIG5vdCB1cGRhdGVkIGlmIGBzZWxlY3QubXVsdGlwbGVgIGlzXG4vLyBkaXNhYmxlZCB3aXRoIGByZW1vdmVBdHRyaWJ1dGVgLiBXZSBoYXZlIHNwZWNpYWwgbG9naWMgZm9yIGhhbmRsaW5nIHRoaXMuXG4nbXVsdGlwbGUnLCAnbXV0ZWQnLCAnc2VsZWN0ZWQnIC8vIE5PVEU6IGlmIHlvdSBhZGQgYSBjYW1lbENhc2VkIHByb3AgdG8gdGhpcyBsaXN0LFxuLy8geW91J2xsIG5lZWQgdG8gc2V0IGF0dHJpYnV0ZU5hbWUgdG8gbmFtZS50b0xvd2VyQ2FzZSgpXG4vLyBpbnN0ZWFkIGluIHRoZSBhc3NpZ25tZW50IGJlbG93LlxuXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIEJPT0xFQU4sIHRydWUsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGFyZSBIVE1MIGF0dHJpYnV0ZXMgdGhhdCBhcmUgXCJvdmVybG9hZGVkIGJvb2xlYW5zXCI6IHRoZXkgYmVoYXZlIGxpa2Vcbi8vIGJvb2xlYW5zLCBidXQgY2FuIGFsc28gYWNjZXB0IGEgc3RyaW5nIHZhbHVlLlxuXG5bJ2NhcHR1cmUnLCAnZG93bmxvYWQnIC8vIE5PVEU6IGlmIHlvdSBhZGQgYSBjYW1lbENhc2VkIHByb3AgdG8gdGhpcyBsaXN0LFxuLy8geW91J2xsIG5lZWQgdG8gc2V0IGF0dHJpYnV0ZU5hbWUgdG8gbmFtZS50b0xvd2VyQ2FzZSgpXG4vLyBpbnN0ZWFkIGluIHRoZSBhc3NpZ25tZW50IGJlbG93LlxuXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIE9WRVJMT0FERURfQk9PTEVBTiwgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGFyZSBIVE1MIGF0dHJpYnV0ZXMgdGhhdCBtdXN0IGJlIHBvc2l0aXZlIG51bWJlcnMuXG5cblsnY29scycsICdyb3dzJywgJ3NpemUnLCAnc3BhbicgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXG4vLyB5b3UnbGwgbmVlZCB0byBzZXQgYXR0cmlidXRlTmFtZSB0byBuYW1lLnRvTG93ZXJDYXNlKClcbi8vIGluc3RlYWQgaW4gdGhlIGFzc2lnbm1lbnQgYmVsb3cuXG5dLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgUE9TSVRJVkVfTlVNRVJJQywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGFyZSBIVE1MIGF0dHJpYnV0ZXMgdGhhdCBtdXN0IGJlIG51bWJlcnMuXG5cblsncm93U3BhbicsICdzdGFydCddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgTlVNRVJJQywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLnRvTG93ZXJDYXNlKCksIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTtcbnZhciBDQU1FTElaRSA9IC9bXFwtXFw6XShbYS16XSkvZztcblxudmFyIGNhcGl0YWxpemUgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuWzFdLnRvVXBwZXJDYXNlKCk7XG59OyAvLyBUaGlzIGlzIGEgbGlzdCBvZiBhbGwgU1ZHIGF0dHJpYnV0ZXMgdGhhdCBuZWVkIHNwZWNpYWwgY2FzaW5nLCBuYW1lc3BhY2luZyxcbi8vIG9yIGJvb2xlYW4gdmFsdWUgYXNzaWdubWVudC4gUmVndWxhciBhdHRyaWJ1dGVzIHRoYXQganVzdCBhY2NlcHQgc3RyaW5nc1xuLy8gYW5kIGhhdmUgdGhlIHNhbWUgbmFtZXMgYXJlIG9taXR0ZWQsIGp1c3QgbGlrZSBpbiB0aGUgSFRNTCBhdHRyaWJ1dGUgZmlsdGVyLlxuLy8gU29tZSBvZiB0aGVzZSBhdHRyaWJ1dGVzIGNhbiBiZSBoYXJkIHRvIGZpbmQuIFRoaXMgbGlzdCB3YXMgY3JlYXRlZCBieVxuLy8gc2NyYXBpbmcgdGhlIE1ETiBkb2N1bWVudGF0aW9uLlxuXG5cblsnYWNjZW50LWhlaWdodCcsICdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnYXJhYmljLWZvcm0nLCAnYmFzZWxpbmUtc2hpZnQnLCAnY2FwLWhlaWdodCcsICdjbGlwLXBhdGgnLCAnY2xpcC1ydWxlJywgJ2NvbG9yLWludGVycG9sYXRpb24nLCAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJywgJ2NvbG9yLXByb2ZpbGUnLCAnY29sb3ItcmVuZGVyaW5nJywgJ2RvbWluYW50LWJhc2VsaW5lJywgJ2VuYWJsZS1iYWNrZ3JvdW5kJywgJ2ZpbGwtb3BhY2l0eScsICdmaWxsLXJ1bGUnLCAnZmxvb2QtY29sb3InLCAnZmxvb2Qtb3BhY2l0eScsICdmb250LWZhbWlseScsICdmb250LXNpemUnLCAnZm9udC1zaXplLWFkanVzdCcsICdmb250LXN0cmV0Y2gnLCAnZm9udC1zdHlsZScsICdmb250LXZhcmlhbnQnLCAnZm9udC13ZWlnaHQnLCAnZ2x5cGgtbmFtZScsICdnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsJywgJ2dseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsJywgJ2hvcml6LWFkdi14JywgJ2hvcml6LW9yaWdpbi14JywgJ2ltYWdlLXJlbmRlcmluZycsICdsZXR0ZXItc3BhY2luZycsICdsaWdodGluZy1jb2xvcicsICdtYXJrZXItZW5kJywgJ21hcmtlci1taWQnLCAnbWFya2VyLXN0YXJ0JywgJ292ZXJsaW5lLXBvc2l0aW9uJywgJ292ZXJsaW5lLXRoaWNrbmVzcycsICdwYWludC1vcmRlcicsICdwYW5vc2UtMScsICdwb2ludGVyLWV2ZW50cycsICdyZW5kZXJpbmctaW50ZW50JywgJ3NoYXBlLXJlbmRlcmluZycsICdzdG9wLWNvbG9yJywgJ3N0b3Atb3BhY2l0eScsICdzdHJpa2V0aHJvdWdoLXBvc2l0aW9uJywgJ3N0cmlrZXRocm91Z2gtdGhpY2tuZXNzJywgJ3N0cm9rZS1kYXNoYXJyYXknLCAnc3Ryb2tlLWRhc2hvZmZzZXQnLCAnc3Ryb2tlLWxpbmVjYXAnLCAnc3Ryb2tlLWxpbmVqb2luJywgJ3N0cm9rZS1taXRlcmxpbWl0JywgJ3N0cm9rZS1vcGFjaXR5JywgJ3N0cm9rZS13aWR0aCcsICd0ZXh0LWFuY2hvcicsICd0ZXh0LWRlY29yYXRpb24nLCAndGV4dC1yZW5kZXJpbmcnLCAndW5kZXJsaW5lLXBvc2l0aW9uJywgJ3VuZGVybGluZS10aGlja25lc3MnLCAndW5pY29kZS1iaWRpJywgJ3VuaWNvZGUtcmFuZ2UnLCAndW5pdHMtcGVyLWVtJywgJ3YtYWxwaGFiZXRpYycsICd2LWhhbmdpbmcnLCAndi1pZGVvZ3JhcGhpYycsICd2LW1hdGhlbWF0aWNhbCcsICd2ZWN0b3ItZWZmZWN0JywgJ3ZlcnQtYWR2LXknLCAndmVydC1vcmlnaW4teCcsICd2ZXJ0LW9yaWdpbi15JywgJ3dvcmQtc3BhY2luZycsICd3cml0aW5nLW1vZGUnLCAneG1sbnM6eGxpbmsnLCAneC1oZWlnaHQnIC8vIE5PVEU6IGlmIHlvdSBhZGQgYSBjYW1lbENhc2VkIHByb3AgdG8gdGhpcyBsaXN0LFxuLy8geW91J2xsIG5lZWQgdG8gc2V0IGF0dHJpYnV0ZU5hbWUgdG8gbmFtZS50b0xvd2VyQ2FzZSgpXG4vLyBpbnN0ZWFkIGluIHRoZSBhc3NpZ25tZW50IGJlbG93LlxuXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gIHZhciBuYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKENBTUVMSVpFLCBjYXBpdGFsaXplKTtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUsIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFN0cmluZyBTVkcgYXR0cmlidXRlcyB3aXRoIHRoZSB4bGluayBuYW1lc3BhY2UuXG5cblsneGxpbms6YWN0dWF0ZScsICd4bGluazphcmNyb2xlJywgJ3hsaW5rOnJvbGUnLCAneGxpbms6c2hvdycsICd4bGluazp0aXRsZScsICd4bGluazp0eXBlJyAvLyBOT1RFOiBpZiB5b3UgYWRkIGEgY2FtZWxDYXNlZCBwcm9wIHRvIHRoaXMgbGlzdCxcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxuLy8gaW5zdGVhZCBpbiB0aGUgYXNzaWdubWVudCBiZWxvdy5cbl0uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICB2YXIgbmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZShDQU1FTElaRSwgY2FwaXRhbGl6ZSk7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gU3RyaW5nIFNWRyBhdHRyaWJ1dGVzIHdpdGggdGhlIHhtbCBuYW1lc3BhY2UuXG5cblsneG1sOmJhc2UnLCAneG1sOmxhbmcnLCAneG1sOnNwYWNlJyAvLyBOT1RFOiBpZiB5b3UgYWRkIGEgY2FtZWxDYXNlZCBwcm9wIHRvIHRoaXMgbGlzdCxcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxuLy8gaW5zdGVhZCBpbiB0aGUgYXNzaWdubWVudCBiZWxvdy5cbl0uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICB2YXIgbmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZShDQU1FTElaRSwgY2FwaXRhbGl6ZSk7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLCAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJywgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhdHRyaWJ1dGUgZXhpc3RzIGJvdGggaW4gSFRNTCBhbmQgU1ZHLlxuLy8gVGhlIGF0dHJpYnV0ZSBuYW1lIGlzIGNhc2Utc2Vuc2l0aXZlIGluIFNWRyBzbyB3ZSBjYW4ndCBqdXN0IHVzZVxuLy8gdGhlIFJlYWN0IG5hbWUgbGlrZSB3ZSBkbyBmb3IgYXR0cmlidXRlcyB0aGF0IGV4aXN0IG9ubHkgaW4gSFRNTC5cblxuWyd0YWJJbmRleCcsICdjcm9zc09yaWdpbiddLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcHJvcGVydGllc1thdHRyaWJ1dGVOYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQoYXR0cmlidXRlTmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhdHRyaWJ1dGVzIGFjY2VwdCBVUkxzLiBUaGVzZSBtdXN0IG5vdCBhbGxvdyBqYXZhc2NyaXB0OiBVUkxTLlxuLy8gVGhlc2Ugd2lsbCBhbHNvIG5lZWQgdG8gYWNjZXB0IFRydXN0ZWQgVHlwZXMgb2JqZWN0IGluIHRoZSBmdXR1cmUuXG5cbnZhciB4bGlua0hyZWYgPSAneGxpbmtIcmVmJztcbnByb3BlcnRpZXNbeGxpbmtIcmVmXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQoJ3hsaW5rSHJlZicsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuJ3hsaW5rOmhyZWYnLCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIHRydWUsIC8vIHNhbml0aXplVVJMXG5mYWxzZSk7XG5bJ3NyYycsICdocmVmJywgJ2FjdGlvbicsICdmb3JtQWN0aW9uJ10uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICBwcm9wZXJ0aWVzW2F0dHJpYnV0ZU5hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChhdHRyaWJ1dGVOYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICB0cnVlLCAvLyBzYW5pdGl6ZVVSTFxuICB0cnVlKTtcbn0pO1xuXG4vLyBhbmQgYW55IG5ld2xpbmUgb3IgdGFiIGFyZSBmaWx0ZXJlZCBvdXQgYXMgaWYgdGhleSdyZSBub3QgcGFydCBvZiB0aGUgVVJMLlxuLy8gaHR0cHM6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmwtcGFyc2luZ1xuLy8gVGFiIG9yIG5ld2xpbmUgYXJlIGRlZmluZWQgYXMgXFxyXFxuXFx0OlxuLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI2FzY2lpLXRhYi1vci1uZXdsaW5lXG4vLyBBIEMwIGNvbnRyb2wgaXMgYSBjb2RlIHBvaW50IGluIHRoZSByYW5nZSBcXHUwMDAwIE5VTEwgdG8gXFx1MDAxRlxuLy8gSU5GT1JNQVRJT04gU0VQQVJBVE9SIE9ORSwgaW5jbHVzaXZlOlxuLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI2MwLWNvbnRyb2wtb3Itc3BhY2VcblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG52YXIgaXNKYXZhU2NyaXB0UHJvdG9jb2wgPSAvXltcXHUwMDAwLVxcdTAwMUYgXSpqW1xcclxcblxcdF0qYVtcXHJcXG5cXHRdKnZbXFxyXFxuXFx0XSphW1xcclxcblxcdF0qc1tcXHJcXG5cXHRdKmNbXFxyXFxuXFx0XSpyW1xcclxcblxcdF0qaVtcXHJcXG5cXHRdKnBbXFxyXFxuXFx0XSp0W1xcclxcblxcdF0qXFw6L2k7XG52YXIgZGlkV2FybiA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzYW5pdGl6ZVVSTCh1cmwpIHtcbiAge1xuICAgIGlmICghZGlkV2FybiAmJiBpc0phdmFTY3JpcHRQcm90b2NvbC50ZXN0KHVybCkpIHtcbiAgICAgIGRpZFdhcm4gPSB0cnVlO1xuXG4gICAgICBlcnJvcignQSBmdXR1cmUgdmVyc2lvbiBvZiBSZWFjdCB3aWxsIGJsb2NrIGphdmFzY3JpcHQ6IFVSTHMgYXMgYSBzZWN1cml0eSBwcmVjYXV0aW9uLiAnICsgJ1VzZSBldmVudCBoYW5kbGVycyBpbnN0ZWFkIGlmIHlvdSBjYW4uIElmIHlvdSBuZWVkIHRvIGdlbmVyYXRlIHVuc2FmZSBIVE1MIHRyeSAnICsgJ3VzaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIGluc3RlYWQuIFJlYWN0IHdhcyBwYXNzZWQgJXMuJywgSlNPTi5zdHJpbmdpZnkodXJsKSk7XG4gICAgfVxuICB9XG59XG5cbi8vIGNvZGUgY29waWVkIGFuZCBtb2RpZmllZCBmcm9tIGVzY2FwZS1odG1sXG5cbi8qKlxuICogTW9kdWxlIHZhcmlhYmxlcy5cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBtYXRjaEh0bWxSZWdFeHAgPSAvW1wiJyY8Pl0vO1xuLyoqXG4gKiBFc2NhcGVzIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgSFRNTCBlbnRpdGllcyBpbiBhIGdpdmVuIGh0bWwgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyaW5nIEhUTUwgc3RyaW5nIHRvIGVzY2FwZSBmb3IgbGF0ZXIgaW5zZXJ0aW9uXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpIHtcbiAgdmFyIHN0ciA9ICcnICsgc3RyaW5nO1xuICB2YXIgbWF0Y2ggPSBtYXRjaEh0bWxSZWdFeHAuZXhlYyhzdHIpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgdmFyIGVzY2FwZTtcbiAgdmFyIGh0bWwgPSAnJztcbiAgdmFyIGluZGV4O1xuICB2YXIgbGFzdEluZGV4ID0gMDtcblxuICBmb3IgKGluZGV4ID0gbWF0Y2guaW5kZXg7IGluZGV4IDwgc3RyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHN3aXRjaCAoc3RyLmNoYXJDb2RlQXQoaW5kZXgpKSB7XG4gICAgICBjYXNlIDM0OlxuICAgICAgICAvLyBcIlxuICAgICAgICBlc2NhcGUgPSAnJnF1b3Q7JztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIC8vICZcbiAgICAgICAgZXNjYXBlID0gJyZhbXA7JztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzk6XG4gICAgICAgIC8vICdcbiAgICAgICAgZXNjYXBlID0gJyYjeDI3Oyc7IC8vIG1vZGlmaWVkIGZyb20gZXNjYXBlLWh0bWw7IHVzZWQgdG8gYmUgJyYjMzknXG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNjA6XG4gICAgICAgIC8vIDxcbiAgICAgICAgZXNjYXBlID0gJyZsdDsnO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA2MjpcbiAgICAgICAgLy8gPlxuICAgICAgICBlc2NhcGUgPSAnJmd0Oyc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgaHRtbCArPSBzdHIuc3Vic3RyaW5nKGxhc3RJbmRleCwgaW5kZXgpO1xuICAgIH1cblxuICAgIGxhc3RJbmRleCA9IGluZGV4ICsgMTtcbiAgICBodG1sICs9IGVzY2FwZTtcbiAgfVxuXG4gIHJldHVybiBsYXN0SW5kZXggIT09IGluZGV4ID8gaHRtbCArIHN0ci5zdWJzdHJpbmcobGFzdEluZGV4LCBpbmRleCkgOiBodG1sO1xufSAvLyBlbmQgY29kZSBjb3BpZWQgYW5kIG1vZGlmaWVkIGZyb20gZXNjYXBlLWh0bWxcblxuLyoqXG4gKiBFc2NhcGVzIHRleHQgdG8gcHJldmVudCBzY3JpcHRpbmcgYXR0YWNrcy5cbiAqXG4gKiBAcGFyYW0geyp9IHRleHQgVGV4dCB2YWx1ZSB0byBlc2NhcGUuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEFuIGVzY2FwZWQgc3RyaW5nLlxuICovXG5cblxuZnVuY3Rpb24gZXNjYXBlVGV4dEZvckJyb3dzZXIodGV4dCkge1xuICBpZiAodHlwZW9mIHRleHQgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgdGV4dCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyB0aGlzIHNob3J0Y2lyY3VpdCBoZWxwcyBwZXJmIGZvciB0eXBlcyB0aGF0IHdlIGtub3cgd2lsbCBuZXZlciBoYXZlXG4gICAgLy8gc3BlY2lhbCBjaGFyYWN0ZXJzLCBlc3BlY2lhbGx5IGdpdmVuIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyB1c2VkIG9mdGVuXG4gICAgLy8gZm9yIG51bWVyaWMgZG9tIGlkcy5cbiAgICByZXR1cm4gJycgKyB0ZXh0O1xuICB9XG5cbiAgcmV0dXJuIGVzY2FwZUh0bWwodGV4dCk7XG59XG5cbi8qKlxuICogRXNjYXBlcyBhdHRyaWJ1dGUgdmFsdWUgdG8gcHJldmVudCBzY3JpcHRpbmcgYXR0YWNrcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFZhbHVlIHRvIGVzY2FwZS5cbiAqIEByZXR1cm4ge3N0cmluZ30gQW4gZXNjYXBlZCBzdHJpbmcuXG4gKi9cblxuZnVuY3Rpb24gcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIodmFsdWUpIHtcbiAgcmV0dXJuICdcIicgKyBlc2NhcGVUZXh0Rm9yQnJvd3Nlcih2YWx1ZSkgKyAnXCInO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXBGb3JSb290KCkge1xuICByZXR1cm4gUk9PVF9BVFRSSUJVVEVfTkFNRSArICc9XCJcIic7XG59XG4vKipcbiAqIENyZWF0ZXMgbWFya3VwIGZvciBhIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJuIHs/c3RyaW5nfSBNYXJrdXAgc3RyaW5nLCBvciBudWxsIGlmIHRoZSBwcm9wZXJ0eSB3YXMgaW52YWxpZC5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXBGb3JQcm9wZXJ0eShuYW1lLCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlJbmZvID0gZ2V0UHJvcGVydHlJbmZvKG5hbWUpO1xuXG4gIGlmIChuYW1lICE9PSAnc3R5bGUnICYmIHNob3VsZElnbm9yZUF0dHJpYnV0ZShuYW1lLCBwcm9wZXJ0eUluZm8sIGZhbHNlKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmIChzaG91bGRSZW1vdmVBdHRyaWJ1dGUobmFtZSwgdmFsdWUsIHByb3BlcnR5SW5mbywgZmFsc2UpKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHByb3BlcnR5SW5mbyAhPT0gbnVsbCkge1xuICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlJbmZvLmF0dHJpYnV0ZU5hbWU7XG4gICAgdmFyIHR5cGUgPSBwcm9wZXJ0eUluZm8udHlwZTtcblxuICAgIGlmICh0eXBlID09PSBCT09MRUFOIHx8IHR5cGUgPT09IE9WRVJMT0FERURfQk9PTEVBTiAmJiB2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWUgKyAnPVwiXCInO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvcGVydHlJbmZvLnNhbml0aXplVVJMKSB7XG4gICAgICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcbiAgICAgICAgc2FuaXRpemVVUkwodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXR0cmlidXRlTmFtZSArICc9JyArIHF1b3RlQXR0cmlidXRlVmFsdWVGb3JCcm93c2VyKHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNBdHRyaWJ1dGVOYW1lU2FmZShuYW1lKSkge1xuICAgIHJldHVybiBuYW1lICsgJz0nICsgcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBDcmVhdGVzIG1hcmt1cCBmb3IgYSBjdXN0b20gcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge3N0cmluZ30gTWFya3VwIHN0cmluZywgb3IgZW1wdHkgc3RyaW5nIGlmIHRoZSBwcm9wZXJ0eSB3YXMgaW52YWxpZC5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXBGb3JDdXN0b21BdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgaWYgKCFpc0F0dHJpYnV0ZU5hbWVTYWZlKG5hbWUpIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc9JyArIHF1b3RlQXR0cmlidXRlVmFsdWVGb3JCcm93c2VyKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAqL1xuZnVuY3Rpb24gaXMoeCwgeSkge1xuICByZXR1cm4geCA9PT0geSAmJiAoeCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkpIHx8IHggIT09IHggJiYgeSAhPT0geSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxuICA7XG59XG5cbnZhciBvYmplY3RJcyA9IHR5cGVvZiBPYmplY3QuaXMgPT09ICdmdW5jdGlvbicgPyBPYmplY3QuaXMgOiBpcztcblxudmFyIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCA9IG51bGw7XG52YXIgZmlyc3RXb3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsO1xudmFyIHdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7IC8vIFdoZXRoZXIgdGhlIHdvcmstaW4tcHJvZ3Jlc3MgaG9vayBpcyBhIHJlLXJlbmRlcmVkIGhvb2tcblxudmFyIGlzUmVSZW5kZXIgPSBmYWxzZTsgLy8gV2hldGhlciBhbiB1cGRhdGUgd2FzIHNjaGVkdWxlZCBkdXJpbmcgdGhlIGN1cnJlbnRseSBleGVjdXRpbmcgcmVuZGVyIHBhc3MuXG5cbnZhciBkaWRTY2hlZHVsZVJlbmRlclBoYXNlVXBkYXRlID0gZmFsc2U7IC8vIExhemlseSBjcmVhdGVkIG1hcCBvZiByZW5kZXItcGhhc2UgdXBkYXRlc1xuXG52YXIgcmVuZGVyUGhhc2VVcGRhdGVzID0gbnVsbDsgLy8gQ291bnRlciB0byBwcmV2ZW50IGluZmluaXRlIGxvb3BzLlxuXG52YXIgbnVtYmVyT2ZSZVJlbmRlcnMgPSAwO1xudmFyIFJFX1JFTkRFUl9MSU1JVCA9IDI1O1xudmFyIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlOyAvLyBJbiBERVYsIHRoaXMgaXMgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnRseSBleGVjdXRpbmcgcHJpbWl0aXZlIGhvb2tcblxudmFyIGN1cnJlbnRIb29rTmFtZUluRGV2O1xuXG5mdW5jdGlvbiByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCkge1xuICBpZiAoIShjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uXCIgKTtcbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGlzSW5Ib29rVXNlckNvZGVJbkRldikge1xuICAgICAgZXJyb3IoJ0RvIG5vdCBjYWxsIEhvb2tzIGluc2lkZSB1c2VFZmZlY3QoLi4uKSwgdXNlTWVtbyguLi4pLCBvciBvdGhlciBidWlsdC1pbiBIb29rcy4gJyArICdZb3UgY2FuIG9ubHkgY2FsbCBIb29rcyBhdCB0aGUgdG9wIGxldmVsIG9mIHlvdXIgUmVhY3QgZnVuY3Rpb24uICcgKyAnRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9ydWxlcy1vZi1ob29rcycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGFyZUhvb2tJbnB1dHNFcXVhbChuZXh0RGVwcywgcHJldkRlcHMpIHtcbiAgaWYgKHByZXZEZXBzID09PSBudWxsKSB7XG4gICAge1xuICAgICAgZXJyb3IoJyVzIHJlY2VpdmVkIGEgZmluYWwgYXJndW1lbnQgZHVyaW5nIHRoaXMgcmVuZGVyLCBidXQgbm90IGR1cmluZyAnICsgJ3RoZSBwcmV2aW91cyByZW5kZXIuIEV2ZW4gdGhvdWdoIHRoZSBmaW5hbCBhcmd1bWVudCBpcyBvcHRpb25hbCwgJyArICdpdHMgdHlwZSBjYW5ub3QgY2hhbmdlIGJldHdlZW4gcmVuZGVycy4nLCBjdXJyZW50SG9va05hbWVJbkRldik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAge1xuICAgIC8vIERvbid0IGJvdGhlciBjb21wYXJpbmcgbGVuZ3RocyBpbiBwcm9kIGJlY2F1c2UgdGhlc2UgYXJyYXlzIHNob3VsZCBiZVxuICAgIC8vIHBhc3NlZCBpbmxpbmUuXG4gICAgaWYgKG5leHREZXBzLmxlbmd0aCAhPT0gcHJldkRlcHMubGVuZ3RoKSB7XG4gICAgICBlcnJvcignVGhlIGZpbmFsIGFyZ3VtZW50IHBhc3NlZCB0byAlcyBjaGFuZ2VkIHNpemUgYmV0d2VlbiByZW5kZXJzLiBUaGUgJyArICdvcmRlciBhbmQgc2l6ZSBvZiB0aGlzIGFycmF5IG11c3QgcmVtYWluIGNvbnN0YW50LlxcblxcbicgKyAnUHJldmlvdXM6ICVzXFxuJyArICdJbmNvbWluZzogJXMnLCBjdXJyZW50SG9va05hbWVJbkRldiwgXCJbXCIgKyBuZXh0RGVwcy5qb2luKCcsICcpICsgXCJdXCIsIFwiW1wiICsgcHJldkRlcHMuam9pbignLCAnKSArIFwiXVwiKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHByZXZEZXBzLmxlbmd0aCAmJiBpIDwgbmV4dERlcHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAob2JqZWN0SXMobmV4dERlcHNbaV0sIHByZXZEZXBzW2ldKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvb2soKSB7XG4gIGlmIChudW1iZXJPZlJlUmVuZGVycyA+IDApIHtcbiAgICB7XG4gICAgICB7XG4gICAgICAgIHRocm93IEVycm9yKCBcIlJlbmRlcmVkIG1vcmUgaG9va3MgdGhhbiBkdXJpbmcgdGhlIHByZXZpb3VzIHJlbmRlclwiICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtZW1vaXplZFN0YXRlOiBudWxsLFxuICAgIHF1ZXVlOiBudWxsLFxuICAgIG5leHQ6IG51bGxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlV29ya0luUHJvZ3Jlc3NIb29rKCkge1xuICBpZiAod29ya0luUHJvZ3Jlc3NIb29rID09PSBudWxsKSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgZmlyc3QgaG9vayBpbiB0aGUgbGlzdFxuICAgIGlmIChmaXJzdFdvcmtJblByb2dyZXNzSG9vayA9PT0gbnVsbCkge1xuICAgICAgaXNSZVJlbmRlciA9IGZhbHNlO1xuICAgICAgZmlyc3RXb3JrSW5Qcm9ncmVzc0hvb2sgPSB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBjcmVhdGVIb29rKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZXJlJ3MgYWxyZWFkeSBhIHdvcmstaW4tcHJvZ3Jlc3MuIFJldXNlIGl0LlxuICAgICAgaXNSZVJlbmRlciA9IHRydWU7XG4gICAgICB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBmaXJzdFdvcmtJblByb2dyZXNzSG9vaztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHdvcmtJblByb2dyZXNzSG9vay5uZXh0ID09PSBudWxsKSB7XG4gICAgICBpc1JlUmVuZGVyID0gZmFsc2U7IC8vIEFwcGVuZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0XG5cbiAgICAgIHdvcmtJblByb2dyZXNzSG9vayA9IHdvcmtJblByb2dyZXNzSG9vay5uZXh0ID0gY3JlYXRlSG9vaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGVyZSdzIGFscmVhZHkgYSB3b3JrLWluLXByb2dyZXNzLiBSZXVzZSBpdC5cbiAgICAgIGlzUmVSZW5kZXIgPSB0cnVlO1xuICAgICAgd29ya0luUHJvZ3Jlc3NIb29rID0gd29ya0luUHJvZ3Jlc3NIb29rLm5leHQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHdvcmtJblByb2dyZXNzSG9vaztcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVRvVXNlSG9va3MoY29tcG9uZW50SWRlbnRpdHkpIHtcbiAgY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ID0gY29tcG9uZW50SWRlbnRpdHk7XG5cbiAge1xuICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlO1xuICB9IC8vIFRoZSBmb2xsb3dpbmcgc2hvdWxkIGhhdmUgYWxyZWFkeSBiZWVuIHJlc2V0XG4gIC8vIGRpZFNjaGVkdWxlUmVuZGVyUGhhc2VVcGRhdGUgPSBmYWxzZTtcbiAgLy8gZmlyc3RXb3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsO1xuICAvLyBudW1iZXJPZlJlUmVuZGVycyA9IDA7XG4gIC8vIHJlbmRlclBoYXNlVXBkYXRlcyA9IG51bGw7XG4gIC8vIHdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7XG5cbn1cbmZ1bmN0aW9uIGZpbmlzaEhvb2tzKENvbXBvbmVudCwgcHJvcHMsIGNoaWxkcmVuLCByZWZPckNvbnRleHQpIHtcbiAgLy8gVGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBldmVyeSBmdW5jdGlvbiBjb21wb25lbnQgdG8gcHJldmVudCBob29rcyBmcm9tXG4gIC8vIGJlaW5nIHVzZWQgaW4gY2xhc3Nlcy5cbiAgd2hpbGUgKGRpZFNjaGVkdWxlUmVuZGVyUGhhc2VVcGRhdGUpIHtcbiAgICAvLyBVcGRhdGVzIHdlcmUgc2NoZWR1bGVkIGR1cmluZyB0aGUgcmVuZGVyIHBoYXNlLiBUaGV5IGFyZSBzdG9yZWQgaW5cbiAgICAvLyB0aGUgYHJlbmRlclBoYXNlVXBkYXRlc2AgbWFwLiBDYWxsIHRoZSBjb21wb25lbnQgYWdhaW4sIHJldXNpbmcgdGhlXG4gICAgLy8gd29yay1pbi1wcm9ncmVzcyBob29rcyBhbmQgYXBwbHlpbmcgdGhlIGFkZGl0aW9uYWwgdXBkYXRlcyBvbiB0b3AuIEtlZXBcbiAgICAvLyByZXN0YXJ0aW5nIHVudGlsIG5vIG1vcmUgdXBkYXRlcyBhcmUgc2NoZWR1bGVkLlxuICAgIGRpZFNjaGVkdWxlUmVuZGVyUGhhc2VVcGRhdGUgPSBmYWxzZTtcbiAgICBudW1iZXJPZlJlUmVuZGVycyArPSAxOyAvLyBTdGFydCBvdmVyIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdFxuXG4gICAgd29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDtcbiAgICBjaGlsZHJlbiA9IENvbXBvbmVudChwcm9wcywgcmVmT3JDb250ZXh0KTtcbiAgfVxuXG4gIHJlc2V0SG9va3NTdGF0ZSgpO1xuICByZXR1cm4gY2hpbGRyZW47XG59IC8vIFJlc2V0IHRoZSBpbnRlcm5hbCBob29rcyBzdGF0ZSBpZiBhbiBlcnJvciBvY2N1cnMgd2hpbGUgcmVuZGVyaW5nIGEgY29tcG9uZW50XG5cbmZ1bmN0aW9uIHJlc2V0SG9va3NTdGF0ZSgpIHtcbiAge1xuICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlO1xuICB9XG5cbiAgY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ID0gbnVsbDtcbiAgZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSA9IGZhbHNlO1xuICBmaXJzdFdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7XG4gIG51bWJlck9mUmVSZW5kZXJzID0gMDtcbiAgcmVuZGVyUGhhc2VVcGRhdGVzID0gbnVsbDtcbiAgd29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gcmVhZENvbnRleHQoY29udGV4dCwgb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciB0aHJlYWRJRCA9IGN1cnJlbnRQYXJ0aWFsUmVuZGVyZXIudGhyZWFkSUQ7XG4gIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhjb250ZXh0LCB0aHJlYWRJRCk7XG5cbiAge1xuICAgIGlmIChpc0luSG9va1VzZXJDb2RlSW5EZXYpIHtcbiAgICAgIGVycm9yKCdDb250ZXh0IGNhbiBvbmx5IGJlIHJlYWQgd2hpbGUgUmVhY3QgaXMgcmVuZGVyaW5nLiAnICsgJ0luIGNsYXNzZXMsIHlvdSBjYW4gcmVhZCBpdCBpbiB0aGUgcmVuZGVyIG1ldGhvZCBvciBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMuICcgKyAnSW4gZnVuY3Rpb24gY29tcG9uZW50cywgeW91IGNhbiByZWFkIGl0IGRpcmVjdGx5IGluIHRoZSBmdW5jdGlvbiBib2R5LCBidXQgbm90ICcgKyAnaW5zaWRlIEhvb2tzIGxpa2UgdXNlUmVkdWNlcigpIG9yIHVzZU1lbW8oKS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29udGV4dFt0aHJlYWRJRF07XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoY29udGV4dCwgb2JzZXJ2ZWRCaXRzKSB7XG4gIHtcbiAgICBjdXJyZW50SG9va05hbWVJbkRldiA9ICd1c2VDb250ZXh0JztcbiAgfVxuXG4gIHJlc29sdmVDdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQoKTtcbiAgdmFyIHRocmVhZElEID0gY3VycmVudFBhcnRpYWxSZW5kZXJlci50aHJlYWRJRDtcbiAgdmFsaWRhdGVDb250ZXh0Qm91bmRzKGNvbnRleHQsIHRocmVhZElEKTtcbiAgcmV0dXJuIGNvbnRleHRbdGhyZWFkSURdO1xufVxuXG5mdW5jdGlvbiBiYXNpY1N0YXRlUmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIC8vICRGbG93Rml4TWU6IEZsb3cgZG9lc24ndCBsaWtlIG1peGVkIHR5cGVzXG4gIHJldHVybiB0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nID8gYWN0aW9uKHN0YXRlKSA6IGFjdGlvbjtcbn1cblxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHtcbiAgICBjdXJyZW50SG9va05hbWVJbkRldiA9ICd1c2VTdGF0ZSc7XG4gIH1cblxuICByZXR1cm4gdXNlUmVkdWNlcihiYXNpY1N0YXRlUmVkdWNlciwgLy8gdXNlUmVkdWNlciBoYXMgYSBzcGVjaWFsIGNhc2UgdG8gc3VwcG9ydCBsYXp5IHVzZVN0YXRlIGluaXRpYWxpemVyc1xuICBpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHtcbiAgICBpZiAocmVkdWNlciAhPT0gYmFzaWNTdGF0ZVJlZHVjZXIpIHtcbiAgICAgIGN1cnJlbnRIb29rTmFtZUluRGV2ID0gJ3VzZVJlZHVjZXInO1xuICAgIH1cbiAgfVxuXG4gIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCA9IHJlc29sdmVDdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQoKTtcbiAgd29ya0luUHJvZ3Jlc3NIb29rID0gY3JlYXRlV29ya0luUHJvZ3Jlc3NIb29rKCk7XG5cbiAgaWYgKGlzUmVSZW5kZXIpIHtcbiAgICAvLyBUaGlzIGlzIGEgcmUtcmVuZGVyLiBBcHBseSB0aGUgbmV3IHJlbmRlciBwaGFzZSB1cGRhdGVzIHRvIHRoZSBwcmV2aW91c1xuICAgIC8vIGN1cnJlbnQgaG9vay5cbiAgICB2YXIgcXVldWUgPSB3b3JrSW5Qcm9ncmVzc0hvb2sucXVldWU7XG4gICAgdmFyIGRpc3BhdGNoID0gcXVldWUuZGlzcGF0Y2g7XG5cbiAgICBpZiAocmVuZGVyUGhhc2VVcGRhdGVzICE9PSBudWxsKSB7XG4gICAgICAvLyBSZW5kZXIgcGhhc2UgdXBkYXRlcyBhcmUgc3RvcmVkIGluIGEgbWFwIG9mIHF1ZXVlIC0+IGxpbmtlZCBsaXN0XG4gICAgICB2YXIgZmlyc3RSZW5kZXJQaGFzZVVwZGF0ZSA9IHJlbmRlclBoYXNlVXBkYXRlcy5nZXQocXVldWUpO1xuXG4gICAgICBpZiAoZmlyc3RSZW5kZXJQaGFzZVVwZGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlbmRlclBoYXNlVXBkYXRlcy5kZWxldGUocXVldWUpO1xuICAgICAgICB2YXIgbmV3U3RhdGUgPSB3b3JrSW5Qcm9ncmVzc0hvb2subWVtb2l6ZWRTdGF0ZTtcbiAgICAgICAgdmFyIHVwZGF0ZSA9IGZpcnN0UmVuZGVyUGhhc2VVcGRhdGU7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgIC8vIFByb2Nlc3MgdGhpcyByZW5kZXIgcGhhc2UgdXBkYXRlLiBXZSBkb24ndCBoYXZlIHRvIGNoZWNrIHRoZVxuICAgICAgICAgIC8vIHByaW9yaXR5IGJlY2F1c2UgaXQgd2lsbCBhbHdheXMgYmUgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnRcbiAgICAgICAgICAvLyByZW5kZXIncy5cbiAgICAgICAgICB2YXIgYWN0aW9uID0gdXBkYXRlLmFjdGlvbjtcblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV3U3RhdGUgPSByZWR1Y2VyKG5ld1N0YXRlLCBhY3Rpb24pO1xuXG4gICAgICAgICAge1xuICAgICAgICAgICAgaXNJbkhvb2tVc2VyQ29kZUluRGV2ID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdXBkYXRlID0gdXBkYXRlLm5leHQ7XG4gICAgICAgIH0gd2hpbGUgKHVwZGF0ZSAhPT0gbnVsbCk7XG5cbiAgICAgICAgd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgcmV0dXJuIFtuZXdTdGF0ZSwgZGlzcGF0Y2hdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGUsIGRpc3BhdGNoXTtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBpbml0aWFsU3RhdGU7XG5cbiAgICBpZiAocmVkdWNlciA9PT0gYmFzaWNTdGF0ZVJlZHVjZXIpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgYHVzZVN0YXRlYC5cbiAgICAgIGluaXRpYWxTdGF0ZSA9IHR5cGVvZiBpbml0aWFsQXJnID09PSAnZnVuY3Rpb24nID8gaW5pdGlhbEFyZygpIDogaW5pdGlhbEFyZztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdGlhbFN0YXRlID0gaW5pdCAhPT0gdW5kZWZpbmVkID8gaW5pdChpbml0aWFsQXJnKSA6IGluaXRpYWxBcmc7XG4gICAgfVxuXG4gICAge1xuICAgICAgaXNJbkhvb2tVc2VyQ29kZUluRGV2ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cbiAgICB2YXIgX3F1ZXVlID0gd29ya0luUHJvZ3Jlc3NIb29rLnF1ZXVlID0ge1xuICAgICAgbGFzdDogbnVsbCxcbiAgICAgIGRpc3BhdGNoOiBudWxsXG4gICAgfTtcblxuICAgIHZhciBfZGlzcGF0Y2ggPSBfcXVldWUuZGlzcGF0Y2ggPSBkaXNwYXRjaEFjdGlvbi5iaW5kKG51bGwsIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCwgX3F1ZXVlKTtcblxuICAgIHJldHVybiBbd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGUsIF9kaXNwYXRjaF07XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlTWVtbyhuZXh0Q3JlYXRlLCBkZXBzKSB7XG4gIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCA9IHJlc29sdmVDdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQoKTtcbiAgd29ya0luUHJvZ3Jlc3NIb29rID0gY3JlYXRlV29ya0luUHJvZ3Jlc3NIb29rKCk7XG4gIHZhciBuZXh0RGVwcyA9IGRlcHMgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkZXBzO1xuXG4gIGlmICh3b3JrSW5Qcm9ncmVzc0hvb2sgIT09IG51bGwpIHtcbiAgICB2YXIgcHJldlN0YXRlID0gd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGU7XG5cbiAgICBpZiAocHJldlN0YXRlICE9PSBudWxsKSB7XG4gICAgICBpZiAobmV4dERlcHMgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIHByZXZEZXBzID0gcHJldlN0YXRlWzFdO1xuXG4gICAgICAgIGlmIChhcmVIb29rSW5wdXRzRXF1YWwobmV4dERlcHMsIHByZXZEZXBzKSkge1xuICAgICAgICAgIHJldHVybiBwcmV2U3RhdGVbMF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaXNJbkhvb2tVc2VyQ29kZUluRGV2ID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBuZXh0VmFsdWUgPSBuZXh0Q3JlYXRlKCk7XG5cbiAge1xuICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlO1xuICB9XG5cbiAgd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGUgPSBbbmV4dFZhbHVlLCBuZXh0RGVwc107XG4gIHJldHVybiBuZXh0VmFsdWU7XG59XG5cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ID0gcmVzb2x2ZUN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCgpO1xuICB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBjcmVhdGVXb3JrSW5Qcm9ncmVzc0hvb2soKTtcbiAgdmFyIHByZXZpb3VzUmVmID0gd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGU7XG5cbiAgaWYgKHByZXZpb3VzUmVmID09PSBudWxsKSB7XG4gICAgdmFyIHJlZiA9IHtcbiAgICAgIGN1cnJlbnQ6IGluaXRpYWxWYWx1ZVxuICAgIH07XG5cbiAgICB7XG4gICAgICBPYmplY3Quc2VhbChyZWYpO1xuICAgIH1cblxuICAgIHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlID0gcmVmO1xuICAgIHJldHVybiByZWY7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHByZXZpb3VzUmVmO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGlucHV0cykge1xuICB7XG4gICAgY3VycmVudEhvb2tOYW1lSW5EZXYgPSAndXNlTGF5b3V0RWZmZWN0JztcblxuICAgIGVycm9yKCd1c2VMYXlvdXRFZmZlY3QgZG9lcyBub3RoaW5nIG9uIHRoZSBzZXJ2ZXIsIGJlY2F1c2UgaXRzIGVmZmVjdCBjYW5ub3QgJyArIFwiYmUgZW5jb2RlZCBpbnRvIHRoZSBzZXJ2ZXIgcmVuZGVyZXIncyBvdXRwdXQgZm9ybWF0LiBUaGlzIHdpbGwgbGVhZCBcIiArICd0byBhIG1pc21hdGNoIGJldHdlZW4gdGhlIGluaXRpYWwsIG5vbi1oeWRyYXRlZCBVSSBhbmQgdGhlIGludGVuZGVkICcgKyAnVUkuIFRvIGF2b2lkIHRoaXMsIHVzZUxheW91dEVmZmVjdCBzaG91bGQgb25seSBiZSB1c2VkIGluICcgKyAnY29tcG9uZW50cyB0aGF0IHJlbmRlciBleGNsdXNpdmVseSBvbiB0aGUgY2xpZW50LiAnICsgJ1NlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvdXNlbGF5b3V0ZWZmZWN0LXNzciBmb3IgY29tbW9uIGZpeGVzLicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoQWN0aW9uKGNvbXBvbmVudElkZW50aXR5LCBxdWV1ZSwgYWN0aW9uKSB7XG4gIGlmICghKG51bWJlck9mUmVSZW5kZXJzIDwgUkVfUkVOREVSX0xJTUlUKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlRvbyBtYW55IHJlLXJlbmRlcnMuIFJlYWN0IGxpbWl0cyB0aGUgbnVtYmVyIG9mIHJlbmRlcnMgdG8gcHJldmVudCBhbiBpbmZpbml0ZSBsb29wLlwiICk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbXBvbmVudElkZW50aXR5ID09PSBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQpIHtcbiAgICAvLyBUaGlzIGlzIGEgcmVuZGVyIHBoYXNlIHVwZGF0ZS4gU3Rhc2ggaXQgaW4gYSBsYXppbHktY3JlYXRlZCBtYXAgb2ZcbiAgICAvLyBxdWV1ZSAtPiBsaW5rZWQgbGlzdCBvZiB1cGRhdGVzLiBBZnRlciB0aGlzIHJlbmRlciBwYXNzLCB3ZSdsbCByZXN0YXJ0XG4gICAgLy8gYW5kIGFwcGx5IHRoZSBzdGFzaGVkIHVwZGF0ZXMgb24gdG9wIG9mIHRoZSB3b3JrLWluLXByb2dyZXNzIGhvb2suXG4gICAgZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSA9IHRydWU7XG4gICAgdmFyIHVwZGF0ZSA9IHtcbiAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgbmV4dDogbnVsbFxuICAgIH07XG5cbiAgICBpZiAocmVuZGVyUGhhc2VVcGRhdGVzID09PSBudWxsKSB7XG4gICAgICByZW5kZXJQaGFzZVVwZGF0ZXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0UmVuZGVyUGhhc2VVcGRhdGUgPSByZW5kZXJQaGFzZVVwZGF0ZXMuZ2V0KHF1ZXVlKTtcblxuICAgIGlmIChmaXJzdFJlbmRlclBoYXNlVXBkYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlbmRlclBoYXNlVXBkYXRlcy5zZXQocXVldWUsIHVwZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFwcGVuZCB0aGUgdXBkYXRlIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXG4gICAgICB2YXIgbGFzdFJlbmRlclBoYXNlVXBkYXRlID0gZmlyc3RSZW5kZXJQaGFzZVVwZGF0ZTtcblxuICAgICAgd2hpbGUgKGxhc3RSZW5kZXJQaGFzZVVwZGF0ZS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgIGxhc3RSZW5kZXJQaGFzZVVwZGF0ZSA9IGxhc3RSZW5kZXJQaGFzZVVwZGF0ZS5uZXh0O1xuICAgICAgfVxuXG4gICAgICBsYXN0UmVuZGVyUGhhc2VVcGRhdGUubmV4dCA9IHVwZGF0ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpIHtcbiAgcmV0dXJuIHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsYmFjaztcbiAgfSwgZGVwcyk7XG59IC8vIFRPRE8gRGVjaWRlIG9uIGhvdyB0byBpbXBsZW1lbnQgdGhpcyBob29rIGZvciBzZXJ2ZXIgcmVuZGVyaW5nLlxuLy8gSWYgYSBtdXRhdGlvbiBvY2N1cnMgZHVyaW5nIHJlbmRlciwgY29uc2lkZXIgdHJpZ2dlcmluZyBhIFN1c3BlbnNlIGJvdW5kYXJ5XG4vLyBhbmQgZmFsbGluZyBiYWNrIHRvIGNsaWVudCByZW5kZXJpbmcuXG5cbmZ1bmN0aW9uIHVzZU11dGFibGVTb3VyY2Uoc291cmNlLCBnZXRTbmFwc2hvdCwgc3Vic2NyaWJlKSB7XG4gIHJlc29sdmVDdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQoKTtcbiAgcmV0dXJuIGdldFNuYXBzaG90KHNvdXJjZS5fc291cmNlKTtcbn1cblxuZnVuY3Rpb24gdXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSkge1xuICByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gdXNlVHJhbnNpdGlvbigpIHtcbiAgcmVzb2x2ZUN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCgpO1xuXG4gIHZhciBzdGFydFRyYW5zaXRpb24gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjaygpO1xuICB9O1xuXG4gIHJldHVybiBbc3RhcnRUcmFuc2l0aW9uLCBmYWxzZV07XG59XG5cbmZ1bmN0aW9uIHVzZU9wYXF1ZUlkZW50aWZpZXIoKSB7XG4gIHJldHVybiAoY3VycmVudFBhcnRpYWxSZW5kZXJlci5pZGVudGlmaWVyUHJlZml4IHx8ICcnKSArICdSOicgKyAoY3VycmVudFBhcnRpYWxSZW5kZXJlci51bmlxdWVJRCsrKS50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgY3VycmVudFBhcnRpYWxSZW5kZXJlciA9IG51bGw7XG5mdW5jdGlvbiBzZXRDdXJyZW50UGFydGlhbFJlbmRlcmVyKHJlbmRlcmVyKSB7XG4gIGN1cnJlbnRQYXJ0aWFsUmVuZGVyZXIgPSByZW5kZXJlcjtcbn1cbnZhciBEaXNwYXRjaGVyID0ge1xuICByZWFkQ29udGV4dDogcmVhZENvbnRleHQsXG4gIHVzZUNvbnRleHQ6IHVzZUNvbnRleHQsXG4gIHVzZU1lbW86IHVzZU1lbW8sXG4gIHVzZVJlZHVjZXI6IHVzZVJlZHVjZXIsXG4gIHVzZVJlZjogdXNlUmVmLFxuICB1c2VTdGF0ZTogdXNlU3RhdGUsXG4gIHVzZUxheW91dEVmZmVjdDogdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VDYWxsYmFjazogdXNlQ2FsbGJhY2ssXG4gIC8vIHVzZUltcGVyYXRpdmVIYW5kbGUgaXMgbm90IHJ1biBpbiB0aGUgc2VydmVyIGVudmlyb25tZW50XG4gIHVzZUltcGVyYXRpdmVIYW5kbGU6IG5vb3AsXG4gIC8vIEVmZmVjdHMgYXJlIG5vdCBydW4gaW4gdGhlIHNlcnZlciBlbnZpcm9ubWVudC5cbiAgdXNlRWZmZWN0OiBub29wLFxuICAvLyBEZWJ1Z2dpbmcgZWZmZWN0XG4gIHVzZURlYnVnVmFsdWU6IG5vb3AsXG4gIHVzZURlZmVycmVkVmFsdWU6IHVzZURlZmVycmVkVmFsdWUsXG4gIHVzZVRyYW5zaXRpb246IHVzZVRyYW5zaXRpb24sXG4gIHVzZU9wYXF1ZUlkZW50aWZpZXI6IHVzZU9wYXF1ZUlkZW50aWZpZXIsXG4gIC8vIFN1YnNjcmlwdGlvbnMgYXJlIG5vdCBzZXR1cCBpbiBhIHNlcnZlciBlbnZpcm9ubWVudC5cbiAgdXNlTXV0YWJsZVNvdXJjZTogdXNlTXV0YWJsZVNvdXJjZVxufTtcblxudmFyIEhUTUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xudmFyIE1BVEhfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnO1xudmFyIFNWR19OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xudmFyIE5hbWVzcGFjZXMgPSB7XG4gIGh0bWw6IEhUTUxfTkFNRVNQQUNFLFxuICBtYXRobWw6IE1BVEhfTkFNRVNQQUNFLFxuICBzdmc6IFNWR19OQU1FU1BBQ0Vcbn07IC8vIEFzc3VtZXMgdGhlcmUgaXMgbm8gcGFyZW50IG5hbWVzcGFjZS5cblxuZnVuY3Rpb24gZ2V0SW50cmluc2ljTmFtZXNwYWNlKHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnc3ZnJzpcbiAgICAgIHJldHVybiBTVkdfTkFNRVNQQUNFO1xuXG4gICAgY2FzZSAnbWF0aCc6XG4gICAgICByZXR1cm4gTUFUSF9OQU1FU1BBQ0U7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEhUTUxfTkFNRVNQQUNFO1xuICB9XG59XG5mdW5jdGlvbiBnZXRDaGlsZE5hbWVzcGFjZShwYXJlbnROYW1lc3BhY2UsIHR5cGUpIHtcbiAgaWYgKHBhcmVudE5hbWVzcGFjZSA9PSBudWxsIHx8IHBhcmVudE5hbWVzcGFjZSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAvLyBObyAob3IgZGVmYXVsdCkgcGFyZW50IG5hbWVzcGFjZTogcG90ZW50aWFsIGVudHJ5IHBvaW50LlxuICAgIHJldHVybiBnZXRJbnRyaW5zaWNOYW1lc3BhY2UodHlwZSk7XG4gIH1cblxuICBpZiAocGFyZW50TmFtZXNwYWNlID09PSBTVkdfTkFNRVNQQUNFICYmIHR5cGUgPT09ICdmb3JlaWduT2JqZWN0Jykge1xuICAgIC8vIFdlJ3JlIGxlYXZpbmcgU1ZHLlxuICAgIHJldHVybiBIVE1MX05BTUVTUEFDRTtcbiAgfSAvLyBCeSBkZWZhdWx0LCBwYXNzIG5hbWVzcGFjZSBiZWxvdy5cblxuXG4gIHJldHVybiBwYXJlbnROYW1lc3BhY2U7XG59XG5cbnZhciBoYXNSZWFkT25seVZhbHVlID0ge1xuICBidXR0b246IHRydWUsXG4gIGNoZWNrYm94OiB0cnVlLFxuICBpbWFnZTogdHJ1ZSxcbiAgaGlkZGVuOiB0cnVlLFxuICByYWRpbzogdHJ1ZSxcbiAgcmVzZXQ6IHRydWUsXG4gIHN1Ym1pdDogdHJ1ZVxufTtcbmZ1bmN0aW9uIGNoZWNrQ29udHJvbGxlZFZhbHVlUHJvcHModGFnTmFtZSwgcHJvcHMpIHtcbiAge1xuICAgIGlmICghKGhhc1JlYWRPbmx5VmFsdWVbcHJvcHMudHlwZV0gfHwgcHJvcHMub25DaGFuZ2UgfHwgcHJvcHMub25JbnB1dCB8fCBwcm9wcy5yZWFkT25seSB8fCBwcm9wcy5kaXNhYmxlZCB8fCBwcm9wcy52YWx1ZSA9PSBudWxsKSkge1xuICAgICAgZXJyb3IoJ1lvdSBwcm92aWRlZCBhIGB2YWx1ZWAgcHJvcCB0byBhIGZvcm0gZmllbGQgd2l0aG91dCBhbiAnICsgJ2BvbkNoYW5nZWAgaGFuZGxlci4gVGhpcyB3aWxsIHJlbmRlciBhIHJlYWQtb25seSBmaWVsZC4gSWYgJyArICd0aGUgZmllbGQgc2hvdWxkIGJlIG11dGFibGUgdXNlIGBkZWZhdWx0VmFsdWVgLiBPdGhlcndpc2UsICcgKyAnc2V0IGVpdGhlciBgb25DaGFuZ2VgIG9yIGByZWFkT25seWAuJyk7XG4gICAgfVxuXG4gICAgaWYgKCEocHJvcHMub25DaGFuZ2UgfHwgcHJvcHMucmVhZE9ubHkgfHwgcHJvcHMuZGlzYWJsZWQgfHwgcHJvcHMuY2hlY2tlZCA9PSBudWxsKSkge1xuICAgICAgZXJyb3IoJ1lvdSBwcm92aWRlZCBhIGBjaGVja2VkYCBwcm9wIHRvIGEgZm9ybSBmaWVsZCB3aXRob3V0IGFuICcgKyAnYG9uQ2hhbmdlYCBoYW5kbGVyLiBUaGlzIHdpbGwgcmVuZGVyIGEgcmVhZC1vbmx5IGZpZWxkLiBJZiAnICsgJ3RoZSBmaWVsZCBzaG91bGQgYmUgbXV0YWJsZSB1c2UgYGRlZmF1bHRDaGVja2VkYC4gT3RoZXJ3aXNlLCAnICsgJ3NldCBlaXRoZXIgYG9uQ2hhbmdlYCBvciBgcmVhZE9ubHlgLicpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBGb3IgSFRNTCwgY2VydGFpbiB0YWdzIHNob3VsZCBvbWl0IHRoZWlyIGNsb3NlIHRhZy4gV2Uga2VlcCBhIGxpc3QgZm9yXG4vLyB0aG9zZSBzcGVjaWFsLWNhc2UgdGFncy5cbnZhciBvbWl0dGVkQ2xvc2VUYWdzID0ge1xuICBhcmVhOiB0cnVlLFxuICBiYXNlOiB0cnVlLFxuICBicjogdHJ1ZSxcbiAgY29sOiB0cnVlLFxuICBlbWJlZDogdHJ1ZSxcbiAgaHI6IHRydWUsXG4gIGltZzogdHJ1ZSxcbiAgaW5wdXQ6IHRydWUsXG4gIGtleWdlbjogdHJ1ZSxcbiAgbGluazogdHJ1ZSxcbiAgbWV0YTogdHJ1ZSxcbiAgcGFyYW06IHRydWUsXG4gIHNvdXJjZTogdHJ1ZSxcbiAgdHJhY2s6IHRydWUsXG4gIHdicjogdHJ1ZSAvLyBOT1RFOiBtZW51aXRlbSdzIGNsb3NlIHRhZyBzaG91bGQgYmUgb21pdHRlZCwgYnV0IHRoYXQgY2F1c2VzIHByb2JsZW1zLlxuXG59O1xuXG4vLyBgb21pdHRlZENsb3NlVGFnc2AgZXhjZXB0IHRoYXQgYG1lbnVpdGVtYCBzaG91bGQgc3RpbGwgaGF2ZSBpdHMgY2xvc2luZyB0YWcuXG5cbnZhciB2b2lkRWxlbWVudFRhZ3MgPSBfYXNzaWduKHtcbiAgbWVudWl0ZW06IHRydWVcbn0sIG9taXR0ZWRDbG9zZVRhZ3MpO1xuXG52YXIgSFRNTCA9ICdfX2h0bWwnO1xuXG5mdW5jdGlvbiBhc3NlcnRWYWxpZFByb3BzKHRhZywgcHJvcHMpIHtcbiAgaWYgKCFwcm9wcykge1xuICAgIHJldHVybjtcbiAgfSAvLyBOb3RlIHRoZSB1c2Ugb2YgYD09YCB3aGljaCBjaGVja3MgZm9yIG51bGwgb3IgdW5kZWZpbmVkLlxuXG5cbiAgaWYgKHZvaWRFbGVtZW50VGFnc1t0YWddKSB7XG4gICAgaWYgKCEocHJvcHMuY2hpbGRyZW4gPT0gbnVsbCAmJiBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCA9PSBudWxsKSkge1xuICAgICAge1xuICAgICAgICB0aHJvdyBFcnJvciggdGFnICsgXCIgaXMgYSB2b2lkIGVsZW1lbnQgdGFnIGFuZCBtdXN0IG5laXRoZXIgaGF2ZSBgY2hpbGRyZW5gIG5vciB1c2UgYGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MYC5cIiApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAhPSBudWxsKSB7XG4gICAgaWYgKCEocHJvcHMuY2hpbGRyZW4gPT0gbnVsbCkpIHtcbiAgICAgIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoIFwiQ2FuIG9ubHkgc2V0IG9uZSBvZiBgY2hpbGRyZW5gIG9yIGBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTGAuXCIgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoISh0eXBlb2YgcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgPT09ICdvYmplY3QnICYmIEhUTUwgaW4gcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpKSB7XG4gICAgICB7XG4gICAgICAgIHRocm93IEVycm9yKCBcImBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTGAgbXVzdCBiZSBpbiB0aGUgZm9ybSBge19faHRtbDogLi4ufWAuIFBsZWFzZSB2aXNpdCBodHRwczovL3JlYWN0anMub3JnL2xpbmsvZGFuZ2Vyb3VzbHktc2V0LWlubmVyLWh0bWwgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKCFwcm9wcy5zdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcgJiYgcHJvcHMuY29udGVudEVkaXRhYmxlICYmIHByb3BzLmNoaWxkcmVuICE9IG51bGwpIHtcbiAgICAgIGVycm9yKCdBIGNvbXBvbmVudCBpcyBgY29udGVudEVkaXRhYmxlYCBhbmQgY29udGFpbnMgYGNoaWxkcmVuYCBtYW5hZ2VkIGJ5ICcgKyAnUmVhY3QuIEl0IGlzIG5vdyB5b3VyIHJlc3BvbnNpYmlsaXR5IHRvIGd1YXJhbnRlZSB0aGF0IG5vbmUgb2YgJyArICd0aG9zZSBub2RlcyBhcmUgdW5leHBlY3RlZGx5IG1vZGlmaWVkIG9yIGR1cGxpY2F0ZWQuIFRoaXMgaXMgJyArICdwcm9iYWJseSBub3QgaW50ZW50aW9uYWwuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCEocHJvcHMuc3R5bGUgPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHMuc3R5bGUgPT09ICdvYmplY3QnKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlRoZSBgc3R5bGVgIHByb3AgZXhwZWN0cyBhIG1hcHBpbmcgZnJvbSBzdHlsZSBwcm9wZXJ0aWVzIHRvIHZhbHVlcywgbm90IGEgc3RyaW5nLiBGb3IgZXhhbXBsZSwgc3R5bGU9e3ttYXJnaW5SaWdodDogc3BhY2luZyArICdlbSd9fSB3aGVuIHVzaW5nIEpTWC5cIiApO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENTUyBwcm9wZXJ0aWVzIHdoaWNoIGFjY2VwdCBudW1iZXJzIGJ1dCBhcmUgbm90IGluIHVuaXRzIG9mIFwicHhcIi5cbiAqL1xudmFyIGlzVW5pdGxlc3NOdW1iZXIgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiB0cnVlLFxuICBib3JkZXJJbWFnZU91dHNldDogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VTbGljZTogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogdHJ1ZSxcbiAgYm94RmxleDogdHJ1ZSxcbiAgYm94RmxleEdyb3VwOiB0cnVlLFxuICBib3hPcmRpbmFsR3JvdXA6IHRydWUsXG4gIGNvbHVtbkNvdW50OiB0cnVlLFxuICBjb2x1bW5zOiB0cnVlLFxuICBmbGV4OiB0cnVlLFxuICBmbGV4R3JvdzogdHJ1ZSxcbiAgZmxleFBvc2l0aXZlOiB0cnVlLFxuICBmbGV4U2hyaW5rOiB0cnVlLFxuICBmbGV4TmVnYXRpdmU6IHRydWUsXG4gIGZsZXhPcmRlcjogdHJ1ZSxcbiAgZ3JpZEFyZWE6IHRydWUsXG4gIGdyaWRSb3c6IHRydWUsXG4gIGdyaWRSb3dFbmQ6IHRydWUsXG4gIGdyaWRSb3dTcGFuOiB0cnVlLFxuICBncmlkUm93U3RhcnQ6IHRydWUsXG4gIGdyaWRDb2x1bW46IHRydWUsXG4gIGdyaWRDb2x1bW5FbmQ6IHRydWUsXG4gIGdyaWRDb2x1bW5TcGFuOiB0cnVlLFxuICBncmlkQ29sdW1uU3RhcnQ6IHRydWUsXG4gIGZvbnRXZWlnaHQ6IHRydWUsXG4gIGxpbmVDbGFtcDogdHJ1ZSxcbiAgbGluZUhlaWdodDogdHJ1ZSxcbiAgb3BhY2l0eTogdHJ1ZSxcbiAgb3JkZXI6IHRydWUsXG4gIG9ycGhhbnM6IHRydWUsXG4gIHRhYlNpemU6IHRydWUsXG4gIHdpZG93czogdHJ1ZSxcbiAgekluZGV4OiB0cnVlLFxuICB6b29tOiB0cnVlLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiB0cnVlLFxuICBmbG9vZE9wYWNpdHk6IHRydWUsXG4gIHN0b3BPcGFjaXR5OiB0cnVlLFxuICBzdHJva2VEYXNoYXJyYXk6IHRydWUsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IHRydWUsXG4gIHN0cm9rZU1pdGVybGltaXQ6IHRydWUsXG4gIHN0cm9rZU9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZVdpZHRoOiB0cnVlXG59O1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4IHZlbmRvci1zcGVjaWZpYyBwcmVmaXgsIGVnOiBXZWJraXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgc3R5bGUgbmFtZSwgZWc6IHRyYW5zaXRpb25EdXJhdGlvblxuICogQHJldHVybiB7c3RyaW5nfSBzdHlsZSBuYW1lIHByZWZpeGVkIHdpdGggYHByZWZpeGAsIHByb3Blcmx5IGNhbWVsQ2FzZWQsIGVnOlxuICogV2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uXG4gKi9cblxuZnVuY3Rpb24gcHJlZml4S2V5KHByZWZpeCwga2V5KSB7XG4gIHJldHVybiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xufVxuLyoqXG4gKiBTdXBwb3J0IHN0eWxlIG5hbWVzIHRoYXQgbWF5IGNvbWUgcGFzc2VkIGluIHByZWZpeGVkIGJ5IGFkZGluZyBwZXJtdXRhdGlvbnNcbiAqIG9mIHZlbmRvciBwcmVmaXhlcy5cbiAqL1xuXG5cbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ21zJywgJ01veicsICdPJ107IC8vIFVzaW5nIE9iamVjdC5rZXlzIGhlcmUsIG9yIGVsc2UgdGhlIHZhbmlsbGEgZm9yLWluIGxvb3AgbWFrZXMgSUU4IGdvIGludG8gYW5cbi8vIGluZmluaXRlIGxvb3AsIGJlY2F1c2UgaXQgaXRlcmF0ZXMgb3ZlciB0aGUgbmV3bHkgYWRkZWQgcHJvcHMgdG9vLlxuXG5PYmplY3Qua2V5cyhpc1VuaXRsZXNzTnVtYmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHByZWZpeGVzLmZvckVhY2goZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIGlzVW5pdGxlc3NOdW1iZXJbcHJlZml4S2V5KHByZWZpeCwgcHJvcCldID0gaXNVbml0bGVzc051bWJlcltwcm9wXTtcbiAgfSk7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgdmFsdWUgaW50byB0aGUgcHJvcGVyIGNzcyB3cml0YWJsZSB2YWx1ZS4gVGhlIHN0eWxlIG5hbWUgYG5hbWVgXG4gKiBzaG91bGQgYmUgbG9naWNhbCAobm8gaHlwaGVucyksIGFzIHNwZWNpZmllZFxuICogaW4gYENTU1Byb3BlcnR5LmlzVW5pdGxlc3NOdW1iZXJgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIENTUyBwcm9wZXJ0eSBuYW1lIHN1Y2ggYXMgYHRvcE1hcmdpbmAuXG4gKiBAcGFyYW0geyp9IHZhbHVlIENTUyBwcm9wZXJ0eSB2YWx1ZSBzdWNoIGFzIGAxMHB4YC5cbiAqIEByZXR1cm4ge3N0cmluZ30gTm9ybWFsaXplZCBzdHlsZSB2YWx1ZSB3aXRoIGRpbWVuc2lvbnMgYXBwbGllZC5cbiAqL1xuXG5mdW5jdGlvbiBkYW5nZXJvdXNTdHlsZVZhbHVlKG5hbWUsIHZhbHVlLCBpc0N1c3RvbVByb3BlcnR5KSB7XG4gIC8vIE5vdGUgdGhhdCB3ZSd2ZSByZW1vdmVkIGVzY2FwZVRleHRGb3JCcm93c2VyKCkgY2FsbHMgaGVyZSBzaW5jZSB0aGVcbiAgLy8gd2hvbGUgc3RyaW5nIHdpbGwgYmUgZXNjYXBlZCB3aGVuIHRoZSBhdHRyaWJ1dGUgaXMgaW5qZWN0ZWQgaW50b1xuICAvLyB0aGUgbWFya3VwLiBJZiB5b3UgcHJvdmlkZSB1bnNhZmUgdXNlciBkYXRhIGhlcmUgdGhleSBjYW4gaW5qZWN0XG4gIC8vIGFyYml0cmFyeSBDU1Mgd2hpY2ggbWF5IGJlIHByb2JsZW1hdGljIChJIGNvdWxkbid0IHJlcHJvIHRoaXMpOlxuICAvLyBodHRwczovL3d3dy5vd2FzcC5vcmcvaW5kZXgucGhwL1hTU19GaWx0ZXJfRXZhc2lvbl9DaGVhdF9TaGVldFxuICAvLyBodHRwOi8vd3d3LnRoZXNwYW5uZXIuY28udWsvMjAwNy8xMS8yNi91bHRpbWF0ZS14c3MtY3NzLWluamVjdGlvbi9cbiAgLy8gVGhpcyBpcyBub3QgYW4gWFNTIGhvbGUgYnV0IGluc3RlYWQgYSBwb3RlbnRpYWwgQ1NTIGluamVjdGlvbiBpc3N1ZVxuICAvLyB3aGljaCBoYXMgbGVhZCB0byBhIGdyZWF0ZXIgZGlzY3Vzc2lvbiBhYm91dCBob3cgd2UncmUgZ29pbmcgdG9cbiAgLy8gdHJ1c3QgVVJMcyBtb3ZpbmcgZm9yd2FyZC4gU2VlICMyMTE1OTAxXG4gIHZhciBpc0VtcHR5ID0gdmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fCB2YWx1ZSA9PT0gJyc7XG5cbiAgaWYgKGlzRW1wdHkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAoIWlzQ3VzdG9tUHJvcGVydHkgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMCAmJiAhKGlzVW5pdGxlc3NOdW1iZXIuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgaXNVbml0bGVzc051bWJlcltuYW1lXSkpIHtcbiAgICByZXR1cm4gdmFsdWUgKyAncHgnOyAvLyBQcmVzdW1lcyBpbXBsaWNpdCAncHgnIHN1ZmZpeCBmb3IgdW5pdGxlc3MgbnVtYmVyc1xuICB9XG5cbiAgcmV0dXJuICgnJyArIHZhbHVlKS50cmltKCk7XG59XG5cbnZhciB1cHBlcmNhc2VQYXR0ZXJuID0gLyhbQS1aXSkvZztcbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG4vKipcbiAqIEh5cGhlbmF0ZXMgYSBjYW1lbGNhc2VkIENTUyBwcm9wZXJ0eSBuYW1lLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdiYWNrZ3JvdW5kQ29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZC1jb2xvclwiXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdNb3pUcmFuc2l0aW9uJylcbiAqICAgPCBcIi1tb3otdHJhbnNpdGlvblwiXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdtc1RyYW5zaXRpb24nKVxuICogICA8IFwiLW1zLXRyYW5zaXRpb25cIlxuICpcbiAqIEFzIE1vZGVybml6ciBzdWdnZXN0cyAoaHR0cDovL21vZGVybml6ci5jb20vZG9jcy8jcHJlZml4ZWQpLCBhbiBgbXNgIHByZWZpeFxuICogaXMgY29udmVydGVkIHRvIGAtbXMtYC5cbiAqL1xuXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sICctJDEnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xufVxuXG5mdW5jdGlvbiBpc0N1c3RvbUNvbXBvbmVudCh0YWdOYW1lLCBwcm9wcykge1xuICBpZiAodGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBwcm9wcy5pcyA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICAvLyBUaGVzZSBhcmUgcmVzZXJ2ZWQgU1ZHIGFuZCBNYXRoTUwgZWxlbWVudHMuXG4gICAgLy8gV2UgZG9uJ3QgbWluZCB0aGlzIGxpc3QgdG9vIG11Y2ggYmVjYXVzZSB3ZSBleHBlY3QgaXQgdG8gbmV2ZXIgZ3Jvdy5cbiAgICAvLyBUaGUgYWx0ZXJuYXRpdmUgaXMgdG8gdHJhY2sgdGhlIG5hbWVzcGFjZSBpbiBhIGZldyBwbGFjZXMgd2hpY2ggaXMgY29udm9sdXRlZC5cbiAgICAvLyBodHRwczovL3czYy5naXRodWIuaW8vd2ViY29tcG9uZW50cy9zcGVjL2N1c3RvbS8jY3VzdG9tLWVsZW1lbnRzLWNvcmUtY29uY2VwdHNcbiAgICBjYXNlICdhbm5vdGF0aW9uLXhtbCc6XG4gICAgY2FzZSAnY29sb3ItcHJvZmlsZSc6XG4gICAgY2FzZSAnZm9udC1mYWNlJzpcbiAgICBjYXNlICdmb250LWZhY2Utc3JjJzpcbiAgICBjYXNlICdmb250LWZhY2UtdXJpJzpcbiAgICBjYXNlICdmb250LWZhY2UtZm9ybWF0JzpcbiAgICBjYXNlICdmb250LWZhY2UtbmFtZSc6XG4gICAgY2FzZSAnbWlzc2luZy1nbHlwaCc6XG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxudmFyIHdhcm5WYWxpZFN0eWxlID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgLy8gJ21zVHJhbnNmb3JtJyBpcyBjb3JyZWN0LCBidXQgdGhlIG90aGVyIHByZWZpeGVzIHNob3VsZCBiZSBjYXBpdGFsaXplZFxuICB2YXIgYmFkVmVuZG9yZWRTdHlsZU5hbWVQYXR0ZXJuID0gL14oPzp3ZWJraXR8bW96fG8pW0EtWl0vO1xuICB2YXIgbXNQYXR0ZXJuJDEgPSAvXi1tcy0vO1xuICB2YXIgaHlwaGVuUGF0dGVybiA9IC8tKC4pL2c7IC8vIHN0eWxlIHZhbHVlcyBzaG91bGRuJ3QgY29udGFpbiBhIHNlbWljb2xvblxuXG4gIHZhciBiYWRTdHlsZVZhbHVlV2l0aFNlbWljb2xvblBhdHRlcm4gPSAvO1xccyokLztcbiAgdmFyIHdhcm5lZFN0eWxlTmFtZXMgPSB7fTtcbiAgdmFyIHdhcm5lZFN0eWxlVmFsdWVzID0ge307XG4gIHZhciB3YXJuZWRGb3JOYU5WYWx1ZSA9IGZhbHNlO1xuICB2YXIgd2FybmVkRm9ySW5maW5pdHlWYWx1ZSA9IGZhbHNlO1xuXG4gIHZhciBjYW1lbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoaHlwaGVuUGF0dGVybiwgZnVuY3Rpb24gKF8sIGNoYXJhY3Rlcikge1xuICAgICAgcmV0dXJuIGNoYXJhY3Rlci50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciB3YXJuSHlwaGVuYXRlZFN0eWxlTmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKHdhcm5lZFN0eWxlTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0gPSB0cnVlO1xuXG4gICAgZXJyb3IoJ1Vuc3VwcG9ydGVkIHN0eWxlIHByb3BlcnR5ICVzLiBEaWQgeW91IG1lYW4gJXM/JywgbmFtZSwgLy8gQXMgQW5kaSBTbWl0aCBzdWdnZXN0c1xuICAgIC8vIChodHRwOi8vd3d3LmFuZGlzbWl0aC5jb20vYmxvZy8yMDEyLzAyL21vZGVybml6ci1wcmVmaXhlZC8pLCBhbiBgLW1zYCBwcmVmaXhcbiAgICAvLyBpcyBjb252ZXJ0ZWQgdG8gbG93ZXJjYXNlIGBtc2AuXG4gICAgY2FtZWxpemUobmFtZS5yZXBsYWNlKG1zUGF0dGVybiQxLCAnbXMtJykpKTtcbiAgfTtcblxuICB2YXIgd2FybkJhZFZlbmRvcmVkU3R5bGVOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAod2FybmVkU3R5bGVOYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiB3YXJuZWRTdHlsZU5hbWVzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSA9IHRydWU7XG5cbiAgICBlcnJvcignVW5zdXBwb3J0ZWQgdmVuZG9yLXByZWZpeGVkIHN0eWxlIHByb3BlcnR5ICVzLiBEaWQgeW91IG1lYW4gJXM/JywgbmFtZSwgbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSkpO1xuICB9O1xuXG4gIHZhciB3YXJuU3R5bGVWYWx1ZVdpdGhTZW1pY29sb24gPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAod2FybmVkU3R5bGVWYWx1ZXMuaGFzT3duUHJvcGVydHkodmFsdWUpICYmIHdhcm5lZFN0eWxlVmFsdWVzW3ZhbHVlXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdhcm5lZFN0eWxlVmFsdWVzW3ZhbHVlXSA9IHRydWU7XG5cbiAgICBlcnJvcihcIlN0eWxlIHByb3BlcnR5IHZhbHVlcyBzaG91bGRuJ3QgY29udGFpbiBhIHNlbWljb2xvbi4gXCIgKyAnVHJ5IFwiJXM6ICVzXCIgaW5zdGVhZC4nLCBuYW1lLCB2YWx1ZS5yZXBsYWNlKGJhZFN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uUGF0dGVybiwgJycpKTtcbiAgfTtcblxuICB2YXIgd2FyblN0eWxlVmFsdWVJc05hTiA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh3YXJuZWRGb3JOYU5WYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdhcm5lZEZvck5hTlZhbHVlID0gdHJ1ZTtcblxuICAgIGVycm9yKCdgTmFOYCBpcyBhbiBpbnZhbGlkIHZhbHVlIGZvciB0aGUgYCVzYCBjc3Mgc3R5bGUgcHJvcGVydHkuJywgbmFtZSk7XG4gIH07XG5cbiAgdmFyIHdhcm5TdHlsZVZhbHVlSXNJbmZpbml0eSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh3YXJuZWRGb3JJbmZpbml0eVZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmVkRm9ySW5maW5pdHlWYWx1ZSA9IHRydWU7XG5cbiAgICBlcnJvcignYEluZmluaXR5YCBpcyBhbiBpbnZhbGlkIHZhbHVlIGZvciB0aGUgYCVzYCBjc3Mgc3R5bGUgcHJvcGVydHkuJywgbmFtZSk7XG4gIH07XG5cbiAgd2FyblZhbGlkU3R5bGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAobmFtZS5pbmRleE9mKCctJykgPiAtMSkge1xuICAgICAgd2Fybkh5cGhlbmF0ZWRTdHlsZU5hbWUobmFtZSk7XG4gICAgfSBlbHNlIGlmIChiYWRWZW5kb3JlZFN0eWxlTmFtZVBhdHRlcm4udGVzdChuYW1lKSkge1xuICAgICAgd2FybkJhZFZlbmRvcmVkU3R5bGVOYW1lKG5hbWUpO1xuICAgIH0gZWxzZSBpZiAoYmFkU3R5bGVWYWx1ZVdpdGhTZW1pY29sb25QYXR0ZXJuLnRlc3QodmFsdWUpKSB7XG4gICAgICB3YXJuU3R5bGVWYWx1ZVdpdGhTZW1pY29sb24obmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIHdhcm5TdHlsZVZhbHVlSXNOYU4obmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICghaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgICAgIHdhcm5TdHlsZVZhbHVlSXNJbmZpbml0eShuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG52YXIgd2FyblZhbGlkU3R5bGUkMSA9IHdhcm5WYWxpZFN0eWxlO1xuXG52YXIgYXJpYVByb3BlcnRpZXMgPSB7XG4gICdhcmlhLWN1cnJlbnQnOiAwLFxuICAvLyBzdGF0ZVxuICAnYXJpYS1kZXRhaWxzJzogMCxcbiAgJ2FyaWEtZGlzYWJsZWQnOiAwLFxuICAvLyBzdGF0ZVxuICAnYXJpYS1oaWRkZW4nOiAwLFxuICAvLyBzdGF0ZVxuICAnYXJpYS1pbnZhbGlkJzogMCxcbiAgLy8gc3RhdGVcbiAgJ2FyaWEta2V5c2hvcnRjdXRzJzogMCxcbiAgJ2FyaWEtbGFiZWwnOiAwLFxuICAnYXJpYS1yb2xlZGVzY3JpcHRpb24nOiAwLFxuICAvLyBXaWRnZXQgQXR0cmlidXRlc1xuICAnYXJpYS1hdXRvY29tcGxldGUnOiAwLFxuICAnYXJpYS1jaGVja2VkJzogMCxcbiAgJ2FyaWEtZXhwYW5kZWQnOiAwLFxuICAnYXJpYS1oYXNwb3B1cCc6IDAsXG4gICdhcmlhLWxldmVsJzogMCxcbiAgJ2FyaWEtbW9kYWwnOiAwLFxuICAnYXJpYS1tdWx0aWxpbmUnOiAwLFxuICAnYXJpYS1tdWx0aXNlbGVjdGFibGUnOiAwLFxuICAnYXJpYS1vcmllbnRhdGlvbic6IDAsXG4gICdhcmlhLXBsYWNlaG9sZGVyJzogMCxcbiAgJ2FyaWEtcHJlc3NlZCc6IDAsXG4gICdhcmlhLXJlYWRvbmx5JzogMCxcbiAgJ2FyaWEtcmVxdWlyZWQnOiAwLFxuICAnYXJpYS1zZWxlY3RlZCc6IDAsXG4gICdhcmlhLXNvcnQnOiAwLFxuICAnYXJpYS12YWx1ZW1heCc6IDAsXG4gICdhcmlhLXZhbHVlbWluJzogMCxcbiAgJ2FyaWEtdmFsdWVub3cnOiAwLFxuICAnYXJpYS12YWx1ZXRleHQnOiAwLFxuICAvLyBMaXZlIFJlZ2lvbiBBdHRyaWJ1dGVzXG4gICdhcmlhLWF0b21pYyc6IDAsXG4gICdhcmlhLWJ1c3knOiAwLFxuICAnYXJpYS1saXZlJzogMCxcbiAgJ2FyaWEtcmVsZXZhbnQnOiAwLFxuICAvLyBEcmFnLWFuZC1Ecm9wIEF0dHJpYnV0ZXNcbiAgJ2FyaWEtZHJvcGVmZmVjdCc6IDAsXG4gICdhcmlhLWdyYWJiZWQnOiAwLFxuICAvLyBSZWxhdGlvbnNoaXAgQXR0cmlidXRlc1xuICAnYXJpYS1hY3RpdmVkZXNjZW5kYW50JzogMCxcbiAgJ2FyaWEtY29sY291bnQnOiAwLFxuICAnYXJpYS1jb2xpbmRleCc6IDAsXG4gICdhcmlhLWNvbHNwYW4nOiAwLFxuICAnYXJpYS1jb250cm9scyc6IDAsXG4gICdhcmlhLWRlc2NyaWJlZGJ5JzogMCxcbiAgJ2FyaWEtZXJyb3JtZXNzYWdlJzogMCxcbiAgJ2FyaWEtZmxvd3RvJzogMCxcbiAgJ2FyaWEtbGFiZWxsZWRieSc6IDAsXG4gICdhcmlhLW93bnMnOiAwLFxuICAnYXJpYS1wb3NpbnNldCc6IDAsXG4gICdhcmlhLXJvd2NvdW50JzogMCxcbiAgJ2FyaWEtcm93aW5kZXgnOiAwLFxuICAnYXJpYS1yb3dzcGFuJzogMCxcbiAgJ2FyaWEtc2V0c2l6ZSc6IDBcbn07XG5cbnZhciB3YXJuZWRQcm9wZXJ0aWVzID0ge307XG52YXIgckFSSUEgPSBuZXcgUmVnRXhwKCdeKGFyaWEpLVsnICsgQVRUUklCVVRFX05BTUVfQ0hBUiArICddKiQnKTtcbnZhciByQVJJQUNhbWVsID0gbmV3IFJlZ0V4cCgnXihhcmlhKVtBLVpdWycgKyBBVFRSSUJVVEVfTkFNRV9DSEFSICsgJ10qJCcpO1xudmFyIGhhc093blByb3BlcnR5JDEgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BlcnR5KHRhZ05hbWUsIG5hbWUpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSQxLmNhbGwod2FybmVkUHJvcGVydGllcywgbmFtZSkgJiYgd2FybmVkUHJvcGVydGllc1tuYW1lXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJBUklBQ2FtZWwudGVzdChuYW1lKSkge1xuICAgICAgdmFyIGFyaWFOYW1lID0gJ2FyaWEtJyArIG5hbWUuc2xpY2UoNCkudG9Mb3dlckNhc2UoKTtcbiAgICAgIHZhciBjb3JyZWN0TmFtZSA9IGFyaWFQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGFyaWFOYW1lKSA/IGFyaWFOYW1lIDogbnVsbDsgLy8gSWYgdGhpcyBpcyBhbiBhcmlhLSogYXR0cmlidXRlLCBidXQgaXMgbm90IGxpc3RlZCBpbiB0aGUga25vd24gRE9NXG4gICAgICAvLyBET00gcHJvcGVydGllcywgdGhlbiBpdCBpcyBhbiBpbnZhbGlkIGFyaWEtKiBhdHRyaWJ1dGUuXG5cbiAgICAgIGlmIChjb3JyZWN0TmFtZSA9PSBudWxsKSB7XG4gICAgICAgIGVycm9yKCdJbnZhbGlkIEFSSUEgYXR0cmlidXRlIGAlc2AuIEFSSUEgYXR0cmlidXRlcyBmb2xsb3cgdGhlIHBhdHRlcm4gYXJpYS0qIGFuZCBtdXN0IGJlIGxvd2VyY2FzZS4nLCBuYW1lKTtcblxuICAgICAgICB3YXJuZWRQcm9wZXJ0aWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IC8vIGFyaWEtKiBhdHRyaWJ1dGVzIHNob3VsZCBiZSBsb3dlcmNhc2U7IHN1Z2dlc3QgdGhlIGxvd2VyY2FzZSB2ZXJzaW9uLlxuXG5cbiAgICAgIGlmIChuYW1lICE9PSBjb3JyZWN0TmFtZSkge1xuICAgICAgICBlcnJvcignSW52YWxpZCBBUklBIGF0dHJpYnV0ZSBgJXNgLiBEaWQgeW91IG1lYW4gYCVzYD8nLCBuYW1lLCBjb3JyZWN0TmFtZSk7XG5cbiAgICAgICAgd2FybmVkUHJvcGVydGllc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyQVJJQS50ZXN0KG5hbWUpKSB7XG4gICAgICB2YXIgbG93ZXJDYXNlZE5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICB2YXIgc3RhbmRhcmROYW1lID0gYXJpYVByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkobG93ZXJDYXNlZE5hbWUpID8gbG93ZXJDYXNlZE5hbWUgOiBudWxsOyAvLyBJZiB0aGlzIGlzIGFuIGFyaWEtKiBhdHRyaWJ1dGUsIGJ1dCBpcyBub3QgbGlzdGVkIGluIHRoZSBrbm93biBET01cbiAgICAgIC8vIERPTSBwcm9wZXJ0aWVzLCB0aGVuIGl0IGlzIGFuIGludmFsaWQgYXJpYS0qIGF0dHJpYnV0ZS5cblxuICAgICAgaWYgKHN0YW5kYXJkTmFtZSA9PSBudWxsKSB7XG4gICAgICAgIHdhcm5lZFByb3BlcnRpZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IC8vIGFyaWEtKiBhdHRyaWJ1dGVzIHNob3VsZCBiZSBsb3dlcmNhc2U7IHN1Z2dlc3QgdGhlIGxvd2VyY2FzZSB2ZXJzaW9uLlxuXG5cbiAgICAgIGlmIChuYW1lICE9PSBzdGFuZGFyZE5hbWUpIHtcbiAgICAgICAgZXJyb3IoJ1Vua25vd24gQVJJQSBhdHRyaWJ1dGUgYCVzYC4gRGlkIHlvdSBtZWFuIGAlc2A/JywgbmFtZSwgc3RhbmRhcmROYW1lKTtcblxuICAgICAgICB3YXJuZWRQcm9wZXJ0aWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHdhcm5JbnZhbGlkQVJJQVByb3BzKHR5cGUsIHByb3BzKSB7XG4gIHtcbiAgICB2YXIgaW52YWxpZFByb3BzID0gW107XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIHZhciBpc1ZhbGlkID0gdmFsaWRhdGVQcm9wZXJ0eSh0eXBlLCBrZXkpO1xuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgaW52YWxpZFByb3BzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdW5rbm93blByb3BTdHJpbmcgPSBpbnZhbGlkUHJvcHMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICByZXR1cm4gJ2AnICsgcHJvcCArICdgJztcbiAgICB9KS5qb2luKCcsICcpO1xuXG4gICAgaWYgKGludmFsaWRQcm9wcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGFyaWEgcHJvcCAlcyBvbiA8JXM+IHRhZy4gJyArICdGb3IgZGV0YWlscywgc2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9pbnZhbGlkLWFyaWEtcHJvcHMnLCB1bmtub3duUHJvcFN0cmluZywgdHlwZSk7XG4gICAgfSBlbHNlIGlmIChpbnZhbGlkUHJvcHMubGVuZ3RoID4gMSkge1xuICAgICAgZXJyb3IoJ0ludmFsaWQgYXJpYSBwcm9wcyAlcyBvbiA8JXM+IHRhZy4gJyArICdGb3IgZGV0YWlscywgc2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9pbnZhbGlkLWFyaWEtcHJvcHMnLCB1bmtub3duUHJvcFN0cmluZywgdHlwZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcGVydGllcyh0eXBlLCBwcm9wcykge1xuICBpZiAoaXNDdXN0b21Db21wb25lbnQodHlwZSwgcHJvcHMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgd2FybkludmFsaWRBUklBUHJvcHModHlwZSwgcHJvcHMpO1xufVxuXG52YXIgZGlkV2FyblZhbHVlTnVsbCA9IGZhbHNlO1xuZnVuY3Rpb24gdmFsaWRhdGVQcm9wZXJ0aWVzJDEodHlwZSwgcHJvcHMpIHtcbiAge1xuICAgIGlmICh0eXBlICE9PSAnaW5wdXQnICYmIHR5cGUgIT09ICd0ZXh0YXJlYScgJiYgdHlwZSAhPT0gJ3NlbGVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMgIT0gbnVsbCAmJiBwcm9wcy52YWx1ZSA9PT0gbnVsbCAmJiAhZGlkV2FyblZhbHVlTnVsbCkge1xuICAgICAgZGlkV2FyblZhbHVlTnVsbCA9IHRydWU7XG5cbiAgICAgIGlmICh0eXBlID09PSAnc2VsZWN0JyAmJiBwcm9wcy5tdWx0aXBsZSkge1xuICAgICAgICBlcnJvcignYHZhbHVlYCBwcm9wIG9uIGAlc2Agc2hvdWxkIG5vdCBiZSBudWxsLiAnICsgJ0NvbnNpZGVyIHVzaW5nIGFuIGVtcHR5IGFycmF5IHdoZW4gYG11bHRpcGxlYCBpcyBzZXQgdG8gYHRydWVgICcgKyAndG8gY2xlYXIgdGhlIGNvbXBvbmVudCBvciBgdW5kZWZpbmVkYCBmb3IgdW5jb250cm9sbGVkIGNvbXBvbmVudHMuJywgdHlwZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvcignYHZhbHVlYCBwcm9wIG9uIGAlc2Agc2hvdWxkIG5vdCBiZSBudWxsLiAnICsgJ0NvbnNpZGVyIHVzaW5nIGFuIGVtcHR5IHN0cmluZyB0byBjbGVhciB0aGUgY29tcG9uZW50IG9yIGB1bmRlZmluZWRgICcgKyAnZm9yIHVuY29udHJvbGxlZCBjb21wb25lbnRzLicsIHR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBXaGVuIGFkZGluZyBhdHRyaWJ1dGVzIHRvIHRoZSBIVE1MIG9yIFNWRyBhbGxvd2VkIGF0dHJpYnV0ZSBsaXN0LCBiZSBzdXJlIHRvXG4vLyBhbHNvIGFkZCB0aGVtIHRvIHRoaXMgbW9kdWxlIHRvIGVuc3VyZSBjYXNpbmcgYW5kIGluY29ycmVjdCBuYW1lXG4vLyB3YXJuaW5ncy5cbnZhciBwb3NzaWJsZVN0YW5kYXJkTmFtZXMgPSB7XG4gIC8vIEhUTUxcbiAgYWNjZXB0OiAnYWNjZXB0JyxcbiAgYWNjZXB0Y2hhcnNldDogJ2FjY2VwdENoYXJzZXQnLFxuICAnYWNjZXB0LWNoYXJzZXQnOiAnYWNjZXB0Q2hhcnNldCcsXG4gIGFjY2Vzc2tleTogJ2FjY2Vzc0tleScsXG4gIGFjdGlvbjogJ2FjdGlvbicsXG4gIGFsbG93ZnVsbHNjcmVlbjogJ2FsbG93RnVsbFNjcmVlbicsXG4gIGFsdDogJ2FsdCcsXG4gIGFzOiAnYXMnLFxuICBhc3luYzogJ2FzeW5jJyxcbiAgYXV0b2NhcGl0YWxpemU6ICdhdXRvQ2FwaXRhbGl6ZScsXG4gIGF1dG9jb21wbGV0ZTogJ2F1dG9Db21wbGV0ZScsXG4gIGF1dG9jb3JyZWN0OiAnYXV0b0NvcnJlY3QnLFxuICBhdXRvZm9jdXM6ICdhdXRvRm9jdXMnLFxuICBhdXRvcGxheTogJ2F1dG9QbGF5JyxcbiAgYXV0b3NhdmU6ICdhdXRvU2F2ZScsXG4gIGNhcHR1cmU6ICdjYXB0dXJlJyxcbiAgY2VsbHBhZGRpbmc6ICdjZWxsUGFkZGluZycsXG4gIGNlbGxzcGFjaW5nOiAnY2VsbFNwYWNpbmcnLFxuICBjaGFsbGVuZ2U6ICdjaGFsbGVuZ2UnLFxuICBjaGFyc2V0OiAnY2hhclNldCcsXG4gIGNoZWNrZWQ6ICdjaGVja2VkJyxcbiAgY2hpbGRyZW46ICdjaGlsZHJlbicsXG4gIGNpdGU6ICdjaXRlJyxcbiAgY2xhc3M6ICdjbGFzc05hbWUnLFxuICBjbGFzc2lkOiAnY2xhc3NJRCcsXG4gIGNsYXNzbmFtZTogJ2NsYXNzTmFtZScsXG4gIGNvbHM6ICdjb2xzJyxcbiAgY29sc3BhbjogJ2NvbFNwYW4nLFxuICBjb250ZW50OiAnY29udGVudCcsXG4gIGNvbnRlbnRlZGl0YWJsZTogJ2NvbnRlbnRFZGl0YWJsZScsXG4gIGNvbnRleHRtZW51OiAnY29udGV4dE1lbnUnLFxuICBjb250cm9sczogJ2NvbnRyb2xzJyxcbiAgY29udHJvbHNsaXN0OiAnY29udHJvbHNMaXN0JyxcbiAgY29vcmRzOiAnY29vcmRzJyxcbiAgY3Jvc3NvcmlnaW46ICdjcm9zc09yaWdpbicsXG4gIGRhbmdlcm91c2x5c2V0aW5uZXJodG1sOiAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnLFxuICBkYXRhOiAnZGF0YScsXG4gIGRhdGV0aW1lOiAnZGF0ZVRpbWUnLFxuICBkZWZhdWx0OiAnZGVmYXVsdCcsXG4gIGRlZmF1bHRjaGVja2VkOiAnZGVmYXVsdENoZWNrZWQnLFxuICBkZWZhdWx0dmFsdWU6ICdkZWZhdWx0VmFsdWUnLFxuICBkZWZlcjogJ2RlZmVyJyxcbiAgZGlyOiAnZGlyJyxcbiAgZGlzYWJsZWQ6ICdkaXNhYmxlZCcsXG4gIGRpc2FibGVwaWN0dXJlaW5waWN0dXJlOiAnZGlzYWJsZVBpY3R1cmVJblBpY3R1cmUnLFxuICBkaXNhYmxlcmVtb3RlcGxheWJhY2s6ICdkaXNhYmxlUmVtb3RlUGxheWJhY2snLFxuICBkb3dubG9hZDogJ2Rvd25sb2FkJyxcbiAgZHJhZ2dhYmxlOiAnZHJhZ2dhYmxlJyxcbiAgZW5jdHlwZTogJ2VuY1R5cGUnLFxuICBlbnRlcmtleWhpbnQ6ICdlbnRlcktleUhpbnQnLFxuICBmb3I6ICdodG1sRm9yJyxcbiAgZm9ybTogJ2Zvcm0nLFxuICBmb3JtbWV0aG9kOiAnZm9ybU1ldGhvZCcsXG4gIGZvcm1hY3Rpb246ICdmb3JtQWN0aW9uJyxcbiAgZm9ybWVuY3R5cGU6ICdmb3JtRW5jVHlwZScsXG4gIGZvcm1ub3ZhbGlkYXRlOiAnZm9ybU5vVmFsaWRhdGUnLFxuICBmb3JtdGFyZ2V0OiAnZm9ybVRhcmdldCcsXG4gIGZyYW1lYm9yZGVyOiAnZnJhbWVCb3JkZXInLFxuICBoZWFkZXJzOiAnaGVhZGVycycsXG4gIGhlaWdodDogJ2hlaWdodCcsXG4gIGhpZGRlbjogJ2hpZGRlbicsXG4gIGhpZ2g6ICdoaWdoJyxcbiAgaHJlZjogJ2hyZWYnLFxuICBocmVmbGFuZzogJ2hyZWZMYW5nJyxcbiAgaHRtbGZvcjogJ2h0bWxGb3InLFxuICBodHRwZXF1aXY6ICdodHRwRXF1aXYnLFxuICAnaHR0cC1lcXVpdic6ICdodHRwRXF1aXYnLFxuICBpY29uOiAnaWNvbicsXG4gIGlkOiAnaWQnLFxuICBpbm5lcmh0bWw6ICdpbm5lckhUTUwnLFxuICBpbnB1dG1vZGU6ICdpbnB1dE1vZGUnLFxuICBpbnRlZ3JpdHk6ICdpbnRlZ3JpdHknLFxuICBpczogJ2lzJyxcbiAgaXRlbWlkOiAnaXRlbUlEJyxcbiAgaXRlbXByb3A6ICdpdGVtUHJvcCcsXG4gIGl0ZW1yZWY6ICdpdGVtUmVmJyxcbiAgaXRlbXNjb3BlOiAnaXRlbVNjb3BlJyxcbiAgaXRlbXR5cGU6ICdpdGVtVHlwZScsXG4gIGtleXBhcmFtczogJ2tleVBhcmFtcycsXG4gIGtleXR5cGU6ICdrZXlUeXBlJyxcbiAga2luZDogJ2tpbmQnLFxuICBsYWJlbDogJ2xhYmVsJyxcbiAgbGFuZzogJ2xhbmcnLFxuICBsaXN0OiAnbGlzdCcsXG4gIGxvb3A6ICdsb29wJyxcbiAgbG93OiAnbG93JyxcbiAgbWFuaWZlc3Q6ICdtYW5pZmVzdCcsXG4gIG1hcmdpbndpZHRoOiAnbWFyZ2luV2lkdGgnLFxuICBtYXJnaW5oZWlnaHQ6ICdtYXJnaW5IZWlnaHQnLFxuICBtYXg6ICdtYXgnLFxuICBtYXhsZW5ndGg6ICdtYXhMZW5ndGgnLFxuICBtZWRpYTogJ21lZGlhJyxcbiAgbWVkaWFncm91cDogJ21lZGlhR3JvdXAnLFxuICBtZXRob2Q6ICdtZXRob2QnLFxuICBtaW46ICdtaW4nLFxuICBtaW5sZW5ndGg6ICdtaW5MZW5ndGgnLFxuICBtdWx0aXBsZTogJ211bHRpcGxlJyxcbiAgbXV0ZWQ6ICdtdXRlZCcsXG4gIG5hbWU6ICduYW1lJyxcbiAgbm9tb2R1bGU6ICdub01vZHVsZScsXG4gIG5vbmNlOiAnbm9uY2UnLFxuICBub3ZhbGlkYXRlOiAnbm9WYWxpZGF0ZScsXG4gIG9wZW46ICdvcGVuJyxcbiAgb3B0aW11bTogJ29wdGltdW0nLFxuICBwYXR0ZXJuOiAncGF0dGVybicsXG4gIHBsYWNlaG9sZGVyOiAncGxhY2Vob2xkZXInLFxuICBwbGF5c2lubGluZTogJ3BsYXlzSW5saW5lJyxcbiAgcG9zdGVyOiAncG9zdGVyJyxcbiAgcHJlbG9hZDogJ3ByZWxvYWQnLFxuICBwcm9maWxlOiAncHJvZmlsZScsXG4gIHJhZGlvZ3JvdXA6ICdyYWRpb0dyb3VwJyxcbiAgcmVhZG9ubHk6ICdyZWFkT25seScsXG4gIHJlZmVycmVycG9saWN5OiAncmVmZXJyZXJQb2xpY3knLFxuICByZWw6ICdyZWwnLFxuICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcbiAgcmV2ZXJzZWQ6ICdyZXZlcnNlZCcsXG4gIHJvbGU6ICdyb2xlJyxcbiAgcm93czogJ3Jvd3MnLFxuICByb3dzcGFuOiAncm93U3BhbicsXG4gIHNhbmRib3g6ICdzYW5kYm94JyxcbiAgc2NvcGU6ICdzY29wZScsXG4gIHNjb3BlZDogJ3Njb3BlZCcsXG4gIHNjcm9sbGluZzogJ3Njcm9sbGluZycsXG4gIHNlYW1sZXNzOiAnc2VhbWxlc3MnLFxuICBzZWxlY3RlZDogJ3NlbGVjdGVkJyxcbiAgc2hhcGU6ICdzaGFwZScsXG4gIHNpemU6ICdzaXplJyxcbiAgc2l6ZXM6ICdzaXplcycsXG4gIHNwYW46ICdzcGFuJyxcbiAgc3BlbGxjaGVjazogJ3NwZWxsQ2hlY2snLFxuICBzcmM6ICdzcmMnLFxuICBzcmNkb2M6ICdzcmNEb2MnLFxuICBzcmNsYW5nOiAnc3JjTGFuZycsXG4gIHNyY3NldDogJ3NyY1NldCcsXG4gIHN0YXJ0OiAnc3RhcnQnLFxuICBzdGVwOiAnc3RlcCcsXG4gIHN0eWxlOiAnc3R5bGUnLFxuICBzdW1tYXJ5OiAnc3VtbWFyeScsXG4gIHRhYmluZGV4OiAndGFiSW5kZXgnLFxuICB0YXJnZXQ6ICd0YXJnZXQnLFxuICB0aXRsZTogJ3RpdGxlJyxcbiAgdHlwZTogJ3R5cGUnLFxuICB1c2VtYXA6ICd1c2VNYXAnLFxuICB2YWx1ZTogJ3ZhbHVlJyxcbiAgd2lkdGg6ICd3aWR0aCcsXG4gIHdtb2RlOiAnd21vZGUnLFxuICB3cmFwOiAnd3JhcCcsXG4gIC8vIFNWR1xuICBhYm91dDogJ2Fib3V0JyxcbiAgYWNjZW50aGVpZ2h0OiAnYWNjZW50SGVpZ2h0JyxcbiAgJ2FjY2VudC1oZWlnaHQnOiAnYWNjZW50SGVpZ2h0JyxcbiAgYWNjdW11bGF0ZTogJ2FjY3VtdWxhdGUnLFxuICBhZGRpdGl2ZTogJ2FkZGl0aXZlJyxcbiAgYWxpZ25tZW50YmFzZWxpbmU6ICdhbGlnbm1lbnRCYXNlbGluZScsXG4gICdhbGlnbm1lbnQtYmFzZWxpbmUnOiAnYWxpZ25tZW50QmFzZWxpbmUnLFxuICBhbGxvd3Jlb3JkZXI6ICdhbGxvd1Jlb3JkZXInLFxuICBhbHBoYWJldGljOiAnYWxwaGFiZXRpYycsXG4gIGFtcGxpdHVkZTogJ2FtcGxpdHVkZScsXG4gIGFyYWJpY2Zvcm06ICdhcmFiaWNGb3JtJyxcbiAgJ2FyYWJpYy1mb3JtJzogJ2FyYWJpY0Zvcm0nLFxuICBhc2NlbnQ6ICdhc2NlbnQnLFxuICBhdHRyaWJ1dGVuYW1lOiAnYXR0cmlidXRlTmFtZScsXG4gIGF0dHJpYnV0ZXR5cGU6ICdhdHRyaWJ1dGVUeXBlJyxcbiAgYXV0b3JldmVyc2U6ICdhdXRvUmV2ZXJzZScsXG4gIGF6aW11dGg6ICdhemltdXRoJyxcbiAgYmFzZWZyZXF1ZW5jeTogJ2Jhc2VGcmVxdWVuY3knLFxuICBiYXNlbGluZXNoaWZ0OiAnYmFzZWxpbmVTaGlmdCcsXG4gICdiYXNlbGluZS1zaGlmdCc6ICdiYXNlbGluZVNoaWZ0JyxcbiAgYmFzZXByb2ZpbGU6ICdiYXNlUHJvZmlsZScsXG4gIGJib3g6ICdiYm94JyxcbiAgYmVnaW46ICdiZWdpbicsXG4gIGJpYXM6ICdiaWFzJyxcbiAgYnk6ICdieScsXG4gIGNhbGNtb2RlOiAnY2FsY01vZGUnLFxuICBjYXBoZWlnaHQ6ICdjYXBIZWlnaHQnLFxuICAnY2FwLWhlaWdodCc6ICdjYXBIZWlnaHQnLFxuICBjbGlwOiAnY2xpcCcsXG4gIGNsaXBwYXRoOiAnY2xpcFBhdGgnLFxuICAnY2xpcC1wYXRoJzogJ2NsaXBQYXRoJyxcbiAgY2xpcHBhdGh1bml0czogJ2NsaXBQYXRoVW5pdHMnLFxuICBjbGlwcnVsZTogJ2NsaXBSdWxlJyxcbiAgJ2NsaXAtcnVsZSc6ICdjbGlwUnVsZScsXG4gIGNvbG9yOiAnY29sb3InLFxuICBjb2xvcmludGVycG9sYXRpb246ICdjb2xvckludGVycG9sYXRpb24nLFxuICAnY29sb3ItaW50ZXJwb2xhdGlvbic6ICdjb2xvckludGVycG9sYXRpb24nLFxuICBjb2xvcmludGVycG9sYXRpb25maWx0ZXJzOiAnY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVycycsXG4gICdjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMnOiAnY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVycycsXG4gIGNvbG9ycHJvZmlsZTogJ2NvbG9yUHJvZmlsZScsXG4gICdjb2xvci1wcm9maWxlJzogJ2NvbG9yUHJvZmlsZScsXG4gIGNvbG9ycmVuZGVyaW5nOiAnY29sb3JSZW5kZXJpbmcnLFxuICAnY29sb3ItcmVuZGVyaW5nJzogJ2NvbG9yUmVuZGVyaW5nJyxcbiAgY29udGVudHNjcmlwdHR5cGU6ICdjb250ZW50U2NyaXB0VHlwZScsXG4gIGNvbnRlbnRzdHlsZXR5cGU6ICdjb250ZW50U3R5bGVUeXBlJyxcbiAgY3Vyc29yOiAnY3Vyc29yJyxcbiAgY3g6ICdjeCcsXG4gIGN5OiAnY3knLFxuICBkOiAnZCcsXG4gIGRhdGF0eXBlOiAnZGF0YXR5cGUnLFxuICBkZWNlbGVyYXRlOiAnZGVjZWxlcmF0ZScsXG4gIGRlc2NlbnQ6ICdkZXNjZW50JyxcbiAgZGlmZnVzZWNvbnN0YW50OiAnZGlmZnVzZUNvbnN0YW50JyxcbiAgZGlyZWN0aW9uOiAnZGlyZWN0aW9uJyxcbiAgZGlzcGxheTogJ2Rpc3BsYXknLFxuICBkaXZpc29yOiAnZGl2aXNvcicsXG4gIGRvbWluYW50YmFzZWxpbmU6ICdkb21pbmFudEJhc2VsaW5lJyxcbiAgJ2RvbWluYW50LWJhc2VsaW5lJzogJ2RvbWluYW50QmFzZWxpbmUnLFxuICBkdXI6ICdkdXInLFxuICBkeDogJ2R4JyxcbiAgZHk6ICdkeScsXG4gIGVkZ2Vtb2RlOiAnZWRnZU1vZGUnLFxuICBlbGV2YXRpb246ICdlbGV2YXRpb24nLFxuICBlbmFibGViYWNrZ3JvdW5kOiAnZW5hYmxlQmFja2dyb3VuZCcsXG4gICdlbmFibGUtYmFja2dyb3VuZCc6ICdlbmFibGVCYWNrZ3JvdW5kJyxcbiAgZW5kOiAnZW5kJyxcbiAgZXhwb25lbnQ6ICdleHBvbmVudCcsXG4gIGV4dGVybmFscmVzb3VyY2VzcmVxdWlyZWQ6ICdleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkJyxcbiAgZmlsbDogJ2ZpbGwnLFxuICBmaWxsb3BhY2l0eTogJ2ZpbGxPcGFjaXR5JyxcbiAgJ2ZpbGwtb3BhY2l0eSc6ICdmaWxsT3BhY2l0eScsXG4gIGZpbGxydWxlOiAnZmlsbFJ1bGUnLFxuICAnZmlsbC1ydWxlJzogJ2ZpbGxSdWxlJyxcbiAgZmlsdGVyOiAnZmlsdGVyJyxcbiAgZmlsdGVycmVzOiAnZmlsdGVyUmVzJyxcbiAgZmlsdGVydW5pdHM6ICdmaWx0ZXJVbml0cycsXG4gIGZsb29kb3BhY2l0eTogJ2Zsb29kT3BhY2l0eScsXG4gICdmbG9vZC1vcGFjaXR5JzogJ2Zsb29kT3BhY2l0eScsXG4gIGZsb29kY29sb3I6ICdmbG9vZENvbG9yJyxcbiAgJ2Zsb29kLWNvbG9yJzogJ2Zsb29kQ29sb3InLFxuICBmb2N1c2FibGU6ICdmb2N1c2FibGUnLFxuICBmb250ZmFtaWx5OiAnZm9udEZhbWlseScsXG4gICdmb250LWZhbWlseSc6ICdmb250RmFtaWx5JyxcbiAgZm9udHNpemU6ICdmb250U2l6ZScsXG4gICdmb250LXNpemUnOiAnZm9udFNpemUnLFxuICBmb250c2l6ZWFkanVzdDogJ2ZvbnRTaXplQWRqdXN0JyxcbiAgJ2ZvbnQtc2l6ZS1hZGp1c3QnOiAnZm9udFNpemVBZGp1c3QnLFxuICBmb250c3RyZXRjaDogJ2ZvbnRTdHJldGNoJyxcbiAgJ2ZvbnQtc3RyZXRjaCc6ICdmb250U3RyZXRjaCcsXG4gIGZvbnRzdHlsZTogJ2ZvbnRTdHlsZScsXG4gICdmb250LXN0eWxlJzogJ2ZvbnRTdHlsZScsXG4gIGZvbnR2YXJpYW50OiAnZm9udFZhcmlhbnQnLFxuICAnZm9udC12YXJpYW50JzogJ2ZvbnRWYXJpYW50JyxcbiAgZm9udHdlaWdodDogJ2ZvbnRXZWlnaHQnLFxuICAnZm9udC13ZWlnaHQnOiAnZm9udFdlaWdodCcsXG4gIGZvcm1hdDogJ2Zvcm1hdCcsXG4gIGZyb206ICdmcm9tJyxcbiAgZng6ICdmeCcsXG4gIGZ5OiAnZnknLFxuICBnMTogJ2cxJyxcbiAgZzI6ICdnMicsXG4gIGdseXBobmFtZTogJ2dseXBoTmFtZScsXG4gICdnbHlwaC1uYW1lJzogJ2dseXBoTmFtZScsXG4gIGdseXBob3JpZW50YXRpb25ob3Jpem9udGFsOiAnZ2x5cGhPcmllbnRhdGlvbkhvcml6b250YWwnLFxuICAnZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbCc6ICdnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbCcsXG4gIGdseXBob3JpZW50YXRpb252ZXJ0aWNhbDogJ2dseXBoT3JpZW50YXRpb25WZXJ0aWNhbCcsXG4gICdnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbCc6ICdnbHlwaE9yaWVudGF0aW9uVmVydGljYWwnLFxuICBnbHlwaHJlZjogJ2dseXBoUmVmJyxcbiAgZ3JhZGllbnR0cmFuc2Zvcm06ICdncmFkaWVudFRyYW5zZm9ybScsXG4gIGdyYWRpZW50dW5pdHM6ICdncmFkaWVudFVuaXRzJyxcbiAgaGFuZ2luZzogJ2hhbmdpbmcnLFxuICBob3JpemFkdng6ICdob3JpekFkdlgnLFxuICAnaG9yaXotYWR2LXgnOiAnaG9yaXpBZHZYJyxcbiAgaG9yaXpvcmlnaW54OiAnaG9yaXpPcmlnaW5YJyxcbiAgJ2hvcml6LW9yaWdpbi14JzogJ2hvcml6T3JpZ2luWCcsXG4gIGlkZW9ncmFwaGljOiAnaWRlb2dyYXBoaWMnLFxuICBpbWFnZXJlbmRlcmluZzogJ2ltYWdlUmVuZGVyaW5nJyxcbiAgJ2ltYWdlLXJlbmRlcmluZyc6ICdpbWFnZVJlbmRlcmluZycsXG4gIGluMjogJ2luMicsXG4gIGluOiAnaW4nLFxuICBpbmxpc3Q6ICdpbmxpc3QnLFxuICBpbnRlcmNlcHQ6ICdpbnRlcmNlcHQnLFxuICBrMTogJ2sxJyxcbiAgazI6ICdrMicsXG4gIGszOiAnazMnLFxuICBrNDogJ2s0JyxcbiAgazogJ2snLFxuICBrZXJuZWxtYXRyaXg6ICdrZXJuZWxNYXRyaXgnLFxuICBrZXJuZWx1bml0bGVuZ3RoOiAna2VybmVsVW5pdExlbmd0aCcsXG4gIGtlcm5pbmc6ICdrZXJuaW5nJyxcbiAga2V5cG9pbnRzOiAna2V5UG9pbnRzJyxcbiAga2V5c3BsaW5lczogJ2tleVNwbGluZXMnLFxuICBrZXl0aW1lczogJ2tleVRpbWVzJyxcbiAgbGVuZ3RoYWRqdXN0OiAnbGVuZ3RoQWRqdXN0JyxcbiAgbGV0dGVyc3BhY2luZzogJ2xldHRlclNwYWNpbmcnLFxuICAnbGV0dGVyLXNwYWNpbmcnOiAnbGV0dGVyU3BhY2luZycsXG4gIGxpZ2h0aW5nY29sb3I6ICdsaWdodGluZ0NvbG9yJyxcbiAgJ2xpZ2h0aW5nLWNvbG9yJzogJ2xpZ2h0aW5nQ29sb3InLFxuICBsaW1pdGluZ2NvbmVhbmdsZTogJ2xpbWl0aW5nQ29uZUFuZ2xlJyxcbiAgbG9jYWw6ICdsb2NhbCcsXG4gIG1hcmtlcmVuZDogJ21hcmtlckVuZCcsXG4gICdtYXJrZXItZW5kJzogJ21hcmtlckVuZCcsXG4gIG1hcmtlcmhlaWdodDogJ21hcmtlckhlaWdodCcsXG4gIG1hcmtlcm1pZDogJ21hcmtlck1pZCcsXG4gICdtYXJrZXItbWlkJzogJ21hcmtlck1pZCcsXG4gIG1hcmtlcnN0YXJ0OiAnbWFya2VyU3RhcnQnLFxuICAnbWFya2VyLXN0YXJ0JzogJ21hcmtlclN0YXJ0JyxcbiAgbWFya2VydW5pdHM6ICdtYXJrZXJVbml0cycsXG4gIG1hcmtlcndpZHRoOiAnbWFya2VyV2lkdGgnLFxuICBtYXNrOiAnbWFzaycsXG4gIG1hc2tjb250ZW50dW5pdHM6ICdtYXNrQ29udGVudFVuaXRzJyxcbiAgbWFza3VuaXRzOiAnbWFza1VuaXRzJyxcbiAgbWF0aGVtYXRpY2FsOiAnbWF0aGVtYXRpY2FsJyxcbiAgbW9kZTogJ21vZGUnLFxuICBudW1vY3RhdmVzOiAnbnVtT2N0YXZlcycsXG4gIG9mZnNldDogJ29mZnNldCcsXG4gIG9wYWNpdHk6ICdvcGFjaXR5JyxcbiAgb3BlcmF0b3I6ICdvcGVyYXRvcicsXG4gIG9yZGVyOiAnb3JkZXInLFxuICBvcmllbnQ6ICdvcmllbnQnLFxuICBvcmllbnRhdGlvbjogJ29yaWVudGF0aW9uJyxcbiAgb3JpZ2luOiAnb3JpZ2luJyxcbiAgb3ZlcmZsb3c6ICdvdmVyZmxvdycsXG4gIG92ZXJsaW5lcG9zaXRpb246ICdvdmVybGluZVBvc2l0aW9uJyxcbiAgJ292ZXJsaW5lLXBvc2l0aW9uJzogJ292ZXJsaW5lUG9zaXRpb24nLFxuICBvdmVybGluZXRoaWNrbmVzczogJ292ZXJsaW5lVGhpY2tuZXNzJyxcbiAgJ292ZXJsaW5lLXRoaWNrbmVzcyc6ICdvdmVybGluZVRoaWNrbmVzcycsXG4gIHBhaW50b3JkZXI6ICdwYWludE9yZGVyJyxcbiAgJ3BhaW50LW9yZGVyJzogJ3BhaW50T3JkZXInLFxuICBwYW5vc2UxOiAncGFub3NlMScsXG4gICdwYW5vc2UtMSc6ICdwYW5vc2UxJyxcbiAgcGF0aGxlbmd0aDogJ3BhdGhMZW5ndGgnLFxuICBwYXR0ZXJuY29udGVudHVuaXRzOiAncGF0dGVybkNvbnRlbnRVbml0cycsXG4gIHBhdHRlcm50cmFuc2Zvcm06ICdwYXR0ZXJuVHJhbnNmb3JtJyxcbiAgcGF0dGVybnVuaXRzOiAncGF0dGVyblVuaXRzJyxcbiAgcG9pbnRlcmV2ZW50czogJ3BvaW50ZXJFdmVudHMnLFxuICAncG9pbnRlci1ldmVudHMnOiAncG9pbnRlckV2ZW50cycsXG4gIHBvaW50czogJ3BvaW50cycsXG4gIHBvaW50c2F0eDogJ3BvaW50c0F0WCcsXG4gIHBvaW50c2F0eTogJ3BvaW50c0F0WScsXG4gIHBvaW50c2F0ejogJ3BvaW50c0F0WicsXG4gIHByZWZpeDogJ3ByZWZpeCcsXG4gIHByZXNlcnZlYWxwaGE6ICdwcmVzZXJ2ZUFscGhhJyxcbiAgcHJlc2VydmVhc3BlY3RyYXRpbzogJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLFxuICBwcmltaXRpdmV1bml0czogJ3ByaW1pdGl2ZVVuaXRzJyxcbiAgcHJvcGVydHk6ICdwcm9wZXJ0eScsXG4gIHI6ICdyJyxcbiAgcmFkaXVzOiAncmFkaXVzJyxcbiAgcmVmeDogJ3JlZlgnLFxuICByZWZ5OiAncmVmWScsXG4gIHJlbmRlcmluZ2ludGVudDogJ3JlbmRlcmluZ0ludGVudCcsXG4gICdyZW5kZXJpbmctaW50ZW50JzogJ3JlbmRlcmluZ0ludGVudCcsXG4gIHJlcGVhdGNvdW50OiAncmVwZWF0Q291bnQnLFxuICByZXBlYXRkdXI6ICdyZXBlYXREdXInLFxuICByZXF1aXJlZGV4dGVuc2lvbnM6ICdyZXF1aXJlZEV4dGVuc2lvbnMnLFxuICByZXF1aXJlZGZlYXR1cmVzOiAncmVxdWlyZWRGZWF0dXJlcycsXG4gIHJlc291cmNlOiAncmVzb3VyY2UnLFxuICByZXN0YXJ0OiAncmVzdGFydCcsXG4gIHJlc3VsdDogJ3Jlc3VsdCcsXG4gIHJlc3VsdHM6ICdyZXN1bHRzJyxcbiAgcm90YXRlOiAncm90YXRlJyxcbiAgcng6ICdyeCcsXG4gIHJ5OiAncnknLFxuICBzY2FsZTogJ3NjYWxlJyxcbiAgc2VjdXJpdHk6ICdzZWN1cml0eScsXG4gIHNlZWQ6ICdzZWVkJyxcbiAgc2hhcGVyZW5kZXJpbmc6ICdzaGFwZVJlbmRlcmluZycsXG4gICdzaGFwZS1yZW5kZXJpbmcnOiAnc2hhcGVSZW5kZXJpbmcnLFxuICBzbG9wZTogJ3Nsb3BlJyxcbiAgc3BhY2luZzogJ3NwYWNpbmcnLFxuICBzcGVjdWxhcmNvbnN0YW50OiAnc3BlY3VsYXJDb25zdGFudCcsXG4gIHNwZWN1bGFyZXhwb25lbnQ6ICdzcGVjdWxhckV4cG9uZW50JyxcbiAgc3BlZWQ6ICdzcGVlZCcsXG4gIHNwcmVhZG1ldGhvZDogJ3NwcmVhZE1ldGhvZCcsXG4gIHN0YXJ0b2Zmc2V0OiAnc3RhcnRPZmZzZXQnLFxuICBzdGRkZXZpYXRpb246ICdzdGREZXZpYXRpb24nLFxuICBzdGVtaDogJ3N0ZW1oJyxcbiAgc3RlbXY6ICdzdGVtdicsXG4gIHN0aXRjaHRpbGVzOiAnc3RpdGNoVGlsZXMnLFxuICBzdG9wY29sb3I6ICdzdG9wQ29sb3InLFxuICAnc3RvcC1jb2xvcic6ICdzdG9wQ29sb3InLFxuICBzdG9wb3BhY2l0eTogJ3N0b3BPcGFjaXR5JyxcbiAgJ3N0b3Atb3BhY2l0eSc6ICdzdG9wT3BhY2l0eScsXG4gIHN0cmlrZXRocm91Z2hwb3NpdGlvbjogJ3N0cmlrZXRocm91Z2hQb3NpdGlvbicsXG4gICdzdHJpa2V0aHJvdWdoLXBvc2l0aW9uJzogJ3N0cmlrZXRocm91Z2hQb3NpdGlvbicsXG4gIHN0cmlrZXRocm91Z2h0aGlja25lc3M6ICdzdHJpa2V0aHJvdWdoVGhpY2tuZXNzJyxcbiAgJ3N0cmlrZXRocm91Z2gtdGhpY2tuZXNzJzogJ3N0cmlrZXRocm91Z2hUaGlja25lc3MnLFxuICBzdHJpbmc6ICdzdHJpbmcnLFxuICBzdHJva2U6ICdzdHJva2UnLFxuICBzdHJva2VkYXNoYXJyYXk6ICdzdHJva2VEYXNoYXJyYXknLFxuICAnc3Ryb2tlLWRhc2hhcnJheSc6ICdzdHJva2VEYXNoYXJyYXknLFxuICBzdHJva2VkYXNob2Zmc2V0OiAnc3Ryb2tlRGFzaG9mZnNldCcsXG4gICdzdHJva2UtZGFzaG9mZnNldCc6ICdzdHJva2VEYXNob2Zmc2V0JyxcbiAgc3Ryb2tlbGluZWNhcDogJ3N0cm9rZUxpbmVjYXAnLFxuICAnc3Ryb2tlLWxpbmVjYXAnOiAnc3Ryb2tlTGluZWNhcCcsXG4gIHN0cm9rZWxpbmVqb2luOiAnc3Ryb2tlTGluZWpvaW4nLFxuICAnc3Ryb2tlLWxpbmVqb2luJzogJ3N0cm9rZUxpbmVqb2luJyxcbiAgc3Ryb2tlbWl0ZXJsaW1pdDogJ3N0cm9rZU1pdGVybGltaXQnLFxuICAnc3Ryb2tlLW1pdGVybGltaXQnOiAnc3Ryb2tlTWl0ZXJsaW1pdCcsXG4gIHN0cm9rZXdpZHRoOiAnc3Ryb2tlV2lkdGgnLFxuICAnc3Ryb2tlLXdpZHRoJzogJ3N0cm9rZVdpZHRoJyxcbiAgc3Ryb2tlb3BhY2l0eTogJ3N0cm9rZU9wYWNpdHknLFxuICAnc3Ryb2tlLW9wYWNpdHknOiAnc3Ryb2tlT3BhY2l0eScsXG4gIHN1cHByZXNzY29udGVudGVkaXRhYmxld2FybmluZzogJ3N1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZycsXG4gIHN1cHByZXNzaHlkcmF0aW9ud2FybmluZzogJ3N1cHByZXNzSHlkcmF0aW9uV2FybmluZycsXG4gIHN1cmZhY2VzY2FsZTogJ3N1cmZhY2VTY2FsZScsXG4gIHN5c3RlbWxhbmd1YWdlOiAnc3lzdGVtTGFuZ3VhZ2UnLFxuICB0YWJsZXZhbHVlczogJ3RhYmxlVmFsdWVzJyxcbiAgdGFyZ2V0eDogJ3RhcmdldFgnLFxuICB0YXJnZXR5OiAndGFyZ2V0WScsXG4gIHRleHRhbmNob3I6ICd0ZXh0QW5jaG9yJyxcbiAgJ3RleHQtYW5jaG9yJzogJ3RleHRBbmNob3InLFxuICB0ZXh0ZGVjb3JhdGlvbjogJ3RleHREZWNvcmF0aW9uJyxcbiAgJ3RleHQtZGVjb3JhdGlvbic6ICd0ZXh0RGVjb3JhdGlvbicsXG4gIHRleHRsZW5ndGg6ICd0ZXh0TGVuZ3RoJyxcbiAgdGV4dHJlbmRlcmluZzogJ3RleHRSZW5kZXJpbmcnLFxuICAndGV4dC1yZW5kZXJpbmcnOiAndGV4dFJlbmRlcmluZycsXG4gIHRvOiAndG8nLFxuICB0cmFuc2Zvcm06ICd0cmFuc2Zvcm0nLFxuICB0eXBlb2Y6ICd0eXBlb2YnLFxuICB1MTogJ3UxJyxcbiAgdTI6ICd1MicsXG4gIHVuZGVybGluZXBvc2l0aW9uOiAndW5kZXJsaW5lUG9zaXRpb24nLFxuICAndW5kZXJsaW5lLXBvc2l0aW9uJzogJ3VuZGVybGluZVBvc2l0aW9uJyxcbiAgdW5kZXJsaW5ldGhpY2tuZXNzOiAndW5kZXJsaW5lVGhpY2tuZXNzJyxcbiAgJ3VuZGVybGluZS10aGlja25lc3MnOiAndW5kZXJsaW5lVGhpY2tuZXNzJyxcbiAgdW5pY29kZTogJ3VuaWNvZGUnLFxuICB1bmljb2RlYmlkaTogJ3VuaWNvZGVCaWRpJyxcbiAgJ3VuaWNvZGUtYmlkaSc6ICd1bmljb2RlQmlkaScsXG4gIHVuaWNvZGVyYW5nZTogJ3VuaWNvZGVSYW5nZScsXG4gICd1bmljb2RlLXJhbmdlJzogJ3VuaWNvZGVSYW5nZScsXG4gIHVuaXRzcGVyZW06ICd1bml0c1BlckVtJyxcbiAgJ3VuaXRzLXBlci1lbSc6ICd1bml0c1BlckVtJyxcbiAgdW5zZWxlY3RhYmxlOiAndW5zZWxlY3RhYmxlJyxcbiAgdmFscGhhYmV0aWM6ICd2QWxwaGFiZXRpYycsXG4gICd2LWFscGhhYmV0aWMnOiAndkFscGhhYmV0aWMnLFxuICB2YWx1ZXM6ICd2YWx1ZXMnLFxuICB2ZWN0b3JlZmZlY3Q6ICd2ZWN0b3JFZmZlY3QnLFxuICAndmVjdG9yLWVmZmVjdCc6ICd2ZWN0b3JFZmZlY3QnLFxuICB2ZXJzaW9uOiAndmVyc2lvbicsXG4gIHZlcnRhZHZ5OiAndmVydEFkdlknLFxuICAndmVydC1hZHYteSc6ICd2ZXJ0QWR2WScsXG4gIHZlcnRvcmlnaW54OiAndmVydE9yaWdpblgnLFxuICAndmVydC1vcmlnaW4teCc6ICd2ZXJ0T3JpZ2luWCcsXG4gIHZlcnRvcmlnaW55OiAndmVydE9yaWdpblknLFxuICAndmVydC1vcmlnaW4teSc6ICd2ZXJ0T3JpZ2luWScsXG4gIHZoYW5naW5nOiAndkhhbmdpbmcnLFxuICAndi1oYW5naW5nJzogJ3ZIYW5naW5nJyxcbiAgdmlkZW9ncmFwaGljOiAndklkZW9ncmFwaGljJyxcbiAgJ3YtaWRlb2dyYXBoaWMnOiAndklkZW9ncmFwaGljJyxcbiAgdmlld2JveDogJ3ZpZXdCb3gnLFxuICB2aWV3dGFyZ2V0OiAndmlld1RhcmdldCcsXG4gIHZpc2liaWxpdHk6ICd2aXNpYmlsaXR5JyxcbiAgdm1hdGhlbWF0aWNhbDogJ3ZNYXRoZW1hdGljYWwnLFxuICAndi1tYXRoZW1hdGljYWwnOiAndk1hdGhlbWF0aWNhbCcsXG4gIHZvY2FiOiAndm9jYWInLFxuICB3aWR0aHM6ICd3aWR0aHMnLFxuICB3b3Jkc3BhY2luZzogJ3dvcmRTcGFjaW5nJyxcbiAgJ3dvcmQtc3BhY2luZyc6ICd3b3JkU3BhY2luZycsXG4gIHdyaXRpbmdtb2RlOiAnd3JpdGluZ01vZGUnLFxuICAnd3JpdGluZy1tb2RlJzogJ3dyaXRpbmdNb2RlJyxcbiAgeDE6ICd4MScsXG4gIHgyOiAneDInLFxuICB4OiAneCcsXG4gIHhjaGFubmVsc2VsZWN0b3I6ICd4Q2hhbm5lbFNlbGVjdG9yJyxcbiAgeGhlaWdodDogJ3hIZWlnaHQnLFxuICAneC1oZWlnaHQnOiAneEhlaWdodCcsXG4gIHhsaW5rYWN0dWF0ZTogJ3hsaW5rQWN0dWF0ZScsXG4gICd4bGluazphY3R1YXRlJzogJ3hsaW5rQWN0dWF0ZScsXG4gIHhsaW5rYXJjcm9sZTogJ3hsaW5rQXJjcm9sZScsXG4gICd4bGluazphcmNyb2xlJzogJ3hsaW5rQXJjcm9sZScsXG4gIHhsaW5raHJlZjogJ3hsaW5rSHJlZicsXG4gICd4bGluazpocmVmJzogJ3hsaW5rSHJlZicsXG4gIHhsaW5rcm9sZTogJ3hsaW5rUm9sZScsXG4gICd4bGluazpyb2xlJzogJ3hsaW5rUm9sZScsXG4gIHhsaW5rc2hvdzogJ3hsaW5rU2hvdycsXG4gICd4bGluazpzaG93JzogJ3hsaW5rU2hvdycsXG4gIHhsaW5rdGl0bGU6ICd4bGlua1RpdGxlJyxcbiAgJ3hsaW5rOnRpdGxlJzogJ3hsaW5rVGl0bGUnLFxuICB4bGlua3R5cGU6ICd4bGlua1R5cGUnLFxuICAneGxpbms6dHlwZSc6ICd4bGlua1R5cGUnLFxuICB4bWxiYXNlOiAneG1sQmFzZScsXG4gICd4bWw6YmFzZSc6ICd4bWxCYXNlJyxcbiAgeG1sbGFuZzogJ3htbExhbmcnLFxuICAneG1sOmxhbmcnOiAneG1sTGFuZycsXG4gIHhtbG5zOiAneG1sbnMnLFxuICAneG1sOnNwYWNlJzogJ3htbFNwYWNlJyxcbiAgeG1sbnN4bGluazogJ3htbG5zWGxpbmsnLFxuICAneG1sbnM6eGxpbmsnOiAneG1sbnNYbGluaycsXG4gIHhtbHNwYWNlOiAneG1sU3BhY2UnLFxuICB5MTogJ3kxJyxcbiAgeTI6ICd5MicsXG4gIHk6ICd5JyxcbiAgeWNoYW5uZWxzZWxlY3RvcjogJ3lDaGFubmVsU2VsZWN0b3InLFxuICB6OiAneicsXG4gIHpvb21hbmRwYW46ICd6b29tQW5kUGFuJ1xufTtcblxudmFyIHZhbGlkYXRlUHJvcGVydHkkMSA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciB3YXJuZWRQcm9wZXJ0aWVzJDEgPSB7fTtcbiAgdmFyIF9oYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciBFVkVOVF9OQU1FX1JFR0VYID0gL15vbi4vO1xuICB2YXIgSU5WQUxJRF9FVkVOVF9OQU1FX1JFR0VYID0gL15vblteQS1aXS87XG4gIHZhciByQVJJQSQxID0gbmV3IFJlZ0V4cCgnXihhcmlhKS1bJyArIEFUVFJJQlVURV9OQU1FX0NIQVIgKyAnXSokJyk7XG4gIHZhciByQVJJQUNhbWVsJDEgPSBuZXcgUmVnRXhwKCdeKGFyaWEpW0EtWl1bJyArIEFUVFJJQlVURV9OQU1FX0NIQVIgKyAnXSokJyk7XG5cbiAgdmFsaWRhdGVQcm9wZXJ0eSQxID0gZnVuY3Rpb24gKHRhZ05hbWUsIG5hbWUsIHZhbHVlLCBldmVudFJlZ2lzdHJ5KSB7XG4gICAgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHdhcm5lZFByb3BlcnRpZXMkMSwgbmFtZSkgJiYgd2FybmVkUHJvcGVydGllcyQxW25hbWVdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgbG93ZXJDYXNlZE5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAobG93ZXJDYXNlZE5hbWUgPT09ICdvbmZvY3VzaW4nIHx8IGxvd2VyQ2FzZWROYW1lID09PSAnb25mb2N1c291dCcpIHtcbiAgICAgIGVycm9yKCdSZWFjdCB1c2VzIG9uRm9jdXMgYW5kIG9uQmx1ciBpbnN0ZWFkIG9mIG9uRm9jdXNJbiBhbmQgb25Gb2N1c091dC4gJyArICdBbGwgUmVhY3QgZXZlbnRzIGFyZSBub3JtYWxpemVkIHRvIGJ1YmJsZSwgc28gb25Gb2N1c0luIGFuZCBvbkZvY3VzT3V0ICcgKyAnYXJlIG5vdCBuZWVkZWQvc3VwcG9ydGVkIGJ5IFJlYWN0LicpO1xuXG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBXZSBjYW4ndCByZWx5IG9uIHRoZSBldmVudCBzeXN0ZW0gYmVpbmcgaW5qZWN0ZWQgb24gdGhlIHNlcnZlci5cblxuXG4gICAgaWYgKGV2ZW50UmVnaXN0cnkgIT0gbnVsbCkge1xuICAgICAgdmFyIHJlZ2lzdHJhdGlvbk5hbWVEZXBlbmRlbmNpZXMgPSBldmVudFJlZ2lzdHJ5LnJlZ2lzdHJhdGlvbk5hbWVEZXBlbmRlbmNpZXMsXG4gICAgICAgICAgcG9zc2libGVSZWdpc3RyYXRpb25OYW1lcyA9IGV2ZW50UmVnaXN0cnkucG9zc2libGVSZWdpc3RyYXRpb25OYW1lcztcblxuICAgICAgaWYgKHJlZ2lzdHJhdGlvbk5hbWVEZXBlbmRlbmNpZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWdpc3RyYXRpb25OYW1lID0gcG9zc2libGVSZWdpc3RyYXRpb25OYW1lcy5oYXNPd25Qcm9wZXJ0eShsb3dlckNhc2VkTmFtZSkgPyBwb3NzaWJsZVJlZ2lzdHJhdGlvbk5hbWVzW2xvd2VyQ2FzZWROYW1lXSA6IG51bGw7XG5cbiAgICAgIGlmIChyZWdpc3RyYXRpb25OYW1lICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgZXZlbnQgaGFuZGxlciBwcm9wZXJ0eSBgJXNgLiBEaWQgeW91IG1lYW4gYCVzYD8nLCBuYW1lLCByZWdpc3RyYXRpb25OYW1lKTtcblxuICAgICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKEVWRU5UX05BTUVfUkVHRVgudGVzdChuYW1lKSkge1xuICAgICAgICBlcnJvcignVW5rbm93biBldmVudCBoYW5kbGVyIHByb3BlcnR5IGAlc2AuIEl0IHdpbGwgYmUgaWdub3JlZC4nLCBuYW1lKTtcblxuICAgICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKEVWRU5UX05BTUVfUkVHRVgudGVzdChuYW1lKSkge1xuICAgICAgLy8gSWYgbm8gZXZlbnQgcGx1Z2lucyBoYXZlIGJlZW4gaW5qZWN0ZWQsIHdlIGFyZSBpbiBhIHNlcnZlciBlbnZpcm9ubWVudC5cbiAgICAgIC8vIFNvIHdlIGNhbid0IHRlbGwgaWYgdGhlIGV2ZW50IG5hbWUgaXMgY29ycmVjdCBmb3Igc3VyZSwgYnV0IHdlIGNhbiBmaWx0ZXJcbiAgICAgIC8vIG91dCBrbm93biBiYWQgb25lcyBsaWtlIGBvbmNsaWNrYC4gV2UgY2FuJ3Qgc3VnZ2VzdCBhIHNwZWNpZmljIHJlcGxhY2VtZW50IHRob3VnaC5cbiAgICAgIGlmIChJTlZBTElEX0VWRU5UX05BTUVfUkVHRVgudGVzdChuYW1lKSkge1xuICAgICAgICBlcnJvcignSW52YWxpZCBldmVudCBoYW5kbGVyIHByb3BlcnR5IGAlc2AuICcgKyAnUmVhY3QgZXZlbnRzIHVzZSB0aGUgY2FtZWxDYXNlIG5hbWluZyBjb252ZW50aW9uLCBmb3IgZXhhbXBsZSBgb25DbGlja2AuJywgbmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIExldCB0aGUgQVJJQSBhdHRyaWJ1dGUgaG9vayB2YWxpZGF0ZSBBUklBIGF0dHJpYnV0ZXNcblxuXG4gICAgaWYgKHJBUklBJDEudGVzdChuYW1lKSB8fCByQVJJQUNhbWVsJDEudGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGxvd2VyQ2FzZWROYW1lID09PSAnaW5uZXJodG1sJykge1xuICAgICAgZXJyb3IoJ0RpcmVjdGx5IHNldHRpbmcgcHJvcGVydHkgYGlubmVySFRNTGAgaXMgbm90IHBlcm1pdHRlZC4gJyArICdGb3IgbW9yZSBpbmZvcm1hdGlvbiwgbG9va3VwIGRvY3VtZW50YXRpb24gb24gYGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MYC4nKTtcblxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChsb3dlckNhc2VkTmFtZSA9PT0gJ2FyaWEnKSB7XG4gICAgICBlcnJvcignVGhlIGBhcmlhYCBhdHRyaWJ1dGUgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSB1c2UgaW4gUmVhY3QuICcgKyAnUGFzcyBpbmRpdmlkdWFsIGBhcmlhLWAgYXR0cmlidXRlcyBpbnN0ZWFkLicpO1xuXG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGxvd2VyQ2FzZWROYW1lID09PSAnaXMnICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGEgYCVzYCBmb3IgYSBzdHJpbmcgYXR0cmlidXRlIGBpc2AuIElmIHRoaXMgaXMgZXhwZWN0ZWQsIGNhc3QgJyArICd0aGUgdmFsdWUgdG8gYSBzdHJpbmcuJywgdHlwZW9mIHZhbHVlKTtcblxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIE5hTiBmb3IgdGhlIGAlc2AgYXR0cmlidXRlLiBJZiB0aGlzIGlzIGV4cGVjdGVkLCBjYXN0ICcgKyAndGhlIHZhbHVlIHRvIGEgc3RyaW5nLicsIG5hbWUpO1xuXG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHByb3BlcnR5SW5mbyA9IGdldFByb3BlcnR5SW5mbyhuYW1lKTtcbiAgICB2YXIgaXNSZXNlcnZlZCA9IHByb3BlcnR5SW5mbyAhPT0gbnVsbCAmJiBwcm9wZXJ0eUluZm8udHlwZSA9PT0gUkVTRVJWRUQ7IC8vIEtub3duIGF0dHJpYnV0ZXMgc2hvdWxkIG1hdGNoIHRoZSBjYXNpbmcgc3BlY2lmaWVkIGluIHRoZSBwcm9wZXJ0eSBjb25maWcuXG5cbiAgICBpZiAocG9zc2libGVTdGFuZGFyZE5hbWVzLmhhc093blByb3BlcnR5KGxvd2VyQ2FzZWROYW1lKSkge1xuICAgICAgdmFyIHN0YW5kYXJkTmFtZSA9IHBvc3NpYmxlU3RhbmRhcmROYW1lc1tsb3dlckNhc2VkTmFtZV07XG5cbiAgICAgIGlmIChzdGFuZGFyZE5hbWUgIT09IG5hbWUpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgRE9NIHByb3BlcnR5IGAlc2AuIERpZCB5b3UgbWVhbiBgJXNgPycsIG5hbWUsIHN0YW5kYXJkTmFtZSk7XG5cbiAgICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaXNSZXNlcnZlZCAmJiBuYW1lICE9PSBsb3dlckNhc2VkTmFtZSkge1xuICAgICAgLy8gVW5rbm93biBhdHRyaWJ1dGVzIHNob3VsZCBoYXZlIGxvd2VyY2FzZSBjYXNpbmcgc2luY2UgdGhhdCdzIGhvdyB0aGV5XG4gICAgICAvLyB3aWxsIGJlIGNhc2VkIGFueXdheSB3aXRoIHNlcnZlciByZW5kZXJpbmcuXG4gICAgICBlcnJvcignUmVhY3QgZG9lcyBub3QgcmVjb2duaXplIHRoZSBgJXNgIHByb3Agb24gYSBET00gZWxlbWVudC4gSWYgeW91ICcgKyAnaW50ZW50aW9uYWxseSB3YW50IGl0IHRvIGFwcGVhciBpbiB0aGUgRE9NIGFzIGEgY3VzdG9tICcgKyAnYXR0cmlidXRlLCBzcGVsbCBpdCBhcyBsb3dlcmNhc2UgYCVzYCBpbnN0ZWFkLiAnICsgJ0lmIHlvdSBhY2NpZGVudGFsbHkgcGFzc2VkIGl0IGZyb20gYSBwYXJlbnQgY29tcG9uZW50LCByZW1vdmUgJyArICdpdCBmcm9tIHRoZSBET00gZWxlbWVudC4nLCBuYW1lLCBsb3dlckNhc2VkTmFtZSk7XG5cbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgJiYgc2hvdWxkUmVtb3ZlQXR0cmlidXRlV2l0aFdhcm5pbmcobmFtZSwgdmFsdWUsIHByb3BlcnR5SW5mbywgZmFsc2UpKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZXJyb3IoJ1JlY2VpdmVkIGAlc2AgZm9yIGEgbm9uLWJvb2xlYW4gYXR0cmlidXRlIGAlc2AuXFxuXFxuJyArICdJZiB5b3Ugd2FudCB0byB3cml0ZSBpdCB0byB0aGUgRE9NLCBwYXNzIGEgc3RyaW5nIGluc3RlYWQ6ICcgKyAnJXM9XCIlc1wiIG9yICVzPXt2YWx1ZS50b1N0cmluZygpfS4nLCB2YWx1ZSwgbmFtZSwgbmFtZSwgdmFsdWUsIG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IoJ1JlY2VpdmVkIGAlc2AgZm9yIGEgbm9uLWJvb2xlYW4gYXR0cmlidXRlIGAlc2AuXFxuXFxuJyArICdJZiB5b3Ugd2FudCB0byB3cml0ZSBpdCB0byB0aGUgRE9NLCBwYXNzIGEgc3RyaW5nIGluc3RlYWQ6ICcgKyAnJXM9XCIlc1wiIG9yICVzPXt2YWx1ZS50b1N0cmluZygpfS5cXG5cXG4nICsgJ0lmIHlvdSB1c2VkIHRvIGNvbmRpdGlvbmFsbHkgb21pdCBpdCB3aXRoICVzPXtjb25kaXRpb24gJiYgdmFsdWV9LCAnICsgJ3Bhc3MgJXM9e2NvbmRpdGlvbiA/IHZhbHVlIDogdW5kZWZpbmVkfSBpbnN0ZWFkLicsIHZhbHVlLCBuYW1lLCBuYW1lLCB2YWx1ZSwgbmFtZSwgbmFtZSwgbmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIE5vdyB0aGF0IHdlJ3ZlIHZhbGlkYXRlZCBjYXNpbmcsIGRvIG5vdCB2YWxpZGF0ZVxuICAgIC8vIGRhdGEgdHlwZXMgZm9yIHJlc2VydmVkIHByb3BzXG5cblxuICAgIGlmIChpc1Jlc2VydmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIFdhcm4gd2hlbiBhIGtub3duIGF0dHJpYnV0ZSBpcyBhIGJhZCB0eXBlXG5cblxuICAgIGlmIChzaG91bGRSZW1vdmVBdHRyaWJ1dGVXaXRoV2FybmluZyhuYW1lLCB2YWx1ZSwgcHJvcGVydHlJbmZvLCBmYWxzZSkpIHtcbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBXYXJuIHdoZW4gcGFzc2luZyB0aGUgc3RyaW5ncyAnZmFsc2UnIG9yICd0cnVlJyBpbnRvIGEgYm9vbGVhbiBwcm9wXG5cblxuICAgIGlmICgodmFsdWUgPT09ICdmYWxzZScgfHwgdmFsdWUgPT09ICd0cnVlJykgJiYgcHJvcGVydHlJbmZvICE9PSBudWxsICYmIHByb3BlcnR5SW5mby50eXBlID09PSBCT09MRUFOKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgdGhlIHN0cmluZyBgJXNgIGZvciB0aGUgYm9vbGVhbiBhdHRyaWJ1dGUgYCVzYC4gJyArICclcyAnICsgJ0RpZCB5b3UgbWVhbiAlcz17JXN9PycsIHZhbHVlLCBuYW1lLCB2YWx1ZSA9PT0gJ2ZhbHNlJyA/ICdUaGUgYnJvd3NlciB3aWxsIGludGVycHJldCBpdCBhcyBhIHRydXRoeSB2YWx1ZS4nIDogJ0FsdGhvdWdoIHRoaXMgd29ya3MsIGl0IHdpbGwgbm90IHdvcmsgYXMgZXhwZWN0ZWQgaWYgeW91IHBhc3MgdGhlIHN0cmluZyBcImZhbHNlXCIuJywgbmFtZSwgdmFsdWUpO1xuXG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG5cbnZhciB3YXJuVW5rbm93blByb3BlcnRpZXMgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMsIGV2ZW50UmVnaXN0cnkpIHtcbiAge1xuICAgIHZhciB1bmtub3duUHJvcHMgPSBbXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgdmFyIGlzVmFsaWQgPSB2YWxpZGF0ZVByb3BlcnR5JDEodHlwZSwga2V5LCBwcm9wc1trZXldLCBldmVudFJlZ2lzdHJ5KTtcblxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHVua25vd25Qcm9wcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHVua25vd25Qcm9wU3RyaW5nID0gdW5rbm93blByb3BzLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcmV0dXJuICdgJyArIHByb3AgKyAnYCc7XG4gICAgfSkuam9pbignLCAnKTtcblxuICAgIGlmICh1bmtub3duUHJvcHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBlcnJvcignSW52YWxpZCB2YWx1ZSBmb3IgcHJvcCAlcyBvbiA8JXM+IHRhZy4gRWl0aGVyIHJlbW92ZSBpdCBmcm9tIHRoZSBlbGVtZW50LCAnICsgJ29yIHBhc3MgYSBzdHJpbmcgb3IgbnVtYmVyIHZhbHVlIHRvIGtlZXAgaXQgaW4gdGhlIERPTS4gJyArICdGb3IgZGV0YWlscywgc2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9hdHRyaWJ1dGUtYmVoYXZpb3IgJywgdW5rbm93blByb3BTdHJpbmcsIHR5cGUpO1xuICAgIH0gZWxzZSBpZiAodW5rbm93blByb3BzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIHZhbHVlcyBmb3IgcHJvcHMgJXMgb24gPCVzPiB0YWcuIEVpdGhlciByZW1vdmUgdGhlbSBmcm9tIHRoZSBlbGVtZW50LCAnICsgJ29yIHBhc3MgYSBzdHJpbmcgb3IgbnVtYmVyIHZhbHVlIHRvIGtlZXAgdGhlbSBpbiB0aGUgRE9NLiAnICsgJ0ZvciBkZXRhaWxzLCBzZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2F0dHJpYnV0ZS1iZWhhdmlvciAnLCB1bmtub3duUHJvcFN0cmluZywgdHlwZSk7XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BlcnRpZXMkMih0eXBlLCBwcm9wcywgZXZlbnRSZWdpc3RyeSkge1xuICBpZiAoaXNDdXN0b21Db21wb25lbnQodHlwZSwgcHJvcHMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgd2FyblVua25vd25Qcm9wZXJ0aWVzKHR5cGUsIHByb3BzLCBldmVudFJlZ2lzdHJ5KTtcbn1cblxudmFyIHRvQXJyYXkgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5OyAvLyBUaGlzIGlzIG9ubHkgdXNlZCBpbiBERVYuXG4vLyBFYWNoIGVudHJ5IGlzIGB0aGlzLnN0YWNrYCBmcm9tIGEgY3VycmVudGx5IGV4ZWN1dGluZyByZW5kZXJlciBpbnN0YW5jZS5cbi8vIChUaGVyZSBtYXkgYmUgbW9yZSB0aGFuIG9uZSBiZWNhdXNlIFJlYWN0RE9NU2VydmVyIGlzIHJlZW50cmFudCkuXG4vLyBFYWNoIHN0YWNrIGlzIGFuIGFycmF5IG9mIGZyYW1lcyB3aGljaCBtYXkgY29udGFpbiBuZXN0ZWQgc3RhY2tzIG9mIGVsZW1lbnRzLlxuXG52YXIgY3VycmVudERlYnVnU3RhY2tzID0gW107XG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDE7XG52YXIgcHJldkdldEN1cnJlbnRTdGFja0ltcGwgPSBudWxsO1xuXG52YXIgZ2V0Q3VycmVudFNlcnZlclN0YWNrSW1wbCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICcnO1xufTtcblxudmFyIGRlc2NyaWJlU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHJldHVybiAnJztcbn07XG5cbnZhciB2YWxpZGF0ZVByb3BlcnRpZXNJbkRldmVsb3BtZW50ID0gZnVuY3Rpb24gKHR5cGUsIHByb3BzKSB7fTtcblxudmFyIHB1c2hDdXJyZW50RGVidWdTdGFjayA9IGZ1bmN0aW9uIChzdGFjaykge307XG5cbnZhciBwdXNoRWxlbWVudFRvRGVidWdTdGFjayA9IGZ1bmN0aW9uIChlbGVtZW50KSB7fTtcblxudmFyIHBvcEN1cnJlbnREZWJ1Z1N0YWNrID0gZnVuY3Rpb24gKCkge307XG5cbnZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29udGV4dEFzQ29uc3VtZXIgPSBmYWxzZTtcblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG4gIHZhbGlkYXRlUHJvcGVydGllc0luRGV2ZWxvcG1lbnQgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMpIHtcbiAgICB2YWxpZGF0ZVByb3BlcnRpZXModHlwZSwgcHJvcHMpO1xuICAgIHZhbGlkYXRlUHJvcGVydGllcyQxKHR5cGUsIHByb3BzKTtcbiAgICB2YWxpZGF0ZVByb3BlcnRpZXMkMih0eXBlLCBwcm9wcywgbnVsbCk7XG4gIH07XG5cbiAgZGVzY3JpYmVTdGFja0ZyYW1lID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBudWxsKTtcbiAgfTtcblxuICBwdXNoQ3VycmVudERlYnVnU3RhY2sgPSBmdW5jdGlvbiAoc3RhY2spIHtcbiAgICBjdXJyZW50RGVidWdTdGFja3MucHVzaChzdGFjayk7XG5cbiAgICBpZiAoY3VycmVudERlYnVnU3RhY2tzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gV2UgYXJlIGVudGVyaW5nIGEgc2VydmVyIHJlbmRlcmVyLlxuICAgICAgLy8gUmVtZW1iZXIgdGhlIHByZXZpb3VzIChlLmcuIGNsaWVudCkgZ2xvYmFsIHN0YWNrIGltcGxlbWVudGF0aW9uLlxuICAgICAgcHJldkdldEN1cnJlbnRTdGFja0ltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuZ2V0Q3VycmVudFN0YWNrO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLmdldEN1cnJlbnRTdGFjayA9IGdldEN1cnJlbnRTZXJ2ZXJTdGFja0ltcGw7XG4gICAgfVxuICB9O1xuXG4gIHB1c2hFbGVtZW50VG9EZWJ1Z1N0YWNrID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvLyBGb3IgdGhlIGlubmVybW9zdCBleGVjdXRpbmcgUmVhY3RET01TZXJ2ZXIgY2FsbCxcbiAgICB2YXIgc3RhY2sgPSBjdXJyZW50RGVidWdTdGFja3NbY3VycmVudERlYnVnU3RhY2tzLmxlbmd0aCAtIDFdOyAvLyBUYWtlIHRoZSBpbm5lcm1vc3QgZXhlY3V0aW5nIGZyYW1lIChlLmcuIDxGb28+KSxcblxuICAgIHZhciBmcmFtZSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdOyAvLyBhbmQgcmVjb3JkIHRoYXQgaXQgaGFzIG9uZSBtb3JlIGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIGl0LlxuXG4gICAgZnJhbWUuZGVidWdFbGVtZW50U3RhY2sucHVzaChlbGVtZW50KTsgLy8gV2Ugb25seSBuZWVkIHRoaXMgYmVjYXVzZSB3ZSB0YWlsLW9wdGltaXplIHNpbmdsZS1lbGVtZW50XG4gICAgLy8gY2hpbGRyZW4gYW5kIGRpcmVjdGx5IGhhbmRsZSB0aGVtIGluIGFuIGlubmVyIGxvb3AgaW5zdGVhZCBvZlxuICAgIC8vIGNyZWF0aW5nIHNlcGFyYXRlIGZyYW1lcyBmb3IgdGhlbS5cbiAgfTtcblxuICBwb3BDdXJyZW50RGVidWdTdGFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICBjdXJyZW50RGVidWdTdGFja3MucG9wKCk7XG5cbiAgICBpZiAoY3VycmVudERlYnVnU3RhY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gV2UgYXJlIGV4aXRpbmcgdGhlIHNlcnZlciByZW5kZXJlci5cbiAgICAgIC8vIFJlc3RvcmUgdGhlIHByZXZpb3VzIChlLmcuIGNsaWVudCkgZ2xvYmFsIHN0YWNrIGltcGxlbWVudGF0aW9uLlxuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLmdldEN1cnJlbnRTdGFjayA9IHByZXZHZXRDdXJyZW50U3RhY2tJbXBsO1xuICAgICAgcHJldkdldEN1cnJlbnRTdGFja0ltcGwgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBnZXRDdXJyZW50U2VydmVyU3RhY2tJbXBsID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdXJyZW50RGVidWdTdGFja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBOb3RoaW5nIGlzIGN1cnJlbnRseSByZW5kZXJpbmcuXG4gICAgICByZXR1cm4gJyc7XG4gICAgfSAvLyBSZWFjdERPTVNlcnZlciBpcyByZWVudHJhbnQgc28gdGhlcmUgbWF5IGJlIG11bHRpcGxlIGNhbGxzIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAgLy8gVGFrZSB0aGUgZnJhbWVzIGZyb20gdGhlIGlubmVybW9zdCBjYWxsIHdoaWNoIGlzIHRoZSBsYXN0IGluIHRoZSBhcnJheS5cblxuXG4gICAgdmFyIGZyYW1lcyA9IGN1cnJlbnREZWJ1Z1N0YWNrc1tjdXJyZW50RGVidWdTdGFja3MubGVuZ3RoIC0gMV07XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEdvIHRocm91Z2ggZXZlcnkgZnJhbWUgaW4gdGhlIHN0YWNrIGZyb20gdGhlIGlubmVybW9zdCBvbmUuXG5cbiAgICBmb3IgKHZhciBpID0gZnJhbWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZnJhbWUgPSBmcmFtZXNbaV07IC8vIEV2ZXJ5IGZyYW1lIG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBkZWJ1ZyBlbGVtZW50IHN0YWNrIGVudHJ5IGFzc29jaWF0ZWQgd2l0aCBpdC5cbiAgICAgIC8vIFRoaXMgaXMgYmVjYXVzZSBzaW5nbGUtY2hpbGQgbmVzdGluZyBkb2Vzbid0IGNyZWF0ZSBtYXRlcmlhbGl6ZWQgZnJhbWVzLlxuICAgICAgLy8gSW5zdGVhZCBpdCB3b3VsZCBwdXNoIHRoZW0gdGhyb3VnaCBgcHVzaEVsZW1lbnRUb0RlYnVnU3RhY2soKWAuXG5cbiAgICAgIHZhciBkZWJ1Z0VsZW1lbnRTdGFjayA9IGZyYW1lLmRlYnVnRWxlbWVudFN0YWNrO1xuXG4gICAgICBmb3IgKHZhciBpaSA9IGRlYnVnRWxlbWVudFN0YWNrLmxlbmd0aCAtIDE7IGlpID49IDA7IGlpLS0pIHtcbiAgICAgICAgc3RhY2sgKz0gZGVzY3JpYmVTdGFja0ZyYW1lKGRlYnVnRWxlbWVudFN0YWNrW2lpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG52YXIgZGlkV2FybkRlZmF1bHRJbnB1dFZhbHVlID0gZmFsc2U7XG52YXIgZGlkV2FybkRlZmF1bHRDaGVja2VkID0gZmFsc2U7XG52YXIgZGlkV2FybkRlZmF1bHRTZWxlY3RWYWx1ZSA9IGZhbHNlO1xudmFyIGRpZFdhcm5EZWZhdWx0VGV4dGFyZWFWYWx1ZSA9IGZhbHNlO1xudmFyIGRpZFdhcm5JbnZhbGlkT3B0aW9uQ2hpbGRyZW4gPSBmYWxzZTtcbnZhciBkaWRXYXJuQWJvdXROb29wVXBkYXRlRm9yQ29tcG9uZW50ID0ge307XG52YXIgZGlkV2FybkFib3V0QmFkQ2xhc3MgPSB7fTtcbnZhciBkaWRXYXJuQWJvdXRNb2R1bGVQYXR0ZXJuQ29tcG9uZW50ID0ge307XG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZFdpbGxNb3VudCA9IHt9O1xudmFyIGRpZFdhcm5BYm91dFVuZGVmaW5lZERlcml2ZWRTdGF0ZSA9IHt9O1xudmFyIGRpZFdhcm5BYm91dFVuaW5pdGlhbGl6ZWRTdGF0ZSA9IHt9O1xudmFyIHZhbHVlUHJvcE5hbWVzID0gWyd2YWx1ZScsICdkZWZhdWx0VmFsdWUnXTtcbnZhciBuZXdsaW5lRWF0aW5nVGFncyA9IHtcbiAgbGlzdGluZzogdHJ1ZSxcbiAgcHJlOiB0cnVlLFxuICB0ZXh0YXJlYTogdHJ1ZVxufTsgLy8gV2UgYWNjZXB0IGFueSB0YWcgdG8gYmUgcmVuZGVyZWQgYnV0IHNpbmNlIHRoaXMgZ2V0cyBpbmplY3RlZCBpbnRvIGFyYml0cmFyeVxuLy8gSFRNTCwgd2Ugd2FudCB0byBtYWtlIHN1cmUgdGhhdCBpdCdzIGEgc2FmZSB0YWcuXG4vLyBodHRwOi8vd3d3LnczLm9yZy9UUi9SRUMteG1sLyNOVC1OYW1lXG5cbnZhciBWQUxJRF9UQUdfUkVHRVggPSAvXlthLXpBLVpdW2EtekEtWjpfXFwuXFwtXFxkXSokLzsgLy8gU2ltcGxpZmllZCBzdWJzZXRcblxudmFyIHZhbGlkYXRlZFRhZ0NhY2hlID0ge307XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGFuZ2Vyb3VzVGFnKHRhZykge1xuICBpZiAoIXZhbGlkYXRlZFRhZ0NhY2hlLmhhc093blByb3BlcnR5KHRhZykpIHtcbiAgICBpZiAoIVZBTElEX1RBR19SRUdFWC50ZXN0KHRhZykpIHtcbiAgICAgIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCB0YWc6IFwiICsgdGFnICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVkVGFnQ2FjaGVbdGFnXSA9IHRydWU7XG4gIH1cbn1cblxudmFyIHN0eWxlTmFtZUNhY2hlID0ge307XG5cbnZhciBwcm9jZXNzU3R5bGVOYW1lID0gZnVuY3Rpb24gKHN0eWxlTmFtZSkge1xuICBpZiAoc3R5bGVOYW1lQ2FjaGUuaGFzT3duUHJvcGVydHkoc3R5bGVOYW1lKSkge1xuICAgIHJldHVybiBzdHlsZU5hbWVDYWNoZVtzdHlsZU5hbWVdO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IGh5cGhlbmF0ZVN0eWxlTmFtZShzdHlsZU5hbWUpO1xuICBzdHlsZU5hbWVDYWNoZVtzdHlsZU5hbWVdID0gcmVzdWx0O1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlTWFya3VwRm9yU3R5bGVzKHN0eWxlcykge1xuICB2YXIgc2VyaWFsaXplZCA9ICcnO1xuICB2YXIgZGVsaW1pdGVyID0gJyc7XG5cbiAgZm9yICh2YXIgc3R5bGVOYW1lIGluIHN0eWxlcykge1xuICAgIGlmICghc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlTmFtZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBpc0N1c3RvbVByb3BlcnR5ID0gc3R5bGVOYW1lLmluZGV4T2YoJy0tJykgPT09IDA7XG4gICAgdmFyIHN0eWxlVmFsdWUgPSBzdHlsZXNbc3R5bGVOYW1lXTtcblxuICAgIHtcbiAgICAgIGlmICghaXNDdXN0b21Qcm9wZXJ0eSkge1xuICAgICAgICB3YXJuVmFsaWRTdHlsZSQxKHN0eWxlTmFtZSwgc3R5bGVWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0eWxlVmFsdWUgIT0gbnVsbCkge1xuICAgICAgc2VyaWFsaXplZCArPSBkZWxpbWl0ZXIgKyAoaXNDdXN0b21Qcm9wZXJ0eSA/IHN0eWxlTmFtZSA6IHByb2Nlc3NTdHlsZU5hbWUoc3R5bGVOYW1lKSkgKyAnOic7XG4gICAgICBzZXJpYWxpemVkICs9IGRhbmdlcm91c1N0eWxlVmFsdWUoc3R5bGVOYW1lLCBzdHlsZVZhbHVlLCBpc0N1c3RvbVByb3BlcnR5KTtcbiAgICAgIGRlbGltaXRlciA9ICc7JztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2VyaWFsaXplZCB8fCBudWxsO1xufVxuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIGdldENvbXBvbmVudE5hbWUoX2NvbnN0cnVjdG9yKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgJy4nICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuQWJvdXROb29wVXBkYXRlRm9yQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IoJyVzKC4uLik6IENhbiBvbmx5IHVwZGF0ZSBhIG1vdW50aW5nIGNvbXBvbmVudC4gJyArICdUaGlzIHVzdWFsbHkgbWVhbnMgeW91IGNhbGxlZCAlcygpIG91dHNpZGUgY29tcG9uZW50V2lsbE1vdW50KCkgb24gdGhlIHNlcnZlci4gJyArICdUaGlzIGlzIGEgbm8tb3AuXFxuXFxuUGxlYXNlIGNoZWNrIHRoZSBjb2RlIGZvciB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FybkFib3V0Tm9vcFVwZGF0ZUZvckNvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0JDEoQ29tcG9uZW50KSB7XG4gIHJldHVybiBDb21wb25lbnQucHJvdG90eXBlICYmIENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uQ2hpbGRyZW5Jbm5lck1hcmt1cChwcm9wcykge1xuICB2YXIgaW5uZXJIVE1MID0gcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw7XG5cbiAgaWYgKGlubmVySFRNTCAhPSBudWxsKSB7XG4gICAgaWYgKGlubmVySFRNTC5fX2h0bWwgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGlubmVySFRNTC5fX2h0bWw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBjb250ZW50ID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGVzY2FwZVRleHRGb3JCcm93c2VyKGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuVG9wTGV2ZWxDaGlsZHJlbihjaGlsZHJlbikge1xuICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHJldHVybiB0b0FycmF5KGNoaWxkcmVuKTtcbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY2hpbGRyZW47XG5cbiAgaWYgKGVsZW1lbnQudHlwZSAhPT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgIHJldHVybiBbZWxlbWVudF07XG4gIH1cblxuICB2YXIgZnJhZ21lbnRDaGlsZHJlbiA9IGVsZW1lbnQucHJvcHMuY2hpbGRyZW47XG5cbiAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChmcmFnbWVudENoaWxkcmVuKSkge1xuICAgIHJldHVybiB0b0FycmF5KGZyYWdtZW50Q2hpbGRyZW4pO1xuICB9XG5cbiAgdmFyIGZyYWdtZW50Q2hpbGRFbGVtZW50ID0gZnJhZ21lbnRDaGlsZHJlbjtcbiAgcmV0dXJuIFtmcmFnbWVudENoaWxkRWxlbWVudF07XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5PcHRpb25DaGlsZHJlbihjaGlsZHJlbikge1xuICBpZiAoY2hpbGRyZW4gPT09IHVuZGVmaW5lZCB8fCBjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciBjb250ZW50ID0gJyc7IC8vIEZsYXR0ZW4gY2hpbGRyZW4gYW5kIHdhcm4gaWYgdGhleSBhcmVuJ3Qgc3RyaW5ncyBvciBudW1iZXJzO1xuICAvLyBpbnZhbGlkIHR5cGVzIGFyZSBpZ25vcmVkLlxuXG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGVudCArPSBjaGlsZDtcblxuICAgIHtcbiAgICAgIGlmICghZGlkV2FybkludmFsaWRPcHRpb25DaGlsZHJlbiAmJiB0eXBlb2YgY2hpbGQgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBjaGlsZCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgZGlkV2FybkludmFsaWRPcHRpb25DaGlsZHJlbiA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJ09ubHkgc3RyaW5ncyBhbmQgbnVtYmVycyBhcmUgc3VwcG9ydGVkIGFzIDxvcHRpb24+IGNoaWxkcmVuLicpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjb250ZW50O1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkkMiA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgU1RZTEUgPSAnc3R5bGUnO1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG51bGwsXG4gIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZzogbnVsbCxcbiAgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nOiBudWxsXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVPcGVuVGFnTWFya3VwKHRhZ1ZlcmJhdGltLCB0YWdMb3dlcmNhc2UsIHByb3BzLCBuYW1lc3BhY2UsIG1ha2VTdGF0aWNNYXJrdXAsIGlzUm9vdEVsZW1lbnQpIHtcbiAgdmFyIHJldCA9ICc8JyArIHRhZ1ZlcmJhdGltO1xuICB2YXIgaXNDdXN0b21Db21wb25lbnQkMSA9IGlzQ3VzdG9tQ29tcG9uZW50KHRhZ0xvd2VyY2FzZSwgcHJvcHMpO1xuXG4gIGZvciAodmFyIHByb3BLZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5JDIuY2FsbChwcm9wcywgcHJvcEtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wS2V5XTtcblxuICAgIGlmIChwcm9wVmFsdWUgPT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHByb3BLZXkgPT09IFNUWUxFKSB7XG4gICAgICBwcm9wVmFsdWUgPSBjcmVhdGVNYXJrdXBGb3JTdHlsZXMocHJvcFZhbHVlKTtcbiAgICB9XG5cbiAgICB2YXIgbWFya3VwID0gbnVsbDtcblxuICAgIGlmIChpc0N1c3RvbUNvbXBvbmVudCQxKSB7XG4gICAgICBpZiAoIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BLZXkpKSB7XG4gICAgICAgIG1hcmt1cCA9IGNyZWF0ZU1hcmt1cEZvckN1c3RvbUF0dHJpYnV0ZShwcm9wS2V5LCBwcm9wVmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXJrdXAgPSBjcmVhdGVNYXJrdXBGb3JQcm9wZXJ0eShwcm9wS2V5LCBwcm9wVmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChtYXJrdXApIHtcbiAgICAgIHJldCArPSAnICcgKyBtYXJrdXA7XG4gICAgfVxuICB9IC8vIEZvciBzdGF0aWMgcGFnZXMsIG5vIG5lZWQgdG8gcHV0IFJlYWN0IElEIGFuZCBjaGVja3N1bS4gU2F2ZXMgbG90cyBvZlxuICAvLyBieXRlcy5cblxuXG4gIGlmIChtYWtlU3RhdGljTWFya3VwKSB7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGlmIChpc1Jvb3RFbGVtZW50KSB7XG4gICAgcmV0ICs9ICcgJyArIGNyZWF0ZU1hcmt1cEZvclJvb3QoKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUmVuZGVyUmVzdWx0KGNoaWxkLCB0eXBlKSB7XG4gIGlmIChjaGlsZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAge1xuICAgICAge1xuICAgICAgICB0aHJvdyBFcnJvciggKGdldENvbXBvbmVudE5hbWUodHlwZSkgfHwgJ0NvbXBvbmVudCcpICsgXCIoLi4uKTogTm90aGluZyB3YXMgcmV0dXJuZWQgZnJvbSByZW5kZXIuIFRoaXMgdXN1YWxseSBtZWFucyBhIHJldHVybiBzdGF0ZW1lbnQgaXMgbWlzc2luZy4gT3IsIHRvIHJlbmRlciBub3RoaW5nLCByZXR1cm4gbnVsbC5cIiApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlKGNoaWxkLCBjb250ZXh0LCB0aHJlYWRJRCkge1xuICB3aGlsZSAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgLy8gU2FmZSBiZWNhdXNlIHdlIGp1c3QgY2hlY2tlZCBpdCdzIGFuIGVsZW1lbnQuXG4gICAgdmFyIGVsZW1lbnQgPSBjaGlsZDtcbiAgICB2YXIgQ29tcG9uZW50ID0gZWxlbWVudC50eXBlO1xuXG4gICAge1xuICAgICAgcHVzaEVsZW1lbnRUb0RlYnVnU3RhY2soZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBDb21wb25lbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHByb2Nlc3NDaGlsZChlbGVtZW50LCBDb21wb25lbnQpO1xuICB9IC8vIEV4dHJhIGNsb3N1cmUgc28gcXVldWUgYW5kIHJlcGxhY2UgY2FuIGJlIGNhcHR1cmVkIHByb3Blcmx5XG5cblxuICBmdW5jdGlvbiBwcm9jZXNzQ2hpbGQoZWxlbWVudCwgQ29tcG9uZW50KSB7XG4gICAgdmFyIGlzQ2xhc3MgPSBzaG91bGRDb25zdHJ1Y3QkMShDb21wb25lbnQpO1xuICAgIHZhciBwdWJsaWNDb250ZXh0ID0gcHJvY2Vzc0NvbnRleHQoQ29tcG9uZW50LCBjb250ZXh0LCB0aHJlYWRJRCwgaXNDbGFzcyk7XG4gICAgdmFyIHF1ZXVlID0gW107XG4gICAgdmFyIHJlcGxhY2UgPSBmYWxzZTtcbiAgICB2YXIgdXBkYXRlciA9IHtcbiAgICAgIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgICAgICBpZiAocXVldWUgPT09IG51bGwpIHtcbiAgICAgICAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUpIHtcbiAgICAgICAgcmVwbGFjZSA9IHRydWU7XG4gICAgICAgIHF1ZXVlID0gW2NvbXBsZXRlU3RhdGVdO1xuICAgICAgfSxcbiAgICAgIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjdXJyZW50UGFydGlhbFN0YXRlKSB7XG4gICAgICAgIGlmIChxdWV1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXVlLnB1c2goY3VycmVudFBhcnRpYWxTdGF0ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgaW5zdDtcblxuICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICBpbnN0ID0gbmV3IENvbXBvbmVudChlbGVtZW50LnByb3BzLCBwdWJsaWNDb250ZXh0LCB1cGRhdGVyKTtcblxuICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoaW5zdC5zdGF0ZSA9PT0gbnVsbCB8fCBpbnN0LnN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQpIHx8ICdVbmtub3duJztcblxuICAgICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRVbmluaXRpYWxpemVkU3RhdGVbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgICAgICAgZXJyb3IoJ2Alc2AgdXNlcyBgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzYCBidXQgaXRzIGluaXRpYWwgc3RhdGUgaXMgJyArICclcy4gVGhpcyBpcyBub3QgcmVjb21tZW5kZWQuIEluc3RlYWQsIGRlZmluZSB0aGUgaW5pdGlhbCBzdGF0ZSBieSAnICsgJ2Fzc2lnbmluZyBhbiBvYmplY3QgdG8gYHRoaXMuc3RhdGVgIGluIHRoZSBjb25zdHJ1Y3RvciBvZiBgJXNgLiAnICsgJ1RoaXMgZW5zdXJlcyB0aGF0IGBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNgIGFyZ3VtZW50cyBoYXZlIGEgY29uc2lzdGVudCBzaGFwZS4nLCBjb21wb25lbnROYW1lLCBpbnN0LnN0YXRlID09PSBudWxsID8gJ251bGwnIDogJ3VuZGVmaW5lZCcsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgICAgICAgICAgIGRpZFdhcm5BYm91dFVuaW5pdGlhbGl6ZWRTdGF0ZVtjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhcnRpYWxTdGF0ZSA9IENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMuY2FsbChudWxsLCBlbGVtZW50LnByb3BzLCBpbnN0LnN0YXRlKTtcblxuICAgICAgICB7XG4gICAgICAgICAgaWYgKHBhcnRpYWxTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgX2NvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nO1xuXG4gICAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dFVuZGVmaW5lZERlcml2ZWRTdGF0ZVtfY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgICAgICAgZXJyb3IoJyVzLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcygpOiBBIHZhbGlkIHN0YXRlIG9iamVjdCAob3IgbnVsbCkgbXVzdCBiZSByZXR1cm5lZC4gJyArICdZb3UgaGF2ZSByZXR1cm5lZCB1bmRlZmluZWQuJywgX2NvbXBvbmVudE5hbWUpO1xuXG4gICAgICAgICAgICAgIGRpZFdhcm5BYm91dFVuZGVmaW5lZERlcml2ZWRTdGF0ZVtfY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJ0aWFsU3RhdGUgIT0gbnVsbCkge1xuICAgICAgICAgIGluc3Quc3RhdGUgPSBfYXNzaWduKHt9LCBpbnN0LnN0YXRlLCBwYXJ0aWFsU3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHtcbiAgICAgICAgaWYgKENvbXBvbmVudC5wcm90b3R5cGUgJiYgdHlwZW9mIENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFyIF9jb21wb25lbnROYW1lMiA9IGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB8fCAnVW5rbm93bic7XG5cbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dEJhZENsYXNzW19jb21wb25lbnROYW1lMl0pIHtcbiAgICAgICAgICAgIGVycm9yKFwiVGhlIDwlcyAvPiBjb21wb25lbnQgYXBwZWFycyB0byBoYXZlIGEgcmVuZGVyIG1ldGhvZCwgYnV0IGRvZXNuJ3QgZXh0ZW5kIFJlYWN0LkNvbXBvbmVudC4gXCIgKyAnVGhpcyBpcyBsaWtlbHkgdG8gY2F1c2UgZXJyb3JzLiBDaGFuZ2UgJXMgdG8gZXh0ZW5kIFJlYWN0LkNvbXBvbmVudCBpbnN0ZWFkLicsIF9jb21wb25lbnROYW1lMiwgX2NvbXBvbmVudE5hbWUyKTtcblxuICAgICAgICAgICAgZGlkV2FybkFib3V0QmFkQ2xhc3NbX2NvbXBvbmVudE5hbWUyXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBjb21wb25lbnRJZGVudGl0eSA9IHt9O1xuICAgICAgcHJlcGFyZVRvVXNlSG9va3MoY29tcG9uZW50SWRlbnRpdHkpO1xuICAgICAgaW5zdCA9IENvbXBvbmVudChlbGVtZW50LnByb3BzLCBwdWJsaWNDb250ZXh0LCB1cGRhdGVyKTtcbiAgICAgIGluc3QgPSBmaW5pc2hIb29rcyhDb21wb25lbnQsIGVsZW1lbnQucHJvcHMsIGluc3QsIHB1YmxpY0NvbnRleHQpO1xuXG4gICAgICB7XG4gICAgICAgIC8vIFN1cHBvcnQgZm9yIG1vZHVsZSBjb21wb25lbnRzIGlzIGRlcHJlY2F0ZWQgYW5kIGlzIHJlbW92ZWQgYmVoaW5kIGEgZmxhZy5cbiAgICAgICAgLy8gV2hldGhlciBvciBub3QgaXQgd291bGQgY3Jhc2ggbGF0ZXIsIHdlIHdhbnQgdG8gc2hvdyBhIGdvb2QgbWVzc2FnZSBpbiBERVYgZmlyc3QuXG4gICAgICAgIGlmIChpbnN0ICE9IG51bGwgJiYgaW5zdC5yZW5kZXIgIT0gbnVsbCkge1xuICAgICAgICAgIHZhciBfY29tcG9uZW50TmFtZTMgPSBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nO1xuXG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNb2R1bGVQYXR0ZXJuQ29tcG9uZW50W19jb21wb25lbnROYW1lM10pIHtcbiAgICAgICAgICAgIGVycm9yKCdUaGUgPCVzIC8+IGNvbXBvbmVudCBhcHBlYXJzIHRvIGJlIGEgZnVuY3Rpb24gY29tcG9uZW50IHRoYXQgcmV0dXJucyBhIGNsYXNzIGluc3RhbmNlLiAnICsgJ0NoYW5nZSAlcyB0byBhIGNsYXNzIHRoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgaW5zdGVhZC4gJyArIFwiSWYgeW91IGNhbid0IHVzZSBhIGNsYXNzIHRyeSBhc3NpZ25pbmcgdGhlIHByb3RvdHlwZSBvbiB0aGUgZnVuY3Rpb24gYXMgYSB3b3JrYXJvdW5kLiBcIiArIFwiYCVzLnByb3RvdHlwZSA9IFJlYWN0LkNvbXBvbmVudC5wcm90b3R5cGVgLiBEb24ndCB1c2UgYW4gYXJyb3cgZnVuY3Rpb24gc2luY2UgaXQgXCIgKyAnY2Fubm90IGJlIGNhbGxlZCB3aXRoIGBuZXdgIGJ5IFJlYWN0LicsIF9jb21wb25lbnROYW1lMywgX2NvbXBvbmVudE5hbWUzLCBfY29tcG9uZW50TmFtZTMpO1xuXG4gICAgICAgICAgICBkaWRXYXJuQWJvdXRNb2R1bGVQYXR0ZXJuQ29tcG9uZW50W19jb21wb25lbnROYW1lM10gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBJZiB0aGUgZmxhZyBpcyBvbiwgZXZlcnl0aGluZyBpcyBhc3N1bWVkIHRvIGJlIGEgZnVuY3Rpb24gY29tcG9uZW50LlxuICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBhbHNvIGRvIHRoZSB1bmZvcnR1bmF0ZSBkeW5hbWljIGNoZWNrcy5cblxuXG4gICAgICBpZiAoIGluc3QgPT0gbnVsbCB8fCBpbnN0LnJlbmRlciA9PSBudWxsKSB7XG4gICAgICAgIGNoaWxkID0gaW5zdDtcbiAgICAgICAgdmFsaWRhdGVSZW5kZXJSZXN1bHQoY2hpbGQsIENvbXBvbmVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnN0LnByb3BzID0gZWxlbWVudC5wcm9wcztcbiAgICBpbnN0LmNvbnRleHQgPSBwdWJsaWNDb250ZXh0O1xuICAgIGluc3QudXBkYXRlciA9IHVwZGF0ZXI7XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IGluc3Quc3RhdGU7XG5cbiAgICBpZiAoaW5pdGlhbFN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGluc3Quc3RhdGUgPSBpbml0aWFsU3RhdGUgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaW5zdC5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBpbnN0LmNvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBpbnN0LmNvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB7XG4gICAgICAgICAgaWYgKCBpbnN0LmNvbXBvbmVudFdpbGxNb3VudC5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB2YXIgX2NvbXBvbmVudE5hbWU0ID0gZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQpIHx8ICdVbmtub3duJztcblxuICAgICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkV2lsbE1vdW50W19jb21wb25lbnROYW1lNF0pIHtcbiAgICAgICAgICAgICAgd2FybiggLy8ga2VlcCB0aGlzIHdhcm5pbmcgaW4gc3luYyB3aXRoIFJlYWN0U3RyaWN0TW9kZVdhcm5pbmcuanNcbiAgICAgICAgICAgICAgJ2NvbXBvbmVudFdpbGxNb3VudCBoYXMgYmVlbiByZW5hbWVkLCBhbmQgaXMgbm90IHJlY29tbWVuZGVkIGZvciB1c2UuICcgKyAnU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay91bnNhZmUtY29tcG9uZW50LWxpZmVjeWNsZXMgZm9yIGRldGFpbHMuXFxuXFxuJyArICcqIE1vdmUgY29kZSBmcm9tIGNvbXBvbmVudFdpbGxNb3VudCB0byBjb21wb25lbnREaWRNb3VudCAocHJlZmVycmVkIGluIG1vc3QgY2FzZXMpICcgKyAnb3IgdGhlIGNvbnN0cnVjdG9yLlxcbicgKyAnXFxuUGxlYXNlIHVwZGF0ZSB0aGUgZm9sbG93aW5nIGNvbXBvbmVudHM6ICVzJywgX2NvbXBvbmVudE5hbWU0KTtcblxuICAgICAgICAgICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkV2lsbE1vdW50W19jb21wb25lbnROYW1lNF0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBJbiBvcmRlciB0byBzdXBwb3J0IHJlYWN0LWxpZmVjeWNsZXMtY29tcGF0IHBvbHlmaWxsZWQgY29tcG9uZW50cyxcbiAgICAgICAgLy8gVW5zYWZlIGxpZmVjeWNsZXMgc2hvdWxkIG5vdCBiZSBpbnZva2VkIGZvciBhbnkgY29tcG9uZW50IHdpdGggdGhlIG5ldyBnRFNGUC5cblxuXG4gICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGluc3QuY29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpbnN0LlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gSW4gb3JkZXIgdG8gc3VwcG9ydCByZWFjdC1saWZlY3ljbGVzLWNvbXBhdCBwb2x5ZmlsbGVkIGNvbXBvbmVudHMsXG4gICAgICAgIC8vIFVuc2FmZSBsaWZlY3ljbGVzIHNob3VsZCBub3QgYmUgaW52b2tlZCBmb3IgYW55IGNvbXBvbmVudCB3aXRoIHRoZSBuZXcgZ0RTRlAuXG4gICAgICAgIGluc3QuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHZhciBvbGRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICB2YXIgb2xkUmVwbGFjZSA9IHJlcGxhY2U7XG4gICAgICAgIHF1ZXVlID0gbnVsbDtcbiAgICAgICAgcmVwbGFjZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChvbGRSZXBsYWNlICYmIG9sZFF1ZXVlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGluc3Quc3RhdGUgPSBvbGRRdWV1ZVswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbmV4dFN0YXRlID0gb2xkUmVwbGFjZSA/IG9sZFF1ZXVlWzBdIDogaW5zdC5zdGF0ZTtcbiAgICAgICAgICB2YXIgZG9udE11dGF0ZSA9IHRydWU7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gb2xkUmVwbGFjZSA/IDEgOiAwOyBpIDwgb2xkUXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0aWFsID0gb2xkUXVldWVbaV07XG5cbiAgICAgICAgICAgIHZhciBfcGFydGlhbFN0YXRlID0gdHlwZW9mIHBhcnRpYWwgPT09ICdmdW5jdGlvbicgPyBwYXJ0aWFsLmNhbGwoaW5zdCwgbmV4dFN0YXRlLCBlbGVtZW50LnByb3BzLCBwdWJsaWNDb250ZXh0KSA6IHBhcnRpYWw7XG5cbiAgICAgICAgICAgIGlmIChfcGFydGlhbFN0YXRlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgaWYgKGRvbnRNdXRhdGUpIHtcbiAgICAgICAgICAgICAgICBkb250TXV0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbmV4dFN0YXRlID0gX2Fzc2lnbih7fSwgbmV4dFN0YXRlLCBfcGFydGlhbFN0YXRlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfYXNzaWduKG5leHRTdGF0ZSwgX3BhcnRpYWxTdGF0ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnN0LnN0YXRlID0gbmV4dFN0YXRlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hpbGQgPSBpbnN0LnJlbmRlcigpO1xuXG4gICAge1xuICAgICAgaWYgKGNoaWxkID09PSB1bmRlZmluZWQgJiYgaW5zdC5yZW5kZXIuX2lzTW9ja0Z1bmN0aW9uKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgcHJvYmFibHkgYmFkIHByYWN0aWNlLiBDb25zaWRlciB3YXJuaW5nIGhlcmUgYW5kXG4gICAgICAgIC8vIGRlcHJlY2F0aW5nIHRoaXMgY29udmVuaWVuY2UuXG4gICAgICAgIGNoaWxkID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZVJlbmRlclJlc3VsdChjaGlsZCwgQ29tcG9uZW50KTtcbiAgICB2YXIgY2hpbGRDb250ZXh0O1xuXG4gICAge1xuICAgICAgaWYgKHR5cGVvZiBpbnN0LmdldENoaWxkQ29udGV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgX2NoaWxkQ29udGV4dFR5cGVzID0gQ29tcG9uZW50LmNoaWxkQ29udGV4dFR5cGVzO1xuXG4gICAgICAgIGlmICh0eXBlb2YgX2NoaWxkQ29udGV4dFR5cGVzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGluc3QuZ2V0Q2hpbGRDb250ZXh0KCk7XG5cbiAgICAgICAgICBmb3IgKHZhciBjb250ZXh0S2V5IGluIGNoaWxkQ29udGV4dCkge1xuICAgICAgICAgICAgaWYgKCEoY29udGV4dEtleSBpbiBfY2hpbGRDb250ZXh0VHlwZXMpKSB7XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvciggKGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB8fCAnVW5rbm93bicpICsgXCIuZ2V0Q2hpbGRDb250ZXh0KCk6IGtleSBcXFwiXCIgKyBjb250ZXh0S2V5ICsgXCJcXFwiIGlzIG5vdCBkZWZpbmVkIGluIGNoaWxkQ29udGV4dFR5cGVzLlwiICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXJyb3IoJyVzLmdldENoaWxkQ29udGV4dCgpOiBjaGlsZENvbnRleHRUeXBlcyBtdXN0IGJlIGRlZmluZWQgaW4gb3JkZXIgdG8gJyArICd1c2UgZ2V0Q2hpbGRDb250ZXh0KCkuJywgZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQpIHx8ICdVbmtub3duJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZENvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IF9hc3NpZ24oe30sIGNvbnRleHQsIGNoaWxkQ29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjaGlsZDogY2hpbGQsXG4gICAgY29udGV4dDogY29udGV4dFxuICB9O1xufVxuXG52YXIgUmVhY3RET01TZXJ2ZXJSZW5kZXJlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8vIFRPRE86IHR5cGUgdGhpcyBtb3JlIHN0cmljdGx5OlxuICAvLyBERVYtb25seVxuICBmdW5jdGlvbiBSZWFjdERPTVNlcnZlclJlbmRlcmVyKGNoaWxkcmVuLCBtYWtlU3RhdGljTWFya3VwLCBvcHRpb25zKSB7XG4gICAgdmFyIGZsYXRDaGlsZHJlbiA9IGZsYXR0ZW5Ub3BMZXZlbENoaWxkcmVuKGNoaWxkcmVuKTtcbiAgICB2YXIgdG9wRnJhbWUgPSB7XG4gICAgICB0eXBlOiBudWxsLFxuICAgICAgLy8gQXNzdW1lIGFsbCB0cmVlcyBzdGFydCBpbiB0aGUgSFRNTCBuYW1lc3BhY2UgKG5vdCB0b3RhbGx5IHRydWUsIGJ1dFxuICAgICAgLy8gdGhpcyBpcyB3aGF0IHdlIGRpZCBoaXN0b3JpY2FsbHkpXG4gICAgICBkb21OYW1lc3BhY2U6IE5hbWVzcGFjZXMuaHRtbCxcbiAgICAgIGNoaWxkcmVuOiBmbGF0Q2hpbGRyZW4sXG4gICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgY29udGV4dDogZW1wdHlPYmplY3QsXG4gICAgICBmb290ZXI6ICcnXG4gICAgfTtcblxuICAgIHtcbiAgICAgIHRvcEZyYW1lLmRlYnVnRWxlbWVudFN0YWNrID0gW107XG4gICAgfVxuXG4gICAgdGhpcy50aHJlYWRJRCA9IGFsbG9jVGhyZWFkSUQoKTtcbiAgICB0aGlzLnN0YWNrID0gW3RvcEZyYW1lXTtcbiAgICB0aGlzLmV4aGF1c3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudFNlbGVjdFZhbHVlID0gbnVsbDtcbiAgICB0aGlzLnByZXZpb3VzV2FzVGV4dE5vZGUgPSBmYWxzZTtcbiAgICB0aGlzLm1ha2VTdGF0aWNNYXJrdXAgPSBtYWtlU3RhdGljTWFya3VwO1xuICAgIHRoaXMuc3VzcGVuc2VEZXB0aCA9IDA7IC8vIENvbnRleHQgKG5ldyBBUEkpXG5cbiAgICB0aGlzLmNvbnRleHRJbmRleCA9IC0xO1xuICAgIHRoaXMuY29udGV4dFN0YWNrID0gW107XG4gICAgdGhpcy5jb250ZXh0VmFsdWVTdGFjayA9IFtdOyAvLyB1c2VPcGFxdWVJZGVudGlmaWVyIElEXG5cbiAgICB0aGlzLnVuaXF1ZUlEID0gMDtcbiAgICB0aGlzLmlkZW50aWZpZXJQcmVmaXggPSBvcHRpb25zICYmIG9wdGlvbnMuaWRlbnRpZmllclByZWZpeCB8fCAnJztcblxuICAgIHtcbiAgICAgIHRoaXMuY29udGV4dFByb3ZpZGVyU3RhY2sgPSBbXTtcbiAgICB9XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUmVhY3RET01TZXJ2ZXJSZW5kZXJlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmICghdGhpcy5leGhhdXN0ZWQpIHtcbiAgICAgIHRoaXMuZXhoYXVzdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xlYXJQcm92aWRlcnMoKTtcbiAgICAgIGZyZWVUaHJlYWRJRCh0aGlzLnRocmVhZElEKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIE5vdGU6IFdlIHVzZSBqdXN0IHR3byBzdGFja3MgcmVnYXJkbGVzcyBvZiBob3cgbWFueSBjb250ZXh0IHByb3ZpZGVycyB5b3UgaGF2ZS5cbiAgICogUHJvdmlkZXJzIGFyZSBhbHdheXMgcG9wcGVkIGluIHRoZSByZXZlcnNlIG9yZGVyIHRvIGhvdyB0aGV5IHdlcmUgcHVzaGVkXG4gICAqIHNvIHdlIGFsd2F5cyBrbm93IG9uIHRoZSB3YXkgZG93biB3aGljaCBwcm92aWRlciB5b3UnbGwgZW5jb3VudGVyIG5leHQgb24gdGhlIHdheSB1cC5cbiAgICogT24gdGhlIHdheSBkb3duLCB3ZSBwdXNoIHRoZSBjdXJyZW50IHByb3ZpZGVyLCBhbmQgaXRzIGNvbnRleHQgdmFsdWUgKmJlZm9yZSpcbiAgICogd2UgbXV0YXRlZCBpdCwgb250byB0aGUgc3RhY2tzLiBUaGVyZWZvcmUsIG9uIHRoZSB3YXkgdXAsIHdlIGFsd2F5cyBrbm93IHdoaWNoXG4gICAqIHByb3ZpZGVyIG5lZWRzIHRvIGJlIFwicmVzdG9yZWRcIiB0byB3aGljaCB2YWx1ZS5cbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMTI5ODUjaXNzdWVjb21tZW50LTM5NjMwMTI0OFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wdXNoUHJvdmlkZXIgPSBmdW5jdGlvbiBwdXNoUHJvdmlkZXIocHJvdmlkZXIpIHtcbiAgICB2YXIgaW5kZXggPSArK3RoaXMuY29udGV4dEluZGV4O1xuICAgIHZhciBjb250ZXh0ID0gcHJvdmlkZXIudHlwZS5fY29udGV4dDtcbiAgICB2YXIgdGhyZWFkSUQgPSB0aGlzLnRocmVhZElEO1xuICAgIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhjb250ZXh0LCB0aHJlYWRJRCk7XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBjb250ZXh0W3RocmVhZElEXTsgLy8gUmVtZW1iZXIgd2hpY2ggdmFsdWUgdG8gcmVzdG9yZSB0aGlzIGNvbnRleHQgdG8gb24gb3VyIHdheSB1cC5cblxuICAgIHRoaXMuY29udGV4dFN0YWNrW2luZGV4XSA9IGNvbnRleHQ7XG4gICAgdGhpcy5jb250ZXh0VmFsdWVTdGFja1tpbmRleF0gPSBwcmV2aW91c1ZhbHVlO1xuXG4gICAge1xuICAgICAgLy8gT25seSB1c2VkIGZvciBwdXNoL3BvcCBtaXNtYXRjaCB3YXJuaW5ncy5cbiAgICAgIHRoaXMuY29udGV4dFByb3ZpZGVyU3RhY2tbaW5kZXhdID0gcHJvdmlkZXI7XG4gICAgfSAvLyBNdXRhdGUgdGhlIGN1cnJlbnQgdmFsdWUuXG5cblxuICAgIGNvbnRleHRbdGhyZWFkSURdID0gcHJvdmlkZXIucHJvcHMudmFsdWU7XG4gIH07XG5cbiAgX3Byb3RvLnBvcFByb3ZpZGVyID0gZnVuY3Rpb24gcG9wUHJvdmlkZXIocHJvdmlkZXIpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmNvbnRleHRJbmRleDtcblxuICAgIHtcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgcHJvdmlkZXIgIT09IHRoaXMuY29udGV4dFByb3ZpZGVyU3RhY2tbaW5kZXhdKSB7XG4gICAgICAgIGVycm9yKCdVbmV4cGVjdGVkIHBvcC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dFN0YWNrW2luZGV4XTtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHRoaXMuY29udGV4dFZhbHVlU3RhY2tbaW5kZXhdOyAvLyBcIkhpZGVcIiB0aGVzZSBudWxsIGFzc2lnbm1lbnRzIGZyb20gRmxvdyBieSB1c2luZyBgYW55YFxuICAgIC8vIGJlY2F1c2UgY29uY2VwdHVhbGx5IHRoZXkgYXJlIGRlbGV0aW9ucy0tYXMgbG9uZyBhcyB3ZVxuICAgIC8vIHByb21pc2UgdG8gbmV2ZXIgYWNjZXNzIHZhbHVlcyBiZXlvbmQgYHRoaXMuY29udGV4dEluZGV4YC5cblxuICAgIHRoaXMuY29udGV4dFN0YWNrW2luZGV4XSA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0VmFsdWVTdGFja1tpbmRleF0gPSBudWxsO1xuXG4gICAge1xuICAgICAgdGhpcy5jb250ZXh0UHJvdmlkZXJTdGFja1tpbmRleF0gPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dEluZGV4LS07IC8vIFJlc3RvcmUgdG8gdGhlIHByZXZpb3VzIHZhbHVlIHdlIHN0b3JlZCBhcyB3ZSB3ZXJlIHdhbGtpbmcgZG93bi5cbiAgICAvLyBXZSd2ZSBhbHJlYWR5IHZlcmlmaWVkIHRoYXQgdGhpcyBjb250ZXh0IGhhcyBiZWVuIGV4cGFuZGVkIHRvIGFjY29tbW9kYXRlXG4gICAgLy8gdGhpcyB0aHJlYWQgaWQsIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gaXQgYWdhaW4uXG5cbiAgICBjb250ZXh0W3RoaXMudGhyZWFkSURdID0gcHJldmlvdXNWYWx1ZTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJQcm92aWRlcnMgPSBmdW5jdGlvbiBjbGVhclByb3ZpZGVycygpIHtcbiAgICAvLyBSZXN0b3JlIGFueSByZW1haW5pbmcgcHJvdmlkZXJzIG9uIHRoZSBzdGFjayB0byBwcmV2aW91cyB2YWx1ZXNcbiAgICBmb3IgKHZhciBpbmRleCA9IHRoaXMuY29udGV4dEluZGV4OyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dFN0YWNrW2luZGV4XTtcbiAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gdGhpcy5jb250ZXh0VmFsdWVTdGFja1tpbmRleF07XG4gICAgICBjb250ZXh0W3RoaXMudGhyZWFkSURdID0gcHJldmlvdXNWYWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlYWQgPSBmdW5jdGlvbiByZWFkKGJ5dGVzKSB7XG4gICAgaWYgKHRoaXMuZXhoYXVzdGVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgcHJldlBhcnRpYWxSZW5kZXJlciA9IGN1cnJlbnRQYXJ0aWFsUmVuZGVyZXI7XG4gICAgc2V0Q3VycmVudFBhcnRpYWxSZW5kZXJlcih0aGlzKTtcbiAgICB2YXIgcHJldkRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudDtcbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IERpc3BhdGNoZXI7XG5cbiAgICB0cnkge1xuICAgICAgLy8gTWFya3VwIGdlbmVyYXRlZCB3aXRoaW4gPFN1c3BlbnNlPiBlbmRzIHVwIGJ1ZmZlcmVkIHVudGlsIHdlIGtub3dcbiAgICAgIC8vIG5vdGhpbmcgaW4gdGhhdCBib3VuZGFyeSBzdXNwZW5kZWRcbiAgICAgIHZhciBvdXQgPSBbJyddO1xuICAgICAgdmFyIHN1c3BlbmRlZCA9IGZhbHNlO1xuXG4gICAgICB3aGlsZSAob3V0WzBdLmxlbmd0aCA8IGJ5dGVzKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZXhoYXVzdGVkID0gdHJ1ZTtcbiAgICAgICAgICBmcmVlVGhyZWFkSUQodGhpcy50aHJlYWRJRCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZnJhbWUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKHN1c3BlbmRlZCB8fCBmcmFtZS5jaGlsZEluZGV4ID49IGZyYW1lLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBmb290ZXIgPSBmcmFtZS5mb290ZXI7XG5cbiAgICAgICAgICBpZiAoZm9vdGVyICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1dhc1RleHROb2RlID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zdGFjay5wb3AoKTtcblxuICAgICAgICAgIGlmIChmcmFtZS50eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0VmFsdWUgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZnJhbWUudHlwZSAhPSBudWxsICYmIGZyYW1lLnR5cGUudHlwZSAhPSBudWxsICYmIGZyYW1lLnR5cGUudHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSkge1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gZnJhbWUudHlwZTtcbiAgICAgICAgICAgIHRoaXMucG9wUHJvdmlkZXIocHJvdmlkZXIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZnJhbWUudHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSkge1xuICAgICAgICAgICAgdGhpcy5zdXNwZW5zZURlcHRoLS07XG4gICAgICAgICAgICB2YXIgYnVmZmVyZWQgPSBvdXQucG9wKCk7XG5cbiAgICAgICAgICAgIGlmIChzdXNwZW5kZWQpIHtcbiAgICAgICAgICAgICAgc3VzcGVuZGVkID0gZmFsc2U7IC8vIElmIHJlbmRlcmluZyB3YXMgc3VzcGVuZGVkIGF0IHRoaXMgYm91bmRhcnksIHJlbmRlciB0aGUgZmFsbGJhY2tGcmFtZVxuXG4gICAgICAgICAgICAgIHZhciBmYWxsYmFja0ZyYW1lID0gZnJhbWUuZmFsbGJhY2tGcmFtZTtcblxuICAgICAgICAgICAgICBpZiAoIWZhbGxiYWNrRnJhbWUpIHtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcih0cnVlID8gXCJSZWFjdERPTVNlcnZlciBkaWQgbm90IGZpbmQgYW4gaW50ZXJuYWwgZmFsbGJhY2sgZnJhbWUgZm9yIFN1c3BlbnNlLiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS5cIiA6IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMzAzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKGZhbGxiYWNrRnJhbWUpO1xuICAgICAgICAgICAgICBvdXRbdGhpcy5zdXNwZW5zZURlcHRoXSArPSAnPCEtLSQhLS0+JzsgLy8gU2tpcCBmbHVzaGluZyBvdXRwdXQgc2luY2Ugd2UncmUgc3dpdGNoaW5nIHRvIHRoZSBmYWxsYmFja1xuXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb3V0W3RoaXMuc3VzcGVuc2VEZXB0aF0gKz0gYnVmZmVyZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBGbHVzaCBvdXRwdXRcblxuXG4gICAgICAgICAgb3V0W3RoaXMuc3VzcGVuc2VEZXB0aF0gKz0gZm9vdGVyO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoaWxkID0gZnJhbWUuY2hpbGRyZW5bZnJhbWUuY2hpbGRJbmRleCsrXTtcbiAgICAgICAgdmFyIG91dEJ1ZmZlciA9ICcnO1xuXG4gICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgcHVzaEN1cnJlbnREZWJ1Z1N0YWNrKHRoaXMuc3RhY2spOyAvLyBXZSdyZSBzdGFydGluZyB3b3JrIG9uIHRoaXMgZnJhbWUsIHNvIHJlc2V0IGl0cyBpbm5lciBzdGFjay5cblxuICAgICAgICAgIGZyYW1lLmRlYnVnRWxlbWVudFN0YWNrLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIG91dEJ1ZmZlciArPSB0aGlzLnJlbmRlcihjaGlsZCwgZnJhbWUuY29udGV4dCwgZnJhbWUuZG9tTmFtZXNwYWNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgaWYgKGVyciAhPSBudWxsICYmIHR5cGVvZiBlcnIudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGVuYWJsZVN1c3BlbnNlU2VydmVyUmVuZGVyZXIpIHtcbiAgICAgICAgICAgICAgaWYgKCEodGhpcy5zdXNwZW5zZURlcHRoID4gMCkpIHtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcih0cnVlID8gXCJBIFJlYWN0IGNvbXBvbmVudCBzdXNwZW5kZWQgd2hpbGUgcmVuZGVyaW5nLCBidXQgbm8gZmFsbGJhY2sgVUkgd2FzIHNwZWNpZmllZC5cXG5cXG5BZGQgYSA8U3VzcGVuc2UgZmFsbGJhY2s9Li4uPiBjb21wb25lbnQgaGlnaGVyIGluIHRoZSB0cmVlIHRvIHByb3ZpZGUgYSBsb2FkaW5nIGluZGljYXRvciBvciBwbGFjZWhvbGRlciB0byBkaXNwbGF5LlwiIDogZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgzNDIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzdXNwZW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKCFmYWxzZSkge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKHRydWUgPyBcIlJlYWN0RE9NU2VydmVyIGRvZXMgbm90IHlldCBzdXBwb3J0IFN1c3BlbnNlLlwiIDogZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgyOTQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgcG9wQ3VycmVudERlYnVnU3RhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3V0Lmxlbmd0aCA8PSB0aGlzLnN1c3BlbnNlRGVwdGgpIHtcbiAgICAgICAgICBvdXQucHVzaCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBvdXRbdGhpcy5zdXNwZW5zZURlcHRoXSArPSBvdXRCdWZmZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXRbMF07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gcHJldkRpc3BhdGNoZXI7XG4gICAgICBzZXRDdXJyZW50UGFydGlhbFJlbmRlcmVyKHByZXZQYXJ0aWFsUmVuZGVyZXIpO1xuICAgICAgcmVzZXRIb29rc1N0YXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoY2hpbGQsIGNvbnRleHQsIHBhcmVudE5hbWVzcGFjZSkge1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhciB0ZXh0ID0gJycgKyBjaGlsZDtcblxuICAgICAgaWYgKHRleHQgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubWFrZVN0YXRpY01hcmt1cCkge1xuICAgICAgICByZXR1cm4gZXNjYXBlVGV4dEZvckJyb3dzZXIodGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByZXZpb3VzV2FzVGV4dE5vZGUpIHtcbiAgICAgICAgcmV0dXJuICc8IS0tIC0tPicgKyBlc2NhcGVUZXh0Rm9yQnJvd3Nlcih0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcmV2aW91c1dhc1RleHROb2RlID0gdHJ1ZTtcbiAgICAgIHJldHVybiBlc2NhcGVUZXh0Rm9yQnJvd3Nlcih0ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG5leHRDaGlsZDtcblxuICAgICAgdmFyIF9yZXNvbHZlID0gcmVzb2x2ZShjaGlsZCwgY29udGV4dCwgdGhpcy50aHJlYWRJRCk7XG5cbiAgICAgIG5leHRDaGlsZCA9IF9yZXNvbHZlLmNoaWxkO1xuICAgICAgY29udGV4dCA9IF9yZXNvbHZlLmNvbnRleHQ7XG5cbiAgICAgIGlmIChuZXh0Q2hpbGQgPT09IG51bGwgfHwgbmV4dENoaWxkID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9IGVsc2UgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChuZXh0Q2hpbGQpKSB7XG4gICAgICAgIGlmIChuZXh0Q2hpbGQgIT0gbnVsbCAmJiBuZXh0Q2hpbGQuJCR0eXBlb2YgIT0gbnVsbCkge1xuICAgICAgICAgIC8vIENhdGNoIHVuZXhwZWN0ZWQgc3BlY2lhbCB0eXBlcyBlYXJseS5cbiAgICAgICAgICB2YXIgJCR0eXBlb2YgPSBuZXh0Q2hpbGQuJCR0eXBlb2Y7XG5cbiAgICAgICAgICBpZiAoISgkJHR5cGVvZiAhPT0gUkVBQ1RfUE9SVEFMX1RZUEUpKSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRocm93IEVycm9yKCBcIlBvcnRhbHMgYXJlIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkIGJ5IHRoZSBzZXJ2ZXIgcmVuZGVyZXIuIFJlbmRlciB0aGVtIGNvbmRpdGlvbmFsbHkgc28gdGhhdCB0aGV5IG9ubHkgYXBwZWFyIG9uIHRoZSBjbGllbnQgcmVuZGVyLlwiICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBDYXRjaC1hbGwgdG8gcHJldmVudCBhbiBpbmZpbml0ZSBsb29wIGlmIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoKSBzdXBwb3J0cyBzb21lIG5ldyB0eXBlLlxuXG5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRocm93IEVycm9yKCBcIlVua25vd24gZWxlbWVudC1saWtlIG9iamVjdCB0eXBlOiBcIiArICQkdHlwZW9mLnRvU3RyaW5nKCkgKyBcIi4gVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLlwiICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5leHRDaGlsZHJlbiA9IHRvQXJyYXkobmV4dENoaWxkKTtcbiAgICAgICAgdmFyIGZyYW1lID0ge1xuICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgY2hpbGRyZW46IG5leHRDaGlsZHJlbixcbiAgICAgICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgZm9vdGVyOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHtcbiAgICAgICAgICBmcmFtZS5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGFjay5wdXNoKGZyYW1lKTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSAvLyBTYWZlIGJlY2F1c2Ugd2UganVzdCBjaGVja2VkIGl0J3MgYW4gZWxlbWVudC5cblxuXG4gICAgICB2YXIgbmV4dEVsZW1lbnQgPSBuZXh0Q2hpbGQ7XG4gICAgICB2YXIgZWxlbWVudFR5cGUgPSBuZXh0RWxlbWVudC50eXBlO1xuXG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnRUeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJET00obmV4dEVsZW1lbnQsIGNvbnRleHQsIHBhcmVudE5hbWVzcGFjZSk7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZWxlbWVudFR5cGUpIHtcbiAgICAgICAgLy8gVE9ETzogTGVnYWN5SGlkZGVuIGFjdHMgdGhlIHNhbWUgYXMgYSBmcmFnbWVudC4gVGhpcyBvbmx5IHdvcmtzXG4gICAgICAgIC8vIGJlY2F1c2Ugd2UgY3VycmVudGx5IGFzc3VtZSB0aGF0IGV2ZXJ5IGluc3RhbmNlIG9mIExlZ2FjeUhpZGRlbiBpc1xuICAgICAgICAvLyBhY2NvbXBhbmllZCBieSBhIGhvc3QgY29tcG9uZW50IHdyYXBwZXIuIEluIHRoZSBoaWRkZW4gbW9kZSwgdGhlIGhvc3RcbiAgICAgICAgLy8gY29tcG9uZW50IGlzIGdpdmVuIGEgYGhpZGRlbmAgYXR0cmlidXRlLCB3aGljaCBlbnN1cmVzIHRoYXQgdGhlXG4gICAgICAgIC8vIGluaXRpYWwgSFRNTCBpcyBub3QgdmlzaWJsZS4gVG8gc3VwcG9ydCB0aGUgdXNlIG9mIExlZ2FjeUhpZGRlbiBhcyBhXG4gICAgICAgIC8vIHRydWUgZnJhZ21lbnQsIHdpdGhvdXQgYW4gZXh0cmEgRE9NIG5vZGUsIHdlIHdvdWxkIGhhdmUgdG8gaGlkZSB0aGVcbiAgICAgICAgLy8gaW5pdGlhbCBIVE1MIGluIHNvbWUgb3RoZXIgd2F5LlxuICAgICAgICBjYXNlIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRTpcbiAgICAgICAgY2FzZSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRTpcbiAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIF9uZXh0Q2hpbGRyZW4gPSB0b0FycmF5KG5leHRDaGlsZC5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgICAgICAgIHZhciBfZnJhbWUgPSB7XG4gICAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICAgIGRvbU5hbWVzcGFjZTogcGFyZW50TmFtZXNwYWNlLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbixcbiAgICAgICAgICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgZm9vdGVyOiAnJ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfZnJhbWUuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKF9mcmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvciggXCJSZWFjdERPTVNlcnZlciBkb2VzIG5vdCB5ZXQgc3VwcG9ydCBTdXNwZW5zZS5cIiApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lLW5vLWZhbGx0aHJvdWdoXG5cbiAgICAgICAgY2FzZSBSRUFDVF9TQ09QRV9UWVBFOlxuICAgICAgICAgIHtcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3RET01TZXJ2ZXIgZG9lcyBub3QgeWV0IHN1cHBvcnQgc2NvcGUgY29tcG9uZW50cy5cIiApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnRUeXBlID09PSAnb2JqZWN0JyAmJiBlbGVtZW50VHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBzd2l0Y2ggKGVsZW1lbnRUeXBlLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IG5leHRDaGlsZDtcblxuICAgICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbjU7XG5cbiAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudElkZW50aXR5ID0ge307XG4gICAgICAgICAgICAgIHByZXBhcmVUb1VzZUhvb2tzKGNvbXBvbmVudElkZW50aXR5KTtcbiAgICAgICAgICAgICAgX25leHRDaGlsZHJlbjUgPSBlbGVtZW50VHlwZS5yZW5kZXIoZWxlbWVudC5wcm9wcywgZWxlbWVudC5yZWYpO1xuICAgICAgICAgICAgICBfbmV4dENoaWxkcmVuNSA9IGZpbmlzaEhvb2tzKGVsZW1lbnRUeXBlLnJlbmRlciwgZWxlbWVudC5wcm9wcywgX25leHRDaGlsZHJlbjUsIGVsZW1lbnQucmVmKTtcbiAgICAgICAgICAgICAgX25leHRDaGlsZHJlbjUgPSB0b0FycmF5KF9uZXh0Q2hpbGRyZW41KTtcbiAgICAgICAgICAgICAgdmFyIF9mcmFtZTUgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbjUsXG4gICAgICAgICAgICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGZvb3RlcjogJydcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2ZyYW1lNS5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKF9mcmFtZTUpO1xuICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIF9lbGVtZW50ID0gbmV4dENoaWxkO1xuICAgICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbjYgPSBbUmVhY3QuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZS50eXBlLCBfYXNzaWduKHtcbiAgICAgICAgICAgICAgICByZWY6IF9lbGVtZW50LnJlZlxuICAgICAgICAgICAgICB9LCBfZWxlbWVudC5wcm9wcykpXTtcbiAgICAgICAgICAgICAgdmFyIF9mcmFtZTYgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbjYsXG4gICAgICAgICAgICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGZvb3RlcjogJydcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2ZyYW1lNi5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKF9mcmFtZTYpO1xuICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IG5leHRDaGlsZDtcbiAgICAgICAgICAgICAgdmFyIG5leHRQcm9wcyA9IHByb3ZpZGVyLnByb3BzO1xuXG4gICAgICAgICAgICAgIHZhciBfbmV4dENoaWxkcmVuNyA9IHRvQXJyYXkobmV4dFByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgICAgICAgICB2YXIgX2ZyYW1lNyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBwcm92aWRlcixcbiAgICAgICAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbjcsXG4gICAgICAgICAgICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGZvb3RlcjogJydcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2ZyYW1lNy5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5wdXNoUHJvdmlkZXIocHJvdmlkZXIpO1xuICAgICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goX2ZyYW1lNyk7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YXIgcmVhY3RDb250ZXh0ID0gbmV4dENoaWxkLnR5cGU7IC8vIFRoZSBsb2dpYyBiZWxvdyBmb3IgQ29udGV4dCBkaWZmZXJzIGRlcGVuZGluZyBvbiBQUk9EIG9yIERFViBtb2RlLiBJblxuICAgICAgICAgICAgICAvLyBERVYgbW9kZSwgd2UgY3JlYXRlIGEgc2VwYXJhdGUgb2JqZWN0IGZvciBDb250ZXh0LkNvbnN1bWVyIHRoYXQgYWN0c1xuICAgICAgICAgICAgICAvLyBsaWtlIGEgcHJveHkgdG8gQ29udGV4dC4gVGhpcyBwcm94eSBvYmplY3QgYWRkcyB1bm5lY2Vzc2FyeSBjb2RlIGluIFBST0RcbiAgICAgICAgICAgICAgLy8gc28gd2UgdXNlIHRoZSBvbGQgYmVoYXZpb3VyIChDb250ZXh0LkNvbnN1bWVyIHJlZmVyZW5jZXMgQ29udGV4dCkgdG9cbiAgICAgICAgICAgICAgLy8gcmVkdWNlIHNpemUgYW5kIG92ZXJoZWFkLiBUaGUgc2VwYXJhdGUgb2JqZWN0IHJlZmVyZW5jZXMgY29udGV4dCB2aWFcbiAgICAgICAgICAgICAgLy8gYSBwcm9wZXJ0eSBjYWxsZWQgXCJfY29udGV4dFwiLCB3aGljaCBhbHNvIGdpdmVzIHVzIHRoZSBhYmlsaXR5IHRvIGNoZWNrXG4gICAgICAgICAgICAgIC8vIGluIERFViBtb2RlIGlmIHRoaXMgcHJvcGVydHkgZXhpc3RzIG9yIG5vdCBhbmQgd2FybiBpZiBpdCBkb2VzIG5vdC5cblxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHJlYWN0Q29udGV4dC5fY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAvLyBUaGlzIG1heSBiZSBiZWNhdXNlIGl0J3MgYSBDb250ZXh0IChyYXRoZXIgdGhhbiBhIENvbnN1bWVyKS5cbiAgICAgICAgICAgICAgICAgIC8vIE9yIGl0IG1heSBiZSBiZWNhdXNlIGl0J3Mgb2xkZXIgUmVhY3Qgd2hlcmUgdGhleSdyZSB0aGUgc2FtZSB0aGluZy5cbiAgICAgICAgICAgICAgICAgIC8vIFdlIG9ubHkgd2FudCB0byB3YXJuIGlmIHdlJ3JlIHN1cmUgaXQncyBhIG5ldyBSZWFjdC5cbiAgICAgICAgICAgICAgICAgIGlmIChyZWFjdENvbnRleHQgIT09IHJlYWN0Q29udGV4dC5Db25zdW1lcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb250ZXh0QXNDb25zdW1lcikge1xuICAgICAgICAgICAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb250ZXh0QXNDb25zdW1lciA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0PiBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJlYWN0Q29udGV4dCA9IHJlYWN0Q29udGV4dC5fY29udGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgX25leHRQcm9wcyA9IG5leHRDaGlsZC5wcm9wcztcbiAgICAgICAgICAgICAgdmFyIHRocmVhZElEID0gdGhpcy50aHJlYWRJRDtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDb250ZXh0Qm91bmRzKHJlYWN0Q29udGV4dCwgdGhyZWFkSUQpO1xuICAgICAgICAgICAgICB2YXIgbmV4dFZhbHVlID0gcmVhY3RDb250ZXh0W3RocmVhZElEXTtcblxuICAgICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbjggPSB0b0FycmF5KF9uZXh0UHJvcHMuY2hpbGRyZW4obmV4dFZhbHVlKSk7XG5cbiAgICAgICAgICAgICAgdmFyIF9mcmFtZTggPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogbmV4dENoaWxkLFxuICAgICAgICAgICAgICAgIGRvbU5hbWVzcGFjZTogcGFyZW50TmFtZXNwYWNlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBfbmV4dENoaWxkcmVuOCxcbiAgICAgICAgICAgICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgZm9vdGVyOiAnJ1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfZnJhbWU4LmRlYnVnRWxlbWVudFN0YWNrID0gW107XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goX2ZyYW1lOCk7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUtbm8tZmFsbHRocm91Z2hcblxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRTpcbiAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3RET01TZXJ2ZXIgZG9lcyBub3QgeWV0IHN1cHBvcnQgdGhlIGZ1bmRhbWVudGFsIEFQSS5cIiApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZS1uby1mYWxsdGhyb3VnaFxuXG4gICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBfZWxlbWVudDIgPSBuZXh0Q2hpbGQ7XG4gICAgICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gbmV4dENoaWxkLnR5cGU7IC8vIEF0dGVtcHQgdG8gaW5pdGlhbGl6ZSBsYXp5IGNvbXBvbmVudCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhlXG4gICAgICAgICAgICAgIC8vIHN1c3BlbnNlIHNlcnZlci1zaWRlIHJlbmRlcmVyIGlzIGVuYWJsZWQgc28gc3luY2hyb25vdXNseVxuICAgICAgICAgICAgICAvLyByZXNvbHZlZCBjb25zdHJ1Y3RvcnMgYXJlIHN1cHBvcnRlZC5cblxuICAgICAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcbiAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGluaXQocGF5bG9hZCk7XG4gICAgICAgICAgICAgIHZhciBfbmV4dENoaWxkcmVuMTAgPSBbUmVhY3QuY3JlYXRlRWxlbWVudChyZXN1bHQsIF9hc3NpZ24oe1xuICAgICAgICAgICAgICAgIHJlZjogX2VsZW1lbnQyLnJlZlxuICAgICAgICAgICAgICB9LCBfZWxlbWVudDIucHJvcHMpKV07XG4gICAgICAgICAgICAgIHZhciBfZnJhbWUxMCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgICAgIGRvbU5hbWVzcGFjZTogcGFyZW50TmFtZXNwYWNlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBfbmV4dENoaWxkcmVuMTAsXG4gICAgICAgICAgICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGZvb3RlcjogJydcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2ZyYW1lMTAuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChfZnJhbWUxMCk7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICB7XG4gICAgICAgIHZhciBvd25lciA9IG5leHRFbGVtZW50Ll9vd25lcjtcblxuICAgICAgICBpZiAoZWxlbWVudFR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgZWxlbWVudFR5cGUgPT09ICdvYmplY3QnICYmIGVsZW1lbnRUeXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKGVsZW1lbnRUeXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBcIiArICduYW1lZCBpbXBvcnRzLic7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3duZXJOYW1lID0gb3duZXIgPyBnZXRDb21wb25lbnROYW1lKG93bmVyKSA6IG51bGw7XG5cbiAgICAgICAgaWYgKG93bmVyTmFtZSkge1xuICAgICAgICAgIGluZm8gKz0gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgb3duZXJOYW1lICsgJ2AuJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB7XG4gICAgICAgIHtcbiAgICAgICAgICB0aHJvdyBFcnJvciggXCJFbGVtZW50IHR5cGUgaXMgaW52YWxpZDogZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciBidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlIGNvbXBvbmVudHMpIGJ1dCBnb3Q6IFwiICsgKGVsZW1lbnRUeXBlID09IG51bGwgPyBlbGVtZW50VHlwZSA6IHR5cGVvZiBlbGVtZW50VHlwZSkgKyBcIi5cIiArIGluZm8gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyRE9NID0gZnVuY3Rpb24gcmVuZGVyRE9NKGVsZW1lbnQsIGNvbnRleHQsIHBhcmVudE5hbWVzcGFjZSkge1xuICAgIHZhciB0YWcgPSBlbGVtZW50LnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgbmFtZXNwYWNlID0gcGFyZW50TmFtZXNwYWNlO1xuXG4gICAgaWYgKHBhcmVudE5hbWVzcGFjZSA9PT0gTmFtZXNwYWNlcy5odG1sKSB7XG4gICAgICBuYW1lc3BhY2UgPSBnZXRJbnRyaW5zaWNOYW1lc3BhY2UodGFnKTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAobmFtZXNwYWNlID09PSBOYW1lc3BhY2VzLmh0bWwpIHtcbiAgICAgICAgLy8gU2hvdWxkIHRoaXMgY2hlY2sgYmUgZ2F0ZWQgYnkgcGFyZW50IG5hbWVzcGFjZT8gTm90IHN1cmUgd2Ugd2FudCB0b1xuICAgICAgICAvLyBhbGxvdyA8U1ZHPiBvciA8bUFUSD4uXG4gICAgICAgIGlmICh0YWcgIT09IGVsZW1lbnQudHlwZSkge1xuICAgICAgICAgIGVycm9yKCc8JXMgLz4gaXMgdXNpbmcgaW5jb3JyZWN0IGNhc2luZy4gJyArICdVc2UgUGFzY2FsQ2FzZSBmb3IgUmVhY3QgY29tcG9uZW50cywgJyArICdvciBsb3dlcmNhc2UgZm9yIEhUTUwgZWxlbWVudHMuJywgZWxlbWVudC50eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlRGFuZ2Vyb3VzVGFnKHRhZyk7XG4gICAgdmFyIHByb3BzID0gZWxlbWVudC5wcm9wcztcblxuICAgIGlmICh0YWcgPT09ICdpbnB1dCcpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tDb250cm9sbGVkVmFsdWVQcm9wcygnaW5wdXQnLCBwcm9wcyk7XG5cbiAgICAgICAgaWYgKHByb3BzLmNoZWNrZWQgIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5kZWZhdWx0Q2hlY2tlZCAhPT0gdW5kZWZpbmVkICYmICFkaWRXYXJuRGVmYXVsdENoZWNrZWQpIHtcbiAgICAgICAgICBlcnJvcignJXMgY29udGFpbnMgYW4gaW5wdXQgb2YgdHlwZSAlcyB3aXRoIGJvdGggY2hlY2tlZCBhbmQgZGVmYXVsdENoZWNrZWQgcHJvcHMuICcgKyAnSW5wdXQgZWxlbWVudHMgbXVzdCBiZSBlaXRoZXIgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgJyArICcoc3BlY2lmeSBlaXRoZXIgdGhlIGNoZWNrZWQgcHJvcCwgb3IgdGhlIGRlZmF1bHRDaGVja2VkIHByb3AsIGJ1dCBub3QgJyArICdib3RoKS4gRGVjaWRlIGJldHdlZW4gdXNpbmcgYSBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCBpbnB1dCAnICsgJ2VsZW1lbnQgYW5kIHJlbW92ZSBvbmUgb2YgdGhlc2UgcHJvcHMuIE1vcmUgaW5mbzogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvY29udHJvbGxlZC1jb21wb25lbnRzJywgJ0EgY29tcG9uZW50JywgcHJvcHMudHlwZSk7XG5cbiAgICAgICAgICBkaWRXYXJuRGVmYXVsdENoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcHMuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWRpZFdhcm5EZWZhdWx0SW5wdXRWYWx1ZSkge1xuICAgICAgICAgIGVycm9yKCclcyBjb250YWlucyBhbiBpbnB1dCBvZiB0eXBlICVzIHdpdGggYm90aCB2YWx1ZSBhbmQgZGVmYXVsdFZhbHVlIHByb3BzLiAnICsgJ0lucHV0IGVsZW1lbnRzIG11c3QgYmUgZWl0aGVyIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkICcgKyAnKHNwZWNpZnkgZWl0aGVyIHRoZSB2YWx1ZSBwcm9wLCBvciB0aGUgZGVmYXVsdFZhbHVlIHByb3AsIGJ1dCBub3QgJyArICdib3RoKS4gRGVjaWRlIGJldHdlZW4gdXNpbmcgYSBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCBpbnB1dCAnICsgJ2VsZW1lbnQgYW5kIHJlbW92ZSBvbmUgb2YgdGhlc2UgcHJvcHMuIE1vcmUgaW5mbzogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvY29udHJvbGxlZC1jb21wb25lbnRzJywgJ0EgY29tcG9uZW50JywgcHJvcHMudHlwZSk7XG5cbiAgICAgICAgICBkaWRXYXJuRGVmYXVsdElucHV0VmFsdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByb3BzID0gX2Fzc2lnbih7XG4gICAgICAgIHR5cGU6IHVuZGVmaW5lZFxuICAgICAgfSwgcHJvcHMsIHtcbiAgICAgICAgZGVmYXVsdENoZWNrZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSAhPSBudWxsID8gcHJvcHMudmFsdWUgOiBwcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgIGNoZWNrZWQ6IHByb3BzLmNoZWNrZWQgIT0gbnVsbCA/IHByb3BzLmNoZWNrZWQgOiBwcm9wcy5kZWZhdWx0Q2hlY2tlZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0YWcgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tDb250cm9sbGVkVmFsdWVQcm9wcygndGV4dGFyZWEnLCBwcm9wcyk7XG5cbiAgICAgICAgaWYgKHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcHMuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWRpZFdhcm5EZWZhdWx0VGV4dGFyZWFWYWx1ZSkge1xuICAgICAgICAgIGVycm9yKCdUZXh0YXJlYSBlbGVtZW50cyBtdXN0IGJlIGVpdGhlciBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCAnICsgJyhzcGVjaWZ5IGVpdGhlciB0aGUgdmFsdWUgcHJvcCwgb3IgdGhlIGRlZmF1bHRWYWx1ZSBwcm9wLCBidXQgbm90ICcgKyAnYm90aCkuIERlY2lkZSBiZXR3ZWVuIHVzaW5nIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgdGV4dGFyZWEgJyArICdhbmQgcmVtb3ZlIG9uZSBvZiB0aGVzZSBwcm9wcy4gTW9yZSBpbmZvOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9jb250cm9sbGVkLWNvbXBvbmVudHMnKTtcblxuICAgICAgICAgIGRpZFdhcm5EZWZhdWx0VGV4dGFyZWFWYWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGluaXRpYWxWYWx1ZSA9IHByb3BzLnZhbHVlO1xuXG4gICAgICBpZiAoaW5pdGlhbFZhbHVlID09IG51bGwpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZTsgLy8gVE9ETyAoeXVuZ3N0ZXJzKTogUmVtb3ZlIHN1cHBvcnQgZm9yIGNoaWxkcmVuIGNvbnRlbnQgaW4gPHRleHRhcmVhPi5cblxuICAgICAgICB2YXIgdGV4dGFyZWFDaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICAgIGlmICh0ZXh0YXJlYUNoaWxkcmVuICE9IG51bGwpIHtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlcnJvcignVXNlIHRoZSBgZGVmYXVsdFZhbHVlYCBvciBgdmFsdWVgIHByb3BzIGluc3RlYWQgb2Ygc2V0dGluZyAnICsgJ2NoaWxkcmVuIG9uIDx0ZXh0YXJlYT4uJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEoZGVmYXVsdFZhbHVlID09IG51bGwpKSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRocm93IEVycm9yKCBcIklmIHlvdSBzdXBwbHkgYGRlZmF1bHRWYWx1ZWAgb24gYSA8dGV4dGFyZWE+LCBkbyBub3QgcGFzcyBjaGlsZHJlbi5cIiApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRleHRhcmVhQ2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBpZiAoISh0ZXh0YXJlYUNoaWxkcmVuLmxlbmd0aCA8PSAxKSkge1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiPHRleHRhcmVhPiBjYW4gb25seSBoYXZlIGF0IG1vc3Qgb25lIGNoaWxkLlwiICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGV4dGFyZWFDaGlsZHJlbiA9IHRleHRhcmVhQ2hpbGRyZW5bMF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGVmYXVsdFZhbHVlID0gJycgKyB0ZXh0YXJlYUNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgZGVmYXVsdFZhbHVlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpbml0aWFsVmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHByb3BzID0gX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgY2hpbGRyZW46ICcnICsgaW5pdGlhbFZhbHVlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRhZyA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tDb250cm9sbGVkVmFsdWVQcm9wcygnc2VsZWN0JywgcHJvcHMpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVQcm9wTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgcHJvcE5hbWUgPSB2YWx1ZVByb3BOYW1lc1tpXTtcblxuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHByb3BzW3Byb3BOYW1lXSk7XG5cbiAgICAgICAgICBpZiAocHJvcHMubXVsdGlwbGUgJiYgIWlzQXJyYXkpIHtcbiAgICAgICAgICAgIGVycm9yKCdUaGUgYCVzYCBwcm9wIHN1cHBsaWVkIHRvIDxzZWxlY3Q+IG11c3QgYmUgYW4gYXJyYXkgaWYgJyArICdgbXVsdGlwbGVgIGlzIHRydWUuJywgcHJvcE5hbWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXByb3BzLm11bHRpcGxlICYmIGlzQXJyYXkpIHtcbiAgICAgICAgICAgIGVycm9yKCdUaGUgYCVzYCBwcm9wIHN1cHBsaWVkIHRvIDxzZWxlY3Q+IG11c3QgYmUgYSBzY2FsYXIgJyArICd2YWx1ZSBpZiBgbXVsdGlwbGVgIGlzIGZhbHNlLicsIHByb3BOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhZGlkV2FybkRlZmF1bHRTZWxlY3RWYWx1ZSkge1xuICAgICAgICAgIGVycm9yKCdTZWxlY3QgZWxlbWVudHMgbXVzdCBiZSBlaXRoZXIgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgJyArICcoc3BlY2lmeSBlaXRoZXIgdGhlIHZhbHVlIHByb3AsIG9yIHRoZSBkZWZhdWx0VmFsdWUgcHJvcCwgYnV0IG5vdCAnICsgJ2JvdGgpLiBEZWNpZGUgYmV0d2VlbiB1c2luZyBhIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkIHNlbGVjdCAnICsgJ2VsZW1lbnQgYW5kIHJlbW92ZSBvbmUgb2YgdGhlc2UgcHJvcHMuIE1vcmUgaW5mbzogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvY29udHJvbGxlZC1jb21wb25lbnRzJyk7XG5cbiAgICAgICAgICBkaWRXYXJuRGVmYXVsdFNlbGVjdFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmN1cnJlbnRTZWxlY3RWYWx1ZSA9IHByb3BzLnZhbHVlICE9IG51bGwgPyBwcm9wcy52YWx1ZSA6IHByb3BzLmRlZmF1bHRWYWx1ZTtcbiAgICAgIHByb3BzID0gX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0YWcgPT09ICdvcHRpb24nKSB7XG4gICAgICB2YXIgc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gdGhpcy5jdXJyZW50U2VsZWN0VmFsdWU7XG4gICAgICB2YXIgb3B0aW9uQ2hpbGRyZW4gPSBmbGF0dGVuT3B0aW9uQ2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAoc2VsZWN0VmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB2YXIgdmFsdWU7XG5cbiAgICAgICAgaWYgKHByb3BzLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlICsgJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSBvcHRpb25DaGlsZHJlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0VmFsdWUpKSB7XG4gICAgICAgICAgLy8gbXVsdGlwbGVcbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlbGVjdFZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoJycgKyBzZWxlY3RWYWx1ZVtqXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0ZWQgPSAnJyArIHNlbGVjdFZhbHVlID09PSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzID0gX2Fzc2lnbih7XG4gICAgICAgICAgc2VsZWN0ZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBjaGlsZHJlbjogdW5kZWZpbmVkXG4gICAgICAgIH0sIHByb3BzLCB7XG4gICAgICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkLFxuICAgICAgICAgIGNoaWxkcmVuOiBvcHRpb25DaGlsZHJlblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB7XG4gICAgICB2YWxpZGF0ZVByb3BlcnRpZXNJbkRldmVsb3BtZW50KHRhZywgcHJvcHMpO1xuICAgIH1cblxuICAgIGFzc2VydFZhbGlkUHJvcHModGFnLCBwcm9wcyk7XG4gICAgdmFyIG91dCA9IGNyZWF0ZU9wZW5UYWdNYXJrdXAoZWxlbWVudC50eXBlLCB0YWcsIHByb3BzLCBuYW1lc3BhY2UsIHRoaXMubWFrZVN0YXRpY01hcmt1cCwgdGhpcy5zdGFjay5sZW5ndGggPT09IDEpO1xuICAgIHZhciBmb290ZXIgPSAnJztcblxuICAgIGlmIChvbWl0dGVkQ2xvc2VUYWdzLmhhc093blByb3BlcnR5KHRhZykpIHtcbiAgICAgIG91dCArPSAnLz4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQgKz0gJz4nO1xuICAgICAgZm9vdGVyID0gJzwvJyArIGVsZW1lbnQudHlwZSArICc+JztcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW47XG4gICAgdmFyIGlubmVyTWFya3VwID0gZ2V0Tm9uQ2hpbGRyZW5Jbm5lck1hcmt1cChwcm9wcyk7XG5cbiAgICBpZiAoaW5uZXJNYXJrdXAgIT0gbnVsbCkge1xuICAgICAgY2hpbGRyZW4gPSBbXTtcblxuICAgICAgaWYgKG5ld2xpbmVFYXRpbmdUYWdzLmhhc093blByb3BlcnR5KHRhZykgJiYgaW5uZXJNYXJrdXAuY2hhckF0KDApID09PSAnXFxuJykge1xuICAgICAgICAvLyB0ZXh0L2h0bWwgaWdub3JlcyB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHRoZXNlIHRhZ3MgaWYgaXQncyBhIG5ld2xpbmVcbiAgICAgICAgLy8gUHJlZmVyIHRvIGJyZWFrIGFwcGxpY2F0aW9uL3htbCBvdmVyIHRleHQvaHRtbCAoZm9yIG5vdykgYnkgYWRkaW5nXG4gICAgICAgIC8vIGEgbmV3bGluZSBzcGVjaWZpY2FsbHkgdG8gZ2V0IGVhdGVuIGJ5IHRoZSBwYXJzZXIuIChBbHRlcm5hdGVseSBmb3JcbiAgICAgICAgLy8gdGV4dGFyZWFzLCByZXBsYWNpbmcgXCJeXFxuXCIgd2l0aCBcIlxcclxcblwiIGRvZXNuJ3QgZ2V0IGVhdGVuLCBhbmQgdGhlIGZpcnN0XG4gICAgICAgIC8vIFxcciBpcyBub3JtYWxpemVkIG91dCBieSBIVE1MVGV4dEFyZWFFbGVtZW50I3ZhbHVlLilcbiAgICAgICAgLy8gU2VlOiA8aHR0cDovL3d3dy53My5vcmcvVFIvaHRtbC1wb2x5Z2xvdC8jbmV3bGluZXMtaW4tdGV4dGFyZWEtYW5kLXByZT5cbiAgICAgICAgLy8gU2VlOiA8aHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjZWxlbWVudC1yZXN0cmljdGlvbnM+XG4gICAgICAgIC8vIFNlZTogPGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI25ld2xpbmVzPlxuICAgICAgICAvLyBTZWU6IFBhcnNpbmcgb2YgXCJ0ZXh0YXJlYVwiIFwibGlzdGluZ1wiIGFuZCBcInByZVwiIGVsZW1lbnRzXG4gICAgICAgIC8vICBmcm9tIDxodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNwYXJzaW5nLW1haW4taW5ib2R5PlxuICAgICAgICBvdXQgKz0gJ1xcbic7XG4gICAgICB9XG5cbiAgICAgIG91dCArPSBpbm5lck1hcmt1cDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRyZW4gPSB0b0FycmF5KHByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICB2YXIgZnJhbWUgPSB7XG4gICAgICBkb21OYW1lc3BhY2U6IGdldENoaWxkTmFtZXNwYWNlKHBhcmVudE5hbWVzcGFjZSwgZWxlbWVudC50eXBlKSxcbiAgICAgIHR5cGU6IHRhZyxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgZm9vdGVyOiBmb290ZXJcbiAgICB9O1xuXG4gICAge1xuICAgICAgZnJhbWUuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YWNrLnB1c2goZnJhbWUpO1xuICAgIHRoaXMucHJldmlvdXNXYXNUZXh0Tm9kZSA9IGZhbHNlO1xuICAgIHJldHVybiBvdXQ7XG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0RE9NU2VydmVyUmVuZGVyZXI7XG59KCk7XG5cbi8qKlxuICogUmVuZGVyIGEgUmVhY3RFbGVtZW50IHRvIGl0cyBpbml0aWFsIEhUTUwuIFRoaXMgc2hvdWxkIG9ubHkgYmUgdXNlZCBvbiB0aGVcbiAqIHNlcnZlci5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtZG9tLXNlcnZlci5odG1sI3JlbmRlcnRvc3RyaW5nXG4gKi9cblxuZnVuY3Rpb24gcmVuZGVyVG9TdHJpbmcoZWxlbWVudCwgb3B0aW9ucykge1xuICB2YXIgcmVuZGVyZXIgPSBuZXcgUmVhY3RET01TZXJ2ZXJSZW5kZXJlcihlbGVtZW50LCBmYWxzZSwgb3B0aW9ucyk7XG5cbiAgdHJ5IHtcbiAgICB2YXIgbWFya3VwID0gcmVuZGVyZXIucmVhZChJbmZpbml0eSk7XG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfSBmaW5hbGx5IHtcbiAgICByZW5kZXJlci5kZXN0cm95KCk7XG4gIH1cbn1cbi8qKlxuICogU2ltaWxhciB0byByZW5kZXJUb1N0cmluZywgZXhjZXB0IHRoaXMgZG9lc24ndCBjcmVhdGUgZXh0cmEgRE9NIGF0dHJpYnV0ZXNcbiAqIHN1Y2ggYXMgZGF0YS1yZWFjdC1pZCB0aGF0IFJlYWN0IHVzZXMgaW50ZXJuYWxseS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtZG9tLXNlcnZlci5odG1sI3JlbmRlcnRvc3RhdGljbWFya3VwXG4gKi9cblxuZnVuY3Rpb24gcmVuZGVyVG9TdGF0aWNNYXJrdXAoZWxlbWVudCwgb3B0aW9ucykge1xuICB2YXIgcmVuZGVyZXIgPSBuZXcgUmVhY3RET01TZXJ2ZXJSZW5kZXJlcihlbGVtZW50LCB0cnVlLCBvcHRpb25zKTtcblxuICB0cnkge1xuICAgIHZhciBtYXJrdXAgPSByZW5kZXJlci5yZWFkKEluZmluaXR5KTtcbiAgICByZXR1cm4gbWFya3VwO1xuICB9IGZpbmFsbHkge1xuICAgIHJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJUb05vZGVTdHJlYW0oKSB7XG4gIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdERPTVNlcnZlci5yZW5kZXJUb05vZGVTdHJlYW0oKTogVGhlIHN0cmVhbWluZyBBUEkgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgYnJvd3Nlci4gVXNlIFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKCkgaW5zdGVhZC5cIiApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJUb1N0YXRpY05vZGVTdHJlYW0oKSB7XG4gIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY05vZGVTdHJlYW0oKTogVGhlIHN0cmVhbWluZyBBUEkgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgYnJvd3Nlci4gVXNlIFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKCkgaW5zdGVhZC5cIiApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLnJlbmRlclRvTm9kZVN0cmVhbSA9IHJlbmRlclRvTm9kZVN0cmVhbTtcbmV4cG9ydHMucmVuZGVyVG9TdGF0aWNNYXJrdXAgPSByZW5kZXJUb1N0YXRpY01hcmt1cDtcbmV4cG9ydHMucmVuZGVyVG9TdGF0aWNOb2RlU3RyZWFtID0gcmVuZGVyVG9TdGF0aWNOb2RlU3RyZWFtO1xuZXhwb3J0cy5yZW5kZXJUb1N0cmluZyA9IHJlbmRlclRvU3RyaW5nO1xuZXhwb3J0cy52ZXJzaW9uID0gUmVhY3RWZXJzaW9uO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS1zZXJ2ZXIuYnJvd3Nlci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20tc2VydmVyLmJyb3dzZXIuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2xpYi93aXRoRGF0YSc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSc7XHJcblxyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvc3R5bGVzL25wcm9ncmVzcy5jc3MnO1xyXG5cclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpKTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcblxyXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgYXBvbGxvIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvfT5cclxuICAgICAgPFBhZ2U+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoeyBDb21wb25lbnQsIGN0eCB9KSB7XHJcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgfVxyXG5cclxuICBwYWdlUHJvcHMucXVlcnkgPSBjdHgucXVlcnk7XHJcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YShBcHApO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
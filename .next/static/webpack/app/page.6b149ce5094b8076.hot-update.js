"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/ImageFallback/ImageFallback.tsx":
/*!****************************************************!*\
  !*** ./components/ImageFallback/ImageFallback.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst brokenImage = \"/assets/image-fallback.svg\";\nconst ImageFallback = (param)=>{\n    let { src, alt, fallbackImage = brokenImage, ...others } = param;\n    _s();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const initialUri = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        if (error) return fallbackImage;\n        if (src !== null) {\n            return \"/meta/image?url=\".concat(src);\n        }\n        return fallbackImage;\n    }, [\n        src,\n        fallbackImage,\n        error\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        src: initialUri,\n        alt: alt !== null && alt !== void 0 ? alt : \"\",\n        onError: ()=>setError(true),\n        ...others\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jsmrk\\\\Documents\\\\webee-labs\\\\apcopay-review\\\\components\\\\ImageFallback\\\\ImageFallback.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageFallback, \"2CqrYEbQTeNqs2NIFlzJTIxZkFI=\");\n_c = ImageFallback;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(ImageFallback));\nvar _c, _c1;\n$RefreshReg$(_c, \"ImageFallback\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSW1hZ2VGYWxsYmFjay9JbWFnZUZhbGxiYWNrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRWdEO0FBQ0k7QUFTcEQsTUFBTUksY0FBYztBQUVwQixNQUFNQyxnQkFBZ0I7UUFBQyxFQUNyQkMsR0FBRyxFQUNIQyxHQUFHLEVBQ0hDLGdCQUFnQkosV0FBVyxFQUMzQixHQUFHSyxRQUNHOztJQUNOLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNWSxhQUFhWCw4Q0FBT0EsQ0FBQztRQUN6QixJQUFJUyxPQUFPLE9BQU9GO1FBRWxCLElBQUlGLFFBQVEsTUFBTTtZQUNoQixPQUFPLG1CQUF1QixPQUFKQTtRQUM1QjtRQUVBLE9BQU9FO0lBQ1QsR0FBRztRQUFDRjtRQUFLRTtRQUFlRTtLQUFNO0lBRTlCLHFCQUNFLDhEQUFDUCxrREFBS0E7UUFDSkcsS0FBS007UUFDTEwsS0FBS0EsZ0JBQUFBLGlCQUFBQSxNQUFPO1FBQ1pNLFNBQVMsSUFBTUYsU0FBUztRQUN2QixHQUFHRixNQUFNOzs7Ozs7QUFHaEI7R0ExQk1KO0tBQUFBO0FBNEJOLGtGQUFlSCwyQ0FBSUEsQ0FBQ0csY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ltYWdlRmFsbGJhY2svSW1hZ2VGYWxsYmFjay50c3g/Nzc2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VNZW1vLCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSwgeyB0eXBlIEltYWdlUHJvcHMgfSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBzcmM6IHN0cmluZyB8IG51bGw7XHJcbiAgYWx0Pzogc3RyaW5nIHwgbnVsbDtcclxuICBmYWxsYmFja0ltYWdlPzogc3RyaW5nO1xyXG4gIHVzZU5leHRJbWFnZT86IGJvb2xlYW47XHJcbn0gJiBPbWl0PEltYWdlUHJvcHMsIFwic3JjXCIgfCBcImFsdFwiIHwgXCJvbkVycm9yXCI+O1xyXG5cclxuY29uc3QgYnJva2VuSW1hZ2UgPSBcIi9hc3NldHMvaW1hZ2UtZmFsbGJhY2suc3ZnXCI7XHJcblxyXG5jb25zdCBJbWFnZUZhbGxiYWNrID0gKHtcclxuICBzcmMsXHJcbiAgYWx0LFxyXG4gIGZhbGxiYWNrSW1hZ2UgPSBicm9rZW5JbWFnZSxcclxuICAuLi5vdGhlcnNcclxufTogUHJvcHMpID0+IHtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbFVyaSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gZmFsbGJhY2tJbWFnZTtcclxuXHJcbiAgICBpZiAoc3JjICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBgL21ldGEvaW1hZ2U/dXJsPSR7c3JjfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbGxiYWNrSW1hZ2U7XHJcbiAgfSwgW3NyYywgZmFsbGJhY2tJbWFnZSwgZXJyb3JdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbWFnZVxyXG4gICAgICBzcmM9e2luaXRpYWxVcml9XHJcbiAgICAgIGFsdD17YWx0ID8/IFwiXCJ9XHJcbiAgICAgIG9uRXJyb3I9eygpID0+IHNldEVycm9yKHRydWUpfVxyXG4gICAgICB7Li4ub3RoZXJzfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhJbWFnZUZhbGxiYWNrKTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlTWVtbyIsIm1lbW8iLCJJbWFnZSIsImJyb2tlbkltYWdlIiwiSW1hZ2VGYWxsYmFjayIsInNyYyIsImFsdCIsImZhbGxiYWNrSW1hZ2UiLCJvdGhlcnMiLCJlcnJvciIsInNldEVycm9yIiwiaW5pdGlhbFVyaSIsIm9uRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ImageFallback/ImageFallback.tsx\n"));

/***/ })

});
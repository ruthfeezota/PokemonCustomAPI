"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Layout */ \"./src/components/Layout.js\");\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    var pokemon = param.pokemon;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Ruth's NextJS Pokedex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-5xl mb-10 text-center \",\n                children: \"Ruth's Nextjs Pokedex Home Assignment\"\n            }, void 0, false, {\n                fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: pokemon.map(function(pokeman, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/pokemon?id=\".concat(index + 1),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"border p-4 border-grey my-2 hover:shadow-md capitalize flex text-lg bg-gray-200 rounded-md\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: pokeman.image,\n                                        alt: pokeman.name,\n                                        className: \"w-0 h-20 mr-3\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/index.js\",\n                                        lineNumber: 12,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mr-2 font-bold\",\n                                        children: [\n                                            index + 1,\n                                            \".\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/index.js\",\n                                        lineNumber: 17,\n                                        columnNumber: 33\n                                    }, _this),\n                                    pokeman.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/index.js\",\n                                lineNumber: 11,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/index.js\",\n                            lineNumber: 10,\n                            columnNumber: 25\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/index.js\",\n                        lineNumber: 9,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDaUI7O0FBQy9CLFNBQVNFLElBQUksQ0FBQyxLQUFXLEVBQUU7UUFBYixPQUFTLEdBQVQsS0FBVyxDQUFUQyxPQUFPOztJQUNsQyxxQkFDSSw4REFBQ0YsOERBQU07UUFBQ0csS0FBSyxFQUFDLHVCQUF1Qjs7MEJBQ2pDLDhEQUFDQyxJQUFFO2dCQUFDQyxTQUFTLEVBQUMsNkJBQTZCOzBCQUFDLHVDQUFxQzs7Ozs7b0JBQUs7MEJBQ3RGLDhEQUFDQyxJQUFFOzBCQUNFSixPQUFPLENBQUNLLEdBQUcsQ0FBQyxTQUFDQyxPQUFPLEVBQUVDLEtBQUs7eUNBQ3hCLDhEQUFDQyxJQUFFO2tDQUNDLDRFQUFDWCxrREFBSTs0QkFBQ1ksSUFBSSxFQUFFLGNBQWEsQ0FBWSxPQUFWRixLQUFLLEdBQUcsQ0FBQyxDQUFFO3NDQUNsQyw0RUFBQ0csR0FBQztnQ0FBQ1AsU0FBUyxFQUFDLDRGQUE0Rjs7a0RBQ3JHLDhEQUFDUSxLQUFHO3dDQUNBQyxHQUFHLEVBQUVOLE9BQU8sQ0FBQ08sS0FBSzt3Q0FDbEJDLEdBQUcsRUFBRVIsT0FBTyxDQUFDUyxJQUFJO3dDQUNqQlosU0FBUyxFQUFDLGVBQWU7Ozs7OzZDQUMzQjtrREFDRiw4REFBQ2EsTUFBSTt3Q0FBQ2IsU0FBUyxFQUFDLGdCQUFnQjs7NENBQzNCSSxLQUFLLEdBQUcsQ0FBQzs0Q0FBQyxHQUNmOzs7Ozs7NkNBQU87b0NBQ05ELE9BQU8sQ0FBQ1MsSUFBSTs7Ozs7O3FDQUNiOzs7OztpQ0FDRDt1QkFiRlIsS0FBSzs7Ozs2QkFjVDtpQkFDUixDQUFDOzs7OztvQkFDRDs7Ozs7O1lBQ0EsQ0FDWDtBQUNOLENBQUM7QUF6QnVCUixLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTGF5b3V0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwb2tlbW9uIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0IHRpdGxlPVwiUnV0aCdzIE5leHRKUyBQb2tlZGV4XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgbWItMTAgdGV4dC1jZW50ZXIgXCI+UnV0aCdzIE5leHRqcyBQb2tlZGV4IEhvbWUgQXNzaWdubWVudDwvaDE+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3Bva2Vtb24ubWFwKChwb2tlbWFuLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bva2Vtb24/aWQ9JHtpbmRleCArIDF9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYm9yZGVyIHAtNCBib3JkZXItZ3JleSBteS0yIGhvdmVyOnNoYWRvdy1tZCBjYXBpdGFsaXplIGZsZXggdGV4dC1sZyBiZy1ncmF5LTIwMCByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cG9rZW1hbi5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9rZW1hbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0wIGgtMjAgbXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTIgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9rZW1hbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD0yMCcpO1xuICAgICAgICBjb25zdCB7IHJlc3VsdHMgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIGNvbnN0IHBva2Vtb24gPSByZXN1bHRzLm1hcCgocG9rZW1hbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhZGRlZElkID0gKCcwMCcgKyAoaW5kZXggKyAxKSkuc2xpY2UoLTMpO1xuXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGBodHRwczovL2Fzc2V0cy5wb2tlbW9uLmNvbS9hc3NldHMvY21zMi9pbWcvcG9rZWRleC9kZXRhaWwvJHtwYWRkZWRJZH0ucG5nYDtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnBva2VtYW4sIGltYWdlIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvcHM6IHsgcG9rZW1vbiB9LFxuICAgICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJMYXlvdXQiLCJIb21lIiwicG9rZW1vbiIsInRpdGxlIiwiaDEiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsInBva2VtYW4iLCJpbmRleCIsImxpIiwiaHJlZiIsImEiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
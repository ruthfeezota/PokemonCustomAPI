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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Layout */ \"./src/components/Layout.js\");\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    var pokemon = param.pokemon;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Ruth's NextJS Pokedex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-5xl mb-10 text-center \",\n                children: \"Ruth's Nextjs Pokedex Home Assignment\"\n            }, void 0, false, {\n                fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: pokemon.map(function(pokeman, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/pokemon?id=\".concat(index + 1),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"border p-4 border-ind my-2 hover:shadow-md capitalize flex text-lg bg-gray-200 rounded-md\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: pokeman.image,\n                                        alt: pokeman.name,\n                                        className: \"w-40 h-40 mr-3\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/index.js\",\n                                        lineNumber: 12,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mr-2 font-bold\",\n                                        children: [\n                                            index + 1,\n                                            \".\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/index.js\",\n                                        lineNumber: 17,\n                                        columnNumber: 33\n                                    }, _this),\n                                    pokeman.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/index.js\",\n                                lineNumber: 11,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/index.js\",\n                            lineNumber: 10,\n                            columnNumber: 25\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/index.js\",\n                        lineNumber: 9,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDaUI7O0FBQy9CLFNBQVNFLElBQUksQ0FBQyxLQUFXLEVBQUU7UUFBYixPQUFTLEdBQVQsS0FBVyxDQUFUQyxPQUFPOztJQUNsQyxxQkFDSSw4REFBQ0YsOERBQU07UUFBQ0csS0FBSyxFQUFDLHVCQUF1Qjs7MEJBQ2pDLDhEQUFDQyxJQUFFO2dCQUFDQyxTQUFTLEVBQUMsNkJBQTZCOzBCQUFDLHVDQUFxQzs7Ozs7b0JBQUs7MEJBQ3RGLDhEQUFDQyxJQUFFOzBCQUNFSixPQUFPLENBQUNLLEdBQUcsQ0FBQyxTQUFDQyxPQUFPLEVBQUVDLEtBQUs7eUNBQ3hCLDhEQUFDQyxJQUFFO2tDQUNDLDRFQUFDWCxrREFBSTs0QkFBQ1ksSUFBSSxFQUFFLGNBQWEsQ0FBWSxPQUFWRixLQUFLLEdBQUcsQ0FBQyxDQUFFO3NDQUNsQyw0RUFBQ0csR0FBQztnQ0FBQ1AsU0FBUyxFQUFDLDJGQUEyRjs7a0RBQ3BHLDhEQUFDUSxLQUFHO3dDQUNBQyxHQUFHLEVBQUVOLE9BQU8sQ0FBQ08sS0FBSzt3Q0FDbEJDLEdBQUcsRUFBRVIsT0FBTyxDQUFDUyxJQUFJO3dDQUNqQlosU0FBUyxFQUFDLGdCQUFnQjs7Ozs7NkNBQzVCO2tEQUNGLDhEQUFDYSxNQUFJO3dDQUFDYixTQUFTLEVBQUMsZ0JBQWdCOzs0Q0FDM0JJLEtBQUssR0FBRyxDQUFDOzRDQUFDLEdBQ2Y7Ozs7Ozs2Q0FBTztvQ0FDTkQsT0FBTyxDQUFDUyxJQUFJOzs7Ozs7cUNBQ2I7Ozs7O2lDQUNEO3VCQWJGUixLQUFLOzs7OzZCQWNUO2lCQUNSLENBQUM7Ozs7O29CQUNEOzs7Ozs7WUFDQSxDQUNYO0FBQ04sQ0FBQztBQXpCdUJSLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9MYXlvdXQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHBva2Vtb24gfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQgdGl0bGU9XCJSdXRoJ3MgTmV4dEpTIFBva2VkZXhcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtYi0xMCB0ZXh0LWNlbnRlciBcIj5SdXRoJ3MgTmV4dGpzIFBva2VkZXggSG9tZSBBc3NpZ25tZW50PC9oMT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7cG9rZW1vbi5tYXAoKHBva2VtYW4sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9rZW1vbj9pZD0ke2luZGV4ICsgMX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJib3JkZXIgcC00IGJvcmRlci1pbmQgbXktMiBob3ZlcjpzaGFkb3ctbWQgY2FwaXRhbGl6ZSBmbGV4IHRleHQtbGcgYmctZ3JheS0yMDAgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bva2VtYW4uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Bva2VtYW4ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNDAgaC00MCBtci0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMiBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb2tlbWFuLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTIwJyk7XG4gICAgICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgY29uc3QgcG9rZW1vbiA9IHJlc3VsdHMubWFwKChwb2tlbWFuLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFkZGVkSWQgPSAoJzAwJyArIChpbmRleCArIDEpKS5zbGljZSgtMyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gYGh0dHBzOi8vYXNzZXRzLnBva2Vtb24uY29tL2Fzc2V0cy9jbXMyL2ltZy9wb2tlZGV4L2RldGFpbC8ke3BhZGRlZElkfS5wbmdgO1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4ucG9rZW1hbiwgaW1hZ2UgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9wczogeyBwb2tlbW9uIH0sXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkxheW91dCIsIkhvbWUiLCJwb2tlbW9uIiwidGl0bGUiLCJoMSIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwicG9rZW1hbiIsImluZGV4IiwibGkiLCJocmVmIiwiYSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwibmFtZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
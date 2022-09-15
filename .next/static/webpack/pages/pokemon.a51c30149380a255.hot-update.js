"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pokemon",{

/***/ "./pages/pokemon.js":
/*!**************************!*\
  !*** ./pages/pokemon.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ pokemon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar __N_SSP = true;\nfunction pokemon(param) {\n    var pokeman = param.pokeman;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: pokeman.name,\n        children: [\n            \" Name:\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl mb-2 text-center capitalize\",\n                children: pokeman.name\n            }, void 0, false, {\n                fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/pokemon.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"mx-auto\",\n                src: pokeman.image,\n                alt: pokeman.name\n            }, void 0, false, {\n                fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/pokemon.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold mr-2\",\n                        children: \"Height:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/pokemon.js\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, this),\n                    pokeman.height\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/pokemon.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold mr-2\",\n                        children: \"Weight:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/pokemon.js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, this),\n                    \" \",\n                    pokeman.weight\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/pokemon.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-2xl mt-6 mb-2 text-center\",\n                children: \"Types:\"\n            }, void 0, false, {\n                fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/pokemon.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            pokeman.types.map(function(type, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: type.type.name\n                }, \"index\", false, {\n                    fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/pokemon.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-2xl mt-6 mb-2 text-center\",\n                children: \"Ability:\"\n            }, void 0, false, {\n                fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/pokemon.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            pokeman.abilities.map(function(ability, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: ability.ability.name\n                }, \"index\", false, {\n                    fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/pokemon.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-4xl underline\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/pokemon.js\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/pokemon.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/pokemon.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ruth.zota/Downloads/nextjs-challenge-main/pages/pokemon.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ29CO0FBQ2pCOztBQUNkLFNBQVNHLE9BQU8sQ0FBQyxLQUFXLEVBQUU7UUFBYixPQUFTLEdBQVQsS0FBVyxDQUFUQyxPQUFPOztJQUNyQyxxQkFDSSw4REFBQ0gsOERBQU07UUFBQ0ksS0FBSyxFQUFFRCxPQUFPLENBQUNFLElBQUk7O1lBQUUsUUFDekI7MEJBQUEsOERBQUNDLElBQUU7Z0JBQUNDLFNBQVMsRUFBQyxzQ0FBc0M7MEJBQ25ESixPQUFPLENBQUNFLElBQUk7Ozs7O29CQUNSOzBCQUNMLDhEQUFDRyxLQUFHO2dCQUFDRCxTQUFTLEVBQUMsU0FBUztnQkFBQ0UsR0FBRyxFQUFFTixPQUFPLENBQUNPLEtBQUs7Z0JBQUVDLEdBQUcsRUFBRVIsT0FBTyxDQUFDRSxJQUFJOzs7OztvQkFBSTswQkFFbEUsOERBQUNPLEdBQUM7O2tDQUNFLDhEQUFDQyxNQUFJO3dCQUFDTixTQUFTLEVBQUMsZ0JBQWdCO2tDQUFDLFNBQU87Ozs7OzRCQUFPO29CQUM5Q0osT0FBTyxDQUFDVyxNQUFNOzs7Ozs7b0JBQ2Y7MEJBQ0osOERBQUNGLEdBQUM7O2tDQUNFLDhEQUFDQyxNQUFJO3dCQUFDTixTQUFTLEVBQUMsZ0JBQWdCO2tDQUFDLFNBQU87Ozs7OzRCQUFPO29CQUFBLEdBQUM7b0JBQUNKLE9BQU8sQ0FBQ1ksTUFBTTs7Ozs7O29CQUMvRDswQkFFSiw4REFBQ0gsR0FBQztnQkFBQ0wsU0FBUyxFQUFDLGdDQUFnQzswQkFBQyxRQUFNOzs7OztvQkFBSTtZQUN2REosT0FBTyxDQUFDYSxLQUFLLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEtBQUs7cUNBQzNCLDhEQUFDUCxHQUFDOzhCQUFjTSxJQUFJLENBQUNBLElBQUksQ0FBQ2IsSUFBSTttQkFBdkIsT0FBTzs7Ozt5QkFBcUI7YUFDdEMsQ0FBQzswQkFHRiw4REFBQ08sR0FBQztnQkFBQ0wsU0FBUyxFQUFDLGdDQUFnQzswQkFBQyxVQUFROzs7OztvQkFBSTtZQUN6REosT0FBTyxDQUFDaUIsU0FBUyxDQUFDSCxHQUFHLENBQUMsU0FBQ0ksT0FBTyxFQUFFRixLQUFLO3FDQUNsQyw4REFBQ1AsR0FBQzs4QkFBY1MsT0FBTyxDQUFDQSxPQUFPLENBQUNoQixJQUFJO21CQUE3QixPQUFPOzs7O3lCQUEyQjthQUM1QyxDQUFDOzBCQUdGLDhEQUFDTyxHQUFDO2dCQUFDTCxTQUFTLEVBQUMsbUJBQW1COzBCQUM1Qiw0RUFBQ04sa0RBQUk7b0JBQUNxQixJQUFJLEVBQUMsR0FBRzs4QkFDViw0RUFBQ0MsR0FBQzt3QkFBQ2hCLFNBQVMsRUFBQyxvQkFBb0I7a0NBQUMsTUFBSTs7Ozs7NEJBQUk7Ozs7O3dCQUN2Qzs7Ozs7b0JBQ1A7Ozs7OztZQUNDLENBQ1g7QUFDTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bva2Vtb24uanM/MzE4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBva2Vtb24oeyBwb2tlbWFuIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0IHRpdGxlPXtwb2tlbWFuLm5hbWV9PiBOYW1lOlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1iLTIgdGV4dC1jZW50ZXIgY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAge3Bva2VtYW4ubmFtZX1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm14LWF1dG9cIiBzcmM9e3Bva2VtYW4uaW1hZ2V9IGFsdD17cG9rZW1hbi5uYW1lfSAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgbXItMlwiPkhlaWdodDo8L3NwYW4+XG4gICAgICAgICAgICAgICAge3Bva2VtYW4uaGVpZ2h0fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIG1yLTJcIj5XZWlnaHQ6PC9zcGFuPiB7cG9rZW1hbi53ZWlnaHR9XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIG10LTYgbWItMiB0ZXh0LWNlbnRlclwiPlR5cGVzOjwvcD5cbiAgICAgICAgICAgIHtwb2tlbWFuLnR5cGVzLm1hcCgodHlwZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8cCBrZXk9XCJpbmRleFwiPnt0eXBlLnR5cGUubmFtZX08L3A+XG4gICAgICAgICAgICApKX1cblxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtdC02IG1iLTIgdGV4dC1jZW50ZXJcIj5BYmlsaXR5OjwvcD5cbiAgICAgICAgICAgIHtwb2tlbWFuLmFiaWxpdGllcy5tYXAoKGFiaWxpdHksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPHAga2V5PVwiaW5kZXhcIj57YWJpbGl0eS5hYmlsaXR5Lm5hbWV9PC9wPlxuICAgICAgICAgICAgKSl9XG5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB1bmRlcmxpbmVcIj5Ib21lPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICBjb25zdCBpZCA9IHF1ZXJ5LmlkO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtpZH1gKTtcbiAgICAgICAgY29uc3QgcG9rZW1hbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIGNvbnN0IHBhZGRlZElkID0gKCcwMCcgKyBpZCkuc2xpY2UoLTMpO1xuICAgICAgICBwb2tlbWFuLmltYWdlID0gYGh0dHBzOi8vYXNzZXRzLnBva2Vtb24uY29tL2Fzc2V0cy9jbXMyL2ltZy9wb2tlZGV4L2RldGFpbC8ke3BhZGRlZElkfS5wbmdgO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvcHM6IHsgcG9rZW1hbiB9LFxuICAgICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiTGluayIsInBva2Vtb24iLCJwb2tlbWFuIiwidGl0bGUiLCJuYW1lIiwiaDEiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInAiLCJzcGFuIiwiaGVpZ2h0Iiwid2VpZ2h0IiwidHlwZXMiLCJtYXAiLCJ0eXBlIiwiaW5kZXgiLCJhYmlsaXRpZXMiLCJhYmlsaXR5IiwiaHJlZiIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pokemon.js\n"));

/***/ })

});
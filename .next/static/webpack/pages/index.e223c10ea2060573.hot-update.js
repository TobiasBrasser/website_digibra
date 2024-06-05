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

/***/ "./components/ListTrain.js":
/*!*********************************!*\
  !*** ./components/ListTrain.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ListTrain.module.css */ \"./components/ListTrain.module.css\");\n/* harmony import */ var _components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst ListTrain = ()=>{\n    _s();\n    const [trains, setTrains] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/data.json\").then((response)=>response.json()).then((data)=>setTrains(data)).catch((error)=>console.error(\"Error loading data:\", error));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default().train_list),\n        children: trains.map((train, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default().train_card),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default().trainImage),\n                        src: \"/images/\".concat(train.Bild),\n                        alt: train.Bezeichnung\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: train.Bezeichnung\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                children: \"Typ:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                                lineNumber: 20,\n                                columnNumber: 14\n                            }, undefined),\n                            \" \",\n                            train.Typ\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                children: \"Hersteller:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                                lineNumber: 21,\n                                columnNumber: 14\n                            }, undefined),\n                            \" \",\n                            train.Hersteller\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                children: \"Zugsgattung:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                                lineNumber: 22,\n                                columnNumber: 14\n                            }, undefined),\n                            \" \",\n                            train.Zugsgattung\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                children: \"Gruppe:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                                lineNumber: 23,\n                                columnNumber: 14\n                            }, undefined),\n                            \" \",\n                            train.Gruppe\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListTrain, \"b108wzI25qLIUDtvQA3yPWDuTsA=\");\n_c = ListTrain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListTrain);\nvar _c;\n$RefreshReg$(_c, \"ListTrain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpc3RUcmFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDSztBQUV4RCxNQUFNSSxZQUFZOztJQUNoQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDUkssTUFBTSxjQUNIQyxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFDOUJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUUwsVUFBVUssT0FDdkJDLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBU0MsUUFBUUQsS0FBSyxDQUFDLHVCQUF1QkE7SUFDekQsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVdiLG9GQUFpQjtrQkFDOUJFLE9BQU9hLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDbEIsOERBQUNMO2dCQUFnQkMsV0FBV2Isb0ZBQWlCOztrQ0FDM0MsOERBQUNtQjt3QkFBSU4sV0FBV2Isb0ZBQWlCO3dCQUFFcUIsS0FBSyxXQUFzQixPQUFYTCxNQUFNTSxJQUFJO3dCQUFJQyxLQUFLUCxNQUFNUSxXQUFXOzs7Ozs7a0NBQ3ZGLDhEQUFDQztrQ0FBSVQsTUFBTVEsV0FBVzs7Ozs7O2tDQUN0Qiw4REFBQ0U7OzBDQUFFLDhEQUFDQztnQ0FBS2QsV0FBV2IsK0VBQVk7MENBQUU7Ozs7Ozs0QkFBVzs0QkFBRWdCLE1BQU1hLEdBQUc7Ozs7Ozs7a0NBQ3hELDhEQUFDSDs7MENBQUUsOERBQUNDO2dDQUFLZCxXQUFXYiwrRUFBWTswQ0FBRTs7Ozs7OzRCQUFrQjs0QkFBRWdCLE1BQU1jLFVBQVU7Ozs7Ozs7a0NBQ3RFLDhEQUFDSjs7MENBQUUsOERBQUNDO2dDQUFLZCxXQUFXYiwrRUFBWTswQ0FBRTs7Ozs7OzRCQUFtQjs0QkFBRWdCLE1BQU1lLFdBQVc7Ozs7Ozs7a0NBQ3hFLDhEQUFDTDs7MENBQUUsOERBQUNDO2dDQUFLZCxXQUFXYiwrRUFBWTswQ0FBRTs7Ozs7OzRCQUFjOzRCQUFFZ0IsTUFBTWdCLE1BQU07Ozs7Ozs7O2VBTnREZjs7Ozs7Ozs7OztBQVdsQjtHQXhCTWhCO0tBQUFBO0FBMEJOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGlzdFRyYWluLmpzPzdjMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0VHJhaW4ubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBMaXN0VHJhaW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RyYWlucywgc2V0VHJhaW5zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKCcvZGF0YS5qc29uJylcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHNldFRyYWlucyhkYXRhKSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgZGF0YTonLCBlcnJvcikpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMudHJhaW5fbGlzdH0+XHJcbiAgICAgIHt0cmFpbnMubWFwKCh0cmFpbiwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17U3R5bGVzLnRyYWluX2NhcmR9PlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e1N0eWxlcy50cmFpbkltYWdlfSBzcmM9e2AvaW1hZ2VzLyR7dHJhaW4uQmlsZH1gfSBhbHQ9e3RyYWluLkJlemVpY2hudW5nfSAvPlxyXG4gICAgICAgICAgPGgyPnt0cmFpbi5CZXplaWNobnVuZ308L2gyPlxyXG4gICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZXMubGFiZWx9PlR5cDo8L3NwYW4+IHt0cmFpbi5UeXB9PC9wPlxyXG4gICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZXMubGFiZWx9PkhlcnN0ZWxsZXI6PC9zcGFuPiB7dHJhaW4uSGVyc3RlbGxlcn08L3A+XHJcbiAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9e1N0eWxlcy5sYWJlbH0+WnVnc2dhdHR1bmc6PC9zcGFuPiB7dHJhaW4uWnVnc2dhdHR1bmd9PC9wPlxyXG4gICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZXMubGFiZWx9PkdydXBwZTo8L3NwYW4+IHt0cmFpbi5HcnVwcGV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0VHJhaW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3R5bGVzIiwiTGlzdFRyYWluIiwidHJhaW5zIiwic2V0VHJhaW5zIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwidHJhaW5fbGlzdCIsIm1hcCIsInRyYWluIiwiaW5kZXgiLCJ0cmFpbl9jYXJkIiwiaW1nIiwidHJhaW5JbWFnZSIsInNyYyIsIkJpbGQiLCJhbHQiLCJCZXplaWNobnVuZyIsImgyIiwicCIsInNwYW4iLCJsYWJlbCIsIlR5cCIsIkhlcnN0ZWxsZXIiLCJadWdzZ2F0dHVuZyIsIkdydXBwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ListTrain.js\n"));

/***/ })

});
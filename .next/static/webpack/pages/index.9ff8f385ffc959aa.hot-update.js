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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/data.json */ \"./public/data.json\");\n/* harmony import */ var _components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ListTrain.module.css */ \"./components/ListTrain.module.css\");\n/* harmony import */ var _components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ListTrain = ()=>{\n    _s();\n    const [trains, setTrains] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/data.json\").then((response)=>response.json()).then((data)=>setTrains(data)).catch((error)=>console.error(\"Error loading data:\", error));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_3___default().trainlist),\n        children: _public_data_json__WEBPACK_IMPORTED_MODULE_2__.map((train, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"train-card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_3___default().trainImage),\n                        src: \"/images/\".concat(train.Bild),\n                        alt: train.Bezeichnung\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: train.Bezeichnung\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Typ: \",\n                            train.Typ\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Hersteller: \",\n                            train.Hersteller\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Zugsgattung: \",\n                            train.Zugsgattung\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Gruppe: \",\n                            train.Gruppe\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\components\\\\ListTrain.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListTrain, \"b108wzI25qLIUDtvQA3yPWDuTsA=\");\n_c = ListTrain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListTrain);\nvar _c;\n$RefreshReg$(_c, \"ListTrain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpc3RUcmFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ21CO0FBQ0Q7QUFDWTtBQUV2RCxNQUFNSyxZQUFZOztJQUVoQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUVyQ0MsZ0RBQVNBLENBQUM7UUFDTk0sTUFBTSxjQUNEQyxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFDOUJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUUwsVUFBVUssT0FDdkJDLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBU0MsUUFBUUQsS0FBSyxDQUFDLHVCQUF1QkE7SUFDN0QsR0FBRyxFQUFFO0lBQ1AscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVdiLG1GQUFnQjtrQkFDN0JELGtEQUFhLENBQUMsQ0FBQ2lCLE9BQU9DLHNCQUNyQiw4REFBQ0w7Z0JBQWdCQyxXQUFVOztrQ0FDekIsOERBQUNLO3dCQUFJTCxXQUFXYixvRkFBaUI7d0JBQUVvQixLQUFLLFdBQXNCLE9BQVhKLE1BQU1LLElBQUk7d0JBQUlDLEtBQUtOLE1BQU1PLFdBQVc7Ozs7OztrQ0FDdkYsOERBQUNDO2tDQUFJUixNQUFNTyxXQUFXOzs7Ozs7a0NBQ3RCLDhEQUFDRTs7NEJBQUU7NEJBQU1ULE1BQU1VLEdBQUc7Ozs7Ozs7a0NBQ2xCLDhEQUFDRDs7NEJBQUU7NEJBQWFULE1BQU1XLFVBQVU7Ozs7Ozs7a0NBQ2hDLDhEQUFDRjs7NEJBQUU7NEJBQWNULE1BQU1ZLFdBQVc7Ozs7Ozs7a0NBQ2xDLDhEQUFDSDs7NEJBQUU7NEJBQVNULE1BQU1hLE1BQU07Ozs7Ozs7O2VBTmhCWjs7Ozs7Ozs7OztBQVdsQjtHQXhCTWhCO0tBQUFBO0FBNkJOLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGlzdFRyYWluLmpzPzdjMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdHJhaW5EYXRhIGZyb20gJy4uL3B1YmxpYy9kYXRhLmpzb24nXHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0VHJhaW4ubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IExpc3RUcmFpbiA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW3RyYWlucywgc2V0VHJhaW5zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCcvZGF0YS5qc29uJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHNldFRyYWlucyhkYXRhKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgZGF0YTonLCBlcnJvcikpO1xyXG4gICAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnRyYWlubGlzdH0+XHJcbiAgICAgIHt0cmFpbkRhdGEubWFwKCh0cmFpbiwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInRyYWluLWNhcmRcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtTdHlsZXMudHJhaW5JbWFnZX0gc3JjPXtgL2ltYWdlcy8ke3RyYWluLkJpbGR9YH0gYWx0PXt0cmFpbi5CZXplaWNobnVuZ30gLz5cclxuICAgICAgICAgIDxoMj57dHJhaW4uQmV6ZWljaG51bmd9PC9oMj5cclxuICAgICAgICAgIDxwPlR5cDoge3RyYWluLlR5cH08L3A+XHJcbiAgICAgICAgICA8cD5IZXJzdGVsbGVyOiB7dHJhaW4uSGVyc3RlbGxlcn08L3A+XHJcbiAgICAgICAgICA8cD5adWdzZ2F0dHVuZzoge3RyYWluLlp1Z3NnYXR0dW5nfTwvcD5cclxuICAgICAgICAgIDxwPkdydXBwZToge3RyYWluLkdydXBwZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RUcmFpblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRyYWluRGF0YSIsIlN0eWxlcyIsIkxpc3RUcmFpbiIsInRyYWlucyIsInNldFRyYWlucyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsInRyYWlubGlzdCIsIm1hcCIsInRyYWluIiwiaW5kZXgiLCJpbWciLCJ0cmFpbkltYWdlIiwic3JjIiwiQmlsZCIsImFsdCIsIkJlemVpY2hudW5nIiwiaDIiLCJwIiwiVHlwIiwiSGVyc3RlbGxlciIsIlp1Z3NnYXR0dW5nIiwiR3J1cHBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ListTrain.js\n"));

/***/ })

});
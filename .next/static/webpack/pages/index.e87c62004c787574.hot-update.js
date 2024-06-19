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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ListTrain.module.css */ \"./components/ListTrain.module.css\");\n/* harmony import */ var _components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/data.json */ \"./public/data.json\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ListTrain = ()=>{\n    _s();\n    const [trains, setTrains] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [displayedCount, setDisplayedCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(9);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/data.json\").then((response)=>response.json()).then((data)=>setTrains(data)).catch((error)=>console.error(\"Error loading data:\", error));\n    }, []);\n    const handleSearchChange = (event)=>{\n        setSearchTerm(event.target.value);\n    };\n    const handleShowMore = ()=>{\n        setDisplayedCount((prevCount)=>prevCount + 9);\n    };\n    const handleFilter = ()=>{\n        // Filter logic for all fields\n        // For simplicity, we'll just check if any field contains the search term\n        setTrains((prevTrains)=>prevTrains.filter((train)=>Object.values(train).some((value)=>value.toString().toLowerCase().includes(searchTerm.toLowerCase()))));\n    };\n    const filteredTrains = trains.filter((train)=>train.Bezeichnung.toLowerCase().includes(searchTerm.toLowerCase()) || train.Typ.toLowerCase().includes(searchTerm.toLowerCase()) || train.Hersteller.toLowerCase().includes(searchTerm.toLowerCase()) || train.Zugsgattung.toLowerCase().includes(searchTerm.toLowerCase()) || train.Gruppe.toLowerCase().includes(searchTerm.toLowerCase()));\n    const displayedTrains = filteredTrains.slice(0, displayedCount);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Search...\",\n                value: searchTerm,\n                onChange: handleSearchChange,\n                className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchInput)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleFilter,\n                className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default().filterButton),\n                children: \"Filter\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\pages\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default().trainList),\n                children: displayedTrains.map((train, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default().trainCard),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default().trainImage),\n                                src: \"/images/\".concat(train.Bild),\n                                alt: train.Bezeichnung\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\pages\\\\index.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: train.Bezeichnung\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\pages\\\\index.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                        children: \"Typ:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\pages\\\\index.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 16\n                                    }, undefined),\n                                    \" \",\n                                    train.Typ\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\pages\\\\index.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                        children: \"Hersteller:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\pages\\\\index.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 16\n                                    }, undefined),\n                                    \" \",\n                                    train.Hersteller\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\pages\\\\index.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                        children: \"Zugsgattung:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\pages\\\\index.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 16\n                                    }, undefined),\n                                    \" \",\n                                    train.Zugsgattung\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\pages\\\\index.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                        children: \"Gruppe:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\pages\\\\index.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 16\n                                    }, undefined),\n                                    \" \",\n                                    train.Gruppe\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\pages\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\pages\\\\index.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\pages\\\\index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            filteredTrains.length > displayedCount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleShowMore,\n                className: (_components_ListTrain_module_css__WEBPACK_IMPORTED_MODULE_2___default().showMoreButton),\n                children: \"Mehr Anzeigen\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\pages\\\\index.js\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tobia\\\\OneDrive\\\\Desktop\\\\Privat\\\\digibra_react2\\\\pages\\\\index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListTrain, \"bcEaZwPW39Dl1AZlld3TjgiOuAE=\");\n_c = ListTrain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListTrain);\nvar _c;\n$RefreshReg$(_c, \"ListTrain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O29DQUFtQjtvQ0FBRTBCLE1BQU1XLFdBQVc7Ozs7Ozs7MENBQ3hFLDhEQUFDd0I7O2tEQUFFLDhEQUFDQzt3Q0FBS2hCLFdBQVc5QywrRUFBWTtrREFBRTs7Ozs7O29DQUFjO29DQUFFMEIsTUFBTVksTUFBTTs7Ozs7Ozs7dUJBTnREZTs7Ozs7Ozs7OztZQVVicEIsZUFBZStCLE1BQU0sR0FBR3pELGdDQUN2Qiw4REFBQ3lDO2dCQUFPQyxTQUFTNUI7Z0JBQWdCeUIsV0FBVzlDLHdGQUFxQjswQkFBRTs7Ozs7Ozs7Ozs7O0FBSTNFO0dBckVNRTtLQUFBQTtBQXVFTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdFRyYWluLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgdHJhaW5EYXRhIGZyb20gJy4uL3B1YmxpYy9kYXRhLmpzb24nO1xyXG5cclxuY29uc3QgTGlzdFRyYWluID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0cmFpbnMsIHNldFRyYWluc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkaXNwbGF5ZWRDb3VudCwgc2V0RGlzcGxheWVkQ291bnRdID0gdXNlU3RhdGUoOSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaCgnL2RhdGEuanNvbicpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiBzZXRUcmFpbnMoZGF0YSkpXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGRhdGE6JywgZXJyb3IpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dNb3JlID0gKCkgPT4ge1xyXG4gICAgc2V0RGlzcGxheWVkQ291bnQocHJldkNvdW50ID0+IHByZXZDb3VudCArIDkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpbHRlciA9ICgpID0+IHtcclxuICAgIC8vIEZpbHRlciBsb2dpYyBmb3IgYWxsIGZpZWxkc1xyXG4gICAgLy8gRm9yIHNpbXBsaWNpdHksIHdlJ2xsIGp1c3QgY2hlY2sgaWYgYW55IGZpZWxkIGNvbnRhaW5zIHRoZSBzZWFyY2ggdGVybVxyXG4gICAgc2V0VHJhaW5zKHByZXZUcmFpbnMgPT5cclxuICAgICAgcHJldlRyYWlucy5maWx0ZXIodHJhaW4gPT5cclxuICAgICAgICBPYmplY3QudmFsdWVzKHRyYWluKS5zb21lKHZhbHVlID0+XHJcbiAgICAgICAgICB2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmaWx0ZXJlZFRyYWlucyA9IHRyYWlucy5maWx0ZXIodHJhaW4gPT5cclxuICAgIHRyYWluLkJlemVpY2hudW5nLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgdHJhaW4uVHlwLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgdHJhaW4uSGVyc3RlbGxlci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIHRyYWluLlp1Z3NnYXR0dW5nLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgdHJhaW4uR3J1cHBlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRpc3BsYXllZFRyYWlucyA9IGZpbHRlcmVkVHJhaW5zLnNsaWNlKDAsIGRpc3BsYXllZENvdW50KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgXHJcbiAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19IFxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9IFxyXG4gICAgICAgIGNsYXNzTmFtZT17U3R5bGVzLnNlYXJjaElucHV0fVxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUZpbHRlcn0gY2xhc3NOYW1lPXtTdHlsZXMuZmlsdGVyQnV0dG9ufT5GaWx0ZXI8L2J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy50cmFpbkxpc3R9PlxyXG4gICAgICAgIHtkaXNwbGF5ZWRUcmFpbnMubWFwKCh0cmFpbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtTdHlsZXMudHJhaW5DYXJkfT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e1N0eWxlcy50cmFpbkltYWdlfSBzcmM9e2AvaW1hZ2VzLyR7dHJhaW4uQmlsZH1gfSBhbHQ9e3RyYWluLkJlemVpY2hudW5nfSAvPlxyXG4gICAgICAgICAgICA8aDI+e3RyYWluLkJlemVpY2hudW5nfTwvaDI+XHJcbiAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT17U3R5bGVzLmxhYmVsfT5UeXA6PC9zcGFuPiB7dHJhaW4uVHlwfTwvcD5cclxuICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPXtTdHlsZXMubGFiZWx9PkhlcnN0ZWxsZXI6PC9zcGFuPiB7dHJhaW4uSGVyc3RlbGxlcn08L3A+XHJcbiAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT17U3R5bGVzLmxhYmVsfT5adWdzZ2F0dHVuZzo8L3NwYW4+IHt0cmFpbi5adWdzZ2F0dHVuZ308L3A+XHJcbiAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT17U3R5bGVzLmxhYmVsfT5HcnVwcGU6PC9zcGFuPiB7dHJhaW4uR3J1cHBlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2ZpbHRlcmVkVHJhaW5zLmxlbmd0aCA+IGRpc3BsYXllZENvdW50ICYmIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNob3dNb3JlfSBjbGFzc05hbWU9e1N0eWxlcy5zaG93TW9yZUJ1dHRvbn0+TWVociBBbnplaWdlbjwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RUcmFpbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTdHlsZXMiLCJ0cmFpbkRhdGEiLCJMaXN0VHJhaW4iLCJ0cmFpbnMiLCJzZXRUcmFpbnMiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImRpc3BsYXllZENvdW50Iiwic2V0RGlzcGxheWVkQ291bnQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2hvd01vcmUiLCJwcmV2Q291bnQiLCJoYW5kbGVGaWx0ZXIiLCJwcmV2VHJhaW5zIiwiZmlsdGVyIiwidHJhaW4iLCJPYmplY3QiLCJ2YWx1ZXMiLCJzb21lIiwidG9TdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZmlsdGVyZWRUcmFpbnMiLCJCZXplaWNobnVuZyIsIlR5cCIsIkhlcnN0ZWxsZXIiLCJadWdzZ2F0dHVuZyIsIkdydXBwZSIsImRpc3BsYXllZFRyYWlucyIsInNsaWNlIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsInNlYXJjaElucHV0IiwiYnV0dG9uIiwib25DbGljayIsImZpbHRlckJ1dHRvbiIsInRyYWluTGlzdCIsIm1hcCIsImluZGV4IiwidHJhaW5DYXJkIiwiaW1nIiwidHJhaW5JbWFnZSIsInNyYyIsIkJpbGQiLCJhbHQiLCJoMiIsInAiLCJzcGFuIiwibGFiZWwiLCJsZW5ndGgiLCJzaG93TW9yZUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
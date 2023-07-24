"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/activeAccount",{

/***/ "./src/pages/activeAccount/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/activeAccount/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ActiveAccount; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/buttons */ \"./src/components/buttons.tsx\");\n/* harmony import */ var _components_texts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/texts */ \"./src/components/texts.tsx\");\n/* harmony import */ var _store_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/User */ \"./src/store/User.tsx\");\n/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @phosphor-icons/react */ \"./node_modules/@phosphor-icons/react/dist/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ActiveAccount() {\n    _s();\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        0: \"\",\n        1: \"\",\n        2: \"\",\n        3: \"\"\n    });\n    const inputRefs = [\n        (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null)\n    ];\n    const [loadingResetActiveAccount, setLoadingResetActiveAccount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const emailUser = localStorage.getItem(\"@emailUser\");\n    async function activeAccount() {\n        setLoadingResetActiveAccount(true);\n        const codeActiveAccount = code[0] + code[1] + code[2] + code[3].toString();\n        const returnActiveAccount = await (0,_store_User__WEBPACK_IMPORTED_MODULE_3__.activeAccountUser)({\n            code: parseInt(codeActiveAccount)\n        });\n        if (returnActiveAccount) {\n            setLoadingResetActiveAccount(false);\n            window.location.replace(\"/\");\n        }\n    }\n    function handleChangeCode(index, event) {\n        const { value } = event.target;\n        if (/^\\d*$/.test(value) && value.length <= 1) {\n            const newCode = {\n                ...code\n            };\n            newCode[index] = value;\n            setCode(newCode);\n            if (value.length === 1 && index < 3) {\n                var _inputRefs__current;\n                (_inputRefs__current = inputRefs[index + 1].current) === null || _inputRefs__current === void 0 ? void 0 : _inputRefs__current.focus();\n            }\n        } else if (value.length === 0) {\n            if (index > 0) {\n                var _inputRefs__current1;\n                const newCode = {\n                    ...code\n                };\n                newCode[index] = value;\n                setCode(newCode);\n                (_inputRefs__current1 = inputRefs[index - 1].current) === null || _inputRefs__current1 === void 0 ? void 0 : _inputRefs__current1.focus();\n            }\n        }\n    }\n    function handleKeyDown(index, event) {\n        if (event.key === \"Backspace\" && index > 0 && code[index] === \"\") {\n            inputRefs[index - 1].current.focus();\n        }\n    }\n    async function resetActiveAccount() {\n        if (emailUser) {\n            setLoadingResetActiveAccount(true);\n            const returnResetEmailActiveAccountUser = await (0,_store_User__WEBPACK_IMPORTED_MODULE_3__.resetSendEmailActiveAccountUser)(emailUser);\n            if (returnResetEmailActiveAccountUser) {\n                setLoadingResetActiveAccount(false);\n            }\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        var _inputRefs__current;\n        (_inputRefs__current = inputRefs[0].current) === null || _inputRefs__current === void 0 ? void 0 : _inputRefs__current.focus();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex justify-center items-center gap-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[40%] m-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"logomarca.png\",\n                        className: \"h-[5%] absolute top-4 ml-5\"\n                    }, void 0, false, {\n                        fileName: \"/home/yuri/Documentos/Inside Systems/003 Projetos/authentication_project/authentication_project_front-end/src/pages/activeAccount/index.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[70%] m-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_texts__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                                title: \"Ativar Conta\"\n                            }, void 0, false, {\n                                fileName: \"/home/yuri/Documentos/Inside Systems/003 Projetos/authentication_project/authentication_project_front-end/src/pages/activeAccount/index.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-max m-auto\",\n                                children: Array.from({\n                                    length: 4\n                                }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ref: inputRefs[index],\n                                        value: code[index],\n                                        maxLength: 1,\n                                        className: \"border ml-1 mr-1 border-black w-14 h-14 text-center text-2xl font-bold\",\n                                        onChange: (e)=>handleChangeCode(index, e),\n                                        onKeyDown: (e)=>handleKeyDown(index, e)\n                                    }, index, false, {\n                                        fileName: \"/home/yuri/Documentos/Inside Systems/003 Projetos/authentication_project/authentication_project_front-end/src/pages/activeAccount/index.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/home/yuri/Documentos/Inside Systems/003 Projetos/authentication_project/authentication_project_front-end/src/pages/activeAccount/index.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-3 text-center\",\n                                children: loadingResetActiveAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"flex justify-center items-center gap-2\",\n                                    children: [\n                                        \"Carregando\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_5__.SpinnerGap, {\n                                            size: 32,\n                                            className: \"animate-spin\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/yuri/Documentos/Inside Systems/003 Projetos/authentication_project/authentication_project_front-end/src/pages/activeAccount/index.tsx\",\n                                            lineNumber: 110,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/yuri/Documentos/Inside Systems/003 Projetos/authentication_project/authentication_project_front-end/src/pages/activeAccount/index.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cursor-pointer hover:underline\",\n                                    onClick: resetActiveAccount,\n                                    children: \"N\\xe3o recebeu? Reenviar\"\n                                }, void 0, false, {\n                                    fileName: \"/home/yuri/Documentos/Inside Systems/003 Projetos/authentication_project/authentication_project_front-end/src/pages/activeAccount/index.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/yuri/Documentos/Inside Systems/003 Projetos/authentication_project/authentication_project_front-end/src/pages/activeAccount/index.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"lg:w-full flex justify-center items-center mt-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_buttons__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    title: \"Ativar Conta\",\n                                    onClick: activeAccount\n                                }, void 0, false, {\n                                    fileName: \"/home/yuri/Documentos/Inside Systems/003 Projetos/authentication_project/authentication_project_front-end/src/pages/activeAccount/index.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/yuri/Documentos/Inside Systems/003 Projetos/authentication_project/authentication_project_front-end/src/pages/activeAccount/index.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yuri/Documentos/Inside Systems/003 Projetos/authentication_project/authentication_project_front-end/src/pages/activeAccount/index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yuri/Documentos/Inside Systems/003 Projetos/authentication_project/authentication_project_front-end/src/pages/activeAccount/index.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[60%] m-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"image.png\",\n                    className: \"w-full h-screen\"\n                }, void 0, false, {\n                    fileName: \"/home/yuri/Documentos/Inside Systems/003 Projetos/authentication_project/authentication_project_front-end/src/pages/activeAccount/index.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/yuri/Documentos/Inside Systems/003 Projetos/authentication_project/authentication_project_front-end/src/pages/activeAccount/index.tsx\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yuri/Documentos/Inside Systems/003 Projetos/authentication_project/authentication_project_front-end/src/pages/activeAccount/index.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(ActiveAccount, \"vgfP2ulN8em4gqgHJTorm7+4VwU=\");\n_c = ActiveAccount;\nvar _c;\n$RefreshReg$(_c, \"ActiveAccount\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWN0aXZlQWNjb3VudC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDNkM7QUFDSDtBQUlyQjtBQUM2QjtBQUNRO0FBTTNDLFNBQVNTOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQVk7UUFDMUMsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztJQUNMO0lBQ0EsTUFBTUksWUFBaUI7UUFDckJMLDZDQUFNQSxDQUFtQjtRQUN6QkEsNkNBQU1BLENBQW1CO1FBQ3pCQSw2Q0FBTUEsQ0FBbUI7UUFDekJBLDZDQUFNQSxDQUFtQjtLQUMxQjtJQUNELE1BQU0sQ0FBQ00sMkJBQTJCQyw2QkFBNkIsR0FDN0ROLCtDQUFRQSxDQUFVO0lBQ3BCLE1BQU1PLFlBQVlDLGFBQWFDLE9BQU8sQ0FBQztJQUV2QyxlQUFlQztRQUNiSiw2QkFBNkI7UUFDN0IsTUFBTUssb0JBQW9CVCxJQUFJLENBQUMsRUFBRSxHQUFHQSxJQUFJLENBQUMsRUFBRSxHQUFHQSxJQUFJLENBQUMsRUFBRSxHQUFHQSxJQUFJLENBQUMsRUFBRSxDQUFDVSxRQUFRO1FBQ3hFLE1BQU1DLHNCQUFzQixNQUFNbkIsOERBQWlCQSxDQUFDO1lBQ2xEUSxNQUFNWSxTQUFTSDtRQUNqQjtRQUNBLElBQUlFLHFCQUFxQjtZQUN2QlAsNkJBQTZCO1lBQzdCUyxPQUFPQyxRQUFRLENBQUNDLE9BQU8sQ0FBQztRQUMxQjtJQUNGO0lBQ0EsU0FBU0MsaUJBQ1BDLEtBQWEsRUFDYkMsS0FBMEM7UUFFMUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0QsTUFBTUUsTUFBTTtRQUU5QixJQUFJLFFBQVFDLElBQUksQ0FBQ0YsVUFBVUEsTUFBTUcsTUFBTSxJQUFJLEdBQUc7WUFDNUMsTUFBTUMsVUFBVTtnQkFBRSxHQUFHdkIsSUFBSTtZQUFDO1lBQzFCdUIsT0FBTyxDQUFDTixNQUFNLEdBQUdFO1lBQ2pCbEIsUUFBUXNCO1lBRVIsSUFBSUosTUFBTUcsTUFBTSxLQUFLLEtBQUtMLFFBQVEsR0FBRztvQkFDbkNmO2lCQUFBQSxzQkFBQUEsU0FBUyxDQUFDZSxRQUFRLEVBQUUsQ0FBQ08sT0FBTyxjQUE1QnRCLDBDQUFBQSxvQkFBOEJ1QixLQUFLO1lBQ3JDO1FBQ0YsT0FBTyxJQUFJTixNQUFNRyxNQUFNLEtBQUssR0FBRztZQUM3QixJQUFJTCxRQUFRLEdBQUc7b0JBSWJmO2dCQUhBLE1BQU1xQixVQUFVO29CQUFFLEdBQUd2QixJQUFJO2dCQUFDO2dCQUMxQnVCLE9BQU8sQ0FBQ04sTUFBTSxHQUFHRTtnQkFDakJsQixRQUFRc0I7aUJBQ1JyQix1QkFBQUEsU0FBUyxDQUFDZSxRQUFRLEVBQUUsQ0FBQ08sT0FBTyxjQUE1QnRCLDJDQUFBQSxxQkFBOEJ1QixLQUFLO1lBQ3JDO1FBQ0Y7SUFDRjtJQUNBLFNBQVNDLGNBQWNULEtBQWEsRUFBRUMsS0FBVTtRQUM5QyxJQUFJQSxNQUFNUyxHQUFHLEtBQUssZUFBZVYsUUFBUSxLQUFLakIsSUFBSSxDQUFDaUIsTUFBTSxLQUFLLElBQUk7WUFDaEVmLFNBQVMsQ0FBQ2UsUUFBUSxFQUFFLENBQUNPLE9BQU8sQ0FBQ0MsS0FBSztRQUNwQztJQUNGO0lBQ0EsZUFBZUc7UUFDYixJQUFJdkIsV0FBVztZQUNiRCw2QkFBNkI7WUFDN0IsTUFBTXlCLG9DQUNKLE1BQU1wQyw0RUFBK0JBLENBQUNZO1lBQ3hDLElBQUl3QixtQ0FBbUM7Z0JBQ3JDekIsNkJBQTZCO1lBQy9CO1FBQ0Y7SUFDRjtJQUVBUixnREFBU0EsQ0FBQztZQUNSTTtTQUFBQSxzQkFBQUEsU0FBUyxDQUFDLEVBQUUsQ0FBQ3NCLE9BQU8sY0FBcEJ0QiwwQ0FBQUEsb0JBQXNCdUIsS0FBSztJQUM3QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0s7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUlDLEtBQUk7d0JBQWdCSCxXQUFVOzs7Ozs7a0NBQ25DLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUN4QyxvREFBS0E7Z0NBQUM0QyxPQUFNOzs7Ozs7MENBQ2IsOERBQUNIO2dDQUFJRCxXQUFVOzBDQUNaSyxNQUFNQyxJQUFJLENBQUM7b0NBQUVmLFFBQVE7Z0NBQUUsR0FBR2dCLEdBQUcsQ0FBQyxDQUFDQyxHQUFHdEIsc0JBQ2pDLDhEQUFDdUI7d0NBRUNDLEtBQUt2QyxTQUFTLENBQUNlLE1BQU07d0NBQ3JCRSxPQUFPbkIsSUFBSSxDQUFDaUIsTUFBTTt3Q0FDbEJ5QixXQUFXO3dDQUNYWCxXQUFVO3dDQUNWWSxVQUFVQyxDQUFBQSxJQUFLNUIsaUJBQWlCQyxPQUFPMkI7d0NBQ3ZDQyxXQUFXRCxDQUFBQSxJQUFLbEIsY0FBY1QsT0FBTzJCO3VDQU5oQzNCOzs7Ozs7Ozs7OzBDQVdYLDhEQUFDZTtnQ0FBSUQsV0FBVTswQ0FDWjVCLDBDQUNDLDhEQUFDMkM7b0NBQUVmLFdBQVU7O3dDQUF5QztzREFFcEQsOERBQUNyQyw2REFBVUE7NENBQUNxRCxNQUFNOzRDQUFJaEIsV0FBVTs7Ozs7Ozs7Ozs7eURBR2xDLDhEQUFDZTtvQ0FDQ2YsV0FBVTtvQ0FDVmlCLFNBQVNwQjs4Q0FDVjs7Ozs7Ozs7Ozs7MENBTUwsOERBQUNJO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDekMsdURBQU1BO29DQUFDNkMsT0FBTTtvQ0FBZWEsU0FBU3hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJNUMsOERBQUN3QjtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQUlDLEtBQUk7b0JBQVlILFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZDO0dBckh3QmhDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hY3RpdmVBY2NvdW50L2luZGV4LnRzeD84YTk0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL2J1dHRvbnMnXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0AvY29tcG9uZW50cy90ZXh0cydcbmltcG9ydCB7XG4gIGFjdGl2ZUFjY291bnRVc2VyLFxuICByZXNldFNlbmRFbWFpbEFjdGl2ZUFjY291bnRVc2VyXG59IGZyb20gJ0Avc3RvcmUvVXNlcidcbmltcG9ydCB7IFNwaW5uZXJHYXAgfSBmcm9tICdAcGhvc3Bob3ItaWNvbnMvcmVhY3QnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmludGVyZmFjZSBDb2RlU3RhdGUge1xuICBbaW5kZXg6IG51bWJlcl06IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3RpdmVBY2NvdW50KCkge1xuICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZTxDb2RlU3RhdGU+KHtcbiAgICAwOiAnJyxcbiAgICAxOiAnJyxcbiAgICAyOiAnJyxcbiAgICAzOiAnJ1xuICB9KVxuICBjb25zdCBpbnB1dFJlZnM6IGFueSA9IFtcbiAgICB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCksXG4gICAgdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpLFxuICAgIHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKSxcbiAgICB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbClcbiAgXVxuICBjb25zdCBbbG9hZGluZ1Jlc2V0QWN0aXZlQWNjb3VudCwgc2V0TG9hZGluZ1Jlc2V0QWN0aXZlQWNjb3VudF0gPVxuICAgIHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICBjb25zdCBlbWFpbFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQGVtYWlsVXNlcicpXG5cbiAgYXN5bmMgZnVuY3Rpb24gYWN0aXZlQWNjb3VudCgpIHtcbiAgICBzZXRMb2FkaW5nUmVzZXRBY3RpdmVBY2NvdW50KHRydWUpXG4gICAgY29uc3QgY29kZUFjdGl2ZUFjY291bnQgPSBjb2RlWzBdICsgY29kZVsxXSArIGNvZGVbMl0gKyBjb2RlWzNdLnRvU3RyaW5nKClcbiAgICBjb25zdCByZXR1cm5BY3RpdmVBY2NvdW50ID0gYXdhaXQgYWN0aXZlQWNjb3VudFVzZXIoe1xuICAgICAgY29kZTogcGFyc2VJbnQoY29kZUFjdGl2ZUFjY291bnQpXG4gICAgfSlcbiAgICBpZiAocmV0dXJuQWN0aXZlQWNjb3VudCkge1xuICAgICAgc2V0TG9hZGluZ1Jlc2V0QWN0aXZlQWNjb3VudChmYWxzZSlcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvJylcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlQ29kZShcbiAgICBpbmRleDogbnVtYmVyLFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxuICApIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXRcblxuICAgIGlmICgvXlxcZCokLy50ZXN0KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPD0gMSkge1xuICAgICAgY29uc3QgbmV3Q29kZSA9IHsgLi4uY29kZSB9XG4gICAgICBuZXdDb2RlW2luZGV4XSA9IHZhbHVlXG4gICAgICBzZXRDb2RlKG5ld0NvZGUpXG5cbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEgJiYgaW5kZXggPCAzKSB7XG4gICAgICAgIGlucHV0UmVmc1tpbmRleCArIDFdLmN1cnJlbnQ/LmZvY3VzKClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBjb25zdCBuZXdDb2RlID0geyAuLi5jb2RlIH1cbiAgICAgICAgbmV3Q29kZVtpbmRleF0gPSB2YWx1ZVxuICAgICAgICBzZXRDb2RlKG5ld0NvZGUpXG4gICAgICAgIGlucHV0UmVmc1tpbmRleCAtIDFdLmN1cnJlbnQ/LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihpbmRleDogbnVtYmVyLCBldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScgJiYgaW5kZXggPiAwICYmIGNvZGVbaW5kZXhdID09PSAnJykge1xuICAgICAgaW5wdXRSZWZzW2luZGV4IC0gMV0uY3VycmVudC5mb2N1cygpXG4gICAgfVxuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIHJlc2V0QWN0aXZlQWNjb3VudCgpIHtcbiAgICBpZiAoZW1haWxVc2VyKSB7XG4gICAgICBzZXRMb2FkaW5nUmVzZXRBY3RpdmVBY2NvdW50KHRydWUpXG4gICAgICBjb25zdCByZXR1cm5SZXNldEVtYWlsQWN0aXZlQWNjb3VudFVzZXIgPVxuICAgICAgICBhd2FpdCByZXNldFNlbmRFbWFpbEFjdGl2ZUFjY291bnRVc2VyKGVtYWlsVXNlcilcbiAgICAgIGlmIChyZXR1cm5SZXNldEVtYWlsQWN0aXZlQWNjb3VudFVzZXIpIHtcbiAgICAgICAgc2V0TG9hZGluZ1Jlc2V0QWN0aXZlQWNjb3VudChmYWxzZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlucHV0UmVmc1swXS5jdXJyZW50Py5mb2N1cygpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNDAlXSBtLWF1dG9cIj5cbiAgICAgICAgPGltZyBzcmM9XCJsb2dvbWFyY2EucG5nXCIgY2xhc3NOYW1lPVwiaC1bNSVdIGFic29sdXRlIHRvcC00IG1sLTVcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzcwJV0gbS1hdXRvXCI+XG4gICAgICAgICAgPFRpdGxlIHRpdGxlPVwiQXRpdmFyIENvbnRhXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctbWF4IG0tYXV0b1wiPlxuICAgICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDQgfSkubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZzW2luZGV4XX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29kZVtpbmRleF19XG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBtbC0xIG1yLTEgYm9yZGVyLWJsYWNrIHctMTQgaC0xNCB0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LWJvbGRcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUNoYW5nZUNvZGUoaW5kZXgsIGUpfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBoYW5kbGVLZXlEb3duKGluZGV4LCBlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICB7bG9hZGluZ1Jlc2V0QWN0aXZlQWNjb3VudCA/IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICBDYXJyZWdhbmRvXG4gICAgICAgICAgICAgICAgPFNwaW5uZXJHYXAgc2l6ZT17MzJ9IGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpblwiIC8+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZXNldEFjdGl2ZUFjY291bnR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBOw6NvIHJlY2ViZXU/IFJlZW52aWFyXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC01XCI+XG4gICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiQXRpdmFyIENvbnRhXCIgb25DbGljaz17YWN0aXZlQWNjb3VudH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNjAlXSBtLWF1dG9cIj5cbiAgICAgICAgPGltZyBzcmM9XCJpbWFnZS5wbmdcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW5cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiVGl0bGUiLCJhY3RpdmVBY2NvdW50VXNlciIsInJlc2V0U2VuZEVtYWlsQWN0aXZlQWNjb3VudFVzZXIiLCJTcGlubmVyR2FwIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkFjdGl2ZUFjY291bnQiLCJjb2RlIiwic2V0Q29kZSIsImlucHV0UmVmcyIsImxvYWRpbmdSZXNldEFjdGl2ZUFjY291bnQiLCJzZXRMb2FkaW5nUmVzZXRBY3RpdmVBY2NvdW50IiwiZW1haWxVc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFjdGl2ZUFjY291bnQiLCJjb2RlQWN0aXZlQWNjb3VudCIsInRvU3RyaW5nIiwicmV0dXJuQWN0aXZlQWNjb3VudCIsInBhcnNlSW50Iiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiaGFuZGxlQ2hhbmdlQ29kZSIsImluZGV4IiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsInRlc3QiLCJsZW5ndGgiLCJuZXdDb2RlIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlS2V5RG93biIsImtleSIsInJlc2V0QWN0aXZlQWNjb3VudCIsInJldHVyblJlc2V0RW1haWxBY3RpdmVBY2NvdW50VXNlciIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJpbWciLCJzcmMiLCJ0aXRsZSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsIl8iLCJpbnB1dCIsInJlZiIsIm1heExlbmd0aCIsIm9uQ2hhbmdlIiwiZSIsIm9uS2V5RG93biIsInAiLCJzaXplIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/activeAccount/index.tsx\n"));

/***/ })

});
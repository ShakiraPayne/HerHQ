"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/createContext.js":
/*!**********************************!*\
  !*** ./context/createContext.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MyContext: function() { return /* binding */ MyContext; },\n/* harmony export */   MyContextProvider: function() { return /* binding */ MyContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst MyContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst MyContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const addAsync = async (cart)=>{\n        let toAd = await JSON.parse(cart);\n        console.log(toAd);\n        setProducts(toAd);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const cart = localStorage.getItem(\"cart\");\n        if (cart) {\n            addAsync(cart);\n        }\n    }, []);\n    const toggleCart = (pd)=>{\n        let data = products[pd.id];\n        let toAd;\n        if (data == undefined) {\n            pd.size = \"S\";\n            pd.cart = !pd.cart;\n            pd.quantity = 1;\n            toAd = {\n                ...products,\n                [pd.id]: pd\n            };\n            setProducts(toAd);\n        } else {\n            data.cart = !data.cart;\n            toAd = {\n                ...products,\n                [pd.id]: data\n            };\n            setProducts(toAd);\n        }\n        localStorage.setItem(\"cart\", JSON.stringify(toAd));\n    };\n    const sizeUpdate = (id, size)=>{\n        let data = products[id];\n        data.size = size;\n        let toAd = {\n            ...products,\n            [id]: data\n        };\n        setProducts(toAd);\n        localStorage.setItem(\"cart\", JSON.stringify(toAd));\n    };\n    const qtyUpdate = (id, qty)=>{\n        let data = products[id];\n        data.quantity = qty;\n        let toAd = {\n            ...products,\n            [id]: data\n        };\n        setProducts(toAd);\n        localStorage.setItem(\"cart\", JSON.stringify(toAd));\n    };\n    const toggleWishlist = (pd)=>{\n        let toAd;\n        let data = products[pd.id];\n        if (data == undefined) {\n            pd.liked = !pd.liked;\n            pd.quantity = 1;\n            pd.size = \"S\";\n            toAd = {\n                ...products,\n                [pd.id]: pd\n            };\n            setProducts(toAd);\n        } else {\n            data.liked = !data.liked;\n            toAd = {\n                ...products,\n                [pd.id]: data\n            };\n            setProducts(toAd);\n        }\n        localStorage.setItem(\"cart\", JSON.stringify(toAd));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyContext.Provider, {\n        value: {\n            products,\n            toggleCart,\n            toggleWishlist,\n            sizeUpdate,\n            qtyUpdate\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/heartless/Development/Web_Development/Nextjs/Processing/herhq/context/createContext.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MyContextProvider, \"X5Try+RXHTypUlZfLnREe8FV2q0=\");\n_c = MyContextProvider;\n\nvar _c;\n$RefreshReg$(_c, \"MyContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUM7UUFBVTtrQkFDdEZ0Qjs7Ozs7O0FBR1A7R0ExRU1EO0tBQUFBO0FBNEVrQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L2NyZWF0ZUNvbnRleHQuanM/NjU1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTXlDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBNeUNvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBhZGRBc3luYyA9IGFzeW5jIChjYXJ0KT0+e1xuICAgIGxldCB0b0FkID0gYXdhaXQgSlNPTi5wYXJzZShjYXJ0KTtcbiAgICBjb25zb2xlLmxvZyh0b0FkKTtcbiAgICBzZXRQcm9kdWN0cyh0b0FkKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0Jyk7XG4gICAgaWYoY2FydCl7XG4gICAgICBhZGRBc3luYyhjYXJ0KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCB0b2dnbGVDYXJ0ID0gKHBkKSA9PiB7XG4gICAgbGV0IGRhdGEgPSBwcm9kdWN0c1twZC5pZF07XG4gICAgbGV0IHRvQWQ7XG4gICAgaWYoZGF0YSA9PSB1bmRlZmluZWQpe1xuICAgICAgcGQuc2l6ZSA9IFwiU1wiO1xuICAgICAgcGQuY2FydCA9ICFwZC5jYXJ0O1xuICAgICAgcGQucXVhbnRpdHkgPSAxO1xuICAgICAgdG9BZCA9IHsuLi5wcm9kdWN0cywgW3BkLmlkXTogcGR9XG4gICAgICBzZXRQcm9kdWN0cyh0b0FkKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGRhdGEuY2FydCA9ICFkYXRhLmNhcnQ7XG4gICAgICB0b0FkID0gey4uLnByb2R1Y3RzLCBbcGQuaWRdOiBkYXRhfVxuICAgICAgc2V0UHJvZHVjdHModG9BZCk7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkodG9BZCkpO1xuICB9XG5cbiAgY29uc3Qgc2l6ZVVwZGF0ZSA9IChpZCwgc2l6ZSkgPT4ge1xuICAgIGxldCBkYXRhID0gcHJvZHVjdHNbaWRdO1xuICAgIGRhdGEuc2l6ZSA9IHNpemU7XG4gICAgbGV0IHRvQWQgPSB7Li4ucHJvZHVjdHMsIFtpZF06IGRhdGF9XG4gICAgc2V0UHJvZHVjdHModG9BZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeSh0b0FkKSk7XG4gIH1cblxuICBjb25zdCBxdHlVcGRhdGUgPSAoaWQsIHF0eSkgPT4ge1xuICAgIGxldCBkYXRhID0gcHJvZHVjdHNbaWRdO1xuICAgIGRhdGEucXVhbnRpdHkgPSBxdHk7XG4gICAgbGV0IHRvQWQgPSB7Li4ucHJvZHVjdHMsIFtpZF06IGRhdGF9XG4gICAgc2V0UHJvZHVjdHModG9BZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeSh0b0FkKSk7XG4gIH1cblxuICBjb25zdCB0b2dnbGVXaXNobGlzdCA9IChwZCkgPT4ge1xuICAgIGxldCB0b0FkO1xuICAgIGxldCBkYXRhID0gcHJvZHVjdHNbcGQuaWRdO1xuICAgIGlmKGRhdGEgPT0gdW5kZWZpbmVkKXtcbiAgICAgIHBkLmxpa2VkID0gIXBkLmxpa2VkO1xuICAgICAgcGQucXVhbnRpdHkgPSAxO1xuICAgICAgcGQuc2l6ZSA9IFwiU1wiO1xuICAgICAgdG9BZCA9IHsuLi5wcm9kdWN0cywgW3BkLmlkXTogcGR9XG4gICAgICBzZXRQcm9kdWN0cyh0b0FkKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGRhdGEubGlrZWQgPSAhZGF0YS5saWtlZDtcbiAgICAgIHRvQWQgPSB7Li4ucHJvZHVjdHMsIFtwZC5pZF06IGRhdGF9XG4gICAgICBzZXRQcm9kdWN0cyh0b0FkKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeSh0b0FkKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxNeUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcHJvZHVjdHMsIHRvZ2dsZUNhcnQsIHRvZ2dsZVdpc2hsaXN0LCBzaXplVXBkYXRlLCBxdHlVcGRhdGUgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9NeUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgeyBNeUNvbnRleHQsIE15Q29udGV4dFByb3ZpZGVyIH07Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTXlDb250ZXh0IiwiTXlDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJhZGRBc3luYyIsImNhcnQiLCJ0b0FkIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2dnbGVDYXJ0IiwicGQiLCJkYXRhIiwiaWQiLCJ1bmRlZmluZWQiLCJzaXplIiwicXVhbnRpdHkiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2l6ZVVwZGF0ZSIsInF0eVVwZGF0ZSIsInF0eSIsInRvZ2dsZVdpc2hsaXN0IiwibGlrZWQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/createContext.js\n"));

/***/ })

});
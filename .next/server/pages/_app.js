/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/createContext.js":
/*!**********************************!*\
  !*** ./context/createContext.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MyContext: () => (/* binding */ MyContext),\n/* harmony export */   MyContextProvider: () => (/* binding */ MyContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MyContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst MyContextProvider = ({ children })=>{\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const addAsync = async (cart)=>{\n        let toAd = await JSON.parse(cart);\n        console.log(toAd);\n        setProducts(toAd);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const cart = localStorage.getItem(\"cart\");\n        if (cart) {\n            addAsync(cart);\n        }\n    }, []);\n    const toggleCart = (pd)=>{\n        let data = products[pd.id];\n        let toAd;\n        if (data == undefined) {\n            pd.size = \"S\";\n            pd.cart = !pd.cart;\n            pd.quantity = 1;\n            toAd = {\n                ...products,\n                [pd.id]: pd\n            };\n            setProducts(toAd);\n        } else {\n            data.cart = !data.cart;\n            toAd = {\n                ...products,\n                [pd.id]: data\n            };\n            setProducts(toAd);\n        }\n        localStorage.setItem(\"cart\", JSON.stringify(toAd));\n    };\n    const sizeUpdate = (id, size)=>{\n        let data = products[id];\n        data.size = size;\n        let toAd = {\n            ...products,\n            [id]: data\n        };\n        setProducts(toAd);\n        localStorage.setItem(\"cart\", JSON.stringify(toAd));\n    };\n    const qtyUpdate = (id, qty)=>{\n        let data = products[id];\n        data.quantity = qty;\n        let toAd = {\n            ...products,\n            [id]: data\n        };\n        setProducts(toAd);\n        localStorage.setItem(\"cart\", JSON.stringify(toAd));\n    };\n    const toggleWishlist = (pd)=>{\n        let toAd;\n        let data = products[pd.id];\n        if (data == undefined) {\n            pd.liked = !pd.liked;\n            pd.quantity = 1;\n            pd.size = \"S\";\n            toAd = {\n                ...products,\n                [pd.id]: pd\n            };\n            setProducts(toAd);\n        } else {\n            data.liked = !data.liked;\n            toAd = {\n                ...products,\n                [pd.id]: data\n            };\n            setProducts(toAd);\n        }\n        localStorage.setItem(\"cart\", JSON.stringify(toAd));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyContext.Provider, {\n        value: {\n            products,\n            toggleCart,\n            toggleWishlist,\n            sizeUpdate,\n            qtyUpdate\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/heartless/Development/Web_Development/Nextjs/Processing/herhq/context/createContext.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQVU7a0JBQ3RGdEI7Ozs7OztBQUdQO0FBRXdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVyaHEvLi9jb250ZXh0L2NyZWF0ZUNvbnRleHQuanM/NjU1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTXlDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBNeUNvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBhZGRBc3luYyA9IGFzeW5jIChjYXJ0KT0+e1xuICAgIGxldCB0b0FkID0gYXdhaXQgSlNPTi5wYXJzZShjYXJ0KTtcbiAgICBjb25zb2xlLmxvZyh0b0FkKTtcbiAgICBzZXRQcm9kdWN0cyh0b0FkKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0Jyk7XG4gICAgaWYoY2FydCl7XG4gICAgICBhZGRBc3luYyhjYXJ0KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCB0b2dnbGVDYXJ0ID0gKHBkKSA9PiB7XG4gICAgbGV0IGRhdGEgPSBwcm9kdWN0c1twZC5pZF07XG4gICAgbGV0IHRvQWQ7XG4gICAgaWYoZGF0YSA9PSB1bmRlZmluZWQpe1xuICAgICAgcGQuc2l6ZSA9IFwiU1wiO1xuICAgICAgcGQuY2FydCA9ICFwZC5jYXJ0O1xuICAgICAgcGQucXVhbnRpdHkgPSAxO1xuICAgICAgdG9BZCA9IHsuLi5wcm9kdWN0cywgW3BkLmlkXTogcGR9XG4gICAgICBzZXRQcm9kdWN0cyh0b0FkKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGRhdGEuY2FydCA9ICFkYXRhLmNhcnQ7XG4gICAgICB0b0FkID0gey4uLnByb2R1Y3RzLCBbcGQuaWRdOiBkYXRhfVxuICAgICAgc2V0UHJvZHVjdHModG9BZCk7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkodG9BZCkpO1xuICB9XG5cbiAgY29uc3Qgc2l6ZVVwZGF0ZSA9IChpZCwgc2l6ZSkgPT4ge1xuICAgIGxldCBkYXRhID0gcHJvZHVjdHNbaWRdO1xuICAgIGRhdGEuc2l6ZSA9IHNpemU7XG4gICAgbGV0IHRvQWQgPSB7Li4ucHJvZHVjdHMsIFtpZF06IGRhdGF9XG4gICAgc2V0UHJvZHVjdHModG9BZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeSh0b0FkKSk7XG4gIH1cblxuICBjb25zdCBxdHlVcGRhdGUgPSAoaWQsIHF0eSkgPT4ge1xuICAgIGxldCBkYXRhID0gcHJvZHVjdHNbaWRdO1xuICAgIGRhdGEucXVhbnRpdHkgPSBxdHk7XG4gICAgbGV0IHRvQWQgPSB7Li4ucHJvZHVjdHMsIFtpZF06IGRhdGF9XG4gICAgc2V0UHJvZHVjdHModG9BZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeSh0b0FkKSk7XG4gIH1cblxuICBjb25zdCB0b2dnbGVXaXNobGlzdCA9IChwZCkgPT4ge1xuICAgIGxldCB0b0FkO1xuICAgIGxldCBkYXRhID0gcHJvZHVjdHNbcGQuaWRdO1xuICAgIGlmKGRhdGEgPT0gdW5kZWZpbmVkKXtcbiAgICAgIHBkLmxpa2VkID0gIXBkLmxpa2VkO1xuICAgICAgcGQucXVhbnRpdHkgPSAxO1xuICAgICAgcGQuc2l6ZSA9IFwiU1wiO1xuICAgICAgdG9BZCA9IHsuLi5wcm9kdWN0cywgW3BkLmlkXTogcGR9XG4gICAgICBzZXRQcm9kdWN0cyh0b0FkKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGRhdGEubGlrZWQgPSAhZGF0YS5saWtlZDtcbiAgICAgIHRvQWQgPSB7Li4ucHJvZHVjdHMsIFtwZC5pZF06IGRhdGF9XG4gICAgICBzZXRQcm9kdWN0cyh0b0FkKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeSh0b0FkKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxNeUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcHJvZHVjdHMsIHRvZ2dsZUNhcnQsIHRvZ2dsZVdpc2hsaXN0LCBzaXplVXBkYXRlLCBxdHlVcGRhdGUgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9NeUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgeyBNeUNvbnRleHQsIE15Q29udGV4dFByb3ZpZGVyIH07Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTXlDb250ZXh0IiwiTXlDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJhZGRBc3luYyIsImNhcnQiLCJ0b0FkIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2dnbGVDYXJ0IiwicGQiLCJkYXRhIiwiaWQiLCJ1bmRlZmluZWQiLCJzaXplIiwicXVhbnRpdHkiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2l6ZVVwZGF0ZSIsInF0eVVwZGF0ZSIsInF0eSIsInRvZ2dsZVdpc2hsaXN0IiwibGlrZWQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/createContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-top-loading-bar */ \"react-top-loading-bar\");\n/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _vercel_speed_insights_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vercel/speed-insights/next */ \"@vercel/speed-insights/next\");\n/* harmony import */ var _context_createContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/context/createContext */ \"./context/createContext.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _vercel_speed_insights_next__WEBPACK_IMPORTED_MODULE_5__]);\n([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _vercel_speed_insights_next__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        router.events.on(\"routeChangeStart\", ()=>{\n            setProgress(75);\n        });\n        router.events.on(\"routeChangeComplete\", ()=>{\n            setProgress(100);\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                fileName: \"/home/heartless/Development/Web_Development/Nextjs/Processing/herhq/pages/_app.js\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_top_loading_bar__WEBPACK_IMPORTED_MODULE_4___default()), {\n                color: \"#f11946\",\n                progress: progress,\n                onLoaderFinished: ()=>setProgress(0)\n            }, void 0, false, {\n                fileName: \"/home/heartless/Development/Web_Development/Nextjs/Processing/herhq/pages/_app.js\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_createContext__WEBPACK_IMPORTED_MODULE_6__.MyContextProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/heartless/Development/Web_Development/Nextjs/Processing/herhq/pages/_app.js\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/heartless/Development/Web_Development/Nextjs/Processing/herhq/pages/_app.js\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_vercel_speed_insights_next__WEBPACK_IMPORTED_MODULE_5__.SpeedInsights, {}, void 0, false, {\n                fileName: \"/home/heartless/Development/Web_Development/Nextjs/Processing/herhq/pages/_app.js\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNZO0FBQ0U7QUFDRTtBQUNhO0FBQ0M7QUFDcEI7QUFFekIsU0FBU08sSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUVsRCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFDekMsTUFBTVUsU0FBU04sc0RBQVNBO0lBRXhCTCxnREFBU0EsQ0FBQztRQUNSVyxPQUFPQyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxvQkFBb0I7WUFDbkNILFlBQVk7UUFDZDtRQUNBQyxPQUFPQyxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUI7WUFDdENILFlBQVk7UUFDZDtJQUNGO0lBRUEscUJBQU87OzBCQUNMLDhEQUFDWCxvREFBT0E7Ozs7OzBCQUNSLDhEQUFDRyw4REFBVUE7Z0JBQ1BZLE9BQU07Z0JBQ05MLFVBQVVBO2dCQUNWTSxrQkFBa0IsSUFBTUwsWUFBWTs7Ozs7OzBCQUV4Qyw4REFBQ04scUVBQWlCQTswQkFDaEIsNEVBQUNHO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OzBCQUUxQiw4REFBQ0wsc0VBQWFBOzs7Ozs7O0FBR2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVyaHEvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZGluZ0JhciBmcm9tICdyZWFjdC10b3AtbG9hZGluZy1iYXInXG5pbXBvcnQgeyBTcGVlZEluc2lnaHRzIH0gZnJvbSBcIkB2ZXJjZWwvc3BlZWQtaW5zaWdodHMvbmV4dFwiXG5pbXBvcnQgeyBNeUNvbnRleHRQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvY3JlYXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiB7XG4gICAgICBzZXRQcm9ncmVzcyg3NSlcbiAgICB9KTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgc2V0UHJvZ3Jlc3MoMTAwKVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gPD5cbiAgICA8VG9hc3RlciAvPlxuICAgIDxMb2FkaW5nQmFyXG4gICAgICAgIGNvbG9yPScjZjExOTQ2J1xuICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3N9XG4gICAgICAgIG9uTG9hZGVyRmluaXNoZWQ9eygpID0+IHNldFByb2dyZXNzKDApfVxuICAgICAgLz5cbiAgICA8TXlDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9NeUNvbnRleHRQcm92aWRlcj5cbiAgICA8U3BlZWRJbnNpZ2h0cyAvPlxuICA8Lz5cblxufSJdLCJuYW1lcyI6WyJUb2FzdGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMb2FkaW5nQmFyIiwiU3BlZWRJbnNpZ2h0cyIsIk15Q29udGV4dFByb3ZpZGVyIiwidXNlUm91dGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInJvdXRlciIsImV2ZW50cyIsIm9uIiwiY29sb3IiLCJvbkxvYWRlckZpbmlzaGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-top-loading-bar":
/*!****************************************!*\
  !*** external "react-top-loading-bar" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-top-loading-bar");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@vercel/speed-insights/next":
/*!**********************************************!*\
  !*** external "@vercel/speed-insights/next" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/speed-insights/next");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();
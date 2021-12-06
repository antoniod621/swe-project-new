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

/***/ "./components/googleaccount.js":
/*!*************************************!*\
  !*** ./components/googleaccount.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-login */ \"react-google-login\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst CLIENT_ID = '32462246798-aeohvbah1muk1jpm9do88ps1hl7rlnif.apps.googleusercontent.com';\nclass GoogleBtn extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            isLogined: false,\n            accessToken: ''\n        };\n        this.login = this.login.bind(this);\n        this.handleLoginFailure = this.handleLoginFailure.bind(this);\n        this.logout = this.logout.bind(this);\n        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);\n    }\n    login(response) {\n        if (response.accessToken) {\n            this.setState((state)=>({\n                    isLogined: true,\n                    accessToken: response.accessToken\n                })\n            );\n        }\n    }\n    logout(response1) {\n        this.setState((state)=>({\n                isLogined: false,\n                accessToken: ''\n            })\n        );\n    }\n    handleLoginFailure(response2) {\n        alert('Failed to log in');\n    }\n    handleLogoutFailure(response3) {\n        alert('Failed to log out');\n    }\n    render() {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            __source: {\n                fileName: \"C:\\\\Users\\\\tahoe\\\\source\\\\repos\\\\swe-project-new\\\\components\\\\googleaccount.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            },\n            __self: this,\n            children: [\n                this.state.isLogined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_google_login__WEBPACK_IMPORTED_MODULE_2__.GoogleLogout, {\n                    clientId: CLIENT_ID,\n                    buttonText: \"Logout\",\n                    onLogoutSuccess: this.logout,\n                    onFailure: this.handleLogoutFailure,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\tahoe\\\\source\\\\repos\\\\swe-project-new\\\\components\\\\googleaccount.js\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    },\n                    __self: this\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_google_login__WEBPACK_IMPORTED_MODULE_2__.GoogleLogin, {\n                    clientId: CLIENT_ID,\n                    buttonText: \"Login\",\n                    onSuccess: this.login,\n                    onFailure: this.handleLoginFailure,\n                    cookiePolicy: 'single_host_origin',\n                    responseType: \"code,token\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\tahoe\\\\source\\\\repos\\\\swe-project-new\\\\components\\\\googleaccount.js\",\n                        lineNumber: 57,\n                        columnNumber: 39\n                    },\n                    __self: this\n                }),\n                this.state.accessToken ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h5\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\tahoe\\\\source\\\\repos\\\\swe-project-new\\\\components\\\\googleaccount.js\",\n                        lineNumber: 66,\n                        columnNumber: 44\n                    },\n                    __self: this,\n                    children: [\n                        \"Your Access Token: \",\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\tahoe\\\\source\\\\repos\\\\swe-project-new\\\\components\\\\googleaccount.js\",\n                                lineNumber: 66,\n                                columnNumber: 67\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\tahoe\\\\source\\\\repos\\\\swe-project-new\\\\components\\\\googleaccount.js\",\n                                lineNumber: 66,\n                                columnNumber: 73\n                            },\n                            __self: this\n                        }),\n                        \" \",\n                        this.state.accessToken\n                    ]\n                }) : null\n            ]\n        }));\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleBtn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dvb2dsZWFjY291bnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDc0I7QUFHOUQsS0FBSyxDQUFDSSxTQUFTLEdBQUcsQ0FBeUU7TUFHckZDLFNBQVMsU0FBU0osNENBQVM7Z0JBQ2pCSyxLQUFLLENBQUUsQ0FBQztRQUNoQixLQUFLLENBQUNBLEtBQUs7UUFFWCxJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO1lBQ1ZDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCQyxXQUFXLEVBQUUsQ0FBRTtRQUNuQixDQUFDO1FBRUQsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLLENBQUNDLElBQUksQ0FBQyxJQUFJO1FBQ2pDLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUcsSUFBSSxDQUFDQSxrQkFBa0IsQ0FBQ0QsSUFBSSxDQUFDLElBQUk7UUFDM0QsSUFBSSxDQUFDRSxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNGLElBQUksQ0FBQyxJQUFJO1FBQ25DLElBQUksQ0FBQ0csbUJBQW1CLEdBQUcsSUFBSSxDQUFDQSxtQkFBbUIsQ0FBQ0gsSUFBSSxDQUFDLElBQUk7SUFDakUsQ0FBQztJQUVERCxLQUFLLENBQUNLLFFBQVEsRUFBRSxDQUFDO1FBQ2IsRUFBRSxFQUFFQSxRQUFRLENBQUNOLFdBQVcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQ08sUUFBUSxFQUFDVCxLQUFLLElBQUssQ0FBQztvQkFDckJDLFNBQVMsRUFBRSxJQUFJO29CQUNmQyxXQUFXLEVBQUVNLFFBQVEsQ0FBQ04sV0FBVztnQkFDckMsQ0FBQzs7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVESSxNQUFNLENBQUNFLFNBQVEsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEVBQUNULEtBQUssSUFBSyxDQUFDO2dCQUNyQkMsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCQyxXQUFXLEVBQUUsQ0FBRTtZQUNuQixDQUFDOztJQUNMLENBQUM7SUFFREcsa0JBQWtCLENBQUNHLFNBQVEsRUFBRSxDQUFDO1FBQzFCRSxLQUFLLENBQUMsQ0FBa0I7SUFDNUIsQ0FBQztJQUVESCxtQkFBbUIsQ0FBQ0MsU0FBUSxFQUFFLENBQUM7UUFDM0JFLEtBQUssQ0FBQyxDQUFtQjtJQUM3QixDQUFDO0lBRURDLE1BQU0sR0FBRyxDQUFDO1FBQ04sTUFBTSx1RUFDREMsQ0FBRzs7Ozs7Ozs7Z0JBQ0UsSUFBSSxDQUFDWixLQUFLLENBQUNDLFNBQVMsd0VBQ2pCTCw0REFBWTtvQkFDVGlCLFFBQVEsRUFBRWhCLFNBQVM7b0JBQ25CaUIsVUFBVSxFQUFDLENBQVE7b0JBQ25CQyxlQUFlLEVBQUUsSUFBSSxDQUFDVCxNQUFNO29CQUM1QlUsU0FBUyxFQUFFLElBQUksQ0FBQ1QsbUJBQW1COzs7Ozs7OzBGQUVwQlosMkRBQVc7b0JBQzFCa0IsUUFBUSxFQUFFaEIsU0FBUztvQkFDbkJpQixVQUFVLEVBQUMsQ0FBTztvQkFDbEJHLFNBQVMsRUFBRSxJQUFJLENBQUNkLEtBQUs7b0JBQ3JCYSxTQUFTLEVBQUUsSUFBSSxDQUFDWCxrQkFBa0I7b0JBQ2xDYSxZQUFZLEVBQUUsQ0FBb0I7b0JBQ2xDQyxZQUFZLEVBQUMsQ0FBWTs7Ozs7Ozs7Z0JBRy9CLElBQUksQ0FBQ25CLEtBQUssQ0FBQ0UsV0FBVyx5RUFBSWtCLENBQUU7Ozs7Ozs7O3dCQUFDLENBQW1COzZGQUFDQyxDQUFFOzs7Ozs7Ozs2RkFBSUEsQ0FBRTs7Ozs7Ozs7d0JBQUcsQ0FBQzt3QkFBQyxJQUFJLENBQUNyQixLQUFLLENBQUNFLFdBQVc7O3FCQUFTLElBQUk7OztJQUkvRyxDQUFDOztBQUdMLGlFQUFlSixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9nb29nbGVhY2NvdW50LmpzP2ZjMzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBHb29nbGVMb2dpbiwgR29vZ2xlTG9nb3V0IH0gZnJvbSAncmVhY3QtZ29vZ2xlLWxvZ2luJztcclxuXHJcblxyXG5jb25zdCBDTElFTlRfSUQgPSAnMzI0NjIyNDY3OTgtYWVvaHZiYWgxbXVrMWpwbTlkbzg4cHMxaGw3cmxuaWYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nO1xyXG5cclxuXHJcbmNsYXNzIEdvb2dsZUJ0biBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNMb2dpbmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgYWNjZXNzVG9rZW46ICcnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpbiA9IHRoaXMubG9naW4uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUxvZ2luRmFpbHVyZSA9IHRoaXMuaGFuZGxlTG9naW5GYWlsdXJlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5sb2dvdXQgPSB0aGlzLmxvZ291dC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTG9nb3V0RmFpbHVyZSA9IHRoaXMuaGFuZGxlTG9nb3V0RmFpbHVyZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgICAgIGlzTG9naW5lZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiByZXNwb25zZS5hY2Nlc3NUb2tlblxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dChyZXNwb25zZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgaXNMb2dpbmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgYWNjZXNzVG9rZW46ICcnXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUxvZ2luRmFpbHVyZShyZXNwb25zZSkge1xyXG4gICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gbG9nIGluJylcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVMb2dvdXRGYWlsdXJlKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBsb2cgb3V0JylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5pc0xvZ2luZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxHb29nbGVMb2dvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SWQ9e0NMSUVOVF9JRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD0nTG9nb3V0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvZ291dFN1Y2Nlc3M9e3RoaXMubG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3RoaXMuaGFuZGxlTG9nb3V0RmFpbHVyZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Hb29nbGVMb2dvdXQ+IDogPEdvb2dsZUxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudElkPXtDTElFTlRfSUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9J0xvZ2luJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3RoaXMubG9naW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17dGhpcy5oYW5kbGVMb2dpbkZhaWx1cmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZT0nY29kZSx0b2tlbidcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmFjY2Vzc1Rva2VuID8gPGg1PllvdXIgQWNjZXNzIFRva2VuOiA8YnIgLz48YnIgLz4ge3RoaXMuc3RhdGUuYWNjZXNzVG9rZW59PC9oNT4gOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb29nbGVCdG47Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiR29vZ2xlTG9naW4iLCJHb29nbGVMb2dvdXQiLCJDTElFTlRfSUQiLCJHb29nbGVCdG4iLCJwcm9wcyIsInN0YXRlIiwiaXNMb2dpbmVkIiwiYWNjZXNzVG9rZW4iLCJsb2dpbiIsImJpbmQiLCJoYW5kbGVMb2dpbkZhaWx1cmUiLCJsb2dvdXQiLCJoYW5kbGVMb2dvdXRGYWlsdXJlIiwicmVzcG9uc2UiLCJzZXRTdGF0ZSIsImFsZXJ0IiwicmVuZGVyIiwiZGl2IiwiY2xpZW50SWQiLCJidXR0b25UZXh0Iiwib25Mb2dvdXRTdWNjZXNzIiwib25GYWlsdXJlIiwib25TdWNjZXNzIiwiY29va2llUG9saWN5IiwicmVzcG9uc2VUeXBlIiwiaDUiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/googleaccount.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_googleaccount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/googleaccount.js */ \"./components/googleaccount.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n        ...pageProps,\n        __source: {\n            fileName: \"C:\\\\Users\\\\tahoe\\\\source\\\\repos\\\\swe-project-new\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 12\n        },\n        __self: this\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNvQztBQUNoQztBQUdsQixRQUFRLENBQUNFLEdBQUcsQ0FBQyxDQUFDLENBQUNELFNBQVMsR0FBRUUsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ25ELE1BQU0sc0VBQUVGLFNBQVM7V0FBS0UsU0FBUzs7Ozs7Ozs7QUFDbkMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcydcclxuaW1wb3J0IEdvb2dsZUxvZ2luQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvZ29vZ2xlYWNjb3VudC5qcydcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbn1cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkdvb2dsZUxvZ2luQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiQXBwIiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-google-login":
/*!*************************************!*\
  !*** external "react-google-login" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-google-login");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-login */ \"react-google-login\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst CLIENT_ID = '32462246798-aeohvbah1muk1jpm9do88ps1hl7rlnif.apps.googleusercontent.com';\nclass GoogleBtn extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            isLogined: false,\n            accessToken: ''\n        };\n        this.login = this.login.bind(this);\n        this.handleLoginFailure = this.handleLoginFailure.bind(this);\n        this.logout = this.logout.bind(this);\n        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);\n    }\n    login(response) {\n        if (response.accessToken) {\n            this.setState((state)=>({\n                    isLogined: true,\n                    accessToken: response.accessToken\n                })\n            );\n        }\n    }\n    logout(response1) {\n        this.setState((state)=>({\n                isLogined: false,\n                accessToken: ''\n            })\n        );\n    }\n    handleLoginFailure(response2) {\n        alert('Failed to log in');\n    }\n    handleLogoutFailure(response3) {\n        alert('Failed to log out');\n    }\n    render() {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            __source: {\n                fileName: \"/Users/antoniod621/Documents/Senior Year/Software Engineering/swe-project-new/components/googleaccount.js\",\n                lineNumber: 49\n            },\n            __self: this,\n            children: [\n                this.state.isLogined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_google_login__WEBPACK_IMPORTED_MODULE_2__.GoogleLogout, {\n                    clientId: CLIENT_ID,\n                    buttonText: \"Logout\",\n                    onLogoutSuccess: this.logout,\n                    onFailure: this.handleLogoutFailure,\n                    __source: {\n                        fileName: \"/Users/antoniod621/Documents/Senior Year/Software Engineering/swe-project-new/components/googleaccount.js\",\n                        lineNumber: 51\n                    },\n                    __self: this\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_google_login__WEBPACK_IMPORTED_MODULE_2__.GoogleLogin, {\n                    clientId: CLIENT_ID,\n                    buttonText: \"Login\",\n                    onSuccess: this.login,\n                    onFailure: this.handleLoginFailure,\n                    cookiePolicy: 'single_host_origin',\n                    responseType: \"code,token\",\n                    __source: {\n                        fileName: \"/Users/antoniod621/Documents/Senior Year/Software Engineering/swe-project-new/components/googleaccount.js\",\n                        lineNumber: 57\n                    },\n                    __self: this\n                }),\n                this.state.accessToken ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h5\", {\n                    __source: {\n                        fileName: \"/Users/antoniod621/Documents/Senior Year/Software Engineering/swe-project-new/components/googleaccount.js\",\n                        lineNumber: 66\n                    },\n                    __self: this,\n                    children: [\n                        \"Your Access Token: \",\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                            __source: {\n                                fileName: \"/Users/antoniod621/Documents/Senior Year/Software Engineering/swe-project-new/components/googleaccount.js\",\n                                lineNumber: 66\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                            __source: {\n                                fileName: \"/Users/antoniod621/Documents/Senior Year/Software Engineering/swe-project-new/components/googleaccount.js\",\n                                lineNumber: 66\n                            },\n                            __self: this\n                        }),\n                        \" \",\n                        this.state.accessToken\n                    ]\n                }) : null\n            ]\n        }));\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleBtn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dvb2dsZWFjY291bnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDc0I7QUFHOUQsS0FBSyxDQUFDSSxTQUFTLEdBQUcsQ0FBeUU7TUFHckZDLFNBQVMsU0FBU0osNENBQVM7Z0JBQ2pCSyxLQUFLLENBQUUsQ0FBQztRQUNoQixLQUFLLENBQUNBLEtBQUs7UUFFWCxJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO1lBQ1ZDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCQyxXQUFXLEVBQUUsQ0FBRTtRQUNuQixDQUFDO1FBRUQsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLLENBQUNDLElBQUksQ0FBQyxJQUFJO1FBQ2pDLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUcsSUFBSSxDQUFDQSxrQkFBa0IsQ0FBQ0QsSUFBSSxDQUFDLElBQUk7UUFDM0QsSUFBSSxDQUFDRSxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNGLElBQUksQ0FBQyxJQUFJO1FBQ25DLElBQUksQ0FBQ0csbUJBQW1CLEdBQUcsSUFBSSxDQUFDQSxtQkFBbUIsQ0FBQ0gsSUFBSSxDQUFDLElBQUk7SUFDakUsQ0FBQztJQUVERCxLQUFLLENBQUNLLFFBQVEsRUFBRSxDQUFDO1FBQ2IsRUFBRSxFQUFFQSxRQUFRLENBQUNOLFdBQVcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQ08sUUFBUSxFQUFDVCxLQUFLLElBQUssQ0FBQztvQkFDckJDLFNBQVMsRUFBRSxJQUFJO29CQUNmQyxXQUFXLEVBQUVNLFFBQVEsQ0FBQ04sV0FBVztnQkFDckMsQ0FBQzs7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVESSxNQUFNLENBQUNFLFNBQVEsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEVBQUNULEtBQUssSUFBSyxDQUFDO2dCQUNyQkMsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCQyxXQUFXLEVBQUUsQ0FBRTtZQUNuQixDQUFDOztJQUNMLENBQUM7SUFFREcsa0JBQWtCLENBQUNHLFNBQVEsRUFBRSxDQUFDO1FBQzFCRSxLQUFLLENBQUMsQ0FBa0I7SUFDNUIsQ0FBQztJQUVESCxtQkFBbUIsQ0FBQ0MsU0FBUSxFQUFFLENBQUM7UUFDM0JFLEtBQUssQ0FBQyxDQUFtQjtJQUM3QixDQUFDO0lBRURDLE1BQU0sR0FBRyxDQUFDO1FBQ04sTUFBTSx1RUFDREMsQ0FBRzs7Ozs7OztnQkFDRSxJQUFJLENBQUNaLEtBQUssQ0FBQ0MsU0FBUyx3RUFDakJMLDREQUFZO29CQUNUaUIsUUFBUSxFQUFFaEIsU0FBUztvQkFDbkJpQixVQUFVLEVBQUMsQ0FBUTtvQkFDbkJDLGVBQWUsRUFBRSxJQUFJLENBQUNULE1BQU07b0JBQzVCVSxTQUFTLEVBQUUsSUFBSSxDQUFDVCxtQkFBbUI7Ozs7OzswRkFFcEJaLDJEQUFXO29CQUMxQmtCLFFBQVEsRUFBRWhCLFNBQVM7b0JBQ25CaUIsVUFBVSxFQUFDLENBQU87b0JBQ2xCRyxTQUFTLEVBQUUsSUFBSSxDQUFDZCxLQUFLO29CQUNyQmEsU0FBUyxFQUFFLElBQUksQ0FBQ1gsa0JBQWtCO29CQUNsQ2EsWUFBWSxFQUFFLENBQW9CO29CQUNsQ0MsWUFBWSxFQUFDLENBQVk7Ozs7Ozs7Z0JBRy9CLElBQUksQ0FBQ25CLEtBQUssQ0FBQ0UsV0FBVyx5RUFBSWtCLENBQUU7Ozs7Ozs7d0JBQUMsQ0FBbUI7NkZBQUNDLENBQUU7Ozs7Ozs7NkZBQUlBLENBQUU7Ozs7Ozs7d0JBQUcsQ0FBQzt3QkFBQyxJQUFJLENBQUNyQixLQUFLLENBQUNFLFdBQVc7O3FCQUFTLElBQUk7OztJQUkvRyxDQUFDOztBQUdMLGlFQUFlSixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9nb29nbGVhY2NvdW50LmpzP2ZjMzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR29vZ2xlTG9naW4sIEdvb2dsZUxvZ291dCB9IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XG5cblxuY29uc3QgQ0xJRU5UX0lEID0gJzMyNDYyMjQ2Nzk4LWFlb2h2YmFoMW11azFqcG05ZG84OHBzMWhsN3JsbmlmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJztcblxuXG5jbGFzcyBHb29nbGVCdG4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNMb2dpbmVkOiBmYWxzZSxcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlTG9naW5GYWlsdXJlID0gdGhpcy5oYW5kbGVMb2dpbkZhaWx1cmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sb2dvdXQgPSB0aGlzLmxvZ291dC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUxvZ291dEZhaWx1cmUgPSB0aGlzLmhhbmRsZUxvZ291dEZhaWx1cmUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBsb2dpbihyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2UuYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgICAgICAgICAgICBpc0xvZ2luZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IHJlc3BvbnNlLmFjY2Vzc1Rva2VuXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dvdXQocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgICAgICAgaXNMb2dpbmVkOiBmYWxzZSxcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiAnJ1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgaGFuZGxlTG9naW5GYWlsdXJlKHJlc3BvbnNlKSB7XG4gICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gbG9nIGluJylcbiAgICB9XG5cbiAgICBoYW5kbGVMb2dvdXRGYWlsdXJlKHJlc3BvbnNlKSB7XG4gICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gbG9nIG91dCcpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuaXNMb2dpbmVkID9cbiAgICAgICAgICAgICAgICAgICAgPEdvb2dsZUxvZ291dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SWQ9e0NMSUVOVF9JRH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9J0xvZ291dCdcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9nb3V0U3VjY2Vzcz17dGhpcy5sb2dvdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3RoaXMuaGFuZGxlTG9nb3V0RmFpbHVyZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L0dvb2dsZUxvZ291dD4gOiA8R29vZ2xlTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudElkPXtDTElFTlRfSUR9XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25UZXh0PSdMb2dpbidcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17dGhpcy5sb2dpbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17dGhpcy5oYW5kbGVMb2dpbkZhaWx1cmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb29raWVQb2xpY3k9eydzaW5nbGVfaG9zdF9vcmlnaW4nfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlPSdjb2RlLHRva2VuJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuYWNjZXNzVG9rZW4gPyA8aDU+WW91ciBBY2Nlc3MgVG9rZW46IDxiciAvPjxiciAvPiB7dGhpcy5zdGF0ZS5hY2Nlc3NUb2tlbn08L2g1PiA6IG51bGx9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb29nbGVCdG47Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiR29vZ2xlTG9naW4iLCJHb29nbGVMb2dvdXQiLCJDTElFTlRfSUQiLCJHb29nbGVCdG4iLCJwcm9wcyIsInN0YXRlIiwiaXNMb2dpbmVkIiwiYWNjZXNzVG9rZW4iLCJsb2dpbiIsImJpbmQiLCJoYW5kbGVMb2dpbkZhaWx1cmUiLCJsb2dvdXQiLCJoYW5kbGVMb2dvdXRGYWlsdXJlIiwicmVzcG9uc2UiLCJzZXRTdGF0ZSIsImFsZXJ0IiwicmVuZGVyIiwiZGl2IiwiY2xpZW50SWQiLCJidXR0b25UZXh0Iiwib25Mb2dvdXRTdWNjZXNzIiwib25GYWlsdXJlIiwib25TdWNjZXNzIiwiY29va2llUG9saWN5IiwicmVzcG9uc2VUeXBlIiwiaDUiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/googleaccount.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_googleaccount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/googleaccount.js */ \"./components/googleaccount.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n        ...pageProps,\n        __source: {\n            fileName: \"/Users/antoniod621/Documents/Senior Year/Software Engineering/swe-project-new/pages/_app.js\",\n            lineNumber: 7\n        },\n        __self: this\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNvQztBQUNoQztBQUdsQixRQUFRLENBQUNFLEdBQUcsQ0FBQyxDQUFDLENBQUNELFNBQVMsR0FBRUUsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ25ELE1BQU0sc0VBQUVGLFNBQVM7V0FBS0UsU0FBUzs7Ozs7OztBQUNuQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0IEdvb2dsZUxvZ2luQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvZ29vZ2xlYWNjb3VudC5qcydcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJHb29nbGVMb2dpbkNvbXBvbmVudCIsIkNvbXBvbmVudCIsIkFwcCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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
"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-google-login"
const external_react_google_login_namespaceObject = require("react-google-login");
;// CONCATENATED MODULE: ./components/googleaccount.js



const CLIENT_ID = '32462246798-aeohvbah1muk1jpm9do88ps1hl7rlnif.apps.googleusercontent.com';
class GoogleBtn extends (/* unused pure expression or super */ null && (Component)) {
    constructor(props){
        super(props);
        this.state = {
            isLogined: false,
            accessToken: ''
        };
        this.login = this.login.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    }
    login(response) {
        if (response.accessToken) {
            this.setState((state)=>({
                    isLogined: true,
                    accessToken: response.accessToken
                })
            );
        }
    }
    logout(response1) {
        this.setState((state)=>({
                isLogined: false,
                accessToken: ''
            })
        );
    }
    handleLoginFailure(response2) {
        alert('Failed to log in');
    }
    handleLogoutFailure(response3) {
        alert('Failed to log out');
    }
    render() {
        return(/*#__PURE__*/ _jsxs("div", {
            children: [
                this.state.isLogined ? /*#__PURE__*/ _jsx(GoogleLogout, {
                    clientId: CLIENT_ID,
                    buttonText: "Logout",
                    onLogoutSuccess: this.logout,
                    onFailure: this.handleLogoutFailure
                }) : /*#__PURE__*/ _jsx(GoogleLogin, {
                    clientId: CLIENT_ID,
                    buttonText: "Login",
                    onSuccess: this.login,
                    onFailure: this.handleLoginFailure,
                    cookiePolicy: 'single_host_origin',
                    responseType: "code,token"
                }),
                this.state.accessToken ? /*#__PURE__*/ _jsxs("h5", {
                    children: [
                        "Your Access Token: ",
                        /*#__PURE__*/ _jsx("br", {
                        }),
                        /*#__PURE__*/ _jsx("br", {
                        }),
                        " ",
                        this.state.accessToken
                    ]
                }) : null
            ]
        }));
    }
}
/* harmony default export */ const googleaccount = ((/* unused pure expression or super */ null && (GoogleBtn)));

;// CONCATENATED MODULE: ./pages/_app.js




function App({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    }));
};


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9189));
module.exports = __webpack_exports__;

})();
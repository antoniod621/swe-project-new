"use strict";
exports.id = 805;
exports.ids = [805];
exports.modules = {

/***/ 7805:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_2__);



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
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (GoogleBtn)));


/***/ })

};
;
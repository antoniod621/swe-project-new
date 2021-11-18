"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(2469);
// EXTERNAL MODULE: ./styles/utils.module.css
var utils_module = __webpack_require__(3900);
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);
;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
;// CONCATENATED MODULE: ./utils/dbConnect.js


const connection = {
};
async function dbConnect() {
    if (connection.isConnected) {
        console.log('MongoDB is Connected');
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    connection.isConnected = db.connections[0].readyState;
    console.log('MongoDB is Connected');
    console.log(connection.isConnected);
}
/* harmony default export */ const utils_dbConnect = ((/* unused pure expression or super */ null && (dbConnect)));

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(6405);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@material-ui/core/Avatar"
var Avatar_ = __webpack_require__(2098);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "react-google-login"
var external_react_google_login_ = __webpack_require__(67);
;// CONCATENATED MODULE: ./components/login.js



// refresh token
const clientId = '32462246798-k8htnl7fl43le98i28fjh3fg3ks86bbd.apps.googleusercontent.com';
function Login() {
    const onSuccess = (res)=>{
        console.log('Login Success: currentUser:', res.profileObj);
        alert(`Logged in successfully welcome ${res.profileObj.name}. \n See console for full profile object.`);
    };
    const onFailure = (res)=>{
        console.log('Login failed: res:', res);
        alert(`Failed to login.`);
    };
    return(/*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx(GoogleLogin, {
            clientId: clientId,
            buttonText: "Login",
            onSuccess: onSuccess,
            onFailure: onFailure,
            cookiePolicy: 'single_host_origin',
            style: {
                marginTop: '100px'
            },
            isSignedIn: true
        })
    }));
}
/* harmony default export */ const login = ((/* unused pure expression or super */ null && (Login)));

;// CONCATENATED MODULE: ./components/loginhooks.js



// refresh token
const loginhooks_clientId = '32462246798-k8htnl7fl43le98i28fjh3fg3ks86bbd.apps.googleusercontent.com';
function LoginHooks() {
    const onSuccess = (res)=>{
        console.log('Login Success: currentUser:', res.profileObj);
        alert(`Logged in successfully welcome ${res.profileObj.name}. \n See console for full profile object.`);
    };
    const onFailure = (res)=>{
        console.log('Login failed: res:', res);
        alert(`Failed to login.`);
    };
    const { signIn  } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId: loginhooks_clientId,
        isSignedIn: true,
        accessType: 'offline'
    });
    return(/*#__PURE__*/ _jsxs("button", {
        onClick: signIn,
        className: "button",
        children: [
            /*#__PURE__*/ _jsx("img", {
                src: "icons/google.svg",
                alt: "google login",
                className: "icon"
            }),
            /*#__PURE__*/ _jsx("span", {
                className: "buttonText",
                children: "Sign in with Google"
            })
        ]
    }));
}
/* harmony default export */ const loginhooks = ((/* unused pure expression or super */ null && (LoginHooks)));

;// CONCATENATED MODULE: ./components/logout.js



const logout_clientId = '32462246798-k8htnl7fl43le98i28fjh3fg3ks86bbd.apps.googleusercontent.com';
function Logout() {
    const onSuccess = ()=>{
        console.log('Logout made successfully');
        alert('Logout successful');
    };
    return(/*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx(GoogleLogout, {
            clientId: logout_clientId,
            buttonText: "Logout",
            onLogoutSuccess: onSuccess
        })
    }));
}
/* harmony default export */ const logout = ((/* unused pure expression or super */ null && (Logout)));

// EXTERNAL MODULE: ./components/googleaccount.js
var googleaccount = __webpack_require__(7805);
;// CONCATENATED MODULE: ./pages/index.js
















const responseGoogle = (response)=>{
    console.log(response);
};
function Home() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
        home: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: layout/* siteTitle */.y
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "google-signin-client_id",
                        content: "32462246798-aeohvbah1muk1jpm9do88ps1hl7rlnif.apps.googleusercontent.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        class: "g-signin2",
                        "data-onsuccess": "onSignIn"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://apis.google.com/js/platform.js",
                        async: true,
                        defer: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (utils_module_default()).heading,
                style: {
                    textAlign: 'center',
                    padding: "10px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            textAlign: 'center',
                            padding: "15px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/posts/Engine",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                style: {
                                    fontSize: 25
                                },
                                variant: "outlined",
                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                    src: 'https://cdn-icons-png.flaticon.com/512/2061/2061956.png'
                                }),
                                children: "Engine"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            textAlign: 'center',
                            padding: "15px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/posts/Chassis",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                style: {
                                    fontSize: 25
                                },
                                variant: "outlined",
                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                    src: 'https://cdn3.iconfinder.com/data/icons/mechanic-car-repair-1/50/repair-36-512.png'
                                }),
                                children: "Chassis"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            textAlign: 'center',
                            padding: "15px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/posts/Drive",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                style: {
                                    fontSize: 25
                                },
                                variant: "outlined",
                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                    src: 'https://static.thenounproject.com/png/57367-200.png'
                                }),
                                children: "Drive"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            textAlign: 'center',
                            padding: "15px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/posts/Electrical",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                style: {
                                    fontSize: 25
                                },
                                variant: "outlined",
                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                    src: 'https://banner2.cleanpng.com/20180329/wyw/kisspng-electricity-computer-icons-symbol-electricity-5abd333f208164.7077256515223488631332.jpg'
                                }),
                                children: "Electrical"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            textAlign: 'center',
                            padding: "15px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/posts/Suspension",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                style: {
                                    fontSize: 25
                                },
                                variant: "outlined",
                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                    src: 'https://cdn-icons-png.flaticon.com/512/1711/1711879.png'
                                }),
                                children: "Suspension"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            textAlign: 'center',
                            padding: "15px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/posts/Other",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                style: {
                                    fontSize: 25
                                },
                                variant: "outlined",
                                children: "Other"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/posts/inventory",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                variant: "outlined",
                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                    src: 'https://www.pngfind.com/pngs/m/577-5777332_png-file-svg-inventory-icon-png-transparent-png.png'
                                }),
                                children: "Inventory"
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
async function getStaticProps(ctx) {
    return {
        props: {
            posts: [
                'message'
            ]
        }
    };
}


/***/ }),

/***/ 2098:
/***/ ((module) => {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 67:
/***/ ((module) => {

module.exports = require("react-google-login");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,469,805], () => (__webpack_exec__(8781)));
module.exports = __webpack_exports__;

})();
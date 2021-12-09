"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2374:
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
var utils_module = __webpack_require__(1928);
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
;// CONCATENATED MODULE: ./pages/index.js










function Home() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
        home: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: layout/* siteTitle */.y
                })
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
                            href: "/posts/inventory",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                style: {
                                    fontSize: "25px"
                                },
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

/***/ 7915:
/***/ ((module) => {

module.exports = require("@mui/icons-material");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,469], () => (__webpack_exec__(2374)));
module.exports = __webpack_exports__;

})();
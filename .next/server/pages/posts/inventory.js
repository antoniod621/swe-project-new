"use strict";
(() => {
var exports = {};
exports.id = 506;
exports.ids = [506];
exports.modules = {

/***/ 9337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ inventory),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(2469);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/utils.module.css
var utils_module = __webpack_require__(3900);
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@material-ui/core/Avatar"
var Avatar_ = __webpack_require__(2098);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/material/Table"
var Table_ = __webpack_require__(9181);
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);
// EXTERNAL MODULE: external "@mui/material/TableBody"
var TableBody_ = __webpack_require__(8823);
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);
// EXTERNAL MODULE: external "@mui/material/TableCell"
var TableCell_ = __webpack_require__(5612);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);
// EXTERNAL MODULE: external "@mui/material/TableContainer"
var TableContainer_ = __webpack_require__(443);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);
// EXTERNAL MODULE: external "@mui/material/TableHead"
var TableHead_ = __webpack_require__(5953);
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);
// EXTERNAL MODULE: external "@mui/material/TableRow"
var TableRow_ = __webpack_require__(4848);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/inventorylist.js

// export default function inventoryList({ item }) {
//     return (
//         <>
//             <li>
//                 <h3>{item.title}</h3>
//                 <p>{item.content}
//                 {/* {item.manufacturer}{item.quantity}{item.location}*/}
//                 </p> 
//                 <small>{new Date(post.createdAt).toLocaleDateString()}</small>
//                 <br />
//                     <button type="button">
//                         {'Publish'}
//                     </button>
//                 <button type="button" >
//                     {'Delete'}
//                 </button>
//             </li>
//         </>
//     );
// }









function InventoryList({ item  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("l1", {
            children: /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                component: (Paper_default()),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                    sx: {
                        minWidth: 650
                    },
                    "aria-label": "simple table",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        children: "Part"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "right",
                                        children: "Category"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "right",
                                        children: "Manufacturer"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "right",
                                        children: "Qty"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "right",
                                        children: "Location"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TableBody_default()), {
                            children: rows.map((row)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    sx: {
                                        '&:last-child td, &:last-child th': {
                                            border: 0
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            component: "th",
                                            scope: "row",
                                            children: row.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "right",
                                            children: row.calories
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "right",
                                            children: row.fat
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "right",
                                            children: row.carbs
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "right",
                                            children: row.protein
                                        })
                                    ]
                                }, row.name)
                            )
                        })
                    ]
                })
            })
        })
    }));
};
function createData(name, calories, fat, carbs, protein) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein
    };
}
const rows = [
    createData('Size 12 hose clamps', 'Engine', 'Aircraft Spruce', 3, 'Radiator in/out'),
    createData('Radiator', 'Engine', '?', 1, 'Rear right side'),
    createData('Oil tank', 'Engine', '', 1, 'Center right behind firewall'),
    createData('Gas tank', 'Engine', 'Manually machined', 1, 'Left side right behind firewall'),
    createData('32 oz plastic water bottle', 'Engine', 'Nalgene', 1, "Behind radiator, right rear side"),
    createData('Steel Pipe', 'Chassis', 'Aircraft Spruce', 5, 'See Notes'),
    createData('Brake Tubing', 'Drive', 'NONE', 2, 'Brakes'),
    createData('Size 8 hose clamp', 'Other', 'Aircraft Spruce', 9, "Brakes and cooler"),
    createData('Roll Bar Arms', 'Suspension', 'CNC Machined', 4, 'Either end of body'), 
];

;// CONCATENATED MODULE: ./pages/posts/inventory.js
















function inventory({ posts  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Inventory"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (utils_module_default()).heading,
                style: {
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("center", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/posts/addinventory",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    variant: "outlined",
                                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                        src: 'https://cdn1.iconfinder.com/data/icons/logistic-and-shipping-outline/32/logistic-product-parcel-increase-cargo-add-inventory-1024.png'
                                    }),
                                    children: "Add Item to Inventory"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (utils_module_default()).container,
                                children: posts.length == 0 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "No added posts"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(InventoryList, {
                                })
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
function inventory_createData(name, calories, fat, carbs, protein) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein
    };
}
const inventory_rows = [
    inventory_createData('Size 12 hose clamps', 'Engine', 'Aircraft Spruce', 3, 'Radiator in/out'),
    inventory_createData('Radiator', 'Engine', '?', 1, 'Rear right side'),
    inventory_createData('Oil tank', 'Engine', '', 1, 'Center right behind firewall'),
    inventory_createData('Gas tank', 'Engine', 'Manually machined', 1, 'Left side right behind firewall'),
    inventory_createData('32 oz plastic water bottle', 'Engine', 'Nalgene', 1, "Behind radiator, right rear side"),
    inventory_createData('Steel Pipe', 'Chassis', 'Aircraft Spruce', 5, 'See Notes'),
    inventory_createData('Brake Tubing', 'Drive', 'NONE', 2, 'Brakes'),
    inventory_createData('Size 8 hose clamp', 'Other', 'Aircraft Spruce', 9, "Brakes and cooler"),
    inventory_createData('Roll Bar Arms', 'Suspension', 'CNC Machined', 4, 'Either end of body'), 
];
async function getServerSideProps(ctx) {
    return {
        props: {
            posts: [
                'Message',
                'M',
                'T'
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

/***/ 1598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 9181:
/***/ ((module) => {

module.exports = require("@mui/material/Table");

/***/ }),

/***/ 8823:
/***/ ((module) => {

module.exports = require("@mui/material/TableBody");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/TableCell");

/***/ }),

/***/ 443:
/***/ ((module) => {

module.exports = require("@mui/material/TableContainer");

/***/ }),

/***/ 5953:
/***/ ((module) => {

module.exports = require("@mui/material/TableHead");

/***/ }),

/***/ 4848:
/***/ ((module) => {

module.exports = require("@mui/material/TableRow");

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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,469], () => (__webpack_exec__(9337)));
module.exports = __webpack_exports__;

})();
"use strict";
exports.id = 442;
exports.ids = [442];
exports.modules = {

/***/ 7542:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/TodoItems.js


class TodoItems_TodoItems extends (/* unused pure expression or super */ null && (Component)) {
    constructor(props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    delete(key) {
        this.props.delete(key);
    }
    createTasks(item) {
        return(/*#__PURE__*/ _jsx("li", {
            onClick: ()=>this.delete(item.key)
            ,
            children: item.text
        }, item.key));
    }
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return(/*#__PURE__*/ _jsx("ul", {
            className: "theList",
            style: {
                alignTracks: 'center'
            },
            children: listItems
        }));
    }
}
;
/* harmony default export */ const components_TodoItems = ((/* unused pure expression or super */ null && (TodoItems_TodoItems)));

;// CONCATENATED MODULE: ./components/TodoList.js



class TodoList_TodoList extends (/* unused pure expression or super */ null && (Component)) {
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState)=>{
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value = "";
        }
        console.log(this.state.items);
        e.preventDefault();
    }
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function(item) {
            return item.key !== key;
        });
        this.setState({
            items: filteredItems
        });
    }
    render() {
        return(/*#__PURE__*/ _jsxs("div", {
            className: "todoListMain",
            style: {
                justifyContent: 'center',
                alignItems: 'center'
            },
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "header",
                    children: /*#__PURE__*/ _jsxs("form", {
                        onSubmit: this.addItem,
                        children: [
                            /*#__PURE__*/ _jsx("input", {
                                ref: (a)=>this._inputElement = a
                                ,
                                placeholder: "Enter Name"
                            }),
                            /*#__PURE__*/ _jsx("button", {
                                type: "submit",
                                children: "add"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsx(TodoItems, {
                    entries: this.state.items,
                    delete: this.deleteItem
                })
            ]
        }));
    }
}
/* harmony default export */ const components_TodoList = ((/* unused pure expression or super */ null && (TodoList_TodoList)));

;// CONCATENATED MODULE: ./components/AddTaskItems.js


class AddTaskItems_AddTaskItems extends (/* unused pure expression or super */ null && (Component)) {
    constructor(props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    delete(key) {
        this.props.delete(key);
    }
    createTasks(item) {
        return(/*#__PURE__*/ _jsxs("div", {
            children: [
                item.text,
                /*#__PURE__*/ _jsx("button", {
                    onClick: ()=>this.delete(item.key)
                    ,
                    children: "delete"
                }, item.key)
            ]
        }, item.key));
    }
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return(/*#__PURE__*/ _jsx("ul", {
            children: listItems
        }));
    }
}
;
/* harmony default export */ const components_AddTaskItems = ((/* unused pure expression or super */ null && (AddTaskItems_AddTaskItems)));

;// CONCATENATED MODULE: ./components/AddTask.js






class AddTask extends (/* unused pure expression or super */ null && (Component)) {
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(e) {
        if (this._inputElement.value !== "") {
            var task = this._inputElement.value;
            var newItem = {
                text: /*#__PURE__*/ _jsxs("section", {
                    className: utilStyles.headingLg,
                    children: [
                        /*#__PURE__*/ _jsx("p", {
                            children: task
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            children: /*#__PURE__*/ _jsx(TodoList, {
                            })
                        })
                    ]
                }),
                key: Date.now()
            };
            this.setState((prevState)=>{
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value = "";
        }
        console.log(this.state.items);
        e.preventDefault();
    }
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function(item) {
            return item.key !== key;
        });
        this.setState({
            items: filteredItems
        });
    }
    render() {
        return(/*#__PURE__*/ _jsxs("div", {
            className: "todoListMain",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "header",
                    children: /*#__PURE__*/ _jsxs("form", {
                        onSubmit: this.addItem,
                        children: [
                            /*#__PURE__*/ _jsx("input", {
                                ref: (a)=>this._inputElement = a
                                ,
                                placeholder: "Enter Task"
                            }),
                            /*#__PURE__*/ _jsx("button", {
                                type: "submit",
                                children: "add"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsx(AddTaskItems, {
                    entries: this.state.items,
                    delete: this.deleteItem
                })
            ]
        }));
    }
}
/* harmony default export */ const components_AddTask = ((/* unused pure expression or super */ null && (AddTask)));


/***/ }),

/***/ 4006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavTabs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8544);
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1307);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__);





function LinkTab(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tab__WEBPACK_IMPORTED_MODULE_4___default()), {
        component: "a",
        ...props
    }));
}
function NavTabs() {
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
            sx: {
                width: '100%'
            },
            style: {
                alignSelf: "center"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3___default()), {
                onChange: handleChange,
                "aria-label": "nav tabs example",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkTab, {
                            label: "Drive",
                            href: "/posts/Drive"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkTab, {
                            label: "Engine",
                            href: "/posts/Engine"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkTab, {
                            label: "Chassis",
                            href: "/posts/Chassis"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkTab, {
                            label: "Electrical",
                            href: "/posts/Electrical"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkTab, {
                            label: "Suspension",
                            href: "/posts/Suspension"
                        })
                    ]
                })
            })
        })
    }));
};


/***/ })

};
;
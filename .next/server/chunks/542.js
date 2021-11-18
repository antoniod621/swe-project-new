"use strict";
exports.id = 542;
exports.ids = [542];
exports.modules = {

/***/ 7542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_AddTask)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/TodoItems.js


class TodoItems extends external_react_.Component {
    constructor(props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    delete(key) {
        this.props.delete(key);
    }
    createTasks(item) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
            onClick: ()=>this.delete(item.key)
            ,
            children: item.text
        }, item.key));
    }
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "theList",
            style: {
                alignTracks: 'center'
            },
            children: listItems
        }));
    }
}
;
/* harmony default export */ const components_TodoItems = (TodoItems);

;// CONCATENATED MODULE: ./components/TodoList.js



class TodoList extends external_react_.Component {
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
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "todoListMain",
            style: {
                justifyContent: 'center',
                alignItems: 'center'
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: this.addItem,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                ref: (a)=>this._inputElement = a
                                ,
                                placeholder: "Enter Name"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                children: "add"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_TodoItems, {
                    entries: this.state.items,
                    delete: this.deleteItem
                })
            ]
        }));
    }
}
/* harmony default export */ const components_TodoList = (TodoList);

// EXTERNAL MODULE: ./styles/utils.module.css
var utils_module = __webpack_require__(3900);
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);
;// CONCATENATED MODULE: ./components/AddTaskItems.js


class AddTaskItems extends external_react_.Component {
    constructor(props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    delete(key) {
        this.props.delete(key);
    }
    createTasks(item) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                item.text,
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
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
        return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
            children: listItems
        }));
    }
}
;
/* harmony default export */ const components_AddTaskItems = (AddTaskItems);

;// CONCATENATED MODULE: ./components/AddTask.js






class AddTask extends external_react_.Component {
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
                text: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: (utils_module_default()).headingLg,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: task
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_TodoList, {
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
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "todoListMain",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: this.addItem,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                ref: (a)=>this._inputElement = a
                                ,
                                placeholder: "Enter Task"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                children: "add"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_AddTaskItems, {
                    entries: this.state.items,
                    delete: this.deleteItem
                })
            ]
        }));
    }
}
/* harmony default export */ const components_AddTask = (AddTask);


/***/ })

};
;
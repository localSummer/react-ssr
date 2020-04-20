exports.ids = ["chunk-list"];
exports.modules = {

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/client/pages/List/index.less":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--5-3!./src/client/pages/List/index.less ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".list-page-box {\\n  font-size: 14px;\\n  text-align: left;\\n  padding: 10px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/client/pages/List/index.less?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??ref--5-3");

/***/ }),

/***/ "./src/client/common/components/IsoConnect/index.js":
/*!**********************************************************!*\
  !*** ./src/client/common/components/IsoConnect/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PageContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PageContainer */ \"./src/client/common/components/PageContainer/index.jsx\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  styles,\n  mapStateToProps = {},\n  mapDispatchToProps = {}\n}, ActiveComponent) => {\n  return isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(styles)(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Object(_PageContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ActiveComponent)));\n});\n\n//# sourceURL=webpack:///./src/client/common/components/IsoConnect/index.js?");

/***/ }),

/***/ "./src/client/common/components/PageContainer/index.jsx":
/*!**************************************************************!*\
  !*** ./src/client/common/components/PageContainer/index.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nlet _this = null;\n\nconst popStateCallback = () => {\n  if (_this && _this.getInitialProps) {\n    _this.getInitialProps();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SourceComponent => {\n  return class HoComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    constructor(props) {\n      super(props);\n      let initialData = props.initialData || {};\n\n      if (false) {}\n\n      this.state = {\n        initialData,\n        canClientFetch: false\n      };\n    }\n\n    static async getInitialProps(ctx) {\n      return SourceComponent.getInitialProps ? await SourceComponent.getInitialProps(ctx) : {};\n    }\n\n    async getInitialProps() {\n      const props = this.props;\n      const store = window.__STORE__; // 从全局得到 store\n\n      const res = props.getInitialData ? await props.getInitialData(store.dispatch) : SourceComponent.getInitialProps ? await SourceComponent.getInitialProps() : {};\n      this.setState({\n        initialData: res,\n        canClientFetch: true\n      });\n    }\n\n    async componentDidMount() {\n      _this = this; // 注册事件，用于在页面回退的时候触发\n\n      window.addEventListener('popstate', popStateCallback);\n      const canClientFetch = this.props.history && this.props.history.action === 'PUSH';\n\n      if (canClientFetch) {\n        await this.getInitialProps();\n      }\n    }\n\n    render() {\n      const props = { ...this.props,\n        initialData: this.state.initialData\n      };\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SourceComponent, props);\n    }\n\n  };\n});\n\n//# sourceURL=webpack:///./src/client/common/components/PageContainer/index.jsx?");

/***/ }),

/***/ "./src/client/pages/List/index.jsx":
/*!*****************************************!*\
  !*** ./src/client/pages/List/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux/index */ \"./src/client/pages/List/redux/index.js\");\n/* harmony import */ var _common_components_IsoConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/IsoConnect */ \"./src/client/common/components/IsoConnect/index.js\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ \"./src/client/pages/List/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);\n\n //action  获取初始化数据\n\n\n\n\n\nclass List extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  static async getInitialProps({\n    store\n  }) {\n    return store.dispatch(Object(_redux_index__WEBPACK_IMPORTED_MODULE_2__[\"getInitialData\"])());\n  }\n\n  render() {\n    const {\n      fetchData = {},\n      page = {}\n    } = this.props.initialData || {};\n    const {\n      tdk = {}\n    } = page;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, tdk.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"description\",\n      content: tdk.description\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"keywords\",\n      content: tdk.keywords\n    })), fetchData.data && fetchData.data.map((item, index) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: index\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, item.desc));\n    }), !fetchData.data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u6682\\u65E0\\u6570\\u636E\"));\n  }\n\n}\n\nconst mapStateToProps = state => ({\n  initialData: state.listPage\n});\n\nconst mapDispatchToProps = dispatch => ({\n  getInitialData() {\n    console.log('dispath fetch data');\n    return dispatch(Object(_redux_index__WEBPACK_IMPORTED_MODULE_2__[\"getInitialData\"])());\n  }\n\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_common_components_IsoConnect__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  styles: (_index_less__WEBPACK_IMPORTED_MODULE_4___default()),\n  mapStateToProps,\n  mapDispatchToProps\n}, List));\n\n//# sourceURL=webpack:///./src/client/pages/List/index.jsx?");

/***/ }),

/***/ "./src/client/pages/List/index.less":
/*!******************************************!*\
  !*** ./src/client/pages/List/index.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js??ref--5-3!./index.less */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/client/pages/List/index.less\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/client/pages/List/index.less?");

/***/ })

};;
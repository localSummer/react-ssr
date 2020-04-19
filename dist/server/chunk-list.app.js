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

/***/ "./src/client/common/components/PageContainer/index.jsx":
/*!**************************************************************!*\
  !*** ./src/client/common/components/PageContainer/index.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nlet _this = null;\n\nconst popStateCallback = () => {\n  if (_this && _this.getInitialProps) {\n    _this.getInitialProps();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SourceComponent => {\n  return class HoComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    constructor(props) {\n      super(props);\n      let initialData = props.initialData || {};\n\n      if (false) {}\n\n      this.state = {\n        initialData,\n        canClientFetch: false\n      };\n    }\n\n    static async getInitialProps() {\n      return SourceComponent.getInitialProps ? await SourceComponent.getInitialProps() : {};\n    }\n\n    async getInitialProps() {\n      const res = SourceComponent.getInitialProps ? await SourceComponent.getInitialProps() : {};\n      this.setState({\n        initialData: res,\n        canClientFetch: true\n      });\n    }\n\n    async componentDidMount() {\n      _this = this; // 注册事件，用于在页面回退的时候触发\n\n      window.addEventListener('popstate', popStateCallback);\n      const canClientFetch = this.props.history && this.props.history.action === 'PUSH';\n\n      if (canClientFetch) {\n        await this.getInitialProps();\n      }\n    }\n\n    render() {\n      const props = { ...this.props,\n        initialData: this.state.initialData\n      };\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SourceComponent, props);\n    }\n\n  };\n});\n\n//# sourceURL=webpack:///./src/client/common/components/PageContainer/index.jsx?");

/***/ }),

/***/ "./src/client/pages/List/data.js":
/*!***************************************!*\
  !*** ./src/client/pages/List/data.js ***!
  \***************************************/
/*! exports provided: mockData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mockData\", function() { return mockData; });\nconst mockData = [{\n  title: '深入浅出TypeScript：从基础知识到类型编程',\n  desc: 'Vue3 源码及开发必备基础，从基础知识到类型工具设计，从理论到实战，手把手让你从零基础成为进阶使用者。',\n  img: 'https://user-gold-cdn.xitu.io/2019/11/8/16e4ab5d6aff406a?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1'\n}, {\n  title: 'SVG 动画开发实战手册',\n  desc: '从0到1，学习SVG动画开发知识，快速高效完成SVG动画效果开发。',\n  img: 'https://user-gold-cdn.xitu.io/2019/9/26/16d6bda264ac27e4?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1'\n}, {\n  title: '预售JavaScript 设计模式核⼼原理与应⽤实践',\n  desc: '通俗易懂的编程“套路“学。带你深入看似高深实则接地气的设计模式原理，在实际场景中内化设计模式的”道“与”术“。学会驾驭代码，而非被其奴役。',\n  img: 'https://user-gold-cdn.xitu.io/2019/9/16/16d382e623923d91?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1'\n}];\n\n//# sourceURL=webpack:///./src/client/pages/List/data.js?");

/***/ }),

/***/ "./src/client/pages/List/index.jsx":
/*!*****************************************!*\
  !*** ./src/client/pages/List/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/client/pages/List/data.js\");\n/* harmony import */ var _common_components_PageContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/components/PageContainer */ \"./src/client/common/components/PageContainer/index.jsx\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ \"./src/client/pages/List/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nclass List extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  static async getInitialProps() {\n    const fetchData = () => {\n      return new Promise((resolve, reject) => {\n        setTimeout(() => {\n          resolve({\n            code: 0,\n            data: _data__WEBPACK_IMPORTED_MODULE_3__[\"mockData\"]\n          });\n        }, 500);\n      });\n    };\n\n    let res = await fetchData();\n    return {\n      fetchData: res,\n      page: {\n        tdk: {\n          title: '列表页',\n          keywords: 'React 服务端渲染',\n          description: 'React 双端同构'\n        }\n      }\n    };\n  }\n\n  render() {\n    const {\n      fetchData = {},\n      page = {}\n    } = this.props.initialData || {};\n    const {\n      tdk = {}\n    } = page;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, tdk.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"description\",\n      content: tdk.description\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"keywords\",\n      content: tdk.keywords\n    })), fetchData.data && fetchData.data.map((item, index) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: index\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, item.desc));\n    }), !fetchData.data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u6682\\u65E0\\u6570\\u636E\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_index_less__WEBPACK_IMPORTED_MODULE_5___default.a)(Object(_common_components_PageContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(List)));\n\n//# sourceURL=webpack:///./src/client/pages/List/index.jsx?");

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
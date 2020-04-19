exports.ids = ["chunk-index"];
exports.modules = {

/***/ "./src/client/common/components/PageContainer/index.jsx":
/*!**************************************************************!*\
  !*** ./src/client/common/components/PageContainer/index.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nlet _this = null;\n\nconst popStateCallback = () => {\n  if (_this && _this.getInitialProps) {\n    _this.getInitialProps();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SourceComponent => {\n  return class HoComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    constructor(props) {\n      super(props);\n      let initialData = props.initialData || {};\n\n      if (false) {}\n\n      this.state = {\n        initialData,\n        canClientFetch: false\n      };\n    }\n\n    static async getInitialProps() {\n      return SourceComponent.getInitialProps ? await SourceComponent.getInitialProps() : {};\n    }\n\n    async getInitialProps() {\n      const res = SourceComponent.getInitialProps ? await SourceComponent.getInitialProps() : {};\n      this.setState({\n        initialData: res,\n        canClientFetch: true\n      });\n    }\n\n    async componentDidMount() {\n      _this = this; // 注册事件，用于在页面回退的时候触发\n\n      window.addEventListener('popstate', popStateCallback);\n      const canClientFetch = this.props.history && this.props.history.action === 'PUSH';\n\n      if (canClientFetch) {\n        await this.getInitialProps();\n      }\n    }\n\n    render() {\n      const props = { ...this.props,\n        initialData: this.state.initialData\n      };\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SourceComponent, props);\n    }\n\n  };\n});\n\n//# sourceURL=webpack:///./src/client/common/components/PageContainer/index.jsx?");

/***/ }),

/***/ "./src/client/pages/Index/index.jsx":
/*!******************************************!*\
  !*** ./src/client/pages/Index/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_components_PageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/PageContainer */ \"./src/client/common/components/PageContainer/index.jsx\");\n\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  static async getInitialProps() {\n    return {\n      page: {\n        tdk: {\n          title: '首页 - react ssr',\n          keywords: '前端技术江湖',\n          description: '关键词'\n        }\n      }\n    };\n  }\n\n  handleClick() {\n    alert('一起来玩 react ssr 呀,点我有反应吗？');\n  }\n\n  render() {\n    const {\n      page = {}\n    } = this.props.initialData || {};\n    const {\n      tdk = {}\n    } = page;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"page-index-box\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, tdk.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"description\",\n      content: tdk.description\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"keywords\",\n      content: tdk.keywords\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      onClick: this.handleClick\n    }, \"\\u9996\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u9996\\u9875\\u4E3B\\u89C6\\u89C9\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_common_components_PageContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Index));\n\n//# sourceURL=webpack:///./src/client/pages/Index/index.jsx?");

/***/ })

};;
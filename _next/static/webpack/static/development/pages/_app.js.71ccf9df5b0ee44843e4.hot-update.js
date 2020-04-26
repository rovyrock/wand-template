webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/menu/style */ "./node_modules/antd/lib/menu/style/index.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Head */ "./components/Head.js");
/* harmony import */ var _routerLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routerLink */ "./components/routerLink.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _store_redux_menu_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../store/redux/menu-redux */ "./store/redux/menu-redux.js");












var _dec,
    _class,
    _jsxFileName = "/Users/rovyluo/Documents/GitHub/wand-template/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var linkPrefix = next_config__WEBPACK_IMPORTED_MODULE_17___default()().publicRuntimeConfig.linkPrefix;
var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_10___default.a.Header;

var HeaderBar = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["connect"])(function (state) {
  return state.SideReducer;
}, {
  toggleDispatch: _store_redux_menu_redux__WEBPACK_IMPORTED_MODULE_18__["toggleDispatch"],
  hideDispatch: _store_redux_menu_redux__WEBPACK_IMPORTED_MODULE_18__["hideDispatch"]
}), Object(next_router__WEBPACK_IMPORTED_MODULE_14__["withRouter"])(_class = _dec(_class = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(HeaderBar, _Component);

  var _super = _createSuper(HeaderBar);

  function HeaderBar() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, HeaderBar);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(HeaderBar, [{
    key: "toggleSide",
    value: function toggleSide() {
      this.props.toggleDispatch();
    }
  }, {
    key: "progress",
    value: function progress() {
      var _this = this;

      //进度条
      next_router__WEBPACK_IMPORTED_MODULE_14___default.a.onRouteChangeStart = function (url) {
        return nprogress__WEBPACK_IMPORTED_MODULE_15___default.a.start();
      };

      next_router__WEBPACK_IMPORTED_MODULE_14___default.a.onRouteChangeComplete = function () {
        _this.props.hideDispatch();

        nprogress__WEBPACK_IMPORTED_MODULE_15___default.a.done();
      };

      next_router__WEBPACK_IMPORTED_MODULE_14___default.a.onRouteChangeError = function () {
        return nprogress__WEBPACK_IMPORTED_MODULE_15___default.a.done();
      };
    }
  }, {
    key: "render",
    value: function render() {
      this.progress();
      var pathname = this.props.router.pathname;
      var menuPath = ['/project/list', '/act/list'];
      var defaultSelectedKeys = this.props.defaultSelectedKeys;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }
      }, __jsx(_Head__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }), __jsx(Header, {
        theme: "light",
        className: "header admin-layout-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "header-main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "header-logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, __jsx(_routerLink__WEBPACK_IMPORTED_MODULE_12__["default"], {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: "".concat(linkPrefix, "/static/logo@2x.png"),
        className: "header-logo-img",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 22
        }
      })))), __jsx("div", {
        className: "header-nav-main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }
      }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a, {
        theme: "light",
        mode: "horizontal",
        defaultSelectedKeys: defaultSelectedKeys,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 15
        }
      }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        key: "1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }
      }, __jsx(_routerLink__WEBPACK_IMPORTED_MODULE_12__["default"], {
        href: "/project/list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: menuPath.indexOf(pathname) > -1 ? 'link-active' : '',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 46
        }
      }, "\u9879\u76EE"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        key: "2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }
      }, __jsx(_routerLink__WEBPACK_IMPORTED_MODULE_12__["default"], {
        href: "/act/list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: menuPath.indexOf(pathname) > -1 ? 'link-active' : '',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 42
        }
      }, "\u6D3B\u52A8")))))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        justify: "end",
        align: "middle",
        className: "header-nav-aside",
        gutter: [32],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }
      })));
    }
  }]);

  return HeaderBar;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"])) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (HeaderBar);

/***/ })

})
//# sourceMappingURL=_app.js.71ccf9df5b0ee44843e4.hot-update.js.map
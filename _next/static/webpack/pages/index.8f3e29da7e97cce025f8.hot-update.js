webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/card.module.css */ "./styles/card.module.css");
/* harmony import */ var _styles_card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_card_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\github\\blog\\components\\Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Card(_ref) {
  var slug = _ref.slug,
      title = _ref.title,
      date = _ref.date;
  return __jsx("div", {
    className: _styles_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts/".concat(slug),
    as: "".concat(process.env.URL, "/posts/").concat(slug),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("a", {
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: _styles_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, title), __jsx("p", {
    className: _styles_card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.date,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, date))));
}
_c = Card;

var _c;

$RefreshReg$(_c, "Card");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/CustomHead.js":
/*!**********************************!*\
  !*** ./components/CustomHead.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomHead; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\github\\blog\\components\\CustomHead.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function CustomHead(_ref) {
  var title = _ref.title,
      path = _ref.path;
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("link", {
    rel: "preload",
    href: "fonts/Cabin/static/Cabin-Bold.ttf",
    as: "font",
    crossOrigin: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "preload",
    href: "fonts/SignikaNegative/SignikaNegative-Regular.ttf",
    as: "font",
    crossOrigin: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "preload",
    href: "fonts/SignikaNegative/SignikaNegative-Bold.ttf",
    as: "font",
    crossOrigin: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "preload",
    href: "fonts/OxygenMono/OxygenMono-Regular.ttf",
    as: "font",
    crossOrigin: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("meta", {
    httpEquiv: "Content-Type",
    content: "text/html; charset=utf-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit=no",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "url",
    content: "https://fazeelanizam13.github.io/blog/".concat(path),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "description",
    content: "Frontend Enthusiast, Language Freak, Music and Movie Lover. This is where you'll find my ramblings about all these and more!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "og-title",
    property: "og:title",
    content: "".concat(title, " - Blog | Fazeela Nizam"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "og-url",
    property: "og:url",
    content: "https://fazeelanizam13.github.io/blog/".concat(path),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "og-description",
    property: "og:description",
    content: "Frontend Enthusiast, Language Freak, Music and Movie Lover. This is where you'll find my ramblings about all these and more!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "favicon-icons/android-chrome-192x192.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "favicon-icons/apple-touch-icon.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "favicon-icons/favicon-32x32.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "favicon-icons/favicon-16x16.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "".concat(title, " - Blog | Fazeela Nizam")));
}
_c = CustomHead;

var _c;

$RefreshReg$(_c, "CustomHead");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_bar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/bar.module.css */ "./styles/bar.module.css");
/* harmony import */ var _styles_bar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_bar_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\github\\blog\\components\\NavBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function NavBar() {
  return __jsx("div", {
    className: "".concat(_styles_bar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.root, " ").concat(_styles_bar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.stick),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "".concat(_styles_bar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.group, " ").concat(_styles_bar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.iconGroup),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    as: "".concat(process.env.URL, "/"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/navbar-icons/home.png",
    className: _styles_bar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    alt: "Home Icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "".concat(_styles_bar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.group, " ").concat(_styles_bar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.iconGroup),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/tags",
    as: "".concat(process.env.URL, "/tags"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/navbar-icons/tags.png",
    className: _styles_bar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    alt: "Tags Icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/archives",
    as: "".concat(process.env.URL, "/archives"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/navbar-icons/archives.png",
    className: _styles_bar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    alt: "Archives Icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  })))));
}
_c = NavBar;

var _c;

$RefreshReg$(_c, "NavBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0N1c3RvbUhlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2QmFyLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJzbHVnIiwidGl0bGUiLCJkYXRlIiwic3R5bGVzIiwicm9vdCIsInByb2Nlc3MiLCJlbnYiLCJVUkwiLCJ3aWR0aCIsIkN1c3RvbUhlYWQiLCJwYXRoIiwiTmF2QmFyIiwic3RpY2siLCJncm91cCIsImljb25Hcm91cCIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULE9BQXFDO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWZDLEtBQWUsUUFBZkEsS0FBZTtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNsRCxTQUNFO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksbUJBQVlKLElBQVosQ0FBVjtBQUE4QixNQUFFLFlBQUtLLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFqQixvQkFBOEJQLElBQTlCLENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFNBQUssRUFBRTtBQUFFUSxXQUFLLEVBQUU7QUFBVCxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRUwsOERBQU0sQ0FBQ0YsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QkEsS0FBN0IsQ0FERixFQUVFO0FBQUcsYUFBUyxFQUFFRSw4REFBTSxDQUFDRCxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFB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O0FBR0UsT0FBRyxFQUFDLFdBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixDQURGLEVBYUU7QUFBSyxhQUFTLFlBQUtaLDZEQUFNLENBQUNVLEtBQVosY0FBcUJWLDZEQUFNLENBQUNXLFNBQTVCLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsT0FBWDtBQUFtQixNQUFFLFlBQUtULE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFqQixVQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLHdCQUROO0FBRUUsYUFBUyxFQUFFSiw2REFBTSxDQUFDWSxJQUZwQjtBQUdFLE9BQUcsRUFBQyxXQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFVRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBdUIsTUFBRSxZQUFLVixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBakIsY0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyw0QkFETjtBQUVFLGFBQVMsRUFBRUosNkRBQU0sQ0FBQ1ksSUFGcEI7QUFHRSxPQUFHLEVBQUMsZUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQVZGLENBYkYsQ0FERjtBQW9DRDtLQXJDdUJKLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGYzZTI5ZGE3ZTk3Y2NlMDI1ZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NhcmQubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCh7IHNsdWcsIHRpdGxlLCBkYXRlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cclxuICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8ke3NsdWd9YH0gYXM9e2Ake3Byb2Nlc3MuZW52LlVSTH0vcG9zdHMvJHtzbHVnfWB9PlxyXG4gICAgICAgIDxhIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57dGl0bGV9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+e2RhdGV9PC9wPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tSGVhZCh7IHRpdGxlLCBwYXRoIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPSdwcmVsb2FkJ1xyXG4gICAgICAgIGhyZWY9J2ZvbnRzL0NhYmluL3N0YXRpYy9DYWJpbi1Cb2xkLnR0ZidcclxuICAgICAgICBhcz0nZm9udCdcclxuICAgICAgICBjcm9zc09yaWdpbj0nJ1xyXG4gICAgICAvPlxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD0ncHJlbG9hZCdcclxuICAgICAgICBocmVmPSdmb250cy9TaWduaWthTmVnYXRpdmUvU2lnbmlrYU5lZ2F0aXZlLVJlZ3VsYXIudHRmJ1xyXG4gICAgICAgIGFzPSdmb250J1xyXG4gICAgICAgIGNyb3NzT3JpZ2luPScnXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPSdwcmVsb2FkJ1xyXG4gICAgICAgIGhyZWY9J2ZvbnRzL1NpZ25pa2FOZWdhdGl2ZS9TaWduaWthTmVnYXRpdmUtQm9sZC50dGYnXHJcbiAgICAgICAgYXM9J2ZvbnQnXHJcbiAgICAgICAgY3Jvc3NPcmlnaW49JydcclxuICAgICAgLz5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9J3ByZWxvYWQnXHJcbiAgICAgICAgaHJlZj0nZm9udHMvT3h5Z2VuTW9uby9PeHlnZW5Nb25vLVJlZ3VsYXIudHRmJ1xyXG4gICAgICAgIGFzPSdmb250J1xyXG4gICAgICAgIGNyb3NzT3JpZ2luPScnXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8bWV0YSBodHRwRXF1aXY9J3gtdWEtY29tcGF0aWJsZScgY29udGVudD0naWU9ZWRnZScgLz5cclxuICAgICAgPG1ldGEgaHR0cEVxdWl2PSdDb250ZW50LVR5cGUnIGNvbnRlbnQ9J3RleHQvaHRtbDsgY2hhcnNldD11dGYtOCcgLz5cclxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHNocmluay10by1maXQ9bm8nIC8+XHJcblxyXG4gICAgICA8bWV0YSBuYW1lPSd1cmwnIGNvbnRlbnQ9e2BodHRwczovL2ZhemVlbGFuaXphbTEzLmdpdGh1Yi5pby9ibG9nLyR7cGF0aH1gfSAvPlxyXG4gICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD1cIkZyb250ZW5kIEVudGh1c2lhc3QsIExhbmd1YWdlIEZyZWFrLCBNdXNpYyBhbmQgTW92aWUgTG92ZXIuIFRoaXMgaXMgd2hlcmUgeW91J2xsIGZpbmQgbXkgcmFtYmxpbmdzIGFib3V0IGFsbCB0aGVzZSBhbmQgbW9yZSFcIiAvPlxyXG5cclxuICAgICAgPG1ldGEgbmFtZT0nb2ctdGl0bGUnIHByb3BlcnR5PSdvZzp0aXRsZScgY29udGVudD17YCR7dGl0bGV9IC0gQmxvZyB8IEZhemVlbGEgTml6YW1gfSAvPlxyXG4gICAgICA8bWV0YSBuYW1lPSdvZy11cmwnIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9e2BodHRwczovL2ZhemVlbGFuaXphbTEzLmdpdGh1Yi5pby9ibG9nLyR7cGF0aH1gfSAvPlxyXG4gICAgICA8bWV0YSBuYW1lPSdvZy1kZXNjcmlwdGlvbicgcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJyBjb250ZW50PVwiRnJvbnRlbmQgRW50aHVzaWFzdCwgTGFuZ3VhZ2UgRnJlYWssIE11c2ljIGFuZCBNb3ZpZSBMb3Zlci4gVGhpcyBpcyB3aGVyZSB5b3UnbGwgZmluZCBteSByYW1ibGluZ3MgYWJvdXQgYWxsIHRoZXNlIGFuZCBtb3JlIVwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZScgY29udGVudD0nZmF2aWNvbi1pY29ucy9hbmRyb2lkLWNocm9tZS0xOTJ4MTkyLnBuZycgLz5cclxuXHJcbiAgICAgIDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgc2l6ZXM9JzE4MHgxODAnIGhyZWY9J2Zhdmljb24taWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmcnIC8+XHJcbiAgICAgIDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBzaXplcz0nMzJ4MzInIGhyZWY9J2Zhdmljb24taWNvbnMvZmF2aWNvbi0zMngzMi5wbmcnIC8+XHJcbiAgICAgIDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBzaXplcz0nMTZ4MTYnIGhyZWY9J2Zhdmljb24taWNvbnMvZmF2aWNvbi0xNngxNi5wbmcnIC8+XHJcblxyXG4gICAgICA8dGl0bGU+e2Ake3RpdGxlfSAtIEJsb2cgfCBGYXplZWxhIE5pemFtYH08L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2Jhci5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnJvb3R9ICR7c3R5bGVzLnN0aWNrfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmdyb3VwfSAke3N0eWxlcy5pY29uR3JvdXB9YH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nLycgYXM9e2Ake3Byb2Nlc3MuZW52LlVSTH0vYH0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz0nL25hdmJhci1pY29ucy9ob21lLnBuZydcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29ufVxyXG4gICAgICAgICAgICAgIGFsdD0nSG9tZSBJY29uJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmdyb3VwfSAke3N0eWxlcy5pY29uR3JvdXB9YH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nL3RhZ3MnIGFzPXtgJHtwcm9jZXNzLmVudi5VUkx9L3RhZ3NgfT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScvbmF2YmFyLWljb25zL3RhZ3MucG5nJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb259XHJcbiAgICAgICAgICAgICAgYWx0PSdUYWdzIEljb24nXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy9hcmNoaXZlcycgYXM9e2Ake3Byb2Nlc3MuZW52LlVSTH0vYXJjaGl2ZXNgfT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScvbmF2YmFyLWljb25zL2FyY2hpdmVzLnBuZydcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29ufVxyXG4gICAgICAgICAgICAgIGFsdD0nQXJjaGl2ZXMgSWNvbidcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
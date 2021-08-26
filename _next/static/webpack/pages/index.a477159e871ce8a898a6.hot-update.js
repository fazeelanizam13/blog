webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
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
    href: "".concat("", "/posts/").concat(slug),
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
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
    href: "".concat("", "/"),
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
    href: "".concat("", "/tags"),
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
    href: "".concat("", "/archives"),
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJDYXJkIiwic2x1ZyIsInRpdGxlIiwiZGF0ZSIsInN0eWxlcyIsInJvb3QiLCJwcm9jZXNzIiwid2lkdGgiLCJOYXZCYXIiLCJzdGljayIsImdyb3VwIiwiaWNvbkdyb3VwIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsT0FBcUM7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBZkMsS0FBZSxRQUFmQSxLQUFlO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ2xELFNBQ0U7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxZQUFLQyxFQUFMLG9CQUE4QkwsSUFBOUIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxTQUFLLEVBQUU7QUFBRU0sV0FBSyxFQUFFO0FBQVQsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVILDhEQUFNLENBQUNGLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkJBLEtBQTdCLENBREYsRUFFRTtBQUFHLGFBQVMsRUFBRUUsOERBQU0sQ0FBQ0QsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QkEsSUFBNUIsQ0FGRixDQURGLENBREYsQ0FERjtBQVVEO0tBWHVCSCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIeEI7QUFDQTtBQUVlLFNBQVNRLE1BQVQsR0FBa0I7QUFDL0IsU0FDRTtBQUFLLGFBQVMsWUFBS0osNkRBQU0sQ0FBQ0MsSUFBWixjQUFvQkQsNkRBQU0sQ0FBQ0ssS0FBM0IsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLFlBQUtMLDZEQUFNLENBQUNNLEtBQVosY0FBcUJOLDZEQUFNLENBQUNPLFNBQTVCLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLFlBQUtMLEVBQUwsTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLHdCQUROO0FBRUUsYUFBUyxFQUFFRiw2REFBTSxDQUFDUSxJQUZwQjtBQUdFLE9BQUcsRUFBQyxXQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FERixFQWFFO0FBQUssYUFBUyxZQUFLUiw2REFBTSxDQUFDTSxLQUFaLGNBQXFCTiw2REFBTSxDQUFDTyxTQUE1QixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxZQUFLTCxFQUFMLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyx3QkFETjtBQUVFLGFBQVMsRUFBRUYsNkRBQU0sQ0FBQ1EsSUFGcEI7QUFHRSxPQUFHLEVBQUMsV0FITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBVUUsTUFBQyxnREFBRDtBQUFNLFFBQUksWUFBS04sRUFBTCxjQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsNEJBRE47QUFFRSxhQUFTLEVBQUVGLDZEQUFNLENBQUNRLElBRnBCO0FBR0UsT0FBRyxFQUFDLGVBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FWRixDQWJGLENBREY7QUFvQ0Q7S0FyQ3VCSixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE0NzcxNTllODcxY2U4YTg5OGE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jYXJkLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQoeyBzbHVnLCB0aXRsZSwgZGF0ZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlVSTH0vcG9zdHMvJHtzbHVnfWB9PlxyXG4gICAgICAgIDxhIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57dGl0bGV9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+e2RhdGV9PC9wPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2Jhci5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnJvb3R9ICR7c3R5bGVzLnN0aWNrfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmdyb3VwfSAke3N0eWxlcy5pY29uR3JvdXB9YH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuVVJMfS9gfT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScvbmF2YmFyLWljb25zL2hvbWUucG5nJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb259XHJcbiAgICAgICAgICAgICAgYWx0PSdIb21lIEljb24nXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZ3JvdXB9ICR7c3R5bGVzLmljb25Hcm91cH1gfT5cclxuICAgICAgICA8TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5VUkx9L3RhZ3NgfT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScvbmF2YmFyLWljb25zL3RhZ3MucG5nJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb259XHJcbiAgICAgICAgICAgICAgYWx0PSdUYWdzIEljb24nXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlVSTH0vYXJjaGl2ZXNgfT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPScvbmF2YmFyLWljb25zL2FyY2hpdmVzLnBuZydcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29ufVxyXG4gICAgICAgICAgICAgIGFsdD0nQXJjaGl2ZXMgSWNvbidcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
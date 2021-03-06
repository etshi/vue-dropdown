module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(10),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dropdown = __webpack_require__(0);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
  Vue.component(_Dropdown2.default.name, _Dropdown2.default);
};

exports.default = {
  version: '0.0.1',
  install: install
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var EMPTY_FN = function EMPTY_FN() {};

var idx = 0;

exports.default = {
  name: 'Dropdown',

  data: function data() {
    return {
      selected: [],
      isShow: false,
      items: []
    };
  },

  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    grouped: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Please choose'
    },
    width: {
      type: Number,
      default: 120
    },
    fixListWidth: {
      type: Boolean,
      default: true
    },
    cbChanged: {
      type: Function,
      default: EMPTY_FN
    },
    cbItemChanged: {
      type: Function,
      default: EMPTY_FN
    },
    cbCustomSelectedText: {
      type: Function,
      default: EMPTY_FN
    }
  },
  computed: {
    cls: function cls() {
      var c = {
        grouped: this.grouped,
        multiple: this.multiple
      };
      return c;
    },
    selectedText: function selectedText() {
      var text = '';
      var fn = function fn(selected) {
        return selected.map(function (e) {
          return e.label;
        }).join(', ');
      };
      if (this.cbCustomSelectedText !== EMPTY_FN) {
        text = this.cbCustomSelectedText(this.selected, fn);
      } else {
        text = fn(this.selected);
      }
      return text === '' ? this.placeholder : text;
    }
  },
  watch: {
    data: {
      immediate: true,
      handler: function handler(val) {
        this.selected = this.data.filter(function (d) {
          return d.selected;
        });
        this.items = this.data.slice(0);
      }
    }
  },
  methods: {
    id: function id(item) {
      return 'hsy-dropdown-item-' + item._idx;
    },
    appendIdx: function appendIdx(item) {
      if (item._idx === undefined) {
        item._idx = ++idx;
      }
    },
    autoShow: function autoShow() {
      this.isShow = !this.isShow;
    },
    setupTitleIfNeeded: function setupTitleIfNeeded() {
      if (!this.fixListWidth) return;
    },
    autoHide: function autoHide(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isShow = false;
      }
    },
    findSelected: function findSelected() {
      if (!this.grouped) {
        return this.data.filter(function (d) {
          return d.selected === true;
        });
      }
      var items = [];
      return this.data.reduce(function (pre, e) {
        pre = pre.concat(e.children);
        return pre;
      }, items).filter(function (d) {
        return d.selected === true;
      });
    },
    itemClicked: function itemClicked(item) {
      var _this = this;

      if (!this.multiple) {
        if (this.selected.indexOf(item) === -1) {
          this.findSelected().forEach(function (d) {
            return d.selected = false;
          });
          item.selected = true;
          this.selected.pop();
          this.selected.push(item);

          if (this.cbChanged !== EMPTY_FN) {
            this.cbChanged(this.findSelected());
          }
        }
        this.$nextTick(function () {
          _this.isShow = false;
        });
      }
    },
    checkboxChanged: function checkboxChanged(item) {
      if (this.selected === null) {
        this.selected = [];
      }

      var id = this.id(item);
      item.selected = document.querySelector('#' + id).checked;

      if (!item.selected) {
        this.selected = this.selected.filter(function (d) {
          return d !== item;
        });
      } else {
        this.selected.push(item);
      }

      if (this.cbItemChanged !== EMPTY_FN) {
        this.cbItemChanged(item);
      }
      if (this.cbChanged !== EMPTY_FN) {
        this.cbChanged(this.selected);
      }
    }
  },
  updated: function updated() {
    this.setupTitleIfNeeded();
  },
  mounted: function mounted() {
    this.setupTitleIfNeeded();
    document.addEventListener('click', this.autoHide, false);
  },
  destroyed: function destroyed() {
    document.removeEventListener('click', this.autoHide, false);
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".hsy-dropdown{font:10px Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;display:inline-block;position:relative}.hsy-dropdown>.selected{height:28px;line-height:28px;border-radius:3px;border:1px solid #b3c1d8;font-size:1.2em;padding:0 20px 0 10px;color:#4c5565;cursor:pointer;background:url(" + __webpack_require__(5) + ") no-repeat 100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.hsy-dropdown>.list{position:absolute;top:35px;left:0;font-size:1.2em;box-shadow:0 0 5px rgba(0,0,0,.2);background:#fff;border-radius:3px;z-index:100}.hsy-dropdown>.list>.inner{padding:5px}.hsy-dropdown>.list .item{height:30px;line-height:30px;padding:0 10px;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background-position:5px}.hsy-dropdown.multiple>.list .item:hover,.hsy-dropdown>.list .item:hover{background-color:#eee;border-radius:3px}.hsy-dropdown>.list .item.selected{background:#7d8699 url(" + __webpack_require__(8) + ") no-repeat 10px;border-radius:3px;color:#fff;padding-left:35px}.hsy-dropdown .animated{animation-duration:.35s;animation-fill-mode:both}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.hsy-dropdown .fadeIn{animation-name:fadeIn}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.hsy-dropdown .fadeOut{animation-name:fadeOut}.hsy-dropdown.multiple .item{color:#7d8699;padding:0 5px}.hsy-dropdown.multiple .item.selected{background:none;padding:0 5px;color:#7d8699}.hsy-dropdown.multiple .item input{display:none}.hsy-dropdown.multiple .item input+label{display:block;padding-left:23px;background:url(" + __webpack_require__(6) + ") no-repeat 0;vertical-align:middle;margin:0;cursor:pointer}.hsy-dropdown.multiple .item input:checked+label{background:url(" + __webpack_require__(7) + ") no-repeat 0}.hsy-dropdown.multiple .item input:disabled+label{color:#ccc;cursor:not-allowed}.hsy-dropdown .group{font-size:10px}.hsy-dropdown .group h3{font-size:1.2em;font-weight:500;padding-left:5px;cursor:default}.hsy-dropdown .group .item{font-size:1.2em}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTAgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTg5LjAwMDAwMCwgLTI4Ny4wMDAwMDApIiBmaWxsPSIjQTVBRkMzIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1MS4wMDAwMDAsIDExMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJidXR0b24tMzMtY29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI2LjAwMDAwMCwgMTY4LjY0MDAxNSkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC04IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTIuMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iVHJpYW5nbGUtMiIgcG9pbnRzPSIwLjc3MjUxMDI4OCA5LjkzODAyOTMgOS43NzI1MTAyOSA5LjkzODAyOTMgNS4yNzI1MTAyOSAxNS45MzgwMjkzIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJUcmlhbmdsZS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjI3MjUxMCwgMy45MzgwMjkpIHNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoLTUuMjcyNTEwLCAtMy45MzgwMjkpICIgcG9pbnRzPSIwLjc3MjUxMDI4OCAwLjkzODAyOTI5NyA5Ljc3MjUxMDI5IDAuOTM4MDI5Mjk3IDUuMjcyNTEwMjkgNi45MzgwMjkzIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE0cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE0IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlJlY3RhbmdsZSAyODE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIxIiB5PSIxIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIj48L3JlY3Q+CiAgICAgICAgPG1hc2sgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIG1hc2tVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHg9Ii0xIiB5PSItMSIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0Ij4KICAgICAgICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiBmaWxsPSJ3aGl0ZSI+PC9yZWN0PgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiIGZpbGw9ImJsYWNrIj48L3VzZT4KICAgICAgICA8L21hc2s+CiAgICA8L2RlZnM+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8dXNlIHN0cm9rZT0iIzlCOUI5QiIgbWFzaz0idXJsKCNtYXNrLTIpIiBzdHJva2Utd2lkdGg9IjIiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE0cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE0IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGRlZnM+CiAgICAgICAgPHJlY3QgaWQ9InBhdGgtMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiByeD0iMiI+PC9yZWN0PgogICAgICAgIDxtYXNrIG1hc2tDb250ZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBtYXNrVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB4PSItMSIgeT0iLTEiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCI+CiAgICAgICAgICAgIDxyZWN0IHg9Ii0xIiB5PSItMSIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiBmaWxsPSJ3aGl0ZSI+PC9yZWN0PgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiIGZpbGw9ImJsYWNrIj48L3VzZT4KICAgICAgICA8L21hc2s+CiAgICA8L2RlZnM+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICA8dXNlIHN0cm9rZT0iIzlCOUI5QiIgbWFzaz0idXJsKCNtYXNrLTIpIiBzdHJva2Utd2lkdGg9IjIiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwb2x5bGluZSBzdHJva2U9IiM0QTRBNEEiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRzPSIyIDUuMDgzMzMzMzUgNS4xMTExMTExMSA4IDEwIDMiPjwvcG9seWxpbmU+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTRweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTQgMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+74CMPC90aXRsZT4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtZmFtaWx5PSJGb250QXdlc29tZSIgZm9udC13ZWlnaHQ9Im5vcm1hbCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5MS4wMDAwMDAsIC0zMjYuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNTEuMDAwMDAwLCAxMTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNi4wMDAwMDAsIDIwMC42NDAwMTUpIj4KICAgICAgICAgICAgICAgICAgICA8dGV4dCBpZD0i74CMIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHRzcGFuIHg9IjE0IiB5PSIyMyI+74CMPC90c3Bhbj4KICAgICAgICAgICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hsy-dropdown",
    class: _vm.cls,
    style: ({
      width: _vm.width + 'px'
    })
  }, [_c('div', {
    staticClass: "selected",
    style: ({
      backgroundPosition: (_vm.width - 18) + 'px, center'
    }),
    on: {
      "click": _vm.autoShow
    }
  }, [_vm._v(_vm._s(_vm.selectedText))]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fadeIn",
      "enter-active-class": "animated fadeIn",
      "leave-active-class": "animated fadeOut"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShow),
      expression: "isShow"
    }],
    staticClass: "list",
    style: ({
      width: _vm.fixListWidth ? _vm.width + 'px' : 'auto'
    })
  }, [_c('div', {
    staticClass: "inner"
  }, [_vm._l((_vm.items), function(item) {
    return (!_vm.grouped) ? _c('div', {
      staticClass: "item",
      class: {
        selected: item.selected
      },
      attrs: {
        "data-title": item.label
      },
      on: {
        "click": function($event) {
          !_vm.multiple && _vm.itemClicked(item)
        }
      }
    }, [_vm._v("\n          " + _vm._s(_vm.appendIdx(item)) + "\n          "), (_vm.multiple) ? _c('div', [_c('input', {
      attrs: {
        "type": "checkbox",
        "disabled": item.disabled,
        "id": _vm.id(item)
      },
      domProps: {
        "checked": item.selected
      },
      on: {
        "change": function($event) {
          _vm.checkboxChanged(item)
        }
      }
    }), _vm._v(" "), _c('label', {
      attrs: {
        "for": _vm.id(item)
      },
      domProps: {
        "innerHTML": _vm._s(item.label)
      },
      on: {
        "click": function($event) {
          _vm.itemClicked(item)
        }
      }
    })]) : _c('div', {
      domProps: {
        "innerHTML": _vm._s(item.label)
      }
    })]) : _vm._e()
  }), _vm._v(" "), (_vm.grouped) ? _c('div', _vm._l((_vm.items), function(group) {
    return _c('div', {
      staticClass: "group"
    }, [_c('h3', {
      domProps: {
        "innerHTML": _vm._s(group.label)
      }
    }), _vm._v(" "), _vm._l((group.children), function(item) {
      return _c('div', {
        staticClass: "item",
        class: {
          selected: item.selected
        },
        attrs: {
          "data-title": item.label
        },
        on: {
          "click": function($event) {
            !_vm.multiple && _vm.itemClicked(item)
          }
        }
      }, [_vm._v("\n              " + _vm._s(_vm.appendIdx(item)) + "\n              "), (_vm.multiple) ? _c('div', [_c('input', {
        attrs: {
          "type": "checkbox",
          "disabled": item.disabled,
          "id": _vm.id(item)
        },
        domProps: {
          "checked": item.selected
        },
        on: {
          "change": function($event) {
            _vm.checkboxChanged(item)
          }
        }
      }), _vm._v(" "), _c('label', {
        attrs: {
          "for": _vm.id(item)
        },
        domProps: {
          "innerHTML": _vm._s(item.label)
        },
        on: {
          "click": function($event) {
            _vm.itemClicked(item)
          }
        }
      })]) : _c('div', {
        domProps: {
          "innerHTML": _vm._s(item.label)
        }
      })])
    })], 2)
  })) : _vm._e()], 2)])])], 1)
},staticRenderFns: []}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("847648f0", content, true);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(13)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map
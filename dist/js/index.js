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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Skills = __webpack_require__(2);

var _Skills2 = _interopRequireDefault(_Skills);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = React.createClass({
    displayName: "exports",


    render: function render() {

        return React.createElement(
            "div",
            { className: "profile-bar" },
            React.createElement(
                "div",
                { className: "profile-info" },
                React.createElement(Information, null),
                React.createElement(Links, null),
                React.createElement(Navbar, null)
            ),
            React.createElement(_Skills2.default, null)
        );
    }
});

var Information = React.createClass({
    displayName: "Information",


    render: function render() {

        return React.createElement(
            "div",
            null,
            React.createElement("img", { src: "dist/images/me.jpg", className: "portrait" }),
            React.createElement(
                "h3",
                null,
                " Juan Gonzalez "
            ),
            React.createElement(
                "p",
                null,
                " Computer Science Major ",
                React.createElement("br", null),
                " University of California, Santa Cruz "
            ),
            React.createElement(
                "p",
                null,
                " Software Developer "
            )
        );
    }
});

var Links = React.createClass({
    displayName: "Links",


    render: function render() {

        return React.createElement(
            "div",
            null,
            React.createElement(
                "a",
                { title: "Linkedin", href: "https://linkedin.com/in/juan-gonzalez-659207139", className: "icon" },
                React.createElement("i", { className: "fa fa-linkedin fa-2x" })
            ),
            React.createElement(
                "a",
                { title: "Github", href: "https://github.com/1moosey1", className: "icon" },
                React.createElement("i", { className: "fa fa-github fa-2x" })
            ),
            React.createElement(
                "a",
                { title: "Codepen", href: "https://codepen.io/1Moosey1", className: "icon" },
                React.createElement("i", { className: "fa fa-codepen fa-2x" })
            ),
            React.createElement(
                "a",
                { title: "freeCodeCamp", href: "https://www.freecodecamp.com/1moosey1", className: "icon" },
                React.createElement("i", { className: "fa fa-free-code-camp fa-2x" })
            ),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
                "a",
                { className: "icon", href: "" },
                "Resume"
            )
        );
    }
});

var Navbar = React.createClass({
    displayName: "Navbar",


    render: function render() {

        return React.createElement(
            "ul",
            { className: "nav" },
            React.createElement(
                "li",
                { className: "nav-item" },
                React.createElement(
                    "a",
                    { href: "" },
                    "Web Development"
                )
            ),
            React.createElement(
                "li",
                { className: "nav-item" },
                React.createElement(
                    "a",
                    { href: "" },
                    "Software Development"
                )
            )
        );
    }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = React.createClass({
    displayName: "exports",


    render: function render() {

        var github_link = "https://github.com/1moosey1/" + this.props.link;

        var project_link, src;
        if (this.props.customLink) project_link = this.props.customLink;else project_link = "https://1moosey1.github.io/" + this.props.link;
        src = "dist/images/" + this.props.link + ".png";

        return React.createElement(
            "div",
            { className: "tbinfo-wrapper" },
            React.createElement(
                "div",
                { className: "thumbnail-container" },
                React.createElement(
                    "div",
                    { className: "thumbnail" },
                    React.createElement("img", { src: src })
                )
            ),
            React.createElement(
                "div",
                { className: "info" },
                React.createElement(
                    "h4",
                    null,
                    " ",
                    this.props.title,
                    " "
                ),
                React.createElement(
                    "a",
                    { href: github_link },
                    "Github Repo"
                ),
                React.createElement(
                    "span",
                    null,
                    " | "
                ),
                React.createElement(
                    "a",
                    { href: project_link },
                    "Project Site"
                )
            )
        );
    }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = React.createClass({
    displayName: "exports",


    render: function render() {

        var skills = ["HTML", "CSS", "SASS", "jQuery", "Django", "Web2Py", "React.js", "Java", "JavaScript", "Python", "C++"];
        var jsx_skills = [];

        for (var i = 0; i < skills.length; ++i) {
            jsx_skills.push(React.createElement(
                "p",
                { className: "skill" },
                skills[i]
            ));
        }return React.createElement(
            "div",
            { className: "skill-section" },
            React.createElement(
                "h2",
                null,
                " Skills "
            ),
            jsx_skills
        );
    }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ProfileBar = __webpack_require__(0);

var _ProfileBar2 = _interopRequireDefault(_ProfileBar);

var _WebProject = __webpack_require__(1);

var _WebProject2 = _interopRequireDefault(_WebProject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = React.createClass({
  displayName: 'Content',


  render: function render() {

    return React.createElement(
      'div',
      { className: 'content' },
      React.createElement(
        'h1',
        null,
        ' Web Development '
      ),
      React.createElement(_WebProject2.default, {
        title: 'Gonzalez Welding',
        customLink: 'http://gonzalezwelding.com',
        link: 'gonzalezwelding.com' }),
      React.createElement(_WebProject2.default, {
        title: 'Wikipedia Viewer',
        link: 'wikipedia-viewer' }),
      React.createElement(_WebProject2.default, {
        title: 'JavaScript Calculator',
        link: 'js-calculator' }),
      React.createElement(_WebProject2.default, {
        title: 'Tic Tac Toe',
        link: 'tictactoe' }),
      React.createElement(_WebProject2.default, {
        title: 'Pomodoro',
        link: 'pomodoro-clock' }),
      React.createElement(_WebProject2.default, {
        title: 'Twitch API',
        link: 'twitch-list' })
    );
  }
});

var App = React.createClass({
  displayName: 'App',


  render: function render() {

    return React.createElement(
      'div',
      null,
      React.createElement(_ProfileBar2.default, null),
      React.createElement(Content, null)
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.body);

/***/ })
/******/ ]);
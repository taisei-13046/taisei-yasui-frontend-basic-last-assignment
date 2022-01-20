"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.About = exports["default"] = void 0;

var _about = _interopRequireDefault(require("../components/organisms/about/about.html"));

require("../components/organisms/about/about.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Organisms/About"
};
exports["default"] = _default;

var About = function About() {
  return _about["default"];
};

exports.About = About;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = exports["default"] = void 0;

var _footer = _interopRequireDefault(require("../components/organisms/footer/footer.html"));

require("../components/organisms/footer/footer.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Organisms/Footer"
};
exports["default"] = _default;

var Footer = function Footer() {
  return _footer["default"];
};

exports.Footer = Footer;
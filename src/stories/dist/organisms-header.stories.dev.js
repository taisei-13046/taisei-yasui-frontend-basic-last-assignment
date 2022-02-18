"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = exports["default"] = void 0;

var _header = _interopRequireDefault(require("../components/organisms/header/header.html"));

require("../components/organisms/header/header.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Organisms/Header"
};
exports["default"] = _default;

var Header = function Header() {
  return _header["default"];
};

exports.Header = Header;
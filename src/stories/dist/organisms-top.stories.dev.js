"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Top = exports["default"] = void 0;

var _top = _interopRequireDefault(require("../components/organisms/top/top.html"));

require("../components/organisms/top/top.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Organisms/Top"
};
exports["default"] = _default;

var Top = function Top() {
  return _top["default"];
};

exports.Top = Top;
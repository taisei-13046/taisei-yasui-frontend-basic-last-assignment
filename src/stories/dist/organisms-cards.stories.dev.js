"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cards = exports["default"] = void 0;

var _cards = _interopRequireDefault(require("../components/organisms/cards/cards.html"));

require("../components/organisms/cards/cards.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Organisms/Cards"
};
exports["default"] = _default;

var Cards = function Cards() {
  return _cards["default"];
};

exports.Cards = Cards;
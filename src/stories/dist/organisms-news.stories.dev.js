"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.News = exports["default"] = void 0;

var _news = _interopRequireDefault(require("../components/organisms/news/news.html"));

require("../components/organisms/news/news.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Organisms/News"
};
exports["default"] = _default;

var News = function News() {
  return _news["default"];
};

exports.News = News;
"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Assignable = exports.Enum = void 0;
/** @hidden @module */

var Enum = /*#__PURE__*/_createClass(function Enum(properties) {
  var _this = this;

  _classCallCheck(this, Enum);

  if (Object.keys(properties).length !== 1) {
    throw new Error('Enum can only take single value');
  }

  Object.keys(properties).map(function (key) {
    _this[key] = properties[key];
    _this["enum"] = key;
  });
});

exports.Enum = Enum;

var Assignable = /*#__PURE__*/_createClass(function Assignable(properties) {
  var _this2 = this;

  _classCallCheck(this, Assignable);

  Object.keys(properties).map(function (key) {
    _this2[key] = properties[key];
  });
});

exports.Assignable = Assignable;
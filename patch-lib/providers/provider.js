"use strict";
/**
 * NEAR RPC API request types and responses
 * @module
 */

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransactionLastResult = exports.Provider = exports.IdType = exports.FinalExecutionStatusBasic = exports.ExecutionStatusBasic = void 0;
var ExecutionStatusBasic;

(function (ExecutionStatusBasic) {
  ExecutionStatusBasic["Unknown"] = "Unknown";
  ExecutionStatusBasic["Pending"] = "Pending";
  ExecutionStatusBasic["Failure"] = "Failure";
})(ExecutionStatusBasic = exports.ExecutionStatusBasic || (exports.ExecutionStatusBasic = {}));

var FinalExecutionStatusBasic;

(function (FinalExecutionStatusBasic) {
  FinalExecutionStatusBasic["NotStarted"] = "NotStarted";
  FinalExecutionStatusBasic["Started"] = "Started";
  FinalExecutionStatusBasic["Failure"] = "Failure";
})(FinalExecutionStatusBasic = exports.FinalExecutionStatusBasic || (exports.FinalExecutionStatusBasic = {}));

var IdType;

(function (IdType) {
  IdType["Transaction"] = "transaction";
  IdType["Receipt"] = "receipt";
})(IdType = exports.IdType || (exports.IdType = {}));
/** @hidden */


var Provider = /*#__PURE__*/_createClass(function Provider() {
  _classCallCheck(this, Provider);
});

exports.Provider = Provider;
/** @hidden */

function getTransactionLastResult(txResult) {
  if (_typeof(txResult.status) === 'object' && typeof txResult.status.SuccessValue === 'string') {
    var value = Buffer.from(txResult.status.SuccessValue, 'base64').toString();

    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }

  return null;
}

exports.getTransactionLastResult = getTransactionLastResult;
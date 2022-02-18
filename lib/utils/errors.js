"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logWarning = exports.ErrorContext = exports.TypedError = exports.ArgumentTypeError = exports.PositionalArgsError = void 0;

var PositionalArgsError = /*#__PURE__*/function (_Error) {
  _inherits(PositionalArgsError, _Error);

  var _super = _createSuper(PositionalArgsError);

  function PositionalArgsError() {
    _classCallCheck(this, PositionalArgsError);

    return _super.call(this, 'Contract method calls expect named arguments wrapped in object, e.g. { argName1: argValue1, argName2: argValue2 }');
  }

  return _createClass(PositionalArgsError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.PositionalArgsError = PositionalArgsError;

var ArgumentTypeError = /*#__PURE__*/function (_Error2) {
  _inherits(ArgumentTypeError, _Error2);

  var _super2 = _createSuper(ArgumentTypeError);

  function ArgumentTypeError(argName, argType, argValue) {
    _classCallCheck(this, ArgumentTypeError);

    return _super2.call(this, "Expected ".concat(argType, " for '").concat(argName, "' argument, but got '").concat(JSON.stringify(argValue), "'"));
  }

  return _createClass(ArgumentTypeError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.ArgumentTypeError = ArgumentTypeError;

var TypedError = /*#__PURE__*/function (_Error3) {
  _inherits(TypedError, _Error3);

  var _super3 = _createSuper(TypedError);

  function TypedError(message, type, context) {
    var _this;

    _classCallCheck(this, TypedError);

    _this = _super3.call(this, message);
    _this.type = type || 'UntypedError';
    _this.context = context;
    return _this;
  }

  return _createClass(TypedError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.TypedError = TypedError;

var ErrorContext = /*#__PURE__*/_createClass(function ErrorContext(transactionHash) {
  _classCallCheck(this, ErrorContext);

  this.transactionHash = transactionHash;
});

exports.ErrorContext = ErrorContext;

function logWarning() {
  if (!process.env['NEAR_NO_LOGS']) {
    var _console;

    (_console = console).warn.apply(_console, arguments);
  }
}

exports.logWarning = logWarning;
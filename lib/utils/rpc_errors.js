"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrorTypeFromErrorMessage = exports.formatError = exports.parseResultError = exports.parseRpcError = exports.ServerError = void 0;

var mustache_1 = __importDefault(require("mustache"));

var rpc_error_schema_json_1 = __importDefault(require("../generated/rpc_error_schema.json"));

var error_messages_json_1 = __importDefault(require("../res/error_messages.json"));

var common_index_1 = require("../common-index");

var errors_1 = require("../utils/errors");

var mustacheHelpers = {
  formatNear: function formatNear() {
    return function (n, render) {
      return common_index_1.utils.format.formatNearAmount(render(n));
    };
  }
};

var ServerError = /*#__PURE__*/function (_errors_1$TypedError) {
  _inherits(ServerError, _errors_1$TypedError);

  var _super = _createSuper(ServerError);

  function ServerError() {
    _classCallCheck(this, ServerError);

    return _super.apply(this, arguments);
  }

  return _createClass(ServerError);
}(errors_1.TypedError);

exports.ServerError = ServerError;

var ServerTransactionError = /*#__PURE__*/function (_ServerError) {
  _inherits(ServerTransactionError, _ServerError);

  var _super2 = _createSuper(ServerTransactionError);

  function ServerTransactionError() {
    _classCallCheck(this, ServerTransactionError);

    return _super2.apply(this, arguments);
  }

  return _createClass(ServerTransactionError);
}(ServerError);

function parseRpcError(errorObj) {
  var result = {};
  var errorClassName = walkSubtype(errorObj, rpc_error_schema_json_1.default.schema, result, ''); // NOTE: This assumes that all errors extend TypedError

  var error = new ServerError(formatError(errorClassName, result), errorClassName);
  Object.assign(error, result);
  return error;
}

exports.parseRpcError = parseRpcError;

function parseResultError(result) {
  var server_error = parseRpcError(result.status.Failure);
  var server_tx_error = new ServerTransactionError();
  Object.assign(server_tx_error, server_error);
  server_tx_error.type = server_error.type;
  server_tx_error.message = server_error.message;
  server_tx_error.transaction_outcome = result.transaction_outcome;
  return server_tx_error;
}

exports.parseResultError = parseResultError;

function formatError(errorClassName, errorData) {
  if (typeof error_messages_json_1.default[errorClassName] === 'string') {
    return mustache_1.default.render(error_messages_json_1.default[errorClassName], _objectSpread(_objectSpread({}, errorData), mustacheHelpers));
  }

  return JSON.stringify(errorData);
}

exports.formatError = formatError;
/**
 * Walks through defined schema returning error(s) recursively
 * @param errorObj The error to be parsed
 * @param schema A defined schema in JSON mapping to the RPC errors
 * @param result An object used in recursion or called directly
 * @param typeName The human-readable error type name as defined in the JSON mapping
 */

function walkSubtype(errorObj, schema, result, typeName) {
  var error;
  var type;
  var errorTypeName;

  for (var errorName in schema) {
    if (isString(errorObj[errorName])) {
      // Return early if error type is in a schema
      return errorObj[errorName];
    }

    if (isObject(errorObj[errorName])) {
      error = errorObj[errorName];
      type = schema[errorName];
      errorTypeName = errorName;
    } else if (isObject(errorObj.kind) && isObject(errorObj.kind[errorName])) {
      error = errorObj.kind[errorName];
      type = schema[errorName];
      errorTypeName = errorName;
    } else {
      continue;
    }
  }

  if (error && type) {
    for (var _i = 0, _Object$keys = Object.keys(type.props); _i < _Object$keys.length; _i++) {
      var prop = _Object$keys[_i];
      result[prop] = error[prop];
    }

    return walkSubtype(error, schema, result, errorTypeName);
  } else {
    // TODO: is this the right thing to do?
    result.kind = errorObj;
    return typeName;
  }
}

function getErrorTypeFromErrorMessage(errorMessage) {
  // This function should be removed when JSON RPC starts returning typed errors.
  switch (true) {
    case /^account .*? does not exist while viewing$/.test(errorMessage):
      return 'AccountDoesNotExist';

    case /^Account .*? doesn't exist$/.test(errorMessage):
      return 'AccountDoesNotExist';

    case /^access key .*? does not exist while viewing$/.test(errorMessage):
      return 'AccessKeyDoesNotExist';

    case /wasm execution failed with error: FunctionCallError\(CompilationError\(CodeDoesNotExist/.test(errorMessage):
      return 'CodeDoesNotExist';

    case /Transaction nonce \d+ must be larger than nonce of the used access key \d+/.test(errorMessage):
      return 'InvalidNonce';

    default:
      return 'UntypedError';
  }
}

exports.getErrorTypeFromErrorMessage = getErrorTypeFromErrorMessage;
/**
 * Helper function determining if the argument is an object
 * @param n Value to check
 */

function isObject(n) {
  return Object.prototype.toString.call(n) === '[object Object]';
}
/**
 * Helper function determining if the argument is a string
 * @param n Value to check
 */


function isString(n) {
  return Object.prototype.toString.call(n) === '[object String]';
}
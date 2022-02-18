"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var node_fetch_1 = __importDefault(require("node-fetch"));

var http_1 = __importDefault(require("http"));

var https_1 = __importDefault(require("https"));

var httpAgent = new http_1["default"].Agent({
  keepAlive: true
});
var httpsAgent = new https_1["default"].Agent({
  keepAlive: true
});

function agent(_parsedURL) {
  if (_parsedURL.protocol === 'http:') {
    return httpAgent;
  } else {
    return httpsAgent;
  }
}

function default_1(resource, init) {
  return node_fetch_1["default"](resource, _objectSpread({
    agent: agent(new URL(resource.toString()))
  }, init));
}

exports["default"] = default_1;
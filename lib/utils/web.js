"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchJson = void 0;

var http_errors_1 = __importDefault(require("http-errors"));

var exponential_backoff_1 = __importDefault(require("./exponential-backoff"));

var providers_1 = require("../providers");

var errors_1 = require("./errors");

var START_WAIT_TIME_MS = 1000;
var BACKOFF_MULTIPLIER = 1.5;
var RETRY_NUMBER = 10;

function fetchJson(_x, _x2) {
  return _fetchJson.apply(this, arguments);
}

function _fetchJson() {
  _fetchJson = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(connectionInfoOrUrl, json) {
    var connectionInfo, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            connectionInfo = {
              url: null
            };

            if (typeof connectionInfoOrUrl === 'string') {
              connectionInfo.url = connectionInfoOrUrl;
            } else {
              connectionInfo = connectionInfoOrUrl;
            }

            _context2.next = 4;
            return exponential_backoff_1["default"](START_WAIT_TIME_MS, RETRY_NUMBER, BACKOFF_MULTIPLIER, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _response;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return fetch(connectionInfo.url, {
                        method: json ? 'POST' : 'GET',
                        body: json ? json : undefined,
                        headers: _objectSpread(_objectSpread({}, connectionInfo.headers), {}, {
                          'Content-Type': 'application/json'
                        })
                      });

                    case 3:
                      _response = _context.sent;

                      if (_response.ok) {
                        _context.next = 14;
                        break;
                      }

                      if (!(_response.status === 503)) {
                        _context.next = 8;
                        break;
                      }

                      errors_1.logWarning("Retrying HTTP request for ".concat(connectionInfo.url, " as it's not available now"));
                      return _context.abrupt("return", null);

                    case 8:
                      _context.t0 = http_errors_1;
                      _context.t1 = _response.status;
                      _context.next = 12;
                      return _response.text();

                    case 12:
                      _context.t2 = _context.sent;
                      throw _context.t0["default"].call(_context.t0, _context.t1, _context.t2);

                    case 14:
                      return _context.abrupt("return", _response);

                    case 17:
                      _context.prev = 17;
                      _context.t3 = _context["catch"](0);

                      if (!(_context.t3.toString().includes('FetchError') || _context.t3.toString().includes('Failed to fetch'))) {
                        _context.next = 22;
                        break;
                      }

                      errors_1.logWarning("Retrying HTTP request for ".concat(connectionInfo.url, " because of error: ").concat(_context.t3));
                      return _context.abrupt("return", null);

                    case 22:
                      throw _context.t3;

                    case 23:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[0, 17]]);
            })));

          case 4:
            response = _context2.sent;

            if (response) {
              _context2.next = 7;
              break;
            }

            throw new providers_1.TypedError("Exceeded ".concat(RETRY_NUMBER, " attempts for ").concat(connectionInfo.url, "."), 'RetriesExceeded');

          case 7:
            _context2.next = 9;
            return response.json();

          case 9:
            return _context2.abrupt("return", _context2.sent);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchJson.apply(this, arguments);
}

exports.fetchJson = fetchJson;

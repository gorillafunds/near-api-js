"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contract = void 0;

var bn_js_1 = __importDefault(require("bn.js"));

var depd_1 = __importDefault(require("depd"));

var providers_1 = require("./providers");

var errors_1 = require("./utils/errors"); // Makes `function.name` return given name


function nameFunction(name, body) {
  return _defineProperty({}, name, function () {
    return body.apply(void 0, arguments);
  })[name];
}

var isUint8Array = function isUint8Array(x) {
  return x && x.byteLength !== undefined && x.byteLength === x.length;
};

var isObject = function isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
};
/**
 * Defines a smart contract on NEAR including the change (mutable) and view (non-mutable) methods
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#contract}
 * @example
 * ```js
 * import { Contract } from 'near-api-js';
 *
 * async function contractExample() {
 *   const methodOptions = {
 *     viewMethods: ['getMessageByAccountId'],
 *     changeMethods: ['addMessage']
 *   };
 *   const contract = new Contract(
 *     wallet.account(),
 *     'contract-id.testnet',
 *     methodOptions
 *   );
 *
 *   // use a contract view method
 *   const messages = await contract.getMessages({
 *     accountId: 'example-account.testnet'
 *   });
 *
 *   // use a contract change method
 *   await contract.addMessage({
 *      meta: 'some info',
 *      callbackUrl: 'https://example.com/callback',
 *      args: { text: 'my message' },
 *      amount: 1
 *   })
 * }
 * ```
 */


var Contract = /*#__PURE__*/function () {
  /**
   * @param account NEAR account to sign change method transactions
   * @param contractId NEAR account id where the contract is deployed
   * @param options NEAR smart contract methods that your application will use. These will be available as `contract.methodName`
   */
  function Contract(account, contractId, options) {
    var _this = this;

    _classCallCheck(this, Contract);

    this.account = account;
    this.contractId = contractId;
    var _options$viewMethods = options.viewMethods,
        viewMethods = _options$viewMethods === void 0 ? [] : _options$viewMethods,
        _options$changeMethod = options.changeMethods,
        changeMethods = _options$changeMethod === void 0 ? [] : _options$changeMethod;
    viewMethods.forEach(function (methodName) {
      Object.defineProperty(_this, methodName, {
        writable: false,
        enumerable: true,
        value: nameFunction(methodName, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var args,
              options,
              _args = arguments;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  args = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                  options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};

                  if (!((_args.length <= 2 ? 0 : _args.length - 2) || !(isObject(args) || isUint8Array(args)) || !isObject(options))) {
                    _context.next = 4;
                    break;
                  }

                  throw new errors_1.PositionalArgsError();

                case 4:
                  return _context.abrupt("return", _this.account.viewFunction(_this.contractId, methodName, args, options));

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })))
      });
    });
    changeMethods.forEach(function (methodName) {
      Object.defineProperty(_this, methodName, {
        writable: false,
        enumerable: true,
        value: nameFunction(methodName, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _len,
              args,
              _key,
              deprecate,
              _args2 = arguments;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  for (_len = _args2.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = _args2[_key];
                  }

                  if (!(args.length && (args.length > 3 || !(isObject(args[0]) || isUint8Array(args[0]))))) {
                    _context2.next = 3;
                    break;
                  }

                  throw new errors_1.PositionalArgsError();

                case 3:
                  if (!(args.length > 1 || !(args[0] && args[0].args))) {
                    _context2.next = 7;
                    break;
                  }

                  deprecate = depd_1["default"]('contract.methodName(args, gas, amount)');
                  deprecate('use `contract.methodName({ args, gas?, amount?, callbackUrl?, meta? })` instead');
                  return _context2.abrupt("return", _this._changeMethod({
                    methodName: methodName,
                    args: args[0],
                    gas: args[1],
                    amount: args[2]
                  }));

                case 7:
                  return _context2.abrupt("return", _this._changeMethod(_objectSpread({
                    methodName: methodName
                  }, args[0])));

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        })))
      });
    });
  }

  _createClass(Contract, [{
    key: "_changeMethod",
    value: function () {
      var _changeMethod2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref3) {
        var args, methodName, gas, amount, meta, callbackUrl, rawResult;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                args = _ref3.args, methodName = _ref3.methodName, gas = _ref3.gas, amount = _ref3.amount, meta = _ref3.meta, callbackUrl = _ref3.callbackUrl;
                validateBNLike({
                  gas: gas,
                  amount: amount
                });
                _context3.next = 4;
                return this.account.functionCall({
                  contractId: this.contractId,
                  methodName: methodName,
                  args: args,
                  gas: gas,
                  attachedDeposit: amount,
                  walletMeta: meta,
                  walletCallbackUrl: callbackUrl
                });

              case 4:
                rawResult = _context3.sent;
                return _context3.abrupt("return", providers_1.getTransactionLastResult(rawResult));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _changeMethod(_x) {
        return _changeMethod2.apply(this, arguments);
      }

      return _changeMethod;
    }()
  }]);

  return Contract;
}();

exports.Contract = Contract;
/**
 * Validation on arguments being a big number from bn.js
 * Throws if an argument is not in BN format or otherwise invalid
 * @param argMap
 */

function validateBNLike(argMap) {
  var bnLike = 'number, decimal string or BN';

  for (var _i = 0, _Object$keys = Object.keys(argMap); _i < _Object$keys.length; _i++) {
    var argName = _Object$keys[_i];
    var argValue = argMap[argName];

    if (argValue && !bn_js_1["default"].isBN(argValue) && isNaN(argValue)) {
      throw new errors_1.ArgumentTypeError(argName, bnLike, argValue);
    }
  }
}
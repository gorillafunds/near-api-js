"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InMemoryKeyStore = void 0;

var keystore_1 = require("./keystore");

var key_pair_1 = require("../utils/key_pair");
/**
 * Simple in-memory keystore for mainly for testing purposes.
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#key-store}
 * @example
 * ```js
 * import { connect, keyStores, utils } from 'near-api-js';
 *
 * const privateKey = '.......';
 * const keyPair = utils.KeyPair.fromString(privateKey);
 *
 * const keyStore = new keyStores.InMemoryKeyStore();
 * keyStore.setKey('testnet', 'example-account.testnet', keyPair);
 *
 * const config = {
 *   keyStore, // instance of InMemoryKeyStore
 *   networkId: 'testnet',
 *   nodeUrl: 'https://rpc.testnet.near.org',
 *   walletUrl: 'https://wallet.testnet.near.org',
 *   helperUrl: 'https://helper.testnet.near.org',
 *   explorerUrl: 'https://explorer.testnet.near.org'
 * };
 *
 * // inside an async function
 * const near = await connect(config)
 * ```
 */


var InMemoryKeyStore = /*#__PURE__*/function (_keystore_1$KeyStore) {
  _inherits(InMemoryKeyStore, _keystore_1$KeyStore);

  var _super = _createSuper(InMemoryKeyStore);

  function InMemoryKeyStore() {
    var _this;

    _classCallCheck(this, InMemoryKeyStore);

    _this = _super.call(this);
    _this.keys = {};
    return _this;
  }
  /**
   * Stores a {@KeyPair} in in-memory storage item
   * @param networkId The targeted network. (ex. default, betanet, etc…)
   * @param accountId The NEAR account tied to the key pair
   * @param keyPair The key pair to store in local storage
   */


  _createClass(InMemoryKeyStore, [{
    key: "setKey",
    value: function () {
      var _setKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(networkId, accountId, keyPair) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.keys["".concat(accountId, ":").concat(networkId)] = keyPair.toString();

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setKey(_x, _x2, _x3) {
        return _setKey.apply(this, arguments);
      }

      return setKey;
    }()
    /**
     * Gets a {@link KeyPair} from in-memory storage
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     * @returns {Promise<KeyPair>}
     */

  }, {
    key: "getKey",
    value: function () {
      var _getKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(networkId, accountId) {
        var value;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                value = this.keys["".concat(accountId, ":").concat(networkId)];

                if (value) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", null);

              case 3:
                return _context2.abrupt("return", key_pair_1.KeyPair.fromString(value));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getKey(_x4, _x5) {
        return _getKey.apply(this, arguments);
      }

      return getKey;
    }()
    /**
     * Removes a {@link KeyPair} from in-memory storage
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     */

  }, {
    key: "removeKey",
    value: function () {
      var _removeKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(networkId, accountId) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                delete this.keys["".concat(accountId, ":").concat(networkId)];

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function removeKey(_x6, _x7) {
        return _removeKey.apply(this, arguments);
      }

      return removeKey;
    }()
    /**
     * Removes all {@link KeyPairs} from in-memory storage
     */

  }, {
    key: "clear",
    value: function () {
      var _clear = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.keys = {};

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function clear() {
        return _clear.apply(this, arguments);
      }

      return clear;
    }()
    /**
     * Get the network(s) from in-memory storage
     * @returns {Promise<string[]>}
     */

  }, {
    key: "getNetworks",
    value: function () {
      var _getNetworks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var result;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                result = new Set();
                Object.keys(this.keys).forEach(function (key) {
                  var parts = key.split(':');
                  result.add(parts[1]);
                });
                return _context5.abrupt("return", Array.from(result.values()));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getNetworks() {
        return _getNetworks.apply(this, arguments);
      }

      return getNetworks;
    }()
    /**
     * Gets the account(s) from in-memory storage
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns{Promise<string[]>}
     */

  }, {
    key: "getAccounts",
    value: function () {
      var _getAccounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(networkId) {
        var result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                result = new Array();
                Object.keys(this.keys).forEach(function (key) {
                  var parts = key.split(':');

                  if (parts[parts.length - 1] === networkId) {
                    result.push(parts.slice(0, parts.length - 1).join(':'));
                  }
                });
                return _context6.abrupt("return", result);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getAccounts(_x8) {
        return _getAccounts.apply(this, arguments);
      }

      return getAccounts;
    }()
    /** @hidden */

  }, {
    key: "toString",
    value: function toString() {
      return 'InMemoryKeyStore';
    }
  }]);

  return InMemoryKeyStore;
}(keystore_1.KeyStore);

exports.InMemoryKeyStore = InMemoryKeyStore;
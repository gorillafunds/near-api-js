"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
exports.BrowserLocalStorageKeyStore = void 0;

var keystore_1 = require("./keystore");

var key_pair_1 = require("../utils/key_pair");

var LOCAL_STORAGE_KEY_PREFIX = 'near-api-js:keystore:';
/**
 * This class is used to store keys in the browsers local storage.
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#key-store}
 * @example
 * ```js
 * import { connect, keyStores } from 'near-api-js';
 *
 * const keyStore = new keyStores.BrowserLocalStorageKeyStore();
 * const config = {
 *   keyStore, // instance of BrowserLocalStorageKeyStore
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

var BrowserLocalStorageKeyStore = /*#__PURE__*/function (_keystore_1$KeyStore) {
  _inherits(BrowserLocalStorageKeyStore, _keystore_1$KeyStore);

  var _super = _createSuper(BrowserLocalStorageKeyStore);

  /**
   * @param localStorage defaults to window.localStorage
   * @param prefix defaults to `near-api-js:keystore:`
   */
  function BrowserLocalStorageKeyStore() {
    var _this;

    var localStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.localStorage;
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LOCAL_STORAGE_KEY_PREFIX;

    _classCallCheck(this, BrowserLocalStorageKeyStore);

    _this = _super.call(this);
    _this.localStorage = localStorage;
    _this.prefix = prefix;
    return _this;
  }
  /**
   * Stores a {@link KeyPair} in local storage.
   * @param networkId The targeted network. (ex. default, betanet, etc…)
   * @param accountId The NEAR account tied to the key pair
   * @param keyPair The key pair to store in local storage
   */


  _createClass(BrowserLocalStorageKeyStore, [{
    key: "setKey",
    value: function () {
      var _setKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(networkId, accountId, keyPair) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.localStorage.setItem(this.storageKeyForSecretKey(networkId, accountId), keyPair.toString());

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
     * Gets a {@link KeyPair} from local storage
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
                value = this.localStorage.getItem(this.storageKeyForSecretKey(networkId, accountId));

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
     * Removes a {@link KeyPair} from local storage
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
                this.localStorage.removeItem(this.storageKeyForSecretKey(networkId, accountId));

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
     * Removes all items that start with `prefix` from local storage
     */

  }, {
    key: "clear",
    value: function () {
      var _clear = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _iterator, _step, key;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _iterator = _createForOfIteratorHelper(this.storageKeys());

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    key = _step.value;

                    if (key.startsWith(this.prefix)) {
                      this.localStorage.removeItem(key);
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

              case 2:
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
     * Get the network(s) from local storage
     * @returns {Promise<string[]>}
     */

  }, {
    key: "getNetworks",
    value: function () {
      var _getNetworks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var result, _iterator2, _step2, key, parts;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                result = new Set();
                _iterator2 = _createForOfIteratorHelper(this.storageKeys());

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    key = _step2.value;

                    if (key.startsWith(this.prefix)) {
                      parts = key.substring(this.prefix.length).split(':');
                      result.add(parts[1]);
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                return _context5.abrupt("return", Array.from(result.values()));

              case 4:
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
     * Gets the account(s) from local storage
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns{Promise<string[]>}
     */

  }, {
    key: "getAccounts",
    value: function () {
      var _getAccounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(networkId) {
        var result, _iterator3, _step3, key, parts;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                result = new Array();
                _iterator3 = _createForOfIteratorHelper(this.storageKeys());

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    key = _step3.value;

                    if (key.startsWith(this.prefix)) {
                      parts = key.substring(this.prefix.length).split(':');

                      if (parts[1] === networkId) {
                        result.push(parts[0]);
                      }
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                return _context6.abrupt("return", result);

              case 4:
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
    /**
     * @hidden
     * Helper function to retrieve a local storage key
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the storage keythat's sought
     * @returns {string} An example might be: `near-api-js:keystore:near-friend:default`
     */

  }, {
    key: "storageKeyForSecretKey",
    value: function storageKeyForSecretKey(networkId, accountId) {
      return "".concat(this.prefix).concat(accountId, ":").concat(networkId);
    }
    /** @hidden */

  }, {
    key: "storageKeys",
    value:
    /*#__PURE__*/
    regeneratorRuntime.mark(function storageKeys() {
      var i;
      return regeneratorRuntime.wrap(function storageKeys$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < this.localStorage.length)) {
                _context7.next = 7;
                break;
              }

              _context7.next = 4;
              return this.localStorage.key(i);

            case 4:
              i++;
              _context7.next = 1;
              break;

            case 7:
            case "end":
              return _context7.stop();
          }
        }
      }, storageKeys, this);
    })
  }]);

  return BrowserLocalStorageKeyStore;
}(keystore_1.KeyStore);

exports.BrowserLocalStorageKeyStore = BrowserLocalStorageKeyStore;
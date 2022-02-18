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
exports.MergeKeyStore = void 0;

var keystore_1 = require("./keystore");

var MergeKeyStore = /*#__PURE__*/function (_keystore_1$KeyStore) {
  _inherits(MergeKeyStore, _keystore_1$KeyStore);

  var _super = _createSuper(MergeKeyStore);

  /**
   * @param keyStores read calls are attempted from start to end of array
   * @param options.writeKeyStoreIndex the keystore index that will receive all write calls
   */
  function MergeKeyStore(keyStores) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      writeKeyStoreIndex: 0
    };

    _classCallCheck(this, MergeKeyStore);

    _this = _super.call(this);
    _this.options = options;
    _this.keyStores = keyStores;
    return _this;
  }
  /**
   * Store a {@link KeyPain} to the first index of a key store array
   * @param networkId The targeted network. (ex. default, betanet, etc…)
   * @param accountId The NEAR account tied to the key pair
   * @param keyPair The key pair to store in local storage
   */


  _createClass(MergeKeyStore, [{
    key: "setKey",
    value: function () {
      var _setKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(networkId, accountId, keyPair) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.keyStores[this.options.writeKeyStoreIndex].setKey(networkId, accountId, keyPair);

              case 2:
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
     * Gets a {@link KeyPair} from the array of key stores
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     * @returns {Promise<KeyPair>}
     */

  }, {
    key: "getKey",
    value: function () {
      var _getKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(networkId, accountId) {
        var _iterator, _step, keyStore, keyPair;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _iterator = _createForOfIteratorHelper(this.keyStores);
                _context2.prev = 1;

                _iterator.s();

              case 3:
                if ((_step = _iterator.n()).done) {
                  _context2.next = 12;
                  break;
                }

                keyStore = _step.value;
                _context2.next = 7;
                return keyStore.getKey(networkId, accountId);

              case 7:
                keyPair = _context2.sent;

                if (!keyPair) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", keyPair);

              case 10:
                _context2.next = 3;
                break;

              case 12:
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](1);

                _iterator.e(_context2.t0);

              case 17:
                _context2.prev = 17;

                _iterator.f();

                return _context2.finish(17);

              case 20:
                return _context2.abrupt("return", null);

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 14, 17, 20]]);
      }));

      function getKey(_x4, _x5) {
        return _getKey.apply(this, arguments);
      }

      return getKey;
    }()
    /**
     * Removes a {@link KeyPair} from the array of key stores
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     */

  }, {
    key: "removeKey",
    value: function () {
      var _removeKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(networkId, accountId) {
        var _iterator2, _step2, keyStore;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _iterator2 = _createForOfIteratorHelper(this.keyStores);
                _context3.prev = 1;

                _iterator2.s();

              case 3:
                if ((_step2 = _iterator2.n()).done) {
                  _context3.next = 9;
                  break;
                }

                keyStore = _step2.value;
                _context3.next = 7;
                return keyStore.removeKey(networkId, accountId);

              case 7:
                _context3.next = 3;
                break;

              case 9:
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](1);

                _iterator2.e(_context3.t0);

              case 14:
                _context3.prev = 14;

                _iterator2.f();

                return _context3.finish(14);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 11, 14, 17]]);
      }));

      function removeKey(_x6, _x7) {
        return _removeKey.apply(this, arguments);
      }

      return removeKey;
    }()
    /**
     * Removes all items from each key store
     */

  }, {
    key: "clear",
    value: function () {
      var _clear = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _iterator3, _step3, keyStore;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _iterator3 = _createForOfIteratorHelper(this.keyStores);
                _context4.prev = 1;

                _iterator3.s();

              case 3:
                if ((_step3 = _iterator3.n()).done) {
                  _context4.next = 9;
                  break;
                }

                keyStore = _step3.value;
                _context4.next = 7;
                return keyStore.clear();

              case 7:
                _context4.next = 3;
                break;

              case 9:
                _context4.next = 14;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](1);

                _iterator3.e(_context4.t0);

              case 14:
                _context4.prev = 14;

                _iterator3.f();

                return _context4.finish(14);

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 11, 14, 17]]);
      }));

      function clear() {
        return _clear.apply(this, arguments);
      }

      return clear;
    }()
    /**
     * Get the network(s) from the array of key stores
     * @returns {Promise<string[]>}
     */

  }, {
    key: "getNetworks",
    value: function () {
      var _getNetworks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var result, _iterator4, _step4, keyStore, _iterator5, _step5, network;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                result = new Set();
                _iterator4 = _createForOfIteratorHelper(this.keyStores);
                _context5.prev = 2;

                _iterator4.s();

              case 4:
                if ((_step4 = _iterator4.n()).done) {
                  _context5.next = 14;
                  break;
                }

                keyStore = _step4.value;
                _context5.t0 = _createForOfIteratorHelper;
                _context5.next = 9;
                return keyStore.getNetworks();

              case 9:
                _context5.t1 = _context5.sent;
                _iterator5 = (0, _context5.t0)(_context5.t1);

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    network = _step5.value;
                    result.add(network);
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }

              case 12:
                _context5.next = 4;
                break;

              case 14:
                _context5.next = 19;
                break;

              case 16:
                _context5.prev = 16;
                _context5.t2 = _context5["catch"](2);

                _iterator4.e(_context5.t2);

              case 19:
                _context5.prev = 19;

                _iterator4.f();

                return _context5.finish(19);

              case 22:
                return _context5.abrupt("return", Array.from(result));

              case 23:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[2, 16, 19, 22]]);
      }));

      function getNetworks() {
        return _getNetworks.apply(this, arguments);
      }

      return getNetworks;
    }()
    /**
     * Gets the account(s) from the array of key stores
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns{Promise<string[]>}
     */

  }, {
    key: "getAccounts",
    value: function () {
      var _getAccounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(networkId) {
        var result, _iterator6, _step6, keyStore, _iterator7, _step7, account;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                result = new Set();
                _iterator6 = _createForOfIteratorHelper(this.keyStores);
                _context6.prev = 2;

                _iterator6.s();

              case 4:
                if ((_step6 = _iterator6.n()).done) {
                  _context6.next = 14;
                  break;
                }

                keyStore = _step6.value;
                _context6.t0 = _createForOfIteratorHelper;
                _context6.next = 9;
                return keyStore.getAccounts(networkId);

              case 9:
                _context6.t1 = _context6.sent;
                _iterator7 = (0, _context6.t0)(_context6.t1);

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    account = _step7.value;
                    result.add(account);
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }

              case 12:
                _context6.next = 4;
                break;

              case 14:
                _context6.next = 19;
                break;

              case 16:
                _context6.prev = 16;
                _context6.t2 = _context6["catch"](2);

                _iterator6.e(_context6.t2);

              case 19:
                _context6.prev = 19;

                _iterator6.f();

                return _context6.finish(19);

              case 22:
                return _context6.abrupt("return", Array.from(result));

              case 23:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[2, 16, 19, 22]]);
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
      return "MergeKeyStore(".concat(this.keyStores.join(', '), ")");
    }
  }]);

  return MergeKeyStore;
}(keystore_1.KeyStore);

exports.MergeKeyStore = MergeKeyStore;
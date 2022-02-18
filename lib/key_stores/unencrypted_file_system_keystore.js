"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
exports.UnencryptedFileSystemKeyStore = exports.readKeyFile = exports.loadJsonFile = void 0;

var fs_1 = __importDefault(require("fs"));

var path_1 = __importDefault(require("path"));

var util_1 = require("util");

var key_pair_1 = require("../utils/key_pair");

var keystore_1 = require("./keystore");

var promisify = function promisify(fn) {
  if (!fn) {
    return function () {
      throw new Error('Trying to use unimplemented function. `fs` module not available in web build?');
    };
  }

  return util_1.promisify(fn);
};

var exists = promisify(fs_1.default.exists);
var readFile = promisify(fs_1.default.readFile);
var writeFile = promisify(fs_1.default.writeFile);
var unlink = promisify(fs_1.default.unlink);
var readdir = promisify(fs_1.default.readdir);
var mkdir = promisify(fs_1.default.mkdir);
/** @hidden */

function loadJsonFile(_x) {
  return _loadJsonFile.apply(this, arguments);
}

function _loadJsonFile() {
  _loadJsonFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(filename) {
    var content;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return readFile(filename);

          case 2:
            content = _context7.sent;
            return _context7.abrupt("return", JSON.parse(content.toString()));

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _loadJsonFile.apply(this, arguments);
}

exports.loadJsonFile = loadJsonFile;

function ensureDir(_x2) {
  return _ensureDir.apply(this, arguments);
}
/** @hidden */


function _ensureDir() {
  _ensureDir = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(dir) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return mkdir(dir, {
              recursive: true
            });

          case 3:
            _context8.next = 9;
            break;

          case 5:
            _context8.prev = 5;
            _context8.t0 = _context8["catch"](0);

            if (!(_context8.t0.code !== 'EEXIST')) {
              _context8.next = 9;
              break;
            }

            throw _context8.t0;

          case 9:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 5]]);
  }));
  return _ensureDir.apply(this, arguments);
}

function readKeyFile(_x3) {
  return _readKeyFile.apply(this, arguments);
}

function _readKeyFile() {
  _readKeyFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(filename) {
    var accountInfo, privateKey;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return loadJsonFile(filename);

          case 2:
            accountInfo = _context9.sent;
            // The private key might be in private_key or secret_key field.
            privateKey = accountInfo.private_key;

            if (!privateKey && accountInfo.secret_key) {
              privateKey = accountInfo.secret_key;
            }

            return _context9.abrupt("return", [accountInfo.account_id, key_pair_1.KeyPair.fromString(privateKey)]);

          case 6:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _readKeyFile.apply(this, arguments);
}

exports.readKeyFile = readKeyFile;
/**
 * This module contains the {@link UnencryptedFileSystemKeyStore} class which is used to store keys on the file system.
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#key-store}
 * @example
 * ```js
 * const { homedir } = require('os');
 * const { connect, keyStores } = require('near-api-js');
 *
 * const keyStore = new keyStores.UnencryptedFileSystemKeyStore(`${homedir()}/.near-credentials`);
 * const config = {
 *   keyStore, // instance of UnencryptedFileSystemKeyStore
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

var UnencryptedFileSystemKeyStore = /*#__PURE__*/function (_keystore_1$KeyStore) {
  _inherits(UnencryptedFileSystemKeyStore, _keystore_1$KeyStore);

  var _super = _createSuper(UnencryptedFileSystemKeyStore);

  /**
   * @param keyDir base directory for key storage. Keys will be stored in `keyDir/networkId/accountId.json`
   */
  function UnencryptedFileSystemKeyStore(keyDir) {
    var _this;

    _classCallCheck(this, UnencryptedFileSystemKeyStore);

    _this = _super.call(this);
    _this.keyDir = path_1.default.resolve(keyDir);
    return _this;
  }
  /**
   * Store a {@link KeyPair} in an unencrypted file
   * @param networkId The targeted network. (ex. default, betanet, etc…)
   * @param accountId The NEAR account tied to the key pair
   * @param keyPair The key pair to store in local storage
   */


  _createClass(UnencryptedFileSystemKeyStore, [{
    key: "setKey",
    value: function () {
      var _setKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(networkId, accountId, keyPair) {
        var content;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return ensureDir("".concat(this.keyDir, "/").concat(networkId));

              case 2:
                content = {
                  account_id: accountId,
                  public_key: keyPair.getPublicKey().toString(),
                  private_key: keyPair.toString()
                };
                _context.next = 5;
                return writeFile(this.getKeyFilePath(networkId, accountId), JSON.stringify(content), {
                  mode: 384
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setKey(_x4, _x5, _x6) {
        return _setKey.apply(this, arguments);
      }

      return setKey;
    }()
    /**
     * Gets a {@link KeyPair} from an unencrypted file
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     * @returns {Promise<KeyPair>}
     */

  }, {
    key: "getKey",
    value: function () {
      var _getKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(networkId, accountId) {
        var accountKeyPair;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return exists(this.getKeyFilePath(networkId, accountId));

              case 2:
                if (_context2.sent) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", null);

              case 4:
                _context2.next = 6;
                return readKeyFile(this.getKeyFilePath(networkId, accountId));

              case 6:
                accountKeyPair = _context2.sent;
                return _context2.abrupt("return", accountKeyPair[1]);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getKey(_x7, _x8) {
        return _getKey.apply(this, arguments);
      }

      return getKey;
    }()
    /**
     * Deletes an unencrypted file holding a {@link KeyPair}
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
                _context3.next = 2;
                return exists(this.getKeyFilePath(networkId, accountId));

              case 2:
                if (!_context3.sent) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 5;
                return unlink(this.getKeyFilePath(networkId, accountId));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function removeKey(_x9, _x10) {
        return _removeKey.apply(this, arguments);
      }

      return removeKey;
    }()
    /**
     * Deletes all unencrypted files from the `keyDir` path.
     */

  }, {
    key: "clear",
    value: function () {
      var _clear = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _iterator, _step, network, _iterator2, _step2, account;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = _createForOfIteratorHelper;
                _context4.next = 3;
                return this.getNetworks();

              case 3:
                _context4.t1 = _context4.sent;
                _iterator = (0, _context4.t0)(_context4.t1);
                _context4.prev = 5;

                _iterator.s();

              case 7:
                if ((_step = _iterator.n()).done) {
                  _context4.next = 32;
                  break;
                }

                network = _step.value;
                _context4.t2 = _createForOfIteratorHelper;
                _context4.next = 12;
                return this.getAccounts(network);

              case 12:
                _context4.t3 = _context4.sent;
                _iterator2 = (0, _context4.t2)(_context4.t3);
                _context4.prev = 14;

                _iterator2.s();

              case 16:
                if ((_step2 = _iterator2.n()).done) {
                  _context4.next = 22;
                  break;
                }

                account = _step2.value;
                _context4.next = 20;
                return this.removeKey(network, account);

              case 20:
                _context4.next = 16;
                break;

              case 22:
                _context4.next = 27;
                break;

              case 24:
                _context4.prev = 24;
                _context4.t4 = _context4["catch"](14);

                _iterator2.e(_context4.t4);

              case 27:
                _context4.prev = 27;

                _iterator2.f();

                return _context4.finish(27);

              case 30:
                _context4.next = 7;
                break;

              case 32:
                _context4.next = 37;
                break;

              case 34:
                _context4.prev = 34;
                _context4.t5 = _context4["catch"](5);

                _iterator.e(_context4.t5);

              case 37:
                _context4.prev = 37;

                _iterator.f();

                return _context4.finish(37);

              case 40:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[5, 34, 37, 40], [14, 24, 27, 30]]);
      }));

      function clear() {
        return _clear.apply(this, arguments);
      }

      return clear;
    }()
    /** @hidden */

  }, {
    key: "getKeyFilePath",
    value: function getKeyFilePath(networkId, accountId) {
      return "".concat(this.keyDir, "/").concat(networkId, "/").concat(accountId, ".json");
    }
    /**
     * Get the network(s) from files in `keyDir`
     * @returns {Promise<string[]>}
     */

  }, {
    key: "getNetworks",
    value: function () {
      var _getNetworks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var files, result;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return readdir(this.keyDir);

              case 2:
                files = _context5.sent;
                result = new Array();
                files.forEach(function (item) {
                  result.push(item);
                });
                return _context5.abrupt("return", result);

              case 6:
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
     * Gets the account(s) files in `keyDir/networkId`
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns{Promise<string[]>}
     */

  }, {
    key: "getAccounts",
    value: function () {
      var _getAccounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(networkId) {
        var files;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return exists("".concat(this.keyDir, "/").concat(networkId));

              case 2:
                if (_context6.sent) {
                  _context6.next = 4;
                  break;
                }

                return _context6.abrupt("return", []);

              case 4:
                _context6.next = 6;
                return readdir("".concat(this.keyDir, "/").concat(networkId));

              case 6:
                files = _context6.sent;
                return _context6.abrupt("return", files.filter(function (file) {
                  return file.endsWith('.json');
                }).map(function (file) {
                  return file.replace(/.json$/, '');
                }));

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getAccounts(_x11) {
        return _getAccounts.apply(this, arguments);
      }

      return getAccounts;
    }()
    /** @hidden */

  }, {
    key: "toString",
    value: function toString() {
      return "UnencryptedFileSystemKeyStore(".concat(this.keyDir, ")");
    }
  }]);

  return UnencryptedFileSystemKeyStore;
}(keystore_1.KeyStore);

exports.UnencryptedFileSystemKeyStore = UnencryptedFileSystemKeyStore;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InMemorySigner = exports.Signer = void 0;

var js_sha256_1 = __importDefault(require("js-sha256"));

var key_pair_1 = require("./utils/key_pair");

var in_memory_key_store_1 = require("./key_stores/in_memory_key_store");
/**
 * General signing interface, can be used for in memory signing, RPC singing, external wallet, HSM, etc.
 */


var Signer = /*#__PURE__*/_createClass(function Signer() {
  _classCallCheck(this, Signer);
});

exports.Signer = Signer;
/**
 * Signs using in memory key store.
 */

var InMemorySigner = /*#__PURE__*/function (_Signer) {
  _inherits(InMemorySigner, _Signer);

  var _super = _createSuper(InMemorySigner);

  function InMemorySigner(keyStore) {
    var _this;

    _classCallCheck(this, InMemorySigner);

    _this = _super.call(this);
    _this.keyStore = keyStore;
    return _this;
  }
  /**
   * Creates a single account Signer instance with account, network and keyPair provided.
   *
   * Intended to be useful for temporary keys (e.g. claiming a Linkdrop).
   *
   * @param networkId The targeted network. (ex. default, betanet, etc…)
   * @param accountId The NEAR account to assign the key pair to
   * @param keyPair The keyPair to use for signing
   */


  _createClass(InMemorySigner, [{
    key: "createKey",
    value:
    /**
     * Creates a public key for the account given
     * @param accountId The NEAR account to assign a public key to
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns {Promise<PublicKey>}
     */
    function () {
      var _createKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(accountId, networkId) {
        var keyPair;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                keyPair = key_pair_1.KeyPair.fromRandom('ed25519');
                _context.next = 3;
                return this.keyStore.setKey(networkId, accountId, keyPair);

              case 3:
                return _context.abrupt("return", keyPair.getPublicKey());

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createKey(_x, _x2) {
        return _createKey.apply(this, arguments);
      }

      return createKey;
    }()
    /**
     * Gets the existing public key for a given account
     * @param accountId The NEAR account to assign a public key to
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns {Promise<PublicKey>} Returns the public key or null if not found
     */

  }, {
    key: "getPublicKey",
    value: function () {
      var _getPublicKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(accountId, networkId) {
        var keyPair;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.keyStore.getKey(networkId, accountId);

              case 2:
                keyPair = _context2.sent;

                if (!(keyPair === null)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", null);

              case 5:
                return _context2.abrupt("return", keyPair.getPublicKey());

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getPublicKey(_x3, _x4) {
        return _getPublicKey.apply(this, arguments);
      }

      return getPublicKey;
    }()
    /**
     * @param message A message to be signed, typically a serialized transaction
     * @param accountId the NEAR account signing the message
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns {Promise<Signature>}
     */

  }, {
    key: "signMessage",
    value: function () {
      var _signMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(message, accountId, networkId) {
        var hash, keyPair;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                hash = new Uint8Array(js_sha256_1.default.sha256.array(message));

                if (accountId) {
                  _context3.next = 3;
                  break;
                }

                throw new Error('InMemorySigner requires provided account id');

              case 3:
                _context3.next = 5;
                return this.keyStore.getKey(networkId, accountId);

              case 5:
                keyPair = _context3.sent;

                if (!(keyPair === null)) {
                  _context3.next = 8;
                  break;
                }

                throw new Error("Key for ".concat(accountId, " not found in ").concat(networkId));

              case 8:
                return _context3.abrupt("return", keyPair.sign(hash));

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function signMessage(_x5, _x6, _x7) {
        return _signMessage.apply(this, arguments);
      }

      return signMessage;
    }()
  }, {
    key: "toString",
    value: function toString() {
      return "InMemorySigner(".concat(this.keyStore, ")");
    }
  }], [{
    key: "fromKeyPair",
    value: function () {
      var _fromKeyPair = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(networkId, accountId, keyPair) {
        var keyStore;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                keyStore = new in_memory_key_store_1.InMemoryKeyStore();
                _context4.next = 3;
                return keyStore.setKey(networkId, accountId, keyPair);

              case 3:
                return _context4.abrupt("return", new InMemorySigner(keyStore));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function fromKeyPair(_x8, _x9, _x10) {
        return _fromKeyPair.apply(this, arguments);
      }

      return fromKeyPair;
    }()
  }]);

  return InMemorySigner;
}(Signer);

exports.InMemorySigner = InMemorySigner;
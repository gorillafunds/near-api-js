"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Account = void 0;

var bn_js_1 = __importDefault(require("bn.js"));

var depd_1 = __importDefault(require("depd"));

var transaction_1 = require("./transaction");

var providers_1 = require("./providers");

var borsh_1 = require("borsh");

var key_pair_1 = require("./utils/key_pair");

var errors_1 = require("./utils/errors");

var rpc_errors_1 = require("./utils/rpc_errors");

var constants_1 = require("./constants");

var exponential_backoff_1 = __importDefault(require("./utils/exponential-backoff")); // Default number of retries with different nonce before giving up on a transaction.


var TX_NONCE_RETRY_NUMBER = 12; // Default wait until next retry in millis.

var TX_NONCE_RETRY_WAIT = 500; // Exponential back off for waiting to retry.

var TX_NONCE_RETRY_WAIT_BACKOFF = 1.5;

function parseJsonFromRawResponse(response) {
  return JSON.parse(Buffer.from(response).toString());
}

function bytesJsonStringify(input) {
  return Buffer.from(JSON.stringify(input));
}
/**
 * This class provides common account related RPC calls including signing transactions with a {@link KeyPair}.
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#account}
 * @hint Use {@link WalletConnection} in the browser to redirect to {@link https://docs.near.org/docs/tools/near-wallet | NEAR Wallet} for Account/key management using the {@link BrowserLocalStorageKeyStore}.
 * @see {@link https://nomicon.io/DataStructures/Account.html | Account Spec}
 */


var Account = /*#__PURE__*/function () {
  function Account(connection, accountId) {
    _classCallCheck(this, Account);

    /** @hidden */
    this.accessKeyByPublicKeyCache = {};
    this.connection = connection;
    this.accountId = accountId;
  }
  /** @hidden */


  _createClass(Account, [{
    key: "ready",
    get: function get() {
      var deprecate = depd_1.default('Account.ready()');
      deprecate('not needed anymore, always ready');
      return Promise.resolve();
    }
  }, {
    key: "fetchState",
    value: function () {
      var _fetchState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var deprecate;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                deprecate = depd_1.default('Account.fetchState()');
                deprecate('use `Account.state()` instead');

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fetchState() {
        return _fetchState.apply(this, arguments);
      }

      return fetchState;
    }()
    /**
     * Returns basic NEAR account information via the `view_account` RPC query method
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#view-account}
     */

  }, {
    key: "state",
    value: function () {
      var _state = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.connection.provider.query({
                  request_type: 'view_account',
                  account_id: this.accountId,
                  finality: 'optimistic'
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function state() {
        return _state.apply(this, arguments);
      }

      return state;
    }()
    /** @hidden */

  }, {
    key: "printLogsAndFailures",
    value: function printLogsAndFailures(contractId, results) {
      if (!process.env["NEAR_NO_LOGS"]) {
        var _iterator = _createForOfIteratorHelper(results),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var result = _step.value;
            console.log("Receipt".concat(result.receiptIds.length > 1 ? 's' : '', ": ").concat(result.receiptIds.join(', ')));
            this.printLogs(contractId, result.logs, '\t');

            if (result.failure) {
              console.warn("\tFailure [".concat(contractId, "]: ").concat(result.failure));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
    /** @hidden */

  }, {
    key: "printLogs",
    value: function printLogs(contractId, logs) {
      var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      if (!process.env["NEAR_NO_LOGS"]) {
        var _iterator2 = _createForOfIteratorHelper(logs),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var log = _step2.value;
            console.log("".concat(prefix, "Log [").concat(contractId, "]: ").concat(log));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
    /**
     * Create a signed transaction which can be broadcast to the network
     * @param receiverId NEAR account receiving the transaction
     * @param actions list of actions to perform as part of the transaction
     * @see {@link JsonRpcProvider.sendTransaction}
     */

  }, {
    key: "signTransaction",
    value: function () {
      var _signTransaction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(receiverId, actions) {
        var accessKeyInfo, accessKey, block, blockHash, nonce;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.findAccessKey(receiverId, actions);

              case 2:
                accessKeyInfo = _context3.sent;

                if (accessKeyInfo) {
                  _context3.next = 5;
                  break;
                }

                throw new providers_1.TypedError("Can not sign transactions for account ".concat(this.accountId, " on network ").concat(this.connection.networkId, ", no matching key pair found in ").concat(this.connection.signer, "."), 'KeyNotFound');

              case 5:
                accessKey = accessKeyInfo.accessKey;
                _context3.next = 8;
                return this.connection.provider.block({
                  finality: 'final'
                });

              case 8:
                block = _context3.sent;
                blockHash = block.header.hash;
                nonce = ++accessKey.nonce;
                _context3.next = 13;
                return transaction_1.signTransaction(receiverId, nonce, actions, borsh_1.baseDecode(blockHash), this.connection.signer, this.accountId, this.connection.networkId);

              case 13:
                return _context3.abrupt("return", _context3.sent);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function signTransaction(_x, _x2) {
        return _signTransaction.apply(this, arguments);
      }

      return signTransaction;
    }()
  }, {
    key: "signAndSendTransaction",
    value: function signAndSendTransaction() {
      if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
        return this.signAndSendTransactionV1(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);
      } else {
        return this.signAndSendTransactionV2(arguments.length <= 0 ? undefined : arguments[0]);
      }
    }
  }, {
    key: "signAndSendTransactionV1",
    value: function signAndSendTransactionV1(receiverId, actions) {
      var deprecate = depd_1.default('Account.signAndSendTransaction(receiverId, actions');
      deprecate('use `Account.signAndSendTransaction(SignAndSendTransactionOptions)` instead');
      return this.signAndSendTransactionV2({
        receiverId: receiverId,
        actions: actions
      });
    }
  }, {
    key: "signAndSendTransactionV2",
    value: function () {
      var _signAndSendTransactionV = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref) {
        var _this = this;

        var receiverId, actions, returnError, txHash, signedTx, result, flatLogs;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                receiverId = _ref.receiverId, actions = _ref.actions, returnError = _ref.returnError;
                _context5.next = 3;
                return exponential_backoff_1.default(TX_NONCE_RETRY_WAIT, TX_NONCE_RETRY_NUMBER, TX_NONCE_RETRY_WAIT_BACKOFF, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                  var _yield$_this$signTran, _yield$_this$signTran2, publicKey;

                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return _this.signTransaction(receiverId, actions);

                        case 2:
                          _yield$_this$signTran = _context4.sent;
                          _yield$_this$signTran2 = _slicedToArray(_yield$_this$signTran, 2);
                          txHash = _yield$_this$signTran2[0];
                          signedTx = _yield$_this$signTran2[1];
                          publicKey = signedTx.transaction.publicKey;
                          _context4.prev = 7;
                          _context4.next = 10;
                          return _this.connection.provider.sendTransaction(signedTx);

                        case 10:
                          return _context4.abrupt("return", _context4.sent);

                        case 13:
                          _context4.prev = 13;
                          _context4.t0 = _context4["catch"](7);

                          if (!(_context4.t0.type === 'InvalidNonce')) {
                            _context4.next = 19;
                            break;
                          }

                          errors_1.logWarning("Retrying transaction ".concat(receiverId, ":").concat(borsh_1.baseEncode(txHash), " with new nonce."));
                          delete _this.accessKeyByPublicKeyCache[publicKey.toString()];
                          return _context4.abrupt("return", null);

                        case 19:
                          if (!(_context4.t0.type === 'Expired')) {
                            _context4.next = 22;
                            break;
                          }

                          errors_1.logWarning("Retrying transaction ".concat(receiverId, ":").concat(borsh_1.baseEncode(txHash), " due to expired block hash"));
                          return _context4.abrupt("return", null);

                        case 22:
                          _context4.t0.context = new providers_1.ErrorContext(borsh_1.baseEncode(txHash));
                          throw _context4.t0;

                        case 24:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, null, [[7, 13]]);
                })));

              case 3:
                result = _context5.sent;

                if (result) {
                  _context5.next = 6;
                  break;
                }

                throw new providers_1.TypedError('nonce retries exceeded for transaction. This usually means there are too many parallel requests with the same access key.', 'RetriesExceeded');

              case 6:
                flatLogs = [result.transaction_outcome].concat(_toConsumableArray(result.receipts_outcome)).reduce(function (acc, it) {
                  if (it.outcome.logs.length || _typeof(it.outcome.status) === 'object' && _typeof(it.outcome.status.Failure) === 'object') {
                    return acc.concat({
                      'receiptIds': it.outcome.receipt_ids,
                      'logs': it.outcome.logs,
                      'failure': typeof it.outcome.status.Failure != 'undefined' ? rpc_errors_1.parseRpcError(it.outcome.status.Failure) : null
                    });
                  } else return acc;
                }, []);
                this.printLogsAndFailures(signedTx.transaction.receiverId, flatLogs);

                if (!(!returnError && _typeof(result.status) === 'object' && _typeof(result.status.Failure) === 'object')) {
                  _context5.next = 14;
                  break;
                }

                if (!(result.status.Failure.error_message && result.status.Failure.error_type)) {
                  _context5.next = 13;
                  break;
                }

                throw new providers_1.TypedError("Transaction ".concat(result.transaction_outcome.id, " failed. ").concat(result.status.Failure.error_message), result.status.Failure.error_type);

              case 13:
                throw rpc_errors_1.parseResultError(result);

              case 14:
                return _context5.abrupt("return", result);

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function signAndSendTransactionV2(_x3) {
        return _signAndSendTransactionV.apply(this, arguments);
      }

      return signAndSendTransactionV2;
    }()
    /**
     * Finds the {@link AccessKeyView} associated with the accounts {@link PublicKey} stored in the {@link KeyStore}.
     *
     * @todo Find matching access key based on transaction (i.e. receiverId and actions)
     *
     * @param receiverId currently unused (see todo)
     * @param actions currently unused (see todo)
     * @returns `{ publicKey PublicKey; accessKey: AccessKeyView }`
     */

  }, {
    key: "findAccessKey",
    value: function () {
      var _findAccessKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(receiverId, actions) {
        var publicKey, cachedAccessKey, accessKey;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.connection.signer.getPublicKey(this.accountId, this.connection.networkId);

              case 2:
                publicKey = _context6.sent;

                if (publicKey) {
                  _context6.next = 5;
                  break;
                }

                return _context6.abrupt("return", null);

              case 5:
                cachedAccessKey = this.accessKeyByPublicKeyCache[publicKey.toString()];

                if (!(cachedAccessKey !== undefined)) {
                  _context6.next = 8;
                  break;
                }

                return _context6.abrupt("return", {
                  publicKey: publicKey,
                  accessKey: cachedAccessKey
                });

              case 8:
                _context6.prev = 8;
                _context6.next = 11;
                return this.connection.provider.query({
                  request_type: 'view_access_key',
                  account_id: this.accountId,
                  public_key: publicKey.toString(),
                  finality: 'optimistic'
                });

              case 11:
                accessKey = _context6.sent;

                if (!this.accessKeyByPublicKeyCache[publicKey.toString()]) {
                  _context6.next = 14;
                  break;
                }

                return _context6.abrupt("return", {
                  publicKey: publicKey,
                  accessKey: this.accessKeyByPublicKeyCache[publicKey.toString()]
                });

              case 14:
                this.accessKeyByPublicKeyCache[publicKey.toString()] = accessKey;
                return _context6.abrupt("return", {
                  publicKey: publicKey,
                  accessKey: accessKey
                });

              case 18:
                _context6.prev = 18;
                _context6.t0 = _context6["catch"](8);

                if (!(_context6.t0.type == 'AccessKeyDoesNotExist')) {
                  _context6.next = 22;
                  break;
                }

                return _context6.abrupt("return", null);

              case 22:
                throw _context6.t0;

              case 23:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[8, 18]]);
      }));

      function findAccessKey(_x4, _x5) {
        return _findAccessKey.apply(this, arguments);
      }

      return findAccessKey;
    }()
    /**
     * Create a new account and deploy a contract to it
     *
     * @param contractId NEAR account where the contract is deployed
     * @param publicKey The public key to add to the created contract account
     * @param data The compiled contract code
     * @param amount of NEAR to transfer to the created contract account. Transfer enough to pay for storage https://docs.near.org/docs/concepts/storage-staking
     */

  }, {
    key: "createAndDeployContract",
    value: function () {
      var _createAndDeployContract = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(contractId, publicKey, data, amount) {
        var accessKey, contractAccount;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                accessKey = transaction_1.fullAccessKey();
                _context7.next = 3;
                return this.signAndSendTransaction({
                  receiverId: contractId,
                  actions: [transaction_1.createAccount(), transaction_1.transfer(amount), transaction_1.addKey(key_pair_1.PublicKey.from(publicKey), accessKey), transaction_1.deployContract(data)]
                });

              case 3:
                contractAccount = new Account(this.connection, contractId);
                return _context7.abrupt("return", contractAccount);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function createAndDeployContract(_x6, _x7, _x8, _x9) {
        return _createAndDeployContract.apply(this, arguments);
      }

      return createAndDeployContract;
    }()
    /**
     * @param receiverId NEAR account receiving Ⓝ
     * @param amount Amount to send in yoctoⓃ
     */

  }, {
    key: "sendMoney",
    value: function () {
      var _sendMoney = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(receiverId, amount) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.signAndSendTransaction({
                  receiverId: receiverId,
                  actions: [transaction_1.transfer(amount)]
                }));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function sendMoney(_x10, _x11) {
        return _sendMoney.apply(this, arguments);
      }

      return sendMoney;
    }()
    /**
     * @param newAccountId NEAR account name to be created
     * @param publicKey A public key created from the masterAccount
     */

  }, {
    key: "createAccount",
    value: function () {
      var _createAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(newAccountId, publicKey, amount) {
        var accessKey;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                accessKey = transaction_1.fullAccessKey();
                return _context9.abrupt("return", this.signAndSendTransaction({
                  receiverId: newAccountId,
                  actions: [transaction_1.createAccount(), transaction_1.transfer(amount), transaction_1.addKey(key_pair_1.PublicKey.from(publicKey), accessKey)]
                }));

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function createAccount(_x12, _x13, _x14) {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
    /**
     * @param beneficiaryId The NEAR account that will receive the remaining Ⓝ balance from the account being deleted
     */

  }, {
    key: "deleteAccount",
    value: function () {
      var _deleteAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(beneficiaryId) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.signAndSendTransaction({
                  receiverId: this.accountId,
                  actions: [transaction_1.deleteAccount(beneficiaryId)]
                }));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function deleteAccount(_x15) {
        return _deleteAccount.apply(this, arguments);
      }

      return deleteAccount;
    }()
    /**
     * @param data The compiled contract code
     */

  }, {
    key: "deployContract",
    value: function () {
      var _deployContract = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(data) {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", this.signAndSendTransaction({
                  receiverId: this.accountId,
                  actions: [transaction_1.deployContract(data)]
                }));

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function deployContract(_x16) {
        return _deployContract.apply(this, arguments);
      }

      return deployContract;
    }()
  }, {
    key: "functionCall",
    value: function () {
      var _functionCall = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        var _args12 = arguments;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (!(typeof (_args12.length <= 0 ? undefined : _args12[0]) === 'string')) {
                  _context12.next = 4;
                  break;
                }

                return _context12.abrupt("return", this.functionCallV1(_args12.length <= 0 ? undefined : _args12[0], _args12.length <= 1 ? undefined : _args12[1], _args12.length <= 2 ? undefined : _args12[2], _args12.length <= 3 ? undefined : _args12[3], _args12.length <= 4 ? undefined : _args12[4]));

              case 4:
                return _context12.abrupt("return", this.functionCallV2(_args12.length <= 0 ? undefined : _args12[0]));

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function functionCall() {
        return _functionCall.apply(this, arguments);
      }

      return functionCall;
    }()
  }, {
    key: "functionCallV1",
    value: function functionCallV1(contractId, methodName, args, gas, amount) {
      var deprecate = depd_1.default('Account.functionCall(contractId, methodName, args, gas, amount)');
      deprecate('use `Account.functionCall(FunctionCallOptions)` instead');
      args = args || {};
      this.validateArgs(args);
      return this.signAndSendTransaction({
        receiverId: contractId,
        actions: [transaction_1.functionCall(methodName, args, gas || constants_1.DEFAULT_FUNCTION_CALL_GAS, amount)]
      });
    }
  }, {
    key: "functionCallV2",
    value: function functionCallV2(_ref3) {
      var contractId = _ref3.contractId,
          methodName = _ref3.methodName,
          _ref3$args = _ref3.args,
          args = _ref3$args === void 0 ? {} : _ref3$args,
          _ref3$gas = _ref3.gas,
          gas = _ref3$gas === void 0 ? constants_1.DEFAULT_FUNCTION_CALL_GAS : _ref3$gas,
          attachedDeposit = _ref3.attachedDeposit,
          walletMeta = _ref3.walletMeta,
          walletCallbackUrl = _ref3.walletCallbackUrl,
          stringify = _ref3.stringify;
      this.validateArgs(args);
      var stringifyArg = stringify === undefined ? transaction_1.stringifyJsonOrBytes : stringify;
      return this.signAndSendTransaction({
        receiverId: contractId,
        actions: [transaction_1.functionCall(methodName, args, gas, attachedDeposit, stringifyArg)],
        walletMeta: walletMeta,
        walletCallbackUrl: walletCallbackUrl
      });
    }
    /**
     * @see {@link https://docs.near.org/docs/concepts/account#access-keys}
     * @todo expand this API to support more options.
     * @param publicKey A public key to be associated with the contract
     * @param contractId NEAR account where the contract is deployed
     * @param methodNames The method names on the contract that should be allowed to be called. Pass null for no method names and '' or [] for any method names.
     * @param amount Payment in yoctoⓃ that is sent to the contract during this function call
     */

  }, {
    key: "addKey",
    value: function () {
      var _addKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(publicKey, contractId, methodNames, amount) {
        var accessKey;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (!methodNames) {
                  methodNames = [];
                }

                if (!Array.isArray(methodNames)) {
                  methodNames = [methodNames];
                }

                if (!contractId) {
                  accessKey = transaction_1.fullAccessKey();
                } else {
                  accessKey = transaction_1.functionCallAccessKey(contractId, methodNames, amount);
                }

                return _context13.abrupt("return", this.signAndSendTransaction({
                  receiverId: this.accountId,
                  actions: [transaction_1.addKey(key_pair_1.PublicKey.from(publicKey), accessKey)]
                }));

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function addKey(_x17, _x18, _x19, _x20) {
        return _addKey.apply(this, arguments);
      }

      return addKey;
    }()
    /**
     * @param publicKey The public key to be deleted
     * @returns {Promise<FinalExecutionOutcome>}
     */

  }, {
    key: "deleteKey",
    value: function () {
      var _deleteKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(publicKey) {
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", this.signAndSendTransaction({
                  receiverId: this.accountId,
                  actions: [transaction_1.deleteKey(key_pair_1.PublicKey.from(publicKey))]
                }));

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function deleteKey(_x21) {
        return _deleteKey.apply(this, arguments);
      }

      return deleteKey;
    }()
    /**
     * @see {@link https://docs.near.org/docs/validator/staking-overview}
     *
     * @param publicKey The public key for the account that's staking
     * @param amount The account to stake in yoctoⓃ
     */

  }, {
    key: "stake",
    value: function () {
      var _stake = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(publicKey, amount) {
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", this.signAndSendTransaction({
                  receiverId: this.accountId,
                  actions: [transaction_1.stake(amount, key_pair_1.PublicKey.from(publicKey))]
                }));

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function stake(_x22, _x23) {
        return _stake.apply(this, arguments);
      }

      return stake;
    }()
    /** @hidden */

  }, {
    key: "validateArgs",
    value: function validateArgs(args) {
      var isUint8Array = args.byteLength !== undefined && args.byteLength === args.length;

      if (isUint8Array) {
        return;
      }

      if (Array.isArray(args) || _typeof(args) !== 'object') {
        throw new errors_1.PositionalArgsError();
      }
    }
    /**
     * Invoke a contract view function using the RPC API.
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#call-a-contract-function}
     *
     * @param contractId NEAR account where the contract is deployed
     * @param methodName The view-only method (no state mutations) name on the contract as it is written in the contract code
     * @param args Any arguments to the view contract method, wrapped in JSON
     * @param options.parse Parse the result of the call. Receives a Buffer (bytes array) and converts it to any object. By default result will be treated as json.
     * @param options.stringify Convert input arguments into a bytes array. By default the input is treated as a JSON.
     * @returns {Promise<any>}
     */

  }, {
    key: "viewFunction",
    value: function () {
      var _viewFunction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(contractId, methodName) {
        var args,
            _ref4,
            _ref4$parse,
            parse,
            _ref4$stringify,
            stringify,
            serializedArgs,
            result,
            _args16 = arguments;

        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                args = _args16.length > 2 && _args16[2] !== undefined ? _args16[2] : {};
                _ref4 = _args16.length > 3 && _args16[3] !== undefined ? _args16[3] : {}, _ref4$parse = _ref4.parse, parse = _ref4$parse === void 0 ? parseJsonFromRawResponse : _ref4$parse, _ref4$stringify = _ref4.stringify, stringify = _ref4$stringify === void 0 ? bytesJsonStringify : _ref4$stringify;
                this.validateArgs(args);
                serializedArgs = stringify(args).toString('base64');
                _context16.next = 6;
                return this.connection.provider.query({
                  request_type: 'call_function',
                  account_id: contractId,
                  method_name: methodName,
                  args_base64: serializedArgs,
                  finality: 'optimistic'
                });

              case 6:
                result = _context16.sent;

                if (result.logs) {
                  this.printLogs(contractId, result.logs);
                }

                return _context16.abrupt("return", result.result && result.result.length > 0 && parse(Buffer.from(result.result)));

              case 9:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function viewFunction(_x24, _x25) {
        return _viewFunction.apply(this, arguments);
      }

      return viewFunction;
    }()
    /**
     * Returns the state (key value pairs) of this account's contract based on the key prefix.
     * Pass an empty string for prefix if you would like to return the entire state.
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#view-contract-state}
     *
     * @param prefix allows to filter which keys should be returned. Empty prefix means all keys. String prefix is utf-8 encoded.
     * @param blockQuery specifies which block to query state at. By default returns last "optimistic" block (i.e. not necessarily finalized).
     */

  }, {
    key: "viewState",
    value: function () {
      var _viewState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(prefix) {
        var blockQuery,
            _yield$this$connectio,
            values,
            _args17 = arguments;

        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                blockQuery = _args17.length > 1 && _args17[1] !== undefined ? _args17[1] : {
                  finality: 'optimistic'
                };
                _context17.next = 3;
                return this.connection.provider.query(_objectSpread(_objectSpread({
                  request_type: 'view_state'
                }, blockQuery), {}, {
                  account_id: this.accountId,
                  prefix_base64: Buffer.from(prefix).toString('base64')
                }));

              case 3:
                _yield$this$connectio = _context17.sent;
                values = _yield$this$connectio.values;
                return _context17.abrupt("return", values.map(function (_ref5) {
                  var key = _ref5.key,
                      value = _ref5.value;
                  return {
                    key: Buffer.from(key, 'base64'),
                    value: Buffer.from(value, 'base64')
                  };
                }));

              case 6:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function viewState(_x26) {
        return _viewState.apply(this, arguments);
      }

      return viewState;
    }()
    /**
     * Get all access keys for the account
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#view-access-key-list}
     */

  }, {
    key: "getAccessKeys",
    value: function () {
      var _getAccessKeys = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
        var response;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this.connection.provider.query({
                  request_type: 'view_access_key_list',
                  account_id: this.accountId,
                  finality: 'optimistic'
                });

              case 2:
                response = _context18.sent;

                if (!Array.isArray(response)) {
                  _context18.next = 5;
                  break;
                }

                return _context18.abrupt("return", response);

              case 5:
                return _context18.abrupt("return", response.keys);

              case 6:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function getAccessKeys() {
        return _getAccessKeys.apply(this, arguments);
      }

      return getAccessKeys;
    }()
    /**
     * Returns a list of authorized apps
     * @todo update the response value to return all the different keys, not just app keys.
     */

  }, {
    key: "getAccountDetails",
    value: function () {
      var _getAccountDetails = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
        var accessKeys, authorizedApps;
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return this.getAccessKeys();

              case 2:
                accessKeys = _context19.sent;
                authorizedApps = accessKeys.filter(function (item) {
                  return item.access_key.permission !== 'FullAccess';
                }).map(function (item) {
                  var perm = item.access_key.permission;
                  return {
                    contractId: perm.FunctionCall.receiver_id,
                    amount: perm.FunctionCall.allowance,
                    publicKey: item.public_key
                  };
                });
                return _context19.abrupt("return", {
                  authorizedApps: authorizedApps
                });

              case 5:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function getAccountDetails() {
        return _getAccountDetails.apply(this, arguments);
      }

      return getAccountDetails;
    }()
    /**
     * Returns calculated account balance
     */

  }, {
    key: "getAccountBalance",
    value: function () {
      var _getAccountBalance = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
        var protocolConfig, state, costPerByte, stateStaked, staked, totalBalance, availableBalance;
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return this.connection.provider.experimental_protocolConfig({
                  finality: 'final'
                });

              case 2:
                protocolConfig = _context20.sent;
                _context20.next = 5;
                return this.state();

              case 5:
                state = _context20.sent;
                costPerByte = new bn_js_1.default(protocolConfig.runtime_config.storage_amount_per_byte);
                stateStaked = new bn_js_1.default(state.storage_usage).mul(costPerByte);
                staked = new bn_js_1.default(state.locked);
                totalBalance = new bn_js_1.default(state.amount).add(staked);
                availableBalance = totalBalance.sub(bn_js_1.default.max(staked, stateStaked));
                return _context20.abrupt("return", {
                  total: totalBalance.toString(),
                  stateStaked: stateStaked.toString(),
                  staked: staked.toString(),
                  available: availableBalance.toString()
                });

              case 12:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function getAccountBalance() {
        return _getAccountBalance.apply(this, arguments);
      }

      return getAccountBalance;
    }()
  }]);

  return Account;
}();

exports.Account = Account;
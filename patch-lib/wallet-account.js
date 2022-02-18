"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
exports.ConnectedWalletAccount = exports.WalletAccount = exports.WalletConnection = void 0;
/**
 * The classes in this module are used in conjunction with the {@link BrowserLocalStorageKeyStore}. This module exposes two classes:
 * * {@link WalletConnection} which redirects users to {@link https://docs.near.org/docs/tools/near-wallet | NEAR Wallet} for key management.
 * * {@link ConnectedWalletAccount} is an {@link Account} implementation that uses {@link WalletConnection} to get keys
 *
 * @module walletAccount
 */

var depd_1 = __importDefault(require("depd"));

var account_1 = require("./account");

var transaction_1 = require("./transaction");

var utils_1 = require("./utils");

var borsh_1 = require("borsh");

var borsh_2 = require("borsh");

var LOGIN_WALLET_URL_SUFFIX = '/login/';
var MULTISIG_HAS_METHOD = 'add_request_and_confirm';
var LOCAL_STORAGE_KEY_SUFFIX = '_wallet_auth_key';
var PENDING_ACCESS_KEY_PREFIX = 'pending_key'; // browser storage key for a pending access key (i.e. key has been generated but we are not sure it was added yet)

/**
 * This class is used in conjunction with the {@link BrowserLocalStorageKeyStore}.
 * It redirects users to {@link https://docs.near.org/docs/tools/near-wallet | NEAR Wallet} for key management.
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#wallet}
 * @example
 * ```js
 * // create new WalletConnection instance
 * const wallet = new WalletConnection(near, 'my-app');
 *
 * // If not signed in redirect to the NEAR wallet to sign in
 * // keys will be stored in the BrowserLocalStorageKeyStore
 * if(!wallet.isSingnedIn()) return wallet.requestSignIn()
 * ```
 */

var WalletConnection = /*#__PURE__*/function () {
  function WalletConnection(near, appKeyPrefix) {
    _classCallCheck(this, WalletConnection);

    this._near = near;
    var authDataKey = appKeyPrefix + LOCAL_STORAGE_KEY_SUFFIX;
    var authData = JSON.parse(window.localStorage.getItem(authDataKey));
    this._networkId = near.config.networkId;
    this._walletBaseUrl = near.config.walletUrl;
    appKeyPrefix = appKeyPrefix || near.config.contractName || 'default';
    this._keyStore = near.connection.signer.keyStore;
    this._authData = authData || {
      allKeys: []
    };
    this._authDataKey = authDataKey;

    if (!this.isSignedIn()) {
      this._completeSignInWithAccessKey();
    }
  }
  /**
   * Returns true, if this WalletAccount is authorized with the wallet.
   * @example
   * ```js
   * const wallet = new WalletConnection(near, 'my-app');
   * wallet.isSignedIn();
   * ```
   */


  _createClass(WalletConnection, [{
    key: "isSignedIn",
    value: function isSignedIn() {
      return !!this._authData.accountId;
    }
    /**
     * Returns authorized Account ID.
     * @example
     * ```js
     * const wallet = new WalletConnection(near, 'my-app');
     * wallet.getAccountId();
     * ```
     */

  }, {
    key: "getAccountId",
    value: function getAccountId() {
      return this._authData.accountId || '';
    }
    /**
     * Redirects current page to the wallet authentication page.
     * @param options An optional options object
     * @param options.contractId The NEAR account where the contract is deployed
     * @param options.successUrl URL to redirect upon success. Default: current url
     * @param options.failureUrl URL to redirect upon failure. Default: current url
     *
     * @example
     * ```js
     * const wallet = new WalletConnection(near, 'my-app');
     * // redirects to the NEAR Wallet
     * wallet.requestSignIn({ contractId: 'account-with-deploy-contract.near' });
     * ```
     */

  }, {
    key: "requestSignIn",
    value: function () {
      var _requestSignIn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var contractIdOrOptions,
            title,
            successUrl,
            failureUrl,
            options,
            deprecate,
            currentUrl,
            newUrl,
            contractAccount,
            accessKey,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                contractIdOrOptions = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                title = _args.length > 1 ? _args[1] : undefined;
                successUrl = _args.length > 2 ? _args[2] : undefined;
                failureUrl = _args.length > 3 ? _args[3] : undefined;

                if (typeof contractIdOrOptions === 'string') {
                  deprecate = depd_1["default"]('requestSignIn(contractId, title)');
                  deprecate('`title` ignored; use `requestSignIn({ contractId, methodNames, successUrl, failureUrl })` instead');
                  options = {
                    contractId: contractIdOrOptions,
                    successUrl: successUrl,
                    failureUrl: failureUrl
                  };
                } else {
                  options = contractIdOrOptions;
                }

                currentUrl = new URL(window.location.href);
                newUrl = new URL(this._walletBaseUrl + LOGIN_WALLET_URL_SUFFIX);
                newUrl.searchParams.set('success_url', options.successUrl || currentUrl.href);
                newUrl.searchParams.set('failure_url', options.failureUrl || currentUrl.href);

                if (!options.contractId) {
                  _context.next = 20;
                  break;
                }

                _context.next = 12;
                return this._near.account(options.contractId);

              case 12:
                contractAccount = _context.sent;
                _context.next = 15;
                return contractAccount.state();

              case 15:
                newUrl.searchParams.set('contract_id', options.contractId);
                accessKey = utils_1.KeyPair.fromRandom('ed25519');
                newUrl.searchParams.set('public_key', accessKey.getPublicKey().toString());
                _context.next = 20;
                return this._keyStore.setKey(this._networkId, PENDING_ACCESS_KEY_PREFIX + accessKey.getPublicKey(), accessKey);

              case 20:
                if (options.methodNames) {
                  options.methodNames.forEach(function (methodName) {
                    newUrl.searchParams.append('methodNames', methodName);
                  });
                }

                window.location.assign(newUrl.toString());

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function requestSignIn() {
        return _requestSignIn.apply(this, arguments);
      }

      return requestSignIn;
    }()
  }, {
    key: "requestSignTransactions",
    value: function () {
      var _requestSignTransactions2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var deprecate,
            _args2 = arguments;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!Array.isArray(_args2.length <= 0 ? undefined : _args2[0])) {
                  _context2.next = 4;
                  break;
                }

                deprecate = depd_1["default"]('WalletConnection.requestSignTransactions(transactions, callbackUrl, meta)');
                deprecate('use `WalletConnection.requestSignTransactions(RequestSignTransactionsOptions)` instead');
                return _context2.abrupt("return", this._requestSignTransactions({
                  transactions: _args2.length <= 0 ? undefined : _args2[0],
                  callbackUrl: _args2.length <= 1 ? undefined : _args2[1],
                  meta: _args2.length <= 2 ? undefined : _args2[2]
                }));

              case 4:
                return _context2.abrupt("return", this._requestSignTransactions(_args2.length <= 0 ? undefined : _args2[0]));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function requestSignTransactions() {
        return _requestSignTransactions2.apply(this, arguments);
      }

      return requestSignTransactions;
    }()
  }, {
    key: "_requestSignTransactions",
    value: function () {
      var _requestSignTransactions3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref) {
        var transactions, meta, callbackUrl, currentUrl, newUrl;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                transactions = _ref.transactions, meta = _ref.meta, callbackUrl = _ref.callbackUrl;
                currentUrl = new URL(window.location.href);
                newUrl = new URL('sign', this._walletBaseUrl);
                newUrl.searchParams.set('transactions', transactions.map(function (transaction) {
                  return borsh_2.serialize(transaction_1.SCHEMA, transaction);
                }).map(function (serialized) {
                  return Buffer.from(serialized).toString('base64');
                }).join(','));
                newUrl.searchParams.set('callbackUrl', callbackUrl || currentUrl.href);
                if (meta) newUrl.searchParams.set('meta', meta);
                window.location.assign(newUrl.toString());

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _requestSignTransactions(_x) {
        return _requestSignTransactions3.apply(this, arguments);
      }

      return _requestSignTransactions;
    }()
    /**
     * @hidden
     * Complete sign in for a given account id and public key. To be invoked by the app when getting a callback from the wallet.
     */

  }, {
    key: "_completeSignInWithAccessKey",
    value: function () {
      var _completeSignInWithAccessKey2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var currentUrl, publicKey, allKeys, accountId;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                currentUrl = new URL(window.location.href);
                publicKey = currentUrl.searchParams.get('public_key') || '';
                allKeys = (currentUrl.searchParams.get('all_keys') || '').split(',');
                accountId = currentUrl.searchParams.get('account_id') || ''; // TODO: Handle errors during login

                if (!accountId) {
                  _context4.next = 10;
                  break;
                }

                this._authData = {
                  accountId: accountId,
                  allKeys: allKeys
                };
                window.localStorage.setItem(this._authDataKey, JSON.stringify(this._authData));

                if (!publicKey) {
                  _context4.next = 10;
                  break;
                }

                _context4.next = 10;
                return this._moveKeyFromTempToPermanent(accountId, publicKey);

              case 10:
                currentUrl.searchParams["delete"]('public_key');
                currentUrl.searchParams["delete"]('all_keys');
                currentUrl.searchParams["delete"]('account_id');
                currentUrl.searchParams["delete"]('meta');
                currentUrl.searchParams["delete"]('transactionHashes');
                window.history.replaceState({}, document.title, currentUrl.toString());

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _completeSignInWithAccessKey() {
        return _completeSignInWithAccessKey2.apply(this, arguments);
      }

      return _completeSignInWithAccessKey;
    }()
    /**
     * @hidden
     * @param accountId The NEAR account owning the given public key
     * @param publicKey The public key being set to the key store
     */

  }, {
    key: "_moveKeyFromTempToPermanent",
    value: function () {
      var _moveKeyFromTempToPermanent2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(accountId, publicKey) {
        var keyPair;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._keyStore.getKey(this._networkId, PENDING_ACCESS_KEY_PREFIX + publicKey);

              case 2:
                keyPair = _context5.sent;
                _context5.next = 5;
                return this._keyStore.setKey(this._networkId, accountId, keyPair);

              case 5:
                _context5.next = 7;
                return this._keyStore.removeKey(this._networkId, PENDING_ACCESS_KEY_PREFIX + publicKey);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _moveKeyFromTempToPermanent(_x2, _x3) {
        return _moveKeyFromTempToPermanent2.apply(this, arguments);
      }

      return _moveKeyFromTempToPermanent;
    }()
    /**
     * Sign out from the current account
     * @example
     * walletAccount.signOut();
     */

  }, {
    key: "signOut",
    value: function signOut() {
      this._authData = {};
      window.localStorage.removeItem(this._authDataKey);
    }
    /**
     * Returns the current connected wallet account
     */

  }, {
    key: "account",
    value: function account() {
      if (!this._connectedAccount) {
        this._connectedAccount = new ConnectedWalletAccount(this, this._near.connection, this._authData.accountId);
      }

      return this._connectedAccount;
    }
  }]);

  return WalletConnection;
}();

exports.WalletConnection = WalletConnection;
exports.WalletAccount = WalletConnection;
/**
 * {@link Account} implementation which redirects to wallet using {@link WalletConnection} when no local key is available.
 */

var ConnectedWalletAccount = /*#__PURE__*/function (_account_1$Account) {
  _inherits(ConnectedWalletAccount, _account_1$Account);

  var _super = _createSuper(ConnectedWalletAccount);

  function ConnectedWalletAccount(walletConnection, connection, accountId) {
    var _this;

    _classCallCheck(this, ConnectedWalletAccount);

    _this = _super.call(this, connection, accountId);
    _this.walletConnection = walletConnection;
    return _this;
  } // Overriding Account methods

  /**
   * Sign a transaction by redirecting to the NEAR Wallet
   * @see {@link WalletConnection.requestSignTransactions}
   */


  _createClass(ConnectedWalletAccount, [{
    key: "signAndSendTransaction",
    value: function signAndSendTransaction() {
      if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
        return this._signAndSendTransaction({
          receiverId: arguments.length <= 0 ? undefined : arguments[0],
          actions: arguments.length <= 1 ? undefined : arguments[1]
        });
      }

      return this._signAndSendTransaction(arguments.length <= 0 ? undefined : arguments[0]);
    }
  }, {
    key: "_signAndSendTransaction",
    value: function () {
      var _signAndSendTransaction2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref2) {
        var receiverId, actions, walletMeta, _ref2$walletCallbackU, walletCallbackUrl, localKey, accessKey, block, blockHash, publicKey, nonce, transaction;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                receiverId = _ref2.receiverId, actions = _ref2.actions, walletMeta = _ref2.walletMeta, _ref2$walletCallbackU = _ref2.walletCallbackUrl, walletCallbackUrl = _ref2$walletCallbackU === void 0 ? window.location.href : _ref2$walletCallbackU;
                _context6.next = 3;
                return this.connection.signer.getPublicKey(this.accountId, this.connection.networkId);

              case 3:
                localKey = _context6.sent;
                _context6.next = 6;
                return this.accessKeyForTransaction(receiverId, actions, localKey);

              case 6:
                accessKey = _context6.sent;

                if (accessKey) {
                  _context6.next = 9;
                  break;
                }

                throw new Error("Cannot find matching key for transaction sent to ".concat(receiverId));

              case 9:
                if (!(localKey && localKey.toString() === accessKey.public_key)) {
                  _context6.next = 25;
                  break;
                }

                _context6.prev = 10;
                _context6.next = 13;
                return _get(_getPrototypeOf(ConnectedWalletAccount.prototype), "signAndSendTransaction", this).call(this, {
                  receiverId: receiverId,
                  actions: actions
                });

              case 13:
                return _context6.abrupt("return", _context6.sent);

              case 16:
                _context6.prev = 16;
                _context6.t0 = _context6["catch"](10);

                if (!(_context6.t0.type === 'NotEnoughAllowance')) {
                  _context6.next = 24;
                  break;
                }

                _context6.next = 21;
                return this.accessKeyForTransaction(receiverId, actions);

              case 21:
                accessKey = _context6.sent;
                _context6.next = 25;
                break;

              case 24:
                throw _context6.t0;

              case 25:
                _context6.next = 27;
                return this.connection.provider.block({
                  finality: 'final'
                });

              case 27:
                block = _context6.sent;
                blockHash = borsh_1.baseDecode(block.header.hash);
                publicKey = utils_1.PublicKey.from(accessKey.public_key); // TODO: Cache & listen for nonce updates for given access key

                nonce = accessKey.access_key.nonce + 1;
                transaction = transaction_1.createTransaction(this.accountId, publicKey, receiverId, nonce, actions, blockHash);
                _context6.next = 34;
                return this.walletConnection.requestSignTransactions({
                  transactions: [transaction],
                  meta: walletMeta,
                  callbackUrl: walletCallbackUrl
                });

              case 34:
                return _context6.abrupt("return", new Promise(function (resolve, reject) {
                  setTimeout(function () {
                    reject(new Error('Failed to redirect to sign transaction'));
                  }, 1000);
                }));

              case 35:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[10, 16]]);
      }));

      function _signAndSendTransaction(_x4) {
        return _signAndSendTransaction2.apply(this, arguments);
      }

      return _signAndSendTransaction;
    }()
    /**
     * Check if given access key allows the function call or method attempted in transaction
     * @param accessKey Array of {access_key: AccessKey, public_key: PublicKey} items
     * @param receiverId The NEAR account attempting to have access
     * @param actions The action(s) needed to be checked for access
     */

  }, {
    key: "accessKeyMatchesTransaction",
    value: function () {
      var _accessKeyMatchesTransaction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(accessKey, receiverId, actions) {
        var permission, _permission$FunctionC, allowedReceiverId, allowedMethods, _actions, functionCall;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                permission = accessKey.access_key.permission;

                if (!(permission === 'FullAccess')) {
                  _context7.next = 3;
                  break;
                }

                return _context7.abrupt("return", true);

              case 3:
                if (!permission.FunctionCall) {
                  _context7.next = 12;
                  break;
                }

                _permission$FunctionC = permission.FunctionCall, allowedReceiverId = _permission$FunctionC.receiver_id, allowedMethods = _permission$FunctionC.method_names;
                /********************************
                Accept multisig access keys and let wallets attempt to signAndSendTransaction
                If an access key has itself as receiverId and method permission add_request_and_confirm, then it is being used in a wallet with multisig contract: https://github.com/near/core-contracts/blob/671c05f09abecabe7a7e58efe942550a35fc3292/multisig/src/lib.rs#L149-L153
                ********************************/

                if (!(allowedReceiverId === this.accountId && allowedMethods.includes(MULTISIG_HAS_METHOD))) {
                  _context7.next = 7;
                  break;
                }

                return _context7.abrupt("return", true);

              case 7:
                if (!(allowedReceiverId === receiverId)) {
                  _context7.next = 12;
                  break;
                }

                if (!(actions.length !== 1)) {
                  _context7.next = 10;
                  break;
                }

                return _context7.abrupt("return", false);

              case 10:
                _actions = _slicedToArray(actions, 1), functionCall = _actions[0].functionCall;
                return _context7.abrupt("return", functionCall && (!functionCall.deposit || functionCall.deposit.toString() === '0') && ( // TODO: Should support charging amount smaller than allowance?
                allowedMethods.length === 0 || allowedMethods.includes(functionCall.methodName)));

              case 12:
                return _context7.abrupt("return", false);

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function accessKeyMatchesTransaction(_x5, _x6, _x7) {
        return _accessKeyMatchesTransaction.apply(this, arguments);
      }

      return accessKeyMatchesTransaction;
    }()
    /**
     * Helper function returning the access key (if it exists) to the receiver that grants the designated permission
     * @param receiverId The NEAR account seeking the access key for a transaction
     * @param actions The action(s) sought to gain access to
     * @param localKey A local public key provided to check for access
     * @returns Promise<any>
     */

  }, {
    key: "accessKeyForTransaction",
    value: function () {
      var _accessKeyForTransaction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(receiverId, actions, localKey) {
        var accessKeys, accessKey, walletKeys, _iterator, _step, _accessKey;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.getAccessKeys();

              case 2:
                accessKeys = _context8.sent;

                if (!localKey) {
                  _context8.next = 12;
                  break;
                }

                accessKey = accessKeys.find(function (key) {
                  return key.public_key.toString() === localKey.toString();
                });
                _context8.t0 = accessKey;

                if (!_context8.t0) {
                  _context8.next = 10;
                  break;
                }

                _context8.next = 9;
                return this.accessKeyMatchesTransaction(accessKey, receiverId, actions);

              case 9:
                _context8.t0 = _context8.sent;

              case 10:
                if (!_context8.t0) {
                  _context8.next = 12;
                  break;
                }

                return _context8.abrupt("return", accessKey);

              case 12:
                walletKeys = this.walletConnection._authData.allKeys;
                _iterator = _createForOfIteratorHelper(accessKeys);
                _context8.prev = 14;

                _iterator.s();

              case 16:
                if ((_step = _iterator.n()).done) {
                  _context8.next = 27;
                  break;
                }

                _accessKey = _step.value;
                _context8.t1 = walletKeys.indexOf(_accessKey.public_key) !== -1;

                if (!_context8.t1) {
                  _context8.next = 23;
                  break;
                }

                _context8.next = 22;
                return this.accessKeyMatchesTransaction(_accessKey, receiverId, actions);

              case 22:
                _context8.t1 = _context8.sent;

              case 23:
                if (!_context8.t1) {
                  _context8.next = 25;
                  break;
                }

                return _context8.abrupt("return", _accessKey);

              case 25:
                _context8.next = 16;
                break;

              case 27:
                _context8.next = 32;
                break;

              case 29:
                _context8.prev = 29;
                _context8.t2 = _context8["catch"](14);

                _iterator.e(_context8.t2);

              case 32:
                _context8.prev = 32;

                _iterator.f();

                return _context8.finish(32);

              case 35:
                return _context8.abrupt("return", null);

              case 36:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[14, 29, 32, 35]]);
      }));

      function accessKeyForTransaction(_x8, _x9, _x10) {
        return _accessKeyForTransaction.apply(this, arguments);
      }

      return accessKeyForTransaction;
    }()
  }]);

  return ConnectedWalletAccount;
}(account_1.Account);

exports.ConnectedWalletAccount = ConnectedWalletAccount;
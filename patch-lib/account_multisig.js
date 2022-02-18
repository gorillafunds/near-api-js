'use strict';

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Account2FA = exports.AccountMultisig = exports.MULTISIG_CONFIRM_METHODS = exports.MULTISIG_CHANGE_METHODS = exports.MULTISIG_DEPOSIT = exports.MULTISIG_GAS = exports.MULTISIG_ALLOWANCE = exports.MULTISIG_STORAGE_KEY = void 0;

var bn_js_1 = __importDefault(require("bn.js"));

var depd_1 = __importDefault(require("depd"));

var account_1 = require("./account");

var format_1 = require("./utils/format");

var key_pair_1 = require("./utils/key_pair");

var transaction_1 = require("./transaction");

var web_1 = require("./utils/web");

exports.MULTISIG_STORAGE_KEY = '__multisigRequest';
exports.MULTISIG_ALLOWANCE = new bn_js_1["default"](format_1.parseNearAmount('1')); // TODO: Different gas value for different requests (can reduce gas usage dramatically)

exports.MULTISIG_GAS = new bn_js_1["default"]('100000000000000');
exports.MULTISIG_DEPOSIT = new bn_js_1["default"]('0');
exports.MULTISIG_CHANGE_METHODS = ['add_request', 'add_request_and_confirm', 'delete_request', 'confirm'];
exports.MULTISIG_CONFIRM_METHODS = ['confirm']; // in memory request cache for node w/o localStorage

var storageFallback = _defineProperty({}, exports.MULTISIG_STORAGE_KEY, null);

var AccountMultisig = /*#__PURE__*/function (_account_1$Account) {
  _inherits(AccountMultisig, _account_1$Account);

  var _super = _createSuper(AccountMultisig);

  function AccountMultisig(connection, accountId, options) {
    var _this;

    _classCallCheck(this, AccountMultisig);

    _this = _super.call(this, connection, accountId);
    _this.storage = options.storage;
    _this.onAddRequestResult = options.onAddRequestResult;
    return _this;
  }

  _createClass(AccountMultisig, [{
    key: "signAndSendTransactionWithAccount",
    value: function () {
      var _signAndSendTransactionWithAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(receiverId, actions) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _get(_getPrototypeOf(AccountMultisig.prototype), "signAndSendTransaction", this).call(this, {
                  receiverId: receiverId,
                  actions: actions
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function signAndSendTransactionWithAccount(_x, _x2) {
        return _signAndSendTransactionWithAccount.apply(this, arguments);
      }

      return signAndSendTransactionWithAccount;
    }()
  }, {
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
      var _signAndSendTransaction2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref) {
        var receiverId, actions, accountId, args, result, status;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                receiverId = _ref.receiverId, actions = _ref.actions;
                accountId = this.accountId;
                args = Buffer.from(JSON.stringify({
                  request: {
                    receiver_id: receiverId,
                    actions: convertActions(actions, accountId, receiverId)
                  }
                }));
                _context2.prev = 3;
                _context2.next = 6;
                return _get(_getPrototypeOf(AccountMultisig.prototype), "signAndSendTransaction", this).call(this, {
                  receiverId: accountId,
                  actions: [transaction_1.functionCall('add_request_and_confirm', args, exports.MULTISIG_GAS, exports.MULTISIG_DEPOSIT)]
                });

              case 6:
                result = _context2.sent;
                _context2.next = 18;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](3);

                if (!_context2.t0.toString().includes('Account has too many active requests. Confirm or delete some')) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 14;
                return this.deleteUnconfirmedRequests();

              case 14:
                _context2.next = 16;
                return this.signAndSendTransaction(receiverId, actions);

              case 16:
                return _context2.abrupt("return", _context2.sent);

              case 17:
                throw _context2.t0;

              case 18:
                if (result.status) {
                  _context2.next = 20;
                  break;
                }

                throw new Error('Request failed');

              case 20:
                status = _objectSpread({}, result.status);

                if (!(!status.SuccessValue || typeof status.SuccessValue !== 'string')) {
                  _context2.next = 23;
                  break;
                }

                throw new Error('Request failed');

              case 23:
                this.setRequest({
                  accountId: accountId,
                  actions: actions,
                  requestId: parseInt(Buffer.from(status.SuccessValue, 'base64').toString('ascii'), 10)
                });

                if (!this.onAddRequestResult) {
                  _context2.next = 27;
                  break;
                }

                _context2.next = 27;
                return this.onAddRequestResult(result);

              case 27:
                // NOTE there is no await on purpose to avoid blocking for 2fa
                this.deleteUnconfirmedRequests();
                return _context2.abrupt("return", result);

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 9]]);
      }));

      function _signAndSendTransaction(_x3) {
        return _signAndSendTransaction2.apply(this, arguments);
      }

      return _signAndSendTransaction;
    }()
  }, {
    key: "deleteUnconfirmedRequests",
    value: function () {
      var _deleteUnconfirmedRequests = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var request_ids, _this$getRequest, requestId, _iterator, _step, requestIdToDelete;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getRequestIds();

              case 2:
                request_ids = _context3.sent;
                _this$getRequest = this.getRequest(), requestId = _this$getRequest.requestId;
                _iterator = _createForOfIteratorHelper(request_ids);
                _context3.prev = 5;

                _iterator.s();

              case 7:
                if ((_step = _iterator.n()).done) {
                  _context3.next = 21;
                  break;
                }

                requestIdToDelete = _step.value;

                if (!(requestIdToDelete == requestId)) {
                  _context3.next = 11;
                  break;
                }

                return _context3.abrupt("continue", 19);

              case 11:
                _context3.prev = 11;
                _context3.next = 14;
                return _get(_getPrototypeOf(AccountMultisig.prototype), "signAndSendTransaction", this).call(this, {
                  receiverId: this.accountId,
                  actions: [transaction_1.functionCall('delete_request', {
                    request_id: requestIdToDelete
                  }, exports.MULTISIG_GAS, exports.MULTISIG_DEPOSIT)]
                });

              case 14:
                _context3.next = 19;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](11);
                console.warn('Attempt to delete an earlier request before 15 minutes failed. Will try again.');

              case 19:
                _context3.next = 7;
                break;

              case 21:
                _context3.next = 26;
                break;

              case 23:
                _context3.prev = 23;
                _context3.t1 = _context3["catch"](5);

                _iterator.e(_context3.t1);

              case 26:
                _context3.prev = 26;

                _iterator.f();

                return _context3.finish(26);

              case 29:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5, 23, 26, 29], [11, 16]]);
      }));

      function deleteUnconfirmedRequests() {
        return _deleteUnconfirmedRequests.apply(this, arguments);
      }

      return deleteUnconfirmedRequests;
    }() // helpers

  }, {
    key: "getRequestIds",
    value: function () {
      var _getRequestIds = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.viewFunction(this.accountId, 'list_request_ids'));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getRequestIds() {
        return _getRequestIds.apply(this, arguments);
      }

      return getRequestIds;
    }()
  }, {
    key: "getRequest",
    value: function getRequest() {
      if (this.storage) {
        return JSON.parse(this.storage.getItem(exports.MULTISIG_STORAGE_KEY) || '{}');
      }

      return storageFallback[exports.MULTISIG_STORAGE_KEY];
    }
  }, {
    key: "setRequest",
    value: function setRequest(data) {
      if (this.storage) {
        return this.storage.setItem(exports.MULTISIG_STORAGE_KEY, JSON.stringify(data));
      }

      storageFallback[exports.MULTISIG_STORAGE_KEY] = data;
    }
  }]);

  return AccountMultisig;
}(account_1.Account);

exports.AccountMultisig = AccountMultisig;

var Account2FA = /*#__PURE__*/function (_AccountMultisig) {
  _inherits(Account2FA, _AccountMultisig);

  var _super2 = _createSuper(Account2FA);

  function Account2FA(connection, accountId, options) {
    var _this2;

    _classCallCheck(this, Account2FA);

    _this2 = _super2.call(this, connection, accountId, options);
    _this2.helperUrl = 'https://helper.testnet.near.org';
    _this2.helperUrl = options.helperUrl || _this2.helperUrl;
    _this2.storage = options.storage;
    _this2.sendCode = options.sendCode || _this2.sendCodeDefault;
    _this2.getCode = options.getCode || _this2.getCodeDefault;
    _this2.verifyCode = options.verifyCode || _this2.verifyCodeDefault;
    _this2.onConfirmResult = options.onConfirmResult;
    return _this2;
  }

  _createClass(Account2FA, [{
    key: "signAndSendTransaction",
    value: function () {
      var _signAndSendTransaction3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var deprecate,
            _args5 = arguments;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(typeof (_args5.length <= 0 ? undefined : _args5[0]) === 'string')) {
                  _context5.next = 6;
                  break;
                }

                deprecate = depd_1["default"]('Account.signAndSendTransaction(receiverId, actions');
                deprecate('use `Account2FA.signAndSendTransaction(SignAndSendTransactionOptions)` instead');
                return _context5.abrupt("return", this.__signAndSendTransaction({
                  receiverId: _args5.length <= 0 ? undefined : _args5[0],
                  actions: _args5.length <= 1 ? undefined : _args5[1]
                }));

              case 6:
                return _context5.abrupt("return", this.__signAndSendTransaction(_args5.length <= 0 ? undefined : _args5[0]));

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function signAndSendTransaction() {
        return _signAndSendTransaction3.apply(this, arguments);
      }

      return signAndSendTransaction;
    }()
  }, {
    key: "__signAndSendTransaction",
    value: function () {
      var _signAndSendTransaction4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref2) {
        var receiverId, actions, result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                receiverId = _ref2.receiverId, actions = _ref2.actions;
                _context6.next = 3;
                return _get(_getPrototypeOf(Account2FA.prototype), "signAndSendTransaction", this).call(this, {
                  receiverId: receiverId,
                  actions: actions
                });

              case 3:
                _context6.next = 5;
                return this.sendCode();

              case 5:
                _context6.next = 7;
                return this.promptAndVerify();

              case 7:
                result = _context6.sent;

                if (!this.onConfirmResult) {
                  _context6.next = 11;
                  break;
                }

                _context6.next = 11;
                return this.onConfirmResult(result);

              case 11:
                return _context6.abrupt("return", result);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function __signAndSendTransaction(_x4) {
        return _signAndSendTransaction4.apply(this, arguments);
      }

      return __signAndSendTransaction;
    }() // default helpers for CH deployments of multisig

  }, {
    key: "deployMultisig",
    value: function () {
      var _deployMultisig = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(contractBytes) {
        var accountId, seedOrLedgerKey, fak2lak, confirmOnlyKey, newArgs, actions;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                accountId = this.accountId;
                _context7.next = 3;
                return this.getRecoveryMethods();

              case 3:
                seedOrLedgerKey = _context7.sent.data.filter(function (_ref3) {
                  var kind = _ref3.kind,
                      publicKey = _ref3.publicKey;
                  return (kind === 'phrase' || kind === 'ledger') && publicKey !== null;
                }).map(function (rm) {
                  return rm.publicKey;
                });
                _context7.next = 6;
                return this.getAccessKeys();

              case 6:
                fak2lak = _context7.sent.filter(function (_ref4) {
                  var public_key = _ref4.public_key,
                      permission = _ref4.access_key.permission;
                  return permission === 'FullAccess' && !seedOrLedgerKey.includes(public_key);
                }).map(function (ak) {
                  return ak.public_key;
                }).map(toPK);
                _context7.t0 = toPK;
                _context7.next = 10;
                return this.postSignedJson('/2fa/getAccessKey', {
                  accountId: accountId
                });

              case 10:
                _context7.t1 = _context7.sent.publicKey;
                confirmOnlyKey = (0, _context7.t0)(_context7.t1);
                newArgs = Buffer.from(JSON.stringify({
                  'num_confirmations': 2
                }));
                actions = [].concat(_toConsumableArray(fak2lak.map(function (pk) {
                  return transaction_1.deleteKey(pk);
                })), _toConsumableArray(fak2lak.map(function (pk) {
                  return transaction_1.addKey(pk, transaction_1.functionCallAccessKey(accountId, exports.MULTISIG_CHANGE_METHODS, null));
                })), [transaction_1.addKey(confirmOnlyKey, transaction_1.functionCallAccessKey(accountId, exports.MULTISIG_CONFIRM_METHODS, null)), transaction_1.deployContract(contractBytes)]);
                _context7.next = 16;
                return this.state();

              case 16:
                _context7.t2 = _context7.sent.code_hash;

                if (!(_context7.t2 === '11111111111111111111111111111111')) {
                  _context7.next = 19;
                  break;
                }

                actions.push(transaction_1.functionCall('new', newArgs, exports.MULTISIG_GAS, exports.MULTISIG_DEPOSIT));

              case 19:
                console.log('deploying multisig contract for', accountId);
                _context7.next = 22;
                return _get(_getPrototypeOf(Account2FA.prototype), "signAndSendTransactionWithAccount", this).call(this, accountId, actions);

              case 22:
                return _context7.abrupt("return", _context7.sent);

              case 23:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function deployMultisig(_x5) {
        return _deployMultisig.apply(this, arguments);
      }

      return deployMultisig;
    }()
  }, {
    key: "disable",
    value: function () {
      var _disable = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(contractBytes) {
        var accountId, accessKeys, lak2fak, confirmOnlyKey, actions;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                accountId = this.accountId;
                _context8.next = 3;
                return this.getAccessKeys();

              case 3:
                accessKeys = _context8.sent;
                lak2fak = accessKeys.filter(function (_ref5) {
                  var access_key = _ref5.access_key;
                  return access_key.permission !== 'FullAccess';
                }).filter(function (_ref6) {
                  var access_key = _ref6.access_key;
                  var perm = access_key.permission.FunctionCall;
                  return perm.receiver_id === accountId && perm.method_names.length === 4 && perm.method_names.includes('add_request_and_confirm');
                });
                _context8.t0 = key_pair_1.PublicKey;
                _context8.next = 8;
                return this.postSignedJson('/2fa/getAccessKey', {
                  accountId: accountId
                });

              case 8:
                _context8.t1 = _context8.sent.publicKey;
                confirmOnlyKey = _context8.t0.from.call(_context8.t0, _context8.t1);
                actions = [transaction_1.deleteKey(confirmOnlyKey)].concat(_toConsumableArray(lak2fak.map(function (_ref7) {
                  var public_key = _ref7.public_key;
                  return transaction_1.deleteKey(key_pair_1.PublicKey.from(public_key));
                })), _toConsumableArray(lak2fak.map(function (_ref8) {
                  var public_key = _ref8.public_key;
                  return transaction_1.addKey(key_pair_1.PublicKey.from(public_key), null);
                })), [transaction_1.deployContract(contractBytes)]);
                console.log('disabling 2fa for', accountId);
                _context8.next = 14;
                return this.signAndSendTransaction({
                  receiverId: accountId,
                  actions: actions
                });

              case 14:
                return _context8.abrupt("return", _context8.sent);

              case 15:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function disable(_x6) {
        return _disable.apply(this, arguments);
      }

      return disable;
    }()
  }, {
    key: "sendCodeDefault",
    value: function () {
      var _sendCodeDefault = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var accountId, _this$getRequest2, requestId, method;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                accountId = this.accountId;
                _this$getRequest2 = this.getRequest(), requestId = _this$getRequest2.requestId;
                _context9.next = 4;
                return this.get2faMethod();

              case 4:
                method = _context9.sent;
                _context9.next = 7;
                return this.postSignedJson('/2fa/send', {
                  accountId: accountId,
                  method: method,
                  requestId: requestId
                });

              case 7:
                return _context9.abrupt("return", requestId);

              case 8:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function sendCodeDefault() {
        return _sendCodeDefault.apply(this, arguments);
      }

      return sendCodeDefault;
    }()
  }, {
    key: "getCodeDefault",
    value: function () {
      var _getCodeDefault = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(method) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                throw new Error('There is no getCode callback provided. Please provide your own in AccountMultisig constructor options. It has a parameter method where method.kind is "email" or "phone".');

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function getCodeDefault(_x7) {
        return _getCodeDefault.apply(this, arguments);
      }

      return getCodeDefault;
    }()
  }, {
    key: "promptAndVerify",
    value: function () {
      var _promptAndVerify = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        var method, securityCode, result;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.get2faMethod();

              case 2:
                method = _context11.sent;
                _context11.next = 5;
                return this.getCode(method);

              case 5:
                securityCode = _context11.sent;
                _context11.prev = 6;
                _context11.next = 9;
                return this.verifyCode(securityCode);

              case 9:
                result = _context11.sent;
                return _context11.abrupt("return", result);

              case 13:
                _context11.prev = 13;
                _context11.t0 = _context11["catch"](6);
                console.warn('Error validating security code:', _context11.t0);

                if (!(_context11.t0.toString().includes('invalid 2fa code provided') || _context11.t0.toString().includes('2fa code not valid'))) {
                  _context11.next = 20;
                  break;
                }

                _context11.next = 19;
                return this.promptAndVerify();

              case 19:
                return _context11.abrupt("return", _context11.sent);

              case 20:
                throw _context11.t0;

              case 21:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[6, 13]]);
      }));

      function promptAndVerify() {
        return _promptAndVerify.apply(this, arguments);
      }

      return promptAndVerify;
    }()
  }, {
    key: "verifyCodeDefault",
    value: function () {
      var _verifyCodeDefault = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(securityCode) {
        var accountId, request, requestId;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                accountId = this.accountId;
                request = this.getRequest();

                if (request) {
                  _context12.next = 4;
                  break;
                }

                throw new Error('no request pending');

              case 4:
                requestId = request.requestId;
                _context12.next = 7;
                return this.postSignedJson('/2fa/verify', {
                  accountId: accountId,
                  securityCode: securityCode,
                  requestId: requestId
                });

              case 7:
                return _context12.abrupt("return", _context12.sent);

              case 8:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function verifyCodeDefault(_x8) {
        return _verifyCodeDefault.apply(this, arguments);
      }

      return verifyCodeDefault;
    }()
  }, {
    key: "getRecoveryMethods",
    value: function () {
      var _getRecoveryMethods = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
        var accountId;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                accountId = this.accountId;
                _context13.t0 = accountId;
                _context13.next = 4;
                return this.postSignedJson('/account/recoveryMethods', {
                  accountId: accountId
                });

              case 4:
                _context13.t1 = _context13.sent;
                return _context13.abrupt("return", {
                  accountId: _context13.t0,
                  data: _context13.t1
                });

              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getRecoveryMethods() {
        return _getRecoveryMethods.apply(this, arguments);
      }

      return getRecoveryMethods;
    }()
  }, {
    key: "get2faMethod",
    value: function () {
      var _get2faMethod = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
        var _yield$this$getRecove, data, _data, kind, detail;

        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.getRecoveryMethods();

              case 2:
                _yield$this$getRecove = _context14.sent;
                data = _yield$this$getRecove.data;

                if (data && data.length) {
                  data = data.find(function (m) {
                    return m.kind.indexOf('2fa-') === 0;
                  });
                }

                if (data) {
                  _context14.next = 7;
                  break;
                }

                return _context14.abrupt("return", null);

              case 7:
                _data = data, kind = _data.kind, detail = _data.detail;
                return _context14.abrupt("return", {
                  kind: kind,
                  detail: detail
                });

              case 9:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function get2faMethod() {
        return _get2faMethod.apply(this, arguments);
      }

      return get2faMethod;
    }()
  }, {
    key: "signatureFor",
    value: function () {
      var _signatureFor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
        var accountId, block, blockNumber, signed, blockNumberSignature;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                accountId = this.accountId;
                _context15.next = 3;
                return this.connection.provider.block({
                  finality: 'final'
                });

              case 3:
                block = _context15.sent;
                blockNumber = block.header.height.toString();
                _context15.next = 7;
                return this.connection.signer.signMessage(Buffer.from(blockNumber), accountId, this.connection.networkId);

              case 7:
                signed = _context15.sent;
                blockNumberSignature = Buffer.from(signed.signature).toString('base64');
                return _context15.abrupt("return", {
                  blockNumber: blockNumber,
                  blockNumberSignature: blockNumberSignature
                });

              case 10:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function signatureFor() {
        return _signatureFor.apply(this, arguments);
      }

      return signatureFor;
    }()
  }, {
    key: "postSignedJson",
    value: function () {
      var _postSignedJson = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(path, body) {
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.t0 = web_1;
                _context16.t1 = this.helperUrl + path;
                _context16.t2 = JSON;
                _context16.t3 = _objectSpread;
                _context16.t4 = _objectSpread({}, body);
                _context16.next = 7;
                return this.signatureFor();

              case 7:
                _context16.t5 = _context16.sent;
                _context16.t6 = (0, _context16.t3)(_context16.t4, _context16.t5);
                _context16.t7 = _context16.t2.stringify.call(_context16.t2, _context16.t6);
                _context16.next = 12;
                return _context16.t0.fetchJson.call(_context16.t0, _context16.t1, _context16.t7);

              case 12:
                return _context16.abrupt("return", _context16.sent);

              case 13:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function postSignedJson(_x9, _x10) {
        return _postSignedJson.apply(this, arguments);
      }

      return postSignedJson;
    }()
  }]);

  return Account2FA;
}(AccountMultisig);

exports.Account2FA = Account2FA; // helpers

var toPK = function toPK(pk) {
  return key_pair_1.PublicKey.from(pk);
};

var convertPKForContract = function convertPKForContract(pk) {
  return pk.toString().replace('ed25519:', '');
};

var convertActions = function convertActions(actions, accountId, receiverId) {
  return actions.map(function (a) {
    var type = a["enum"];
    var _a$type = a[type],
        gas = _a$type.gas,
        publicKey = _a$type.publicKey,
        methodName = _a$type.methodName,
        args = _a$type.args,
        deposit = _a$type.deposit,
        accessKey = _a$type.accessKey,
        code = _a$type.code;
    var action = {
      type: type[0].toUpperCase() + type.substr(1),
      gas: gas && gas.toString() || undefined,
      public_key: publicKey && convertPKForContract(publicKey) || undefined,
      method_name: methodName,
      args: args && Buffer.from(args).toString('base64') || undefined,
      code: code && Buffer.from(code).toString('base64') || undefined,
      amount: deposit && deposit.toString() || undefined,
      deposit: deposit && deposit.toString() || '0',
      permission: undefined
    };

    if (accessKey) {
      if (receiverId === accountId && accessKey.permission["enum"] !== 'fullAccess') {
        action.permission = {
          receiver_id: accountId,
          allowance: exports.MULTISIG_ALLOWANCE.toString(),
          method_names: exports.MULTISIG_CHANGE_METHODS
        };
      }

      if (accessKey.permission["enum"] === 'functionCall') {
        var _accessKey$permission = accessKey.permission.functionCall,
            receiver_id = _accessKey$permission.receiverId,
            method_names = _accessKey$permission.methodNames,
            allowance = _accessKey$permission.allowance;
        action.permission = {
          receiver_id: receiver_id,
          allowance: allowance && allowance.toString() || undefined,
          method_names: method_names
        };
      }
    }

    return action;
  });
};
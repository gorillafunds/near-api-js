"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signTransaction = exports.createTransaction = exports.SCHEMA = exports.Action = exports.SignedTransaction = exports.Transaction = exports.Signature = exports.deleteAccount = exports.deleteKey = exports.addKey = exports.stake = exports.transfer = exports.functionCall = exports.stringifyJsonOrBytes = exports.deployContract = exports.createAccount = exports.DeleteAccount = exports.DeleteKey = exports.AddKey = exports.Stake = exports.Transfer = exports.FunctionCall = exports.DeployContract = exports.CreateAccount = exports.IAction = exports.functionCallAccessKey = exports.fullAccessKey = exports.AccessKey = exports.AccessKeyPermission = exports.FullAccessPermission = exports.FunctionCallPermission = void 0;

var js_sha256_1 = __importDefault(require("js-sha256"));

var enums_1 = require("./utils/enums");

var borsh_1 = require("borsh");

var key_pair_1 = require("./utils/key_pair");

var FunctionCallPermission = /*#__PURE__*/function (_enums_1$Assignable) {
  _inherits(FunctionCallPermission, _enums_1$Assignable);

  var _super = _createSuper(FunctionCallPermission);

  function FunctionCallPermission() {
    _classCallCheck(this, FunctionCallPermission);

    return _super.apply(this, arguments);
  }

  return _createClass(FunctionCallPermission);
}(enums_1.Assignable);

exports.FunctionCallPermission = FunctionCallPermission;

var FullAccessPermission = /*#__PURE__*/function (_enums_1$Assignable2) {
  _inherits(FullAccessPermission, _enums_1$Assignable2);

  var _super2 = _createSuper(FullAccessPermission);

  function FullAccessPermission() {
    _classCallCheck(this, FullAccessPermission);

    return _super2.apply(this, arguments);
  }

  return _createClass(FullAccessPermission);
}(enums_1.Assignable);

exports.FullAccessPermission = FullAccessPermission;

var AccessKeyPermission = /*#__PURE__*/function (_enums_1$Enum) {
  _inherits(AccessKeyPermission, _enums_1$Enum);

  var _super3 = _createSuper(AccessKeyPermission);

  function AccessKeyPermission() {
    _classCallCheck(this, AccessKeyPermission);

    return _super3.apply(this, arguments);
  }

  return _createClass(AccessKeyPermission);
}(enums_1.Enum);

exports.AccessKeyPermission = AccessKeyPermission;

var AccessKey = /*#__PURE__*/function (_enums_1$Assignable3) {
  _inherits(AccessKey, _enums_1$Assignable3);

  var _super4 = _createSuper(AccessKey);

  function AccessKey() {
    _classCallCheck(this, AccessKey);

    return _super4.apply(this, arguments);
  }

  return _createClass(AccessKey);
}(enums_1.Assignable);

exports.AccessKey = AccessKey;

function fullAccessKey() {
  return new AccessKey({
    nonce: 0,
    permission: new AccessKeyPermission({
      fullAccess: new FullAccessPermission({})
    })
  });
}

exports.fullAccessKey = fullAccessKey;

function functionCallAccessKey(receiverId, methodNames, allowance) {
  return new AccessKey({
    nonce: 0,
    permission: new AccessKeyPermission({
      functionCall: new FunctionCallPermission({
        receiverId: receiverId,
        allowance: allowance,
        methodNames: methodNames
      })
    })
  });
}

exports.functionCallAccessKey = functionCallAccessKey;

var IAction = /*#__PURE__*/function (_enums_1$Assignable4) {
  _inherits(IAction, _enums_1$Assignable4);

  var _super5 = _createSuper(IAction);

  function IAction() {
    _classCallCheck(this, IAction);

    return _super5.apply(this, arguments);
  }

  return _createClass(IAction);
}(enums_1.Assignable);

exports.IAction = IAction;

var CreateAccount = /*#__PURE__*/function (_IAction) {
  _inherits(CreateAccount, _IAction);

  var _super6 = _createSuper(CreateAccount);

  function CreateAccount() {
    _classCallCheck(this, CreateAccount);

    return _super6.apply(this, arguments);
  }

  return _createClass(CreateAccount);
}(IAction);

exports.CreateAccount = CreateAccount;

var DeployContract = /*#__PURE__*/function (_IAction2) {
  _inherits(DeployContract, _IAction2);

  var _super7 = _createSuper(DeployContract);

  function DeployContract() {
    _classCallCheck(this, DeployContract);

    return _super7.apply(this, arguments);
  }

  return _createClass(DeployContract);
}(IAction);

exports.DeployContract = DeployContract;

var FunctionCall = /*#__PURE__*/function (_IAction3) {
  _inherits(FunctionCall, _IAction3);

  var _super8 = _createSuper(FunctionCall);

  function FunctionCall() {
    _classCallCheck(this, FunctionCall);

    return _super8.apply(this, arguments);
  }

  return _createClass(FunctionCall);
}(IAction);

exports.FunctionCall = FunctionCall;

var Transfer = /*#__PURE__*/function (_IAction4) {
  _inherits(Transfer, _IAction4);

  var _super9 = _createSuper(Transfer);

  function Transfer() {
    _classCallCheck(this, Transfer);

    return _super9.apply(this, arguments);
  }

  return _createClass(Transfer);
}(IAction);

exports.Transfer = Transfer;

var Stake = /*#__PURE__*/function (_IAction5) {
  _inherits(Stake, _IAction5);

  var _super10 = _createSuper(Stake);

  function Stake() {
    _classCallCheck(this, Stake);

    return _super10.apply(this, arguments);
  }

  return _createClass(Stake);
}(IAction);

exports.Stake = Stake;

var AddKey = /*#__PURE__*/function (_IAction6) {
  _inherits(AddKey, _IAction6);

  var _super11 = _createSuper(AddKey);

  function AddKey() {
    _classCallCheck(this, AddKey);

    return _super11.apply(this, arguments);
  }

  return _createClass(AddKey);
}(IAction);

exports.AddKey = AddKey;

var DeleteKey = /*#__PURE__*/function (_IAction7) {
  _inherits(DeleteKey, _IAction7);

  var _super12 = _createSuper(DeleteKey);

  function DeleteKey() {
    _classCallCheck(this, DeleteKey);

    return _super12.apply(this, arguments);
  }

  return _createClass(DeleteKey);
}(IAction);

exports.DeleteKey = DeleteKey;

var DeleteAccount = /*#__PURE__*/function (_IAction8) {
  _inherits(DeleteAccount, _IAction8);

  var _super13 = _createSuper(DeleteAccount);

  function DeleteAccount() {
    _classCallCheck(this, DeleteAccount);

    return _super13.apply(this, arguments);
  }

  return _createClass(DeleteAccount);
}(IAction);

exports.DeleteAccount = DeleteAccount;

function createAccount() {
  return new Action({
    createAccount: new CreateAccount({})
  });
}

exports.createAccount = createAccount;

function deployContract(code) {
  return new Action({
    deployContract: new DeployContract({
      code: code
    })
  });
}

exports.deployContract = deployContract;

function stringifyJsonOrBytes(args) {
  var isUint8Array = args.byteLength !== undefined && args.byteLength === args.length;
  var serializedArgs = isUint8Array ? args : Buffer.from(JSON.stringify(args));
  return serializedArgs;
}

exports.stringifyJsonOrBytes = stringifyJsonOrBytes;
/**
 * Constructs {@link Action} instance representing contract method call.
 *
 * @param methodName the name of the method to call
 * @param args arguments to pass to method. Can be either plain JS object which gets serialized as JSON automatically
 *  or `Uint8Array` instance which represents bytes passed as is.
 * @param gas max amount of gas that method call can use
 * @param deposit amount of NEAR (in yoctoNEAR) to send together with the call
 * @param stringify Convert input arguments into bytes array.
 */

function functionCall(methodName, args, gas, deposit) {
  var stringify = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : stringifyJsonOrBytes;
  return new Action({
    functionCall: new FunctionCall({
      methodName: methodName,
      args: stringify(args),
      gas: gas,
      deposit: deposit
    })
  });
}

exports.functionCall = functionCall;

function transfer(deposit) {
  return new Action({
    transfer: new Transfer({
      deposit: deposit
    })
  });
}

exports.transfer = transfer;

function stake(stake, publicKey) {
  return new Action({
    stake: new Stake({
      stake: stake,
      publicKey: publicKey
    })
  });
}

exports.stake = stake;

function addKey(publicKey, accessKey) {
  return new Action({
    addKey: new AddKey({
      publicKey: publicKey,
      accessKey: accessKey
    })
  });
}

exports.addKey = addKey;

function deleteKey(publicKey) {
  return new Action({
    deleteKey: new DeleteKey({
      publicKey: publicKey
    })
  });
}

exports.deleteKey = deleteKey;

function deleteAccount(beneficiaryId) {
  return new Action({
    deleteAccount: new DeleteAccount({
      beneficiaryId: beneficiaryId
    })
  });
}

exports.deleteAccount = deleteAccount;

var Signature = /*#__PURE__*/function (_enums_1$Assignable5) {
  _inherits(Signature, _enums_1$Assignable5);

  var _super14 = _createSuper(Signature);

  function Signature() {
    _classCallCheck(this, Signature);

    return _super14.apply(this, arguments);
  }

  return _createClass(Signature);
}(enums_1.Assignable);

exports.Signature = Signature;

var Transaction = /*#__PURE__*/function (_enums_1$Assignable6) {
  _inherits(Transaction, _enums_1$Assignable6);

  var _super15 = _createSuper(Transaction);

  function Transaction() {
    _classCallCheck(this, Transaction);

    return _super15.apply(this, arguments);
  }

  _createClass(Transaction, [{
    key: "encode",
    value: function encode() {
      return borsh_1.serialize(exports.SCHEMA, this);
    }
  }], [{
    key: "decode",
    value: function decode(bytes) {
      return borsh_1.deserialize(exports.SCHEMA, Transaction, bytes);
    }
  }]);

  return Transaction;
}(enums_1.Assignable);

exports.Transaction = Transaction;

var SignedTransaction = /*#__PURE__*/function (_enums_1$Assignable7) {
  _inherits(SignedTransaction, _enums_1$Assignable7);

  var _super16 = _createSuper(SignedTransaction);

  function SignedTransaction() {
    _classCallCheck(this, SignedTransaction);

    return _super16.apply(this, arguments);
  }

  _createClass(SignedTransaction, [{
    key: "encode",
    value: function encode() {
      return borsh_1.serialize(exports.SCHEMA, this);
    }
  }], [{
    key: "decode",
    value: function decode(bytes) {
      return borsh_1.deserialize(exports.SCHEMA, SignedTransaction, bytes);
    }
  }]);

  return SignedTransaction;
}(enums_1.Assignable);

exports.SignedTransaction = SignedTransaction;
/**
 * Contains a list of the valid transaction Actions available with this API
 * @see {@link https://nomicon.io/RuntimeSpec/Actions.html | Actions Spec}
 */

var Action = /*#__PURE__*/function (_enums_1$Enum2) {
  _inherits(Action, _enums_1$Enum2);

  var _super17 = _createSuper(Action);

  function Action() {
    _classCallCheck(this, Action);

    return _super17.apply(this, arguments);
  }

  return _createClass(Action);
}(enums_1.Enum);

exports.Action = Action;
exports.SCHEMA = new Map([[Signature, {
  kind: 'struct',
  fields: [['keyType', 'u8'], ['data', [64]]]
}], [SignedTransaction, {
  kind: 'struct',
  fields: [['transaction', Transaction], ['signature', Signature]]
}], [Transaction, {
  kind: 'struct',
  fields: [['signerId', 'string'], ['publicKey', key_pair_1.PublicKey], ['nonce', 'u64'], ['receiverId', 'string'], ['blockHash', [32]], ['actions', [Action]]]
}], [key_pair_1.PublicKey, {
  kind: 'struct',
  fields: [['keyType', 'u8'], ['data', [32]]]
}], [AccessKey, {
  kind: 'struct',
  fields: [['nonce', 'u64'], ['permission', AccessKeyPermission]]
}], [AccessKeyPermission, {
  kind: 'enum',
  field: 'enum',
  values: [['functionCall', FunctionCallPermission], ['fullAccess', FullAccessPermission]]
}], [FunctionCallPermission, {
  kind: 'struct',
  fields: [['allowance', {
    kind: 'option',
    type: 'u128'
  }], ['receiverId', 'string'], ['methodNames', ['string']]]
}], [FullAccessPermission, {
  kind: 'struct',
  fields: []
}], [Action, {
  kind: 'enum',
  field: 'enum',
  values: [['createAccount', CreateAccount], ['deployContract', DeployContract], ['functionCall', FunctionCall], ['transfer', Transfer], ['stake', Stake], ['addKey', AddKey], ['deleteKey', DeleteKey], ['deleteAccount', DeleteAccount]]
}], [CreateAccount, {
  kind: 'struct',
  fields: []
}], [DeployContract, {
  kind: 'struct',
  fields: [['code', ['u8']]]
}], [FunctionCall, {
  kind: 'struct',
  fields: [['methodName', 'string'], ['args', ['u8']], ['gas', 'u64'], ['deposit', 'u128']]
}], [Transfer, {
  kind: 'struct',
  fields: [['deposit', 'u128']]
}], [Stake, {
  kind: 'struct',
  fields: [['stake', 'u128'], ['publicKey', key_pair_1.PublicKey]]
}], [AddKey, {
  kind: 'struct',
  fields: [['publicKey', key_pair_1.PublicKey], ['accessKey', AccessKey]]
}], [DeleteKey, {
  kind: 'struct',
  fields: [['publicKey', key_pair_1.PublicKey]]
}], [DeleteAccount, {
  kind: 'struct',
  fields: [['beneficiaryId', 'string']]
}]]);

function createTransaction(signerId, publicKey, receiverId, nonce, actions, blockHash) {
  return new Transaction({
    signerId: signerId,
    publicKey: publicKey,
    nonce: nonce,
    receiverId: receiverId,
    actions: actions,
    blockHash: blockHash
  });
}

exports.createTransaction = createTransaction;
/**
 * Signs a given transaction from an account with given keys, applied to the given network
 * @param transaction The Transaction object to sign
 * @param signer The {Signer} object that assists with signing keys
 * @param accountId The human-readable NEAR account name
 * @param networkId The targeted network. (ex. default, betanet, etc…)
 */

function signTransactionObject(_x, _x2, _x3, _x4) {
  return _signTransactionObject.apply(this, arguments);
}

function _signTransactionObject() {
  _signTransactionObject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(transaction, signer, accountId, networkId) {
    var message, hash, signature, signedTx;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            message = borsh_1.serialize(exports.SCHEMA, transaction);
            hash = new Uint8Array(js_sha256_1["default"].sha256.array(message));
            _context.next = 4;
            return signer.signMessage(message, accountId, networkId);

          case 4:
            signature = _context.sent;
            signedTx = new SignedTransaction({
              transaction: transaction,
              signature: new Signature({
                keyType: transaction.publicKey.keyType,
                data: signature.signature
              })
            });
            return _context.abrupt("return", [hash, signedTx]);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _signTransactionObject.apply(this, arguments);
}

function signTransaction() {
  return _signTransaction.apply(this, arguments);
}

function _signTransaction() {
  _signTransaction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _len,
        args,
        _key,
        transaction,
        signer,
        accountId,
        networkId,
        receiverId,
        nonce,
        actions,
        blockHash,
        _signer,
        _accountId,
        _networkId,
        publicKey,
        _transaction,
        _args2 = arguments;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            for (_len = _args2.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = _args2[_key];
            }

            if (!(args[0].constructor === Transaction)) {
              _context2.next = 6;
              break;
            }

            transaction = args[0], signer = args[1], accountId = args[2], networkId = args[3];
            return _context2.abrupt("return", signTransactionObject(transaction, signer, accountId, networkId));

          case 6:
            receiverId = args[0], nonce = args[1], actions = args[2], blockHash = args[3], _signer = args[4], _accountId = args[5], _networkId = args[6];
            _context2.next = 9;
            return _signer.getPublicKey(_accountId, _networkId);

          case 9:
            publicKey = _context2.sent;
            _transaction = createTransaction(_accountId, publicKey, receiverId, nonce, actions, blockHash);
            return _context2.abrupt("return", signTransactionObject(_transaction, _signer, _accountId, _networkId));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _signTransaction.apply(this, arguments);
}

exports.signTransaction = signTransaction;
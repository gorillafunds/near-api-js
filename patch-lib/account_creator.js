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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UrlAccountCreator = exports.LocalAccountCreator = exports.AccountCreator = void 0;

var web_1 = require("./utils/web");
/**
 * Account creator provides an interface for implementations to actually create accounts
 */


var AccountCreator = /*#__PURE__*/_createClass(function AccountCreator() {
  _classCallCheck(this, AccountCreator);
});

exports.AccountCreator = AccountCreator;

var LocalAccountCreator = /*#__PURE__*/function (_AccountCreator) {
  _inherits(LocalAccountCreator, _AccountCreator);

  var _super = _createSuper(LocalAccountCreator);

  function LocalAccountCreator(masterAccount, initialBalance) {
    var _this;

    _classCallCheck(this, LocalAccountCreator);

    _this = _super.call(this);
    _this.masterAccount = masterAccount;
    _this.initialBalance = initialBalance;
    return _this;
  }
  /**
   * Creates an account using a masterAccount, meaning the new account is created from an existing account
   * @param newAccountId The name of the NEAR account to be created
   * @param publicKey The public key from the masterAccount used to create this account
   * @returns {Promise<void>}
   */


  _createClass(LocalAccountCreator, [{
    key: "createAccount",
    value: function () {
      var _createAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(newAccountId, publicKey) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.masterAccount.createAccount(newAccountId, publicKey, this.initialBalance);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createAccount(_x, _x2) {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
  }]);

  return LocalAccountCreator;
}(AccountCreator);

exports.LocalAccountCreator = LocalAccountCreator;

var UrlAccountCreator = /*#__PURE__*/function (_AccountCreator2) {
  _inherits(UrlAccountCreator, _AccountCreator2);

  var _super2 = _createSuper(UrlAccountCreator);

  function UrlAccountCreator(connection, helperUrl) {
    var _this2;

    _classCallCheck(this, UrlAccountCreator);

    _this2 = _super2.call(this);
    _this2.connection = connection;
    _this2.helperUrl = helperUrl;
    return _this2;
  }
  /**
   * Creates an account using a helperUrl
   * This is [hosted here](https://helper.nearprotocol.com) or set up locally with the [near-contract-helper](https://github.com/nearprotocol/near-contract-helper) repository
   * @param newAccountId The name of the NEAR account to be created
   * @param publicKey The public key from the masterAccount used to create this account
   * @returns {Promise<void>}
   */


  _createClass(UrlAccountCreator, [{
    key: "createAccount",
    value: function () {
      var _createAccount2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(newAccountId, publicKey) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return web_1.fetchJson("".concat(this.helperUrl, "/account"), JSON.stringify({
                  newAccountId: newAccountId,
                  newAccountPublicKey: publicKey.toString()
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createAccount(_x3, _x4) {
        return _createAccount2.apply(this, arguments);
      }

      return createAccount;
    }()
  }]);

  return UrlAccountCreator;
}(AccountCreator);

exports.UrlAccountCreator = UrlAccountCreator;
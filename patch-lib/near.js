"use strict";

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
exports.Near = void 0;
/**
 * This module contains the main class developers will use to interact with NEAR.
 * The {@link Near} class is used to interact with {@link Account | Accounts} through the {@link JsonRpcProvider.JsonRpcProvider | JsonRpcProvider}.
 * It is configured via the {@link NearConfig}.
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#account}
 *
 * @module near
 */

var bn_js_1 = __importDefault(require("bn.js"));

var account_1 = require("./account");

var connection_1 = require("./connection");

var contract_1 = require("./contract");

var account_creator_1 = require("./account_creator");
/**
 * This is the main class developers should use to interact with NEAR.
 * @example
 * ```js
 * const near = new Near(config);
 * ```
 */


var Near = /*#__PURE__*/function () {
  function Near(config) {
    _classCallCheck(this, Near);

    this.config = config;
    this.connection = connection_1.Connection.fromConfig({
      networkId: config.networkId,
      provider: {
        type: 'JsonRpcProvider',
        args: {
          url: config.nodeUrl,
          headers: config.headers
        }
      },
      signer: config.signer || {
        type: 'InMemorySigner',
        keyStore: config.keyStore || config.deps && config.deps.keyStore
      }
    });

    if (config.masterAccount) {
      // TODO: figure out better way of specifiying initial balance.
      // Hardcoded number below must be enough to pay the gas cost to dev-deploy with near-shell for multiple times
      var initialBalance = config.initialBalance ? new bn_js_1["default"](config.initialBalance) : new bn_js_1["default"]('500000000000000000000000000');
      this.accountCreator = new account_creator_1.LocalAccountCreator(new account_1.Account(this.connection, config.masterAccount), initialBalance);
    } else if (config.helperUrl) {
      this.accountCreator = new account_creator_1.UrlAccountCreator(this.connection, config.helperUrl);
    } else {
      this.accountCreator = null;
    }
  }
  /**
   * @param accountId near accountId used to interact with the network.
   */


  _createClass(Near, [{
    key: "account",
    value: function () {
      var _account = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(accountId) {
        var account;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                account = new account_1.Account(this.connection, accountId);
                return _context.abrupt("return", account);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function account(_x) {
        return _account.apply(this, arguments);
      }

      return account;
    }()
    /**
     * Create an account using the {@link AccountCreator}. Either:
     * * using a masterAccount with {@link LocalAccountCreator}
     * * using the helperUrl with {@link UrlAccountCreator}
     * @see {@link NearConfig.masterAccount} and {@link NearConfig.helperUrl}-
     *
     * @param accountId
     * @param publicKey
     */

  }, {
    key: "createAccount",
    value: function () {
      var _createAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(accountId, publicKey) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.accountCreator) {
                  _context2.next = 2;
                  break;
                }

                throw new Error('Must specify account creator, either via masterAccount or helperUrl configuration settings.');

              case 2:
                _context2.next = 4;
                return this.accountCreator.createAccount(accountId, publicKey);

              case 4:
                return _context2.abrupt("return", new account_1.Account(this.connection, accountId));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createAccount(_x2, _x3) {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
    /**
     * @deprecated Use {@link Contract} instead.
     * @param contractId
     * @param options
     */

  }, {
    key: "loadContract",
    value: function () {
      var _loadContract = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(contractId, options) {
        var account;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                account = new account_1.Account(this.connection, options.sender);
                return _context3.abrupt("return", new contract_1.Contract(account, contractId, options));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadContract(_x4, _x5) {
        return _loadContract.apply(this, arguments);
      }

      return loadContract;
    }()
    /**
     * @deprecated Use {@link Account.sendMoney} instead.
     * @param amount
     * @param originator
     * @param receiver
     */

  }, {
    key: "sendTokens",
    value: function () {
      var _sendTokens = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(amount, originator, receiver) {
        var account, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.warn('near.sendTokens is deprecated. Use `yourAccount.sendMoney` instead.');
                account = new account_1.Account(this.connection, originator);
                _context4.next = 4;
                return account.sendMoney(receiver, amount);

              case 4:
                result = _context4.sent;
                return _context4.abrupt("return", result.transaction_outcome.id);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function sendTokens(_x6, _x7, _x8) {
        return _sendTokens.apply(this, arguments);
      }

      return sendTokens;
    }()
  }]);

  return Near;
}();

exports.Near = Near;
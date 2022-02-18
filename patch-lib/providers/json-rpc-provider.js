"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsonRpcProvider = exports.ErrorContext = exports.TypedError = void 0;
/**
 * This module contains the {@link JsonRpcProvider} client class
 * which can be used to interact with the NEAR RPC API.
 * @see {@link providers/provider} for a list of request and response types
 */

var depd_1 = __importDefault(require("depd"));

var provider_1 = require("./provider");

var web_1 = require("../utils/web");

var errors_1 = require("../utils/errors");

Object.defineProperty(exports, "TypedError", {
  enumerable: true,
  get: function get() {
    return errors_1.TypedError;
  }
});
Object.defineProperty(exports, "ErrorContext", {
  enumerable: true,
  get: function get() {
    return errors_1.ErrorContext;
  }
});

var borsh_1 = require("borsh");

var exponential_backoff_1 = __importDefault(require("../utils/exponential-backoff"));

var rpc_errors_1 = require("../utils/rpc_errors"); // Default number of retries before giving up on a request.


var REQUEST_RETRY_NUMBER = 12; // Default wait until next retry in millis.

var REQUEST_RETRY_WAIT = 500; // Exponential back off for waiting to retry.

var REQUEST_RETRY_WAIT_BACKOFF = 1.5; /// Keep ids unique across all connections.

var _nextId = 123;
/**
 * Client class to interact with the NEAR RPC API.
 * @see {@link https://github.com/near/nearcore/tree/master/chain/jsonrpc}
 */

var JsonRpcProvider = /*#__PURE__*/function (_provider_1$Provider) {
  _inherits(JsonRpcProvider, _provider_1$Provider);

  var _super = _createSuper(JsonRpcProvider);

  /**
   * @param connectionInfoOrUrl ConnectionInfo or RPC API endpoint URL (deprecated)
   */
  function JsonRpcProvider(connectionInfoOrUrl) {
    var _this;

    _classCallCheck(this, JsonRpcProvider);

    _this = _super.call(this);

    if (connectionInfoOrUrl != null && _typeof(connectionInfoOrUrl) == 'object') {
      _this.connection = connectionInfoOrUrl;
    } else {
      var deprecate = depd_1["default"]('JsonRpcProvider(url?: string)');
      deprecate('use `JsonRpcProvider(connectionInfo: ConnectionInfo)` instead');
      _this.connection = {
        url: connectionInfoOrUrl
      };
    }

    return _this;
  }
  /**
   * Gets the RPC's status
   * @see {@link https://docs.near.org/docs/develop/front-end/rpc#general-validator-status}
   */


  _createClass(JsonRpcProvider, [{
    key: "status",
    value: function () {
      var _status = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.sendJsonRpc('status', []));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function status() {
        return _status.apply(this, arguments);
      }

      return status;
    }()
    /**
     * Sends a signed transaction to the RPC and waits until transaction is fully complete
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#send-transaction-await}
     *
     * @param signedTransaction The signed transaction being sent
     */

  }, {
    key: "sendTransaction",
    value: function () {
      var _sendTransaction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(signedTransaction) {
        var bytes;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                bytes = signedTransaction.encode();
                return _context2.abrupt("return", this.sendJsonRpc('broadcast_tx_commit', [Buffer.from(bytes).toString('base64')]));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function sendTransaction(_x) {
        return _sendTransaction.apply(this, arguments);
      }

      return sendTransaction;
    }()
    /**
     * Sends a signed transaction to the RPC and immediately returns transaction hash
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#send-transaction-async)
     * @param signedTransaction The signed transaction being sent
     * @returns {Promise<FinalExecutionOutcome>}
     */

  }, {
    key: "sendTransactionAsync",
    value: function () {
      var _sendTransactionAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(signedTransaction) {
        var bytes;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                bytes = signedTransaction.encode();
                return _context3.abrupt("return", this.sendJsonRpc('broadcast_tx_async', [Buffer.from(bytes).toString('base64')]));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function sendTransactionAsync(_x2) {
        return _sendTransactionAsync.apply(this, arguments);
      }

      return sendTransactionAsync;
    }()
    /**
     * Gets a transaction's status from the RPC
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#transaction-status}
     *
     * @param txHash A transaction hash as either a Uint8Array or a base58 encoded string
     * @param accountId The NEAR account that signed the transaction
     */

  }, {
    key: "txStatus",
    value: function () {
      var _txStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(txHash, accountId) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(typeof txHash === 'string')) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt("return", this.txStatusString(txHash, accountId));

              case 4:
                return _context4.abrupt("return", this.txStatusUint8Array(txHash, accountId));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function txStatus(_x3, _x4) {
        return _txStatus.apply(this, arguments);
      }

      return txStatus;
    }()
  }, {
    key: "txStatusUint8Array",
    value: function () {
      var _txStatusUint8Array = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(txHash, accountId) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.sendJsonRpc('tx', [borsh_1.baseEncode(txHash), accountId]));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function txStatusUint8Array(_x5, _x6) {
        return _txStatusUint8Array.apply(this, arguments);
      }

      return txStatusUint8Array;
    }()
  }, {
    key: "txStatusString",
    value: function () {
      var _txStatusString = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(txHash, accountId) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.sendJsonRpc('tx', [txHash, accountId]));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function txStatusString(_x7, _x8) {
        return _txStatusString.apply(this, arguments);
      }

      return txStatusString;
    }()
    /**
     * Gets a transaction's status from the RPC with receipts
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#transaction-status-with-receipts)
     * @param txHash The hash of the transaction
     * @param accountId The NEAR account that signed the transaction
     * @returns {Promise<FinalExecutionOutcome>}
     */

  }, {
    key: "txStatusReceipts",
    value: function () {
      var _txStatusReceipts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(txHash, accountId) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.sendJsonRpc('EXPERIMENTAL_tx_status', [borsh_1.baseEncode(txHash), accountId]));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function txStatusReceipts(_x9, _x10) {
        return _txStatusReceipts.apply(this, arguments);
      }

      return txStatusReceipts;
    }()
    /**
     * Query the RPC as [shown in the docs](https://docs.near.org/docs/develop/front-end/rpc#accounts--contracts)
     * Query the RPC by passing an {@link RpcQueryRequest}
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#accounts--contracts}
     *
     * @typeParam T the shape of the returned query response
     */

  }, {
    key: "query",
    value: function () {
      var _query = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var result,
            _len,
            args,
            _key,
            path,
            data,
            _args8 = arguments;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                for (_len = _args8.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args8[_key];
                }

                if (!(args.length === 1)) {
                  _context8.next = 7;
                  break;
                }

                _context8.next = 4;
                return this.sendJsonRpc('query', args[0]);

              case 4:
                result = _context8.sent;
                _context8.next = 11;
                break;

              case 7:
                path = args[0], data = args[1];
                _context8.next = 10;
                return this.sendJsonRpc('query', [path, data]);

              case 10:
                result = _context8.sent;

              case 11:
                if (!(result && result.error)) {
                  _context8.next = 13;
                  break;
                }

                throw new errors_1.TypedError("Querying ".concat(args, " failed: ").concat(result.error, ".\n").concat(JSON.stringify(result, null, 2)), rpc_errors_1.getErrorTypeFromErrorMessage(result.error));

              case 13:
                return _context8.abrupt("return", result);

              case 14:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function query() {
        return _query.apply(this, arguments);
      }

      return query;
    }()
    /**
     * Query for block info from the RPC
     * pass block_id OR finality as blockQuery, not both
     * @see {@link https://docs.near.org/docs/interaction/rpc#block}
     *
     * @param blockQuery {@link BlockReference} (passing a {@link BlockId} is deprecated)
     */

  }, {
    key: "block",
    value: function () {
      var _block = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(blockQuery) {
        var finality, blockId, deprecate;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                finality = blockQuery.finality;
                blockId = blockQuery.blockId;

                if (_typeof(blockQuery) !== 'object') {
                  deprecate = depd_1["default"]('JsonRpcProvider.block(blockId)');
                  deprecate('use `block({ blockId })` or `block({ finality })` instead');
                  blockId = blockQuery;
                }

                return _context9.abrupt("return", this.sendJsonRpc('block', {
                  block_id: blockId,
                  finality: finality
                }));

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function block(_x11) {
        return _block.apply(this, arguments);
      }

      return block;
    }()
    /**
     * Query changes in block from the RPC
     * pass block_id OR finality as blockQuery, not both
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#block-details)
     */

  }, {
    key: "blockChanges",
    value: function () {
      var _blockChanges = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(blockQuery) {
        var finality, blockId;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                finality = blockQuery.finality;
                blockId = blockQuery.blockId;
                return _context10.abrupt("return", this.sendJsonRpc('EXPERIMENTAL_changes_in_block', {
                  block_id: blockId,
                  finality: finality
                }));

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function blockChanges(_x12) {
        return _blockChanges.apply(this, arguments);
      }

      return blockChanges;
    }()
    /**
     * Queries for details about a specific chunk appending details of receipts and transactions to the same chunk data provided by a block
     * @see {@link https://docs.near.org/docs/interaction/rpc#chunk}
     *
     * @param chunkId Hash of a chunk ID or shard ID
     */

  }, {
    key: "chunk",
    value: function () {
      var _chunk = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(chunkId) {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", this.sendJsonRpc('chunk', [chunkId]));

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function chunk(_x13) {
        return _chunk.apply(this, arguments);
      }

      return chunk;
    }()
    /**
     * Query validators of the epoch defined by the given block id.
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#detailed-validator-status}
     *
     * @param blockId Block hash or height, or null for latest.
     */

  }, {
    key: "validators",
    value: function () {
      var _validators = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(blockId) {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", this.sendJsonRpc('validators', [blockId]));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function validators(_x14) {
        return _validators.apply(this, arguments);
      }

      return validators;
    }()
    /**
     * @deprecated
     * Gets the genesis config from RPC
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#genesis-config}
     */

  }, {
    key: "experimental_genesisConfig",
    value: function () {
      var _experimental_genesisConfig = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
        var deprecate;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                deprecate = depd_1["default"]('JsonRpcProvider.experimental_protocolConfig()');
                deprecate('use `experimental_protocolConfig({ sync_checkpoint: \'genesis\' })` to fetch the up-to-date or genesis protocol config explicitly');
                _context13.next = 4;
                return this.sendJsonRpc('EXPERIMENTAL_protocol_config', {
                  sync_checkpoint: 'genesis'
                });

              case 4:
                return _context13.abrupt("return", _context13.sent);

              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function experimental_genesisConfig() {
        return _experimental_genesisConfig.apply(this, arguments);
      }

      return experimental_genesisConfig;
    }()
    /**
     * Gets the protocol config at a block from RPC
     * @see {@link }
     *
     * @param blockReference specifies the block to get the protocol config for
     */

  }, {
    key: "experimental_protocolConfig",
    value: function () {
      var _experimental_protocolConfig = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(blockReference) {
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.sendJsonRpc('EXPERIMENTAL_protocol_config', blockReference);

              case 2:
                return _context14.abrupt("return", _context14.sent);

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function experimental_protocolConfig(_x15) {
        return _experimental_protocolConfig.apply(this, arguments);
      }

      return experimental_protocolConfig;
    }()
    /**
     * @deprecated Use {@link lightClientProof} instead
     */

  }, {
    key: "experimental_lightClientProof",
    value: function () {
      var _experimental_lightClientProof = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(request) {
        var deprecate;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                deprecate = depd_1["default"]('JsonRpcProvider.experimental_lightClientProof(request)');
                deprecate('use `lightClientProof` instead');
                _context15.next = 4;
                return this.lightClientProof(request);

              case 4:
                return _context15.abrupt("return", _context15.sent);

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function experimental_lightClientProof(_x16) {
        return _experimental_lightClientProof.apply(this, arguments);
      }

      return experimental_lightClientProof;
    }()
    /**
     * Gets a light client execution proof for verifying execution outcomes
     * @see {@link https://github.com/nearprotocol/NEPs/blob/master/specs/ChainSpec/LightClient.md#light-client-proof}
     */

  }, {
    key: "lightClientProof",
    value: function () {
      var _lightClientProof = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(request) {
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.sendJsonRpc('EXPERIMENTAL_light_client_proof', request);

              case 2:
                return _context16.abrupt("return", _context16.sent);

              case 3:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function lightClientProof(_x17) {
        return _lightClientProof.apply(this, arguments);
      }

      return lightClientProof;
    }()
    /**
     * Gets access key changes for a given array of accountIds
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#view-access-key-changes-all)
     * @returns {Promise<ChangeResult>}
     */

  }, {
    key: "accessKeyChanges",
    value: function () {
      var _accessKeyChanges = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(accountIdArray, blockQuery) {
        var finality, blockId;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                finality = blockQuery.finality;
                blockId = blockQuery.blockId;
                return _context17.abrupt("return", this.sendJsonRpc('EXPERIMENTAL_changes', {
                  changes_type: 'all_access_key_changes',
                  account_ids: accountIdArray,
                  block_id: blockId,
                  finality: finality
                }));

              case 3:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function accessKeyChanges(_x18, _x19) {
        return _accessKeyChanges.apply(this, arguments);
      }

      return accessKeyChanges;
    }()
    /**
     * Gets single access key changes for a given array of access keys
     * pass block_id OR finality as blockQuery, not both
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#view-access-key-changes-single)
     * @returns {Promise<ChangeResult>}
     */

  }, {
    key: "singleAccessKeyChanges",
    value: function () {
      var _singleAccessKeyChanges = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(accessKeyArray, blockQuery) {
        var finality, blockId;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                finality = blockQuery.finality;
                blockId = blockQuery.blockId;
                return _context18.abrupt("return", this.sendJsonRpc('EXPERIMENTAL_changes', {
                  changes_type: 'single_access_key_changes',
                  keys: accessKeyArray,
                  block_id: blockId,
                  finality: finality
                }));

              case 3:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function singleAccessKeyChanges(_x20, _x21) {
        return _singleAccessKeyChanges.apply(this, arguments);
      }

      return singleAccessKeyChanges;
    }()
    /**
     * Gets account changes for a given array of accountIds
     * pass block_id OR finality as blockQuery, not both
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#view-account-changes)
     * @returns {Promise<ChangeResult>}
     */

  }, {
    key: "accountChanges",
    value: function () {
      var _accountChanges = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(accountIdArray, blockQuery) {
        var finality, blockId;
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                finality = blockQuery.finality;
                blockId = blockQuery.blockId;
                return _context19.abrupt("return", this.sendJsonRpc('EXPERIMENTAL_changes', {
                  changes_type: 'account_changes',
                  account_ids: accountIdArray,
                  block_id: blockId,
                  finality: finality
                }));

              case 3:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function accountChanges(_x22, _x23) {
        return _accountChanges.apply(this, arguments);
      }

      return accountChanges;
    }()
    /**
     * Gets contract state changes for a given array of accountIds
     * pass block_id OR finality as blockQuery, not both
     * Note: If you pass a keyPrefix it must be base64 encoded
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#view-contract-state-changes)
     * @returns {Promise<ChangeResult>}
     */

  }, {
    key: "contractStateChanges",
    value: function () {
      var _contractStateChanges = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(accountIdArray, blockQuery) {
        var keyPrefix,
            finality,
            blockId,
            _args20 = arguments;
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                keyPrefix = _args20.length > 2 && _args20[2] !== undefined ? _args20[2] : '';
                finality = blockQuery.finality;
                blockId = blockQuery.blockId;
                return _context20.abrupt("return", this.sendJsonRpc('EXPERIMENTAL_changes', {
                  changes_type: 'data_changes',
                  account_ids: accountIdArray,
                  key_prefix_base64: keyPrefix,
                  block_id: blockId,
                  finality: finality
                }));

              case 4:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function contractStateChanges(_x24, _x25) {
        return _contractStateChanges.apply(this, arguments);
      }

      return contractStateChanges;
    }()
    /**
     * Gets contract code changes for a given array of accountIds
     * pass block_id OR finality as blockQuery, not both
     * Note: Change is returned in a base64 encoded WASM file
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#view-contract-code-changes)
     * @returns {Promise<ChangeResult>}
     */

  }, {
    key: "contractCodeChanges",
    value: function () {
      var _contractCodeChanges = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(accountIdArray, blockQuery) {
        var finality, blockId;
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                finality = blockQuery.finality;
                blockId = blockQuery.blockId;
                return _context21.abrupt("return", this.sendJsonRpc('EXPERIMENTAL_changes', {
                  changes_type: 'contract_code_changes',
                  account_ids: accountIdArray,
                  block_id: blockId,
                  finality: finality
                }));

              case 3:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function contractCodeChanges(_x26, _x27) {
        return _contractCodeChanges.apply(this, arguments);
      }

      return contractCodeChanges;
    }()
    /**
     * Returns gas price for a specific block_height or block_hash.
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#gas-price}
     *
     * @param blockId Block hash or height, or null for latest.
     */

  }, {
    key: "gasPrice",
    value: function () {
      var _gasPrice = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(blockId) {
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return this.sendJsonRpc('gas_price', [blockId]);

              case 2:
                return _context22.abrupt("return", _context22.sent);

              case 3:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function gasPrice(_x28) {
        return _gasPrice.apply(this, arguments);
      }

      return gasPrice;
    }()
    /**
     * Directly call the RPC specifying the method and params
     *
     * @param method RPC method
     * @param params Parameters to the method
     */

  }, {
    key: "sendJsonRpc",
    value: function () {
      var _sendJsonRpc = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(method, params) {
        var _this2 = this;

        var response, result;
        return regeneratorRuntime.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return exponential_backoff_1["default"](REQUEST_RETRY_WAIT, REQUEST_RETRY_NUMBER, REQUEST_RETRY_WAIT_BACKOFF, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
                  var request, _response, errorMessage;

                  return regeneratorRuntime.wrap(function _callee23$(_context23) {
                    while (1) {
                      switch (_context23.prev = _context23.next) {
                        case 0:
                          _context23.prev = 0;
                          request = {
                            method: method,
                            params: params,
                            id: _nextId++,
                            jsonrpc: '2.0'
                          };
                          _context23.next = 4;
                          return web_1.fetchJson(_this2.connection, JSON.stringify(request));

                        case 4:
                          _response = _context23.sent;

                          if (!_response.error) {
                            _context23.next = 16;
                            break;
                          }

                          if (!(_typeof(_response.error.data) === 'object')) {
                            _context23.next = 12;
                            break;
                          }

                          if (!(typeof _response.error.data.error_message === 'string' && typeof _response.error.data.error_type === 'string')) {
                            _context23.next = 9;
                            break;
                          }

                          throw new errors_1.TypedError(_response.error.data.error_message, _response.error.data.error_type);

                        case 9:
                          throw rpc_errors_1.parseRpcError(_response.error.data);

                        case 12:
                          errorMessage = "[".concat(_response.error.code, "] ").concat(_response.error.message, ": ").concat(_response.error.data); // NOTE: All this hackery is happening because structured errors not implemented
                          // TODO: Fix when https://github.com/nearprotocol/nearcore/issues/1839 gets resolved

                          if (!(_response.error.data === 'Timeout' || errorMessage.includes('Timeout error') || errorMessage.includes('query has timed out'))) {
                            _context23.next = 15;
                            break;
                          }

                          throw new errors_1.TypedError(errorMessage, 'TimeoutError');

                        case 15:
                          throw new errors_1.TypedError(errorMessage, rpc_errors_1.getErrorTypeFromErrorMessage(_response.error.data));

                        case 16:
                          return _context23.abrupt("return", _response);

                        case 19:
                          _context23.prev = 19;
                          _context23.t0 = _context23["catch"](0);

                          if (!(_context23.t0.type === 'TimeoutError')) {
                            _context23.next = 24;
                            break;
                          }

                          if (!process.env['NEAR_NO_LOGS']) {
                            console.warn("Retrying request to ".concat(method, " as it has timed out"), params);
                          }

                          return _context23.abrupt("return", null);

                        case 24:
                          throw _context23.t0;

                        case 25:
                        case "end":
                          return _context23.stop();
                      }
                    }
                  }, _callee23, null, [[0, 19]]);
                })));

              case 2:
                response = _context24.sent;
                result = response.result; // From jsonrpc spec:
                // result
                //   This member is REQUIRED on success.
                //   This member MUST NOT exist if there was an error invoking the method.

                if (!(typeof result === 'undefined')) {
                  _context24.next = 6;
                  break;
                }

                throw new errors_1.TypedError("Exceeded ".concat(REQUEST_RETRY_NUMBER, " attempts for request to ").concat(method, "."), 'RetriesExceeded');

              case 6:
                return _context24.abrupt("return", result);

              case 7:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24);
      }));

      function sendJsonRpc(_x29, _x30) {
        return _sendJsonRpc.apply(this, arguments);
      }

      return sendJsonRpc;
    }()
  }]);

  return JsonRpcProvider;
}(provider_1.Provider);

exports.JsonRpcProvider = JsonRpcProvider;
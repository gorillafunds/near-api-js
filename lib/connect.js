"use strict";

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
exports.connect = void 0;
/**
 * Connect to NEAR using the provided configuration.
 *
 * {@link ConnectConfig.networkId} and {@link ConnectConfig.nodeUrl} are required.
 *
 * To sign transactions you can also pass:
 * 1. {@link ConnectConfig.keyStore}
 * 2. {@link ConnectConfig.keyPath}
 *
 * If all three are passed they are prioritize in that order.
 *
 * @see {@link ConnectConfig}
 * @example
 * ```js
 * async function initNear() {
 *   const near = await connect({
 *      networkId: 'testnet',
 *      nodeUrl: 'https://rpc.testnet.near.org'
 *   })
 * }
 * ```
 * @module connect
 */

var unencrypted_file_system_keystore_1 = require("./key_stores/unencrypted_file_system_keystore");

var key_stores_1 = require("./key_stores");

var near_1 = require("./near");

var setup_node_fetch_1 = __importDefault(require("./utils/setup-node-fetch"));

var utils_1 = require("./utils");

global.fetch = setup_node_fetch_1.default;
/**
 * Initialize connection to Near network.
 */

function connect(_x) {
  return _connect.apply(this, arguments);
}

function _connect() {
  _connect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(config) {
    var accountKeyFile, keyPair, keyPathStore;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(config.keyPath && (config.keyStore || config.deps && config.deps.keyStore))) {
              _context.next = 18;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return unencrypted_file_system_keystore_1.readKeyFile(config.keyPath);

          case 4:
            accountKeyFile = _context.sent;

            if (!accountKeyFile[0]) {
              _context.next = 13;
              break;
            }

            // TODO: Only load key if network ID matches
            keyPair = accountKeyFile[1];
            keyPathStore = new key_stores_1.InMemoryKeyStore();
            _context.next = 10;
            return keyPathStore.setKey(config.networkId, accountKeyFile[0], keyPair);

          case 10:
            if (!config.masterAccount) {
              config.masterAccount = accountKeyFile[0];
            }

            config.keyStore = new key_stores_1.MergeKeyStore([keyPathStore, config.keyStore || config.deps.keyStore], {
              writeKeyStoreIndex: 1
            });

            if (!process.env["NEAR_NO_LOGS"]) {
              console.log("Loaded master account ".concat(accountKeyFile[0], " key from ").concat(config.keyPath, " with public key = ").concat(keyPair.getPublicKey()));
            }

          case 13:
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](1);
            utils_1.logWarning("Failed to load master account key from ".concat(config.keyPath, ": ").concat(_context.t0));

          case 18:
            return _context.abrupt("return", new near_1.Near(config));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 15]]);
  }));
  return _connect.apply(this, arguments);
}

exports.connect = connect;
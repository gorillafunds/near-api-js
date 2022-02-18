"use strict";

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logWarning = exports.rpc_errors = exports.KeyPairEd25519 = exports.KeyPair = exports.PublicKey = exports.format = exports.enums = exports.web = exports.serialize = exports.key_pair = void 0;

var key_pair = __importStar(require("./key_pair"));

exports.key_pair = key_pair;

var serialize = __importStar(require("./serialize"));

exports.serialize = serialize;

var web = __importStar(require("./web"));

exports.web = web;

var enums = __importStar(require("./enums"));

exports.enums = enums;

var format = __importStar(require("./format"));

exports.format = format;

var rpc_errors = __importStar(require("./rpc_errors"));

exports.rpc_errors = rpc_errors;

var key_pair_1 = require("./key_pair");

Object.defineProperty(exports, "PublicKey", {
  enumerable: true,
  get: function get() {
    return key_pair_1.PublicKey;
  }
});
Object.defineProperty(exports, "KeyPair", {
  enumerable: true,
  get: function get() {
    return key_pair_1.KeyPair;
  }
});
Object.defineProperty(exports, "KeyPairEd25519", {
  enumerable: true,
  get: function get() {
    return key_pair_1.KeyPairEd25519;
  }
});

var errors_1 = require("./errors");

Object.defineProperty(exports, "logWarning", {
  enumerable: true,
  get: function get() {
    return errors_1.logWarning;
  }
});
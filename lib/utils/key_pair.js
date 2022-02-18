"use strict";

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
exports.KeyPairEd25519 = exports.KeyPair = exports.PublicKey = exports.KeyType = void 0;

var tweetnacl_1 = __importDefault(require("tweetnacl"));

var serialize_1 = require("./serialize");

var enums_1 = require("./enums");
/** All supported key types */


var KeyType;

(function (KeyType) {
  KeyType[KeyType["ED25519"] = 0] = "ED25519";
})(KeyType = exports.KeyType || (exports.KeyType = {}));

function key_type_to_str(keyType) {
  switch (keyType) {
    case KeyType.ED25519:
      return 'ed25519';

    default:
      throw new Error("Unknown key type ".concat(keyType));
  }
}

function str_to_key_type(keyType) {
  switch (keyType.toLowerCase()) {
    case 'ed25519':
      return KeyType.ED25519;

    default:
      throw new Error("Unknown key type ".concat(keyType));
  }
}
/**
 * PublicKey representation that has type and bytes of the key.
 */


var PublicKey = /*#__PURE__*/function (_enums_1$Assignable) {
  _inherits(PublicKey, _enums_1$Assignable);

  var _super = _createSuper(PublicKey);

  function PublicKey() {
    _classCallCheck(this, PublicKey);

    return _super.apply(this, arguments);
  }

  _createClass(PublicKey, [{
    key: "toString",
    value: function toString() {
      return "".concat(key_type_to_str(this.keyType), ":").concat(serialize_1.base_encode(this.data));
    }
  }, {
    key: "verify",
    value: function verify(message, signature) {
      switch (this.keyType) {
        case KeyType.ED25519:
          return tweetnacl_1.default.sign.detached.verify(message, signature, this.data);

        default:
          throw new Error("Unknown key type ".concat(this.keyType));
      }
    }
  }], [{
    key: "from",
    value: function from(value) {
      if (typeof value === 'string') {
        return PublicKey.fromString(value);
      }

      return value;
    }
  }, {
    key: "fromString",
    value: function fromString(encodedKey) {
      var parts = encodedKey.split(':');

      if (parts.length === 1) {
        return new PublicKey({
          keyType: KeyType.ED25519,
          data: serialize_1.base_decode(parts[0])
        });
      } else if (parts.length === 2) {
        return new PublicKey({
          keyType: str_to_key_type(parts[0]),
          data: serialize_1.base_decode(parts[1])
        });
      } else {
        throw new Error('Invalid encoded key format, must be <curve>:<encoded key>');
      }
    }
  }]);

  return PublicKey;
}(enums_1.Assignable);

exports.PublicKey = PublicKey;

var KeyPair = /*#__PURE__*/function () {
  function KeyPair() {
    _classCallCheck(this, KeyPair);
  }

  _createClass(KeyPair, null, [{
    key: "fromRandom",
    value:
    /**
     * @param curve Name of elliptical curve, case-insensitive
     * @returns Random KeyPair based on the curve
     */
    function fromRandom(curve) {
      switch (curve.toUpperCase()) {
        case 'ED25519':
          return KeyPairEd25519.fromRandom();

        default:
          throw new Error("Unknown curve ".concat(curve));
      }
    }
  }, {
    key: "fromString",
    value: function fromString(encodedKey) {
      var parts = encodedKey.split(':');

      if (parts.length === 1) {
        return new KeyPairEd25519(parts[0]);
      } else if (parts.length === 2) {
        switch (parts[0].toUpperCase()) {
          case 'ED25519':
            return new KeyPairEd25519(parts[1]);

          default:
            throw new Error("Unknown curve: ".concat(parts[0]));
        }
      } else {
        throw new Error('Invalid encoded key format, must be <curve>:<encoded key>');
      }
    }
  }]);

  return KeyPair;
}();

exports.KeyPair = KeyPair;
/**
 * This class provides key pair functionality for Ed25519 curve:
 * generating key pairs, encoding key pairs, signing and verifying.
 */

var KeyPairEd25519 = /*#__PURE__*/function (_KeyPair) {
  _inherits(KeyPairEd25519, _KeyPair);

  var _super2 = _createSuper(KeyPairEd25519);

  /**
   * Construct an instance of key pair given a secret key.
   * It's generally assumed that these are encoded in base58.
   * @param {string} secretKey
   */
  function KeyPairEd25519(secretKey) {
    var _this;

    _classCallCheck(this, KeyPairEd25519);

    _this = _super2.call(this);
    var keyPair = tweetnacl_1.default.sign.keyPair.fromSecretKey(serialize_1.base_decode(secretKey));
    _this.publicKey = new PublicKey({
      keyType: KeyType.ED25519,
      data: keyPair.publicKey
    });
    _this.secretKey = secretKey;
    return _this;
  }
  /**
   * Generate a new random keypair.
   * @example
   * const keyRandom = KeyPair.fromRandom();
   * keyRandom.publicKey
   * // returns [PUBLIC_KEY]
   *
   * keyRandom.secretKey
   * // returns [SECRET_KEY]
   */


  _createClass(KeyPairEd25519, [{
    key: "sign",
    value: function sign(message) {
      var signature = tweetnacl_1.default.sign.detached(message, serialize_1.base_decode(this.secretKey));
      return {
        signature: signature,
        publicKey: this.publicKey
      };
    }
  }, {
    key: "verify",
    value: function verify(message, signature) {
      return this.publicKey.verify(message, signature);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "ed25519:".concat(this.secretKey);
    }
  }, {
    key: "getPublicKey",
    value: function getPublicKey() {
      return this.publicKey;
    }
  }], [{
    key: "fromRandom",
    value: function fromRandom() {
      var newKeyPair = tweetnacl_1.default.sign.keyPair();
      return new KeyPairEd25519(serialize_1.base_encode(newKeyPair.secretKey));
    }
  }]);

  return KeyPairEd25519;
}(KeyPair);

exports.KeyPairEd25519 = KeyPairEd25519;
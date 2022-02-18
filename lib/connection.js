"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Connection = void 0;

var providers_1 = require("./providers");

var signer_1 = require("./signer");
/**
 * @param config Contains connection info details
 * @returns {Provider}
 */


function getProvider(config) {
  switch (config.type) {
    case undefined:
      return config;

    case 'JsonRpcProvider':
      return new providers_1.JsonRpcProvider(_objectSpread({}, config.args));

    default:
      throw new Error("Unknown provider type ".concat(config.type));
  }
}
/**
 * @param config Contains connection info details
 * @returns {Signer}
 */


function getSigner(config) {
  switch (config.type) {
    case undefined:
      return config;

    case 'InMemorySigner':
      {
        return new signer_1.InMemorySigner(config.keyStore);
      }

    default:
      throw new Error("Unknown signer type ".concat(config.type));
  }
}
/**
 * Connects an account to a given network via a given provider
 */


var Connection = /*#__PURE__*/function () {
  function Connection(networkId, provider, signer) {
    _classCallCheck(this, Connection);

    this.networkId = networkId;
    this.provider = provider;
    this.signer = signer;
  }
  /**
   * @param config Contains connection info details
   */


  _createClass(Connection, null, [{
    key: "fromConfig",
    value: function fromConfig(config) {
      var provider = getProvider(config.provider);
      var signer = getSigner(config.signer);
      return new Connection(config.networkId, provider, signer);
    }
  }]);

  return Connection;
}();

exports.Connection = Connection;
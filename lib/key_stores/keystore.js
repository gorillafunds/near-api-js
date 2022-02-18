"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyStore = void 0;
/**
 * KeyStores are passed to {@link Near} via {@link NearConfig}
 * and are used by the {@link InMemorySigner} to sign transactions.
 *
 * @example {@link connect}
 */

var KeyStore = /*#__PURE__*/_createClass(function KeyStore() {
  _classCallCheck(this, KeyStore);
});

exports.KeyStore = KeyStore;
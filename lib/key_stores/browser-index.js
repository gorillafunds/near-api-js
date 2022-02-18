"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MergeKeyStore = exports.BrowserLocalStorageKeyStore = exports.InMemoryKeyStore = exports.KeyStore = void 0;
/** @hidden @module */

var keystore_1 = require("./keystore");

Object.defineProperty(exports, "KeyStore", {
  enumerable: true,
  get: function get() {
    return keystore_1.KeyStore;
  }
});

var in_memory_key_store_1 = require("./in_memory_key_store");

Object.defineProperty(exports, "InMemoryKeyStore", {
  enumerable: true,
  get: function get() {
    return in_memory_key_store_1.InMemoryKeyStore;
  }
});

var browser_local_storage_key_store_1 = require("./browser_local_storage_key_store");

Object.defineProperty(exports, "BrowserLocalStorageKeyStore", {
  enumerable: true,
  get: function get() {
    return browser_local_storage_key_store_1.BrowserLocalStorageKeyStore;
  }
});

var merge_key_store_1 = require("./merge_key_store");

Object.defineProperty(exports, "MergeKeyStore", {
  enumerable: true,
  get: function get() {
    return merge_key_store_1.MergeKeyStore;
  }
});
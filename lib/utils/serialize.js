"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var borsh_1 = require("borsh");

Object.defineProperty(exports, "base_encode", {
  enumerable: true,
  get: function get() {
    return borsh_1.baseEncode;
  }
});
Object.defineProperty(exports, "base_decode", {
  enumerable: true,
  get: function get() {
    return borsh_1.baseDecode;
  }
});
Object.defineProperty(exports, "serialize", {
  enumerable: true,
  get: function get() {
    return borsh_1.serialize;
  }
});
Object.defineProperty(exports, "deserialize", {
  enumerable: true,
  get: function get() {
    return borsh_1.deserialize;
  }
});
Object.defineProperty(exports, "BorshError", {
  enumerable: true,
  get: function get() {
    return borsh_1.BorshError;
  }
});
Object.defineProperty(exports, "BinaryWriter", {
  enumerable: true,
  get: function get() {
    return borsh_1.BinaryWriter;
  }
});
Object.defineProperty(exports, "BinaryReader", {
  enumerable: true,
  get: function get() {
    return borsh_1.BinaryReader;
  }
});
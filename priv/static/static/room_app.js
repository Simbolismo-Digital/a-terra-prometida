(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/@membraneframework/membrane-webrtc-js/dist/mediaEvent.js
  var require_mediaEvent = __commonJS({
    "node_modules/@membraneframework/membrane-webrtc-js/dist/mediaEvent.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.generateCustomEvent = exports.generateMediaEvent = exports.deserializeMediaEvent = exports.serializeMediaEvent = void 0;
      function serializeMediaEvent(mediaEvent) {
        return JSON.stringify(mediaEvent);
      }
      exports.serializeMediaEvent = serializeMediaEvent;
      function deserializeMediaEvent(serializedMediaEvent) {
        return JSON.parse(serializedMediaEvent);
      }
      exports.deserializeMediaEvent = deserializeMediaEvent;
      function generateMediaEvent(type, data) {
        var event = { type };
        if (data) {
          event = __spreadProps(__spreadValues({}, event), { data });
        }
        return event;
      }
      exports.generateMediaEvent = generateMediaEvent;
      function generateCustomEvent(data) {
        return generateMediaEvent("custom", data);
      }
      exports.generateCustomEvent = generateCustomEvent;
    }
  });

  // node_modules/uuid/dist/esm-browser/rng.js
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }
  var getRandomValues, rnds8;
  var init_rng = __esm({
    "node_modules/uuid/dist/esm-browser/rng.js"() {
      rnds8 = new Uint8Array(16);
    }
  });

  // node_modules/uuid/dist/esm-browser/regex.js
  var regex_default;
  var init_regex = __esm({
    "node_modules/uuid/dist/esm-browser/regex.js"() {
      regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    }
  });

  // node_modules/uuid/dist/esm-browser/validate.js
  function validate(uuid) {
    return typeof uuid === "string" && regex_default.test(uuid);
  }
  var validate_default;
  var init_validate = __esm({
    "node_modules/uuid/dist/esm-browser/validate.js"() {
      init_regex();
      validate_default = validate;
    }
  });

  // node_modules/uuid/dist/esm-browser/stringify.js
  function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
    if (!validate_default(uuid)) {
      throw TypeError("Stringified UUID is invalid");
    }
    return uuid;
  }
  var byteToHex, stringify_default;
  var init_stringify = __esm({
    "node_modules/uuid/dist/esm-browser/stringify.js"() {
      init_validate();
      byteToHex = [];
      for (var i = 0; i < 256; ++i) {
        byteToHex.push((i + 256).toString(16).substr(1));
      }
      stringify_default = stringify;
    }
  });

  // node_modules/uuid/dist/esm-browser/v1.js
  function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || new Array(16);
    options = options || {};
    var node = options.node || _nodeId;
    var clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
    if (node == null || clockseq == null) {
      var seedBytes = options.random || (options.rng || rng)();
      if (node == null) {
        node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
      }
      if (clockseq == null) {
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
      }
    }
    var msecs = options.msecs !== void 0 ? options.msecs : Date.now();
    var nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
    var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
    if (dt < 0 && options.clockseq === void 0) {
      clockseq = clockseq + 1 & 16383;
    }
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
      nsecs = 0;
    }
    if (nsecs >= 1e4) {
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    }
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;
    msecs += 122192928e5;
    var tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
    b[i++] = tl >>> 24 & 255;
    b[i++] = tl >>> 16 & 255;
    b[i++] = tl >>> 8 & 255;
    b[i++] = tl & 255;
    var tmh = msecs / 4294967296 * 1e4 & 268435455;
    b[i++] = tmh >>> 8 & 255;
    b[i++] = tmh & 255;
    b[i++] = tmh >>> 24 & 15 | 16;
    b[i++] = tmh >>> 16 & 255;
    b[i++] = clockseq >>> 8 | 128;
    b[i++] = clockseq & 255;
    for (var n = 0; n < 6; ++n) {
      b[i + n] = node[n];
    }
    return buf || stringify_default(b);
  }
  var _nodeId, _clockseq, _lastMSecs, _lastNSecs, v1_default;
  var init_v1 = __esm({
    "node_modules/uuid/dist/esm-browser/v1.js"() {
      init_rng();
      init_stringify();
      _lastMSecs = 0;
      _lastNSecs = 0;
      v1_default = v1;
    }
  });

  // node_modules/uuid/dist/esm-browser/parse.js
  function parse(uuid) {
    if (!validate_default(uuid)) {
      throw TypeError("Invalid UUID");
    }
    var v;
    var arr = new Uint8Array(16);
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 255;
    arr[2] = v >>> 8 & 255;
    arr[3] = v & 255;
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 255;
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 255;
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 255;
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
    arr[11] = v / 4294967296 & 255;
    arr[12] = v >>> 24 & 255;
    arr[13] = v >>> 16 & 255;
    arr[14] = v >>> 8 & 255;
    arr[15] = v & 255;
    return arr;
  }
  var parse_default;
  var init_parse = __esm({
    "node_modules/uuid/dist/esm-browser/parse.js"() {
      init_validate();
      parse_default = parse;
    }
  });

  // node_modules/uuid/dist/esm-browser/v35.js
  function stringToBytes(str) {
    str = unescape(encodeURIComponent(str));
    var bytes = [];
    for (var i = 0; i < str.length; ++i) {
      bytes.push(str.charCodeAt(i));
    }
    return bytes;
  }
  function v35_default(name, version2, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
      if (typeof value === "string") {
        value = stringToBytes(value);
      }
      if (typeof namespace === "string") {
        namespace = parse_default(namespace);
      }
      if (namespace.length !== 16) {
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      }
      var bytes = new Uint8Array(16 + value.length);
      bytes.set(namespace);
      bytes.set(value, namespace.length);
      bytes = hashfunc(bytes);
      bytes[6] = bytes[6] & 15 | version2;
      bytes[8] = bytes[8] & 63 | 128;
      if (buf) {
        offset = offset || 0;
        for (var i = 0; i < 16; ++i) {
          buf[offset + i] = bytes[i];
        }
        return buf;
      }
      return stringify_default(bytes);
    }
    try {
      generateUUID.name = name;
    } catch (err) {
    }
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
  }
  var DNS, URL;
  var init_v35 = __esm({
    "node_modules/uuid/dist/esm-browser/v35.js"() {
      init_stringify();
      init_parse();
      DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
      URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    }
  });

  // node_modules/uuid/dist/esm-browser/md5.js
  function md5(bytes) {
    if (typeof bytes === "string") {
      var msg = unescape(encodeURIComponent(bytes));
      bytes = new Uint8Array(msg.length);
      for (var i = 0; i < msg.length; ++i) {
        bytes[i] = msg.charCodeAt(i);
      }
    }
    return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
  }
  function md5ToHexEncodedArray(input) {
    var output = [];
    var length32 = input.length * 32;
    var hexTab = "0123456789abcdef";
    for (var i = 0; i < length32; i += 8) {
      var x = input[i >> 5] >>> i % 32 & 255;
      var hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
      output.push(hex);
    }
    return output;
  }
  function getOutputLength(inputLength8) {
    return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
  }
  function wordsToMd5(x, len) {
    x[len >> 5] |= 128 << len % 32;
    x[getOutputLength(len) - 1] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;
      a = md5ff(a, b, c, d, x[i], 7, -680876936);
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5gg(b, c, d, a, x[i], 20, -373897302);
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5hh(d, a, b, c, x[i], 11, -358537222);
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5ii(a, b, c, d, x[i], 6, -198630844);
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safeAdd(a, olda);
      b = safeAdd(b, oldb);
      c = safeAdd(c, oldc);
      d = safeAdd(d, oldd);
    }
    return [a, b, c, d];
  }
  function bytesToWords(input) {
    if (input.length === 0) {
      return [];
    }
    var length8 = input.length * 8;
    var output = new Uint32Array(getOutputLength(length8));
    for (var i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input[i / 8] & 255) << i % 32;
    }
    return output;
  }
  function safeAdd(x, y) {
    var lsw = (x & 65535) + (y & 65535);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 65535;
  }
  function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }
  function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
  }
  function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
  }
  function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
  }
  function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
  }
  var md5_default;
  var init_md5 = __esm({
    "node_modules/uuid/dist/esm-browser/md5.js"() {
      md5_default = md5;
    }
  });

  // node_modules/uuid/dist/esm-browser/v3.js
  var v3, v3_default;
  var init_v3 = __esm({
    "node_modules/uuid/dist/esm-browser/v3.js"() {
      init_v35();
      init_md5();
      v3 = v35_default("v3", 48, md5_default);
      v3_default = v3;
    }
  });

  // node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
      return buf;
    }
    return stringify_default(rnds);
  }
  var v4_default;
  var init_v4 = __esm({
    "node_modules/uuid/dist/esm-browser/v4.js"() {
      init_rng();
      init_stringify();
      v4_default = v4;
    }
  });

  // node_modules/uuid/dist/esm-browser/sha1.js
  function f(s, x, y, z) {
    switch (s) {
      case 0:
        return x & y ^ ~x & z;
      case 1:
        return x ^ y ^ z;
      case 2:
        return x & y ^ x & z ^ y & z;
      case 3:
        return x ^ y ^ z;
    }
  }
  function ROTL(x, n) {
    return x << n | x >>> 32 - n;
  }
  function sha1(bytes) {
    var K = [1518500249, 1859775393, 2400959708, 3395469782];
    var H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof bytes === "string") {
      var msg = unescape(encodeURIComponent(bytes));
      bytes = [];
      for (var i = 0; i < msg.length; ++i) {
        bytes.push(msg.charCodeAt(i));
      }
    } else if (!Array.isArray(bytes)) {
      bytes = Array.prototype.slice.call(bytes);
    }
    bytes.push(128);
    var l = bytes.length / 4 + 2;
    var N = Math.ceil(l / 16);
    var M = new Array(N);
    for (var _i = 0; _i < N; ++_i) {
      var arr = new Uint32Array(16);
      for (var j = 0; j < 16; ++j) {
        arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
      }
      M[_i] = arr;
    }
    M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
    for (var _i2 = 0; _i2 < N; ++_i2) {
      var W = new Uint32Array(80);
      for (var t = 0; t < 16; ++t) {
        W[t] = M[_i2][t];
      }
      for (var _t = 16; _t < 80; ++_t) {
        W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
      }
      var a = H[0];
      var b = H[1];
      var c = H[2];
      var d = H[3];
      var e = H[4];
      for (var _t2 = 0; _t2 < 80; ++_t2) {
        var s = Math.floor(_t2 / 20);
        var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
        e = d;
        d = c;
        c = ROTL(b, 30) >>> 0;
        b = a;
        a = T;
      }
      H[0] = H[0] + a >>> 0;
      H[1] = H[1] + b >>> 0;
      H[2] = H[2] + c >>> 0;
      H[3] = H[3] + d >>> 0;
      H[4] = H[4] + e >>> 0;
    }
    return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
  }
  var sha1_default;
  var init_sha1 = __esm({
    "node_modules/uuid/dist/esm-browser/sha1.js"() {
      sha1_default = sha1;
    }
  });

  // node_modules/uuid/dist/esm-browser/v5.js
  var v5, v5_default;
  var init_v5 = __esm({
    "node_modules/uuid/dist/esm-browser/v5.js"() {
      init_v35();
      init_sha1();
      v5 = v35_default("v5", 80, sha1_default);
      v5_default = v5;
    }
  });

  // node_modules/uuid/dist/esm-browser/nil.js
  var nil_default;
  var init_nil = __esm({
    "node_modules/uuid/dist/esm-browser/nil.js"() {
      nil_default = "00000000-0000-0000-0000-000000000000";
    }
  });

  // node_modules/uuid/dist/esm-browser/version.js
  function version(uuid) {
    if (!validate_default(uuid)) {
      throw TypeError("Invalid UUID");
    }
    return parseInt(uuid.substr(14, 1), 16);
  }
  var version_default;
  var init_version = __esm({
    "node_modules/uuid/dist/esm-browser/version.js"() {
      init_validate();
      version_default = version;
    }
  });

  // node_modules/uuid/dist/esm-browser/index.js
  var esm_browser_exports = {};
  __export(esm_browser_exports, {
    NIL: () => nil_default,
    parse: () => parse_default,
    stringify: () => stringify_default,
    v1: () => v1_default,
    v3: () => v3_default,
    v4: () => v4_default,
    v5: () => v5_default,
    validate: () => validate_default,
    version: () => version_default
  });
  var init_esm_browser = __esm({
    "node_modules/uuid/dist/esm-browser/index.js"() {
      init_v1();
      init_v3();
      init_v4();
      init_v5();
      init_nil();
      init_version();
      init_validate();
      init_stringify();
      init_parse();
    }
  });

  // node_modules/@membraneframework/membrane-webrtc-js/dist/const.js
  var require_const = __commonJS({
    "node_modules/@membraneframework/membrane-webrtc-js/dist/const.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.simulcastTransceiverConfig = void 0;
      exports.simulcastTransceiverConfig = {
        direction: "sendonly",
        sendEncodings: [
          {
            rid: "l",
            active: false,
            scaleResolutionDownBy: 4
          },
          {
            rid: "m",
            active: false,
            scaleResolutionDownBy: 2
          },
          {
            rid: "h",
            active: false
          }
        ]
      };
    }
  });

  // node_modules/@membraneframework/membrane-webrtc-js/dist/membraneWebRTC.js
  var require_membraneWebRTC = __commonJS({
    "node_modules/@membraneframework/membrane-webrtc-js/dist/membraneWebRTC.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MembraneWebRTC = void 0;
      var mediaEvent_1 = require_mediaEvent();
      var uuid_1 = (init_esm_browser(), esm_browser_exports);
      var const_1 = require_const();
      var MembraneWebRTC2 = class {
        constructor(config) {
          this.localTracksWithStreams = [];
          this.trackIdToTrack = new Map();
          this.idToPeer = new Map();
          this.localPeer = { id: "", metadata: {}, trackIdToMetadata: new Map() };
          this.localTrackIdToTrack = new Map();
          this.midToTrackId = new Map();
          this.disabledTrackEncodings = new Map();
          this.rtcConfig = {
            iceServers: [],
            iceTransportPolicy: "relay"
          };
          this.join = (peerMetadata) => {
            var _a, _b;
            try {
              this.localPeer.metadata = peerMetadata;
              let mediaEvent = mediaEvent_1.generateMediaEvent("join", {
                metadata: peerMetadata
              });
              this.sendMediaEvent(mediaEvent);
            } catch (e) {
              (_b = (_a = this.callbacks).onConnectionError) === null || _b === void 0 ? void 0 : _b.call(_a, e);
              this.leave();
            }
          };
          this.receiveMediaEvent = (mediaEvent) => {
            var _a, _b, _c, _d;
            const deserializedMediaEvent = mediaEvent_1.deserializeMediaEvent(mediaEvent);
            switch (deserializedMediaEvent.type) {
              case "peerAccepted":
                this.localPeer.id = deserializedMediaEvent.data.id;
                (_b = (_a = this.callbacks).onJoinSuccess) === null || _b === void 0 ? void 0 : _b.call(_a, deserializedMediaEvent.data.id, deserializedMediaEvent.data.peersInRoom);
                let peers = deserializedMediaEvent.data.peersInRoom;
                peers.forEach((peer) => {
                  this.addPeer(peer);
                });
                break;
              case "peerDenied":
                (_d = (_c = this.callbacks).onJoinError) === null || _d === void 0 ? void 0 : _d.call(_c, deserializedMediaEvent.data);
                break;
              default:
                if (this.localPeer.id != null)
                  this.handleMediaEvent(deserializedMediaEvent);
            }
          };
          this.handleMediaEvent = (deserializedMediaEvent) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            let peer;
            let data;
            switch (deserializedMediaEvent.type) {
              case "offerData":
                const turnServers = deserializedMediaEvent.data.integratedTurnServers;
                this.setTurns(turnServers);
                const offerData = new Map(Object.entries(deserializedMediaEvent.data.tracksTypes));
                this.onOfferData(offerData);
                break;
              case "tracksAdded":
                data = deserializedMediaEvent.data;
                if (this.getPeerId() === data.peerId)
                  return;
                data.trackIdToMetadata = new Map(Object.entries(data.trackIdToMetadata));
                peer = this.idToPeer.get(data.peerId);
                const oldTrackIdToMetadata = peer.trackIdToMetadata;
                peer.trackIdToMetadata = new Map([...peer.trackIdToMetadata, ...data.trackIdToMetadata]);
                this.idToPeer.set(peer.id, peer);
                Array.from(peer.trackIdToMetadata.entries()).forEach(([trackId2, metadata]) => {
                  var _a2, _b2;
                  if (!oldTrackIdToMetadata.has(trackId2)) {
                    const ctx = {
                      stream: null,
                      track: null,
                      trackId: trackId2,
                      simulcastConfig: { enabled: false, active_encodings: [] },
                      metadata,
                      peer,
                      maxBandwidth: 0
                    };
                    this.trackIdToTrack.set(trackId2, ctx);
                    (_b2 = (_a2 = this.callbacks).onTrackAdded) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, ctx);
                  }
                });
                break;
              case "tracksRemoved":
                data = deserializedMediaEvent.data;
                const peerId = data.peerId;
                if (this.getPeerId() === data.peerId)
                  return;
                const trackIds = data.trackIds;
                trackIds.forEach((trackId2) => {
                  var _a2, _b2;
                  const trackContext2 = this.trackIdToTrack.get(trackId2);
                  (_b2 = (_a2 = this.callbacks).onTrackRemoved) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, trackContext2);
                  this.eraseTrack(trackId2, peerId);
                });
                break;
              case "sdpAnswer":
                this.midToTrackId = new Map(Object.entries(deserializedMediaEvent.data.midToTrackId));
                this.onAnswer(deserializedMediaEvent.data);
                break;
              case "candidate":
                this.onRemoteCandidate(deserializedMediaEvent.data);
                break;
              case "peerJoined":
                peer = deserializedMediaEvent.data.peer;
                if (peer.id === this.getPeerId())
                  return;
                this.addPeer(peer);
                (_b = (_a = this.callbacks).onPeerJoined) === null || _b === void 0 ? void 0 : _b.call(_a, peer);
                break;
              case "peerLeft":
                peer = this.idToPeer.get(deserializedMediaEvent.data.peerId);
                if (peer === void 0)
                  return;
                Array.from(peer.trackIdToMetadata.keys()).forEach((trackId2) => {
                  var _a2, _b2;
                  return (_b2 = (_a2 = this.callbacks).onTrackRemoved) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, this.trackIdToTrack.get(trackId2));
                });
                this.erasePeer(peer);
                (_d = (_c = this.callbacks).onPeerLeft) === null || _d === void 0 ? void 0 : _d.call(_c, peer);
                break;
              case "peerUpdated":
                if (this.getPeerId() === deserializedMediaEvent.data.peerId)
                  return;
                peer = this.idToPeer.get(deserializedMediaEvent.data.peerId);
                peer.metadata = deserializedMediaEvent.data.metadata;
                this.addPeer(peer);
                (_f = (_e = this.callbacks).onPeerUpdated) === null || _f === void 0 ? void 0 : _f.call(_e, peer);
                break;
              case "peerRemoved":
                if (this.getPeerId() !== deserializedMediaEvent.data.peerId) {
                  console.error("Received onRemoved media event, but it does not refer to the local peer");
                  return;
                }
                (_h = (_g = this.callbacks).onRemoved) === null || _h === void 0 ? void 0 : _h.call(_g, deserializedMediaEvent.data.reason);
                break;
              case "trackUpdated":
                if (this.getPeerId() === deserializedMediaEvent.data.peerId)
                  return;
                peer = this.idToPeer.get(deserializedMediaEvent.data.peerId);
                if (peer == null)
                  throw `Peer with id: ${deserializedMediaEvent.data.peerId} doesn't exist`;
                const trackId = deserializedMediaEvent.data.trackId;
                const trackMetadata = deserializedMediaEvent.data.metadata;
                peer.trackIdToMetadata.set(trackId, trackMetadata);
                const trackContext = this.trackIdToTrack.get(trackId);
                trackContext.metadata = trackMetadata;
                (_k = (_j = this.callbacks).onTrackUpdated) === null || _k === void 0 ? void 0 : _k.call(_j, trackContext);
                break;
              case "tracksPriority":
                const enabledTracks = deserializedMediaEvent.data.tracks.map((trackId2) => this.trackIdToTrack.get(trackId2));
                const disabledTracks = Array.from(this.trackIdToTrack.values()).filter((track) => !enabledTracks.includes(track));
                (_m = (_l = this.callbacks).onTracksPriorityChanged) === null || _m === void 0 ? void 0 : _m.call(_l, enabledTracks, disabledTracks);
              case "encodingSwitched":
                (_p = (_o = this.callbacks).onTrackEncodingChanged) === null || _p === void 0 ? void 0 : _p.call(_o, deserializedMediaEvent.data.peerId, deserializedMediaEvent.data.trackId, deserializedMediaEvent.data.encoding);
                break;
              case "custom":
                this.handleMediaEvent(deserializedMediaEvent.data);
                break;
              case "error":
                (_r = (_q = this.callbacks).onConnectionError) === null || _r === void 0 ? void 0 : _r.call(_q, deserializedMediaEvent.data.message);
                this.leave();
                break;
              default:
                console.warn("Received unknown media event: ", deserializedMediaEvent.type);
                break;
            }
          };
          this.addTrackToConnection = (trackContext) => {
            let transceiverConfig = this.createTransceiverConfig(trackContext);
            const track = trackContext.track;
            this.connection.addTransceiver(track, transceiverConfig);
          };
          this.updatePeerMetadata = (peerMetadata) => {
            let mediaEvent = mediaEvent_1.generateMediaEvent("updatePeerMetadata", {
              metadata: peerMetadata
            });
            this.sendMediaEvent(mediaEvent);
          };
          this.updateTrackMetadata = (trackId, trackMetadata) => {
            const trackContext = this.localTrackIdToTrack.get(trackId);
            trackContext.metadata = trackMetadata;
            this.localTrackIdToTrack.set(trackId, trackContext);
            this.localPeer.trackIdToMetadata.set(trackId, trackMetadata);
            let mediaEvent = mediaEvent_1.generateMediaEvent("updateTrackMetadata", {
              trackId,
              trackMetadata
            });
            this.sendMediaEvent(mediaEvent);
          };
          this.getMidToTrackId = () => {
            const localTrackMidToTrackId = {};
            if (!this.connection)
              return null;
            this.connection.getTransceivers().forEach((transceiver) => {
              var _a;
              const localTrackId = (_a = transceiver.sender.track) === null || _a === void 0 ? void 0 : _a.id;
              const mid = transceiver.mid;
              const trackIds = this.localPeer.trackIdToMetadata.keys();
              const tracks = Array.from(trackIds).map((track) => this.localTrackIdToTrack.get(track));
              if (localTrackId && mid) {
                const trackContext = tracks.find((trackContext2) => trackContext2.track.id === localTrackId);
                localTrackMidToTrackId[mid] = trackContext.trackId;
              }
            });
            return localTrackMidToTrackId;
          };
          this.leave = () => {
            let mediaEvent = mediaEvent_1.generateMediaEvent("leave");
            this.sendMediaEvent(mediaEvent);
            this.cleanUp();
          };
          this.cleanUp = () => {
            if (this.connection) {
              this.connection.onicecandidate = null;
              this.connection.ontrack = null;
            }
            this.localTracksWithStreams.forEach(({ track }) => track.stop());
            this.localTracksWithStreams = [];
            this.connection = void 0;
          };
          this.sendMediaEvent = (mediaEvent) => {
            this.callbacks.onSendMediaEvent(mediaEvent_1.serializeMediaEvent(mediaEvent));
          };
          this.onAnswer = (answer) => __async(this, null, function* () {
            this.connection.ontrack = this.onTrack();
            try {
              yield this.connection.setRemoteDescription(answer);
              this.disabledTrackEncodings.forEach((encodings, trackId) => {
                encodings.forEach((encoding) => this.disableTrackEncoding(trackId, encoding));
              });
            } catch (err) {
              console.log(err);
            }
          });
          this.addTransceiversIfNeeded = (serverTracks) => {
            var _a;
            const recvTransceivers = this.connection.getTransceivers().filter((elem) => elem.direction === "recvonly");
            let toAdd = [];
            const getNeededTransceiversTypes = (type) => {
              let typeNumber = serverTracks.get(type);
              typeNumber = typeNumber !== void 0 ? typeNumber : 0;
              const typeTransceiversNumber = recvTransceivers.filter((elem) => elem.receiver.track.kind === type).length;
              return Array(typeNumber - typeTransceiversNumber).fill(type);
            };
            const audio = getNeededTransceiversTypes("audio");
            const video = getNeededTransceiversTypes("video");
            toAdd = toAdd.concat(audio);
            toAdd = toAdd.concat(video);
            for (let kind of toAdd)
              (_a = this.connection) === null || _a === void 0 ? void 0 : _a.addTransceiver(kind, { direction: "recvonly" });
          };
          this.getTrackIdToMetadata = () => {
            const trackIdToMetadata = {};
            Array.from(this.localPeer.trackIdToMetadata.entries()).forEach(([trackId, metadata]) => {
              trackIdToMetadata[trackId] = metadata;
            });
            return trackIdToMetadata;
          };
          this.checkIfTrackBelongToPeer = (trackId, peer) => Array.from(peer.trackIdToMetadata.keys()).some((track) => trackId.startsWith(track));
          this.onOfferData = (offerData) => __async(this, null, function* () {
            if (!this.connection) {
              this.connection = new RTCPeerConnection(this.rtcConfig);
              this.connection.onicecandidate = this.onLocalCandidate();
              Array.from(this.localTrackIdToTrack.values()).forEach((trackContext) => this.addTrackToConnection(trackContext));
              this.connection.getTransceivers().forEach((transceiver) => transceiver.direction = "sendonly");
            } else {
              yield this.connection.restartIce();
            }
            this.addTransceiversIfNeeded(offerData);
            yield this.createAndSendOffer();
          });
          this.onRemoteCandidate = (candidate) => {
            try {
              const iceCandidate = new RTCIceCandidate(candidate);
              if (!this.connection) {
                throw new Error("Received new remote candidate but RTCConnection is undefined");
              }
              this.connection.addIceCandidate(iceCandidate);
            } catch (error) {
              console.error(error);
            }
          };
          this.onLocalCandidate = () => {
            return (event) => {
              if (event.candidate) {
                let mediaEvent = mediaEvent_1.generateCustomEvent({
                  type: "candidate",
                  data: {
                    candidate: event.candidate.candidate,
                    sdpMLineIndex: event.candidate.sdpMLineIndex
                  }
                });
                this.sendMediaEvent(mediaEvent);
              }
            };
          };
          this.onTrack = () => {
            return (event) => {
              var _a, _b;
              const [stream] = event.streams;
              const mid = event.transceiver.mid;
              const trackId = this.midToTrackId.get(mid);
              if (this.checkIfTrackBelongToPeer(trackId, this.localPeer))
                return;
              const peer = Array.from(this.idToPeer.values()).filter((peer2) => this.checkIfTrackBelongToPeer(trackId, peer2))[0];
              const metadata = peer.trackIdToMetadata.get(trackId);
              const trackContext = {
                stream,
                track: event.track,
                peer,
                trackId,
                metadata,
                simulcastConfig: { enabled: false, active_encodings: [] }
              };
              this.trackIdToTrack.set(trackId, trackContext);
              (_b = (_a = this.callbacks).onTrackReady) === null || _b === void 0 ? void 0 : _b.call(_a, trackContext);
            };
          };
          this.setTurns = (turnServers) => {
            turnServers.forEach((turnServer) => {
              var transport, uri;
              if (turnServer.transport == "tls") {
                transport = "tcp";
                uri = "turns";
              } else {
                transport = turnServer.transport;
                uri = "turn";
              }
              const rtcIceServer = {
                credential: turnServer.password,
                credentialType: "password",
                urls: uri.concat(":", turnServer.serverAddr, ":", turnServer.serverPort, "?transport=", transport),
                username: turnServer.username
              };
              this.rtcConfig.iceServers.push(rtcIceServer);
            });
          };
          this.addPeer = (peer) => {
            if (peer.hasOwnProperty("trackIdToMetadata"))
              peer.trackIdToMetadata = new Map(Object.entries(peer.trackIdToMetadata));
            else
              peer.trackIdToMetadata = new Map();
            this.idToPeer.set(peer.id, peer);
          };
          this.erasePeer = (peer) => {
            const tracksId = Array.from(peer.trackIdToMetadata.keys());
            tracksId.forEach((trackId) => this.trackIdToTrack.delete(trackId));
            Array.from(this.midToTrackId.entries()).forEach(([mid, trackId]) => {
              if (tracksId.includes(trackId))
                this.midToTrackId.delete(mid);
            });
            this.idToPeer.delete(peer.id);
          };
          this.eraseTrack = (trackId, peerId) => {
            this.trackIdToTrack.delete(trackId);
            const midToTrackId = Array.from(this.midToTrackId.entries());
            const [mid, _trackId] = midToTrackId.find(([mid2, mapTrackId]) => mapTrackId === trackId);
            this.midToTrackId.delete(mid);
            this.idToPeer.get(peerId).trackIdToMetadata.delete(trackId);
            this.disabledTrackEncodings.delete(trackId);
          };
          this.getPeerId = () => this.localPeer.id;
          const { callbacks } = config;
          this.callbacks = callbacks;
        }
        addTrack(track, stream, trackMetadata = new Map(), simulcastConfig = { enabled: false, active_encodings: [] }, maxBandwidth = 0) {
          if (this.getPeerId() === "")
            throw "Cannot add tracks before being accepted by the server";
          const trackId = this.getTrackId(uuid_1.v4());
          this.localTracksWithStreams.push({ track, stream });
          this.localPeer.trackIdToMetadata.set(trackId, trackMetadata);
          const trackContext = {
            track,
            stream,
            trackId,
            peer: this.localPeer,
            metadata: trackMetadata,
            simulcastConfig,
            maxBandwidth
          };
          this.localTrackIdToTrack.set(trackId, trackContext);
          if (this.connection) {
            this.addTrackToConnection(trackContext);
            this.connection.getTransceivers().forEach((transceiver) => transceiver.direction = transceiver.direction === "sendrecv" ? "sendonly" : transceiver.direction);
          }
          let mediaEvent = mediaEvent_1.generateCustomEvent({ type: "renegotiateTracks" });
          this.sendMediaEvent(mediaEvent);
          return trackId;
        }
        createTransceiverConfig(trackContext) {
          let transceiverConfig;
          if (trackContext.track.kind === "audio") {
            transceiverConfig = this.createAudioTransceiverConfig(trackContext);
          } else {
            transceiverConfig = this.createVideoTransceiverConfig(trackContext);
          }
          return transceiverConfig;
        }
        createAudioTransceiverConfig(_trackContext) {
          return { direction: "sendonly" };
        }
        createVideoTransceiverConfig(trackContext) {
          var _a;
          let transceiverConfig;
          if (trackContext.simulcastConfig.enabled) {
            transceiverConfig = const_1.simulcastTransceiverConfig;
            let trackActiveEncodings = trackContext.simulcastConfig.active_encodings;
            let disabledTrackEncodings = [];
            (_a = transceiverConfig.sendEncodings) === null || _a === void 0 ? void 0 : _a.forEach((encoding) => {
              if (trackActiveEncodings.includes(encoding.rid)) {
                encoding.active = true;
              } else {
                disabledTrackEncodings.push(encoding.rid);
              }
            });
            this.disabledTrackEncodings.set(trackContext.trackId, disabledTrackEncodings);
          } else {
            transceiverConfig = {
              direction: "sendonly",
              sendEncodings: [
                {
                  active: true
                }
              ]
            };
          }
          if (trackContext.maxBandwidth && transceiverConfig.sendEncodings)
            this.applyBandwidthLimitation(transceiverConfig.sendEncodings, trackContext.maxBandwidth);
          return transceiverConfig;
        }
        applyBandwidthLimitation(encodings, max_bandwidth) {
          if (typeof max_bandwidth === "number") {
            this.splitBandwidth(encodings, max_bandwidth * 1024);
          } else {
            encodings.filter((encoding) => encoding.rid).forEach((encoding) => {
              const limit = max_bandwidth.get(encoding.rid) || 0;
              if (limit > 0)
                encoding.maxBitrate = limit * 1024;
              else
                delete encoding.maxBitrate;
            });
          }
        }
        splitBandwidth(encodings, bandwidth) {
          if (bandwidth === 0) {
            encodings.forEach((encoding) => delete encoding.maxBitrate);
            return;
          }
          if (encodings.length == 0) {
            console.error("Attempted to limit bandwidth of the track that doesn't have any encodings");
            return;
          }
          const firstScaleDownBy = encodings[0].scaleResolutionDownBy || 1;
          const bitrate_parts = encodings.reduce((acc, value) => acc + (firstScaleDownBy / (value.scaleResolutionDownBy || 1)) ** 2, 0);
          const x = bandwidth / bitrate_parts;
          encodings.forEach((value) => value.maxBitrate = x * (firstScaleDownBy / (value.scaleResolutionDownBy || 1)) ** 2);
        }
        replaceTrack(trackId, newTrack, newTrackMetadata) {
          return __async(this, null, function* () {
            const trackContext = this.localTrackIdToTrack.get(trackId);
            const sender = this.findSender(trackContext.track.id);
            if (sender) {
              return sender.replaceTrack(newTrack).then(() => {
                const trackMetadata = newTrackMetadata || this.localTrackIdToTrack.get(trackId).metadata;
                trackContext.track = newTrack;
                this.updateTrackMetadata(trackId, trackMetadata);
                return true;
              }).catch(() => false);
            }
            return false;
          });
        }
        setTrackBandwidth(trackId, bandwidth) {
          const trackContext = this.localTrackIdToTrack.get(trackId);
          if (!trackContext) {
            return Promise.reject(`Track '${trackId}' doesn't exist`);
          }
          const sender = this.findSender(trackContext.track.id);
          const parameters = sender.getParameters();
          if (parameters.encodings.length === 0) {
            parameters.encodings = [{}];
          } else {
            this.applyBandwidthLimitation(parameters.encodings, bandwidth);
          }
          return sender.setParameters(parameters).then(() => true).catch(() => false);
        }
        setEncodingBandwidth(trackId, rid, bandwidth) {
          const trackContext = this.localTrackIdToTrack.get(trackId);
          if (!trackContext) {
            return Promise.reject(`Track '${trackId}' doesn't exist`);
          }
          const sender = this.findSender(trackContext.track.id);
          const parameters = sender.getParameters();
          const encoding = parameters.encodings.find((encoding2) => encoding2.rid === rid);
          if (!encoding) {
            return Promise.reject(`Encoding with rid '${rid}' doesn't exist`);
          } else if (bandwidth === 0) {
            delete encoding.maxBitrate;
          } else {
            encoding.maxBitrate = bandwidth * 1024;
          }
          return sender.setParameters(parameters).then(() => true).catch((_error) => false);
        }
        removeTrack(trackId) {
          const trackContext = this.localTrackIdToTrack.get(trackId);
          const sender = this.findSender(trackContext.track.id);
          this.connection.removeTrack(sender);
          let mediaEvent = mediaEvent_1.generateCustomEvent({ type: "renegotiateTracks" });
          this.sendMediaEvent(mediaEvent);
        }
        prioritizeTrack(trackId) {
          let mediaEvent = mediaEvent_1.generateCustomEvent({ type: "prioritizeTrack", data: { trackId } });
          this.sendMediaEvent(mediaEvent);
        }
        unprioritizeTrack(trackId) {
          let mediaEvent = mediaEvent_1.generateCustomEvent({ type: "unprioritizeTrack", data: { trackId } });
          this.sendMediaEvent(mediaEvent);
        }
        setPreferedVideoSizes(bigScreens, smallScreens, mediumScreens = 0, allSameSize = false) {
          let mediaEvent = mediaEvent_1.generateCustomEvent({
            type: "preferedVideoSizes",
            data: { bigScreens, mediumScreens, smallScreens, allSameSize }
          });
          this.sendMediaEvent(mediaEvent);
        }
        setTargetTrackEncoding(trackId, encoding) {
          let mediaEvent = mediaEvent_1.generateCustomEvent({
            type: "setTargetTrackVariant",
            data: {
              trackId,
              variant: encoding
            }
          });
          this.sendMediaEvent(mediaEvent);
        }
        enableTrackEncoding(trackId, encoding) {
          var _a, _b, _c;
          let track = (_a = this.localTrackIdToTrack.get(trackId)) === null || _a === void 0 ? void 0 : _a.track;
          let newDisabledTrackEncodings = (_b = this.disabledTrackEncodings.get(trackId)) === null || _b === void 0 ? void 0 : _b.filter((en) => en !== encoding);
          this.disabledTrackEncodings.set(trackId, newDisabledTrackEncodings);
          let sender = (_c = this.connection) === null || _c === void 0 ? void 0 : _c.getSenders().filter((sender2) => sender2.track === track)[0];
          let params = sender === null || sender === void 0 ? void 0 : sender.getParameters();
          params.encodings.filter((en) => en.rid == encoding)[0].active = true;
          sender === null || sender === void 0 ? void 0 : sender.setParameters(params);
        }
        disableTrackEncoding(trackId, encoding) {
          var _a, _b;
          let track = (_a = this.localTrackIdToTrack.get(trackId)) === null || _a === void 0 ? void 0 : _a.track;
          this.disabledTrackEncodings.get(trackId).push(encoding);
          let sender = (_b = this.connection) === null || _b === void 0 ? void 0 : _b.getSenders().filter((sender2) => sender2.track === track)[0];
          let params = sender === null || sender === void 0 ? void 0 : sender.getParameters();
          params.encodings.filter((en) => en.rid == encoding)[0].active = false;
          sender === null || sender === void 0 ? void 0 : sender.setParameters(params);
        }
        findSender(trackId) {
          return this.connection.getSenders().find((sender) => sender.track && sender.track.id === trackId);
        }
        getTrackId(uuid) {
          return `${this.getPeerId()}:${uuid}`;
        }
        createAndSendOffer() {
          return __async(this, null, function* () {
            if (!this.connection)
              return;
            try {
              const offer = yield this.connection.createOffer();
              yield this.connection.setLocalDescription(offer);
              let mediaEvent = mediaEvent_1.generateCustomEvent({
                type: "sdpOffer",
                data: {
                  sdpOffer: offer,
                  trackIdToTrackMetadata: this.getTrackIdToMetadata(),
                  midToTrackId: this.getMidToTrackId()
                }
              });
              this.sendMediaEvent(mediaEvent);
            } catch (error) {
              console.error(error);
            }
          });
        }
      };
      exports.MembraneWebRTC = MembraneWebRTC2;
    }
  });

  // node_modules/@membraneframework/membrane-webrtc-js/dist/index.js
  var require_dist = __commonJS({
    "node_modules/@membraneframework/membrane-webrtc-js/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MembraneWebRTC = void 0;
      var membraneWebRTC_1 = require_membraneWebRTC();
      Object.defineProperty(exports, "MembraneWebRTC", { enumerable: true, get: function() {
        return membraneWebRTC_1.MembraneWebRTC;
      } });
    }
  });

  // node_modules/strict-uri-encode/index.js
  var require_strict_uri_encode = __commonJS({
    "node_modules/strict-uri-encode/index.js"(exports, module) {
      "use strict";
      module.exports = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (x) => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);
    }
  });

  // node_modules/decode-uri-component/index.js
  var require_decode_uri_component = __commonJS({
    "node_modules/decode-uri-component/index.js"(exports, module) {
      "use strict";
      var token = "%[a-f0-9]{2}";
      var singleMatcher = new RegExp(token, "gi");
      var multiMatcher = new RegExp("(" + token + ")+", "gi");
      function decodeComponents(components, split) {
        try {
          return decodeURIComponent(components.join(""));
        } catch (err) {
        }
        if (components.length === 1) {
          return components;
        }
        split = split || 1;
        var left = components.slice(0, split);
        var right = components.slice(split);
        return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
      }
      function decode(input) {
        try {
          return decodeURIComponent(input);
        } catch (err) {
          var tokens = input.match(singleMatcher);
          for (var i = 1; i < tokens.length; i++) {
            input = decodeComponents(tokens, i).join("");
            tokens = input.match(singleMatcher);
          }
          return input;
        }
      }
      function customDecodeURIComponent(input) {
        var replaceMap = {
          "%FE%FF": "\uFFFD\uFFFD",
          "%FF%FE": "\uFFFD\uFFFD"
        };
        var match = multiMatcher.exec(input);
        while (match) {
          try {
            replaceMap[match[0]] = decodeURIComponent(match[0]);
          } catch (err) {
            var result = decode(match[0]);
            if (result !== match[0]) {
              replaceMap[match[0]] = result;
            }
          }
          match = multiMatcher.exec(input);
        }
        replaceMap["%C2"] = "\uFFFD";
        var entries = Object.keys(replaceMap);
        for (var i = 0; i < entries.length; i++) {
          var key = entries[i];
          input = input.replace(new RegExp(key, "g"), replaceMap[key]);
        }
        return input;
      }
      module.exports = function(encodedURI) {
        if (typeof encodedURI !== "string") {
          throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
        }
        try {
          encodedURI = encodedURI.replace(/\+/g, " ");
          return decodeURIComponent(encodedURI);
        } catch (err) {
          return customDecodeURIComponent(encodedURI);
        }
      };
    }
  });

  // node_modules/split-on-first/index.js
  var require_split_on_first = __commonJS({
    "node_modules/split-on-first/index.js"(exports, module) {
      "use strict";
      module.exports = (string, separator) => {
        if (!(typeof string === "string" && typeof separator === "string")) {
          throw new TypeError("Expected the arguments to be of type `string`");
        }
        if (separator === "") {
          return [string];
        }
        const separatorIndex = string.indexOf(separator);
        if (separatorIndex === -1) {
          return [string];
        }
        return [
          string.slice(0, separatorIndex),
          string.slice(separatorIndex + separator.length)
        ];
      };
    }
  });

  // node_modules/filter-obj/index.js
  var require_filter_obj = __commonJS({
    "node_modules/filter-obj/index.js"(exports, module) {
      "use strict";
      module.exports = function(obj, predicate) {
        var ret = {};
        var keys = Object.keys(obj);
        var isArr = Array.isArray(predicate);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var val = obj[key];
          if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
            ret[key] = val;
          }
        }
        return ret;
      };
    }
  });

  // node_modules/query-string/index.js
  var require_query_string = __commonJS({
    "node_modules/query-string/index.js"(exports) {
      "use strict";
      var strictUriEncode = require_strict_uri_encode();
      var decodeComponent = require_decode_uri_component();
      var splitOnFirst = require_split_on_first();
      var filterObject = require_filter_obj();
      var isNullOrUndefined = (value) => value === null || value === void 0;
      var encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
      function encoderForArrayFormat(options) {
        switch (options.arrayFormat) {
          case "index":
            return (key) => (result, value) => {
              const index = result.length;
              if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
                return result;
              }
              if (value === null) {
                return [...result, [encode(key, options), "[", index, "]"].join("")];
              }
              return [
                ...result,
                [encode(key, options), "[", encode(index, options), "]=", encode(value, options)].join("")
              ];
            };
          case "bracket":
            return (key) => (result, value) => {
              if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
                return result;
              }
              if (value === null) {
                return [...result, [encode(key, options), "[]"].join("")];
              }
              return [...result, [encode(key, options), "[]=", encode(value, options)].join("")];
            };
          case "colon-list-separator":
            return (key) => (result, value) => {
              if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
                return result;
              }
              if (value === null) {
                return [...result, [encode(key, options), ":list="].join("")];
              }
              return [...result, [encode(key, options), ":list=", encode(value, options)].join("")];
            };
          case "comma":
          case "separator":
          case "bracket-separator": {
            const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
            return (key) => (result, value) => {
              if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
                return result;
              }
              value = value === null ? "" : value;
              if (result.length === 0) {
                return [[encode(key, options), keyValueSep, encode(value, options)].join("")];
              }
              return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
            };
          }
          default:
            return (key) => (result, value) => {
              if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
                return result;
              }
              if (value === null) {
                return [...result, encode(key, options)];
              }
              return [...result, [encode(key, options), "=", encode(value, options)].join("")];
            };
        }
      }
      function parserForArrayFormat(options) {
        let result;
        switch (options.arrayFormat) {
          case "index":
            return (key, value, accumulator) => {
              result = /\[(\d*)\]$/.exec(key);
              key = key.replace(/\[\d*\]$/, "");
              if (!result) {
                accumulator[key] = value;
                return;
              }
              if (accumulator[key] === void 0) {
                accumulator[key] = {};
              }
              accumulator[key][result[1]] = value;
            };
          case "bracket":
            return (key, value, accumulator) => {
              result = /(\[\])$/.exec(key);
              key = key.replace(/\[\]$/, "");
              if (!result) {
                accumulator[key] = value;
                return;
              }
              if (accumulator[key] === void 0) {
                accumulator[key] = [value];
                return;
              }
              accumulator[key] = [].concat(accumulator[key], value);
            };
          case "colon-list-separator":
            return (key, value, accumulator) => {
              result = /(:list)$/.exec(key);
              key = key.replace(/:list$/, "");
              if (!result) {
                accumulator[key] = value;
                return;
              }
              if (accumulator[key] === void 0) {
                accumulator[key] = [value];
                return;
              }
              accumulator[key] = [].concat(accumulator[key], value);
            };
          case "comma":
          case "separator":
            return (key, value, accumulator) => {
              const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
              const isEncodedArray = typeof value === "string" && !isArray && decode(value, options).includes(options.arrayFormatSeparator);
              value = isEncodedArray ? decode(value, options) : value;
              const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode(item, options)) : value === null ? value : decode(value, options);
              accumulator[key] = newValue;
            };
          case "bracket-separator":
            return (key, value, accumulator) => {
              const isArray = /(\[\])$/.test(key);
              key = key.replace(/\[\]$/, "");
              if (!isArray) {
                accumulator[key] = value ? decode(value, options) : value;
                return;
              }
              const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item) => decode(item, options));
              if (accumulator[key] === void 0) {
                accumulator[key] = arrayValue;
                return;
              }
              accumulator[key] = [].concat(accumulator[key], arrayValue);
            };
          default:
            return (key, value, accumulator) => {
              if (accumulator[key] === void 0) {
                accumulator[key] = value;
                return;
              }
              accumulator[key] = [].concat(accumulator[key], value);
            };
        }
      }
      function validateArrayFormatSeparator(value) {
        if (typeof value !== "string" || value.length !== 1) {
          throw new TypeError("arrayFormatSeparator must be single character string");
        }
      }
      function encode(value, options) {
        if (options.encode) {
          return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
        }
        return value;
      }
      function decode(value, options) {
        if (options.decode) {
          return decodeComponent(value);
        }
        return value;
      }
      function keysSorter(input) {
        if (Array.isArray(input)) {
          return input.sort();
        }
        if (typeof input === "object") {
          return keysSorter(Object.keys(input)).sort((a, b) => Number(a) - Number(b)).map((key) => input[key]);
        }
        return input;
      }
      function removeHash(input) {
        const hashStart = input.indexOf("#");
        if (hashStart !== -1) {
          input = input.slice(0, hashStart);
        }
        return input;
      }
      function getHash(url) {
        let hash = "";
        const hashStart = url.indexOf("#");
        if (hashStart !== -1) {
          hash = url.slice(hashStart);
        }
        return hash;
      }
      function extract(input) {
        input = removeHash(input);
        const queryStart = input.indexOf("?");
        if (queryStart === -1) {
          return "";
        }
        return input.slice(queryStart + 1);
      }
      function parseValue(value, options) {
        if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
          value = Number(value);
        } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
          value = value.toLowerCase() === "true";
        }
        return value;
      }
      function parse3(query, options) {
        options = Object.assign({
          decode: true,
          sort: true,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
          parseNumbers: false,
          parseBooleans: false
        }, options);
        validateArrayFormatSeparator(options.arrayFormatSeparator);
        const formatter = parserForArrayFormat(options);
        const ret = Object.create(null);
        if (typeof query !== "string") {
          return ret;
        }
        query = query.trim().replace(/^[?#&]/, "");
        if (!query) {
          return ret;
        }
        for (const param of query.split("&")) {
          if (param === "") {
            continue;
          }
          let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, " ") : param, "=");
          value = value === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(options.arrayFormat) ? value : decode(value, options);
          formatter(decode(key, options), value, ret);
        }
        for (const key of Object.keys(ret)) {
          const value = ret[key];
          if (typeof value === "object" && value !== null) {
            for (const k of Object.keys(value)) {
              value[k] = parseValue(value[k], options);
            }
          } else {
            ret[key] = parseValue(value, options);
          }
        }
        if (options.sort === false) {
          return ret;
        }
        return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
          const value = ret[key];
          if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
            result[key] = keysSorter(value);
          } else {
            result[key] = value;
          }
          return result;
        }, Object.create(null));
      }
      exports.extract = extract;
      exports.parse = parse3;
      exports.stringify = (object, options) => {
        if (!object) {
          return "";
        }
        options = Object.assign({
          encode: true,
          strict: true,
          arrayFormat: "none",
          arrayFormatSeparator: ","
        }, options);
        validateArrayFormatSeparator(options.arrayFormatSeparator);
        const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
        const formatter = encoderForArrayFormat(options);
        const objectCopy = {};
        for (const key of Object.keys(object)) {
          if (!shouldFilter(key)) {
            objectCopy[key] = object[key];
          }
        }
        const keys = Object.keys(objectCopy);
        if (options.sort !== false) {
          keys.sort(options.sort);
        }
        return keys.map((key) => {
          const value = object[key];
          if (value === void 0) {
            return "";
          }
          if (value === null) {
            return encode(key, options);
          }
          if (Array.isArray(value)) {
            if (value.length === 0 && options.arrayFormat === "bracket-separator") {
              return encode(key, options) + "[]";
            }
            return value.reduce(formatter(key), []).join("&");
          }
          return encode(key, options) + "=" + encode(value, options);
        }).filter((x) => x.length > 0).join("&");
      };
      exports.parseUrl = (url, options) => {
        options = Object.assign({
          decode: true
        }, options);
        const [url_, hash] = splitOnFirst(url, "#");
        return Object.assign({
          url: url_.split("?")[0] || "",
          query: parse3(extract(url), options)
        }, options && options.parseFragmentIdentifier && hash ? { fragmentIdentifier: decode(hash, options) } : {});
      };
      exports.stringifyUrl = (object, options) => {
        options = Object.assign({
          encode: true,
          strict: true,
          [encodeFragmentIdentifier]: true
        }, options);
        const url = removeHash(object.url).split("?")[0] || "";
        const queryFromUrl = exports.extract(object.url);
        const parsedQueryFromUrl = exports.parse(queryFromUrl, { sort: false });
        const query = Object.assign(parsedQueryFromUrl, object.query);
        let queryString = exports.stringify(query, options);
        if (queryString) {
          queryString = `?${queryString}`;
        }
        let hash = getHash(object.url);
        if (object.fragmentIdentifier) {
          hash = `#${options[encodeFragmentIdentifier] ? encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
        }
        return `${url}${queryString}${hash}`;
      };
      exports.pick = (input, filter, options) => {
        options = Object.assign({
          parseFragmentIdentifier: true,
          [encodeFragmentIdentifier]: false
        }, options);
        const { url, query, fragmentIdentifier } = exports.parseUrl(input, options);
        return exports.stringifyUrl({
          url,
          query: filterObject(query, filter),
          fragmentIdentifier
        }, options);
      };
      exports.exclude = (input, filter, options) => {
        const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
        return exports.pick(input, exclusionFilter, options);
      };
    }
  });

  // src/consts.ts
  var MEDIA_CONSTRAINTS = {
    audio: true,
    video: { width: 640, height: 360, frameRate: 24 }
  };
  var LOCAL_PEER_ID = "local-peer";

  // src/room_ui.ts
  function getRoomId() {
    return document.getElementById("room").dataset.roomId;
  }
  function setupDisconnectButton(fun) {
    const disconnectButton = document.getElementById("disconnect");
    disconnectButton.onclick = fun;
  }
  function elementId(peerId, type) {
    return `${type}-${peerId}`;
  }
  function attachStream(stream, peerId) {
    const videoId = elementId(peerId, "video");
    const audioId = elementId(peerId, "audio");
    let video = document.getElementById(videoId);
    let audio = document.getElementById(audioId);
    video.srcObject = stream;
    audio.srcObject = stream;
  }
  function addVideoElement(peerId, label, isLocalVideo) {
    const videoId = elementId(peerId, "video");
    const audioId = elementId(peerId, "audio");
    let video = document.getElementById(videoId);
    let audio = document.getElementById(audioId);
    if (!video && !audio) {
      const values = setupVideoFeed(peerId, label, isLocalVideo);
      video = values.video;
      audio = values.audio;
    }
    video.id = videoId;
    video.autoplay = true;
    video.playsInline = true;
    video.muted = true;
    audio.id = audioId;
    audio.autoplay = true;
    if (isLocalVideo) {
      audio.muted = true;
    }
  }
  function setParticipantsList(participants) {
    const participantsNamesEl = document.getElementById("participants-list");
    participantsNamesEl.innerHTML = "<b>Participants</b>: " + participants.join(", ");
  }
  function resizeVideosGrid() {
    const grid = document.getElementById("videos-grid");
    const videos = grid.children.length;
    let videosPerRow;
    if (videos < 2) {
      videosPerRow = 1;
    } else if (videos < 5) {
      videosPerRow = 2;
    } else if (videos < 7) {
      videosPerRow = 3;
    } else {
      videosPerRow = 4;
    }
    let classesToRemove = [];
    for (const [index, value] of grid.classList.entries()) {
      if (value.includes("grid-cols")) {
        classesToRemove.push(value);
      }
    }
    classesToRemove.forEach((className) => grid.classList.remove(className));
    grid.classList.add("grid-cols-1");
    grid.classList.add(`md:grid-cols-${videosPerRow}`);
  }
  function setupVideoFeed(peerId, label, isLocalVideo) {
    const copy = document.querySelector("#video-feed-template").content.cloneNode(true);
    const feed = copy.querySelector("div[name='video-feed']");
    const audio = feed.querySelector("audio");
    const video = feed.querySelector("video");
    const videoLabel = feed.querySelector("div[name='video-label']");
    feed.id = elementId(peerId, "feed");
    videoLabel.innerText = label;
    if (isLocalVideo) {
      video.classList.add("flip-horizontally");
    }
    const grid = document.querySelector("#videos-grid");
    grid.appendChild(feed);
    resizeVideosGrid();
    return { audio, video };
  }
  function removeVideoElement(peerId) {
    var _a;
    (_a = document.getElementById(elementId(peerId, "feed"))) == null ? void 0 : _a.remove();
    resizeVideosGrid();
  }
  function setErrorMessage(message = "Cannot connect to server, refresh the page and try again") {
    const errorContainer = document.getElementById("videochat-error");
    if (errorContainer) {
      errorContainer.innerHTML = message;
      errorContainer.style.display = "block";
    }
  }

  // src/room.ts
  var import_membrane_webrtc_js = __toModule(require_dist());

  // ../deps/phoenix/priv/static/phoenix.mjs
  var closure = (value) => {
    if (typeof value === "function") {
      return value;
    } else {
      let closure2 = function() {
        return value;
      };
      return closure2;
    }
  };
  var globalSelf = typeof self !== "undefined" ? self : null;
  var phxWindow = typeof window !== "undefined" ? window : null;
  var global = globalSelf || phxWindow || global;
  var DEFAULT_VSN = "2.0.0";
  var SOCKET_STATES = { connecting: 0, open: 1, closing: 2, closed: 3 };
  var DEFAULT_TIMEOUT = 1e4;
  var WS_CLOSE_NORMAL = 1e3;
  var CHANNEL_STATES = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving"
  };
  var CHANNEL_EVENTS = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave"
  };
  var TRANSPORTS = {
    longpoll: "longpoll",
    websocket: "websocket"
  };
  var XHR_STATES = {
    complete: 4
  };
  var Push = class {
    constructor(channel, event, payload, timeout) {
      this.channel = channel;
      this.event = event;
      this.payload = payload || function() {
        return {};
      };
      this.receivedResp = null;
      this.timeout = timeout;
      this.timeoutTimer = null;
      this.recHooks = [];
      this.sent = false;
    }
    resend(timeout) {
      this.timeout = timeout;
      this.reset();
      this.send();
    }
    send() {
      if (this.hasReceived("timeout")) {
        return;
      }
      this.startTimeout();
      this.sent = true;
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload(),
        ref: this.ref,
        join_ref: this.channel.joinRef()
      });
    }
    receive(status, callback) {
      if (this.hasReceived(status)) {
        callback(this.receivedResp.response);
      }
      this.recHooks.push({ status, callback });
      return this;
    }
    reset() {
      this.cancelRefEvent();
      this.ref = null;
      this.refEvent = null;
      this.receivedResp = null;
      this.sent = false;
    }
    matchReceive({ status, response, _ref }) {
      this.recHooks.filter((h) => h.status === status).forEach((h) => h.callback(response));
    }
    cancelRefEvent() {
      if (!this.refEvent) {
        return;
      }
      this.channel.off(this.refEvent);
    }
    cancelTimeout() {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }
    startTimeout() {
      if (this.timeoutTimer) {
        this.cancelTimeout();
      }
      this.ref = this.channel.socket.makeRef();
      this.refEvent = this.channel.replyEventName(this.ref);
      this.channel.on(this.refEvent, (payload) => {
        this.cancelRefEvent();
        this.cancelTimeout();
        this.receivedResp = payload;
        this.matchReceive(payload);
      });
      this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout);
    }
    hasReceived(status) {
      return this.receivedResp && this.receivedResp.status === status;
    }
    trigger(status, response) {
      this.channel.trigger(this.refEvent, { status, response });
    }
  };
  var Timer = class {
    constructor(callback, timerCalc) {
      this.callback = callback;
      this.timerCalc = timerCalc;
      this.timer = null;
      this.tries = 0;
    }
    reset() {
      this.tries = 0;
      clearTimeout(this.timer);
    }
    scheduleTimeout() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.tries = this.tries + 1;
        this.callback();
      }, this.timerCalc(this.tries + 1));
    }
  };
  var Channel = class {
    constructor(topic, params, socket) {
      this.state = CHANNEL_STATES.closed;
      this.topic = topic;
      this.params = closure(params || {});
      this.socket = socket;
      this.bindings = [];
      this.bindingRef = 0;
      this.timeout = this.socket.timeout;
      this.joinedOnce = false;
      this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
      this.pushBuffer = [];
      this.stateChangeRefs = [];
      this.rejoinTimer = new Timer(() => {
        if (this.socket.isConnected()) {
          this.rejoin();
        }
      }, this.socket.rejoinAfterMs);
      this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset()));
      this.stateChangeRefs.push(this.socket.onOpen(() => {
        this.rejoinTimer.reset();
        if (this.isErrored()) {
          this.rejoin();
        }
      }));
      this.joinPush.receive("ok", () => {
        this.state = CHANNEL_STATES.joined;
        this.rejoinTimer.reset();
        this.pushBuffer.forEach((pushEvent) => pushEvent.send());
        this.pushBuffer = [];
      });
      this.joinPush.receive("error", () => {
        this.state = CHANNEL_STATES.errored;
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.onClose(() => {
        this.rejoinTimer.reset();
        if (this.socket.hasLogger())
          this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`);
        this.state = CHANNEL_STATES.closed;
        this.socket.remove(this);
      });
      this.onError((reason) => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `error ${this.topic}`, reason);
        if (this.isJoining()) {
          this.joinPush.reset();
        }
        this.state = CHANNEL_STATES.errored;
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.joinPush.receive("timeout", () => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `timeout ${this.topic} (${this.joinRef()})`, this.joinPush.timeout);
        let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), this.timeout);
        leavePush.send();
        this.state = CHANNEL_STATES.errored;
        this.joinPush.reset();
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.on(CHANNEL_EVENTS.reply, (payload, ref) => {
        this.trigger(this.replyEventName(ref), payload);
      });
    }
    join(timeout = this.timeout) {
      if (this.joinedOnce) {
        throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
      } else {
        this.timeout = timeout;
        this.joinedOnce = true;
        this.rejoin();
        return this.joinPush;
      }
    }
    onClose(callback) {
      this.on(CHANNEL_EVENTS.close, callback);
    }
    onError(callback) {
      return this.on(CHANNEL_EVENTS.error, (reason) => callback(reason));
    }
    on(event, callback) {
      let ref = this.bindingRef++;
      this.bindings.push({ event, ref, callback });
      return ref;
    }
    off(event, ref) {
      this.bindings = this.bindings.filter((bind) => {
        return !(bind.event === event && (typeof ref === "undefined" || ref === bind.ref));
      });
    }
    canPush() {
      return this.socket.isConnected() && this.isJoined();
    }
    push(event, payload, timeout = this.timeout) {
      payload = payload || {};
      if (!this.joinedOnce) {
        throw new Error(`tried to push '${event}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
      }
      let pushEvent = new Push(this, event, function() {
        return payload;
      }, timeout);
      if (this.canPush()) {
        pushEvent.send();
      } else {
        pushEvent.startTimeout();
        this.pushBuffer.push(pushEvent);
      }
      return pushEvent;
    }
    leave(timeout = this.timeout) {
      this.rejoinTimer.reset();
      this.joinPush.cancelTimeout();
      this.state = CHANNEL_STATES.leaving;
      let onClose = () => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `leave ${this.topic}`);
        this.trigger(CHANNEL_EVENTS.close, "leave");
      };
      let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), timeout);
      leavePush.receive("ok", () => onClose()).receive("timeout", () => onClose());
      leavePush.send();
      if (!this.canPush()) {
        leavePush.trigger("ok", {});
      }
      return leavePush;
    }
    onMessage(_event, payload, _ref) {
      return payload;
    }
    isMember(topic, event, payload, joinRef) {
      if (this.topic !== topic) {
        return false;
      }
      if (joinRef && joinRef !== this.joinRef()) {
        if (this.socket.hasLogger())
          this.socket.log("channel", "dropping outdated message", { topic, event, payload, joinRef });
        return false;
      } else {
        return true;
      }
    }
    joinRef() {
      return this.joinPush.ref;
    }
    rejoin(timeout = this.timeout) {
      if (this.isLeaving()) {
        return;
      }
      this.socket.leaveOpenTopic(this.topic);
      this.state = CHANNEL_STATES.joining;
      this.joinPush.resend(timeout);
    }
    trigger(event, payload, ref, joinRef) {
      let handledPayload = this.onMessage(event, payload, ref, joinRef);
      if (payload && !handledPayload) {
        throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
      }
      let eventBindings = this.bindings.filter((bind) => bind.event === event);
      for (let i = 0; i < eventBindings.length; i++) {
        let bind = eventBindings[i];
        bind.callback(handledPayload, ref, joinRef || this.joinRef());
      }
    }
    replyEventName(ref) {
      return `chan_reply_${ref}`;
    }
    isClosed() {
      return this.state === CHANNEL_STATES.closed;
    }
    isErrored() {
      return this.state === CHANNEL_STATES.errored;
    }
    isJoined() {
      return this.state === CHANNEL_STATES.joined;
    }
    isJoining() {
      return this.state === CHANNEL_STATES.joining;
    }
    isLeaving() {
      return this.state === CHANNEL_STATES.leaving;
    }
  };
  var Ajax = class {
    static request(method, endPoint, accept, body, timeout, ontimeout, callback) {
      if (global.XDomainRequest) {
        let req = new global.XDomainRequest();
        return this.xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback);
      } else {
        let req = new global.XMLHttpRequest();
        return this.xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback);
      }
    }
    static xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback) {
      req.timeout = timeout;
      req.open(method, endPoint);
      req.onload = () => {
        let response = this.parseJSON(req.responseText);
        callback && callback(response);
      };
      if (ontimeout) {
        req.ontimeout = ontimeout;
      }
      req.onprogress = () => {
      };
      req.send(body);
      return req;
    }
    static xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback) {
      req.open(method, endPoint, true);
      req.timeout = timeout;
      req.setRequestHeader("Content-Type", accept);
      req.onerror = () => callback && callback(null);
      req.onreadystatechange = () => {
        if (req.readyState === XHR_STATES.complete && callback) {
          let response = this.parseJSON(req.responseText);
          callback(response);
        }
      };
      if (ontimeout) {
        req.ontimeout = ontimeout;
      }
      req.send(body);
      return req;
    }
    static parseJSON(resp) {
      if (!resp || resp === "") {
        return null;
      }
      try {
        return JSON.parse(resp);
      } catch (e) {
        console && console.log("failed to parse JSON response", resp);
        return null;
      }
    }
    static serialize(obj, parentKey) {
      let queryStr = [];
      for (var key in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
          continue;
        }
        let paramKey = parentKey ? `${parentKey}[${key}]` : key;
        let paramVal = obj[key];
        if (typeof paramVal === "object") {
          queryStr.push(this.serialize(paramVal, paramKey));
        } else {
          queryStr.push(encodeURIComponent(paramKey) + "=" + encodeURIComponent(paramVal));
        }
      }
      return queryStr.join("&");
    }
    static appendParams(url, params) {
      if (Object.keys(params).length === 0) {
        return url;
      }
      let prefix = url.match(/\?/) ? "&" : "?";
      return `${url}${prefix}${this.serialize(params)}`;
    }
  };
  var LongPoll = class {
    constructor(endPoint) {
      this.endPoint = null;
      this.token = null;
      this.skipHeartbeat = true;
      this.reqs = /* @__PURE__ */ new Set();
      this.onopen = function() {
      };
      this.onerror = function() {
      };
      this.onmessage = function() {
      };
      this.onclose = function() {
      };
      this.pollEndpoint = this.normalizeEndpoint(endPoint);
      this.readyState = SOCKET_STATES.connecting;
      this.poll();
    }
    normalizeEndpoint(endPoint) {
      return endPoint.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + TRANSPORTS.websocket), "$1/" + TRANSPORTS.longpoll);
    }
    endpointURL() {
      return Ajax.appendParams(this.pollEndpoint, { token: this.token });
    }
    closeAndRetry(code, reason, wasClean) {
      this.close(code, reason, wasClean);
      this.readyState = SOCKET_STATES.connecting;
    }
    ontimeout() {
      this.onerror("timeout");
      this.closeAndRetry(1005, "timeout", false);
    }
    isActive() {
      return this.readyState === SOCKET_STATES.open || this.readyState === SOCKET_STATES.connecting;
    }
    poll() {
      this.ajax("GET", null, () => this.ontimeout(), (resp) => {
        if (resp) {
          var { status, token, messages } = resp;
          this.token = token;
        } else {
          status = 0;
        }
        switch (status) {
          case 200:
            messages.forEach((msg) => {
              setTimeout(() => this.onmessage({ data: msg }), 0);
            });
            this.poll();
            break;
          case 204:
            this.poll();
            break;
          case 410:
            this.readyState = SOCKET_STATES.open;
            this.onopen({});
            this.poll();
            break;
          case 403:
            this.onerror(403);
            this.close(1008, "forbidden", false);
            break;
          case 0:
          case 500:
            this.onerror(500);
            this.closeAndRetry(1011, "internal server error", 500);
            break;
          default:
            throw new Error(`unhandled poll status ${status}`);
        }
      });
    }
    send(body) {
      this.ajax("POST", body, () => this.onerror("timeout"), (resp) => {
        if (!resp || resp.status !== 200) {
          this.onerror(resp && resp.status);
          this.closeAndRetry(1011, "internal server error", false);
        }
      });
    }
    close(code, reason, wasClean) {
      for (let req of this.reqs) {
        req.abort();
      }
      this.readyState = SOCKET_STATES.closed;
      let opts = Object.assign({ code: 1e3, reason: void 0, wasClean: true }, { code, reason, wasClean });
      if (typeof CloseEvent !== "undefined") {
        this.onclose(new CloseEvent("close", opts));
      } else {
        this.onclose(opts);
      }
    }
    ajax(method, body, onCallerTimeout, callback) {
      let req;
      let ontimeout = () => {
        this.reqs.delete(req);
        onCallerTimeout();
      };
      req = Ajax.request(method, this.endpointURL(), "application/json", body, this.timeout, ontimeout, (resp) => {
        this.reqs.delete(req);
        if (this.isActive()) {
          callback(resp);
        }
      });
      this.reqs.add(req);
    }
  };
  var serializer_default = {
    HEADER_LENGTH: 1,
    META_LENGTH: 4,
    KINDS: { push: 0, reply: 1, broadcast: 2 },
    encode(msg, callback) {
      if (msg.payload.constructor === ArrayBuffer) {
        return callback(this.binaryEncode(msg));
      } else {
        let payload = [msg.join_ref, msg.ref, msg.topic, msg.event, msg.payload];
        return callback(JSON.stringify(payload));
      }
    },
    decode(rawPayload, callback) {
      if (rawPayload.constructor === ArrayBuffer) {
        return callback(this.binaryDecode(rawPayload));
      } else {
        let [join_ref, ref, topic, event, payload] = JSON.parse(rawPayload);
        return callback({ join_ref, ref, topic, event, payload });
      }
    },
    binaryEncode(message) {
      let { join_ref, ref, event, topic, payload } = message;
      let metaLength = this.META_LENGTH + join_ref.length + ref.length + topic.length + event.length;
      let header = new ArrayBuffer(this.HEADER_LENGTH + metaLength);
      let view = new DataView(header);
      let offset = 0;
      view.setUint8(offset++, this.KINDS.push);
      view.setUint8(offset++, join_ref.length);
      view.setUint8(offset++, ref.length);
      view.setUint8(offset++, topic.length);
      view.setUint8(offset++, event.length);
      Array.from(join_ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(topic, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(event, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      var combined = new Uint8Array(header.byteLength + payload.byteLength);
      combined.set(new Uint8Array(header), 0);
      combined.set(new Uint8Array(payload), header.byteLength);
      return combined.buffer;
    },
    binaryDecode(buffer) {
      let view = new DataView(buffer);
      let kind = view.getUint8(0);
      let decoder = new TextDecoder();
      switch (kind) {
        case this.KINDS.push:
          return this.decodePush(buffer, view, decoder);
        case this.KINDS.reply:
          return this.decodeReply(buffer, view, decoder);
        case this.KINDS.broadcast:
          return this.decodeBroadcast(buffer, view, decoder);
      }
    },
    decodePush(buffer, view, decoder) {
      let joinRefSize = view.getUint8(1);
      let topicSize = view.getUint8(2);
      let eventSize = view.getUint8(3);
      let offset = this.HEADER_LENGTH + this.META_LENGTH - 1;
      let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
      offset = offset + joinRefSize;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      return { join_ref: joinRef, ref: null, topic, event, payload: data };
    },
    decodeReply(buffer, view, decoder) {
      let joinRefSize = view.getUint8(1);
      let refSize = view.getUint8(2);
      let topicSize = view.getUint8(3);
      let eventSize = view.getUint8(4);
      let offset = this.HEADER_LENGTH + this.META_LENGTH;
      let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
      offset = offset + joinRefSize;
      let ref = decoder.decode(buffer.slice(offset, offset + refSize));
      offset = offset + refSize;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      let payload = { status: event, response: data };
      return { join_ref: joinRef, ref, topic, event: CHANNEL_EVENTS.reply, payload };
    },
    decodeBroadcast(buffer, view, decoder) {
      let topicSize = view.getUint8(1);
      let eventSize = view.getUint8(2);
      let offset = this.HEADER_LENGTH + 2;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      return { join_ref: null, ref: null, topic, event, payload: data };
    }
  };
  var Socket = class {
    constructor(endPoint, opts = {}) {
      this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] };
      this.channels = [];
      this.sendBuffer = [];
      this.ref = 0;
      this.timeout = opts.timeout || DEFAULT_TIMEOUT;
      this.transport = opts.transport || global.WebSocket || LongPoll;
      this.establishedConnections = 0;
      this.defaultEncoder = serializer_default.encode.bind(serializer_default);
      this.defaultDecoder = serializer_default.decode.bind(serializer_default);
      this.closeWasClean = false;
      this.binaryType = opts.binaryType || "arraybuffer";
      this.connectClock = 1;
      if (this.transport !== LongPoll) {
        this.encode = opts.encode || this.defaultEncoder;
        this.decode = opts.decode || this.defaultDecoder;
      } else {
        this.encode = this.defaultEncoder;
        this.decode = this.defaultDecoder;
      }
      let awaitingConnectionOnPageShow = null;
      if (phxWindow && phxWindow.addEventListener) {
        phxWindow.addEventListener("pagehide", (_e) => {
          if (this.conn) {
            this.disconnect();
            awaitingConnectionOnPageShow = this.connectClock;
          }
        });
        phxWindow.addEventListener("pageshow", (_e) => {
          if (awaitingConnectionOnPageShow === this.connectClock) {
            awaitingConnectionOnPageShow = null;
            this.connect();
          }
        });
      }
      this.heartbeatIntervalMs = opts.heartbeatIntervalMs || 3e4;
      this.rejoinAfterMs = (tries) => {
        if (opts.rejoinAfterMs) {
          return opts.rejoinAfterMs(tries);
        } else {
          return [1e3, 2e3, 5e3][tries - 1] || 1e4;
        }
      };
      this.reconnectAfterMs = (tries) => {
        if (opts.reconnectAfterMs) {
          return opts.reconnectAfterMs(tries);
        } else {
          return [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][tries - 1] || 5e3;
        }
      };
      this.logger = opts.logger || null;
      this.longpollerTimeout = opts.longpollerTimeout || 2e4;
      this.params = closure(opts.params || {});
      this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
      this.vsn = opts.vsn || DEFAULT_VSN;
      this.heartbeatTimeoutTimer = null;
      this.heartbeatTimer = null;
      this.pendingHeartbeatRef = null;
      this.reconnectTimer = new Timer(() => {
        this.teardown(() => this.connect());
      }, this.reconnectAfterMs);
    }
    getLongPollTransport() {
      return LongPoll;
    }
    replaceTransport(newTransport) {
      this.connectClock++;
      this.closeWasClean = true;
      this.reconnectTimer.reset();
      this.sendBuffer = [];
      if (this.conn) {
        this.conn.close();
        this.conn = null;
      }
      this.transport = newTransport;
    }
    protocol() {
      return location.protocol.match(/^https/) ? "wss" : "ws";
    }
    endPointURL() {
      let uri = Ajax.appendParams(Ajax.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
      if (uri.charAt(0) !== "/") {
        return uri;
      }
      if (uri.charAt(1) === "/") {
        return `${this.protocol()}:${uri}`;
      }
      return `${this.protocol()}://${location.host}${uri}`;
    }
    disconnect(callback, code, reason) {
      this.connectClock++;
      this.closeWasClean = true;
      this.reconnectTimer.reset();
      this.teardown(callback, code, reason);
    }
    connect(params) {
      if (params) {
        console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor");
        this.params = closure(params);
      }
      if (this.conn) {
        return;
      }
      this.connectClock++;
      this.closeWasClean = false;
      this.conn = new this.transport(this.endPointURL());
      this.conn.binaryType = this.binaryType;
      this.conn.timeout = this.longpollerTimeout;
      this.conn.onopen = () => this.onConnOpen();
      this.conn.onerror = (error) => this.onConnError(error);
      this.conn.onmessage = (event) => this.onConnMessage(event);
      this.conn.onclose = (event) => this.onConnClose(event);
    }
    log(kind, msg, data) {
      this.logger(kind, msg, data);
    }
    hasLogger() {
      return this.logger !== null;
    }
    onOpen(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.open.push([ref, callback]);
      return ref;
    }
    onClose(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.close.push([ref, callback]);
      return ref;
    }
    onError(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.error.push([ref, callback]);
      return ref;
    }
    onMessage(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.message.push([ref, callback]);
      return ref;
    }
    ping(callback) {
      if (!this.isConnected()) {
        return false;
      }
      let ref = this.makeRef();
      let startTime = Date.now();
      this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref });
      let onMsgRef = this.onMessage((msg) => {
        if (msg.ref === ref) {
          this.off([onMsgRef]);
          callback(Date.now() - startTime);
        }
      });
      return true;
    }
    clearHeartbeats() {
      clearTimeout(this.heartbeatTimer);
      clearTimeout(this.heartbeatTimeoutTimer);
    }
    onConnOpen() {
      if (this.hasLogger())
        this.log("transport", `connected to ${this.endPointURL()}`);
      this.closeWasClean = false;
      this.establishedConnections++;
      this.flushSendBuffer();
      this.reconnectTimer.reset();
      this.resetHeartbeat();
      this.stateChangeCallbacks.open.forEach(([, callback]) => callback());
    }
    heartbeatTimeout() {
      if (this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null;
        if (this.hasLogger()) {
          this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
        }
        this.triggerChanError();
        this.closeWasClean = false;
        this.teardown(() => this.reconnectTimer.scheduleTimeout(), WS_CLOSE_NORMAL, "heartbeat timeout");
      }
    }
    resetHeartbeat() {
      if (this.conn && this.conn.skipHeartbeat) {
        return;
      }
      this.pendingHeartbeatRef = null;
      this.clearHeartbeats();
      this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
    }
    teardown(callback, code, reason) {
      if (!this.conn) {
        return callback && callback();
      }
      this.waitForBufferDone(() => {
        if (this.conn) {
          if (code) {
            this.conn.close(code, reason || "");
          } else {
            this.conn.close();
          }
        }
        this.waitForSocketClosed(() => {
          if (this.conn) {
            this.conn.onopen = function() {
            };
            this.conn.onerror = function() {
            };
            this.conn.onmessage = function() {
            };
            this.conn.onclose = function() {
            };
            this.conn = null;
          }
          callback && callback();
        });
      });
    }
    waitForBufferDone(callback, tries = 1) {
      if (tries === 5 || !this.conn || !this.conn.bufferedAmount) {
        callback();
        return;
      }
      setTimeout(() => {
        this.waitForBufferDone(callback, tries + 1);
      }, 150 * tries);
    }
    waitForSocketClosed(callback, tries = 1) {
      if (tries === 5 || !this.conn || this.conn.readyState === SOCKET_STATES.closed) {
        callback();
        return;
      }
      setTimeout(() => {
        this.waitForSocketClosed(callback, tries + 1);
      }, 150 * tries);
    }
    onConnClose(event) {
      let closeCode = event && event.code;
      if (this.hasLogger())
        this.log("transport", "close", event);
      this.triggerChanError();
      this.clearHeartbeats();
      if (!this.closeWasClean && closeCode !== 1e3) {
        this.reconnectTimer.scheduleTimeout();
      }
      this.stateChangeCallbacks.close.forEach(([, callback]) => callback(event));
    }
    onConnError(error) {
      if (this.hasLogger())
        this.log("transport", error);
      let transportBefore = this.transport;
      let establishedBefore = this.establishedConnections;
      this.stateChangeCallbacks.error.forEach(([, callback]) => {
        callback(error, transportBefore, establishedBefore);
      });
      if (transportBefore === this.transport || establishedBefore > 0) {
        this.triggerChanError();
      }
    }
    triggerChanError() {
      this.channels.forEach((channel) => {
        if (!(channel.isErrored() || channel.isLeaving() || channel.isClosed())) {
          channel.trigger(CHANNEL_EVENTS.error);
        }
      });
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case SOCKET_STATES.connecting:
          return "connecting";
        case SOCKET_STATES.open:
          return "open";
        case SOCKET_STATES.closing:
          return "closing";
        default:
          return "closed";
      }
    }
    isConnected() {
      return this.connectionState() === "open";
    }
    remove(channel) {
      this.off(channel.stateChangeRefs);
      this.channels = this.channels.filter((c) => c.joinRef() !== channel.joinRef());
    }
    off(refs) {
      for (let key in this.stateChangeCallbacks) {
        this.stateChangeCallbacks[key] = this.stateChangeCallbacks[key].filter(([ref]) => {
          return refs.indexOf(ref) === -1;
        });
      }
    }
    channel(topic, chanParams = {}) {
      let chan = new Channel(topic, chanParams, this);
      this.channels.push(chan);
      return chan;
    }
    push(data) {
      if (this.hasLogger()) {
        let { topic, event, payload, ref, join_ref } = data;
        this.log("push", `${topic} ${event} (${join_ref}, ${ref})`, payload);
      }
      if (this.isConnected()) {
        this.encode(data, (result) => this.conn.send(result));
      } else {
        this.sendBuffer.push(() => this.encode(data, (result) => this.conn.send(result)));
      }
    }
    makeRef() {
      let newRef = this.ref + 1;
      if (newRef === this.ref) {
        this.ref = 0;
      } else {
        this.ref = newRef;
      }
      return this.ref.toString();
    }
    sendHeartbeat() {
      if (this.pendingHeartbeatRef && !this.isConnected()) {
        return;
      }
      this.pendingHeartbeatRef = this.makeRef();
      this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
      this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
    }
    flushSendBuffer() {
      if (this.isConnected() && this.sendBuffer.length > 0) {
        this.sendBuffer.forEach((callback) => callback());
        this.sendBuffer = [];
      }
    }
    onConnMessage(rawMessage) {
      this.decode(rawMessage.data, (msg) => {
        let { topic, event, payload, ref, join_ref } = msg;
        if (ref && ref === this.pendingHeartbeatRef) {
          this.clearHeartbeats();
          this.pendingHeartbeatRef = null;
          this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
        }
        if (this.hasLogger())
          this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`, payload);
        for (let i = 0; i < this.channels.length; i++) {
          const channel = this.channels[i];
          if (!channel.isMember(topic, event, payload, join_ref)) {
            continue;
          }
          channel.trigger(event, payload, ref, join_ref);
        }
        for (let i = 0; i < this.stateChangeCallbacks.message.length; i++) {
          let [, callback] = this.stateChangeCallbacks.message[i];
          callback(msg);
        }
      });
    }
    leaveOpenTopic(topic) {
      let dupChannel = this.channels.find((c) => c.topic === topic && (c.isJoined() || c.isJoining()));
      if (dupChannel) {
        if (this.hasLogger())
          this.log("transport", `leaving duplicate topic "${topic}"`);
        dupChannel.leave();
      }
    }
  };

  // src/room.ts
  var import_query_string = __toModule(require_query_string());
  var Room = class {
    constructor() {
      this.peers = [];
      this.webrtcSocketRefs = [];
      this.join = () => __async(this, null, function* () {
        try {
          yield this.init();
          setupDisconnectButton(() => {
            this.leave();
            window.location.replace("");
          });
          this.webrtc.join({ displayName: this.displayName });
        } catch (error) {
          console.error("Error while joining to the room:", error);
        }
      });
      this.init = () => __async(this, null, function* () {
        try {
          this.localStream = yield navigator.mediaDevices.getUserMedia(MEDIA_CONSTRAINTS);
        } catch (error) {
          console.error(error);
          setErrorMessage("Failed to setup video room, make sure to grant camera and microphone permissions");
          throw "error";
        }
        addVideoElement(LOCAL_PEER_ID, "Me", true);
        attachStream(this.localStream, LOCAL_PEER_ID);
        yield this.phoenixChannelPushResult(this.webrtcChannel.join());
      });
      this.leave = () => {
        this.webrtc.leave();
        this.webrtcChannel.leave();
        this.socketOff();
      };
      this.socketOff = () => {
        this.socket.off(this.webrtcSocketRefs);
        while (this.webrtcSocketRefs.length > 0) {
          this.webrtcSocketRefs.pop();
        }
      };
      this.parseUrl = () => {
        const { display_name: displayName } = (0, import_query_string.parse)(document.location.search);
        window.history.replaceState(null, "", window.location.pathname);
        return displayName;
      };
      this.updateParticipantsList = () => {
        const participantsNames = this.peers.map((p) => p.metadata.displayName);
        if (this.displayName) {
          participantsNames.push(this.displayName);
        }
        setParticipantsList(participantsNames);
      };
      this.phoenixChannelPushResult = (push) => __async(this, null, function* () {
        return new Promise((resolve, reject) => {
          push.receive("ok", (response) => resolve(response)).receive("error", (response) => reject(response));
        });
      });
      this.csrfToken = () => {
        let token = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        console.log(token);
        return token
      }
      this.socket = new Socket("/video_socket", {params: {_csrf_token: this.csrfToken()}});
      // this.socket = new Socket("/video_socket");
      this.socket.connect();
      this.displayName = this.parseUrl();
      this.webrtcChannel = this.socket.channel(`room:${getRoomId()}`);
      this.webrtcChannel.onError(() => {
        this.socketOff();
        window.location.reload();
      });
      this.webrtcChannel.onClose(() => {
        this.socketOff();
        window.location.reload();
      });
      this.webrtcSocketRefs.push(this.socket.onError(this.leave));
      this.webrtcSocketRefs.push(this.socket.onClose(this.leave));
      this.webrtc = new import_membrane_webrtc_js.MembraneWebRTC({
        callbacks: {
          onSendMediaEvent: (mediaEvent) => {
            this.webrtcChannel.push("mediaEvent", { data: mediaEvent });
          },
          onConnectionError: setErrorMessage,
          onJoinSuccess: (peerId, peersInRoom) => {
            this.localStream.getTracks().forEach((track) => this.webrtc.addTrack(track, this.localStream, {}));
            this.peers = peersInRoom;
            this.peers.forEach((peer) => {
              addVideoElement(peer.id, peer.metadata.displayName, false);
            });
            this.updateParticipantsList();
          },
          onJoinError: (metadata) => {
            throw `Peer denied.`;
          },
          onTrackReady: ({ stream, peer, metadata }) => {
            attachStream(stream, peer.id);
          },
          onTrackAdded: (ctx) => {
          },
          onTrackRemoved: (ctx) => {
          },
          onPeerJoined: (peer) => {
            this.peers.push(peer);
            this.updateParticipantsList();
            addVideoElement(peer.id, peer.metadata.displayName, false);
          },
          onPeerLeft: (peer) => {
            this.peers = this.peers.filter((p) => p.id !== peer.id);
            removeVideoElement(peer.id);
            this.updateParticipantsList();
          },
          onPeerUpdated: (ctx) => {
          }
        }
      });
      this.webrtcChannel.on("mediaEvent", (event) => this.webrtc.receiveMediaEvent(event.data));
    }
  };

  // src/index.ts
  var room = new Room();
  room.join();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9AbWVtYnJhbmVmcmFtZXdvcmsvbWVtYnJhbmUtd2VicnRjLWpzL2Rpc3QvbWVkaWFFdmVudC5qcyIsICIuLi8uLi8uLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCAiLi4vLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCAiLi4vLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCAiLi4vLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwgIi4uLy4uLy4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YxLmpzIiwgIi4uLy4uLy4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3BhcnNlLmpzIiwgIi4uLy4uLy4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzNS5qcyIsICIuLi8uLi8uLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9tZDUuanMiLCAiLi4vLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjMuanMiLCAiLi4vLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCAiLi4vLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc2hhMS5qcyIsICIuLi8uLi8uLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NS5qcyIsICIuLi8uLi8uLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uaWwuanMiLCAiLi4vLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmVyc2lvbi5qcyIsICIuLi8uLi8uLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL0BtZW1icmFuZWZyYW1ld29yay9tZW1icmFuZS13ZWJydGMtanMvZGlzdC9jb25zdC5qcyIsICIuLi8uLi8uLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL0BtZW1icmFuZWZyYW1ld29yay9tZW1icmFuZS13ZWJydGMtanMvZGlzdC9tZW1icmFuZVdlYlJUQy5qcyIsICIuLi8uLi8uLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL0BtZW1icmFuZWZyYW1ld29yay9tZW1icmFuZS13ZWJydGMtanMvZGlzdC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uL2Fzc2V0cy9ub2RlX21vZHVsZXMvZGVjb2RlLXVyaS1jb21wb25lbnQvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9zcGxpdC1vbi1maXJzdC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL2ZpbHRlci1vYmovaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9xdWVyeS1zdHJpbmcvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vYXNzZXRzL3NyYy9jb25zdHMudHMiLCAiLi4vLi4vLi4vLi4vYXNzZXRzL3NyYy9yb29tX3VpLnRzIiwgIi4uLy4uLy4uLy4uL2Fzc2V0cy9zcmMvcm9vbS50cyIsICIuLi8uLi8uLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvdXRpbHMuanMiLCAiLi4vLi4vLi4vLi4vZGVwcy9waG9lbml4L2Fzc2V0cy9qcy9waG9lbml4L2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvcHVzaC5qcyIsICIuLi8uLi8uLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvdGltZXIuanMiLCAiLi4vLi4vLi4vLi4vZGVwcy9waG9lbml4L2Fzc2V0cy9qcy9waG9lbml4L2NoYW5uZWwuanMiLCAiLi4vLi4vLi4vLi4vZGVwcy9waG9lbml4L2Fzc2V0cy9qcy9waG9lbml4L2FqYXguanMiLCAiLi4vLi4vLi4vLi4vZGVwcy9waG9lbml4L2Fzc2V0cy9qcy9waG9lbml4L2xvbmdwb2xsLmpzIiwgIi4uLy4uLy4uLy4uL2RlcHMvcGhvZW5peC9hc3NldHMvanMvcGhvZW5peC9wcmVzZW5jZS5qcyIsICIuLi8uLi8uLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvc2VyaWFsaXplci5qcyIsICIuLi8uLi8uLi8uLi9kZXBzL3Bob2VuaXgvYXNzZXRzL2pzL3Bob2VuaXgvc29ja2V0LmpzIiwgIi4uLy4uLy4uLy4uL2Fzc2V0cy9zcmMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZW5lcmF0ZUN1c3RvbUV2ZW50ID0gZXhwb3J0cy5nZW5lcmF0ZU1lZGlhRXZlbnQgPSBleHBvcnRzLmRlc2VyaWFsaXplTWVkaWFFdmVudCA9IGV4cG9ydHMuc2VyaWFsaXplTWVkaWFFdmVudCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHNlcmlhbGl6ZU1lZGlhRXZlbnQobWVkaWFFdmVudCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShtZWRpYUV2ZW50KTtcbn1cbmV4cG9ydHMuc2VyaWFsaXplTWVkaWFFdmVudCA9IHNlcmlhbGl6ZU1lZGlhRXZlbnQ7XG5mdW5jdGlvbiBkZXNlcmlhbGl6ZU1lZGlhRXZlbnQoc2VyaWFsaXplZE1lZGlhRXZlbnQpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzZXJpYWxpemVkTWVkaWFFdmVudCk7XG59XG5leHBvcnRzLmRlc2VyaWFsaXplTWVkaWFFdmVudCA9IGRlc2VyaWFsaXplTWVkaWFFdmVudDtcbmZ1bmN0aW9uIGdlbmVyYXRlTWVkaWFFdmVudCh0eXBlLCBkYXRhKSB7XG4gICAgdmFyIGV2ZW50ID0geyB0eXBlIH07XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZXZlbnQgPSB7IC4uLmV2ZW50LCBkYXRhIH07XG4gICAgfVxuICAgIHJldHVybiBldmVudDtcbn1cbmV4cG9ydHMuZ2VuZXJhdGVNZWRpYUV2ZW50ID0gZ2VuZXJhdGVNZWRpYUV2ZW50O1xuZnVuY3Rpb24gZ2VuZXJhdGVDdXN0b21FdmVudChkYXRhKSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlTWVkaWFFdmVudChcImN1c3RvbVwiLCBkYXRhKTtcbn1cbmV4cG9ydHMuZ2VuZXJhdGVDdXN0b21FdmVudCA9IGdlbmVyYXRlQ3VzdG9tRXZlbnQ7XG4iLCAiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsICJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwgImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsICJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCAiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJzsgLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcblxudmFyIF9jbG9ja3NlcTsgLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG5cblxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwOyAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkIGZvciBBUEkgZGV0YWlsc1xuXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgbmV3IEFycmF5KDE2KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7IC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuXG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtzZWVkQnl0ZXNbMF0gfCAweDAxLCBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XV07XG4gICAgfVxuXG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9IC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuXG5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IERhdGUubm93KCk7IC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcblxuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7IC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcblxuICB2YXIgZHQgPSBtc2VjcyAtIF9sYXN0TVNlY3MgKyAobnNlY3MgLSBfbGFzdE5TZWNzKSAvIDEwMDAwOyAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG5cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfSAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG5cblxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfSAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG5cblxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1dWlkLnYxKCk6IENhbid0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlY1wiKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTsgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG5cbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7IC8vIGB0aW1lX2xvd2BcblxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmOyAvLyBgdGltZV9taWRgXG5cbiAgdmFyIHRtaCA9IG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjsgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcblxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG5cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7IC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDsgLy8gYGNsb2NrX3NlcV9sb3dgXG5cbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmOyAvLyBgbm9kZWBcblxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgfHwgc3RyaW5naWZ5KGIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2MTsiLCAiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuXG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgdmFyIHY7XG4gIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxNik7IC8vIFBhcnNlICMjIyMjIyMjLS4uLi4tLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFyclswXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgwLCA4KSwgMTYpKSA+Pj4gMjQ7XG4gIGFyclsxXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzJdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclszXSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0jIyMjLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoOSwgMTMpLCAxNikpID4+PiA4O1xuICBhcnJbNV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0jIyMjLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzZdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxOCksIDE2KSkgPj4+IDg7XG4gIGFycls3XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tIyMjIy0uLi4uLi4uLi4uLi5cblxuICBhcnJbOF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTksIDIzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzldID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0uLi4uLSMjIyMjIyMjIyMjI1xuICAvLyAoVXNlIFwiL1wiIHRvIGF2b2lkIDMyLWJpdCB0cnVuY2F0aW9uIHdoZW4gYml0LXNoaWZ0aW5nIGhpZ2gtb3JkZXIgYnl0ZXMpXG5cbiAgYXJyWzEwXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMV0gPSB2IC8gMHgxMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTJdID0gdiA+Pj4gMjQgJiAweGZmO1xuICBhcnJbMTNdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMTRdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclsxNV0gPSB2ICYgMHhmZjtcbiAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2U7IiwgImltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuaW1wb3J0IHBhcnNlIGZyb20gJy4vcGFyc2UuanMnO1xuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgdmFyIGJ5dGVzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuZXhwb3J0IHZhciBETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydCB2YXIgVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZSwgdmVyc2lvbiwgaGFzaGZ1bmMpIHtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVVVUlEKHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSBwYXJzZShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmIChuYW1lc3BhY2UubGVuZ3RoICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfSAvLyBDb21wdXRlIGhhc2ggb2YgbmFtZXNwYWNlIGFuZCB2YWx1ZSwgUGVyIDQuM1xuICAgIC8vIEZ1dHVyZTogVXNlIHNwcmVhZCBzeW50YXggd2hlbiBzdXBwb3J0ZWQgb24gYWxsIHBsYXRmb3JtcywgZS5nLiBgYnl0ZXMgPVxuICAgIC8vIGhhc2hmdW5jKFsuLi5uYW1lc3BhY2UsIC4uLiB2YWx1ZV0pYFxuXG5cbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZSk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlLCBuYW1lc3BhY2UubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2hmdW5jKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gICAgaWYgKGJ1Zikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5naWZ5KGJ5dGVzKTtcbiAgfSAvLyBGdW5jdGlvbiNuYW1lIGlzIG5vdCBzZXR0YWJsZSBvbiBzb21lIHBsYXRmb3JtcyAoIzI3MClcblxuXG4gIHRyeSB7XG4gICAgZ2VuZXJhdGVVVUlELm5hbWUgPSBuYW1lOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgfSBjYXRjaCAoZXJyKSB7fSAvLyBGb3IgQ29tbW9uSlMgZGVmYXVsdCBleHBvcnQgc3VwcG9ydFxuXG5cbiAgZ2VuZXJhdGVVVUlELkROUyA9IEROUztcbiAgZ2VuZXJhdGVVVUlELlVSTCA9IFVSTDtcbiAgcmV0dXJuIGdlbmVyYXRlVVVJRDtcbn0iLCAiLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShtc2cubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlc1tpXSA9IG1zZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZDVUb0hleEVuY29kZWRBcnJheSh3b3Jkc1RvTWQ1KGJ5dGVzVG9Xb3JkcyhieXRlcyksIGJ5dGVzLmxlbmd0aCAqIDgpKTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNVRvSGV4RW5jb2RlZEFycmF5KGlucHV0KSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgdmFyIGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIHZhciBoZXhUYWIgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGgzMjsgaSArPSA4KSB7XG4gICAgdmFyIHggPSBpbnB1dFtpID4+IDVdID4+PiBpICUgMzIgJiAweGZmO1xuICAgIHZhciBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIHZhciBhID0gMTczMjU4NDE5MztcbiAgdmFyIGIgPSAtMjcxNzMzODc5O1xuICB2YXIgYyA9IC0xNzMyNTg0MTk0O1xuICB2YXIgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgdmFyIG9sZGEgPSBhO1xuICAgIHZhciBvbGRiID0gYjtcbiAgICB2YXIgb2xkYyA9IGM7XG4gICAgdmFyIG9sZGQgPSBkO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgfVxuXG4gIHJldHVybiBbYSwgYiwgYywgZF07XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBieXRlcyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gKiBDaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaWdoLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJ5dGVzVG9Xb3JkcyhpbnB1dCkge1xuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4O1xuICB2YXIgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIHZhciBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDB4ZmZmZjtcbn1cbi8qXG4gKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gKi9cblxuXG5mdW5jdGlvbiBiaXRSb3RhdGVMZWZ0KG51bSwgY250KSB7XG4gIHJldHVybiBudW0gPDwgY250IHwgbnVtID4+PiAzMiAtIGNudDtcbn1cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5cblxuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgYyB8IH5iICYgZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgZCB8IGMgJiB+ZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWQ1OyIsICJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBtZDUgZnJvbSAnLi9tZDUuanMnO1xudmFyIHYzID0gdjM1KCd2MycsIDB4MzAsIG1kNSk7XG5leHBvcnQgZGVmYXVsdCB2MzsiLCAiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwgIi8vIEFkYXB0ZWQgZnJvbSBDaHJpcyBWZW5lc3MnIFNIQTEgY29kZSBhdFxuLy8gaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9zaGExLmh0bWxcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4geCAmIHkgXiB+eCAmIHo7XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggJiB5IF4geCAmIHogXiB5ICYgejtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH1cbn1cblxuZnVuY3Rpb24gUk9UTCh4LCBuKSB7XG4gIHJldHVybiB4IDw8IG4gfCB4ID4+PiAzMiAtIG47XG59XG5cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgdmFyIEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gIHZhciBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlcy5wdXNoKG1zZy5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoYnl0ZXMpKSB7XG4gICAgLy8gQ29udmVydCBBcnJheS1saWtlIHRvIEFycmF5XG4gICAgYnl0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChieXRlcyk7XG4gIH1cblxuICBieXRlcy5wdXNoKDB4ODApO1xuICB2YXIgbCA9IGJ5dGVzLmxlbmd0aCAvIDQgKyAyO1xuICB2YXIgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICB2YXIgTSA9IG5ldyBBcnJheShOKTtcblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgTjsgKytfaSkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICBhcnJbal0gPSBieXRlc1tfaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAyXSA8PCA4IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtfaV0gPSBhcnI7XG4gIH1cblxuICBNW04gLSAxXVsxNF0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4IC8gTWF0aC5wb3coMiwgMzIpO1xuICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gIE1bTiAtIDFdWzE1XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggJiAweGZmZmZmZmZmO1xuXG4gIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IE47ICsrX2kyKSB7XG4gICAgdmFyIFcgPSBuZXcgVWludDMyQXJyYXkoODApO1xuXG4gICAgZm9yICh2YXIgdCA9IDA7IHQgPCAxNjsgKyt0KSB7XG4gICAgICBXW3RdID0gTVtfaTJdW3RdO1xuICAgIH1cblxuICAgIGZvciAodmFyIF90ID0gMTY7IF90IDwgODA7ICsrX3QpIHtcbiAgICAgIFdbX3RdID0gUk9UTChXW190IC0gM10gXiBXW190IC0gOF0gXiBXW190IC0gMTRdIF4gV1tfdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgdmFyIGEgPSBIWzBdO1xuICAgIHZhciBiID0gSFsxXTtcbiAgICB2YXIgYyA9IEhbMl07XG4gICAgdmFyIGQgPSBIWzNdO1xuICAgIHZhciBlID0gSFs0XTtcblxuICAgIGZvciAodmFyIF90MiA9IDA7IF90MiA8IDgwOyArK190Mikge1xuICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKF90MiAvIDIwKTtcbiAgICAgIHZhciBUID0gUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbX3QyXSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGExOyIsICJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBzaGExIGZyb20gJy4vc2hhMS5qcyc7XG52YXIgdjUgPSB2MzUoJ3Y1JywgMHg1MCwgc2hhMSk7XG5leHBvcnQgZGVmYXVsdCB2NTsiLCAiZXhwb3J0IGRlZmF1bHQgJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7IiwgImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcblxuZnVuY3Rpb24gdmVyc2lvbih1dWlkKSB7XG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlSW50KHV1aWQuc3Vic3RyKDE0LCAxKSwgMTYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2ZXJzaW9uOyIsICJleHBvcnQgeyBkZWZhdWx0IGFzIHYxIH0gZnJvbSAnLi92MS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHYzIH0gZnJvbSAnLi92My5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHY0IH0gZnJvbSAnLi92NC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHY1IH0gZnJvbSAnLi92NS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5JTCB9IGZyb20gJy4vbmlsLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHZhbGlkYXRlIH0gZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFyc2UgfSBmcm9tICcuL3BhcnNlLmpzJzsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBjb25zdCBURU1QT1JBTF9MQVlFUlNfQ09VTlQgPSAyO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zaW11bGNhc3RUcmFuc2NlaXZlckNvbmZpZyA9IHZvaWQgMDtcbmV4cG9ydHMuc2ltdWxjYXN0VHJhbnNjZWl2ZXJDb25maWcgPSB7XG4gICAgZGlyZWN0aW9uOiBcInNlbmRvbmx5XCIsXG4gICAgLy8ga2VlcCB0aGlzIGFycmF5IGZyb20gbG93IHJlc29sdXRpb24gdG8gaGlnaCByZXNvbHV0aW9uXG4gICAgLy8gaW4gb3RoZXIgY2FzZSBsb3dlciByZXNvbHV0aW9uIGVuY29kaW5nIGNhbiBnZXRcbiAgICAvLyBoaWdoZXIgbWF4X2JpdHJhdGVcbiAgICBzZW5kRW5jb2RpbmdzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJpZDogXCJsXCIsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgLy8gbWF4Qml0cmF0ZTogNF8wMDBfMDAwLFxuICAgICAgICAgICAgc2NhbGVSZXNvbHV0aW9uRG93bkJ5OiA0LjAsXG4gICAgICAgICAgICAvLyAgIHNjYWxhYmlsaXR5TW9kZTogXCJMMVRcIiArIFRFTVBPUkFMX0xBWUVSU19DT1VOVCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmlkOiBcIm1cIixcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBzY2FsZVJlc29sdXRpb25Eb3duQnk6IDIuMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmlkOiBcImhcIixcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBtYXhCaXRyYXRlOiA0XzAwMF8wMDAsXG4gICAgICAgICAgICAvLyBzY2FsYWJpbGl0eU1vZGU6IFwiTDFUXCIgKyBURU1QT1JBTF9MQVlFUlNfQ09VTlQsXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1lbWJyYW5lV2ViUlRDID0gdm9pZCAwO1xuY29uc3QgbWVkaWFFdmVudF8xID0gcmVxdWlyZShcIi4vbWVkaWFFdmVudFwiKTtcbmNvbnN0IHV1aWRfMSA9IHJlcXVpcmUoXCJ1dWlkXCIpO1xuY29uc3QgY29uc3RfMSA9IHJlcXVpcmUoXCIuL2NvbnN0XCIpO1xuLyoqXG4gKiBNYWluIGNsYXNzIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIGNvbm5lY3RpbmcgdG8gdGhlIFJUQyBFbmdpbmUsIHNlbmRpbmcgYW5kIHJlY2VpdmluZyBtZWRpYS5cbiAqL1xuY2xhc3MgTWVtYnJhbmVXZWJSVEMge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLmxvY2FsVHJhY2tzV2l0aFN0cmVhbXMgPSBbXTtcbiAgICAgICAgdGhpcy50cmFja0lkVG9UcmFjayA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5pZFRvUGVlciA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5sb2NhbFBlZXIgPSB7IGlkOiBcIlwiLCBtZXRhZGF0YToge30sIHRyYWNrSWRUb01ldGFkYXRhOiBuZXcgTWFwKCkgfTtcbiAgICAgICAgdGhpcy5sb2NhbFRyYWNrSWRUb1RyYWNrID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLm1pZFRvVHJhY2tJZCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZFRyYWNrRW5jb2RpbmdzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJ0Y0NvbmZpZyA9IHtcbiAgICAgICAgICAgIGljZVNlcnZlcnM6IFtdLFxuICAgICAgICAgICAgaWNlVHJhbnNwb3J0UG9saWN5OiBcInJlbGF5XCIsXG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmllcyB0byBqb2luIHRvIHRoZSBSVEMgRW5naW5lLiBJZiB1c2VyIGlzIGFjY2VwdGVkIHRoZW4ge0BsaW5rIG9uSm9pblN1Y2Nlc3N9XG4gICAgICAgICAqIHdpbGwgYmUgY2FsbGVkLiBJbiBvdGhlciBjYXNlIHtAbGluayBvbkpvaW5FcnJvcn0gaXMgaW52b2tlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHBlZXJNZXRhZGF0YSAtIEFueSBpbmZvcm1hdGlvbiB0aGF0IG90aGVyIHBlZXJzIHdpbGwgcmVjZWl2ZSBpbiB7QGxpbmsgb25QZWVySm9pbmVkfVxuICAgICAgICAgKiBhZnRlciBhY2NlcHRpbmcgdGhpcyBwZWVyXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGBgYHRzXG4gICAgICAgICAqIGxldCB3ZWJydGMgPSBuZXcgTWVtYnJhbmVXZWJSVEMoLi4uKVxuICAgICAgICAgKiB3ZWJydGMuam9pbih7ZGlzcGxheU5hbWU6IFwiQm9iXCJ9KVxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuam9pbiA9IChwZWVyTWV0YWRhdGEpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxQZWVyLm1ldGFkYXRhID0gcGVlck1ldGFkYXRhO1xuICAgICAgICAgICAgICAgIGxldCBtZWRpYUV2ZW50ID0gbWVkaWFFdmVudF8xLmdlbmVyYXRlTWVkaWFFdmVudChcImpvaW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YTogcGVlck1ldGFkYXRhLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lZGlhRXZlbnQobWVkaWFFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHRoaXMuY2FsbGJhY2tzKS5vbkNvbm5lY3Rpb25FcnJvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIGUpO1xuICAgICAgICAgICAgICAgIHRoaXMubGVhdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZlZWRzIG1lZGlhIGV2ZW50IHJlY2VpdmVkIGZyb20gUlRDIEVuZ2luZSB0byB7QGxpbmsgTWVtYnJhbmVXZWJSVEN9LlxuICAgICAgICAgKiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgd2hlbmV2ZXIgc29tZSBtZWRpYSBldmVudCBmcm9tIFJUQyBFbmdpbmVcbiAgICAgICAgICogd2FzIHJlY2VpdmVkIGFuZCBjYW4gcmVzdWx0IGluIHtAbGluayBNZW1icmFuZVdlYlJUQ30gZ2VuZXJhdGluZyBzb21lIG90aGVyXG4gICAgICAgICAqIG1lZGlhIGV2ZW50cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIG1lZGlhRXZlbnQgLSBTdHJpbmcgZGF0YSByZWNlaXZlZCBvdmVyIGN1c3RvbSBzaWduYWxsaW5nIGxheWVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBUaGlzIGV4YW1wbGUgYXNzdW1lcyBwaGVvbml4IGNoYW5uZWxzIGFzIHNpZ25hbGxpbmcgbGF5ZXIuXG4gICAgICAgICAqIEFzIHBob2VuaXggY2hhbm5lbHMgcmVxdWlyZSBvYmplY3RzLCBSVEMgRW5naW5lIGVuY2Fwc3VsYXRlcyBiaW5hcnkgZGF0YSBpbnRvXG4gICAgICAgICAqIG1hcCB3aXRoIG9uZSBmaWVsZCB0aGF0IGlzIGNvbnZlcnRlZCB0byBvYmplY3Qgd2l0aCBvbmUgZmllbGQgb24gdGhlIFRTIHNpZGUuXG4gICAgICAgICAqIGBgYHRzXG4gICAgICAgICAqIHdlYnJ0Y0NoYW5uZWwub24oXCJtZWRpYUV2ZW50XCIsIChldmVudCkgPT4gd2VicnRjLnJlY2VpdmVNZWRpYUV2ZW50KGV2ZW50LmRhdGEpKTtcbiAgICAgICAgICogYGBgXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlY2VpdmVNZWRpYUV2ZW50ID0gKG1lZGlhRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgICAgIGNvbnN0IGRlc2VyaWFsaXplZE1lZGlhRXZlbnQgPSBtZWRpYUV2ZW50XzEuZGVzZXJpYWxpemVNZWRpYUV2ZW50KG1lZGlhRXZlbnQpO1xuICAgICAgICAgICAgc3dpdGNoIChkZXNlcmlhbGl6ZWRNZWRpYUV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicGVlckFjY2VwdGVkXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxQZWVyLmlkID0gZGVzZXJpYWxpemVkTWVkaWFFdmVudC5kYXRhLmlkO1xuICAgICAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmNhbGxiYWNrcykub25Kb2luU3VjY2VzcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIGRlc2VyaWFsaXplZE1lZGlhRXZlbnQuZGF0YS5pZCwgZGVzZXJpYWxpemVkTWVkaWFFdmVudC5kYXRhLnBlZXJzSW5Sb29tKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBlZXJzID0gZGVzZXJpYWxpemVkTWVkaWFFdmVudC5kYXRhLnBlZXJzSW5Sb29tO1xuICAgICAgICAgICAgICAgICAgICBwZWVycy5mb3JFYWNoKChwZWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFBlZXIocGVlcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGVlckRlbmllZFwiOlxuICAgICAgICAgICAgICAgICAgICAoX2QgPSAoX2MgPSB0aGlzLmNhbGxiYWNrcykub25Kb2luRXJyb3IpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5jYWxsKF9jLCBkZXNlcmlhbGl6ZWRNZWRpYUV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbFBlZXIuaWQgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTWVkaWFFdmVudChkZXNlcmlhbGl6ZWRNZWRpYUV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVNZWRpYUV2ZW50ID0gKGRlc2VyaWFsaXplZE1lZGlhRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2gsIF9qLCBfaywgX2wsIF9tLCBfbywgX3AsIF9xLCBfcjtcbiAgICAgICAgICAgIGxldCBwZWVyO1xuICAgICAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgICAgICBzd2l0Y2ggKGRlc2VyaWFsaXplZE1lZGlhRXZlbnQudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJvZmZlckRhdGFcIjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHVyblNlcnZlcnMgPSBkZXNlcmlhbGl6ZWRNZWRpYUV2ZW50LmRhdGEuaW50ZWdyYXRlZFR1cm5TZXJ2ZXJzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFR1cm5zKHR1cm5TZXJ2ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2ZmZXJEYXRhID0gbmV3IE1hcChPYmplY3QuZW50cmllcyhkZXNlcmlhbGl6ZWRNZWRpYUV2ZW50LmRhdGEudHJhY2tzVHlwZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk9mZmVyRGF0YShvZmZlckRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidHJhY2tzQWRkZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGRlc2VyaWFsaXplZE1lZGlhRXZlbnQuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UGVlcklkKCkgPT09IGRhdGEucGVlcklkKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnRyYWNrSWRUb01ldGFkYXRhID0gbmV3IE1hcChPYmplY3QuZW50cmllcyhkYXRhLnRyYWNrSWRUb01ldGFkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIHBlZXIgPSB0aGlzLmlkVG9QZWVyLmdldChkYXRhLnBlZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZFRyYWNrSWRUb01ldGFkYXRhID0gcGVlci50cmFja0lkVG9NZXRhZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgcGVlci50cmFja0lkVG9NZXRhZGF0YSA9IG5ldyBNYXAoWy4uLnBlZXIudHJhY2tJZFRvTWV0YWRhdGEsIC4uLmRhdGEudHJhY2tJZFRvTWV0YWRhdGFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZFRvUGVlci5zZXQocGVlci5pZCwgcGVlcik7XG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20ocGVlci50cmFja0lkVG9NZXRhZGF0YS5lbnRyaWVzKCkpLmZvckVhY2goKFt0cmFja0lkLCBtZXRhZGF0YV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9sZFRyYWNrSWRUb01ldGFkYXRhLmhhcyh0cmFja0lkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWFtOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFjazogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltdWxjYXN0Q29uZmlnOiB7IGVuYWJsZWQ6IGZhbHNlLCBhY3RpdmVfZW5jb2RpbmdzOiBbXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4QmFuZHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFja0lkVG9UcmFjay5zZXQodHJhY2tJZCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmNhbGxiYWNrcykub25UcmFja0FkZGVkKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmFja3NSZW1vdmVkXCI6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBkZXNlcmlhbGl6ZWRNZWRpYUV2ZW50LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlZXJJZCA9IGRhdGEucGVlcklkO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRQZWVySWQoKSA9PT0gZGF0YS5wZWVySWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYWNrSWRzID0gZGF0YS50cmFja0lkcztcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tJZHMuZm9yRWFjaCgodHJhY2tJZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYWNrQ29udGV4dCA9IHRoaXMudHJhY2tJZFRvVHJhY2suZ2V0KHRyYWNrSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5jYWxsYmFja3MpLm9uVHJhY2tSZW1vdmVkKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdHJhY2tDb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJhc2VUcmFjayh0cmFja0lkLCBwZWVySWQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNkcEFuc3dlclwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pZFRvVHJhY2tJZCA9IG5ldyBNYXAoT2JqZWN0LmVudHJpZXMoZGVzZXJpYWxpemVkTWVkaWFFdmVudC5kYXRhLm1pZFRvVHJhY2tJZCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQW5zd2VyKGRlc2VyaWFsaXplZE1lZGlhRXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjYW5kaWRhdGVcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblJlbW90ZUNhbmRpZGF0ZShkZXNlcmlhbGl6ZWRNZWRpYUV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGVlckpvaW5lZFwiOlxuICAgICAgICAgICAgICAgICAgICBwZWVyID0gZGVzZXJpYWxpemVkTWVkaWFFdmVudC5kYXRhLnBlZXI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwZWVyLmlkID09PSB0aGlzLmdldFBlZXJJZCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFBlZXIocGVlcik7XG4gICAgICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHRoaXMuY2FsbGJhY2tzKS5vblBlZXJKb2luZWQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCBwZWVyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBlZXJMZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHBlZXIgPSB0aGlzLmlkVG9QZWVyLmdldChkZXNlcmlhbGl6ZWRNZWRpYUV2ZW50LmRhdGEucGVlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlZXIgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShwZWVyLnRyYWNrSWRUb01ldGFkYXRhLmtleXMoKSkuZm9yRWFjaCgodHJhY2tJZCkgPT4geyB2YXIgX2EsIF9iOyByZXR1cm4gKF9iID0gKF9hID0gdGhpcy5jYWxsYmFja3MpLm9uVHJhY2tSZW1vdmVkKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdGhpcy50cmFja0lkVG9UcmFjay5nZXQodHJhY2tJZCkpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcmFzZVBlZXIocGVlcik7XG4gICAgICAgICAgICAgICAgICAgIChfZCA9IChfYyA9IHRoaXMuY2FsbGJhY2tzKS5vblBlZXJMZWZ0KSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuY2FsbChfYywgcGVlcik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwZWVyVXBkYXRlZFwiOlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRQZWVySWQoKSA9PT0gZGVzZXJpYWxpemVkTWVkaWFFdmVudC5kYXRhLnBlZXJJZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgcGVlciA9IHRoaXMuaWRUb1BlZXIuZ2V0KGRlc2VyaWFsaXplZE1lZGlhRXZlbnQuZGF0YS5wZWVySWQpO1xuICAgICAgICAgICAgICAgICAgICBwZWVyLm1ldGFkYXRhID0gZGVzZXJpYWxpemVkTWVkaWFFdmVudC5kYXRhLm1ldGFkYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFBlZXIocGVlcik7XG4gICAgICAgICAgICAgICAgICAgIChfZiA9IChfZSA9IHRoaXMuY2FsbGJhY2tzKS5vblBlZXJVcGRhdGVkKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuY2FsbChfZSwgcGVlcik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwZWVyUmVtb3ZlZFwiOlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRQZWVySWQoKSAhPT0gZGVzZXJpYWxpemVkTWVkaWFFdmVudC5kYXRhLnBlZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlY2VpdmVkIG9uUmVtb3ZlZCBtZWRpYSBldmVudCwgYnV0IGl0IGRvZXMgbm90IHJlZmVyIHRvIHRoZSBsb2NhbCBwZWVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIChfaCA9IChfZyA9IHRoaXMuY2FsbGJhY2tzKS5vblJlbW92ZWQpID09PSBudWxsIHx8IF9oID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaC5jYWxsKF9nLCBkZXNlcmlhbGl6ZWRNZWRpYUV2ZW50LmRhdGEucmVhc29uKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRyYWNrVXBkYXRlZFwiOlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRQZWVySWQoKSA9PT0gZGVzZXJpYWxpemVkTWVkaWFFdmVudC5kYXRhLnBlZXJJZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgcGVlciA9IHRoaXMuaWRUb1BlZXIuZ2V0KGRlc2VyaWFsaXplZE1lZGlhRXZlbnQuZGF0YS5wZWVySWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGVlciA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgYFBlZXIgd2l0aCBpZDogJHtkZXNlcmlhbGl6ZWRNZWRpYUV2ZW50LmRhdGEucGVlcklkfSBkb2Vzbid0IGV4aXN0YDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhY2tJZCA9IGRlc2VyaWFsaXplZE1lZGlhRXZlbnQuZGF0YS50cmFja0lkO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFja01ldGFkYXRhID0gZGVzZXJpYWxpemVkTWVkaWFFdmVudC5kYXRhLm1ldGFkYXRhO1xuICAgICAgICAgICAgICAgICAgICBwZWVyLnRyYWNrSWRUb01ldGFkYXRhLnNldCh0cmFja0lkLCB0cmFja01ldGFkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhY2tDb250ZXh0ID0gdGhpcy50cmFja0lkVG9UcmFjay5nZXQodHJhY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYWNrQ29udGV4dC5tZXRhZGF0YSA9IHRyYWNrTWV0YWRhdGE7XG4gICAgICAgICAgICAgICAgICAgIChfayA9IChfaiA9IHRoaXMuY2FsbGJhY2tzKS5vblRyYWNrVXBkYXRlZCkgPT09IG51bGwgfHwgX2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9rLmNhbGwoX2osIHRyYWNrQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmFja3NQcmlvcml0eVwiOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmFibGVkVHJhY2tzID0gZGVzZXJpYWxpemVkTWVkaWFFdmVudC5kYXRhLnRyYWNrcy5tYXAoKHRyYWNrSWQpID0+IHRoaXMudHJhY2tJZFRvVHJhY2suZ2V0KHRyYWNrSWQpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzYWJsZWRUcmFja3MgPSBBcnJheS5mcm9tKHRoaXMudHJhY2tJZFRvVHJhY2sudmFsdWVzKCkpLmZpbHRlcigodHJhY2spID0+ICFlbmFibGVkVHJhY2tzLmluY2x1ZGVzKHRyYWNrKSk7XG4gICAgICAgICAgICAgICAgICAgIChfbSA9IChfbCA9IHRoaXMuY2FsbGJhY2tzKS5vblRyYWNrc1ByaW9yaXR5Q2hhbmdlZCkgPT09IG51bGwgfHwgX20gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9tLmNhbGwoX2wsIGVuYWJsZWRUcmFja3MsIGRpc2FibGVkVHJhY2tzKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZW5jb2RpbmdTd2l0Y2hlZFwiOlxuICAgICAgICAgICAgICAgICAgICAoX3AgPSAoX28gPSB0aGlzLmNhbGxiYWNrcykub25UcmFja0VuY29kaW5nQ2hhbmdlZCkgPT09IG51bGwgfHwgX3AgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9wLmNhbGwoX28sIGRlc2VyaWFsaXplZE1lZGlhRXZlbnQuZGF0YS5wZWVySWQsIGRlc2VyaWFsaXplZE1lZGlhRXZlbnQuZGF0YS50cmFja0lkLCBkZXNlcmlhbGl6ZWRNZWRpYUV2ZW50LmRhdGEuZW5jb2RpbmcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiY3VzdG9tXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTWVkaWFFdmVudChkZXNlcmlhbGl6ZWRNZWRpYUV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZXJyb3JcIjpcbiAgICAgICAgICAgICAgICAgICAgKF9yID0gKF9xID0gdGhpcy5jYWxsYmFja3MpLm9uQ29ubmVjdGlvbkVycm9yKSA9PT0gbnVsbCB8fCBfciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3IuY2FsbChfcSwgZGVzZXJpYWxpemVkTWVkaWFFdmVudC5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlJlY2VpdmVkIHVua25vd24gbWVkaWEgZXZlbnQ6IFwiLCBkZXNlcmlhbGl6ZWRNZWRpYUV2ZW50LnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hZGRUcmFja1RvQ29ubmVjdGlvbiA9ICh0cmFja0NvbnRleHQpID0+IHtcbiAgICAgICAgICAgIGxldCB0cmFuc2NlaXZlckNvbmZpZyA9IHRoaXMuY3JlYXRlVHJhbnNjZWl2ZXJDb25maWcodHJhY2tDb250ZXh0KTtcbiAgICAgICAgICAgIGNvbnN0IHRyYWNrID0gdHJhY2tDb250ZXh0LnRyYWNrO1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLmFkZFRyYW5zY2VpdmVyKHRyYWNrLCB0cmFuc2NlaXZlckNvbmZpZyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGVzIHRoZSBtZXRhZGF0YSBmb3IgdGhlIGN1cnJlbnQgcGVlci5cbiAgICAgICAgICogQHBhcmFtIHBlZXJNZXRhZGF0YSAtIERhdGEgYWJvdXQgdGhpcyBwZWVyIHRoYXQgb3RoZXIgcGVlcnMgd2lsbCByZWNlaXZlIHVwb24gam9pbmluZy5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgdGhlIG1ldGFkYXRhIGlzIGRpZmZlcmVudCBmcm9tIHdoYXQgaXMgYWxyZWFkeSB0cmFja2VkIGluIHRoZSByb29tLCB0aGUgb3B0aW9uYWxcbiAgICAgICAgICogY2FsbGJhY2sgYG9uUGVlclVwZGF0ZWRgIHdpbGwgYmUgdHJpZ2dlcmVkIGZvciBvdGhlciBwZWVycyBpbiB0aGUgcm9vbS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudXBkYXRlUGVlck1ldGFkYXRhID0gKHBlZXJNZXRhZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IG1lZGlhRXZlbnQgPSBtZWRpYUV2ZW50XzEuZ2VuZXJhdGVNZWRpYUV2ZW50KFwidXBkYXRlUGVlck1ldGFkYXRhXCIsIHtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YTogcGVlck1ldGFkYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNlbmRNZWRpYUV2ZW50KG1lZGlhRXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlcyB0aGUgbWV0YWRhdGEgZm9yIGEgc3BlY2lmaWMgdHJhY2suXG4gICAgICAgICAqIEBwYXJhbSB0cmFja0lkIC0gdHJhY2tJZCAoZ2VuZXJhdGVkIGluIGFkZFRyYWNrKSBvZiBhdWRpbyBvciB2aWRlbyB0cmFjay5cbiAgICAgICAgICogQHBhcmFtIHRyYWNrTWV0YWRhdGEgLSBEYXRhIGFib3V0IHRoaXMgdHJhY2sgdGhhdCBvdGhlciBwZWVycyB3aWxsIHJlY2VpdmUgdXBvbiBqb2luaW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgbWV0YWRhdGEgaXMgZGlmZmVyZW50IGZyb20gd2hhdCBpcyBhbHJlYWR5IHRyYWNrZWQgaW4gdGhlIHJvb20sIHRoZSBvcHRpb25hbFxuICAgICAgICAgKiBjYWxsYmFjayBgb25UcmFja1VwZGF0ZWRgIHdpbGwgYmUgdHJpZ2dlcmVkIGZvciBvdGhlciBwZWVycyBpbiB0aGUgcm9vbS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudXBkYXRlVHJhY2tNZXRhZGF0YSA9ICh0cmFja0lkLCB0cmFja01ldGFkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmFja0NvbnRleHQgPSB0aGlzLmxvY2FsVHJhY2tJZFRvVHJhY2suZ2V0KHRyYWNrSWQpO1xuICAgICAgICAgICAgdHJhY2tDb250ZXh0Lm1ldGFkYXRhID0gdHJhY2tNZXRhZGF0YTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxUcmFja0lkVG9UcmFjay5zZXQodHJhY2tJZCwgdHJhY2tDb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxQZWVyLnRyYWNrSWRUb01ldGFkYXRhLnNldCh0cmFja0lkLCB0cmFja01ldGFkYXRhKTtcbiAgICAgICAgICAgIGxldCBtZWRpYUV2ZW50ID0gbWVkaWFFdmVudF8xLmdlbmVyYXRlTWVkaWFFdmVudChcInVwZGF0ZVRyYWNrTWV0YWRhdGFcIiwge1xuICAgICAgICAgICAgICAgIHRyYWNrSWQsXG4gICAgICAgICAgICAgICAgdHJhY2tNZXRhZGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZW5kTWVkaWFFdmVudChtZWRpYUV2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRNaWRUb1RyYWNrSWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFRyYWNrTWlkVG9UcmFja0lkID0ge307XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGlvbilcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5nZXRUcmFuc2NlaXZlcnMoKS5mb3JFYWNoKCh0cmFuc2NlaXZlcikgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFRyYWNrSWQgPSAoX2EgPSB0cmFuc2NlaXZlci5zZW5kZXIudHJhY2spID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZDtcbiAgICAgICAgICAgICAgICBjb25zdCBtaWQgPSB0cmFuc2NlaXZlci5taWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhY2tJZHMgPSB0aGlzLmxvY2FsUGVlci50cmFja0lkVG9NZXRhZGF0YS5rZXlzKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhY2tzID0gQXJyYXkuZnJvbSh0cmFja0lkcykubWFwKCh0cmFjaykgPT4gdGhpcy5sb2NhbFRyYWNrSWRUb1RyYWNrLmdldCh0cmFjaykpO1xuICAgICAgICAgICAgICAgIGlmIChsb2NhbFRyYWNrSWQgJiYgbWlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYWNrQ29udGV4dCA9IHRyYWNrcy5maW5kKCh0cmFja0NvbnRleHQpID0+IHRyYWNrQ29udGV4dC50cmFjay5pZCA9PT0gbG9jYWxUcmFja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxUcmFja01pZFRvVHJhY2tJZFttaWRdID0gdHJhY2tDb250ZXh0LnRyYWNrSWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxUcmFja01pZFRvVHJhY2tJZDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExlYXZlcyB0aGUgcm9vbS4gVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIHdoZW4gdXNlciBsZWF2ZXMgdGhlIHJvb21cbiAgICAgICAgICogaW4gYSBjbGVhbiB3YXkgZS5nLiBieSBjbGlja2luZyBhIGRlZGljYXRlZCwgY3VzdG9tIGJ1dHRvbiBgZGlzY29ubmVjdGAuXG4gICAgICAgICAqIEFzIGEgcmVzdWx0IHRoZXJlIHdpbGwgYmUgZ2VuZXJhdGVkIG9uZSBtb3JlIG1lZGlhIGV2ZW50IHRoYXQgc2hvdWxkIGJlXG4gICAgICAgICAqIHNlbnQgdG8gdGhlIFJUQyBFbmdpbmUuIFRoYW5rcyB0byBpdCBlYWNoIG90aGVyIHBlZXIgd2lsbCBiZSBub3RpZmllZFxuICAgICAgICAgKiB0aGF0IHBlZXIgbGVmdCBpbiB7QGxpbmsgb25QZWVyTGVmdH0sXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxlYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1lZGlhRXZlbnQgPSBtZWRpYUV2ZW50XzEuZ2VuZXJhdGVNZWRpYUV2ZW50KFwibGVhdmVcIik7XG4gICAgICAgICAgICB0aGlzLnNlbmRNZWRpYUV2ZW50KG1lZGlhRXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5jbGVhblVwKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhbnMgdXAge0BsaW5rIE1lbWJyYW5lV2ViUlRDfSBpbnN0YW5jZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2xlYW5VcCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub25pY2VjYW5kaWRhdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbnRyYWNrID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9jYWxUcmFja3NXaXRoU3RyZWFtcy5mb3JFYWNoKCh7IHRyYWNrIH0pID0+IHRyYWNrLnN0b3AoKSk7XG4gICAgICAgICAgICB0aGlzLmxvY2FsVHJhY2tzV2l0aFN0cmVhbXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZW5kTWVkaWFFdmVudCA9IChtZWRpYUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5vblNlbmRNZWRpYUV2ZW50KG1lZGlhRXZlbnRfMS5zZXJpYWxpemVNZWRpYUV2ZW50KG1lZGlhRXZlbnQpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkFuc3dlciA9IGFzeW5jIChhbnN3ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbnRyYWNrID0gdGhpcy5vblRyYWNrKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29ubmVjdGlvbi5zZXRSZW1vdGVEZXNjcmlwdGlvbihhbnN3ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRUcmFja0VuY29kaW5ncy5mb3JFYWNoKChlbmNvZGluZ3MsIHRyYWNrSWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RpbmdzLmZvckVhY2goKGVuY29kaW5nKSA9PiB0aGlzLmRpc2FibGVUcmFja0VuY29kaW5nKHRyYWNrSWQsIGVuY29kaW5nKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hZGRUcmFuc2NlaXZlcnNJZk5lZWRlZCA9IChzZXJ2ZXJUcmFja3MpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IHJlY3ZUcmFuc2NlaXZlcnMgPSB0aGlzLmNvbm5lY3Rpb24uZ2V0VHJhbnNjZWl2ZXJzKCkuZmlsdGVyKChlbGVtKSA9PiBlbGVtLmRpcmVjdGlvbiA9PT0gXCJyZWN2b25seVwiKTtcbiAgICAgICAgICAgIGxldCB0b0FkZCA9IFtdO1xuICAgICAgICAgICAgY29uc3QgZ2V0TmVlZGVkVHJhbnNjZWl2ZXJzVHlwZXMgPSAodHlwZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0eXBlTnVtYmVyID0gc2VydmVyVHJhY2tzLmdldCh0eXBlKTtcbiAgICAgICAgICAgICAgICB0eXBlTnVtYmVyID0gdHlwZU51bWJlciAhPT0gdW5kZWZpbmVkID8gdHlwZU51bWJlciA6IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZVRyYW5zY2VpdmVyc051bWJlciA9IHJlY3ZUcmFuc2NlaXZlcnMuZmlsdGVyKChlbGVtKSA9PiBlbGVtLnJlY2VpdmVyLnRyYWNrLmtpbmQgPT09IHR5cGUpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkodHlwZU51bWJlciAtIHR5cGVUcmFuc2NlaXZlcnNOdW1iZXIpLmZpbGwodHlwZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBnZXROZWVkZWRUcmFuc2NlaXZlcnNUeXBlcyhcImF1ZGlvXCIpO1xuICAgICAgICAgICAgY29uc3QgdmlkZW8gPSBnZXROZWVkZWRUcmFuc2NlaXZlcnNUeXBlcyhcInZpZGVvXCIpO1xuICAgICAgICAgICAgdG9BZGQgPSB0b0FkZC5jb25jYXQoYXVkaW8pO1xuICAgICAgICAgICAgdG9BZGQgPSB0b0FkZC5jb25jYXQodmlkZW8pO1xuICAgICAgICAgICAgZm9yIChsZXQga2luZCBvZiB0b0FkZClcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbm5lY3Rpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRUcmFuc2NlaXZlcihraW5kLCB7IGRpcmVjdGlvbjogXCJyZWN2b25seVwiIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldFRyYWNrSWRUb01ldGFkYXRhID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJhY2tJZFRvTWV0YWRhdGEgPSB7fTtcbiAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy5sb2NhbFBlZXIudHJhY2tJZFRvTWV0YWRhdGEuZW50cmllcygpKS5mb3JFYWNoKChbdHJhY2tJZCwgbWV0YWRhdGFdKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJhY2tJZFRvTWV0YWRhdGFbdHJhY2tJZF0gPSBtZXRhZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRyYWNrSWRUb01ldGFkYXRhO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNoZWNrSWZUcmFja0JlbG9uZ1RvUGVlciA9ICh0cmFja0lkLCBwZWVyKSA9PiBBcnJheS5mcm9tKHBlZXIudHJhY2tJZFRvTWV0YWRhdGEua2V5cygpKS5zb21lKCh0cmFjaykgPT4gdHJhY2tJZC5zdGFydHNXaXRoKHRyYWNrKSk7XG4gICAgICAgIHRoaXMub25PZmZlckRhdGEgPSBhc3luYyAob2ZmZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbih0aGlzLnJ0Y0NvbmZpZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLm9uaWNlY2FuZGlkYXRlID0gdGhpcy5vbkxvY2FsQ2FuZGlkYXRlKCk7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLmxvY2FsVHJhY2tJZFRvVHJhY2sudmFsdWVzKCkpLmZvckVhY2goKHRyYWNrQ29udGV4dCkgPT4gdGhpcy5hZGRUcmFja1RvQ29ubmVjdGlvbih0cmFja0NvbnRleHQpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgLmdldFRyYW5zY2VpdmVycygpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKCh0cmFuc2NlaXZlcikgPT4gKHRyYW5zY2VpdmVyLmRpcmVjdGlvbiA9IFwic2VuZG9ubHlcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jb25uZWN0aW9uLnJlc3RhcnRJY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRkVHJhbnNjZWl2ZXJzSWZOZWVkZWQob2ZmZXJEYXRhKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlQW5kU2VuZE9mZmVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25SZW1vdGVDYW5kaWRhdGUgPSAoY2FuZGlkYXRlKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGljZUNhbmRpZGF0ZSA9IG5ldyBSVENJY2VDYW5kaWRhdGUoY2FuZGlkYXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWNlaXZlZCBuZXcgcmVtb3RlIGNhbmRpZGF0ZSBidXQgUlRDQ29ubmVjdGlvbiBpcyB1bmRlZmluZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5hZGRJY2VDYW5kaWRhdGUoaWNlQ2FuZGlkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uTG9jYWxDYW5kaWRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmNhbmRpZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWVkaWFFdmVudCA9IG1lZGlhRXZlbnRfMS5nZW5lcmF0ZUN1c3RvbUV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2FuZGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuZGlkYXRlOiBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNkcE1MaW5lSW5kZXg6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lZGlhRXZlbnQobWVkaWFFdmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vblRyYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgY29uc3QgW3N0cmVhbV0gPSBldmVudC5zdHJlYW1zO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pZCA9IGV2ZW50LnRyYW5zY2VpdmVyLm1pZDtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFja0lkID0gdGhpcy5taWRUb1RyYWNrSWQuZ2V0KG1pZCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tJZlRyYWNrQmVsb25nVG9QZWVyKHRyYWNrSWQsIHRoaXMubG9jYWxQZWVyKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlZXIgPSBBcnJheS5mcm9tKHRoaXMuaWRUb1BlZXIudmFsdWVzKCkpLmZpbHRlcigocGVlcikgPT4gdGhpcy5jaGVja0lmVHJhY2tCZWxvbmdUb1BlZXIodHJhY2tJZCwgcGVlcikpWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0gcGVlci50cmFja0lkVG9NZXRhZGF0YS5nZXQodHJhY2tJZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhY2tDb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgICAgICBzdHJlYW0sXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrOiBldmVudC50cmFjayxcbiAgICAgICAgICAgICAgICAgICAgcGVlcjogcGVlcixcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHNpbXVsY2FzdENvbmZpZzogeyBlbmFibGVkOiBmYWxzZSwgYWN0aXZlX2VuY29kaW5nczogW10gfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMudHJhY2tJZFRvVHJhY2suc2V0KHRyYWNrSWQsIHRyYWNrQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5jYWxsYmFja3MpLm9uVHJhY2tSZWFkeSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHRyYWNrQ29udGV4dCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFR1cm5zID0gKHR1cm5TZXJ2ZXJzKSA9PiB7XG4gICAgICAgICAgICB0dXJuU2VydmVycy5mb3JFYWNoKCh0dXJuU2VydmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zcG9ydCwgdXJpO1xuICAgICAgICAgICAgICAgIGlmICh0dXJuU2VydmVyLnRyYW5zcG9ydCA9PSBcInRsc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydCA9IFwidGNwXCI7XG4gICAgICAgICAgICAgICAgICAgIHVyaSA9IFwidHVybnNcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydCA9IHR1cm5TZXJ2ZXIudHJhbnNwb3J0O1xuICAgICAgICAgICAgICAgICAgICB1cmkgPSBcInR1cm5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcnRjSWNlU2VydmVyID0ge1xuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsOiB0dXJuU2VydmVyLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsVHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICB1cmxzOiB1cmkuY29uY2F0KFwiOlwiLCB0dXJuU2VydmVyLnNlcnZlckFkZHIsIFwiOlwiLCB0dXJuU2VydmVyLnNlcnZlclBvcnQsIFwiP3RyYW5zcG9ydD1cIiwgdHJhbnNwb3J0KSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHR1cm5TZXJ2ZXIudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnJ0Y0NvbmZpZy5pY2VTZXJ2ZXJzLnB1c2gocnRjSWNlU2VydmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFkZFBlZXIgPSAocGVlcikgPT4ge1xuICAgICAgICAgICAgLy8gI1RPRE8gcmVtb3ZlIHRoaXMgbGluZSBhZnRlciBmaXhpbmcgZGVzZXJpYWxpemF0aW9uXG4gICAgICAgICAgICBpZiAocGVlci5oYXNPd25Qcm9wZXJ0eShcInRyYWNrSWRUb01ldGFkYXRhXCIpKVxuICAgICAgICAgICAgICAgIHBlZXIudHJhY2tJZFRvTWV0YWRhdGEgPSBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKHBlZXIudHJhY2tJZFRvTWV0YWRhdGEpKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBwZWVyLnRyYWNrSWRUb01ldGFkYXRhID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgdGhpcy5pZFRvUGVlci5zZXQocGVlci5pZCwgcGVlcik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZXJhc2VQZWVyID0gKHBlZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYWNrc0lkID0gQXJyYXkuZnJvbShwZWVyLnRyYWNrSWRUb01ldGFkYXRhLmtleXMoKSk7XG4gICAgICAgICAgICB0cmFja3NJZC5mb3JFYWNoKCh0cmFja0lkKSA9PiB0aGlzLnRyYWNrSWRUb1RyYWNrLmRlbGV0ZSh0cmFja0lkKSk7XG4gICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMubWlkVG9UcmFja0lkLmVudHJpZXMoKSkuZm9yRWFjaCgoW21pZCwgdHJhY2tJZF0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHJhY2tzSWQuaW5jbHVkZXModHJhY2tJZCkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWlkVG9UcmFja0lkLmRlbGV0ZShtaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmlkVG9QZWVyLmRlbGV0ZShwZWVyLmlkKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lcmFzZVRyYWNrID0gKHRyYWNrSWQsIHBlZXJJZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmFja0lkVG9UcmFjay5kZWxldGUodHJhY2tJZCk7XG4gICAgICAgICAgICBjb25zdCBtaWRUb1RyYWNrSWQgPSBBcnJheS5mcm9tKHRoaXMubWlkVG9UcmFja0lkLmVudHJpZXMoKSk7XG4gICAgICAgICAgICBjb25zdCBbbWlkLCBfdHJhY2tJZF0gPSBtaWRUb1RyYWNrSWQuZmluZCgoW21pZCwgbWFwVHJhY2tJZF0pID0+IG1hcFRyYWNrSWQgPT09IHRyYWNrSWQpO1xuICAgICAgICAgICAgdGhpcy5taWRUb1RyYWNrSWQuZGVsZXRlKG1pZCk7XG4gICAgICAgICAgICB0aGlzLmlkVG9QZWVyLmdldChwZWVySWQpLnRyYWNrSWRUb01ldGFkYXRhLmRlbGV0ZSh0cmFja0lkKTtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRUcmFja0VuY29kaW5ncy5kZWxldGUodHJhY2tJZCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0UGVlcklkID0gKCkgPT4gdGhpcy5sb2NhbFBlZXIuaWQ7XG4gICAgICAgIGNvbnN0IHsgY2FsbGJhY2tzIH0gPSBjb25maWc7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIHRyYWNrIHRoYXQgd2lsbCBiZSBzZW50IHRvIHRoZSBSVEMgRW5naW5lLlxuICAgICAqIEBwYXJhbSB0cmFjayAtIEF1ZGlvIG9yIHZpZGVvIHRyYWNrIGUuZy4gZnJvbSB5b3VyIG1pY3JvcGhvbmUgb3IgY2FtZXJhLlxuICAgICAqIEBwYXJhbSBzdHJlYW0gIC0gU3RyZWFtIHRoYXQgdGhpcyB0cmFjayBiZWxvbmdzIHRvLlxuICAgICAqIEBwYXJhbSB0cmFja01ldGFkYXRhIC0gQW55IGluZm9ybWF0aW9uIGFib3V0IHRoaXMgdHJhY2sgdGhhdCBvdGhlciBwZWVycyB3aWxsXG4gICAgICogcmVjZWl2ZSBpbiB7QGxpbmsgb25QZWVySm9pbmVkfS4gRS5nLiB0aGlzIGNhbiBzb3VyY2Ugb2YgdGhlIHRyYWNrIC0gd2hlYXRoZXIgaXQnc1xuICAgICAqIHNjcmVlbnNoYXJpbmcsIHdlYmNhbSBvciBzb21lIG90aGVyIG1lZGlhIGRldmljZS5cbiAgICAgKiBAcGFyYW0gc2ltdWxjYXN0Q29uZmlnIC0gU2ltdWxjYXN0IGNvbmZpZ3VyYXRpb24uIEJ5IGRlZmF1bHQgc2ltdWxjYXN0IGlzIGRpc2FibGVkLlxuICAgICAqIEZvciBtb3JlIGluZm9ybWF0aW9uIHJlZmVyIHRvIHtAbGluayBTaW11bGNhc3RDb25maWd9LlxuICAgICAqIEBwYXJhbSBtYXhCYW5kd2lkdGggLSBtYXhpbWFsIGJhbmR3aWR0aCB0aGlzIHRyYWNrIGNhbiB1c2UuXG4gICAgICogRGVmYXVsdHMgdG8gMCB3aGljaCBpcyB1bmxpbWl0ZWQuXG4gICAgICogVGhpcyBvcHRpb24gaGFzIG5vIGVmZmVjdCBmb3Igc2ltdWxjYXN0IGFuZCBhdWRpbyB0cmFja3MuXG4gICAgICogRm9yIHNpbXVsY2FzdCB0cmFja3MgdXNlIGB7QGxpbmsgc2V0VHJhY2tCYW5kd2lkdGh9LlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgaWQgb2YgYWRkZWQgdHJhY2tcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGBgYHRzXG4gICAgICogbGV0IGxvY2FsU3RyZWFtOiBNZWRpYVN0cmVhbSA9IG5ldyBNZWRpYVN0cmVhbSgpO1xuICAgICAqIHRyeSB7XG4gICAgICogICBsb2NhbEF1ZGlvU3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoXG4gICAgICogICAgIEFVRElPX0NPTlNUUkFJTlRTXG4gICAgICogICApO1xuICAgICAqICAgbG9jYWxBdWRpb1N0cmVhbVxuICAgICAqICAgICAuZ2V0VHJhY2tzKClcbiAgICAgKiAgICAgLmZvckVhY2goKHRyYWNrKSA9PiBsb2NhbFN0cmVhbS5hZGRUcmFjayh0cmFjaykpO1xuICAgICAqIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICogICBjb25zb2xlLmVycm9yKFwiQ291bGRuJ3QgZ2V0IG1pY3JvcGhvbmUgcGVybWlzc2lvbjpcIiwgZXJyb3IpO1xuICAgICAqIH1cbiAgICAgKlxuICAgICAqIHRyeSB7XG4gICAgICogICBsb2NhbFZpZGVvU3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoXG4gICAgICogICAgIFZJREVPX0NPTlNUUkFJTlRTXG4gICAgICogICApO1xuICAgICAqICAgbG9jYWxWaWRlb1N0cmVhbVxuICAgICAqICAgICAuZ2V0VHJhY2tzKClcbiAgICAgKiAgICAgLmZvckVhY2goKHRyYWNrKSA9PiBsb2NhbFN0cmVhbS5hZGRUcmFjayh0cmFjaykpO1xuICAgICAqIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICogIGNvbnNvbGUuZXJyb3IoXCJDb3VsZG4ndCBnZXQgY2FtZXJhIHBlcm1pc3Npb246XCIsIGVycm9yKTtcbiAgICAgKiB9XG4gICAgICpcbiAgICAgKiBsb2NhbFN0cmVhbVxuICAgICAqICAuZ2V0VHJhY2tzKClcbiAgICAgKiAgLmZvckVhY2goKHRyYWNrKSA9PiB3ZWJydGMuYWRkVHJhY2sodHJhY2ssIGxvY2FsU3RyZWFtKSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgYWRkVHJhY2sodHJhY2ssIHN0cmVhbSwgdHJhY2tNZXRhZGF0YSA9IG5ldyBNYXAoKSwgc2ltdWxjYXN0Q29uZmlnID0geyBlbmFibGVkOiBmYWxzZSwgYWN0aXZlX2VuY29kaW5nczogW10gfSwgbWF4QmFuZHdpZHRoID0gMCAvLyB1bmxpbWl0ZWQgYmFuZHdpZHRoXG4gICAgKSB7XG4gICAgICAgIGlmICh0aGlzLmdldFBlZXJJZCgpID09PSBcIlwiKVxuICAgICAgICAgICAgdGhyb3cgXCJDYW5ub3QgYWRkIHRyYWNrcyBiZWZvcmUgYmVpbmcgYWNjZXB0ZWQgYnkgdGhlIHNlcnZlclwiO1xuICAgICAgICBjb25zdCB0cmFja0lkID0gdGhpcy5nZXRUcmFja0lkKHV1aWRfMS52NCgpKTtcbiAgICAgICAgdGhpcy5sb2NhbFRyYWNrc1dpdGhTdHJlYW1zLnB1c2goeyB0cmFjaywgc3RyZWFtIH0pO1xuICAgICAgICB0aGlzLmxvY2FsUGVlci50cmFja0lkVG9NZXRhZGF0YS5zZXQodHJhY2tJZCwgdHJhY2tNZXRhZGF0YSk7XG4gICAgICAgIGNvbnN0IHRyYWNrQ29udGV4dCA9IHtcbiAgICAgICAgICAgIHRyYWNrLFxuICAgICAgICAgICAgc3RyZWFtLFxuICAgICAgICAgICAgdHJhY2tJZCxcbiAgICAgICAgICAgIHBlZXI6IHRoaXMubG9jYWxQZWVyLFxuICAgICAgICAgICAgbWV0YWRhdGE6IHRyYWNrTWV0YWRhdGEsXG4gICAgICAgICAgICBzaW11bGNhc3RDb25maWcsXG4gICAgICAgICAgICBtYXhCYW5kd2lkdGgsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubG9jYWxUcmFja0lkVG9UcmFjay5zZXQodHJhY2tJZCwgdHJhY2tDb250ZXh0KTtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hZGRUcmFja1RvQ29ubmVjdGlvbih0cmFja0NvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uXG4gICAgICAgICAgICAgICAgLmdldFRyYW5zY2VpdmVycygpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKHRyYW5zY2VpdmVyKSA9PiAodHJhbnNjZWl2ZXIuZGlyZWN0aW9uID1cbiAgICAgICAgICAgICAgICB0cmFuc2NlaXZlci5kaXJlY3Rpb24gPT09IFwic2VuZHJlY3ZcIiA/IFwic2VuZG9ubHlcIiA6IHRyYW5zY2VpdmVyLmRpcmVjdGlvbikpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtZWRpYUV2ZW50ID0gbWVkaWFFdmVudF8xLmdlbmVyYXRlQ3VzdG9tRXZlbnQoeyB0eXBlOiBcInJlbmVnb3RpYXRlVHJhY2tzXCIgfSk7XG4gICAgICAgIHRoaXMuc2VuZE1lZGlhRXZlbnQobWVkaWFFdmVudCk7XG4gICAgICAgIHJldHVybiB0cmFja0lkO1xuICAgIH1cbiAgICBjcmVhdGVUcmFuc2NlaXZlckNvbmZpZyh0cmFja0NvbnRleHQpIHtcbiAgICAgICAgbGV0IHRyYW5zY2VpdmVyQ29uZmlnO1xuICAgICAgICBpZiAodHJhY2tDb250ZXh0LnRyYWNrLmtpbmQgPT09IFwiYXVkaW9cIikge1xuICAgICAgICAgICAgdHJhbnNjZWl2ZXJDb25maWcgPSB0aGlzLmNyZWF0ZUF1ZGlvVHJhbnNjZWl2ZXJDb25maWcodHJhY2tDb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyQ29uZmlnID0gdGhpcy5jcmVhdGVWaWRlb1RyYW5zY2VpdmVyQ29uZmlnKHRyYWNrQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyYW5zY2VpdmVyQ29uZmlnO1xuICAgIH1cbiAgICBjcmVhdGVBdWRpb1RyYW5zY2VpdmVyQ29uZmlnKF90cmFja0NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHsgZGlyZWN0aW9uOiBcInNlbmRvbmx5XCIgfTtcbiAgICB9XG4gICAgY3JlYXRlVmlkZW9UcmFuc2NlaXZlckNvbmZpZyh0cmFja0NvbnRleHQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBsZXQgdHJhbnNjZWl2ZXJDb25maWc7XG4gICAgICAgIGlmICh0cmFja0NvbnRleHQuc2ltdWxjYXN0Q29uZmlnLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyQ29uZmlnID0gY29uc3RfMS5zaW11bGNhc3RUcmFuc2NlaXZlckNvbmZpZztcbiAgICAgICAgICAgIGxldCB0cmFja0FjdGl2ZUVuY29kaW5ncyA9IHRyYWNrQ29udGV4dC5zaW11bGNhc3RDb25maWcuYWN0aXZlX2VuY29kaW5ncztcbiAgICAgICAgICAgIGxldCBkaXNhYmxlZFRyYWNrRW5jb2RpbmdzID0gW107XG4gICAgICAgICAgICAoX2EgPSB0cmFuc2NlaXZlckNvbmZpZy5zZW5kRW5jb2RpbmdzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoZW5jb2RpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHJhY2tBY3RpdmVFbmNvZGluZ3MuaW5jbHVkZXMoZW5jb2RpbmcucmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBlbmNvZGluZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRUcmFja0VuY29kaW5ncy5wdXNoKGVuY29kaW5nLnJpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkVHJhY2tFbmNvZGluZ3Muc2V0KHRyYWNrQ29udGV4dC50cmFja0lkLCBkaXNhYmxlZFRyYWNrRW5jb2RpbmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJzZW5kb25seVwiLFxuICAgICAgICAgICAgICAgIHNlbmRFbmNvZGluZ3M6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFja0NvbnRleHQubWF4QmFuZHdpZHRoICYmIHRyYW5zY2VpdmVyQ29uZmlnLnNlbmRFbmNvZGluZ3MpXG4gICAgICAgICAgICB0aGlzLmFwcGx5QmFuZHdpZHRoTGltaXRhdGlvbih0cmFuc2NlaXZlckNvbmZpZy5zZW5kRW5jb2RpbmdzLCB0cmFja0NvbnRleHQubWF4QmFuZHdpZHRoKTtcbiAgICAgICAgcmV0dXJuIHRyYW5zY2VpdmVyQ29uZmlnO1xuICAgIH1cbiAgICBhcHBseUJhbmR3aWR0aExpbWl0YXRpb24oZW5jb2RpbmdzLCBtYXhfYmFuZHdpZHRoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWF4X2JhbmR3aWR0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgLy8gbm9uLXNpbXVsY2FzdCBsaW1pdGF0aW9uXG4gICAgICAgICAgICB0aGlzLnNwbGl0QmFuZHdpZHRoKGVuY29kaW5ncywgbWF4X2JhbmR3aWR0aCAqIDEwMjQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gc2ltdWxjYXN0IGJhbmR3aWR0aCBsaW1pdFxuICAgICAgICAgICAgZW5jb2RpbmdzLmZpbHRlcihlbmNvZGluZyA9PiBlbmNvZGluZy5yaWQpLmZvckVhY2goZW5jb2RpbmcgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbWl0ID0gbWF4X2JhbmR3aWR0aC5nZXQoZW5jb2RpbmcucmlkKSB8fCAwO1xuICAgICAgICAgICAgICAgIGlmIChsaW1pdCA+IDApXG4gICAgICAgICAgICAgICAgICAgIGVuY29kaW5nLm1heEJpdHJhdGUgPSBsaW1pdCAqIDEwMjQ7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZW5jb2RpbmcubWF4Qml0cmF0ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNwbGl0QmFuZHdpZHRoKGVuY29kaW5ncywgYmFuZHdpZHRoKSB7XG4gICAgICAgIGlmIChiYW5kd2lkdGggPT09IDApIHtcbiAgICAgICAgICAgIGVuY29kaW5ncy5mb3JFYWNoKGVuY29kaW5nID0+IGRlbGV0ZSBlbmNvZGluZy5tYXhCaXRyYXRlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW5jb2RpbmdzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAvLyBUaGlzIG1vc3QgbGlrZWx5IGlzIGEgcmFjZSBjb25kaXRpb24uIExvZyBhbiBlcnJvciBhbmQgcHJldmVudCBjYXRhc3Ryb3BoaWMgZmFpbHVyZVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkF0dGVtcHRlZCB0byBsaW1pdCBiYW5kd2lkdGggb2YgdGhlIHRyYWNrIHRoYXQgZG9lc24ndCBoYXZlIGFueSBlbmNvZGluZ3NcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgYXJlIHNvbHZpbmcgdGhlIGZvbGxvd2luZyBlcXVhdGlvbjpcbiAgICAgICAgLy8geCArIChrMC9rMSleMiAqIHggKyAoazAvazIpXjIgKiB4ICsgLi4uICsgKGswL2tuKV4yICogeCA9IGJhbmR3aWR0aFxuICAgICAgICAvLyB3aGVyZSB4IGlzIHRoZSBiaXRyYXRlIGZvciB0aGUgZmlyc3QgZW5jb2RpbmcsIGtuIGFyZSBzY2FsZVJlc29sdXRpb25Eb3duQnkgZmFjdG9yc1xuICAgICAgICAvLyBzcXVhcmUgaXMgZGljdGF0ZWQgYnkgdGhlIGZhY3QgdGhhdCBrMC9rbiBpcyBhIHNjYWxlIGZhY3RvciwgYnV0IHdlIGFyZSBpbnRlcmVzdGVkIGluIHRoZSB0b3RhbCBudW1iZXIgb2YgcGl4ZWxzIGluIHRoZSBpbWFnZVxuICAgICAgICBjb25zdCBmaXJzdFNjYWxlRG93bkJ5ID0gZW5jb2RpbmdzWzBdLnNjYWxlUmVzb2x1dGlvbkRvd25CeSB8fCAxO1xuICAgICAgICBjb25zdCBiaXRyYXRlX3BhcnRzID0gZW5jb2RpbmdzLnJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4gYWNjICsgKGZpcnN0U2NhbGVEb3duQnkgLyAodmFsdWUuc2NhbGVSZXNvbHV0aW9uRG93bkJ5IHx8IDEpKSAqKiAyLCAwKTtcbiAgICAgICAgY29uc3QgeCA9IGJhbmR3aWR0aCAvIGJpdHJhdGVfcGFydHM7XG4gICAgICAgIGVuY29kaW5ncy5mb3JFYWNoKCh2YWx1ZSkgPT4gKHZhbHVlLm1heEJpdHJhdGUgPSB4ICogKGZpcnN0U2NhbGVEb3duQnkgLyAodmFsdWUuc2NhbGVSZXNvbHV0aW9uRG93bkJ5IHx8IDEpKSAqKiAyKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIGEgdHJhY2sgdGhhdCBpcyBiZWluZyBzZW50IHRvIHRoZSBSVEMgRW5naW5lLlxuICAgICAqIEBwYXJhbSB0cmFjayAtIEF1ZGlvIG9yIHZpZGVvIHRyYWNrLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFja0lkIC0gSWQgb2YgYXVkaW8gb3IgdmlkZW8gdHJhY2sgdG8gcmVwbGFjZS5cbiAgICAgKiBAcGFyYW0ge01lZGlhU3RyZWFtVHJhY2t9IG5ld1RyYWNrXG4gICAgICogQHBhcmFtIHthbnl9IFtuZXdNZXRhZGF0YV0gLSBPcHRpb25hbCB0cmFjayBtZXRhZGF0YSB0byBhcHBseSB0byB0aGUgbmV3IHRyYWNrLiBJZiBub1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2sgbWV0YWRhdGEgaXMgcGFzc2VkLCB0aGUgb2xkIHRyYWNrIG1ldGFkYXRhIGlzIHJldGFpbmVkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBzdWNjZXNzXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGB0c1xuICAgICAqIC8vIHNldHVwIGNhbWVyYVxuICAgICAqIGxldCBsb2NhbFN0cmVhbTogTWVkaWFTdHJlYW0gPSBuZXcgTWVkaWFTdHJlYW0oKTtcbiAgICAgKiB0cnkge1xuICAgICAqICAgbG9jYWxWaWRlb1N0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKFxuICAgICAqICAgICBWSURFT19DT05TVFJBSU5UU1xuICAgICAqICAgKTtcbiAgICAgKiAgIGxvY2FsVmlkZW9TdHJlYW1cbiAgICAgKiAgICAgLmdldFRyYWNrcygpXG4gICAgICogICAgIC5mb3JFYWNoKCh0cmFjaykgPT4gbG9jYWxTdHJlYW0uYWRkVHJhY2sodHJhY2spKTtcbiAgICAgKiB9IGNhdGNoIChlcnJvcikge1xuICAgICAqICAgY29uc29sZS5lcnJvcihcIkNvdWxkbid0IGdldCBjYW1lcmEgcGVybWlzc2lvbjpcIiwgZXJyb3IpO1xuICAgICAqIH1cbiAgICAgKiBsZXQgb2xkVHJhY2tJZDtcbiAgICAgKiBsb2NhbFN0cmVhbVxuICAgICAqICAuZ2V0VHJhY2tzKClcbiAgICAgKiAgLmZvckVhY2goKHRyYWNrKSA9PiB0cmFja0lkID0gd2VicnRjLmFkZFRyYWNrKHRyYWNrLCBsb2NhbFN0cmVhbSkpO1xuICAgICAqXG4gICAgICogLy8gY2hhbmdlIGNhbWVyYVxuICAgICAqIGNvbnN0IG9sZFRyYWNrID0gbG9jYWxTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXTtcbiAgICAgKiBsZXQgdmlkZW9EZXZpY2VJZCA9IFwiYWJjZC0xMjM0XCI7XG4gICAgICogbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAqICAgICAgdmlkZW86IHtcbiAgICAgKiAgICAgICAgLi4uKFZJREVPX0NPTlNUUkFJTlRTIGFzIHt9KSxcbiAgICAgKiAgICAgICAgZGV2aWNlSWQ6IHtcbiAgICAgKiAgICAgICAgICBleGFjdDogdmlkZW9EZXZpY2VJZCxcbiAgICAgKiAgICAgICAgfSxcbiAgICAgKiAgICAgIH1cbiAgICAgKiAgIH0pXG4gICAgICogICAudGhlbigoc3RyZWFtKSA9PiB7XG4gICAgICogICAgIGxldCB2aWRlb1RyYWNrID0gc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF07XG4gICAgICogICAgIHdlYnJ0Yy5yZXBsYWNlVHJhY2sob2xkVHJhY2tJZCwgdmlkZW9UcmFjayk7XG4gICAgICogICB9KVxuICAgICAqICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAqICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzd2l0Y2hpbmcgY2FtZXJhJywgZXJyb3IpO1xuICAgICAqICAgfSlcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBhc3luYyByZXBsYWNlVHJhY2sodHJhY2tJZCwgbmV3VHJhY2ssIG5ld1RyYWNrTWV0YWRhdGEpIHtcbiAgICAgICAgY29uc3QgdHJhY2tDb250ZXh0ID0gdGhpcy5sb2NhbFRyYWNrSWRUb1RyYWNrLmdldCh0cmFja0lkKTtcbiAgICAgICAgY29uc3Qgc2VuZGVyID0gdGhpcy5maW5kU2VuZGVyKHRyYWNrQ29udGV4dC50cmFjay5pZCk7XG4gICAgICAgIGlmIChzZW5kZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBzZW5kZXJcbiAgICAgICAgICAgICAgICAucmVwbGFjZVRyYWNrKG5ld1RyYWNrKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFja01ldGFkYXRhID0gbmV3VHJhY2tNZXRhZGF0YSB8fCB0aGlzLmxvY2FsVHJhY2tJZFRvVHJhY2suZ2V0KHRyYWNrSWQpLm1ldGFkYXRhO1xuICAgICAgICAgICAgICAgIHRyYWNrQ29udGV4dC50cmFjayA9IG5ld1RyYWNrO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVHJhY2tNZXRhZGF0YSh0cmFja0lkLCB0cmFja01ldGFkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgbWF4aW11bSBiYW5kd2lkdGggZm9yIHRoZSB0cmFjayBpZGVudGlmaWVkIGJ5IHRyYWNrSWQuXG4gICAgICogVGhpcyB2YWx1ZSBkaXJlY3RseSB0cmFuc2xhdGVzIHRvIHF1YWxpdHkgb2YgdGhlIHN0cmVhbSBhbmQsIGluIGNhc2Ugb2YgdmlkZW8sIHRvIHRoZSBhbW91bnQgb2YgUlRQIHBhY2tldHMgYmVpbmcgc2VudC5cbiAgICAgKiBJbiBjYXNlIHRyYWNrSWQgcG9pbnRzIGF0IHRoZSBzaW11bGNhc3QgdHJhY2sgYmFuZHdpZHRoIGlzIHNwbGl0IGJldHdlZW4gYWxsIG9mIHRoZSB2YXJpYW50IHN0cmVhbXMgcHJvcG9ydGlvbmFsbHkgdG8gdGhlaXIgcmVzb2x1dGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFja0lkXG4gICAgICogQHBhcmFtIHtCYW5kd2lkdGhMaW1pdH0gYmFuZHdpZHRoIGluIGticHNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gc3VjY2Vzc1xuICAgICAqL1xuICAgIHNldFRyYWNrQmFuZHdpZHRoKHRyYWNrSWQsIGJhbmR3aWR0aCkge1xuICAgICAgICBjb25zdCB0cmFja0NvbnRleHQgPSB0aGlzLmxvY2FsVHJhY2tJZFRvVHJhY2suZ2V0KHRyYWNrSWQpO1xuICAgICAgICBpZiAoIXRyYWNrQ29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBUcmFjayAnJHt0cmFja0lkfScgZG9lc24ndCBleGlzdGApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbmRlciA9IHRoaXMuZmluZFNlbmRlcih0cmFja0NvbnRleHQudHJhY2suaWQpO1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gc2VuZGVyLmdldFBhcmFtZXRlcnMoKTtcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMuZW5jb2RpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcGFyYW1ldGVycy5lbmNvZGluZ3MgPSBbe31dO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcHBseUJhbmR3aWR0aExpbWl0YXRpb24ocGFyYW1ldGVycy5lbmNvZGluZ3MsIGJhbmR3aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbmRlclxuICAgICAgICAgICAgLnNldFBhcmFtZXRlcnMocGFyYW1ldGVycylcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRydWUpXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIG1heGltdW0gYmFuZHdpZHRoIGZvciB0aGUgZ2l2ZW4gc2ltdWxjYXN0IGVuY29kaW5nIG9mIHRoZSBnaXZlbiB0cmFjay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFja0lkIC0gaWQgb2YgdGhlIHRyYWNrXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJpZCAtIHJpZCBvZiB0aGUgZW5jb2RpbmdcbiAgICAgKiBAcGFyYW0ge0JhbmR3aWR0aExpbWl0fSBiYW5kd2lkdGggLSBkZXNpcmVkIG1heCBiYW5kd2lkdGggdXNlZCBieSB0aGUgZW5jb2RpbmcgKGluIGticHMpXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBzZXRFbmNvZGluZ0JhbmR3aWR0aCh0cmFja0lkLCByaWQsIGJhbmR3aWR0aCkge1xuICAgICAgICBjb25zdCB0cmFja0NvbnRleHQgPSB0aGlzLmxvY2FsVHJhY2tJZFRvVHJhY2suZ2V0KHRyYWNrSWQpO1xuICAgICAgICBpZiAoIXRyYWNrQ29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBUcmFjayAnJHt0cmFja0lkfScgZG9lc24ndCBleGlzdGApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbmRlciA9IHRoaXMuZmluZFNlbmRlcih0cmFja0NvbnRleHQudHJhY2suaWQpO1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gc2VuZGVyLmdldFBhcmFtZXRlcnMoKTtcbiAgICAgICAgY29uc3QgZW5jb2RpbmcgPSBwYXJhbWV0ZXJzLmVuY29kaW5ncy5maW5kKGVuY29kaW5nID0+IGVuY29kaW5nLnJpZCA9PT0gcmlkKTtcbiAgICAgICAgaWYgKCFlbmNvZGluZykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBFbmNvZGluZyB3aXRoIHJpZCAnJHtyaWR9JyBkb2Vzbid0IGV4aXN0YCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYmFuZHdpZHRoID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgZW5jb2RpbmcubWF4Qml0cmF0ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVuY29kaW5nLm1heEJpdHJhdGUgPSBiYW5kd2lkdGggKiAxMDI0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZW5kZXJcbiAgICAgICAgICAgIC5zZXRQYXJhbWV0ZXJzKHBhcmFtZXRlcnMpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0cnVlKVxuICAgICAgICAgICAgLmNhdGNoKChfZXJyb3IpID0+IGZhbHNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIHRyYWNrIGZyb20gY29ubmVjdGlvbiB0aGF0IHdhcyBiZWluZyBzZW50IHRvIHRoZSBSVEMgRW5naW5lLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFja0lkIC0gSWQgb2YgYXVkaW8gb3IgdmlkZW8gdHJhY2sgdG8gcmVtb3ZlLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgdHNcbiAgICAgKiAvLyBzZXR1cCBjYW1lcmFcbiAgICAgKiBsZXQgbG9jYWxTdHJlYW06IE1lZGlhU3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKCk7XG4gICAgICogdHJ5IHtcbiAgICAgKiAgIGxvY2FsVmlkZW9TdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShcbiAgICAgKiAgICAgVklERU9fQ09OU1RSQUlOVFNcbiAgICAgKiAgICk7XG4gICAgICogICBsb2NhbFZpZGVvU3RyZWFtXG4gICAgICogICAgIC5nZXRUcmFja3MoKVxuICAgICAqICAgICAuZm9yRWFjaCgodHJhY2spID0+IGxvY2FsU3RyZWFtLmFkZFRyYWNrKHRyYWNrKSk7XG4gICAgICogfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgKiAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZG4ndCBnZXQgY2FtZXJhIHBlcm1pc3Npb246XCIsIGVycm9yKTtcbiAgICAgKiB9XG4gICAgICpcbiAgICAgKiBsZXQgdHJhY2tJZFxuICAgICAqIGxvY2FsU3RyZWFtXG4gICAgICogIC5nZXRUcmFja3MoKVxuICAgICAqICAuZm9yRWFjaCgodHJhY2spID0+IHRyYWNrSWQgPSB3ZWJydGMuYWRkVHJhY2sodHJhY2ssIGxvY2FsU3RyZWFtKSk7XG4gICAgICpcbiAgICAgKiAvLyByZW1vdmUgdHJhY2tcbiAgICAgKiB3ZWJydGMucmVtb3ZlVHJhY2sodHJhY2tJZClcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICByZW1vdmVUcmFjayh0cmFja0lkKSB7XG4gICAgICAgIGNvbnN0IHRyYWNrQ29udGV4dCA9IHRoaXMubG9jYWxUcmFja0lkVG9UcmFjay5nZXQodHJhY2tJZCk7XG4gICAgICAgIGNvbnN0IHNlbmRlciA9IHRoaXMuZmluZFNlbmRlcih0cmFja0NvbnRleHQudHJhY2suaWQpO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ucmVtb3ZlVHJhY2soc2VuZGVyKTtcbiAgICAgICAgbGV0IG1lZGlhRXZlbnQgPSBtZWRpYUV2ZW50XzEuZ2VuZXJhdGVDdXN0b21FdmVudCh7IHR5cGU6IFwicmVuZWdvdGlhdGVUcmFja3NcIiB9KTtcbiAgICAgICAgdGhpcy5zZW5kTWVkaWFFdmVudChtZWRpYUV2ZW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3VycmVudGx5LCB0aGlzIGZ1bmN0aW9uIG9ubHkgd29ya3Mgd2hlbiBEaXNwbGF5TWFuYWdlciBpbiBSVEMgRW5naW5lIGlzXG4gICAgICogZW5hYmxlZCBhbmQgc2ltdWxjYXN0IGlzIGRpc2FibGVkLlxuICAgICAqXG4gICAgICogUHJpb3JpdGl6ZXMgYSB0cmFjayBpbiBjb25uZWN0aW9uIHRvIGJlIGFsd2F5cyBzZW50IHRvIGJyb3dzZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhY2tJZCAtIElkIG9mIHZpZGVvIHRyYWNrIHRvIHByaW9yaXRpemUuXG4gICAgICovXG4gICAgcHJpb3JpdGl6ZVRyYWNrKHRyYWNrSWQpIHtcbiAgICAgICAgbGV0IG1lZGlhRXZlbnQgPSBtZWRpYUV2ZW50XzEuZ2VuZXJhdGVDdXN0b21FdmVudCh7IHR5cGU6IFwicHJpb3JpdGl6ZVRyYWNrXCIsIGRhdGE6IHsgdHJhY2tJZCB9IH0pO1xuICAgICAgICB0aGlzLnNlbmRNZWRpYUV2ZW50KG1lZGlhRXZlbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDdXJyZW50bHksIHRoaXMgZnVuY3Rpb24gb25seSB3b3JrcyB3aGVuIERpc3BsYXlNYW5hZ2VyIGluIFJUQyBFbmdpbmUgaXNcbiAgICAgKiBlbmFibGVkIGFuZCBzaW11bGNhc3QgaXMgZGlzYWJsZWQuXG4gICAgICpcbiAgICAgKiBVbnByaW9yaXRpemVzIGEgdHJhY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhY2tJZCAtIElkIG9mIHZpZGVvIHRyYWNrIHRvIHVucHJpb3JpdGl6ZS5cbiAgICAgKi9cbiAgICB1bnByaW9yaXRpemVUcmFjayh0cmFja0lkKSB7XG4gICAgICAgIGxldCBtZWRpYUV2ZW50ID0gbWVkaWFFdmVudF8xLmdlbmVyYXRlQ3VzdG9tRXZlbnQoeyB0eXBlOiBcInVucHJpb3JpdGl6ZVRyYWNrXCIsIGRhdGE6IHsgdHJhY2tJZCB9IH0pO1xuICAgICAgICB0aGlzLnNlbmRNZWRpYUV2ZW50KG1lZGlhRXZlbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDdXJyZW50bHkgdGhpcyBmdW5jdGlvbiBoYXMgbm8gZWZmZWN0LlxuICAgICAqXG4gICAgICogVGhpcyBmdW5jdGlvbiBhbGxvd3MgdG8gYWRqdXN0IHJlc29sdXRpb24gYW5kIG51bWJlciBvZiB2aWRlbyB0cmFja3Mgc2VudCBieSBhbiBTRlUgdG8gYSBjbGllbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYmlnU2NyZWVucyAtIG51bWJlciBvZiBzY3JlZW5zIHdpdGggYmlnIHNpemVcbiAgICAgKiAoaWYgc2ltdWxjYXN0IGlzIHVzZWQgdGhpcyB3aWxsIGxpbWl0IG51bWJlciBvZiB0cmFja3Mgc2VudCB3aXRoIGhpZ2hlc3QgcXVhbGl0eSkuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNtYWxsU2NyZWVucyAtIG51bWJlciBvZiBzY3JlZW5zIHdpdGggc21hbGwgc2l6ZVxuICAgICAqIChpZiBzaW11bGNhc3QgaXMgdXNlZCB0aGlzIHdpbGwgbGltaXQgbnVtYmVyIG9mIHRyYWNrcyBzZW50IHdpdGggbG93ZXN0IHF1YWxpdHkpLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtZWRpdW1TY3JlZW5zIC0gbnVtYmVyIG9mIHNjcmVlbnMgd2l0aCBtZWRpdW0gc2l6ZVxuICAgICAqIChpZiBzaW11bGNhc3QgaXMgdXNlZCB0aGlzIHdpbGwgbGltaXQgbnVtYmVyIG9mIHRyYWNrcyBzZW50IHdpdGggbWVkaXVtIHF1YWxpdHkpLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWxsU2FtZVNpemUgLSBmbGFnIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgYWxsIHNjcmVlbnMgc2hvdWxkIHVzZSB0aGUgc2FtZSBxdWFsaXR5XG4gICAgICovXG4gICAgc2V0UHJlZmVyZWRWaWRlb1NpemVzKGJpZ1NjcmVlbnMsIHNtYWxsU2NyZWVucywgbWVkaXVtU2NyZWVucyA9IDAsIGFsbFNhbWVTaXplID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lZGlhRXZlbnQgPSBtZWRpYUV2ZW50XzEuZ2VuZXJhdGVDdXN0b21FdmVudCh7XG4gICAgICAgICAgICB0eXBlOiBcInByZWZlcmVkVmlkZW9TaXplc1wiLFxuICAgICAgICAgICAgZGF0YTogeyBiaWdTY3JlZW5zLCBtZWRpdW1TY3JlZW5zLCBzbWFsbFNjcmVlbnMsIGFsbFNhbWVTaXplIH0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlbmRNZWRpYUV2ZW50KG1lZGlhRXZlbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRyYWNrIGVuY29kaW5nIHRoYXQgc2VydmVyIHNob3VsZCBzZW5kIHRvIHRoZSBjbGllbnQgbGlicmFyeS5cbiAgICAgKlxuICAgICAqIFRoZSBlbmNvZGluZyB3aWxsIGJlIHNlbnQgd2hlbmV2ZXIgaXQgaXMgYXZhaWxhYmxlLlxuICAgICAqIElmIGNob29zZW4gZW5jb2RpbmcgaXMgdGVtcG9yYXJpbHkgdW5hdmFpbGFibGUsIHNvbWUgb3RoZXIgZW5jb2RpbmdcbiAgICAgKiB3aWxsIGJlIHNlbnQgdW50aWwgY2hvb3NlbiBlbmNvZGluZyBiZWNvbWVzIGFjdGl2ZSBhZ2Fpbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFja0lkIC0gaWQgb2YgdHJhY2tcbiAgICAgKiBAcGFyYW0ge1RyYWNrRW5jb2Rpbmd9IGVuY29kaW5nIC0gZW5jb2RpbmcgdG8gcmVjZWl2ZVxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgdHNcbiAgICAgKiB3ZWJydGMuc2V0VGFyZ2V0VHJhY2tFbmNvZGluZyhpbmNvbWluZ1RyYWNrQ3R4LnRyYWNrSWQsIFwibFwiKVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHNldFRhcmdldFRyYWNrRW5jb2RpbmcodHJhY2tJZCwgZW5jb2RpbmcpIHtcbiAgICAgICAgbGV0IG1lZGlhRXZlbnQgPSBtZWRpYUV2ZW50XzEuZ2VuZXJhdGVDdXN0b21FdmVudCh7XG4gICAgICAgICAgICB0eXBlOiBcInNldFRhcmdldFRyYWNrVmFyaWFudFwiLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHRyYWNrSWQ6IHRyYWNrSWQsXG4gICAgICAgICAgICAgICAgdmFyaWFudDogZW5jb2RpbmcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlbmRNZWRpYUV2ZW50KG1lZGlhRXZlbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmFibGVzIHRyYWNrIGVuY29kaW5nIHNvIHRoYXQgaXQgd2lsbCBiZSBzZW50IHRvIHRoZSBzZXJ2ZXIuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRyYWNrSWQgLSBpZCBvZiB0cmFja1xuICAgICAqIEBwYXJhbSB7VHJhY2tFbmNvZGluZ30gZW5jb2RpbmcgLSBlbmNvZGluZyB0aGF0IHdpbGwgYmUgZW5hYmxlZFxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgdHNcbiAgICAgKiBjb25zdCB0cmFja0lkID0gd2VicnRjLmFkZFRyYWNrKHRyYWNrLCBzdHJlYW0sIHt9LCB7ZW5hYmxlZDogdHJ1ZSwgYWN0aXZlX2VuY29kaW5nczogW1wibFwiLCBcIm1cIiwgXCJoXCJdfSk7XG4gICAgICogd2VicnRjLmRpc2FibGVUcmFja0VuY29kaW5nKHRyYWNrSWQsIFwibFwiKTtcbiAgICAgKiAvLyB3YWl0IHNvbWUgdGltZVxuICAgICAqIHdlYnJ0Yy5lbmFibGVUcmFja0VuY29kaW5nKHRyYWNrSWQsIFwibFwiKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBlbmFibGVUcmFja0VuY29kaW5nKHRyYWNrSWQsIGVuY29kaW5nKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICBsZXQgdHJhY2sgPSAoX2EgPSB0aGlzLmxvY2FsVHJhY2tJZFRvVHJhY2suZ2V0KHRyYWNrSWQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudHJhY2s7XG4gICAgICAgIGxldCBuZXdEaXNhYmxlZFRyYWNrRW5jb2RpbmdzID0gKF9iID0gdGhpcy5kaXNhYmxlZFRyYWNrRW5jb2RpbmdzXG4gICAgICAgICAgICAuZ2V0KHRyYWNrSWQpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZmlsdGVyKChlbikgPT4gZW4gIT09IGVuY29kaW5nKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZFRyYWNrRW5jb2RpbmdzLnNldCh0cmFja0lkLCBuZXdEaXNhYmxlZFRyYWNrRW5jb2RpbmdzKTtcbiAgICAgICAgbGV0IHNlbmRlciA9IChfYyA9IHRoaXMuY29ubmVjdGlvbikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmdldFNlbmRlcnMoKS5maWx0ZXIoKHNlbmRlcikgPT4gc2VuZGVyLnRyYWNrID09PSB0cmFjaylbMF07XG4gICAgICAgIGxldCBwYXJhbXMgPSBzZW5kZXIgPT09IG51bGwgfHwgc2VuZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZW5kZXIuZ2V0UGFyYW1ldGVycygpO1xuICAgICAgICBwYXJhbXMuZW5jb2RpbmdzLmZpbHRlcigoZW4pID0+IGVuLnJpZCA9PSBlbmNvZGluZylbMF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgc2VuZGVyID09PSBudWxsIHx8IHNlbmRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VuZGVyLnNldFBhcmFtZXRlcnMocGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgdHJhY2sgZW5jb2Rpbmcgc28gdGhhdCBpdCB3aWxsIGJlIG5vIGxvbmdlciBzZW50IHRvIHRoZSBzZXJ2ZXIuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRyYWNrSWQgLSBpZCBvZiB0cmFja1xuICAgICAqIEBwYXJhbSB7cmFja0VuY29kaW5nfSBlbmNvZGluZyAtIGVuY29kaW5nIHRoYXQgd2lsbCBiZSBkaXNhYmxlZFxuICAgICAqIEBleGFtcGxlXG4gICAgICogYGBgdHNcbiAgICAgKiBjb25zdCB0cmFja0lkID0gd2VicnRjLmFkZFRyYWNrKHRyYWNrLCBzdHJlYW0sIHt9LCB7ZW5hYmxlZDogdHJ1ZSwgYWN0aXZlX2VuY29kaW5nczogW1wibFwiLCBcIm1cIiwgXCJoXCJdfSk7XG4gICAgICogd2VicnRjLmRpc2FibGVUcmFja0VuY29kaW5nKHRyYWNrSWQsIFwibFwiKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBkaXNhYmxlVHJhY2tFbmNvZGluZyh0cmFja0lkLCBlbmNvZGluZykge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBsZXQgdHJhY2sgPSAoX2EgPSB0aGlzLmxvY2FsVHJhY2tJZFRvVHJhY2suZ2V0KHRyYWNrSWQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudHJhY2s7XG4gICAgICAgIHRoaXMuZGlzYWJsZWRUcmFja0VuY29kaW5ncy5nZXQodHJhY2tJZCkucHVzaChlbmNvZGluZyk7XG4gICAgICAgIGxldCBzZW5kZXIgPSAoX2IgPSB0aGlzLmNvbm5lY3Rpb24pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXRTZW5kZXJzKCkuZmlsdGVyKChzZW5kZXIpID0+IHNlbmRlci50cmFjayA9PT0gdHJhY2spWzBdO1xuICAgICAgICBsZXQgcGFyYW1zID0gc2VuZGVyID09PSBudWxsIHx8IHNlbmRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VuZGVyLmdldFBhcmFtZXRlcnMoKTtcbiAgICAgICAgcGFyYW1zLmVuY29kaW5ncy5maWx0ZXIoKGVuKSA9PiBlbi5yaWQgPT0gZW5jb2RpbmcpWzBdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBzZW5kZXIgPT09IG51bGwgfHwgc2VuZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZW5kZXIuc2V0UGFyYW1ldGVycyhwYXJhbXMpO1xuICAgIH1cbiAgICBmaW5kU2VuZGVyKHRyYWNrSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbi5nZXRTZW5kZXJzKCkuZmluZCgoc2VuZGVyKSA9PiBzZW5kZXIudHJhY2sgJiYgc2VuZGVyLnRyYWNrLmlkID09PSB0cmFja0lkKTtcbiAgICB9XG4gICAgZ2V0VHJhY2tJZCh1dWlkKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldFBlZXJJZCgpfToke3V1aWR9YDtcbiAgICB9XG4gICAgYXN5bmMgY3JlYXRlQW5kU2VuZE9mZmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGlvbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG9mZmVyID0gYXdhaXQgdGhpcy5jb25uZWN0aW9uLmNyZWF0ZU9mZmVyKCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNvbm5lY3Rpb24uc2V0TG9jYWxEZXNjcmlwdGlvbihvZmZlcik7XG4gICAgICAgICAgICBsZXQgbWVkaWFFdmVudCA9IG1lZGlhRXZlbnRfMS5nZW5lcmF0ZUN1c3RvbUV2ZW50KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNkcE9mZmVyXCIsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBzZHBPZmZlcjogb2ZmZXIsXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrSWRUb1RyYWNrTWV0YWRhdGE6IHRoaXMuZ2V0VHJhY2tJZFRvTWV0YWRhdGEoKSxcbiAgICAgICAgICAgICAgICAgICAgbWlkVG9UcmFja0lkOiB0aGlzLmdldE1pZFRvVHJhY2tJZCgpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2VuZE1lZGlhRXZlbnQobWVkaWFFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuTWVtYnJhbmVXZWJSVEMgPSBNZW1icmFuZVdlYlJUQztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWVtYnJhbmVXZWJSVEMgPSB2b2lkIDA7XG52YXIgbWVtYnJhbmVXZWJSVENfMSA9IHJlcXVpcmUoXCIuL21lbWJyYW5lV2ViUlRDXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWVtYnJhbmVXZWJSVENcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1lbWJyYW5lV2ViUlRDXzEuTWVtYnJhbmVXZWJSVEM7IH0gfSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBzdHIgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCB4ID0+IGAlJHt4LmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9YCk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRva2VuID0gJyVbYS1mMC05XXsyfSc7XG52YXIgc2luZ2xlTWF0Y2hlciA9IG5ldyBSZWdFeHAodG9rZW4sICdnaScpO1xudmFyIG11bHRpTWF0Y2hlciA9IG5ldyBSZWdFeHAoJygnICsgdG9rZW4gKyAnKSsnLCAnZ2knKTtcblxuZnVuY3Rpb24gZGVjb2RlQ29tcG9uZW50cyhjb21wb25lbnRzLCBzcGxpdCkge1xuXHR0cnkge1xuXHRcdC8vIFRyeSB0byBkZWNvZGUgdGhlIGVudGlyZSBzdHJpbmcgZmlyc3Rcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGNvbXBvbmVudHMuam9pbignJykpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBEbyBub3RoaW5nXG5cdH1cblxuXHRpZiAoY29tcG9uZW50cy5sZW5ndGggPT09IDEpIHtcblx0XHRyZXR1cm4gY29tcG9uZW50cztcblx0fVxuXG5cdHNwbGl0ID0gc3BsaXQgfHwgMTtcblxuXHQvLyBTcGxpdCB0aGUgYXJyYXkgaW4gMiBwYXJ0c1xuXHR2YXIgbGVmdCA9IGNvbXBvbmVudHMuc2xpY2UoMCwgc3BsaXQpO1xuXHR2YXIgcmlnaHQgPSBjb21wb25lbnRzLnNsaWNlKHNwbGl0KTtcblxuXHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5jYWxsKFtdLCBkZWNvZGVDb21wb25lbnRzKGxlZnQpLCBkZWNvZGVDb21wb25lbnRzKHJpZ2h0KSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaW5wdXQpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHR2YXIgdG9rZW5zID0gaW5wdXQubWF0Y2goc2luZ2xlTWF0Y2hlcik7XG5cblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aW5wdXQgPSBkZWNvZGVDb21wb25lbnRzKHRva2VucywgaSkuam9pbignJyk7XG5cblx0XHRcdHRva2VucyA9IGlucHV0Lm1hdGNoKHNpbmdsZU1hdGNoZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnB1dDtcblx0fVxufVxuXG5mdW5jdGlvbiBjdXN0b21EZWNvZGVVUklDb21wb25lbnQoaW5wdXQpIHtcblx0Ly8gS2VlcCB0cmFjayBvZiBhbGwgdGhlIHJlcGxhY2VtZW50cyBhbmQgcHJlZmlsbCB0aGUgbWFwIHdpdGggdGhlIGBCT01gXG5cdHZhciByZXBsYWNlTWFwID0ge1xuXHRcdCclRkUlRkYnOiAnXFx1RkZGRFxcdUZGRkQnLFxuXHRcdCclRkYlRkUnOiAnXFx1RkZGRFxcdUZGRkQnXG5cdH07XG5cblx0dmFyIG1hdGNoID0gbXVsdGlNYXRjaGVyLmV4ZWMoaW5wdXQpO1xuXHR3aGlsZSAobWF0Y2gpIHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gRGVjb2RlIGFzIGJpZyBjaHVua3MgYXMgcG9zc2libGVcblx0XHRcdHJlcGxhY2VNYXBbbWF0Y2hbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzBdKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHZhciByZXN1bHQgPSBkZWNvZGUobWF0Y2hbMF0pO1xuXG5cdFx0XHRpZiAocmVzdWx0ICE9PSBtYXRjaFswXSkge1xuXHRcdFx0XHRyZXBsYWNlTWFwW21hdGNoWzBdXSA9IHJlc3VsdDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRtYXRjaCA9IG11bHRpTWF0Y2hlci5leGVjKGlucHV0KTtcblx0fVxuXG5cdC8vIEFkZCBgJUMyYCBhdCB0aGUgZW5kIG9mIHRoZSBtYXAgdG8gbWFrZSBzdXJlIGl0IGRvZXMgbm90IHJlcGxhY2UgdGhlIGNvbWJpbmF0b3IgYmVmb3JlIGV2ZXJ5dGhpbmcgZWxzZVxuXHRyZXBsYWNlTWFwWyclQzInXSA9ICdcXHVGRkZEJztcblxuXHR2YXIgZW50cmllcyA9IE9iamVjdC5rZXlzKHJlcGxhY2VNYXApO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFJlcGxhY2UgYWxsIGRlY29kZWQgY29tcG9uZW50c1xuXHRcdHZhciBrZXkgPSBlbnRyaWVzW2ldO1xuXHRcdGlucHV0ID0gaW5wdXQucmVwbGFjZShuZXcgUmVnRXhwKGtleSwgJ2cnKSwgcmVwbGFjZU1hcFtrZXldKTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZW5jb2RlZFVSSSkge1xuXHRpZiAodHlwZW9mIGVuY29kZWRVUkkgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYGVuY29kZWRVUklgIHRvIGJlIG9mIHR5cGUgYHN0cmluZ2AsIGdvdCBgJyArIHR5cGVvZiBlbmNvZGVkVVJJICsgJ2AnKTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0ZW5jb2RlZFVSSSA9IGVuY29kZWRVUkkucmVwbGFjZSgvXFwrL2csICcgJyk7XG5cblx0XHQvLyBUcnkgdGhlIGJ1aWx0IGluIGRlY29kZXIgZmlyc3Rcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRVUkkpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBGYWxsYmFjayB0byBhIG1vcmUgYWR2YW5jZWQgZGVjb2RlclxuXHRcdHJldHVybiBjdXN0b21EZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZFVSSSk7XG5cdH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChzdHJpbmcsIHNlcGFyYXRvcikgPT4ge1xuXHRpZiAoISh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygc2VwYXJhdG9yID09PSAnc3RyaW5nJykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgYXJndW1lbnRzIHRvIGJlIG9mIHR5cGUgYHN0cmluZ2AnKTtcblx0fVxuXG5cdGlmIChzZXBhcmF0b3IgPT09ICcnKSB7XG5cdFx0cmV0dXJuIFtzdHJpbmddO1xuXHR9XG5cblx0Y29uc3Qgc2VwYXJhdG9ySW5kZXggPSBzdHJpbmcuaW5kZXhPZihzZXBhcmF0b3IpO1xuXG5cdGlmIChzZXBhcmF0b3JJbmRleCA9PT0gLTEpIHtcblx0XHRyZXR1cm4gW3N0cmluZ107XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdHN0cmluZy5zbGljZSgwLCBzZXBhcmF0b3JJbmRleCksXG5cdFx0c3RyaW5nLnNsaWNlKHNlcGFyYXRvckluZGV4ICsgc2VwYXJhdG9yLmxlbmd0aClcblx0XTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBwcmVkaWNhdGUpIHtcblx0dmFyIHJldCA9IHt9O1xuXHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cdHZhciBpc0FyciA9IEFycmF5LmlzQXJyYXkocHJlZGljYXRlKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIga2V5ID0ga2V5c1tpXTtcblx0XHR2YXIgdmFsID0gb2JqW2tleV07XG5cblx0XHRpZiAoaXNBcnIgPyBwcmVkaWNhdGUuaW5kZXhPZihrZXkpICE9PSAtMSA6IHByZWRpY2F0ZShrZXksIHZhbCwgb2JqKSkge1xuXHRcdFx0cmV0W2tleV0gPSB2YWw7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJldDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuY29uc3Qgc3RyaWN0VXJpRW5jb2RlID0gcmVxdWlyZSgnc3RyaWN0LXVyaS1lbmNvZGUnKTtcbmNvbnN0IGRlY29kZUNvbXBvbmVudCA9IHJlcXVpcmUoJ2RlY29kZS11cmktY29tcG9uZW50Jyk7XG5jb25zdCBzcGxpdE9uRmlyc3QgPSByZXF1aXJlKCdzcGxpdC1vbi1maXJzdCcpO1xuY29uc3QgZmlsdGVyT2JqZWN0ID0gcmVxdWlyZSgnZmlsdGVyLW9iaicpO1xuXG5jb25zdCBpc051bGxPclVuZGVmaW5lZCA9IHZhbHVlID0+IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG5cbmNvbnN0IGVuY29kZUZyYWdtZW50SWRlbnRpZmllciA9IFN5bWJvbCgnZW5jb2RlRnJhZ21lbnRJZGVudGlmaWVyJyk7XG5cbmZ1bmN0aW9uIGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKSB7XG5cdHN3aXRjaCAob3B0aW9ucy5hcnJheUZvcm1hdCkge1xuXHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdHJldHVybiBrZXkgPT4gKHJlc3VsdCwgdmFsdWUpID0+IHtcblx0XHRcdFx0Y29uc3QgaW5kZXggPSByZXN1bHQubGVuZ3RoO1xuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgdmFsdWUgPT09IG51bGwpIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcEVtcHR5U3RyaW5nICYmIHZhbHVlID09PSAnJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbJywgaW5kZXgsICddJ10uam9pbignJyldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0XHQuLi5yZXN1bHQsXG5cdFx0XHRcdFx0W2VuY29kZShrZXksIG9wdGlvbnMpLCAnWycsIGVuY29kZShpbmRleCwgb3B0aW9ucyksICddPScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpXG5cdFx0XHRcdF07XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnYnJhY2tldCc6XG5cdFx0XHRyZXR1cm4ga2V5ID0+IChyZXN1bHQsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgdmFsdWUgPT09IG51bGwpIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcEVtcHR5U3RyaW5nICYmIHZhbHVlID09PSAnJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbXSddLmpvaW4oJycpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbXT0nLCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKCcnKV07XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnY29sb24tbGlzdC1zZXBhcmF0b3InOlxuXHRcdFx0cmV0dXJuIGtleSA9PiAocmVzdWx0LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBOdWxsICYmIHZhbHVlID09PSBudWxsKSB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBFbXB0eVN0cmluZyAmJiB2YWx1ZSA9PT0gJycpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgW2VuY29kZShrZXksIG9wdGlvbnMpLCAnOmxpc3Q9J10uam9pbignJyldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJzpsaXN0PScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpXTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdjb21tYSc6XG5cdFx0Y2FzZSAnc2VwYXJhdG9yJzpcblx0XHRjYXNlICdicmFja2V0LXNlcGFyYXRvcic6IHtcblx0XHRcdGNvbnN0IGtleVZhbHVlU2VwID0gb3B0aW9ucy5hcnJheUZvcm1hdCA9PT0gJ2JyYWNrZXQtc2VwYXJhdG9yJyA/XG5cdFx0XHRcdCdbXT0nIDpcblx0XHRcdFx0Jz0nO1xuXG5cdFx0XHRyZXR1cm4ga2V5ID0+IChyZXN1bHQsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgdmFsdWUgPT09IG51bGwpIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcEVtcHR5U3RyaW5nICYmIHZhbHVlID09PSAnJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRyYW5zbGF0ZSBudWxsIHRvIGFuIGVtcHR5IHN0cmluZyBzbyB0aGF0IGl0IGRvZXNuJ3Qgc2VyaWFsaXplIGFzICdudWxsJ1xuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlID09PSBudWxsID8gJycgOiB2YWx1ZTtcblxuXHRcdFx0XHRpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHJldHVybiBbW2VuY29kZShrZXksIG9wdGlvbnMpLCBrZXlWYWx1ZVNlcCwgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJyldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFtbcmVzdWx0LCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpXTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBrZXkgPT4gKHJlc3VsdCwgdmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHZhbHVlID09PSB1bmRlZmluZWQgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwTnVsbCAmJiB2YWx1ZSA9PT0gbnVsbCkgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwRW1wdHlTdHJpbmcgJiYgdmFsdWUgPT09ICcnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIGVuY29kZShrZXksIG9wdGlvbnMpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBbZW5jb2RlKGtleSwgb3B0aW9ucyksICc9JywgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJyldO1xuXHRcdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiBwYXJzZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKSB7XG5cdGxldCByZXN1bHQ7XG5cblx0c3dpdGNoIChvcHRpb25zLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRyZXN1bHQgPSAvXFxbKFxcZCopXFxdJC8uZXhlYyhrZXkpO1xuXG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXGQqXFxdJC8sICcnKTtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHt9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XVtyZXN1bHRbMV1dID0gdmFsdWU7XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnYnJhY2tldCc6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSA9PiB7XG5cdFx0XHRcdHJlc3VsdCA9IC8oXFxbXFxdKSQvLmV4ZWMoa2V5KTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcXSQvLCAnJyk7XG5cblx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbdmFsdWVdO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbXS5jb25jYXQoYWNjdW11bGF0b3Jba2V5XSwgdmFsdWUpO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2NvbG9uLWxpc3Qtc2VwYXJhdG9yJzpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0cmVzdWx0ID0gLyg6bGlzdCkkLy5leGVjKGtleSk7XG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC86bGlzdCQvLCAnJyk7XG5cblx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbdmFsdWVdO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbXS5jb25jYXQoYWNjdW11bGF0b3Jba2V5XSwgdmFsdWUpO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2NvbW1hJzpcblx0XHRjYXNlICdzZXBhcmF0b3InOlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRjb25zdCBpc0FycmF5ID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmNsdWRlcyhvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKTtcblx0XHRcdFx0Y29uc3QgaXNFbmNvZGVkQXJyYXkgPSAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhaXNBcnJheSAmJiBkZWNvZGUodmFsdWUsIG9wdGlvbnMpLmluY2x1ZGVzKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpKTtcblx0XHRcdFx0dmFsdWUgPSBpc0VuY29kZWRBcnJheSA/IGRlY29kZSh2YWx1ZSwgb3B0aW9ucykgOiB2YWx1ZTtcblx0XHRcdFx0Y29uc3QgbmV3VmFsdWUgPSBpc0FycmF5IHx8IGlzRW5jb2RlZEFycmF5ID8gdmFsdWUuc3BsaXQob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcikubWFwKGl0ZW0gPT4gZGVjb2RlKGl0ZW0sIG9wdGlvbnMpKSA6IHZhbHVlID09PSBudWxsID8gdmFsdWUgOiBkZWNvZGUodmFsdWUsIG9wdGlvbnMpO1xuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gbmV3VmFsdWU7XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnYnJhY2tldC1zZXBhcmF0b3InOlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRjb25zdCBpc0FycmF5ID0gLyhcXFtcXF0pJC8udGVzdChrZXkpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxdJC8sICcnKTtcblxuXHRcdFx0XHRpZiAoIWlzQXJyYXkpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWUgPyBkZWNvZGUodmFsdWUsIG9wdGlvbnMpIDogdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgYXJyYXlWYWx1ZSA9IHZhbHVlID09PSBudWxsID9cblx0XHRcdFx0XHRbXSA6XG5cdFx0XHRcdFx0dmFsdWUuc3BsaXQob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcikubWFwKGl0ZW0gPT4gZGVjb2RlKGl0ZW0sIG9wdGlvbnMpKTtcblxuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IGFycmF5VmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCBhcnJheVZhbHVlKTtcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbXS5jb25jYXQoYWNjdW11bGF0b3Jba2V5XSwgdmFsdWUpO1xuXHRcdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUFycmF5Rm9ybWF0U2VwYXJhdG9yKHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IHZhbHVlLmxlbmd0aCAhPT0gMSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2FycmF5Rm9ybWF0U2VwYXJhdG9yIG11c3QgYmUgc2luZ2xlIGNoYXJhY3RlciBzdHJpbmcnKTtcblx0fVxufVxuXG5mdW5jdGlvbiBlbmNvZGUodmFsdWUsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMuZW5jb2RlKSB7XG5cdFx0cmV0dXJuIG9wdGlvbnMuc3RyaWN0ID8gc3RyaWN0VXJpRW5jb2RlKHZhbHVlKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGRlY29kZSh2YWx1ZSwgb3B0aW9ucykge1xuXHRpZiAob3B0aW9ucy5kZWNvZGUpIHtcblx0XHRyZXR1cm4gZGVjb2RlQ29tcG9uZW50KHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24ga2V5c1NvcnRlcihpbnB1dCkge1xuXHRpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcblx0XHRyZXR1cm4gaW5wdXQuc29ydCgpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4ga2V5c1NvcnRlcihPYmplY3Qua2V5cyhpbnB1dCkpXG5cdFx0XHQuc29ydCgoYSwgYikgPT4gTnVtYmVyKGEpIC0gTnVtYmVyKGIpKVxuXHRcdFx0Lm1hcChrZXkgPT4gaW5wdXRba2V5XSk7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhc2goaW5wdXQpIHtcblx0Y29uc3QgaGFzaFN0YXJ0ID0gaW5wdXQuaW5kZXhPZignIycpO1xuXHRpZiAoaGFzaFN0YXJ0ICE9PSAtMSkge1xuXHRcdGlucHV0ID0gaW5wdXQuc2xpY2UoMCwgaGFzaFN0YXJ0KTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gZ2V0SGFzaCh1cmwpIHtcblx0bGV0IGhhc2ggPSAnJztcblx0Y29uc3QgaGFzaFN0YXJ0ID0gdXJsLmluZGV4T2YoJyMnKTtcblx0aWYgKGhhc2hTdGFydCAhPT0gLTEpIHtcblx0XHRoYXNoID0gdXJsLnNsaWNlKGhhc2hTdGFydCk7XG5cdH1cblxuXHRyZXR1cm4gaGFzaDtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdChpbnB1dCkge1xuXHRpbnB1dCA9IHJlbW92ZUhhc2goaW5wdXQpO1xuXHRjb25zdCBxdWVyeVN0YXJ0ID0gaW5wdXQuaW5kZXhPZignPycpO1xuXHRpZiAocXVlcnlTdGFydCA9PT0gLTEpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQuc2xpY2UocXVlcnlTdGFydCArIDEpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVZhbHVlKHZhbHVlLCBvcHRpb25zKSB7XG5cdGlmIChvcHRpb25zLnBhcnNlTnVtYmVycyAmJiAhTnVtYmVyLmlzTmFOKE51bWJlcih2YWx1ZSkpICYmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKSAhPT0gJycpKSB7XG5cdFx0dmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMucGFyc2VCb29sZWFucyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAodmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnIHx8IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICdmYWxzZScpKSB7XG5cdFx0dmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSc7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHBhcnNlKHF1ZXJ5LCBvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRkZWNvZGU6IHRydWUsXG5cdFx0c29ydDogdHJ1ZSxcblx0XHRhcnJheUZvcm1hdDogJ25vbmUnLFxuXHRcdGFycmF5Rm9ybWF0U2VwYXJhdG9yOiAnLCcsXG5cdFx0cGFyc2VOdW1iZXJzOiBmYWxzZSxcblx0XHRwYXJzZUJvb2xlYW5zOiBmYWxzZVxuXHR9LCBvcHRpb25zKTtcblxuXHR2YWxpZGF0ZUFycmF5Rm9ybWF0U2VwYXJhdG9yKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpO1xuXG5cdGNvbnN0IGZvcm1hdHRlciA9IHBhcnNlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpO1xuXG5cdC8vIENyZWF0ZSBhbiBvYmplY3Qgd2l0aCBubyBwcm90b3R5cGVcblx0Y29uc3QgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRpZiAodHlwZW9mIHF1ZXJ5ICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRxdWVyeSA9IHF1ZXJ5LnRyaW0oKS5yZXBsYWNlKC9eWz8jJl0vLCAnJyk7XG5cblx0aWYgKCFxdWVyeSkge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRmb3IgKGNvbnN0IHBhcmFtIG9mIHF1ZXJ5LnNwbGl0KCcmJykpIHtcblx0XHRpZiAocGFyYW0gPT09ICcnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgW2tleSwgdmFsdWVdID0gc3BsaXRPbkZpcnN0KG9wdGlvbnMuZGVjb2RlID8gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykgOiBwYXJhbSwgJz0nKTtcblxuXHRcdC8vIE1pc3NpbmcgYD1gIHNob3VsZCBiZSBgbnVsbGA6XG5cdFx0Ly8gaHR0cDovL3czLm9yZy9UUi8yMDEyL1dELXVybC0yMDEyMDUyNC8jY29sbGVjdC11cmwtcGFyYW1ldGVyc1xuXHRcdHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBbJ2NvbW1hJywgJ3NlcGFyYXRvcicsICdicmFja2V0LXNlcGFyYXRvciddLmluY2x1ZGVzKG9wdGlvbnMuYXJyYXlGb3JtYXQpID8gdmFsdWUgOiBkZWNvZGUodmFsdWUsIG9wdGlvbnMpO1xuXHRcdGZvcm1hdHRlcihkZWNvZGUoa2V5LCBvcHRpb25zKSwgdmFsdWUsIHJldCk7XG5cdH1cblxuXHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhyZXQpKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSByZXRba2V5XTtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0Zm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xuXHRcdFx0XHR2YWx1ZVtrXSA9IHBhcnNlVmFsdWUodmFsdWVba10sIG9wdGlvbnMpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXRba2V5XSA9IHBhcnNlVmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNvcnQgPT09IGZhbHNlKSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdHJldHVybiAob3B0aW9ucy5zb3J0ID09PSB0cnVlID8gT2JqZWN0LmtleXMocmV0KS5zb3J0KCkgOiBPYmplY3Qua2V5cyhyZXQpLnNvcnQob3B0aW9ucy5zb3J0KSkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuXHRcdGNvbnN0IHZhbHVlID0gcmV0W2tleV07XG5cdFx0aWYgKEJvb2xlYW4odmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHQvLyBTb3J0IG9iamVjdCBrZXlzLCBub3QgdmFsdWVzXG5cdFx0XHRyZXN1bHRba2V5XSA9IGtleXNTb3J0ZXIodmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRba2V5XSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xufVxuXG5leHBvcnRzLmV4dHJhY3QgPSBleHRyYWN0O1xuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuXG5leHBvcnRzLnN0cmluZ2lmeSA9IChvYmplY3QsIG9wdGlvbnMpID0+IHtcblx0aWYgKCFvYmplY3QpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0ZW5jb2RlOiB0cnVlLFxuXHRcdHN0cmljdDogdHJ1ZSxcblx0XHRhcnJheUZvcm1hdDogJ25vbmUnLFxuXHRcdGFycmF5Rm9ybWF0U2VwYXJhdG9yOiAnLCdcblx0fSwgb3B0aW9ucyk7XG5cblx0dmFsaWRhdGVBcnJheUZvcm1hdFNlcGFyYXRvcihvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKTtcblxuXHRjb25zdCBzaG91bGRGaWx0ZXIgPSBrZXkgPT4gKFxuXHRcdChvcHRpb25zLnNraXBOdWxsICYmIGlzTnVsbE9yVW5kZWZpbmVkKG9iamVjdFtrZXldKSkgfHxcblx0XHQob3B0aW9ucy5za2lwRW1wdHlTdHJpbmcgJiYgb2JqZWN0W2tleV0gPT09ICcnKVxuXHQpO1xuXG5cdGNvbnN0IGZvcm1hdHRlciA9IGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKTtcblxuXHRjb25zdCBvYmplY3RDb3B5ID0ge307XG5cblx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSkge1xuXHRcdGlmICghc2hvdWxkRmlsdGVyKGtleSkpIHtcblx0XHRcdG9iamVjdENvcHlba2V5XSA9IG9iamVjdFtrZXldO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3RDb3B5KTtcblxuXHRpZiAob3B0aW9ucy5zb3J0ICE9PSBmYWxzZSkge1xuXHRcdGtleXMuc29ydChvcHRpb25zLnNvcnQpO1xuXHR9XG5cblx0cmV0dXJuIGtleXMubWFwKGtleSA9PiB7XG5cdFx0Y29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuXHRcdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRpZiAodmFsdWUubGVuZ3RoID09PSAwICYmIG9wdGlvbnMuYXJyYXlGb3JtYXQgPT09ICdicmFja2V0LXNlcGFyYXRvcicpIHtcblx0XHRcdFx0cmV0dXJuIGVuY29kZShrZXksIG9wdGlvbnMpICsgJ1tdJztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHRcdC5yZWR1Y2UoZm9ybWF0dGVyKGtleSksIFtdKVxuXHRcdFx0XHQuam9pbignJicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRpb25zKSArICc9JyArIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdH0pLmZpbHRlcih4ID0+IHgubGVuZ3RoID4gMCkuam9pbignJicpO1xufTtcblxuZXhwb3J0cy5wYXJzZVVybCA9ICh1cmwsIG9wdGlvbnMpID0+IHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdGRlY29kZTogdHJ1ZVxuXHR9LCBvcHRpb25zKTtcblxuXHRjb25zdCBbdXJsXywgaGFzaF0gPSBzcGxpdE9uRmlyc3QodXJsLCAnIycpO1xuXG5cdHJldHVybiBPYmplY3QuYXNzaWduKFxuXHRcdHtcblx0XHRcdHVybDogdXJsXy5zcGxpdCgnPycpWzBdIHx8ICcnLFxuXHRcdFx0cXVlcnk6IHBhcnNlKGV4dHJhY3QodXJsKSwgb3B0aW9ucylcblx0XHR9LFxuXHRcdG9wdGlvbnMgJiYgb3B0aW9ucy5wYXJzZUZyYWdtZW50SWRlbnRpZmllciAmJiBoYXNoID8ge2ZyYWdtZW50SWRlbnRpZmllcjogZGVjb2RlKGhhc2gsIG9wdGlvbnMpfSA6IHt9XG5cdCk7XG59O1xuXG5leHBvcnRzLnN0cmluZ2lmeVVybCA9IChvYmplY3QsIG9wdGlvbnMpID0+IHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdGVuY29kZTogdHJ1ZSxcblx0XHRzdHJpY3Q6IHRydWUsXG5cdFx0W2VuY29kZUZyYWdtZW50SWRlbnRpZmllcl06IHRydWVcblx0fSwgb3B0aW9ucyk7XG5cblx0Y29uc3QgdXJsID0gcmVtb3ZlSGFzaChvYmplY3QudXJsKS5zcGxpdCgnPycpWzBdIHx8ICcnO1xuXHRjb25zdCBxdWVyeUZyb21VcmwgPSBleHBvcnRzLmV4dHJhY3Qob2JqZWN0LnVybCk7XG5cdGNvbnN0IHBhcnNlZFF1ZXJ5RnJvbVVybCA9IGV4cG9ydHMucGFyc2UocXVlcnlGcm9tVXJsLCB7c29ydDogZmFsc2V9KTtcblxuXHRjb25zdCBxdWVyeSA9IE9iamVjdC5hc3NpZ24ocGFyc2VkUXVlcnlGcm9tVXJsLCBvYmplY3QucXVlcnkpO1xuXHRsZXQgcXVlcnlTdHJpbmcgPSBleHBvcnRzLnN0cmluZ2lmeShxdWVyeSwgb3B0aW9ucyk7XG5cdGlmIChxdWVyeVN0cmluZykge1xuXHRcdHF1ZXJ5U3RyaW5nID0gYD8ke3F1ZXJ5U3RyaW5nfWA7XG5cdH1cblxuXHRsZXQgaGFzaCA9IGdldEhhc2gob2JqZWN0LnVybCk7XG5cdGlmIChvYmplY3QuZnJhZ21lbnRJZGVudGlmaWVyKSB7XG5cdFx0aGFzaCA9IGAjJHtvcHRpb25zW2VuY29kZUZyYWdtZW50SWRlbnRpZmllcl0gPyBlbmNvZGUob2JqZWN0LmZyYWdtZW50SWRlbnRpZmllciwgb3B0aW9ucykgOiBvYmplY3QuZnJhZ21lbnRJZGVudGlmaWVyfWA7XG5cdH1cblxuXHRyZXR1cm4gYCR7dXJsfSR7cXVlcnlTdHJpbmd9JHtoYXNofWA7XG59O1xuXG5leHBvcnRzLnBpY2sgPSAoaW5wdXQsIGZpbHRlciwgb3B0aW9ucykgPT4ge1xuXHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0cGFyc2VGcmFnbWVudElkZW50aWZpZXI6IHRydWUsXG5cdFx0W2VuY29kZUZyYWdtZW50SWRlbnRpZmllcl06IGZhbHNlXG5cdH0sIG9wdGlvbnMpO1xuXG5cdGNvbnN0IHt1cmwsIHF1ZXJ5LCBmcmFnbWVudElkZW50aWZpZXJ9ID0gZXhwb3J0cy5wYXJzZVVybChpbnB1dCwgb3B0aW9ucyk7XG5cdHJldHVybiBleHBvcnRzLnN0cmluZ2lmeVVybCh7XG5cdFx0dXJsLFxuXHRcdHF1ZXJ5OiBmaWx0ZXJPYmplY3QocXVlcnksIGZpbHRlciksXG5cdFx0ZnJhZ21lbnRJZGVudGlmaWVyXG5cdH0sIG9wdGlvbnMpO1xufTtcblxuZXhwb3J0cy5leGNsdWRlID0gKGlucHV0LCBmaWx0ZXIsIG9wdGlvbnMpID0+IHtcblx0Y29uc3QgZXhjbHVzaW9uRmlsdGVyID0gQXJyYXkuaXNBcnJheShmaWx0ZXIpID8ga2V5ID0+ICFmaWx0ZXIuaW5jbHVkZXMoa2V5KSA6IChrZXksIHZhbHVlKSA9PiAhZmlsdGVyKGtleSwgdmFsdWUpO1xuXG5cdHJldHVybiBleHBvcnRzLnBpY2soaW5wdXQsIGV4Y2x1c2lvbkZpbHRlciwgb3B0aW9ucyk7XG59O1xuIiwgImV4cG9ydCBjb25zdCBNRURJQV9DT05TVFJBSU5UUzogTWVkaWFTdHJlYW1Db25zdHJhaW50cyA9IHtcbiAgYXVkaW86IHRydWUsXG4gIHZpZGVvOiB7IHdpZHRoOiA2NDAsIGhlaWdodDogMzYwLCBmcmFtZVJhdGU6IDI0IH0sXG59O1xuXG5leHBvcnQgY29uc3QgTE9DQUxfUEVFUl9JRCA9IFwibG9jYWwtcGVlclwiO1xuIiwgImV4cG9ydCBmdW5jdGlvbiBnZXRSb29tSWQoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vbVwiKSEuZGF0YXNldC5yb29tSWQhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBEaXNjb25uZWN0QnV0dG9uKGZ1bikge1xuICBjb25zdCBkaXNjb25uZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJkaXNjb25uZWN0XCJcbiAgKSEgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGRpc2Nvbm5lY3RCdXR0b24ub25jbGljayA9IGZ1bjtcbn1cblxuZnVuY3Rpb24gZWxlbWVudElkKHBlZXJJZDogc3RyaW5nLCB0eXBlOiBcInZpZGVvXCIgfCBcImF1ZGlvXCIgfCBcImZlZWRcIikge1xuICByZXR1cm4gYCR7dHlwZX0tJHtwZWVySWR9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGFjaFN0cmVhbShzdHJlYW06IE1lZGlhU3RyZWFtLCBwZWVySWQ6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCB2aWRlb0lkID0gZWxlbWVudElkKHBlZXJJZCwgXCJ2aWRlb1wiKTtcbiAgY29uc3QgYXVkaW9JZCA9IGVsZW1lbnRJZChwZWVySWQsIFwiYXVkaW9cIik7XG5cbiAgbGV0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlkZW9JZCkgYXMgSFRNTFZpZGVvRWxlbWVudDtcbiAgbGV0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXVkaW9JZCkgYXMgSFRNTEF1ZGlvRWxlbWVudDtcblxuICB2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XG4gIGF1ZGlvLnNyY09iamVjdCA9IHN0cmVhbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFZpZGVvRWxlbWVudChcbiAgcGVlcklkOiBzdHJpbmcsXG4gIGxhYmVsOiBzdHJpbmcsXG4gIGlzTG9jYWxWaWRlbzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHZpZGVvSWQgPSBlbGVtZW50SWQocGVlcklkLCBcInZpZGVvXCIpO1xuICBjb25zdCBhdWRpb0lkID0gZWxlbWVudElkKHBlZXJJZCwgXCJhdWRpb1wiKTtcblxuICBsZXQgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2aWRlb0lkKSBhcyBIVE1MVmlkZW9FbGVtZW50O1xuICBsZXQgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhdWRpb0lkKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuXG4gIGlmICghdmlkZW8gJiYgIWF1ZGlvKSB7XG4gICAgY29uc3QgdmFsdWVzID0gc2V0dXBWaWRlb0ZlZWQocGVlcklkLCBsYWJlbCwgaXNMb2NhbFZpZGVvKTtcbiAgICB2aWRlbyA9IHZhbHVlcy52aWRlbztcbiAgICBhdWRpbyA9IHZhbHVlcy5hdWRpbztcbiAgfVxuXG4gIHZpZGVvLmlkID0gdmlkZW9JZDtcbiAgdmlkZW8uYXV0b3BsYXkgPSB0cnVlO1xuICB2aWRlby5wbGF5c0lubGluZSA9IHRydWU7XG4gIHZpZGVvLm11dGVkID0gdHJ1ZTtcblxuICBhdWRpby5pZCA9IGF1ZGlvSWQ7XG4gIGF1ZGlvLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgaWYgKGlzTG9jYWxWaWRlbykge1xuICAgIGF1ZGlvLm11dGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UGFydGljaXBhbnRzTGlzdChwYXJ0aWNpcGFudHM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcbiAgY29uc3QgcGFydGljaXBhbnRzTmFtZXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwicGFydGljaXBhbnRzLWxpc3RcIlxuICApIGFzIEhUTUxEaXZFbGVtZW50O1xuICBwYXJ0aWNpcGFudHNOYW1lc0VsLmlubmVySFRNTCA9XG4gICAgXCI8Yj5QYXJ0aWNpcGFudHM8L2I+OiBcIiArIHBhcnRpY2lwYW50cy5qb2luKFwiLCBcIik7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZVZpZGVvc0dyaWQoKSB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvcy1ncmlkXCIpITtcblxuICBjb25zdCB2aWRlb3MgPSBncmlkLmNoaWxkcmVuLmxlbmd0aDtcblxuICBsZXQgdmlkZW9zUGVyUm93O1xuXG4gIC8vIGJyZWFrIHBvaW50cyBmb3IgZ3JpZCBsYXlvdXRcbiAgaWYgKHZpZGVvcyA8IDIpIHtcbiAgICB2aWRlb3NQZXJSb3cgPSAxO1xuICB9IGVsc2UgaWYgKHZpZGVvcyA8IDUpIHtcbiAgICB2aWRlb3NQZXJSb3cgPSAyO1xuICB9IGVsc2UgaWYgKHZpZGVvcyA8IDcpIHtcbiAgICB2aWRlb3NQZXJSb3cgPSAzO1xuICB9IGVsc2Uge1xuICAgIHZpZGVvc1BlclJvdyA9IDQ7XG4gIH1cblxuICBsZXQgY2xhc3Nlc1RvUmVtb3ZlOiBzdHJpbmdbXSA9IFtdO1xuICBmb3IgKGNvbnN0IFtpbmRleCwgdmFsdWVdIG9mIGdyaWQuY2xhc3NMaXN0LmVudHJpZXMoKSkge1xuICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhcImdyaWQtY29sc1wiKSkge1xuICAgICAgY2xhc3Nlc1RvUmVtb3ZlLnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGNsYXNzZXNUb1JlbW92ZS5mb3JFYWNoKChjbGFzc05hbWUpID0+IGdyaWQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpKTtcblxuICAvLyBhZGQgdGhlIGNsYXNzIHRvIGJlIGEgZGVmYXVsdCBmb3IgbW9iaWxlc1xuICBncmlkLmNsYXNzTGlzdC5hZGQoXCJncmlkLWNvbHMtMVwiKTtcbiAgZ3JpZC5jbGFzc0xpc3QuYWRkKGBtZDpncmlkLWNvbHMtJHt2aWRlb3NQZXJSb3d9YCk7XG59XG5cbmZ1bmN0aW9uIHNldHVwVmlkZW9GZWVkKHBlZXJJZDogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBpc0xvY2FsVmlkZW86IGJvb2xlYW4pIHtcbiAgY29uc3QgY29weSA9IChcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZGVvLWZlZWQtdGVtcGxhdGVcIikgYXMgSFRNTFRlbXBsYXRlRWxlbWVudFxuICApLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIEVsZW1lbnQ7XG4gIGNvbnN0IGZlZWQgPSBjb3B5LnF1ZXJ5U2VsZWN0b3IoXCJkaXZbbmFtZT0ndmlkZW8tZmVlZCddXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xuICBjb25zdCBhdWRpbyA9IGZlZWQucXVlcnlTZWxlY3RvcihcImF1ZGlvXCIpIGFzIEhUTUxBdWRpb0VsZW1lbnQ7XG4gIGNvbnN0IHZpZGVvID0gZmVlZC5xdWVyeVNlbGVjdG9yKFwidmlkZW9cIikgYXMgSFRNTFZpZGVvRWxlbWVudDtcbiAgY29uc3QgdmlkZW9MYWJlbCA9IGZlZWQucXVlcnlTZWxlY3RvcihcbiAgICBcImRpdltuYW1lPSd2aWRlby1sYWJlbCddXCJcbiAgKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuICBmZWVkLmlkID0gZWxlbWVudElkKHBlZXJJZCwgXCJmZWVkXCIpO1xuICB2aWRlb0xhYmVsLmlubmVyVGV4dCA9IGxhYmVsO1xuXG4gIGlmIChpc0xvY2FsVmlkZW8pIHtcbiAgICB2aWRlby5jbGFzc0xpc3QuYWRkKFwiZmxpcC1ob3Jpem9udGFsbHlcIik7XG4gIH1cblxuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aWRlb3MtZ3JpZFwiKSE7XG4gIGdyaWQuYXBwZW5kQ2hpbGQoZmVlZCk7XG4gIHJlc2l6ZVZpZGVvc0dyaWQoKTtcblxuICByZXR1cm4geyBhdWRpbywgdmlkZW8gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVZpZGVvRWxlbWVudChwZWVySWQ6IHN0cmluZyk6IHZvaWQge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQocGVlcklkLCBcImZlZWRcIikpPy5yZW1vdmUoKTtcbiAgcmVzaXplVmlkZW9zR3JpZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RXJyb3JNZXNzYWdlKFxuICBtZXNzYWdlOiBzdHJpbmcgPSBcIkNhbm5vdCBjb25uZWN0IHRvIHNlcnZlciwgcmVmcmVzaCB0aGUgcGFnZSBhbmQgdHJ5IGFnYWluXCJcbik6IHZvaWQge1xuICBjb25zdCBlcnJvckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlkZW9jaGF0LWVycm9yXCIpO1xuICBpZiAoZXJyb3JDb250YWluZXIpIHtcbiAgICBlcnJvckNvbnRhaW5lci5pbm5lckhUTUwgPSBtZXNzYWdlO1xuICAgIGVycm9yQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBNRURJQV9DT05TVFJBSU5UUywgTE9DQUxfUEVFUl9JRCB9IGZyb20gXCIuL2NvbnN0c1wiO1xuaW1wb3J0IHtcbiAgYWRkVmlkZW9FbGVtZW50LFxuICBnZXRSb29tSWQsXG4gIHJlbW92ZVZpZGVvRWxlbWVudCxcbiAgc2V0RXJyb3JNZXNzYWdlLFxuICBzZXRQYXJ0aWNpcGFudHNMaXN0LFxuICBhdHRhY2hTdHJlYW0sXG4gIHNldHVwRGlzY29ubmVjdEJ1dHRvbixcbn0gZnJvbSBcIi4vcm9vbV91aVwiO1xuaW1wb3J0IHtcbiAgTWVtYnJhbmVXZWJSVEMsXG4gIFBlZXIsXG4gIFNlcmlhbGl6ZWRNZWRpYUV2ZW50LFxufSBmcm9tIFwiQG1lbWJyYW5lZnJhbWV3b3JrL21lbWJyYW5lLXdlYnJ0Yy1qc1wiO1xuaW1wb3J0IHsgUHVzaCwgU29ja2V0IH0gZnJvbSBcInBob2VuaXhcIjtcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSBcInF1ZXJ5LXN0cmluZ1wiO1xuXG5leHBvcnQgY2xhc3MgUm9vbSB7XG4gIHByaXZhdGUgcGVlcnM6IFBlZXJbXSA9IFtdO1xuICBwcml2YXRlIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgbG9jYWxTdHJlYW06IE1lZGlhU3RyZWFtIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIHdlYnJ0YzogTWVtYnJhbmVXZWJSVEM7XG5cbiAgcHJpdmF0ZSBzb2NrZXQ7XG4gIHByaXZhdGUgd2VicnRjU29ja2V0UmVmczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSB3ZWJydGNDaGFubmVsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc29ja2V0ID0gbmV3IFNvY2tldChcIi9zb2NrZXRcIik7XG4gICAgdGhpcy5zb2NrZXQuY29ubmVjdCgpO1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPSB0aGlzLnBhcnNlVXJsKCk7XG4gICAgdGhpcy53ZWJydGNDaGFubmVsID0gdGhpcy5zb2NrZXQuY2hhbm5lbChgcm9vbToke2dldFJvb21JZCgpfWApO1xuXG4gICAgdGhpcy53ZWJydGNDaGFubmVsLm9uRXJyb3IoKCkgPT4ge1xuICAgICAgdGhpcy5zb2NrZXRPZmYoKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbiAgICB0aGlzLndlYnJ0Y0NoYW5uZWwub25DbG9zZSgoKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldE9mZigpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy53ZWJydGNTb2NrZXRSZWZzLnB1c2godGhpcy5zb2NrZXQub25FcnJvcih0aGlzLmxlYXZlKSk7XG4gICAgdGhpcy53ZWJydGNTb2NrZXRSZWZzLnB1c2godGhpcy5zb2NrZXQub25DbG9zZSh0aGlzLmxlYXZlKSk7XG5cbiAgICB0aGlzLndlYnJ0YyA9IG5ldyBNZW1icmFuZVdlYlJUQyh7XG4gICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgb25TZW5kTWVkaWFFdmVudDogKG1lZGlhRXZlbnQ6IFNlcmlhbGl6ZWRNZWRpYUV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy53ZWJydGNDaGFubmVsLnB1c2goXCJtZWRpYUV2ZW50XCIsIHsgZGF0YTogbWVkaWFFdmVudCB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Db25uZWN0aW9uRXJyb3I6IHNldEVycm9yTWVzc2FnZSxcbiAgICAgICAgb25Kb2luU3VjY2VzczogKHBlZXJJZCwgcGVlcnNJblJvb20pID0+IHtcbiAgICAgICAgICB0aGlzLmxvY2FsU3RyZWFtIS5nZXRUcmFja3MoKS5mb3JFYWNoKCh0cmFjaykgPT5cbiAgICAgICAgICAgIHRoaXMud2VicnRjLmFkZFRyYWNrKHRyYWNrLCB0aGlzLmxvY2FsU3RyZWFtISwge30pXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHRoaXMucGVlcnMgPSBwZWVyc0luUm9vbTtcbiAgICAgICAgICB0aGlzLnBlZXJzLmZvckVhY2goKHBlZXIpID0+IHtcbiAgICAgICAgICAgIGFkZFZpZGVvRWxlbWVudChwZWVyLmlkLCBwZWVyLm1ldGFkYXRhLmRpc3BsYXlOYW1lLCBmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVQYXJ0aWNpcGFudHNMaXN0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSm9pbkVycm9yOiAobWV0YWRhdGEpID0+IHtcbiAgICAgICAgICB0aHJvdyBgUGVlciBkZW5pZWQuYDtcbiAgICAgICAgfSxcbiAgICAgICAgb25UcmFja1JlYWR5OiAoeyBzdHJlYW0sIHBlZXIsIG1ldGFkYXRhIH0pID0+IHtcbiAgICAgICAgICBhdHRhY2hTdHJlYW0oc3RyZWFtISwgcGVlci5pZCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVHJhY2tBZGRlZDogKGN0eCkgPT4ge30sXG4gICAgICAgIG9uVHJhY2tSZW1vdmVkOiAoY3R4KSA9PiB7fSxcbiAgICAgICAgb25QZWVySm9pbmVkOiAocGVlcikgPT4ge1xuICAgICAgICAgIHRoaXMucGVlcnMucHVzaChwZWVyKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBhcnRpY2lwYW50c0xpc3QoKTtcbiAgICAgICAgICBhZGRWaWRlb0VsZW1lbnQocGVlci5pZCwgcGVlci5tZXRhZGF0YS5kaXNwbGF5TmFtZSwgZmFsc2UpO1xuICAgICAgICB9LFxuICAgICAgICBvblBlZXJMZWZ0OiAocGVlcikgPT4ge1xuICAgICAgICAgIHRoaXMucGVlcnMgPSB0aGlzLnBlZXJzLmZpbHRlcigocCkgPT4gcC5pZCAhPT0gcGVlci5pZCk7XG4gICAgICAgICAgcmVtb3ZlVmlkZW9FbGVtZW50KHBlZXIuaWQpO1xuICAgICAgICAgIHRoaXMudXBkYXRlUGFydGljaXBhbnRzTGlzdCgpO1xuICAgICAgICB9LFxuICAgICAgICBvblBlZXJVcGRhdGVkOiAoY3R4KSA9PiB7fSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLndlYnJ0Y0NoYW5uZWwub24oXCJtZWRpYUV2ZW50XCIsIChldmVudDogYW55KSA9PlxuICAgICAgdGhpcy53ZWJydGMucmVjZWl2ZU1lZGlhRXZlbnQoZXZlbnQuZGF0YSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGpvaW4gPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xuICAgICAgc2V0dXBEaXNjb25uZWN0QnV0dG9uKCgpID0+IHtcbiAgICAgICAgdGhpcy5sZWF2ZSgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIlwiKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy53ZWJydGMuam9pbih7IGRpc3BsYXlOYW1lOiB0aGlzLmRpc3BsYXlOYW1lIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hpbGUgam9pbmluZyB0byB0aGUgcm9vbTpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGluaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMubG9jYWxTdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShcbiAgICAgICAgTUVESUFfQ09OU1RSQUlOVFNcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFxuICAgICAgICBcIkZhaWxlZCB0byBzZXR1cCB2aWRlbyByb29tLCBtYWtlIHN1cmUgdG8gZ3JhbnQgY2FtZXJhIGFuZCBtaWNyb3Bob25lIHBlcm1pc3Npb25zXCJcbiAgICAgICk7XG4gICAgICB0aHJvdyBcImVycm9yXCI7XG4gICAgfVxuXG4gICAgYWRkVmlkZW9FbGVtZW50KExPQ0FMX1BFRVJfSUQsIFwiTWVcIiwgdHJ1ZSk7XG4gICAgYXR0YWNoU3RyZWFtKHRoaXMubG9jYWxTdHJlYW0hLCBMT0NBTF9QRUVSX0lEKTtcblxuICAgIGF3YWl0IHRoaXMucGhvZW5peENoYW5uZWxQdXNoUmVzdWx0KHRoaXMud2VicnRjQ2hhbm5lbC5qb2luKCkpO1xuICB9O1xuXG4gIHByaXZhdGUgbGVhdmUgPSAoKSA9PiB7XG4gICAgdGhpcy53ZWJydGMubGVhdmUoKTtcbiAgICB0aGlzLndlYnJ0Y0NoYW5uZWwubGVhdmUoKTtcbiAgICB0aGlzLnNvY2tldE9mZigpO1xuICB9O1xuXG4gIHByaXZhdGUgc29ja2V0T2ZmID0gKCkgPT4ge1xuICAgIHRoaXMuc29ja2V0Lm9mZih0aGlzLndlYnJ0Y1NvY2tldFJlZnMpO1xuICAgIHdoaWxlICh0aGlzLndlYnJ0Y1NvY2tldFJlZnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy53ZWJydGNTb2NrZXRSZWZzLnBvcCgpO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIHBhcnNlVXJsID0gKCk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgeyBkaXNwbGF5X25hbWU6IGRpc3BsYXlOYW1lIH0gPSBwYXJzZShkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2gpO1xuXG4gICAgLy8gcmVtb3ZlIHF1ZXJ5IHBhcmFtcyB3aXRob3V0IHJlbG9hZGluZyB0aGUgcGFnZVxuICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuXG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lIGFzIHN0cmluZztcbiAgfTtcblxuICBwcml2YXRlIHVwZGF0ZVBhcnRpY2lwYW50c0xpc3QgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcGFydGljaXBhbnRzTmFtZXMgPSB0aGlzLnBlZXJzLm1hcCgocCkgPT4gcC5tZXRhZGF0YS5kaXNwbGF5TmFtZSk7XG5cbiAgICBpZiAodGhpcy5kaXNwbGF5TmFtZSkge1xuICAgICAgcGFydGljaXBhbnRzTmFtZXMucHVzaCh0aGlzLmRpc3BsYXlOYW1lKTtcbiAgICB9XG5cbiAgICBzZXRQYXJ0aWNpcGFudHNMaXN0KHBhcnRpY2lwYW50c05hbWVzKTtcbiAgfTtcblxuICBwcml2YXRlIHBob2VuaXhDaGFubmVsUHVzaFJlc3VsdCA9IGFzeW5jIChwdXNoOiBQdXNoKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcHVzaFxuICAgICAgICAucmVjZWl2ZShcIm9rXCIsIChyZXNwb25zZTogYW55KSA9PiByZXNvbHZlKHJlc3BvbnNlKSlcbiAgICAgICAgLnJlY2VpdmUoXCJlcnJvclwiLCAocmVzcG9uc2U6IGFueSkgPT4gcmVqZWN0KHJlc3BvbnNlKSk7XG4gICAgfSk7XG4gIH07XG59XG4iLCAiLy8gd3JhcHMgdmFsdWUgaW4gY2xvc3VyZSBvciByZXR1cm5zIGNsb3N1cmVcbmV4cG9ydCBsZXQgY2xvc3VyZSA9ICh2YWx1ZSkgPT4ge1xuICBpZih0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIil7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH0gZWxzZSB7XG4gICAgbGV0IGNsb3N1cmUgPSBmdW5jdGlvbiAoKXsgcmV0dXJuIHZhbHVlIH1cbiAgICByZXR1cm4gY2xvc3VyZVxuICB9XG59XG4iLCAiZXhwb3J0IGNvbnN0IGdsb2JhbFNlbGYgPSB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiBudWxsXG5leHBvcnQgY29uc3QgcGh4V2luZG93ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IG51bGxcbmV4cG9ydCBjb25zdCBnbG9iYWwgPSBnbG9iYWxTZWxmIHx8IHBoeFdpbmRvdyB8fCBnbG9iYWxcbmV4cG9ydCBjb25zdCBERUZBVUxUX1ZTTiA9IFwiMi4wLjBcIlxuZXhwb3J0IGNvbnN0IFNPQ0tFVF9TVEFURVMgPSB7Y29ubmVjdGluZzogMCwgb3BlbjogMSwgY2xvc2luZzogMiwgY2xvc2VkOiAzfVxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElNRU9VVCA9IDEwMDAwXG5leHBvcnQgY29uc3QgV1NfQ0xPU0VfTk9STUFMID0gMTAwMFxuZXhwb3J0IGNvbnN0IENIQU5ORUxfU1RBVEVTID0ge1xuICBjbG9zZWQ6IFwiY2xvc2VkXCIsXG4gIGVycm9yZWQ6IFwiZXJyb3JlZFwiLFxuICBqb2luZWQ6IFwiam9pbmVkXCIsXG4gIGpvaW5pbmc6IFwiam9pbmluZ1wiLFxuICBsZWF2aW5nOiBcImxlYXZpbmdcIixcbn1cbmV4cG9ydCBjb25zdCBDSEFOTkVMX0VWRU5UUyA9IHtcbiAgY2xvc2U6IFwicGh4X2Nsb3NlXCIsXG4gIGVycm9yOiBcInBoeF9lcnJvclwiLFxuICBqb2luOiBcInBoeF9qb2luXCIsXG4gIHJlcGx5OiBcInBoeF9yZXBseVwiLFxuICBsZWF2ZTogXCJwaHhfbGVhdmVcIlxufVxuXG5leHBvcnQgY29uc3QgVFJBTlNQT1JUUyA9IHtcbiAgbG9uZ3BvbGw6IFwibG9uZ3BvbGxcIixcbiAgd2Vic29ja2V0OiBcIndlYnNvY2tldFwiXG59XG5leHBvcnQgY29uc3QgWEhSX1NUQVRFUyA9IHtcbiAgY29tcGxldGU6IDRcbn1cbiIsICIvKipcbiAqIEluaXRpYWxpemVzIHRoZSBQdXNoXG4gKiBAcGFyYW0ge0NoYW5uZWx9IGNoYW5uZWwgLSBUaGUgQ2hhbm5lbFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gVGhlIGV2ZW50LCBmb3IgZXhhbXBsZSBgXCJwaHhfam9pblwiYFxuICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWQgLSBUaGUgcGF5bG9hZCwgZm9yIGV4YW1wbGUgYHt1c2VyX2lkOiAxMjN9YFxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVvdXQgLSBUaGUgcHVzaCB0aW1lb3V0IGluIG1pbGxpc2Vjb25kc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdXNoIHtcbiAgY29uc3RydWN0b3IoY2hhbm5lbCwgZXZlbnQsIHBheWxvYWQsIHRpbWVvdXQpe1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWxcbiAgICB0aGlzLmV2ZW50ID0gZXZlbnRcbiAgICB0aGlzLnBheWxvYWQgPSBwYXlsb2FkIHx8IGZ1bmN0aW9uICgpeyByZXR1cm4ge30gfVxuICAgIHRoaXMucmVjZWl2ZWRSZXNwID0gbnVsbFxuICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXRcbiAgICB0aGlzLnRpbWVvdXRUaW1lciA9IG51bGxcbiAgICB0aGlzLnJlY0hvb2tzID0gW11cbiAgICB0aGlzLnNlbnQgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0XG4gICAqL1xuICByZXNlbmQodGltZW91dCl7XG4gICAgdGhpcy50aW1lb3V0ID0gdGltZW91dFxuICAgIHRoaXMucmVzZXQoKVxuICAgIHRoaXMuc2VuZCgpXG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHNlbmQoKXtcbiAgICBpZih0aGlzLmhhc1JlY2VpdmVkKFwidGltZW91dFwiKSl7IHJldHVybiB9XG4gICAgdGhpcy5zdGFydFRpbWVvdXQoKVxuICAgIHRoaXMuc2VudCA9IHRydWVcbiAgICB0aGlzLmNoYW5uZWwuc29ja2V0LnB1c2goe1xuICAgICAgdG9waWM6IHRoaXMuY2hhbm5lbC50b3BpYyxcbiAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgcGF5bG9hZDogdGhpcy5wYXlsb2FkKCksXG4gICAgICByZWY6IHRoaXMucmVmLFxuICAgICAgam9pbl9yZWY6IHRoaXMuY2hhbm5lbC5qb2luUmVmKClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gc3RhdHVzXG4gICAqIEBwYXJhbSB7Kn0gY2FsbGJhY2tcbiAgICovXG4gIHJlY2VpdmUoc3RhdHVzLCBjYWxsYmFjayl7XG4gICAgaWYodGhpcy5oYXNSZWNlaXZlZChzdGF0dXMpKXtcbiAgICAgIGNhbGxiYWNrKHRoaXMucmVjZWl2ZWRSZXNwLnJlc3BvbnNlKVxuICAgIH1cblxuICAgIHRoaXMucmVjSG9va3MucHVzaCh7c3RhdHVzLCBjYWxsYmFja30pXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVzZXQoKXtcbiAgICB0aGlzLmNhbmNlbFJlZkV2ZW50KClcbiAgICB0aGlzLnJlZiA9IG51bGxcbiAgICB0aGlzLnJlZkV2ZW50ID0gbnVsbFxuICAgIHRoaXMucmVjZWl2ZWRSZXNwID0gbnVsbFxuICAgIHRoaXMuc2VudCA9IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIG1hdGNoUmVjZWl2ZSh7c3RhdHVzLCByZXNwb25zZSwgX3JlZn0pe1xuICAgIHRoaXMucmVjSG9va3MuZmlsdGVyKGggPT4gaC5zdGF0dXMgPT09IHN0YXR1cylcbiAgICAgIC5mb3JFYWNoKGggPT4gaC5jYWxsYmFjayhyZXNwb25zZSkpXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhbmNlbFJlZkV2ZW50KCl7XG4gICAgaWYoIXRoaXMucmVmRXZlbnQpeyByZXR1cm4gfVxuICAgIHRoaXMuY2hhbm5lbC5vZmYodGhpcy5yZWZFdmVudClcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FuY2VsVGltZW91dCgpe1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRUaW1lcilcbiAgICB0aGlzLnRpbWVvdXRUaW1lciA9IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RhcnRUaW1lb3V0KCl7XG4gICAgaWYodGhpcy50aW1lb3V0VGltZXIpeyB0aGlzLmNhbmNlbFRpbWVvdXQoKSB9XG4gICAgdGhpcy5yZWYgPSB0aGlzLmNoYW5uZWwuc29ja2V0Lm1ha2VSZWYoKVxuICAgIHRoaXMucmVmRXZlbnQgPSB0aGlzLmNoYW5uZWwucmVwbHlFdmVudE5hbWUodGhpcy5yZWYpXG5cbiAgICB0aGlzLmNoYW5uZWwub24odGhpcy5yZWZFdmVudCwgcGF5bG9hZCA9PiB7XG4gICAgICB0aGlzLmNhbmNlbFJlZkV2ZW50KClcbiAgICAgIHRoaXMuY2FuY2VsVGltZW91dCgpXG4gICAgICB0aGlzLnJlY2VpdmVkUmVzcCA9IHBheWxvYWRcbiAgICAgIHRoaXMubWF0Y2hSZWNlaXZlKHBheWxvYWQpXG4gICAgfSlcblxuICAgIHRoaXMudGltZW91dFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXIoXCJ0aW1lb3V0XCIsIHt9KVxuICAgIH0sIHRoaXMudGltZW91dClcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFzUmVjZWl2ZWQoc3RhdHVzKXtcbiAgICByZXR1cm4gdGhpcy5yZWNlaXZlZFJlc3AgJiYgdGhpcy5yZWNlaXZlZFJlc3Auc3RhdHVzID09PSBzdGF0dXNcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdHJpZ2dlcihzdGF0dXMsIHJlc3BvbnNlKXtcbiAgICB0aGlzLmNoYW5uZWwudHJpZ2dlcih0aGlzLnJlZkV2ZW50LCB7c3RhdHVzLCByZXNwb25zZX0pXG4gIH1cbn1cbiIsICIvKipcbiAqXG4gKiBDcmVhdGVzIGEgdGltZXIgdGhhdCBhY2NlcHRzIGEgYHRpbWVyQ2FsY2AgZnVuY3Rpb24gdG8gcGVyZm9ybVxuICogY2FsY3VsYXRlZCB0aW1lb3V0IHJldHJpZXMsIHN1Y2ggYXMgZXhwb25lbnRpYWwgYmFja29mZi5cbiAqXG4gKiBAZXhhbXBsZVxuICogbGV0IHJlY29ubmVjdFRpbWVyID0gbmV3IFRpbWVyKCgpID0+IHRoaXMuY29ubmVjdCgpLCBmdW5jdGlvbih0cmllcyl7XG4gKiAgIHJldHVybiBbMTAwMCwgNTAwMCwgMTAwMDBdW3RyaWVzIC0gMV0gfHwgMTAwMDBcbiAqIH0pXG4gKiByZWNvbm5lY3RUaW1lci5zY2hlZHVsZVRpbWVvdXQoKSAvLyBmaXJlcyBhZnRlciAxMDAwXG4gKiByZWNvbm5lY3RUaW1lci5zY2hlZHVsZVRpbWVvdXQoKSAvLyBmaXJlcyBhZnRlciA1MDAwXG4gKiByZWNvbm5lY3RUaW1lci5yZXNldCgpXG4gKiByZWNvbm5lY3RUaW1lci5zY2hlZHVsZVRpbWVvdXQoKSAvLyBmaXJlcyBhZnRlciAxMDAwXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRpbWVyQ2FsY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XG4gIGNvbnN0cnVjdG9yKGNhbGxiYWNrLCB0aW1lckNhbGMpe1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFja1xuICAgIHRoaXMudGltZXJDYWxjID0gdGltZXJDYWxjXG4gICAgdGhpcy50aW1lciA9IG51bGxcbiAgICB0aGlzLnRyaWVzID0gMFxuICB9XG5cbiAgcmVzZXQoKXtcbiAgICB0aGlzLnRyaWVzID0gMFxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbHMgYW55IHByZXZpb3VzIHNjaGVkdWxlVGltZW91dCBhbmQgc2NoZWR1bGVzIGNhbGxiYWNrXG4gICAqL1xuICBzY2hlZHVsZVRpbWVvdXQoKXtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcilcblxuICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudHJpZXMgPSB0aGlzLnRyaWVzICsgMVxuICAgICAgdGhpcy5jYWxsYmFjaygpXG4gICAgfSwgdGhpcy50aW1lckNhbGModGhpcy50cmllcyArIDEpKVxuICB9XG59XG4iLCAiaW1wb3J0IHtjbG9zdXJlfSBmcm9tIFwiLi91dGlsc1wiXG5pbXBvcnQge1xuICBDSEFOTkVMX0VWRU5UUyxcbiAgQ0hBTk5FTF9TVEFURVMsXG59IGZyb20gXCIuL2NvbnN0YW50c1wiXG5cbmltcG9ydCBQdXNoIGZyb20gXCIuL3B1c2hcIlxuaW1wb3J0IFRpbWVyIGZyb20gXCIuL3RpbWVyXCJcblxuLyoqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRvcGljXG4gKiBAcGFyYW0geyhPYmplY3R8ZnVuY3Rpb24pfSBwYXJhbXNcbiAqIEBwYXJhbSB7U29ja2V0fSBzb2NrZXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbm5lbCB7XG4gIGNvbnN0cnVjdG9yKHRvcGljLCBwYXJhbXMsIHNvY2tldCl7XG4gICAgdGhpcy5zdGF0ZSA9IENIQU5ORUxfU1RBVEVTLmNsb3NlZFxuICAgIHRoaXMudG9waWMgPSB0b3BpY1xuICAgIHRoaXMucGFyYW1zID0gY2xvc3VyZShwYXJhbXMgfHwge30pXG4gICAgdGhpcy5zb2NrZXQgPSBzb2NrZXRcbiAgICB0aGlzLmJpbmRpbmdzID0gW11cbiAgICB0aGlzLmJpbmRpbmdSZWYgPSAwXG4gICAgdGhpcy50aW1lb3V0ID0gdGhpcy5zb2NrZXQudGltZW91dFxuICAgIHRoaXMuam9pbmVkT25jZSA9IGZhbHNlXG4gICAgdGhpcy5qb2luUHVzaCA9IG5ldyBQdXNoKHRoaXMsIENIQU5ORUxfRVZFTlRTLmpvaW4sIHRoaXMucGFyYW1zLCB0aGlzLnRpbWVvdXQpXG4gICAgdGhpcy5wdXNoQnVmZmVyID0gW11cbiAgICB0aGlzLnN0YXRlQ2hhbmdlUmVmcyA9IFtdXG5cbiAgICB0aGlzLnJlam9pblRpbWVyID0gbmV3IFRpbWVyKCgpID0+IHtcbiAgICAgIGlmKHRoaXMuc29ja2V0LmlzQ29ubmVjdGVkKCkpeyB0aGlzLnJlam9pbigpIH1cbiAgICB9LCB0aGlzLnNvY2tldC5yZWpvaW5BZnRlck1zKVxuICAgIHRoaXMuc3RhdGVDaGFuZ2VSZWZzLnB1c2godGhpcy5zb2NrZXQub25FcnJvcigoKSA9PiB0aGlzLnJlam9pblRpbWVyLnJlc2V0KCkpKVxuICAgIHRoaXMuc3RhdGVDaGFuZ2VSZWZzLnB1c2godGhpcy5zb2NrZXQub25PcGVuKCgpID0+IHtcbiAgICAgIHRoaXMucmVqb2luVGltZXIucmVzZXQoKVxuICAgICAgaWYodGhpcy5pc0Vycm9yZWQoKSl7IHRoaXMucmVqb2luKCkgfVxuICAgIH0pXG4gICAgKVxuICAgIHRoaXMuam9pblB1c2gucmVjZWl2ZShcIm9rXCIsICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUgPSBDSEFOTkVMX1NUQVRFUy5qb2luZWRcbiAgICAgIHRoaXMucmVqb2luVGltZXIucmVzZXQoKVxuICAgICAgdGhpcy5wdXNoQnVmZmVyLmZvckVhY2gocHVzaEV2ZW50ID0+IHB1c2hFdmVudC5zZW5kKCkpXG4gICAgICB0aGlzLnB1c2hCdWZmZXIgPSBbXVxuICAgIH0pXG4gICAgdGhpcy5qb2luUHVzaC5yZWNlaXZlKFwiZXJyb3JcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZSA9IENIQU5ORUxfU1RBVEVTLmVycm9yZWRcbiAgICAgIGlmKHRoaXMuc29ja2V0LmlzQ29ubmVjdGVkKCkpeyB0aGlzLnJlam9pblRpbWVyLnNjaGVkdWxlVGltZW91dCgpIH1cbiAgICB9KVxuICAgIHRoaXMub25DbG9zZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlam9pblRpbWVyLnJlc2V0KClcbiAgICAgIGlmKHRoaXMuc29ja2V0Lmhhc0xvZ2dlcigpKSB0aGlzLnNvY2tldC5sb2coXCJjaGFubmVsXCIsIGBjbG9zZSAke3RoaXMudG9waWN9ICR7dGhpcy5qb2luUmVmKCl9YClcbiAgICAgIHRoaXMuc3RhdGUgPSBDSEFOTkVMX1NUQVRFUy5jbG9zZWRcbiAgICAgIHRoaXMuc29ja2V0LnJlbW92ZSh0aGlzKVxuICAgIH0pXG4gICAgdGhpcy5vbkVycm9yKHJlYXNvbiA9PiB7XG4gICAgICBpZih0aGlzLnNvY2tldC5oYXNMb2dnZXIoKSkgdGhpcy5zb2NrZXQubG9nKFwiY2hhbm5lbFwiLCBgZXJyb3IgJHt0aGlzLnRvcGljfWAsIHJlYXNvbilcbiAgICAgIGlmKHRoaXMuaXNKb2luaW5nKCkpeyB0aGlzLmpvaW5QdXNoLnJlc2V0KCkgfVxuICAgICAgdGhpcy5zdGF0ZSA9IENIQU5ORUxfU1RBVEVTLmVycm9yZWRcbiAgICAgIGlmKHRoaXMuc29ja2V0LmlzQ29ubmVjdGVkKCkpeyB0aGlzLnJlam9pblRpbWVyLnNjaGVkdWxlVGltZW91dCgpIH1cbiAgICB9KVxuICAgIHRoaXMuam9pblB1c2gucmVjZWl2ZShcInRpbWVvdXRcIiwgKCkgPT4ge1xuICAgICAgaWYodGhpcy5zb2NrZXQuaGFzTG9nZ2VyKCkpIHRoaXMuc29ja2V0LmxvZyhcImNoYW5uZWxcIiwgYHRpbWVvdXQgJHt0aGlzLnRvcGljfSAoJHt0aGlzLmpvaW5SZWYoKX0pYCwgdGhpcy5qb2luUHVzaC50aW1lb3V0KVxuICAgICAgbGV0IGxlYXZlUHVzaCA9IG5ldyBQdXNoKHRoaXMsIENIQU5ORUxfRVZFTlRTLmxlYXZlLCBjbG9zdXJlKHt9KSwgdGhpcy50aW1lb3V0KVxuICAgICAgbGVhdmVQdXNoLnNlbmQoKVxuICAgICAgdGhpcy5zdGF0ZSA9IENIQU5ORUxfU1RBVEVTLmVycm9yZWRcbiAgICAgIHRoaXMuam9pblB1c2gucmVzZXQoKVxuICAgICAgaWYodGhpcy5zb2NrZXQuaXNDb25uZWN0ZWQoKSl7IHRoaXMucmVqb2luVGltZXIuc2NoZWR1bGVUaW1lb3V0KCkgfVxuICAgIH0pXG4gICAgdGhpcy5vbihDSEFOTkVMX0VWRU5UUy5yZXBseSwgKHBheWxvYWQsIHJlZikgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VyKHRoaXMucmVwbHlFdmVudE5hbWUocmVmKSwgcGF5bG9hZClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEpvaW4gdGhlIGNoYW5uZWxcbiAgICogQHBhcmFtIHtpbnRlZ2VyfSB0aW1lb3V0XG4gICAqIEByZXR1cm5zIHtQdXNofVxuICAgKi9cbiAgam9pbih0aW1lb3V0ID0gdGhpcy50aW1lb3V0KXtcbiAgICBpZih0aGlzLmpvaW5lZE9uY2Upe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJpZWQgdG8gam9pbiBtdWx0aXBsZSB0aW1lcy4gJ2pvaW4nIGNhbiBvbmx5IGJlIGNhbGxlZCBhIHNpbmdsZSB0aW1lIHBlciBjaGFubmVsIGluc3RhbmNlXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXRcbiAgICAgIHRoaXMuam9pbmVkT25jZSA9IHRydWVcbiAgICAgIHRoaXMucmVqb2luKClcbiAgICAgIHJldHVybiB0aGlzLmpvaW5QdXNoXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhvb2sgaW50byBjaGFubmVsIGNsb3NlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqL1xuICBvbkNsb3NlKGNhbGxiYWNrKXtcbiAgICB0aGlzLm9uKENIQU5ORUxfRVZFTlRTLmNsb3NlLCBjYWxsYmFjaylcbiAgfVxuXG4gIC8qKlxuICAgKiBIb29rIGludG8gY2hhbm5lbCBlcnJvcnNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICovXG4gIG9uRXJyb3IoY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLm9uKENIQU5ORUxfRVZFTlRTLmVycm9yLCByZWFzb24gPT4gY2FsbGJhY2socmVhc29uKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmVzIG9uIGNoYW5uZWwgZXZlbnRzXG4gICAqXG4gICAqIFN1YnNjcmlwdGlvbiByZXR1cm5zIGEgcmVmIGNvdW50ZXIsIHdoaWNoIGNhbiBiZSB1c2VkIGxhdGVyIHRvXG4gICAqIHVuc3Vic2NyaWJlIHRoZSBleGFjdCBldmVudCBsaXN0ZW5lclxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBjb25zdCByZWYxID0gY2hhbm5lbC5vbihcImV2ZW50XCIsIGRvX3N0dWZmKVxuICAgKiBjb25zdCByZWYyID0gY2hhbm5lbC5vbihcImV2ZW50XCIsIGRvX290aGVyX3N0dWZmKVxuICAgKiBjaGFubmVsLm9mZihcImV2ZW50XCIsIHJlZjEpXG4gICAqIC8vIFNpbmNlIHVuc3Vic2NyaXB0aW9uLCBkb19zdHVmZiB3b24ndCBmaXJlLFxuICAgKiAvLyB3aGlsZSBkb19vdGhlcl9zdHVmZiB3aWxsIGtlZXAgZmlyaW5nIG9uIHRoZSBcImV2ZW50XCJcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtpbnRlZ2VyfSByZWZcbiAgICovXG4gIG9uKGV2ZW50LCBjYWxsYmFjayl7XG4gICAgbGV0IHJlZiA9IHRoaXMuYmluZGluZ1JlZisrXG4gICAgdGhpcy5iaW5kaW5ncy5wdXNoKHtldmVudCwgcmVmLCBjYWxsYmFja30pXG4gICAgcmV0dXJuIHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlcyBvZmYgb2YgY2hhbm5lbCBldmVudHNcbiAgICpcbiAgICogVXNlIHRoZSByZWYgcmV0dXJuZWQgZnJvbSBhIGNoYW5uZWwub24oKSB0byB1bnN1YnNjcmliZSBvbmVcbiAgICogaGFuZGxlciwgb3IgcGFzcyBub3RoaW5nIGZvciB0aGUgcmVmIHRvIHVuc3Vic2NyaWJlIGFsbFxuICAgKiBoYW5kbGVycyBmb3IgdGhlIGdpdmVuIGV2ZW50LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBVbnN1YnNjcmliZSB0aGUgZG9fc3R1ZmYgaGFuZGxlclxuICAgKiBjb25zdCByZWYxID0gY2hhbm5lbC5vbihcImV2ZW50XCIsIGRvX3N0dWZmKVxuICAgKiBjaGFubmVsLm9mZihcImV2ZW50XCIsIHJlZjEpXG4gICAqXG4gICAqIC8vIFVuc3Vic2NyaWJlIGFsbCBoYW5kbGVycyBmcm9tIGV2ZW50XG4gICAqIGNoYW5uZWwub2ZmKFwiZXZlbnRcIilcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7aW50ZWdlcn0gcmVmXG4gICAqL1xuICBvZmYoZXZlbnQsIHJlZil7XG4gICAgdGhpcy5iaW5kaW5ncyA9IHRoaXMuYmluZGluZ3MuZmlsdGVyKChiaW5kKSA9PiB7XG4gICAgICByZXR1cm4gIShiaW5kLmV2ZW50ID09PSBldmVudCAmJiAodHlwZW9mIHJlZiA9PT0gXCJ1bmRlZmluZWRcIiB8fCByZWYgPT09IGJpbmQucmVmKSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYW5QdXNoKCl7IHJldHVybiB0aGlzLnNvY2tldC5pc0Nvbm5lY3RlZCgpICYmIHRoaXMuaXNKb2luZWQoKSB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgbWVzc2FnZSBgZXZlbnRgIHRvIHBob2VuaXggd2l0aCB0aGUgcGF5bG9hZCBgcGF5bG9hZGAuXG4gICAqIFBob2VuaXggcmVjZWl2ZXMgdGhpcyBpbiB0aGUgYGhhbmRsZV9pbihldmVudCwgcGF5bG9hZCwgc29ja2V0KWBcbiAgICogZnVuY3Rpb24uIGlmIHBob2VuaXggcmVwbGllcyBvciBpdCB0aW1lcyBvdXQgKGRlZmF1bHQgMTAwMDBtcyksXG4gICAqIHRoZW4gb3B0aW9uYWxseSB0aGUgcmVwbHkgY2FuIGJlIHJlY2VpdmVkLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBjaGFubmVsLnB1c2goXCJldmVudFwiKVxuICAgKiAgIC5yZWNlaXZlKFwib2tcIiwgcGF5bG9hZCA9PiBjb25zb2xlLmxvZyhcInBob2VuaXggcmVwbGllZDpcIiwgcGF5bG9hZCkpXG4gICAqICAgLnJlY2VpdmUoXCJlcnJvclwiLCBlcnIgPT4gY29uc29sZS5sb2coXCJwaG9lbml4IGVycm9yZWRcIiwgZXJyKSlcbiAgICogICAucmVjZWl2ZShcInRpbWVvdXRcIiwgKCkgPT4gY29uc29sZS5sb2coXCJ0aW1lZCBvdXQgcHVzaGluZ1wiKSlcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXlsb2FkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZW91dF1cbiAgICogQHJldHVybnMge1B1c2h9XG4gICAqL1xuICBwdXNoKGV2ZW50LCBwYXlsb2FkLCB0aW1lb3V0ID0gdGhpcy50aW1lb3V0KXtcbiAgICBwYXlsb2FkID0gcGF5bG9hZCB8fCB7fVxuICAgIGlmKCF0aGlzLmpvaW5lZE9uY2Upe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB0cmllZCB0byBwdXNoICcke2V2ZW50fScgdG8gJyR7dGhpcy50b3BpY30nIGJlZm9yZSBqb2luaW5nLiBVc2UgY2hhbm5lbC5qb2luKCkgYmVmb3JlIHB1c2hpbmcgZXZlbnRzYClcbiAgICB9XG4gICAgbGV0IHB1c2hFdmVudCA9IG5ldyBQdXNoKHRoaXMsIGV2ZW50LCBmdW5jdGlvbiAoKXsgcmV0dXJuIHBheWxvYWQgfSwgdGltZW91dClcbiAgICBpZih0aGlzLmNhblB1c2goKSl7XG4gICAgICBwdXNoRXZlbnQuc2VuZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHB1c2hFdmVudC5zdGFydFRpbWVvdXQoKVxuICAgICAgdGhpcy5wdXNoQnVmZmVyLnB1c2gocHVzaEV2ZW50KVxuICAgIH1cblxuICAgIHJldHVybiBwdXNoRXZlbnRcbiAgfVxuXG4gIC8qKiBMZWF2ZXMgdGhlIGNoYW5uZWxcbiAgICpcbiAgICogVW5zdWJzY3JpYmVzIGZyb20gc2VydmVyIGV2ZW50cywgYW5kXG4gICAqIGluc3RydWN0cyBjaGFubmVsIHRvIHRlcm1pbmF0ZSBvbiBzZXJ2ZXJcbiAgICpcbiAgICogVHJpZ2dlcnMgb25DbG9zZSgpIGhvb2tzXG4gICAqXG4gICAqIFRvIHJlY2VpdmUgbGVhdmUgYWNrbm93bGVkZ2VtZW50cywgdXNlIHRoZSBgcmVjZWl2ZWBcbiAgICogaG9vayB0byBiaW5kIHRvIHRoZSBzZXJ2ZXIgYWNrLCBpZTpcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogY2hhbm5lbC5sZWF2ZSgpLnJlY2VpdmUoXCJva1wiLCAoKSA9PiBhbGVydChcImxlZnQhXCIpIClcbiAgICpcbiAgICogQHBhcmFtIHtpbnRlZ2VyfSB0aW1lb3V0XG4gICAqIEByZXR1cm5zIHtQdXNofVxuICAgKi9cbiAgbGVhdmUodGltZW91dCA9IHRoaXMudGltZW91dCl7XG4gICAgdGhpcy5yZWpvaW5UaW1lci5yZXNldCgpXG4gICAgdGhpcy5qb2luUHVzaC5jYW5jZWxUaW1lb3V0KClcblxuICAgIHRoaXMuc3RhdGUgPSBDSEFOTkVMX1NUQVRFUy5sZWF2aW5nXG4gICAgbGV0IG9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgICBpZih0aGlzLnNvY2tldC5oYXNMb2dnZXIoKSkgdGhpcy5zb2NrZXQubG9nKFwiY2hhbm5lbFwiLCBgbGVhdmUgJHt0aGlzLnRvcGljfWApXG4gICAgICB0aGlzLnRyaWdnZXIoQ0hBTk5FTF9FVkVOVFMuY2xvc2UsIFwibGVhdmVcIilcbiAgICB9XG4gICAgbGV0IGxlYXZlUHVzaCA9IG5ldyBQdXNoKHRoaXMsIENIQU5ORUxfRVZFTlRTLmxlYXZlLCBjbG9zdXJlKHt9KSwgdGltZW91dClcbiAgICBsZWF2ZVB1c2gucmVjZWl2ZShcIm9rXCIsICgpID0+IG9uQ2xvc2UoKSlcbiAgICAgIC5yZWNlaXZlKFwidGltZW91dFwiLCAoKSA9PiBvbkNsb3NlKCkpXG4gICAgbGVhdmVQdXNoLnNlbmQoKVxuICAgIGlmKCF0aGlzLmNhblB1c2goKSl7IGxlYXZlUHVzaC50cmlnZ2VyKFwib2tcIiwge30pIH1cblxuICAgIHJldHVybiBsZWF2ZVB1c2hcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkYWJsZSBtZXNzYWdlIGhvb2tcbiAgICpcbiAgICogUmVjZWl2ZXMgYWxsIGV2ZW50cyBmb3Igc3BlY2lhbGl6ZWQgbWVzc2FnZSBoYW5kbGluZ1xuICAgKiBiZWZvcmUgZGlzcGF0Y2hpbmcgdG8gdGhlIGNoYW5uZWwgY2FsbGJhY2tzLlxuICAgKlxuICAgKiBNdXN0IHJldHVybiB0aGUgcGF5bG9hZCwgbW9kaWZpZWQgb3IgdW5tb2RpZmllZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWRcbiAgICogQHBhcmFtIHtpbnRlZ2VyfSByZWZcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIG9uTWVzc2FnZShfZXZlbnQsIHBheWxvYWQsIF9yZWYpeyByZXR1cm4gcGF5bG9hZCB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc01lbWJlcih0b3BpYywgZXZlbnQsIHBheWxvYWQsIGpvaW5SZWYpe1xuICAgIGlmKHRoaXMudG9waWMgIT09IHRvcGljKXsgcmV0dXJuIGZhbHNlIH1cblxuICAgIGlmKGpvaW5SZWYgJiYgam9pblJlZiAhPT0gdGhpcy5qb2luUmVmKCkpe1xuICAgICAgaWYodGhpcy5zb2NrZXQuaGFzTG9nZ2VyKCkpIHRoaXMuc29ja2V0LmxvZyhcImNoYW5uZWxcIiwgXCJkcm9wcGluZyBvdXRkYXRlZCBtZXNzYWdlXCIsIHt0b3BpYywgZXZlbnQsIHBheWxvYWQsIGpvaW5SZWZ9KVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBqb2luUmVmKCl7IHJldHVybiB0aGlzLmpvaW5QdXNoLnJlZiB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWpvaW4odGltZW91dCA9IHRoaXMudGltZW91dCl7XG4gICAgaWYodGhpcy5pc0xlYXZpbmcoKSl7IHJldHVybiB9XG4gICAgdGhpcy5zb2NrZXQubGVhdmVPcGVuVG9waWModGhpcy50b3BpYylcbiAgICB0aGlzLnN0YXRlID0gQ0hBTk5FTF9TVEFURVMuam9pbmluZ1xuICAgIHRoaXMuam9pblB1c2gucmVzZW5kKHRpbWVvdXQpXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRyaWdnZXIoZXZlbnQsIHBheWxvYWQsIHJlZiwgam9pblJlZil7XG4gICAgbGV0IGhhbmRsZWRQYXlsb2FkID0gdGhpcy5vbk1lc3NhZ2UoZXZlbnQsIHBheWxvYWQsIHJlZiwgam9pblJlZilcbiAgICBpZihwYXlsb2FkICYmICFoYW5kbGVkUGF5bG9hZCl7IHRocm93IG5ldyBFcnJvcihcImNoYW5uZWwgb25NZXNzYWdlIGNhbGxiYWNrcyBtdXN0IHJldHVybiB0aGUgcGF5bG9hZCwgbW9kaWZpZWQgb3IgdW5tb2RpZmllZFwiKSB9XG5cbiAgICBsZXQgZXZlbnRCaW5kaW5ncyA9IHRoaXMuYmluZGluZ3MuZmlsdGVyKGJpbmQgPT4gYmluZC5ldmVudCA9PT0gZXZlbnQpXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZXZlbnRCaW5kaW5ncy5sZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgYmluZCA9IGV2ZW50QmluZGluZ3NbaV1cbiAgICAgIGJpbmQuY2FsbGJhY2soaGFuZGxlZFBheWxvYWQsIHJlZiwgam9pblJlZiB8fCB0aGlzLmpvaW5SZWYoKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlcGx5RXZlbnROYW1lKHJlZil7IHJldHVybiBgY2hhbl9yZXBseV8ke3JlZn1gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzQ2xvc2VkKCl7IHJldHVybiB0aGlzLnN0YXRlID09PSBDSEFOTkVMX1NUQVRFUy5jbG9zZWQgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNFcnJvcmVkKCl7IHJldHVybiB0aGlzLnN0YXRlID09PSBDSEFOTkVMX1NUQVRFUy5lcnJvcmVkIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzSm9pbmVkKCl7IHJldHVybiB0aGlzLnN0YXRlID09PSBDSEFOTkVMX1NUQVRFUy5qb2luZWQgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNKb2luaW5nKCl7IHJldHVybiB0aGlzLnN0YXRlID09PSBDSEFOTkVMX1NUQVRFUy5qb2luaW5nIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzTGVhdmluZygpeyByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gQ0hBTk5FTF9TVEFURVMubGVhdmluZyB9XG59XG4iLCAiaW1wb3J0IHtcbiAgZ2xvYmFsLFxuICBYSFJfU1RBVEVTXG59IGZyb20gXCIuL2NvbnN0YW50c1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXgge1xuXG4gIHN0YXRpYyByZXF1ZXN0KG1ldGhvZCwgZW5kUG9pbnQsIGFjY2VwdCwgYm9keSwgdGltZW91dCwgb250aW1lb3V0LCBjYWxsYmFjayl7XG4gICAgaWYoZ2xvYmFsLlhEb21haW5SZXF1ZXN0KXtcbiAgICAgIGxldCByZXEgPSBuZXcgZ2xvYmFsLlhEb21haW5SZXF1ZXN0KCkgLy8gSUU4LCBJRTlcbiAgICAgIHJldHVybiB0aGlzLnhkb21haW5SZXF1ZXN0KHJlcSwgbWV0aG9kLCBlbmRQb2ludCwgYm9keSwgdGltZW91dCwgb250aW1lb3V0LCBjYWxsYmFjaylcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJlcSA9IG5ldyBnbG9iYWwuWE1MSHR0cFJlcXVlc3QoKSAvLyBJRTcrLCBGaXJlZm94LCBDaHJvbWUsIE9wZXJhLCBTYWZhcmlcbiAgICAgIHJldHVybiB0aGlzLnhoclJlcXVlc3QocmVxLCBtZXRob2QsIGVuZFBvaW50LCBhY2NlcHQsIGJvZHksIHRpbWVvdXQsIG9udGltZW91dCwgY2FsbGJhY2spXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHhkb21haW5SZXF1ZXN0KHJlcSwgbWV0aG9kLCBlbmRQb2ludCwgYm9keSwgdGltZW91dCwgb250aW1lb3V0LCBjYWxsYmFjayl7XG4gICAgcmVxLnRpbWVvdXQgPSB0aW1lb3V0XG4gICAgcmVxLm9wZW4obWV0aG9kLCBlbmRQb2ludClcbiAgICByZXEub25sb2FkID0gKCkgPT4ge1xuICAgICAgbGV0IHJlc3BvbnNlID0gdGhpcy5wYXJzZUpTT04ocmVxLnJlc3BvbnNlVGV4dClcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgIH1cbiAgICBpZihvbnRpbWVvdXQpeyByZXEub250aW1lb3V0ID0gb250aW1lb3V0IH1cblxuICAgIC8vIFdvcmsgYXJvdW5kIGJ1ZyBpbiBJRTkgdGhhdCByZXF1aXJlcyBhbiBhdHRhY2hlZCBvbnByb2dyZXNzIGhhbmRsZXJcbiAgICByZXEub25wcm9ncmVzcyA9ICgpID0+IHsgfVxuXG4gICAgcmVxLnNlbmQoYm9keSlcbiAgICByZXR1cm4gcmVxXG4gIH1cblxuICBzdGF0aWMgeGhyUmVxdWVzdChyZXEsIG1ldGhvZCwgZW5kUG9pbnQsIGFjY2VwdCwgYm9keSwgdGltZW91dCwgb250aW1lb3V0LCBjYWxsYmFjayl7XG4gICAgcmVxLm9wZW4obWV0aG9kLCBlbmRQb2ludCwgdHJ1ZSlcbiAgICByZXEudGltZW91dCA9IHRpbWVvdXRcbiAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBhY2NlcHQpXG4gICAgcmVxLm9uZXJyb3IgPSAoKSA9PiBjYWxsYmFjayAmJiBjYWxsYmFjayhudWxsKVxuICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZihyZXEucmVhZHlTdGF0ZSA9PT0gWEhSX1NUQVRFUy5jb21wbGV0ZSAmJiBjYWxsYmFjayl7XG4gICAgICAgIGxldCByZXNwb25zZSA9IHRoaXMucGFyc2VKU09OKHJlcS5yZXNwb25zZVRleHQpXG4gICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKVxuICAgICAgfVxuICAgIH1cbiAgICBpZihvbnRpbWVvdXQpeyByZXEub250aW1lb3V0ID0gb250aW1lb3V0IH1cblxuICAgIHJlcS5zZW5kKGJvZHkpXG4gICAgcmV0dXJuIHJlcVxuICB9XG5cbiAgc3RhdGljIHBhcnNlSlNPTihyZXNwKXtcbiAgICBpZighcmVzcCB8fCByZXNwID09PSBcIlwiKXsgcmV0dXJuIG51bGwgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlc3ApXG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICBjb25zb2xlICYmIGNvbnNvbGUubG9nKFwiZmFpbGVkIHRvIHBhcnNlIEpTT04gcmVzcG9uc2VcIiwgcmVzcClcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHNlcmlhbGl6ZShvYmosIHBhcmVudEtleSl7XG4gICAgbGV0IHF1ZXJ5U3RyID0gW11cbiAgICBmb3IodmFyIGtleSBpbiBvYmope1xuICAgICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpeyBjb250aW51ZSB9XG4gICAgICBsZXQgcGFyYW1LZXkgPSBwYXJlbnRLZXkgPyBgJHtwYXJlbnRLZXl9WyR7a2V5fV1gIDoga2V5XG4gICAgICBsZXQgcGFyYW1WYWwgPSBvYmpba2V5XVxuICAgICAgaWYodHlwZW9mIHBhcmFtVmFsID09PSBcIm9iamVjdFwiKXtcbiAgICAgICAgcXVlcnlTdHIucHVzaCh0aGlzLnNlcmlhbGl6ZShwYXJhbVZhbCwgcGFyYW1LZXkpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVlcnlTdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocGFyYW1LZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1WYWwpKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcXVlcnlTdHIuam9pbihcIiZcIilcbiAgfVxuXG4gIHN0YXRpYyBhcHBlbmRQYXJhbXModXJsLCBwYXJhbXMpe1xuICAgIGlmKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoID09PSAwKXsgcmV0dXJuIHVybCB9XG5cbiAgICBsZXQgcHJlZml4ID0gdXJsLm1hdGNoKC9cXD8vKSA/IFwiJlwiIDogXCI/XCJcbiAgICByZXR1cm4gYCR7dXJsfSR7cHJlZml4fSR7dGhpcy5zZXJpYWxpemUocGFyYW1zKX1gXG4gIH1cbn1cbiIsICJpbXBvcnQge1xuICBTT0NLRVRfU1RBVEVTLFxuICBUUkFOU1BPUlRTXG59IGZyb20gXCIuL2NvbnN0YW50c1wiXG5cbmltcG9ydCBBamF4IGZyb20gXCIuL2FqYXhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb25nUG9sbCB7XG5cbiAgY29uc3RydWN0b3IoZW5kUG9pbnQpe1xuICAgIHRoaXMuZW5kUG9pbnQgPSBudWxsXG4gICAgdGhpcy50b2tlbiA9IG51bGxcbiAgICB0aGlzLnNraXBIZWFydGJlYXQgPSB0cnVlXG4gICAgdGhpcy5yZXFzID0gbmV3IFNldCgpXG4gICAgdGhpcy5vbm9wZW4gPSBmdW5jdGlvbiAoKXsgfSAvLyBub29wXG4gICAgdGhpcy5vbmVycm9yID0gZnVuY3Rpb24gKCl7IH0gLy8gbm9vcFxuICAgIHRoaXMub25tZXNzYWdlID0gZnVuY3Rpb24gKCl7IH0gLy8gbm9vcFxuICAgIHRoaXMub25jbG9zZSA9IGZ1bmN0aW9uICgpeyB9IC8vIG5vb3BcbiAgICB0aGlzLnBvbGxFbmRwb2ludCA9IHRoaXMubm9ybWFsaXplRW5kcG9pbnQoZW5kUG9pbnQpXG4gICAgdGhpcy5yZWFkeVN0YXRlID0gU09DS0VUX1NUQVRFUy5jb25uZWN0aW5nXG4gICAgdGhpcy5wb2xsKClcbiAgfVxuXG4gIG5vcm1hbGl6ZUVuZHBvaW50KGVuZFBvaW50KXtcbiAgICByZXR1cm4gKGVuZFBvaW50XG4gICAgICAucmVwbGFjZShcIndzOi8vXCIsIFwiaHR0cDovL1wiKVxuICAgICAgLnJlcGxhY2UoXCJ3c3M6Ly9cIiwgXCJodHRwczovL1wiKVxuICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChcIiguKilcXC9cIiArIFRSQU5TUE9SVFMud2Vic29ja2V0KSwgXCIkMS9cIiArIFRSQU5TUE9SVFMubG9uZ3BvbGwpKVxuICB9XG5cbiAgZW5kcG9pbnRVUkwoKXtcbiAgICByZXR1cm4gQWpheC5hcHBlbmRQYXJhbXModGhpcy5wb2xsRW5kcG9pbnQsIHt0b2tlbjogdGhpcy50b2tlbn0pXG4gIH1cblxuICBjbG9zZUFuZFJldHJ5KGNvZGUsIHJlYXNvbiwgd2FzQ2xlYW4pe1xuICAgIHRoaXMuY2xvc2UoY29kZSwgcmVhc29uLCB3YXNDbGVhbilcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBTT0NLRVRfU1RBVEVTLmNvbm5lY3RpbmdcbiAgfVxuXG4gIG9udGltZW91dCgpe1xuICAgIHRoaXMub25lcnJvcihcInRpbWVvdXRcIilcbiAgICB0aGlzLmNsb3NlQW5kUmV0cnkoMTAwNSwgXCJ0aW1lb3V0XCIsIGZhbHNlKVxuICB9XG5cbiAgaXNBY3RpdmUoKXsgcmV0dXJuIHRoaXMucmVhZHlTdGF0ZSA9PT0gU09DS0VUX1NUQVRFUy5vcGVuIHx8IHRoaXMucmVhZHlTdGF0ZSA9PT0gU09DS0VUX1NUQVRFUy5jb25uZWN0aW5nIH1cblxuICBwb2xsKCl7XG4gICAgdGhpcy5hamF4KFwiR0VUXCIsIG51bGwsICgpID0+IHRoaXMub250aW1lb3V0KCksIHJlc3AgPT4ge1xuICAgICAgaWYocmVzcCl7XG4gICAgICAgIHZhciB7c3RhdHVzLCB0b2tlbiwgbWVzc2FnZXN9ID0gcmVzcFxuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXR1cyA9IDBcbiAgICAgIH1cblxuICAgICAgc3dpdGNoKHN0YXR1cyl7XG4gICAgICAgIGNhc2UgMjAwOlxuICAgICAgICAgIG1lc3NhZ2VzLmZvckVhY2gobXNnID0+IHtcbiAgICAgICAgICAgIC8vIFRhc2tzIGFyZSB3aGF0IHRoaW5ncyBsaWtlIGV2ZW50IGhhbmRsZXJzLCBzZXRUaW1lb3V0IGNhbGxiYWNrcyxcbiAgICAgICAgICAgIC8vIHByb21pc2UgcmVzb2x2ZXMgYW5kIG1vcmUgYXJlIHJ1biB3aXRoaW4uXG4gICAgICAgICAgICAvLyBJbiBtb2Rlcm4gYnJvd3NlcnMsIHRoZXJlIGFyZSB0d28gZGlmZmVyZW50IGtpbmRzIG9mIHRhc2tzLFxuICAgICAgICAgICAgLy8gbWljcm90YXNrcyBhbmQgbWFjcm90YXNrcy5cbiAgICAgICAgICAgIC8vIE1pY3JvdGFza3MgYXJlIG1haW5seSB1c2VkIGZvciBQcm9taXNlcywgd2hpbGUgbWFjcm90YXNrcyBhcmVcbiAgICAgICAgICAgIC8vIHVzZWQgZm9yIGV2ZXJ5dGhpbmcgZWxzZS5cbiAgICAgICAgICAgIC8vIE1pY3JvdGFza3MgYWx3YXlzIGhhdmUgcHJpb3JpdHkgb3ZlciBtYWNyb3Rhc2tzLiBJZiB0aGUgSlMgZW5naW5lXG4gICAgICAgICAgICAvLyBpcyBsb29raW5nIGZvciBhIHRhc2sgdG8gcnVuLCBpdCB3aWxsIGFsd2F5cyB0cnkgdG8gZW1wdHkgdGhlXG4gICAgICAgICAgICAvLyBtaWNyb3Rhc2sgcXVldWUgYmVmb3JlIGF0dGVtcHRpbmcgdG8gcnVuIGFueXRoaW5nIGZyb20gdGhlXG4gICAgICAgICAgICAvLyBtYWNyb3Rhc2sgcXVldWUuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gRm9yIHRoZSBXZWJTb2NrZXQgdHJhbnNwb3J0LCBtZXNzYWdlcyBhbHdheXMgYXJyaXZlIGluIHRoZWlyIG93blxuICAgICAgICAgICAgLy8gZXZlbnQuIFRoaXMgbWVhbnMgdGhhdCBpZiBhbnkgcHJvbWlzZXMgYXJlIHJlc29sdmVkIGZyb20gd2l0aGluLFxuICAgICAgICAgICAgLy8gdGhlaXIgY2FsbGJhY2tzIHdpbGwgYWx3YXlzIGZpbmlzaCBleGVjdXRpb24gYnkgdGhlIHRpbWUgdGhlXG4gICAgICAgICAgICAvLyBuZXh0IG1lc3NhZ2UgZXZlbnQgaGFuZGxlciBpcyBydW4uXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gSW4gb3JkZXIgdG8gZW11bGF0ZSB0aGlzIGJlaGF2aW91ciwgd2UgbmVlZCB0byBtYWtlIHN1cmUgZWFjaFxuICAgICAgICAgICAgLy8gb25tZXNzYWdlIGhhbmRsZXIgaXMgcnVuIHdpdGhpbiBpdCdzIG93biBtYWNyb3Rhc2suXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25tZXNzYWdlKHtkYXRhOiBtc2d9KSwgMClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMucG9sbCgpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyMDQ6XG4gICAgICAgICAgdGhpcy5wb2xsKClcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQxMDpcbiAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBTT0NLRVRfU1RBVEVTLm9wZW5cbiAgICAgICAgICB0aGlzLm9ub3Blbih7fSlcbiAgICAgICAgICB0aGlzLnBvbGwoKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgIHRoaXMub25lcnJvcig0MDMpXG4gICAgICAgICAgdGhpcy5jbG9zZSgxMDA4LCBcImZvcmJpZGRlblwiLCBmYWxzZSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgIGNhc2UgNTAwOlxuICAgICAgICAgIHRoaXMub25lcnJvcig1MDApXG4gICAgICAgICAgdGhpcy5jbG9zZUFuZFJldHJ5KDEwMTEsIFwiaW50ZXJuYWwgc2VydmVyIGVycm9yXCIsIDUwMClcbiAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoYHVuaGFuZGxlZCBwb2xsIHN0YXR1cyAke3N0YXR1c31gKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzZW5kKGJvZHkpe1xuICAgIHRoaXMuYWpheChcIlBPU1RcIiwgYm9keSwgKCkgPT4gdGhpcy5vbmVycm9yKFwidGltZW91dFwiKSwgcmVzcCA9PiB7XG4gICAgICBpZighcmVzcCB8fCByZXNwLnN0YXR1cyAhPT0gMjAwKXtcbiAgICAgICAgdGhpcy5vbmVycm9yKHJlc3AgJiYgcmVzcC5zdGF0dXMpXG4gICAgICAgIHRoaXMuY2xvc2VBbmRSZXRyeSgxMDExLCBcImludGVybmFsIHNlcnZlciBlcnJvclwiLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY2xvc2UoY29kZSwgcmVhc29uLCB3YXNDbGVhbil7XG4gICAgZm9yKGxldCByZXEgb2YgdGhpcy5yZXFzKXsgcmVxLmFib3J0KCkgfVxuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFNPQ0tFVF9TVEFURVMuY2xvc2VkXG4gICAgbGV0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtjb2RlOiAxMDAwLCByZWFzb246IHVuZGVmaW5lZCwgd2FzQ2xlYW46IHRydWV9LCB7Y29kZSwgcmVhc29uLCB3YXNDbGVhbn0pXG4gICAgaWYodHlwZW9mKENsb3NlRXZlbnQpICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgIHRoaXMub25jbG9zZShuZXcgQ2xvc2VFdmVudChcImNsb3NlXCIsIG9wdHMpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uY2xvc2Uob3B0cylcbiAgICB9XG4gIH1cblxuICBhamF4KG1ldGhvZCwgYm9keSwgb25DYWxsZXJUaW1lb3V0LCBjYWxsYmFjayl7XG4gICAgbGV0IHJlcVxuICAgIGxldCBvbnRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlcXMuZGVsZXRlKHJlcSlcbiAgICAgIG9uQ2FsbGVyVGltZW91dCgpXG4gICAgfVxuICAgIHJlcSA9IEFqYXgucmVxdWVzdChtZXRob2QsIHRoaXMuZW5kcG9pbnRVUkwoKSwgXCJhcHBsaWNhdGlvbi9qc29uXCIsIGJvZHksIHRoaXMudGltZW91dCwgb250aW1lb3V0LCByZXNwID0+IHtcbiAgICAgIHRoaXMucmVxcy5kZWxldGUocmVxKVxuICAgICAgaWYodGhpcy5pc0FjdGl2ZSgpKXsgY2FsbGJhY2socmVzcCkgfVxuICAgIH0pXG4gICAgdGhpcy5yZXFzLmFkZChyZXEpXG4gIH1cbn1cbiIsICIvKipcbiAqIEluaXRpYWxpemVzIHRoZSBQcmVzZW5jZVxuICogQHBhcmFtIHtDaGFubmVsfSBjaGFubmVsIC0gVGhlIENoYW5uZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gVGhlIG9wdGlvbnMsXG4gKiAgICAgICAgZm9yIGV4YW1wbGUgYHtldmVudHM6IHtzdGF0ZTogXCJzdGF0ZVwiLCBkaWZmOiBcImRpZmZcIn19YFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVzZW5jZSB7XG5cbiAgY29uc3RydWN0b3IoY2hhbm5lbCwgb3B0cyA9IHt9KXtcbiAgICBsZXQgZXZlbnRzID0gb3B0cy5ldmVudHMgfHwge3N0YXRlOiBcInByZXNlbmNlX3N0YXRlXCIsIGRpZmY6IFwicHJlc2VuY2VfZGlmZlwifVxuICAgIHRoaXMuc3RhdGUgPSB7fVxuICAgIHRoaXMucGVuZGluZ0RpZmZzID0gW11cbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsXG4gICAgdGhpcy5qb2luUmVmID0gbnVsbFxuICAgIHRoaXMuY2FsbGVyID0ge1xuICAgICAgb25Kb2luOiBmdW5jdGlvbiAoKXsgfSxcbiAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uICgpeyB9LFxuICAgICAgb25TeW5jOiBmdW5jdGlvbiAoKXsgfVxuICAgIH1cblxuICAgIHRoaXMuY2hhbm5lbC5vbihldmVudHMuc3RhdGUsIG5ld1N0YXRlID0+IHtcbiAgICAgIGxldCB7b25Kb2luLCBvbkxlYXZlLCBvblN5bmN9ID0gdGhpcy5jYWxsZXJcblxuICAgICAgdGhpcy5qb2luUmVmID0gdGhpcy5jaGFubmVsLmpvaW5SZWYoKVxuICAgICAgdGhpcy5zdGF0ZSA9IFByZXNlbmNlLnN5bmNTdGF0ZSh0aGlzLnN0YXRlLCBuZXdTdGF0ZSwgb25Kb2luLCBvbkxlYXZlKVxuXG4gICAgICB0aGlzLnBlbmRpbmdEaWZmcy5mb3JFYWNoKGRpZmYgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlID0gUHJlc2VuY2Uuc3luY0RpZmYodGhpcy5zdGF0ZSwgZGlmZiwgb25Kb2luLCBvbkxlYXZlKVxuICAgICAgfSlcbiAgICAgIHRoaXMucGVuZGluZ0RpZmZzID0gW11cbiAgICAgIG9uU3luYygpXG4gICAgfSlcblxuICAgIHRoaXMuY2hhbm5lbC5vbihldmVudHMuZGlmZiwgZGlmZiA9PiB7XG4gICAgICBsZXQge29uSm9pbiwgb25MZWF2ZSwgb25TeW5jfSA9IHRoaXMuY2FsbGVyXG5cbiAgICAgIGlmKHRoaXMuaW5QZW5kaW5nU3luY1N0YXRlKCkpe1xuICAgICAgICB0aGlzLnBlbmRpbmdEaWZmcy5wdXNoKGRpZmYpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlID0gUHJlc2VuY2Uuc3luY0RpZmYodGhpcy5zdGF0ZSwgZGlmZiwgb25Kb2luLCBvbkxlYXZlKVxuICAgICAgICBvblN5bmMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBvbkpvaW4oY2FsbGJhY2speyB0aGlzLmNhbGxlci5vbkpvaW4gPSBjYWxsYmFjayB9XG5cbiAgb25MZWF2ZShjYWxsYmFjayl7IHRoaXMuY2FsbGVyLm9uTGVhdmUgPSBjYWxsYmFjayB9XG5cbiAgb25TeW5jKGNhbGxiYWNrKXsgdGhpcy5jYWxsZXIub25TeW5jID0gY2FsbGJhY2sgfVxuXG4gIGxpc3QoYnkpeyByZXR1cm4gUHJlc2VuY2UubGlzdCh0aGlzLnN0YXRlLCBieSkgfVxuXG4gIGluUGVuZGluZ1N5bmNTdGF0ZSgpe1xuICAgIHJldHVybiAhdGhpcy5qb2luUmVmIHx8ICh0aGlzLmpvaW5SZWYgIT09IHRoaXMuY2hhbm5lbC5qb2luUmVmKCkpXG4gIH1cblxuICAvLyBsb3dlci1sZXZlbCBwdWJsaWMgc3RhdGljIEFQSVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHN5bmMgdGhlIGxpc3Qgb2YgcHJlc2VuY2VzIG9uIHRoZSBzZXJ2ZXJcbiAgICogd2l0aCB0aGUgY2xpZW50J3Mgc3RhdGUuIEFuIG9wdGlvbmFsIGBvbkpvaW5gIGFuZCBgb25MZWF2ZWAgY2FsbGJhY2sgY2FuXG4gICAqIGJlIHByb3ZpZGVkIHRvIHJlYWN0IHRvIGNoYW5nZXMgaW4gdGhlIGNsaWVudCdzIGxvY2FsIHByZXNlbmNlcyBhY3Jvc3NcbiAgICogZGlzY29ubmVjdHMgYW5kIHJlY29ubmVjdHMgd2l0aCB0aGUgc2VydmVyLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJlc2VuY2V9XG4gICAqL1xuICBzdGF0aWMgc3luY1N0YXRlKGN1cnJlbnRTdGF0ZSwgbmV3U3RhdGUsIG9uSm9pbiwgb25MZWF2ZSl7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5jbG9uZShjdXJyZW50U3RhdGUpXG4gICAgbGV0IGpvaW5zID0ge31cbiAgICBsZXQgbGVhdmVzID0ge31cblxuICAgIHRoaXMubWFwKHN0YXRlLCAoa2V5LCBwcmVzZW5jZSkgPT4ge1xuICAgICAgaWYoIW5ld1N0YXRlW2tleV0pe1xuICAgICAgICBsZWF2ZXNba2V5XSA9IHByZXNlbmNlXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLm1hcChuZXdTdGF0ZSwgKGtleSwgbmV3UHJlc2VuY2UpID0+IHtcbiAgICAgIGxldCBjdXJyZW50UHJlc2VuY2UgPSBzdGF0ZVtrZXldXG4gICAgICBpZihjdXJyZW50UHJlc2VuY2Upe1xuICAgICAgICBsZXQgbmV3UmVmcyA9IG5ld1ByZXNlbmNlLm1ldGFzLm1hcChtID0+IG0ucGh4X3JlZilcbiAgICAgICAgbGV0IGN1clJlZnMgPSBjdXJyZW50UHJlc2VuY2UubWV0YXMubWFwKG0gPT4gbS5waHhfcmVmKVxuICAgICAgICBsZXQgam9pbmVkTWV0YXMgPSBuZXdQcmVzZW5jZS5tZXRhcy5maWx0ZXIobSA9PiBjdXJSZWZzLmluZGV4T2YobS5waHhfcmVmKSA8IDApXG4gICAgICAgIGxldCBsZWZ0TWV0YXMgPSBjdXJyZW50UHJlc2VuY2UubWV0YXMuZmlsdGVyKG0gPT4gbmV3UmVmcy5pbmRleE9mKG0ucGh4X3JlZikgPCAwKVxuICAgICAgICBpZihqb2luZWRNZXRhcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICBqb2luc1trZXldID0gbmV3UHJlc2VuY2VcbiAgICAgICAgICBqb2luc1trZXldLm1ldGFzID0gam9pbmVkTWV0YXNcbiAgICAgICAgfVxuICAgICAgICBpZihsZWZ0TWV0YXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgbGVhdmVzW2tleV0gPSB0aGlzLmNsb25lKGN1cnJlbnRQcmVzZW5jZSlcbiAgICAgICAgICBsZWF2ZXNba2V5XS5tZXRhcyA9IGxlZnRNZXRhc1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBqb2luc1trZXldID0gbmV3UHJlc2VuY2VcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnN5bmNEaWZmKHN0YXRlLCB7am9pbnM6IGpvaW5zLCBsZWF2ZXM6IGxlYXZlc30sIG9uSm9pbiwgb25MZWF2ZSlcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBVc2VkIHRvIHN5bmMgYSBkaWZmIG9mIHByZXNlbmNlIGpvaW4gYW5kIGxlYXZlXG4gICAqIGV2ZW50cyBmcm9tIHRoZSBzZXJ2ZXIsIGFzIHRoZXkgaGFwcGVuLiBMaWtlIGBzeW5jU3RhdGVgLCBgc3luY0RpZmZgXG4gICAqIGFjY2VwdHMgb3B0aW9uYWwgYG9uSm9pbmAgYW5kIGBvbkxlYXZlYCBjYWxsYmFja3MgdG8gcmVhY3QgdG8gYSB1c2VyXG4gICAqIGpvaW5pbmcgb3IgbGVhdmluZyBmcm9tIGEgZGV2aWNlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJlc2VuY2V9XG4gICAqL1xuICBzdGF0aWMgc3luY0RpZmYoc3RhdGUsIGRpZmYsIG9uSm9pbiwgb25MZWF2ZSl7XG4gICAgbGV0IHtqb2lucywgbGVhdmVzfSA9IHRoaXMuY2xvbmUoZGlmZilcbiAgICBpZighb25Kb2luKXsgb25Kb2luID0gZnVuY3Rpb24gKCl7IH0gfVxuICAgIGlmKCFvbkxlYXZlKXsgb25MZWF2ZSA9IGZ1bmN0aW9uICgpeyB9IH1cblxuICAgIHRoaXMubWFwKGpvaW5zLCAoa2V5LCBuZXdQcmVzZW5jZSkgPT4ge1xuICAgICAgbGV0IGN1cnJlbnRQcmVzZW5jZSA9IHN0YXRlW2tleV1cbiAgICAgIHN0YXRlW2tleV0gPSB0aGlzLmNsb25lKG5ld1ByZXNlbmNlKVxuICAgICAgaWYoY3VycmVudFByZXNlbmNlKXtcbiAgICAgICAgbGV0IGpvaW5lZFJlZnMgPSBzdGF0ZVtrZXldLm1ldGFzLm1hcChtID0+IG0ucGh4X3JlZilcbiAgICAgICAgbGV0IGN1ck1ldGFzID0gY3VycmVudFByZXNlbmNlLm1ldGFzLmZpbHRlcihtID0+IGpvaW5lZFJlZnMuaW5kZXhPZihtLnBoeF9yZWYpIDwgMClcbiAgICAgICAgc3RhdGVba2V5XS5tZXRhcy51bnNoaWZ0KC4uLmN1ck1ldGFzKVxuICAgICAgfVxuICAgICAgb25Kb2luKGtleSwgY3VycmVudFByZXNlbmNlLCBuZXdQcmVzZW5jZSlcbiAgICB9KVxuICAgIHRoaXMubWFwKGxlYXZlcywgKGtleSwgbGVmdFByZXNlbmNlKSA9PiB7XG4gICAgICBsZXQgY3VycmVudFByZXNlbmNlID0gc3RhdGVba2V5XVxuICAgICAgaWYoIWN1cnJlbnRQcmVzZW5jZSl7IHJldHVybiB9XG4gICAgICBsZXQgcmVmc1RvUmVtb3ZlID0gbGVmdFByZXNlbmNlLm1ldGFzLm1hcChtID0+IG0ucGh4X3JlZilcbiAgICAgIGN1cnJlbnRQcmVzZW5jZS5tZXRhcyA9IGN1cnJlbnRQcmVzZW5jZS5tZXRhcy5maWx0ZXIocCA9PiB7XG4gICAgICAgIHJldHVybiByZWZzVG9SZW1vdmUuaW5kZXhPZihwLnBoeF9yZWYpIDwgMFxuICAgICAgfSlcbiAgICAgIG9uTGVhdmUoa2V5LCBjdXJyZW50UHJlc2VuY2UsIGxlZnRQcmVzZW5jZSlcbiAgICAgIGlmKGN1cnJlbnRQcmVzZW5jZS5tZXRhcy5sZW5ndGggPT09IDApe1xuICAgICAgICBkZWxldGUgc3RhdGVba2V5XVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHN0YXRlXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJlc2VuY2VzLCB3aXRoIHNlbGVjdGVkIG1ldGFkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJlc2VuY2VzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNob29zZXJcbiAgICpcbiAgICogQHJldHVybnMge1ByZXNlbmNlfVxuICAgKi9cbiAgc3RhdGljIGxpc3QocHJlc2VuY2VzLCBjaG9vc2VyKXtcbiAgICBpZighY2hvb3Nlcil7IGNob29zZXIgPSBmdW5jdGlvbiAoa2V5LCBwcmVzKXsgcmV0dXJuIHByZXMgfSB9XG5cbiAgICByZXR1cm4gdGhpcy5tYXAocHJlc2VuY2VzLCAoa2V5LCBwcmVzZW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGNob29zZXIoa2V5LCBwcmVzZW5jZSlcbiAgICB9KVxuICB9XG5cbiAgLy8gcHJpdmF0ZVxuXG4gIHN0YXRpYyBtYXAob2JqLCBmdW5jKXtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5tYXAoa2V5ID0+IGZ1bmMoa2V5LCBvYmpba2V5XSkpXG4gIH1cblxuICBzdGF0aWMgY2xvbmUob2JqKXsgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSkgfVxufVxuIiwgIi8qIFRoZSBkZWZhdWx0IHNlcmlhbGl6ZXIgZm9yIGVuY29kaW5nIGFuZCBkZWNvZGluZyBtZXNzYWdlcyAqL1xuaW1wb3J0IHtcbiAgQ0hBTk5FTF9FVkVOVFNcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBIRUFERVJfTEVOR1RIOiAxLFxuICBNRVRBX0xFTkdUSDogNCxcbiAgS0lORFM6IHtwdXNoOiAwLCByZXBseTogMSwgYnJvYWRjYXN0OiAyfSxcblxuICBlbmNvZGUobXNnLCBjYWxsYmFjayl7XG4gICAgaWYobXNnLnBheWxvYWQuY29uc3RydWN0b3IgPT09IEFycmF5QnVmZmVyKXtcbiAgICAgIHJldHVybiBjYWxsYmFjayh0aGlzLmJpbmFyeUVuY29kZShtc2cpKVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcGF5bG9hZCA9IFttc2cuam9pbl9yZWYsIG1zZy5yZWYsIG1zZy50b3BpYywgbXNnLmV2ZW50LCBtc2cucGF5bG9hZF1cbiAgICAgIHJldHVybiBjYWxsYmFjayhKU09OLnN0cmluZ2lmeShwYXlsb2FkKSlcbiAgICB9XG4gIH0sXG5cbiAgZGVjb2RlKHJhd1BheWxvYWQsIGNhbGxiYWNrKXtcbiAgICBpZihyYXdQYXlsb2FkLmNvbnN0cnVjdG9yID09PSBBcnJheUJ1ZmZlcil7XG4gICAgICByZXR1cm4gY2FsbGJhY2sodGhpcy5iaW5hcnlEZWNvZGUocmF3UGF5bG9hZCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBbam9pbl9yZWYsIHJlZiwgdG9waWMsIGV2ZW50LCBwYXlsb2FkXSA9IEpTT04ucGFyc2UocmF3UGF5bG9hZClcbiAgICAgIHJldHVybiBjYWxsYmFjayh7am9pbl9yZWYsIHJlZiwgdG9waWMsIGV2ZW50LCBwYXlsb2FkfSlcbiAgICB9XG4gIH0sXG5cbiAgLy8gcHJpdmF0ZVxuXG4gIGJpbmFyeUVuY29kZShtZXNzYWdlKXtcbiAgICBsZXQge2pvaW5fcmVmLCByZWYsIGV2ZW50LCB0b3BpYywgcGF5bG9hZH0gPSBtZXNzYWdlXG4gICAgbGV0IG1ldGFMZW5ndGggPSB0aGlzLk1FVEFfTEVOR1RIICsgam9pbl9yZWYubGVuZ3RoICsgcmVmLmxlbmd0aCArIHRvcGljLmxlbmd0aCArIGV2ZW50Lmxlbmd0aFxuICAgIGxldCBoZWFkZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy5IRUFERVJfTEVOR1RIICsgbWV0YUxlbmd0aClcbiAgICBsZXQgdmlldyA9IG5ldyBEYXRhVmlldyhoZWFkZXIpXG4gICAgbGV0IG9mZnNldCA9IDBcblxuICAgIHZpZXcuc2V0VWludDgob2Zmc2V0KyssIHRoaXMuS0lORFMucHVzaCkgLy8ga2luZFxuICAgIHZpZXcuc2V0VWludDgob2Zmc2V0KyssIGpvaW5fcmVmLmxlbmd0aClcbiAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCByZWYubGVuZ3RoKVxuICAgIHZpZXcuc2V0VWludDgob2Zmc2V0KyssIHRvcGljLmxlbmd0aClcbiAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCBldmVudC5sZW5ndGgpXG4gICAgQXJyYXkuZnJvbShqb2luX3JlZiwgY2hhciA9PiB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCBjaGFyLmNoYXJDb2RlQXQoMCkpKVxuICAgIEFycmF5LmZyb20ocmVmLCBjaGFyID0+IHZpZXcuc2V0VWludDgob2Zmc2V0KyssIGNoYXIuY2hhckNvZGVBdCgwKSkpXG4gICAgQXJyYXkuZnJvbSh0b3BpYywgY2hhciA9PiB2aWV3LnNldFVpbnQ4KG9mZnNldCsrLCBjaGFyLmNoYXJDb2RlQXQoMCkpKVxuICAgIEFycmF5LmZyb20oZXZlbnQsIGNoYXIgPT4gdmlldy5zZXRVaW50OChvZmZzZXQrKywgY2hhci5jaGFyQ29kZUF0KDApKSlcblxuICAgIHZhciBjb21iaW5lZCA9IG5ldyBVaW50OEFycmF5KGhlYWRlci5ieXRlTGVuZ3RoICsgcGF5bG9hZC5ieXRlTGVuZ3RoKVxuICAgIGNvbWJpbmVkLnNldChuZXcgVWludDhBcnJheShoZWFkZXIpLCAwKVxuICAgIGNvbWJpbmVkLnNldChuZXcgVWludDhBcnJheShwYXlsb2FkKSwgaGVhZGVyLmJ5dGVMZW5ndGgpXG5cbiAgICByZXR1cm4gY29tYmluZWQuYnVmZmVyXG4gIH0sXG5cbiAgYmluYXJ5RGVjb2RlKGJ1ZmZlcil7XG4gICAgbGV0IHZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKVxuICAgIGxldCBraW5kID0gdmlldy5nZXRVaW50OCgwKVxuICAgIGxldCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKClcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIHRoaXMuS0lORFMucHVzaDogcmV0dXJuIHRoaXMuZGVjb2RlUHVzaChidWZmZXIsIHZpZXcsIGRlY29kZXIpXG4gICAgICBjYXNlIHRoaXMuS0lORFMucmVwbHk6IHJldHVybiB0aGlzLmRlY29kZVJlcGx5KGJ1ZmZlciwgdmlldywgZGVjb2RlcilcbiAgICAgIGNhc2UgdGhpcy5LSU5EUy5icm9hZGNhc3Q6IHJldHVybiB0aGlzLmRlY29kZUJyb2FkY2FzdChidWZmZXIsIHZpZXcsIGRlY29kZXIpXG4gICAgfVxuICB9LFxuXG4gIGRlY29kZVB1c2goYnVmZmVyLCB2aWV3LCBkZWNvZGVyKXtcbiAgICBsZXQgam9pblJlZlNpemUgPSB2aWV3LmdldFVpbnQ4KDEpXG4gICAgbGV0IHRvcGljU2l6ZSA9IHZpZXcuZ2V0VWludDgoMilcbiAgICBsZXQgZXZlbnRTaXplID0gdmlldy5nZXRVaW50OCgzKVxuICAgIGxldCBvZmZzZXQgPSB0aGlzLkhFQURFUl9MRU5HVEggKyB0aGlzLk1FVEFfTEVOR1RIIC0gMSAvLyBwdXNoZXMgaGF2ZSBubyByZWZcbiAgICBsZXQgam9pblJlZiA9IGRlY29kZXIuZGVjb2RlKGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIGpvaW5SZWZTaXplKSlcbiAgICBvZmZzZXQgPSBvZmZzZXQgKyBqb2luUmVmU2l6ZVxuICAgIGxldCB0b3BpYyA9IGRlY29kZXIuZGVjb2RlKGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIHRvcGljU2l6ZSkpXG4gICAgb2Zmc2V0ID0gb2Zmc2V0ICsgdG9waWNTaXplXG4gICAgbGV0IGV2ZW50ID0gZGVjb2Rlci5kZWNvZGUoYnVmZmVyLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgZXZlbnRTaXplKSlcbiAgICBvZmZzZXQgPSBvZmZzZXQgKyBldmVudFNpemVcbiAgICBsZXQgZGF0YSA9IGJ1ZmZlci5zbGljZShvZmZzZXQsIGJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgIHJldHVybiB7am9pbl9yZWY6IGpvaW5SZWYsIHJlZjogbnVsbCwgdG9waWM6IHRvcGljLCBldmVudDogZXZlbnQsIHBheWxvYWQ6IGRhdGF9XG4gIH0sXG5cbiAgZGVjb2RlUmVwbHkoYnVmZmVyLCB2aWV3LCBkZWNvZGVyKXtcbiAgICBsZXQgam9pblJlZlNpemUgPSB2aWV3LmdldFVpbnQ4KDEpXG4gICAgbGV0IHJlZlNpemUgPSB2aWV3LmdldFVpbnQ4KDIpXG4gICAgbGV0IHRvcGljU2l6ZSA9IHZpZXcuZ2V0VWludDgoMylcbiAgICBsZXQgZXZlbnRTaXplID0gdmlldy5nZXRVaW50OCg0KVxuICAgIGxldCBvZmZzZXQgPSB0aGlzLkhFQURFUl9MRU5HVEggKyB0aGlzLk1FVEFfTEVOR1RIXG4gICAgbGV0IGpvaW5SZWYgPSBkZWNvZGVyLmRlY29kZShidWZmZXIuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBqb2luUmVmU2l6ZSkpXG4gICAgb2Zmc2V0ID0gb2Zmc2V0ICsgam9pblJlZlNpemVcbiAgICBsZXQgcmVmID0gZGVjb2Rlci5kZWNvZGUoYnVmZmVyLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgcmVmU2l6ZSkpXG4gICAgb2Zmc2V0ID0gb2Zmc2V0ICsgcmVmU2l6ZVxuICAgIGxldCB0b3BpYyA9IGRlY29kZXIuZGVjb2RlKGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIHRvcGljU2l6ZSkpXG4gICAgb2Zmc2V0ID0gb2Zmc2V0ICsgdG9waWNTaXplXG4gICAgbGV0IGV2ZW50ID0gZGVjb2Rlci5kZWNvZGUoYnVmZmVyLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgZXZlbnRTaXplKSlcbiAgICBvZmZzZXQgPSBvZmZzZXQgKyBldmVudFNpemVcbiAgICBsZXQgZGF0YSA9IGJ1ZmZlci5zbGljZShvZmZzZXQsIGJ1ZmZlci5ieXRlTGVuZ3RoKVxuICAgIGxldCBwYXlsb2FkID0ge3N0YXR1czogZXZlbnQsIHJlc3BvbnNlOiBkYXRhfVxuICAgIHJldHVybiB7am9pbl9yZWY6IGpvaW5SZWYsIHJlZjogcmVmLCB0b3BpYzogdG9waWMsIGV2ZW50OiBDSEFOTkVMX0VWRU5UUy5yZXBseSwgcGF5bG9hZDogcGF5bG9hZH1cbiAgfSxcblxuICBkZWNvZGVCcm9hZGNhc3QoYnVmZmVyLCB2aWV3LCBkZWNvZGVyKXtcbiAgICBsZXQgdG9waWNTaXplID0gdmlldy5nZXRVaW50OCgxKVxuICAgIGxldCBldmVudFNpemUgPSB2aWV3LmdldFVpbnQ4KDIpXG4gICAgbGV0IG9mZnNldCA9IHRoaXMuSEVBREVSX0xFTkdUSCArIDJcbiAgICBsZXQgdG9waWMgPSBkZWNvZGVyLmRlY29kZShidWZmZXIuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyB0b3BpY1NpemUpKVxuICAgIG9mZnNldCA9IG9mZnNldCArIHRvcGljU2l6ZVxuICAgIGxldCBldmVudCA9IGRlY29kZXIuZGVjb2RlKGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIGV2ZW50U2l6ZSkpXG4gICAgb2Zmc2V0ID0gb2Zmc2V0ICsgZXZlbnRTaXplXG4gICAgbGV0IGRhdGEgPSBidWZmZXIuc2xpY2Uob2Zmc2V0LCBidWZmZXIuYnl0ZUxlbmd0aClcblxuICAgIHJldHVybiB7am9pbl9yZWY6IG51bGwsIHJlZjogbnVsbCwgdG9waWM6IHRvcGljLCBldmVudDogZXZlbnQsIHBheWxvYWQ6IGRhdGF9XG4gIH1cbn1cbiIsICJpbXBvcnQge1xuICBnbG9iYWwsXG4gIHBoeFdpbmRvdyxcbiAgQ0hBTk5FTF9FVkVOVFMsXG4gIERFRkFVTFRfVElNRU9VVCxcbiAgREVGQVVMVF9WU04sXG4gIFNPQ0tFVF9TVEFURVMsXG4gIFRSQU5TUE9SVFMsXG4gIFdTX0NMT1NFX05PUk1BTFxufSBmcm9tIFwiLi9jb25zdGFudHNcIlxuXG5pbXBvcnQge1xuICBjbG9zdXJlXG59IGZyb20gXCIuL3V0aWxzXCJcblxuaW1wb3J0IEFqYXggZnJvbSBcIi4vYWpheFwiXG5pbXBvcnQgQ2hhbm5lbCBmcm9tIFwiLi9jaGFubmVsXCJcbmltcG9ydCBMb25nUG9sbCBmcm9tIFwiLi9sb25ncG9sbFwiXG5pbXBvcnQgU2VyaWFsaXplciBmcm9tIFwiLi9zZXJpYWxpemVyXCJcbmltcG9ydCBUaW1lciBmcm9tIFwiLi90aW1lclwiXG5cbi8qKiBJbml0aWFsaXplcyB0aGUgU29ja2V0ICpcbiAqXG4gKiBGb3IgSUU4IHN1cHBvcnQgdXNlIGFuIEVTNS1zaGltIChodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGVuZFBvaW50IC0gVGhlIHN0cmluZyBXZWJTb2NrZXQgZW5kcG9pbnQsIGllLCBgXCJ3czovL2V4YW1wbGUuY29tL3NvY2tldFwiYCxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXCJ3c3M6Ly9leGFtcGxlLmNvbVwiYFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcIi9zb2NrZXRcImAgKGluaGVyaXRlZCBob3N0ICYgcHJvdG9jb2wpXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdHNdIC0gT3B0aW9uYWwgY29uZmlndXJhdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdHMudHJhbnNwb3J0XSAtIFRoZSBXZWJzb2NrZXQgVHJhbnNwb3J0LCBmb3IgZXhhbXBsZSBXZWJTb2NrZXQgb3IgUGhvZW5peC5Mb25nUG9sbC5cbiAqXG4gKiBEZWZhdWx0cyB0byBXZWJTb2NrZXQgd2l0aCBhdXRvbWF0aWMgTG9uZ1BvbGwgZmFsbGJhY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0cy5lbmNvZGVdIC0gVGhlIGZ1bmN0aW9uIHRvIGVuY29kZSBvdXRnb2luZyBtZXNzYWdlcy5cbiAqXG4gKiBEZWZhdWx0cyB0byBKU09OIGVuY29kZXIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdHMuZGVjb2RlXSAtIFRoZSBmdW5jdGlvbiB0byBkZWNvZGUgaW5jb21pbmcgbWVzc2FnZXMuXG4gKlxuICogRGVmYXVsdHMgdG8gSlNPTjpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiAocGF5bG9hZCwgY2FsbGJhY2spID0+IGNhbGxiYWNrKEpTT04ucGFyc2UocGF5bG9hZCkpXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdHMudGltZW91dF0gLSBUaGUgZGVmYXVsdCB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byB0cmlnZ2VyIHB1c2ggdGltZW91dHMuXG4gKlxuICogRGVmYXVsdHMgYERFRkFVTFRfVElNRU9VVGBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0cy5oZWFydGJlYXRJbnRlcnZhbE1zXSAtIFRoZSBtaWxsaXNlYyBpbnRlcnZhbCB0byBzZW5kIGEgaGVhcnRiZWF0IG1lc3NhZ2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0cy5yZWNvbm5lY3RBZnRlck1zXSAtIFRoZSBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1pbGxpc2VjXG4gKiBzb2NrZXQgcmVjb25uZWN0IGludGVydmFsLlxuICpcbiAqIERlZmF1bHRzIHRvIHN0ZXBwZWQgYmFja29mZiBvZjpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBmdW5jdGlvbih0cmllcyl7XG4gKiAgIHJldHVybiBbMTAsIDUwLCAxMDAsIDE1MCwgMjAwLCAyNTAsIDUwMCwgMTAwMCwgMjAwMF1bdHJpZXMgLSAxXSB8fCA1MDAwXG4gKiB9XG4gKiBgYGBgXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRzLnJlam9pbkFmdGVyTXNdIC0gVGhlIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbWlsbGlzZWNcbiAqIHJlam9pbiBpbnRlcnZhbCBmb3IgaW5kaXZpZHVhbCBjaGFubmVscy5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBmdW5jdGlvbih0cmllcyl7XG4gKiAgIHJldHVybiBbMTAwMCwgMjAwMCwgNTAwMF1bdHJpZXMgLSAxXSB8fCAxMDAwMFxuICogfVxuICogYGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRzLmxvZ2dlcl0gLSBUaGUgb3B0aW9uYWwgZnVuY3Rpb24gZm9yIHNwZWNpYWxpemVkIGxvZ2dpbmcsIGllOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGZ1bmN0aW9uKGtpbmQsIG1zZywgZGF0YSkge1xuICogICBjb25zb2xlLmxvZyhgJHtraW5kfTogJHttc2d9YCwgZGF0YSlcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0cy5sb25ncG9sbGVyVGltZW91dF0gLSBUaGUgbWF4aW11bSB0aW1lb3V0IG9mIGEgbG9uZyBwb2xsIEFKQVggcmVxdWVzdC5cbiAqXG4gKiBEZWZhdWx0cyB0byAyMHMgKGRvdWJsZSB0aGUgc2VydmVyIGxvbmcgcG9sbCB0aW1lcikuXG4gKlxuICogQHBhcmFtIHsoT2JqZWN0fGZ1bmN0aW9uKX0gW29wdHMucGFyYW1zXSAtIFRoZSBvcHRpb25hbCBwYXJhbXMgdG8gcGFzcyB3aGVuIGNvbm5lY3RpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5iaW5hcnlUeXBlXSAtIFRoZSBiaW5hcnkgdHlwZSB0byB1c2UgZm9yIGJpbmFyeSBXZWJTb2NrZXQgZnJhbWVzLlxuICpcbiAqIERlZmF1bHRzIHRvIFwiYXJyYXlidWZmZXJcIlxuICpcbiAqIEBwYXJhbSB7dnNufSBbb3B0cy52c25dIC0gVGhlIHNlcmlhbGl6ZXIncyBwcm90b2NvbCB2ZXJzaW9uIHRvIHNlbmQgb24gY29ubmVjdC5cbiAqXG4gKiBEZWZhdWx0cyB0byBERUZBVUxUX1ZTTi5cbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2NrZXQge1xuICBjb25zdHJ1Y3RvcihlbmRQb2ludCwgb3B0cyA9IHt9KXtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzID0ge29wZW46IFtdLCBjbG9zZTogW10sIGVycm9yOiBbXSwgbWVzc2FnZTogW119XG4gICAgdGhpcy5jaGFubmVscyA9IFtdXG4gICAgdGhpcy5zZW5kQnVmZmVyID0gW11cbiAgICB0aGlzLnJlZiA9IDBcbiAgICB0aGlzLnRpbWVvdXQgPSBvcHRzLnRpbWVvdXQgfHwgREVGQVVMVF9USU1FT1VUXG4gICAgdGhpcy50cmFuc3BvcnQgPSBvcHRzLnRyYW5zcG9ydCB8fCBnbG9iYWwuV2ViU29ja2V0IHx8IExvbmdQb2xsXG4gICAgdGhpcy5lc3RhYmxpc2hlZENvbm5lY3Rpb25zID0gMFxuICAgIHRoaXMuZGVmYXVsdEVuY29kZXIgPSBTZXJpYWxpemVyLmVuY29kZS5iaW5kKFNlcmlhbGl6ZXIpXG4gICAgdGhpcy5kZWZhdWx0RGVjb2RlciA9IFNlcmlhbGl6ZXIuZGVjb2RlLmJpbmQoU2VyaWFsaXplcilcbiAgICB0aGlzLmNsb3NlV2FzQ2xlYW4gPSBmYWxzZVxuICAgIHRoaXMuYmluYXJ5VHlwZSA9IG9wdHMuYmluYXJ5VHlwZSB8fCBcImFycmF5YnVmZmVyXCJcbiAgICB0aGlzLmNvbm5lY3RDbG9jayA9IDFcbiAgICBpZih0aGlzLnRyYW5zcG9ydCAhPT0gTG9uZ1BvbGwpe1xuICAgICAgdGhpcy5lbmNvZGUgPSBvcHRzLmVuY29kZSB8fCB0aGlzLmRlZmF1bHRFbmNvZGVyXG4gICAgICB0aGlzLmRlY29kZSA9IG9wdHMuZGVjb2RlIHx8IHRoaXMuZGVmYXVsdERlY29kZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmNvZGUgPSB0aGlzLmRlZmF1bHRFbmNvZGVyXG4gICAgICB0aGlzLmRlY29kZSA9IHRoaXMuZGVmYXVsdERlY29kZXJcbiAgICB9XG4gICAgbGV0IGF3YWl0aW5nQ29ubmVjdGlvbk9uUGFnZVNob3cgPSBudWxsXG4gICAgaWYocGh4V2luZG93ICYmIHBoeFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKXtcbiAgICAgIHBoeFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIiwgX2UgPT4ge1xuICAgICAgICBpZih0aGlzLmNvbm4pe1xuICAgICAgICAgIHRoaXMuZGlzY29ubmVjdCgpXG4gICAgICAgICAgYXdhaXRpbmdDb25uZWN0aW9uT25QYWdlU2hvdyA9IHRoaXMuY29ubmVjdENsb2NrXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBwaHhXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VzaG93XCIsIF9lID0+IHtcbiAgICAgICAgaWYoYXdhaXRpbmdDb25uZWN0aW9uT25QYWdlU2hvdyA9PT0gdGhpcy5jb25uZWN0Q2xvY2spe1xuICAgICAgICAgIGF3YWl0aW5nQ29ubmVjdGlvbk9uUGFnZVNob3cgPSBudWxsXG4gICAgICAgICAgdGhpcy5jb25uZWN0KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy5oZWFydGJlYXRJbnRlcnZhbE1zID0gb3B0cy5oZWFydGJlYXRJbnRlcnZhbE1zIHx8IDMwMDAwXG4gICAgdGhpcy5yZWpvaW5BZnRlck1zID0gKHRyaWVzKSA9PiB7XG4gICAgICBpZihvcHRzLnJlam9pbkFmdGVyTXMpe1xuICAgICAgICByZXR1cm4gb3B0cy5yZWpvaW5BZnRlck1zKHRyaWVzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFsxMDAwLCAyMDAwLCA1MDAwXVt0cmllcyAtIDFdIHx8IDEwMDAwXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVjb25uZWN0QWZ0ZXJNcyA9ICh0cmllcykgPT4ge1xuICAgICAgaWYob3B0cy5yZWNvbm5lY3RBZnRlck1zKXtcbiAgICAgICAgcmV0dXJuIG9wdHMucmVjb25uZWN0QWZ0ZXJNcyh0cmllcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbMTAsIDUwLCAxMDAsIDE1MCwgMjAwLCAyNTAsIDUwMCwgMTAwMCwgMjAwMF1bdHJpZXMgLSAxXSB8fCA1MDAwXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubG9nZ2VyID0gb3B0cy5sb2dnZXIgfHwgbnVsbFxuICAgIHRoaXMubG9uZ3BvbGxlclRpbWVvdXQgPSBvcHRzLmxvbmdwb2xsZXJUaW1lb3V0IHx8IDIwMDAwXG4gICAgdGhpcy5wYXJhbXMgPSBjbG9zdXJlKG9wdHMucGFyYW1zIHx8IHt9KVxuICAgIHRoaXMuZW5kUG9pbnQgPSBgJHtlbmRQb2ludH0vJHtUUkFOU1BPUlRTLndlYnNvY2tldH1gXG4gICAgdGhpcy52c24gPSBvcHRzLnZzbiB8fCBERUZBVUxUX1ZTTlxuICAgIHRoaXMuaGVhcnRiZWF0VGltZW91dFRpbWVyID0gbnVsbFxuICAgIHRoaXMuaGVhcnRiZWF0VGltZXIgPSBudWxsXG4gICAgdGhpcy5wZW5kaW5nSGVhcnRiZWF0UmVmID0gbnVsbFxuICAgIHRoaXMucmVjb25uZWN0VGltZXIgPSBuZXcgVGltZXIoKCkgPT4ge1xuICAgICAgdGhpcy50ZWFyZG93bigoKSA9PiB0aGlzLmNvbm5lY3QoKSlcbiAgICB9LCB0aGlzLnJlY29ubmVjdEFmdGVyTXMpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgTG9uZ1BvbGwgdHJhbnNwb3J0IHJlZmVyZW5jZVxuICAgKi9cbiAgZ2V0TG9uZ1BvbGxUcmFuc3BvcnQoKXsgcmV0dXJuIExvbmdQb2xsIH1cblxuICAvKipcbiAgICogRGlzY29ubmVjdHMgYW5kIHJlcGxhY2VzIHRoZSBhY3RpdmUgdHJhbnNwb3J0XG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5ld1RyYW5zcG9ydCAtIFRoZSBuZXcgdHJhbnNwb3J0IGNsYXNzIHRvIGluc3RhbnRpYXRlXG4gICAqXG4gICAqL1xuICByZXBsYWNlVHJhbnNwb3J0KG5ld1RyYW5zcG9ydCl7XG4gICAgdGhpcy5jb25uZWN0Q2xvY2srK1xuICAgIHRoaXMuY2xvc2VXYXNDbGVhbiA9IHRydWVcbiAgICB0aGlzLnJlY29ubmVjdFRpbWVyLnJlc2V0KClcbiAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXVxuICAgIGlmKHRoaXMuY29ubil7XG4gICAgICB0aGlzLmNvbm4uY2xvc2UoKVxuICAgICAgdGhpcy5jb25uID0gbnVsbFxuICAgIH1cbiAgICB0aGlzLnRyYW5zcG9ydCA9IG5ld1RyYW5zcG9ydFxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNvY2tldCBwcm90b2NvbFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcHJvdG9jb2woKXsgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sLm1hdGNoKC9eaHR0cHMvKSA/IFwid3NzXCIgOiBcIndzXCIgfVxuXG4gIC8qKlxuICAgKiBUaGUgZnVsbHkgcXVhbGlmaWVkIHNvY2tldCB1cmxcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGVuZFBvaW50VVJMKCl7XG4gICAgbGV0IHVyaSA9IEFqYXguYXBwZW5kUGFyYW1zKFxuICAgICAgQWpheC5hcHBlbmRQYXJhbXModGhpcy5lbmRQb2ludCwgdGhpcy5wYXJhbXMoKSksIHt2c246IHRoaXMudnNufSlcbiAgICBpZih1cmkuY2hhckF0KDApICE9PSBcIi9cIil7IHJldHVybiB1cmkgfVxuICAgIGlmKHVyaS5jaGFyQXQoMSkgPT09IFwiL1wiKXsgcmV0dXJuIGAke3RoaXMucHJvdG9jb2woKX06JHt1cml9YCB9XG5cbiAgICByZXR1cm4gYCR7dGhpcy5wcm90b2NvbCgpfTovLyR7bG9jYXRpb24uaG9zdH0ke3VyaX1gXG4gIH1cblxuICAvKipcbiAgICogRGlzY29ubmVjdHMgdGhlIHNvY2tldFxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Nsb3NlRXZlbnQjU3RhdHVzX2NvZGVzIGZvciB2YWxpZCBzdGF0dXMgY29kZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gT3B0aW9uYWwgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIHNvY2tldCBpcyBkaXNjb25uZWN0ZWQuXG4gICAqIEBwYXJhbSB7aW50ZWdlcn0gY29kZSAtIEEgc3RhdHVzIGNvZGUgZm9yIGRpc2Nvbm5lY3Rpb24gKE9wdGlvbmFsKS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiAtIEEgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGUgcmVhc29uIHRvIGRpc2Nvbm5lY3QuIChPcHRpb25hbClcbiAgICovXG4gIGRpc2Nvbm5lY3QoY2FsbGJhY2ssIGNvZGUsIHJlYXNvbil7XG4gICAgdGhpcy5jb25uZWN0Q2xvY2srK1xuICAgIHRoaXMuY2xvc2VXYXNDbGVhbiA9IHRydWVcbiAgICB0aGlzLnJlY29ubmVjdFRpbWVyLnJlc2V0KClcbiAgICB0aGlzLnRlYXJkb3duKGNhbGxiYWNrLCBjb2RlLCByZWFzb24pXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyAtIFRoZSBwYXJhbXMgdG8gc2VuZCB3aGVuIGNvbm5lY3RpbmcsIGZvciBleGFtcGxlIGB7dXNlcl9pZDogdXNlclRva2VufWBcbiAgICpcbiAgICogUGFzc2luZyBwYXJhbXMgdG8gY29ubmVjdCBpcyBkZXByZWNhdGVkOyBwYXNzIHRoZW0gaW4gdGhlIFNvY2tldCBjb25zdHJ1Y3RvciBpbnN0ZWFkOlxuICAgKiBgbmV3IFNvY2tldChcIi9zb2NrZXRcIiwge3BhcmFtczoge3VzZXJfaWQ6IHVzZXJUb2tlbn19KWAuXG4gICAqL1xuICBjb25uZWN0KHBhcmFtcyl7XG4gICAgaWYocGFyYW1zKXtcbiAgICAgIGNvbnNvbGUgJiYgY29uc29sZS5sb2coXCJwYXNzaW5nIHBhcmFtcyB0byBjb25uZWN0IGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQgcGFzcyA6cGFyYW1zIHRvIHRoZSBTb2NrZXQgY29uc3RydWN0b3JcIilcbiAgICAgIHRoaXMucGFyYW1zID0gY2xvc3VyZShwYXJhbXMpXG4gICAgfVxuICAgIGlmKHRoaXMuY29ubil7IHJldHVybiB9XG5cbiAgICB0aGlzLmNvbm5lY3RDbG9jaysrXG4gICAgdGhpcy5jbG9zZVdhc0NsZWFuID0gZmFsc2VcbiAgICB0aGlzLmNvbm4gPSBuZXcgdGhpcy50cmFuc3BvcnQodGhpcy5lbmRQb2ludFVSTCgpKVxuICAgIHRoaXMuY29ubi5iaW5hcnlUeXBlID0gdGhpcy5iaW5hcnlUeXBlXG4gICAgdGhpcy5jb25uLnRpbWVvdXQgPSB0aGlzLmxvbmdwb2xsZXJUaW1lb3V0XG4gICAgdGhpcy5jb25uLm9ub3BlbiA9ICgpID0+IHRoaXMub25Db25uT3BlbigpXG4gICAgdGhpcy5jb25uLm9uZXJyb3IgPSBlcnJvciA9PiB0aGlzLm9uQ29ubkVycm9yKGVycm9yKVxuICAgIHRoaXMuY29ubi5vbm1lc3NhZ2UgPSBldmVudCA9PiB0aGlzLm9uQ29ubk1lc3NhZ2UoZXZlbnQpXG4gICAgdGhpcy5jb25uLm9uY2xvc2UgPSBldmVudCA9PiB0aGlzLm9uQ29ubkNsb3NlKGV2ZW50KVxuICB9XG5cbiAgLyoqXG4gICAqIExvZ3MgdGhlIG1lc3NhZ2UuIE92ZXJyaWRlIGB0aGlzLmxvZ2dlcmAgZm9yIHNwZWNpYWxpemVkIGxvZ2dpbmcuIG5vb3BzIGJ5IGRlZmF1bHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtpbmRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1zZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgKi9cbiAgbG9nKGtpbmQsIG1zZywgZGF0YSl7IHRoaXMubG9nZ2VyKGtpbmQsIG1zZywgZGF0YSkgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYSBsb2dnZXIgaGFzIGJlZW4gc2V0IG9uIHRoaXMgc29ja2V0LlxuICAgKi9cbiAgaGFzTG9nZ2VyKCl7IHJldHVybiB0aGlzLmxvZ2dlciAhPT0gbnVsbCB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBjYWxsYmFja3MgZm9yIGNvbm5lY3Rpb24gb3BlbiBldmVudHNcbiAgICpcbiAgICogQGV4YW1wbGUgc29ja2V0Lm9uT3BlbihmdW5jdGlvbigpeyBjb25zb2xlLmluZm8oXCJ0aGUgc29ja2V0IHdhcyBvcGVuZWRcIikgfSlcbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICovXG4gIG9uT3BlbihjYWxsYmFjayl7XG4gICAgbGV0IHJlZiA9IHRoaXMubWFrZVJlZigpXG4gICAgdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5vcGVuLnB1c2goW3JlZiwgY2FsbGJhY2tdKVxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgY2FsbGJhY2tzIGZvciBjb25uZWN0aW9uIGNsb3NlIGV2ZW50c1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKi9cbiAgb25DbG9zZShjYWxsYmFjayl7XG4gICAgbGV0IHJlZiA9IHRoaXMubWFrZVJlZigpXG4gICAgdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5jbG9zZS5wdXNoKFtyZWYsIGNhbGxiYWNrXSlcbiAgICByZXR1cm4gcmVmXG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGNhbGxiYWNrcyBmb3IgY29ubmVjdGlvbiBlcnJvciBldmVudHNcbiAgICpcbiAgICogQGV4YW1wbGUgc29ja2V0Lm9uRXJyb3IoZnVuY3Rpb24oZXJyb3IpeyBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkXCIpIH0pXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqL1xuICBvbkVycm9yKGNhbGxiYWNrKXtcbiAgICBsZXQgcmVmID0gdGhpcy5tYWtlUmVmKClcbiAgICB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzLmVycm9yLnB1c2goW3JlZiwgY2FsbGJhY2tdKVxuICAgIHJldHVybiByZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgY2FsbGJhY2tzIGZvciBjb25uZWN0aW9uIG1lc3NhZ2UgZXZlbnRzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqL1xuICBvbk1lc3NhZ2UoY2FsbGJhY2spe1xuICAgIGxldCByZWYgPSB0aGlzLm1ha2VSZWYoKVxuICAgIHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3MubWVzc2FnZS5wdXNoKFtyZWYsIGNhbGxiYWNrXSlcbiAgICByZXR1cm4gcmVmXG4gIH1cblxuICAvKipcbiAgICogUGluZ3MgdGhlIHNlcnZlciBhbmQgaW52b2tlcyB0aGUgY2FsbGJhY2sgd2l0aCB0aGUgUlRUIGluIG1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBpbmcgd2FzIHB1c2hlZCBvciBmYWxzZSBpZiB1bmFibGUgdG8gYmUgcHVzaGVkLlxuICAgKi9cbiAgcGluZyhjYWxsYmFjayl7XG4gICAgaWYoIXRoaXMuaXNDb25uZWN0ZWQoKSl7IHJldHVybiBmYWxzZSB9XG4gICAgbGV0IHJlZiA9IHRoaXMubWFrZVJlZigpXG4gICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KClcbiAgICB0aGlzLnB1c2goe3RvcGljOiBcInBob2VuaXhcIiwgZXZlbnQ6IFwiaGVhcnRiZWF0XCIsIHBheWxvYWQ6IHt9LCByZWY6IHJlZn0pXG4gICAgbGV0IG9uTXNnUmVmID0gdGhpcy5vbk1lc3NhZ2UobXNnID0+IHtcbiAgICAgIGlmKG1zZy5yZWYgPT09IHJlZil7XG4gICAgICAgIHRoaXMub2ZmKFtvbk1zZ1JlZl0pXG4gICAgICAgIGNhbGxiYWNrKERhdGUubm93KCkgLSBzdGFydFRpbWUpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG4gIGNsZWFySGVhcnRiZWF0cygpe1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmhlYXJ0YmVhdFRpbWVyKVxuICAgIGNsZWFyVGltZW91dCh0aGlzLmhlYXJ0YmVhdFRpbWVvdXRUaW1lcilcbiAgfVxuXG4gIG9uQ29ubk9wZW4oKXtcbiAgICBpZih0aGlzLmhhc0xvZ2dlcigpKSB0aGlzLmxvZyhcInRyYW5zcG9ydFwiLCBgY29ubmVjdGVkIHRvICR7dGhpcy5lbmRQb2ludFVSTCgpfWApXG4gICAgdGhpcy5jbG9zZVdhc0NsZWFuID0gZmFsc2VcbiAgICB0aGlzLmVzdGFibGlzaGVkQ29ubmVjdGlvbnMrK1xuICAgIHRoaXMuZmx1c2hTZW5kQnVmZmVyKClcbiAgICB0aGlzLnJlY29ubmVjdFRpbWVyLnJlc2V0KClcbiAgICB0aGlzLnJlc2V0SGVhcnRiZWF0KClcbiAgICB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzLm9wZW4uZm9yRWFjaCgoWywgY2FsbGJhY2tdKSA9PiBjYWxsYmFjaygpKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG4gIGhlYXJ0YmVhdFRpbWVvdXQoKXtcbiAgICBpZih0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWYpe1xuICAgICAgdGhpcy5wZW5kaW5nSGVhcnRiZWF0UmVmID0gbnVsbFxuICAgICAgaWYodGhpcy5oYXNMb2dnZXIoKSl7IHRoaXMubG9nKFwidHJhbnNwb3J0XCIsIFwiaGVhcnRiZWF0IHRpbWVvdXQuIEF0dGVtcHRpbmcgdG8gcmUtZXN0YWJsaXNoIGNvbm5lY3Rpb25cIikgfVxuICAgICAgdGhpcy50cmlnZ2VyQ2hhbkVycm9yKClcbiAgICAgIHRoaXMuY2xvc2VXYXNDbGVhbiA9IGZhbHNlXG4gICAgICB0aGlzLnRlYXJkb3duKCgpID0+IHRoaXMucmVjb25uZWN0VGltZXIuc2NoZWR1bGVUaW1lb3V0KCksIFdTX0NMT1NFX05PUk1BTCwgXCJoZWFydGJlYXQgdGltZW91dFwiKVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0SGVhcnRiZWF0KCl7XG4gICAgaWYodGhpcy5jb25uICYmIHRoaXMuY29ubi5za2lwSGVhcnRiZWF0KXsgcmV0dXJuIH1cbiAgICB0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWYgPSBudWxsXG4gICAgdGhpcy5jbGVhckhlYXJ0YmVhdHMoKVxuICAgIHRoaXMuaGVhcnRiZWF0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VuZEhlYXJ0YmVhdCgpLCB0aGlzLmhlYXJ0YmVhdEludGVydmFsTXMpXG4gIH1cblxuICB0ZWFyZG93bihjYWxsYmFjaywgY29kZSwgcmVhc29uKXtcbiAgICBpZighdGhpcy5jb25uKXtcbiAgICAgIHJldHVybiBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG4gICAgfVxuXG4gICAgdGhpcy53YWl0Rm9yQnVmZmVyRG9uZSgoKSA9PiB7XG4gICAgICBpZih0aGlzLmNvbm4pe1xuICAgICAgICBpZihjb2RlKXsgdGhpcy5jb25uLmNsb3NlKGNvZGUsIHJlYXNvbiB8fCBcIlwiKSB9IGVsc2UgeyB0aGlzLmNvbm4uY2xvc2UoKSB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMud2FpdEZvclNvY2tldENsb3NlZCgoKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuY29ubil7XG4gICAgICAgICAgdGhpcy5jb25uLm9ub3BlbiA9IGZ1bmN0aW9uICgpeyB9IC8vIG5vb3BcbiAgICAgICAgICB0aGlzLmNvbm4ub25lcnJvciA9IGZ1bmN0aW9uICgpeyB9IC8vIG5vb3BcbiAgICAgICAgICB0aGlzLmNvbm4ub25tZXNzYWdlID0gZnVuY3Rpb24gKCl7IH0gLy8gbm9vcFxuICAgICAgICAgIHRoaXMuY29ubi5vbmNsb3NlID0gZnVuY3Rpb24gKCl7IH0gLy8gbm9vcFxuICAgICAgICAgIHRoaXMuY29ubiA9IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHdhaXRGb3JCdWZmZXJEb25lKGNhbGxiYWNrLCB0cmllcyA9IDEpe1xuICAgIGlmKHRyaWVzID09PSA1IHx8ICF0aGlzLmNvbm4gfHwgIXRoaXMuY29ubi5idWZmZXJlZEFtb3VudCl7XG4gICAgICBjYWxsYmFjaygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMud2FpdEZvckJ1ZmZlckRvbmUoY2FsbGJhY2ssIHRyaWVzICsgMSlcbiAgICB9LCAxNTAgKiB0cmllcylcbiAgfVxuXG4gIHdhaXRGb3JTb2NrZXRDbG9zZWQoY2FsbGJhY2ssIHRyaWVzID0gMSl7XG4gICAgaWYodHJpZXMgPT09IDUgfHwgIXRoaXMuY29ubiB8fCB0aGlzLmNvbm4ucmVhZHlTdGF0ZSA9PT0gU09DS0VUX1NUQVRFUy5jbG9zZWQpe1xuICAgICAgY2FsbGJhY2soKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLndhaXRGb3JTb2NrZXRDbG9zZWQoY2FsbGJhY2ssIHRyaWVzICsgMSlcbiAgICB9LCAxNTAgKiB0cmllcylcbiAgfVxuXG4gIG9uQ29ubkNsb3NlKGV2ZW50KXtcbiAgICBsZXQgY2xvc2VDb2RlID0gZXZlbnQgJiYgZXZlbnQuY29kZVxuICAgIGlmKHRoaXMuaGFzTG9nZ2VyKCkpIHRoaXMubG9nKFwidHJhbnNwb3J0XCIsIFwiY2xvc2VcIiwgZXZlbnQpXG4gICAgdGhpcy50cmlnZ2VyQ2hhbkVycm9yKClcbiAgICB0aGlzLmNsZWFySGVhcnRiZWF0cygpXG4gICAgaWYoIXRoaXMuY2xvc2VXYXNDbGVhbiAmJiBjbG9zZUNvZGUgIT09IDEwMDApe1xuICAgICAgdGhpcy5yZWNvbm5lY3RUaW1lci5zY2hlZHVsZVRpbWVvdXQoKVxuICAgIH1cbiAgICB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzLmNsb3NlLmZvckVhY2goKFssIGNhbGxiYWNrXSkgPT4gY2FsbGJhY2soZXZlbnQpKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBvbkNvbm5FcnJvcihlcnJvcil7XG4gICAgaWYodGhpcy5oYXNMb2dnZXIoKSkgdGhpcy5sb2coXCJ0cmFuc3BvcnRcIiwgZXJyb3IpXG4gICAgbGV0IHRyYW5zcG9ydEJlZm9yZSA9IHRoaXMudHJhbnNwb3J0XG4gICAgbGV0IGVzdGFibGlzaGVkQmVmb3JlID0gdGhpcy5lc3RhYmxpc2hlZENvbm5lY3Rpb25zXG4gICAgdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5lcnJvci5mb3JFYWNoKChbLCBjYWxsYmFja10pID0+IHtcbiAgICAgIGNhbGxiYWNrKGVycm9yLCB0cmFuc3BvcnRCZWZvcmUsIGVzdGFibGlzaGVkQmVmb3JlKVxuICAgIH0pXG4gICAgaWYodHJhbnNwb3J0QmVmb3JlID09PSB0aGlzLnRyYW5zcG9ydCB8fCBlc3RhYmxpc2hlZEJlZm9yZSA+IDApe1xuICAgICAgdGhpcy50cmlnZ2VyQ2hhbkVycm9yKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRyaWdnZXJDaGFuRXJyb3IoKXtcbiAgICB0aGlzLmNoYW5uZWxzLmZvckVhY2goY2hhbm5lbCA9PiB7XG4gICAgICBpZighKGNoYW5uZWwuaXNFcnJvcmVkKCkgfHwgY2hhbm5lbC5pc0xlYXZpbmcoKSB8fCBjaGFubmVsLmlzQ2xvc2VkKCkpKXtcbiAgICAgICAgY2hhbm5lbC50cmlnZ2VyKENIQU5ORUxfRVZFTlRTLmVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGNvbm5lY3Rpb25TdGF0ZSgpe1xuICAgIHN3aXRjaCh0aGlzLmNvbm4gJiYgdGhpcy5jb25uLnJlYWR5U3RhdGUpe1xuICAgICAgY2FzZSBTT0NLRVRfU1RBVEVTLmNvbm5lY3Rpbmc6IHJldHVybiBcImNvbm5lY3RpbmdcIlxuICAgICAgY2FzZSBTT0NLRVRfU1RBVEVTLm9wZW46IHJldHVybiBcIm9wZW5cIlxuICAgICAgY2FzZSBTT0NLRVRfU1RBVEVTLmNsb3Npbmc6IHJldHVybiBcImNsb3NpbmdcIlxuICAgICAgZGVmYXVsdDogcmV0dXJuIFwiY2xvc2VkXCJcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0Nvbm5lY3RlZCgpeyByZXR1cm4gdGhpcy5jb25uZWN0aW9uU3RhdGUoKSA9PT0gXCJvcGVuXCIgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge0NoYW5uZWx9XG4gICAqL1xuICByZW1vdmUoY2hhbm5lbCl7XG4gICAgdGhpcy5vZmYoY2hhbm5lbC5zdGF0ZUNoYW5nZVJlZnMpXG4gICAgdGhpcy5jaGFubmVscyA9IHRoaXMuY2hhbm5lbHMuZmlsdGVyKGMgPT4gYy5qb2luUmVmKCkgIT09IGNoYW5uZWwuam9pblJlZigpKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYG9uT3BlbmAsIGBvbkNsb3NlYCwgYG9uRXJyb3IsYCBhbmQgYG9uTWVzc2FnZWAgcmVnaXN0cmF0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtyZWZzfSAtIGxpc3Qgb2YgcmVmcyByZXR1cm5lZCBieSBjYWxscyB0b1xuICAgKiAgICAgICAgICAgICAgICAgYG9uT3BlbmAsIGBvbkNsb3NlYCwgYG9uRXJyb3IsYCBhbmQgYG9uTWVzc2FnZWBcbiAgICovXG4gIG9mZihyZWZzKXtcbiAgICBmb3IobGV0IGtleSBpbiB0aGlzLnN0YXRlQ2hhbmdlQ2FsbGJhY2tzKXtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3Nba2V5XSA9IHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3Nba2V5XS5maWx0ZXIoKFtyZWZdKSA9PiB7XG4gICAgICAgIHJldHVybiByZWZzLmluZGV4T2YocmVmKSA9PT0gLTFcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYXRlcyBhIG5ldyBjaGFubmVsIGZvciB0aGUgZ2l2ZW4gdG9waWNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRvcGljXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjaGFuUGFyYW1zIC0gUGFyYW1ldGVycyBmb3IgdGhlIGNoYW5uZWxcbiAgICogQHJldHVybnMge0NoYW5uZWx9XG4gICAqL1xuICBjaGFubmVsKHRvcGljLCBjaGFuUGFyYW1zID0ge30pe1xuICAgIGxldCBjaGFuID0gbmV3IENoYW5uZWwodG9waWMsIGNoYW5QYXJhbXMsIHRoaXMpXG4gICAgdGhpcy5jaGFubmVscy5wdXNoKGNoYW4pXG4gICAgcmV0dXJuIGNoYW5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgKi9cbiAgcHVzaChkYXRhKXtcbiAgICBpZih0aGlzLmhhc0xvZ2dlcigpKXtcbiAgICAgIGxldCB7dG9waWMsIGV2ZW50LCBwYXlsb2FkLCByZWYsIGpvaW5fcmVmfSA9IGRhdGFcbiAgICAgIHRoaXMubG9nKFwicHVzaFwiLCBgJHt0b3BpY30gJHtldmVudH0gKCR7am9pbl9yZWZ9LCAke3JlZn0pYCwgcGF5bG9hZClcbiAgICB9XG5cbiAgICBpZih0aGlzLmlzQ29ubmVjdGVkKCkpe1xuICAgICAgdGhpcy5lbmNvZGUoZGF0YSwgcmVzdWx0ID0+IHRoaXMuY29ubi5zZW5kKHJlc3VsdCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VuZEJ1ZmZlci5wdXNoKCgpID0+IHRoaXMuZW5jb2RlKGRhdGEsIHJlc3VsdCA9PiB0aGlzLmNvbm4uc2VuZChyZXN1bHQpKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBuZXh0IG1lc3NhZ2UgcmVmLCBhY2NvdW50aW5nIGZvciBvdmVyZmxvd3NcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIG1ha2VSZWYoKXtcbiAgICBsZXQgbmV3UmVmID0gdGhpcy5yZWYgKyAxXG4gICAgaWYobmV3UmVmID09PSB0aGlzLnJlZil7IHRoaXMucmVmID0gMCB9IGVsc2UgeyB0aGlzLnJlZiA9IG5ld1JlZiB9XG5cbiAgICByZXR1cm4gdGhpcy5yZWYudG9TdHJpbmcoKVxuICB9XG5cbiAgc2VuZEhlYXJ0YmVhdCgpe1xuICAgIGlmKHRoaXMucGVuZGluZ0hlYXJ0YmVhdFJlZiAmJiAhdGhpcy5pc0Nvbm5lY3RlZCgpKXsgcmV0dXJuIH1cbiAgICB0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWYgPSB0aGlzLm1ha2VSZWYoKVxuICAgIHRoaXMucHVzaCh7dG9waWM6IFwicGhvZW5peFwiLCBldmVudDogXCJoZWFydGJlYXRcIiwgcGF5bG9hZDoge30sIHJlZjogdGhpcy5wZW5kaW5nSGVhcnRiZWF0UmVmfSlcbiAgICB0aGlzLmhlYXJ0YmVhdFRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oZWFydGJlYXRUaW1lb3V0KCksIHRoaXMuaGVhcnRiZWF0SW50ZXJ2YWxNcylcbiAgfVxuXG4gIGZsdXNoU2VuZEJ1ZmZlcigpe1xuICAgIGlmKHRoaXMuaXNDb25uZWN0ZWQoKSAmJiB0aGlzLnNlbmRCdWZmZXIubGVuZ3RoID4gMCl7XG4gICAgICB0aGlzLnNlbmRCdWZmZXIuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygpKVxuICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW11cbiAgICB9XG4gIH1cblxuICBvbkNvbm5NZXNzYWdlKHJhd01lc3NhZ2Upe1xuICAgIHRoaXMuZGVjb2RlKHJhd01lc3NhZ2UuZGF0YSwgbXNnID0+IHtcbiAgICAgIGxldCB7dG9waWMsIGV2ZW50LCBwYXlsb2FkLCByZWYsIGpvaW5fcmVmfSA9IG1zZ1xuICAgICAgaWYocmVmICYmIHJlZiA9PT0gdGhpcy5wZW5kaW5nSGVhcnRiZWF0UmVmKXtcbiAgICAgICAgdGhpcy5jbGVhckhlYXJ0YmVhdHMoKVxuICAgICAgICB0aGlzLnBlbmRpbmdIZWFydGJlYXRSZWYgPSBudWxsXG4gICAgICAgIHRoaXMuaGVhcnRiZWF0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VuZEhlYXJ0YmVhdCgpLCB0aGlzLmhlYXJ0YmVhdEludGVydmFsTXMpXG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuaGFzTG9nZ2VyKCkpIHRoaXMubG9nKFwicmVjZWl2ZVwiLCBgJHtwYXlsb2FkLnN0YXR1cyB8fCBcIlwifSAke3RvcGljfSAke2V2ZW50fSAke3JlZiAmJiBcIihcIiArIHJlZiArIFwiKVwiIHx8IFwiXCJ9YCwgcGF5bG9hZClcblxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2hhbm5lbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBjaGFubmVsID0gdGhpcy5jaGFubmVsc1tpXVxuICAgICAgICBpZighY2hhbm5lbC5pc01lbWJlcih0b3BpYywgZXZlbnQsIHBheWxvYWQsIGpvaW5fcmVmKSl7IGNvbnRpbnVlIH1cbiAgICAgICAgY2hhbm5lbC50cmlnZ2VyKGV2ZW50LCBwYXlsb2FkLCByZWYsIGpvaW5fcmVmKVxuICAgICAgfVxuXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZUNoYW5nZUNhbGxiYWNrcy5tZXNzYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IFssIGNhbGxiYWNrXSA9IHRoaXMuc3RhdGVDaGFuZ2VDYWxsYmFja3MubWVzc2FnZVtpXVxuICAgICAgICBjYWxsYmFjayhtc2cpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGxlYXZlT3BlblRvcGljKHRvcGljKXtcbiAgICBsZXQgZHVwQ2hhbm5lbCA9IHRoaXMuY2hhbm5lbHMuZmluZChjID0+IGMudG9waWMgPT09IHRvcGljICYmIChjLmlzSm9pbmVkKCkgfHwgYy5pc0pvaW5pbmcoKSkpXG4gICAgaWYoZHVwQ2hhbm5lbCl7XG4gICAgICBpZih0aGlzLmhhc0xvZ2dlcigpKSB0aGlzLmxvZyhcInRyYW5zcG9ydFwiLCBgbGVhdmluZyBkdXBsaWNhdGUgdG9waWMgXCIke3RvcGljfVwiYClcbiAgICAgIGR1cENoYW5uZWwubGVhdmUoKVxuICAgIH1cbiAgfVxufSIsICJpbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4vcm9vbVwiO1xuXG5jb25zdCByb29tID0gbmV3IFJvb20oKTtcbnJvb20uam9pbigpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0EsYUFBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFDdEQsY0FBUSxzQkFBc0IsUUFBUSxxQkFBcUIsUUFBUSx3QkFBd0IsUUFBUSxzQkFBc0I7QUFDekgsbUNBQTZCLFlBQVk7QUFDckMsZUFBTyxLQUFLLFVBQVU7QUFBQTtBQUUxQixjQUFRLHNCQUFzQjtBQUM5QixxQ0FBK0Isc0JBQXNCO0FBQ2pELGVBQU8sS0FBSyxNQUFNO0FBQUE7QUFFdEIsY0FBUSx3QkFBd0I7QUFDaEMsa0NBQTRCLE1BQU0sTUFBTTtBQUNwQyxZQUFJLFFBQVEsRUFBRTtBQUNkLFlBQUksTUFBTTtBQUNOLGtCQUFRLGlDQUFLLFFBQUwsRUFBWTtBQUFBO0FBRXhCLGVBQU87QUFBQTtB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QUFJO0FBQ3JDLFVBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxLQUFLLElBQUk7QUFDckMsVUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssR0FBRztBQUNwQyxVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksS0FBSyxJQUFJO0FBQ3JDLFVBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxLQUFLLElBQUk7QUFDckMsVUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssSUFBSTtBQUNyQyxVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHO0FBQ25DLFVBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLEdBQUc7QUFDbkMsVUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssSUFBSTtBQUNyQyxVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSTtBQUNoQyxVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHO0FBQ25DLFVBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxLQUFLLEdBQUc7QUFDcEMsVUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssSUFBSTtBQUNyQyxVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJO0FBQ3BDLFVBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLEdBQUc7QUFDbkMsVUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssR0FBRztBQUNwQyxVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJO0FBQ3BDLFVBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUk7QUFDcEMsVUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssR0FBRztBQUNwQyxVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHO0FBQ25DLFVBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUk7QUFDcEMsVUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssSUFBSTtBQUNyQyxVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHO0FBQ25DLFVBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUk7QUFDcEMsVUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssSUFBSTtBQUNyQyxVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksS0FBSyxJQUFJO0FBQ3JDLFVBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLEdBQUc7QUFDbkMsVUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLElBQUksSUFBSTtBQUNwQyxVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJO0FBQ3BDLFVBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxLQUFLLElBQUk7QUFDckMsVUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssR0FBRztBQUNwQyxVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSTtBQUNoQyxVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJO0FBQ3BDLFVBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUk7QUFDcEMsVUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLElBQUksR0FBRztBQUNuQyxVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksS0FBSyxJQUFJO0FBQ3JDLFVBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxLQUFLLElBQUk7QUFDckMsVUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLElBQUksSUFBSTtBQUNwQyxVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksR0FBRztBQUMvQixVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJO0FBQ3BDLFVBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxLQUFLLElBQUk7QUFDckMsVUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLElBQUksSUFBSTtBQUNwQyxVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksS0FBSyxHQUFHO0FBQ3BDLFVBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUk7QUFDcEMsVUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssSUFBSTtBQUNyQyxVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJO0FBQ3BDLFVBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFJLEdBQUc7QUFDbkMsVUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLEtBQUssSUFBSTtBQUNyQyxVQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJO0FBQ3BDLFVBQUksTUFBTSxHQUFHLEdB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

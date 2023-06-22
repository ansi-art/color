(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.distance = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.distance = _exports.default = void 0;
  /**
   * get the distance between the provided color components
   * @module @ansi-art/color/src/distance
   */

  /**
   * get the distance between the provided color components
   * @function colorDistance
   * @param {function} distanceFn
   * @returns {function} wrappedDistanceFn
   */
  const distance = i => i;
  _exports.distance = distance;
  var _default = distance;
  _exports.default = _default;
});
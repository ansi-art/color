(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../distance.cjs"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../distance.cjs"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.distance);
    global.sampleDistance = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _distance) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.sampleDistance = _exports.default = void 0;
  _distance = _interopRequireDefault(_distance);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  const sampleDistance = (0, _distance.default)((r1, g1, b1, r2, g2, b2) => {
    return (Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2) + Math.abs(Math.max(r1, g1, b1) - Math.max(r2, g2, b2)) / 2) / 3 + Math.abs(Math.max(r1, g1, b1) - Math.max(r2, g2, b2)) / 2;
  });
  _exports.sampleDistance = sampleDistance;
  var _default = sampleDistance;
  _exports.default = _default;
});
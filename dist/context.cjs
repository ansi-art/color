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
    global.context = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Context = void 0;
  /**
   * This provides an abstraction for doing work in a color space
   * @module @ansi-art/color/src/context
   */

  /**
   * The default constructor for ColorContext
   * @class ColorContext
   * @classdesc This provides an abstraction for doing work in a color space
   */
  const Context = function (name, defaultPalette) {
    this.name = name;
    this.palette = defaultPalette;
    this.cache = {};
  };

  /**
   * get the mapped color for a particular color in this context
   * @function getColor
   * @param {Color} color
   * @param {ColorPalette} palette
   * @returns {string} ansiColorCode
   */
  _exports.Context = Context;
  Context.prototype.getColor = function (color, palette) {
    if (!this.cache[color]) {
      this.cache[color] = (palette || this.palette).interpretColor(color);
    }
    return this.cache[color];
  };
});
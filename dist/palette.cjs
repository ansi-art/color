(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./color.cjs", "./distance.cjs"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./color.cjs"), require("./distance.cjs"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.color, global.distance);
    global.palette = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _color, _distance) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Palette = void 0;
  /**
   * This provides an abstraction for performing color adhoc evaluations given a specific context (space + medium)
   * @module @ansi-art/color/src/palette
   */

  const pickClosest = (rawColor, colorSet, distance) => {
    let closest = null;
    let closestPosition = -1;
    let thisColor = new _color.Color(rawColor);
    colorSet.forEach((color, index) => {
      let thisValue = distance.apply({}, thisColor.channels.concat(color.channels));
      if (closestPosition === -1 || thisValue < closest) {
        closest = thisValue;
        closestPosition = index;
      }
    });
    return colorSet[closestPosition];
  };
  /**
   * The default constructor for ColorPalette
   * @class ColorPalette
   * @classdesc This provides an abstraction for performing color adhoc evaluations given a specific context (space + medium)
   */
  const Palette = function (options) {
    // init color information

    //init passed options
    this.space = options.space;
    this.medium = options.medium;
    this.distance = options.distance || _distance.distance.defaultDistance;
    this.colors = this.space.getColors(this.medium).map(hx => new _color.Color(hx));
  };
  /**
   * get the mapped color for a particular color in this context
   * @function interpretColor
   * @param {string} hexColor
   * @returns {string} mappedHexColor
   */
  _exports.Palette = Palette;
  Palette.prototype.interpretColor = function (rawColor) {
    // true color mode: if it's not indexed, it's new
    let color = new _color.Color(rawColor);
    if (this.colors === '*') return color;
    return pickClosest(rawColor, this.colors, this.distance);
  };
  /**
   * get the mapped color for a particular color in this context
   * @function getColors
   * @returns {Array} hexValueArray
   */
  Palette.prototype.getColors = function () {
    // true color mode: if it's not indexed, it's new
    return this.colors.map(c => c.hex());
  };
});
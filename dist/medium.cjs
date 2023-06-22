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
    global.medium = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Medium = void 0;
  /**
   * This provides an abstraction for the color profiles associated with drawing output
   * @module @ansi-art/color/src/medium
   */

  /**
   * The default constructor for ColorMedium
   * @class ColorMedium
   * @classdesc This provides an abstraction for the color profiles associated with drawing output
   */
  const Medium = function (type) {
    this.colors = Medium.registry[type || 'vga'];
  };
  /**
   * get the mapped color for a particular color in this context
   * @function getColors
   * @returns {Array} ansiColorCode
   */
  _exports.Medium = Medium;
  Medium.prototype.getColors = function () {
    return Object.keys(this.colors).map(key => '#' + this.colors[key].map(i => i.toString(16).substring(0, 2).padStart(2, '0')).join(''));
  };
  Medium.registry = {};

  // cannot use docs for this because of tsd-jsdoc (yay!)
  Medium.addMediumType = function (type, value) {
    Medium.registry[type] = value;
  };
  Medium.addMediumType('darwin', {
    'black': [0, 0, 0],
    'red': [194, 54, 33],
    'green': [37, 188, 36],
    'yellow': [173, 173, 39],
    'blue': [73, 46, 225],
    'magenta': [211, 56, 211],
    'cyan': [51, 187, 200],
    'white': [203, 204, 205],
    'bright_black': [129, 131, 131],
    'bright_red': [252, 57, 31],
    'bright_green': [49, 231, 34],
    'bright_yellow': [234, 236, 35],
    'bright_blue': [88, 51, 255],
    'bright_magenta': [249, 53, 248],
    'bright_cyan': [20, 240, 240],
    'bright_white': [233, 235, 235]
  });
  Medium.addMediumType('vga', {
    'black': [0, 0, 0],
    'red': [170, 0, 0],
    'green': [0, 170, 0],
    'yellow': [170, 85, 0],
    'blue': [0, 0, 170],
    'magenta': [170, 0, 170],
    'cyan': [0, 170, 170],
    'white': [170, 170, 170],
    'bright_black': [85, 85, 85],
    'bright_red': [255, 85, 85],
    'bright_green': [85, 255, 85],
    'bright_yellow': [255, 255, 85],
    'bright_blue': [85, 85, 255],
    'bright_magenta': [255, 85, 255],
    'bright_cyan': [85, 255, 255],
    'bright_white': [255, 255, 255]
  });
  Medium.addMediumType('xterm', {
    'black': [0, 0, 0],
    'red': [205, 0, 0],
    'green': [0, 205, 0],
    'yellow': [205, 205, 0],
    'blue': [0, 0, 238],
    'magenta': [205, 0, 205],
    'cyan': [0, 205, 205],
    'white': [229, 229, 229],
    'bright_black': [127, 127, 127],
    'bright_red': [255, 0, 0],
    'bright_green': [0, 255, 0],
    'bright_yellow': [255, 255, 0],
    'bright_blue': [92, 92, 255],
    'bright_magenta': [255, 0, 255],
    'bright_cyan': [0, 255, 255],
    'bright_white': [255, 255, 255]
  });
});
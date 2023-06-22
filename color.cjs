(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./dist/distance.cjs", "./dist/color.cjs", "./dist/palette.cjs", "./dist/space.cjs", "./dist/medium.cjs", "./dist/context.cjs"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./dist/distance.cjs"), require("./dist/color.cjs"), require("./dist/palette.cjs"), require("./dist/space.cjs"), require("./dist/medium.cjs"), require("./dist/context.cjs"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.distance, global.color, global.palette, global.space, global.medium, global.context);
    global.color = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _distance, _color, _palette, _space, _medium, _context) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Color", {
    enumerable: true,
    get: function () {
      return _color.Color;
    }
  });
  Object.defineProperty(_exports, "Context", {
    enumerable: true,
    get: function () {
      return _context.Context;
    }
  });
  Object.defineProperty(_exports, "Medium", {
    enumerable: true,
    get: function () {
      return _medium.Medium;
    }
  });
  Object.defineProperty(_exports, "Palette", {
    enumerable: true,
    get: function () {
      return _palette.Palette;
    }
  });
  Object.defineProperty(_exports, "Space", {
    enumerable: true,
    get: function () {
      return _space.Space;
    }
  });
  _exports.color256 = _exports.color16 = void 0;
  Object.defineProperty(_exports, "distance", {
    enumerable: true,
    get: function () {
      return _distance.distance;
    }
  });
  _exports.trueColor = void 0;
  const color256 = distanceFn => {};
  _exports.color256 = color256;
  const color16 = distanceFn => {};
  _exports.color16 = color16;
  const trueColor = () => {};
  _exports.trueColor = trueColor;
});


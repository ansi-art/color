(function (root, factory){
    if(typeof define === 'function' && define.amd){
        // AMD. Register as an anonymous module.
        define([], factory);
    }else if (typeof module === 'object' && module.exports){
        module.exports = factory();
    }else{
        // Browser globals (root is window)
        root.AsciiArtColorContext = factory();
    }
}(this, function(){
    /**
     * This provides an abstraction for doing work in a color space
     * @module @ansi-art/color/src/context
     */
    
    /**
     * The default constructor for ColorContext
     * @class ColorContext
     * @classdesc This provides an abstraction for doing work in a color space
     */
    const Context = function(name, defaultPalette){
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
    Context.prototype.getColor = function(color, palette){
        if(!this.cache[color]){
            this.cache[color] = (palette || this.palette).interpretColor(color);
        }
        return this.cache[color];
    };
    return Context;
}));
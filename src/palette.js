(function (root, factory){
    if(typeof define === 'function' && define.amd){
        // AMD. Register as an anonymous module.
        define(['./distance', './color'], factory);
    }else if (typeof module === 'object' && module.exports){
        module.exports = factory(require('./distance'), require('./color'));
    }else{
        // Browser globals (root is window)
        root.AsciiArtColorPalette = factory(root.AsciiArtColorDistance, root.AsciiArtColor);
    }
}(this, function(Distance, Color){
    /**
     * A module that shouts hello!
     * @module @ansi-art/color/src/palette
     */
    
    const pickClosest = (rawColor, colorSet, distance)=>{
        let closest = null;
        let closestPosition = -1;
        let thisColor = new Color(rawColor);
        colorSet.forEach((color, index)=>{
            let thisValue = distance.apply({}, thisColor.channels.concat(color.channels));
            if(closestPosition === -1 || thisValue < closest){
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
    const Palette = function(options){
        // init color information
        
        //init passed options
        this.space = options.space;
        this.medium = options.medium;
        this.distance = options.distance || Distance.defaultDistance;
        this.colors = this.space.getColors(this.medium).map((hx)=> new Color(hx));
        
    };
    /**
     * get the mapped color for a particular color in this context
     * @function interpretColor
     * @param {string} hexColor
     * @returns {string} mappedHexColor
     */
    Palette.prototype.interpretColor = function(rawColor){
        // true color mode: if it's not indexed, it's new
        let color = new Color(rawColor);
        if (this.colors === '*') return color;
        return pickClosest(rawColor, this.colors, this.distance);
    };
    /**
     * get the mapped color for a particular color in this context
     * @function getColors
     * @returns {Array} hexValueArray
     */
    Palette.prototype.getColors = function(){
        // true color mode: if it's not indexed, it's new
        return this.colors.map((c)=>c.hex());
    };
    
    return Palette;
}));

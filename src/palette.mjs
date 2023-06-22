import { Color } from './color.mjs';
import { distance } from './distance.mjs';
/**
 * This provides an abstraction for performing color adhoc evaluations given a specific context (space + medium)
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
export const Palette = function(options){
    // init color information
    
    //init passed options
    this.space = options.space;
    this.medium = options.medium;
    this.distance = options.distance || distance.defaultDistance;
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

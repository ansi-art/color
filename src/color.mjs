    
const mapBitDepth = (hex, depth)=>{
    switch(depth){
        case '4bit':
        case 4:
        case '8bit':
        case 8:
    }
};
/**
 * The default constructor for SubGridTransformer
 * @class Color
 * @classdesc This provides an abstraction for holding and transforming color representations
 */
export const Color = function(initialValue){
    this.channels = Array.isArray(initialValue)?initialValue:[];
    if(typeof initialValue === 'string' && initialValue[0] === '#'){
        var tokens = initialValue.substring(1).match(/[0-9a-z]{2}/gi);
        this.channels = tokens.map(t => parseInt(t, 16));
    }
};
/**
 * The map implementation (provided by implementations)
 * @function ansi
 * @param {string|number} depth
 * @returns {string} ansiColorCode
 */
Color.prototype.ansi = function(depth){
    return this.cachedBitDepth || (
        this.cachedBitDepth = mapBitDepth(this.hex(), depth)
    );
};
/**
 * The map implementation (provided by implementations)
 * @function hex
 * @returns {string} hexValue
 */
Color.prototype.hex = function(){
    return this.cachedHex || (
        this.cachedHex = '#'+this.channels.map(
            (i)=>i.toString(16).substring(0, 2).padStart(2, '0')
        ).join('')
    );
};
/**
 * The map implementation (provided by implementations)
 * @function rgb
 * @returns {Array} rgbArray
 */
Color.prototype.rgb = function(){
    return this.channels;
};

/* const controlCodes = [
    "off"     : '\033[0m',
    "clear"     : '\033[0m',
    "reset"     : '\033[0m',
    "bold"      : '\033[1m',
    "italic"    : '\033[3m',
    "underline" : '\033[4m',
    "blink"     : '\033[5m',
    "strobe"    : '\033[6m',
    "strikethru": '\033[9m',
    "framed"    : '\033[51m',
    "encircled" : '\033[52m',
    "overline"  : '\033[53m',
    "unframed"  : '\033[54m',
    "double-underline": '\033[21m',
    "inverse"   : '\033[7m',
    "hidden"    : '\033[8m',
    "default-font":'\033[10m',
    "font-0"    : '\033[10m',
    "font-1"    : '\033[11m',
    "font-2"    : '\033[12m',
    "font-3"    : '\033[13m',
    "font-4"    : '\033[14m',
    "font-5"    : '\033[15m',
    "font-6"    : '\033[16m',
    "font-7"    : '\033[17m',
    "font-8"    : '\033[18m',
    "font-9"    : '\033[19m',
    "font-gothic": '\033[20m',
    "font-fraktur": '\033[20m',
    "reset-font":'\033[10m',
    "reset-intensity": '\033[22m',
    "reset-italic": '\033[23m',
    "reset-blackletter": '\033[23m',
    "reset-inverse": '\033[27m',
    "reset-underline": '\033[24m',
    "reset-blinking": '\033[25m',
    "reset-hidden": '\033[28m',
]; // */
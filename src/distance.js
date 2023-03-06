(function (root, factory){
    if(typeof define === 'function' && define.amd){
        // AMD. Register as an anonymous module.
        define([], factory);
    }else if (typeof module === 'object' && module.exports){
        module.exports = factory();
    }else{
        // Browser globals (root is window)
        root.AsciiArtColorDistance = factory();
    }
}(this, function(){
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
    return (i)=>i; 
}));
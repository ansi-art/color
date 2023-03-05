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
     * A module that shouts hello!
     * @module @ansi-art/color/src/distance
     */
     
    /**
     * get the mapped color for a particular color in this context
     * @function colorDistance
     * @param {function} distanceFn
     * @returns {function} wrappedDistanceFn
     */
    return (i)=>i; 
}));
(function (root, factory){
    if(typeof define === 'function' && define.amd){
        // AMD. Register as an anonymous module.
        define(['../distance'], factory);
    }else if (typeof module === 'object' && module.exports){
        module.exports = factory(require('../distance'));
    }else{
        // Browser globals (root is window)
        root.AsciiArtColorSampleDistance = factory(root.AsciiArtColorDistance);
    }
}(this, function(distance){
    return distance((r1, g1, b1, r2, g2, b2)=>{
        return (Math.abs(r1-r2)+Math.abs(g1-g2)+Math.abs(b1-b2)+
            Math.abs(Math.max(r1, g1, b1)-Math.max(r2, g2, b2))/2
        )/3 + Math.abs(Math.max(r1, g1, b1)-Math.max(r2, g2, b2))/2;
    });
}));
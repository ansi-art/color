(function (root, factory){
    if(typeof define === 'function' && define.amd){
        // AMD. Register as an anonymous module.
        define([
            './src/distance', 
            './src/color', 
            './src/palette', 
            './src/space', 
            './src/medium',
            './src/context'
        ], factory);
    }else if (typeof module === 'object' && module.exports){
        module.exports = factory(
            require('./src/distance'), 
            require('./src/color'), 
            require('./src/palette'), 
            require('./src/space'), 
            require('./src/medium'),
            require('./src/context')
        );
    }else{
        // Browser globals (root is window)
        root.AsciiArtColorRollup = factory(
            root.AsciiArtColorDistance, 
            root.AsciiArtColor,
            root.AsciiArtColorPalette,
            root.AsciiArtColorSpace,
            root.AsciiArtColorMedium,
            root.AsciiArtColorContext,
        );
    }
}(this, function(Distance, Color, Palette, Space, Medium, Context){
    
    return {
        Distance, 
        Color, 
        Palette, 
        Space, 
        Medium,
        Context,
        color256: (distanceFn)=>{
            
        },
        color16: (distanceFn)=>{
            
        },
        trueColor: ()=>{
            
        }
    };
}));
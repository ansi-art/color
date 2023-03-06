/**
 * This provides an abstraction for holding and transforming color representations
 */
declare module "@ansi-art/color/src/color" {
    /**
     * The default constructor for SubGridTransformer
     */
    class Color {
    }
    /**
     * The map implementation (provided by implementations)
     * @returns ansiColorCode
     */
    function ansi(depth: string | number): string;
    /**
     * The map implementation (provided by implementations)
     * @returns hexValue
     */
    function hex(): string;
    /**
     * The map implementation (provided by implementations)
     * @returns rgbArray
     */
    function rgb(): any[];
}

/**
 * This provides an abstraction for doing work in a color space
 */
declare module "@ansi-art/color/src/context" {
    /**
     * The default constructor for ColorContext
     */
    class ColorContext {
    }
    /**
     * get the mapped color for a particular color in this context
     * @returns ansiColorCode
     */
    function getColor(color: Color, palette: ColorPalette): string;
}

/**
 * get the distance between the provided color components
 */
declare module "@ansi-art/color/src/distance" {
    /**
     * get the distance between the provided color components
     * @returns wrappedDistanceFn
     */
    function colorDistance(distanceFn: (...params: any[]) => any): (...params: any[]) => any;
}

/**
 * This provides an abstraction for the color profiles associated with drawing output
 */
declare module "@ansi-art/color/src/medium" {
    /**
     * The default constructor for ColorMedium
     */
    class ColorMedium {
    }
    /**
     * get the mapped color for a particular color in this context
     * @returns ansiColorCode
     */
    function getColors(): any[];
}

/**
 * This provides an abstraction for performing color adhoc evaluations given a specific context (space + medium)
 */
declare module "@ansi-art/color/src/palette" {
    /**
     * The default constructor for ColorPalette
     */
    class ColorPalette {
    }
    /**
     * get the mapped color for a particular color in this context
     * @returns mappedHexColor
     */
    function interpretColor(hexColor: string): string;
    /**
     * get the mapped color for a particular color in this context
     * @returns hexValueArray
     */
    function getColors(): any[];
}

/**
 * This provides default set of colors in a given color space
 */
declare module "@ansi-art/color/src/space" {
    /**
     * The default constructor for ColorSpace
     */
    class ColorSpace {
    }
    /**
     * get the set of colors for this color space, given the provided output medium
     * @returns hexColorsArray
     */
    function getColors(medium: ColorMedium): any[];
}


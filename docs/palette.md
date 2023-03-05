<a name="module_@ansi-art/color/src/palette"></a>

## @ansi-art/color/src/palette
A module that shouts hello!


* [@ansi-art/color/src/palette](#module_@ansi-art/color/src/palette)
    * [~ColorPalette](#module_@ansi-art/color/src/palette..ColorPalette)
        * [new ColorPalette()](#new_module_@ansi-art/color/src/palette..ColorPalette_new)
    * [~interpretColor(hexColor)](#module_@ansi-art/color/src/palette..interpretColor) ⇒ <code>string</code>
    * [~getColors()](#module_@ansi-art/color/src/palette..getColors) ⇒ <code>Array</code>

<a name="module_@ansi-art/color/src/palette..ColorPalette"></a>

### @ansi-art/color/src/palette~ColorPalette
This provides an abstraction for performing color adhoc evaluations given a specific context (space + medium)

**Kind**: inner class of [<code>@ansi-art/color/src/palette</code>](#module_@ansi-art/color/src/palette)  
<a name="new_module_@ansi-art/color/src/palette..ColorPalette_new"></a>

#### new ColorPalette()
The default constructor for ColorPalette

<a name="module_@ansi-art/color/src/palette..interpretColor"></a>

### @ansi-art/color/src/palette~interpretColor(hexColor) ⇒ <code>string</code>
get the mapped color for a particular color in this context

**Kind**: inner method of [<code>@ansi-art/color/src/palette</code>](#module_@ansi-art/color/src/palette)  
**Returns**: <code>string</code> - mappedHexColor  

| Param | Type |
| --- | --- |
| hexColor | <code>string</code> | 

<a name="module_@ansi-art/color/src/palette..getColors"></a>

### @ansi-art/color/src/palette~getColors() ⇒ <code>Array</code>
get the mapped color for a particular color in this context

**Kind**: inner method of [<code>@ansi-art/color/src/palette</code>](#module_@ansi-art/color/src/palette)  
**Returns**: <code>Array</code> - hexValueArray  

@ansi-art/color
===============

Color and color space handling for ansi colors in terminal output.

Color
-----
This handles representation and conversion for a single color value
    
[AsciiArtColor](docs/color.md)

Context
-------
This handles and optimizes access to a color space for a specific usage context
    
[AsciiArtColorContext](docs/context.md)

Distance
--------
This is a function that defines how distance between colors is measured
    
[AsciiArtColorDistance](docs/distance.md)

Medium
------
This represents a variety of output mediums that have different color profiles. Currently supports `vga`, `darwin` and `xterm`.
    
[AsciiArtColorMedium](docs/medium.md)

Palette
-------
This handles conversions of a true color value to something in a colorspace using a particular color perception (distance function).
    
[AsciiArtColorPalette](docs/palette.md)

Space
-------
This handles the available color space.
    
[AsciiArtColorSpace](docs/space.md)

Testing
-------

just run `npm run test` or `npm run container-test`

Contribution
------------

Please PR contributions against `develop` with [jsdoc](https://jsdoc.app/) and [mocha](https://mochajs.org/) [tests]()  for the new functionality in place.

The project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and the [Fork + PR](https://gist.github.com/Chaser324/ce0505fbed06b947d962) development model.

All activities in the project are available as npm actions.

Enjoy,

Abbey Hawk Sparrow
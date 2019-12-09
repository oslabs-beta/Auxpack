# Auxpack
[![GitHub license](https://img.shields.io/github/license/Auxpack/Auxpack?style=flat-square)](https://github.com/Auxpack/Auxpack/blob/master/LICENSE)
![npm](https://img.shields.io/npm/v/auxpack?style=flat-square)
[![GitHub issues](https://img.shields.io/github/issues/Auxpack/Auxpack?style=flat-square)](https://github.com/Auxpack/Auxpack/issues)
[![GitHub forks](https://img.shields.io/github/forks/Auxpack/Auxpack?style=flat-square)](https://github.com/Auxpack/Auxpack/network)
![npm](https://img.shields.io/npm/dw/auxpack?style=flat-square)

Auxpack is the new, configurable, auxillary Webpack plugin that monitors relevent statistics from your build when using Webpack.

<<<<<<< HEAD
In order to get started, in your webpack.config.js file, require in our plugin with 

`const Auxpack = require('auxpack)`

and add a plugin key, or add another value into your plugin array if you have other plugins installed with

`plugin : [ new Auxpack(), ]` 
=======
## Installation

Install via `npm -D auxpack`

## Setup

```javascript
// webpack.config.js

const Auxpack = require('auxpack'); // import auxpack

modules.exports = [

// other configurations

  ... 
  
  plugins: [
  
    ...
    
    new Auxpack() // add new Auxpack into plugins
  ]
  
  ...
  
]

```
>>>>>>> ffeeddb2d5903769dc2ef453f9d0bde5452184ae

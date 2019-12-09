# Auxpack
[![GitHub license](https://img.shields.io/github/license/Auxpack/Auxpack?style=flat-square)](https://github.com/Auxpack/Auxpack/blob/master/LICENSE)
![npm](https://img.shields.io/npm/v/auxpack?style=flat-square)
[![GitHub issues](https://img.shields.io/github/issues/Auxpack/Auxpack?style=flat-square)](https://github.com/Auxpack/Auxpack/issues)
[![GitHub forks](https://img.shields.io/github/forks/Auxpack/Auxpack?style=flat-square)](https://github.com/Auxpack/Auxpack/network)
![npm](https://img.shields.io/npm/dw/auxpack?style=flat-square)

Auxpack is the new, configurable, auxillary Webpack plugin that monitors relevent statistics from your build when using Webpack.

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

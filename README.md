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

`plugin : [ new Auxpack(), ]` 

## Standalone server
If you just want to display the stats, without having to rebuild your project, `auxpack` publishes the `auxpack` executable to just launch the server.

```
  Usage: auxpack [options] [filename]
  Options:
    -V, --version     output the version number
    -p --port [port]  The port to run the server on (default: 8081)
    -f --filename     The json file to load stats from - Resolved relative to where the command is executed
    -h, --help        output usage information
```

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

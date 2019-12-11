# auxpack
[![GitHub license](https://img.shields.io/github/license/Auxpack/Auxpack?style=flat-square)](https://github.com/Auxpack/Auxpack/blob/master/LICENSE)
![npm](https://img.shields.io/npm/v/auxpack?style=flat-square)
[![GitHub issues](https://img.shields.io/github/issues/Auxpack/Auxpack?style=flat-square)](https://github.com/Auxpack/Auxpack/issues)
[![GitHub forks](https://img.shields.io/github/forks/Auxpack/Auxpack?style=flat-square)](https://github.com/Auxpack/Auxpack/network)
![npm](https://img.shields.io/npm/dw/auxpack?style=flat-square)

auxpack is the new, (soon-to-be) configurable Webpack plugin that monitors statistics from your production builds. Our interactive interface allows developers to better understand bundle composition to get a better grasp on optimization strategies.

## Installation

Install via `npm i -D auxpack`

## Setup

```javascript
// webpack.config.js

const Auxpack = require('auxpack'); // import auxpack

modules.exports = [
// other configurations
  ... 
  plugins: [
    ...
    new Auxpack() // add Auxpack into plugins
  ]
  ...
]

```

## Usage

By installing the plugin into your Webpack configuration, you can run 
`webpack`
within your scripts as you would in production bundling, and our plugin will launch on port 1111. (We'll be adding a user port configuration option soon!)

Please note that collecting information on your first auxpack build may take a moment; this occurs due to our plugin collecting data.

## Contributing

To contribute to `auxpack`, please fork this repository, clone it to your machine, then install dependencies with `npm install`. If you're interested in joining the auxpack team as a contributor, feel free to message one of us directly!

## Authors

* Nobuhide Ajito (https://github.com/najito)
* Stephanie Chiu (https://github.com/stephkchiu)
* Travis Clark (https://github.com/tm-clark)
* Connie Lai (https://github.com/connielion)

# webpack-monitor

Many thanks to Webpack Monitor for passing the torch.
https://github.com/webpackmonitor/webpackmonitor

## License

This project is licensed under the MIT license - see the LICENSE.md file for details
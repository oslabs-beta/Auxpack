## auxpack

auxpack is the new, configurable, auxillary Webpack plugin that monitors relevent statistics from your production builds when using Webpack. This interactive interface allows allows for developers to  better understand bundle composition and implement optimization strategies.

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
    new Auxpack() // add new Auxpack into plugins
  ]
  ...
]

```

## Usage

By installing the plugin into your Webpack plugins configuration, you can run 
`webpack`
within your scripts as you would in production bundling and our plugin will launch on port 1111.

Please note that collecting information the first time may take longer than expected, which occurs due to our plugin collecting data.

## Contributing
To contribute to `auxpax`, fork the repository and clone it to your machine then install dependencies with npm install. If you're interested in joining the Webpack Monitor team as a contributor, feel free to message one of us directly!

## Authors

* Nobuhide Ajito (https://github.com/najito)
* Stephanie Chiu (https://github.com/stephkchiu)
* Travis Clark (https://github.com/tm-clark)
* Connie Lai (https://github.com/connielion)

## License

This project is licensed under the MIT license - see the LICENSE.md file for details
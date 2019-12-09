# Auxpack

Auxpack is the new, configurable, auxillary Webpack plugin that monitors relevent statistics from your build when using Webpack.

In order to get started, in your webpack.config.js file, require in our plugin with 

`const Auxpack = require('auxpack)`

and add a plugin key, or add another value into your plugin array if you have other plugins installed with

`plugin : [ new Auxpack(), ]` 

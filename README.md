# Auxpack

Auxpack is the new, configurable, auxillary Webpack plugin that monitors relevent statistics from your build when using Webpack.

In order to get started, in your webpack.config.js file, require in our plugin with 

`const Auxpack = require('auxpack)`

and add a plugin key, or add another value into your plugin array if you have other plugins installed with

`plugin : [ new Auxpack(), ]` 

## Standalone server
If you just want to display the stats, without having to rebuild your project, `webpack-monitor` publishes the `webpack-monitor` executable to just launch the server.

```
  Usage: webpack-monitor [options] [filename]
  Options:
    -V, --version     output the version number
    -p --port [port]  The port to run the server on (default: 8081)
    -f --filename     The json file to load stats from - Resolved relative to where the command is executed
    -h, --help        output usage information
```
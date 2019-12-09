# auxpack
An elegant dashboard for monitoring your webpack builds. This npm package / plugin is still in development; please bear with us as we straighten out our frontend, as well as add more features and data visualization.

## Setup
```sh
npm i -D auxpack
```

in `webpack.config.js`
```js
const Auxpack = require('auxpack');

// ...

plugins: [
  new Auxpack({}),
],
```
^ configurations to come

# webpack-monitor
Many thanks to Webpack Monitor for passing the torch.
https://github.com/webpackmonitor/webpackmonitor
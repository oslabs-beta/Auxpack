const express = require('express');
const path = require('path');
const opener = require('opener');
const chalk = require('chalk');

module.exports = (data) => {
  const app = express();
  const PORT = 1111;
  const url = `http://localhost:${PORT}/`;

  app.use(express.static(path.join(__dirname, '..', 'build')));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });

  app.get('/getStats', (req, res) => {
    res.json(data);
  });

  app.listen(PORT, () => {
    opener(url)
    console.log(chalk.inverse(`Auxpack on port ${PORT}`))
    .on('error', err => {
      if (err.code === PORT_IN_USE_ERROR_CODE) {
          console.log("\n");
          console.log(colors.italic.red("auxpack couldn't be launched:", `Port ${PORT} is currently in use.`));
          console.log(colors.red("Make sure auxpack is only running once."));
          console.log(colors.gray("Error:"));
          console.error(err);
          console.log("\n", colors.gray("This would not effect the webpack build, nor auxpack, which is capturing the stats."), "\n");
      }
      // error was not a "port already in use". Don't swallow the error.
      else {
        throw err;
      }
  });
};
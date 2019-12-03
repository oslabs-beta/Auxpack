const express = require('express');
const opener = require('opener');
const chalk = require('chalk');

module.exports = (data) => {
  const app = express();
  const PORT = 3000;
  const url = `http://localhost:${PORT}/`;

  app.get('/', (req, res) => {
    res.json(data);
  });

  app.listen(PORT, () => {
    opener(url)
    console.log(chalk.inverse(`Auxpack on port ${PORT}`))
  });
};
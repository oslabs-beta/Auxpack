const express = require('express');
const path = require('path');
const opener = require('opener');
const chalk = require('chalk');

module.exports = (data, PORT) => {
  const app = express();
  if (!PORT) PORT = 1111;
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
  });
};
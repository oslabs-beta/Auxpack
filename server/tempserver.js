const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = 3000;

const options = {
  root: path.join(__dirname, '..', 'build')
};

app.use(express.static(options.root));

app.get('/getStats', (req, res) => {
  fs.readFile('aux-stats.json', (err, data) => {
    if (err) throw err;
    res.header("Content-Type", 'application/json');
    res.send(data);
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).send('Server Error');
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });
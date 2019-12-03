const express = require('express');
const path = require('path')
const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, '../src/assets')))
app.use(express.static('.'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../src/service-worker.js'))
})


app.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send('Server Error');
  });

  app.listen(PORT, () => { console.log(`Listening on port ${PORT}`);});
const express = require('express')
const path = require('path')

module.exports = (data, port, update) => {
    const app = express();
    const url = `http://localhost:${port}/`
    const options = {
        root: path.join(__dirname, '..', 'assets')
    }
    app.use(express.static(options.root));
    app.use(express.static(path.join(__dirname, '..', 'assets', 'css')))
}
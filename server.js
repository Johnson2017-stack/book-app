const express = require('express');
const ejs = require('ejs');
const bodyParser = require('bosy-parser');

const server = express()

server.use('views', './src/views');
server.use("view engine", 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const PORT=3000;

server.listen(PORT, () => {
    console.log('listen on port ${PORT}')
})
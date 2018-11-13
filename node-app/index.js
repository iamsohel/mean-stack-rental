const winston = require('winston');
const express = require('express');
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", 
    "GET, POST, PUT, DELETE, OPTIONS, PATCH"
    );
    next();
  });
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config');

const port = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;
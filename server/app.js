const express = require('express');
const cors = require('cors');

const app = express();
const config = require('./config');
const router = require('./routes');

// add white-listed domains
app.use(cors(config.cors));

app.use(router);

module.exports = app;
